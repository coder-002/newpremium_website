// DOM enhancements for the server-rendered page markup. Each init returns a cleanup function.
type Cleanup = () => void;
const noop: Cleanup = () => {};

export const reducedMotion = () => window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const MOTION_CARDS =
  ".product-card, .why-cbs-card, .feature-item, .arch-card, .compliance-card, .receipt-card, .testimonial-card, .contact-card, .pillar-item, .integration-chip, .client-card, .team-card";

export function initCardMotion(root: ParentNode): Cleanup {
  const onMove = (e: PointerEvent) => {
    const card = (e.target as Element | null)?.closest?.(MOTION_CARDS) as HTMLElement | null;
    if (!card) return;
    const r = card.getBoundingClientRect();
    card.style.setProperty("--mx", `${e.clientX - r.left}px`);
    card.style.setProperty("--my", `${e.clientY - r.top}px`);
  };
  document.addEventListener("pointermove", onMove, { passive: true });
  if (reducedMotion()) return () => document.removeEventListener("pointermove", onMove);

  const io = new IntersectionObserver(
    (entries) =>
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add("is-in");
          io.unobserve(e.target);
        }
      }),
    { threshold: 0.12, rootMargin: "0px 0px -6% 0px" },
  );
  root.querySelectorAll<HTMLElement>(MOTION_CARDS).forEach((card) => {
    if (card.closest(".logo-bar-track") || !card.parentElement) return;
    const i = Array.from(card.parentElement.children).indexOf(card);
    card.style.setProperty("--reveal-delay", `${(i % 6) * 0.08}s`);
    card.classList.add("reveal-card");
    io.observe(card);
  });
  return () => {
    io.disconnect();
    document.removeEventListener("pointermove", onMove);
  };
}

export function initHeroSlider(root: ParentNode): Cleanup {
  const el = root.querySelector<HTMLElement>("[data-hero-slider]");
  if (!el) return noop;
  const slides = Array.from(el.querySelectorAll<HTMLElement>(".hero-slide"));
  const dotsWrap = el.querySelector<HTMLElement>(".hero-slider-dots");
  if (!slides.length || !dotsWrap) return noop;

  let index = 0;
  let timer: ReturnType<typeof setInterval> | undefined;
  const reduced = reducedMotion();
  dotsWrap.replaceChildren();

  const show = (n: number) => {
    const next = (n + slides.length) % slides.length;
    if (next === index && slides[index].classList.contains("is-active")) return;
    const prev = slides[index];
    prev.classList.remove("is-active");
    prev.classList.add("is-leaving");
    setTimeout(() => prev.classList.remove("is-leaving"), 1000);
    index = next;
    slides[index].classList.remove("is-leaving");
    slides[index].classList.add("is-active");
    dots.forEach((d, i) => {
      d.classList.toggle("is-active", i === index);
      d.setAttribute("aria-selected", i === index ? "true" : "false");
    });
  };
  const restart = () => {
    clearInterval(timer);
    if (!reduced) timer = setInterval(() => show(index + 1), 4500);
  };
  const dots = slides.map((slide, i) => {
    const dot = document.createElement("button");
    dot.type = "button";
    dot.setAttribute("role", "tab");
    dot.setAttribute("aria-label", slide.querySelector("figcaption")?.textContent ?? `Slide ${i + 1}`);
    dot.addEventListener("click", () => {
      show(i);
      restart();
    });
    dotsWrap.appendChild(dot);
    return dot;
  });
  dots[0].classList.add("is-active");
  dots[0].setAttribute("aria-selected", "true");

  const pause = () => clearInterval(timer);
  if (!reduced) {
    el.addEventListener("mouseenter", pause);
    el.addEventListener("mouseleave", restart);
    restart();
  }
  return () => {
    clearInterval(timer);
    el.removeEventListener("mouseenter", pause);
    el.removeEventListener("mouseleave", restart);
    dotsWrap.replaceChildren();
  };
}

export function initAppSlider(root: ParentNode): Cleanup {
  const el = root.querySelector<HTMLElement>("[data-app-slider]");
  if (!el) return noop;
  const slides = Array.from(el.querySelectorAll<HTMLElement>(".app-slide"));
  const dots = Array.from(el.querySelectorAll<HTMLButtonElement>(".app-dots button"));
  const title = el.querySelector(".app-caption strong");
  const note = el.querySelector(".app-caption span");
  if (!slides.length) return noop;

  let index = 0;
  const show = (n: number) => {
    index = (n + slides.length) % slides.length;
    slides.forEach((s, i) => {
      s.classList.toggle("is-active", i === index);
      s.setAttribute("aria-hidden", i === index ? "false" : "true");
    });
    dots.forEach((d, i) => d.classList.toggle("is-active", i === index));
    if (title) title.textContent = slides[index].dataset.name ?? "";
    if (note) note.textContent = slides[index].dataset.note ?? "";
  };
  show(0);

  const onClick = (e: Event) => {
    const target = e.target as HTMLElement;
    const nav = target.closest<HTMLElement>(".app-nav");
    if (nav) return show(index + Number(nav.dataset.dir));
    const dot = target.closest("button");
    const i = dot ? dots.indexOf(dot as HTMLButtonElement) : -1;
    if (i >= 0) show(i);
  };
  el.addEventListener("click", onClick);
  const timer = reducedMotion() ? undefined : setInterval(() => show(index + 1), 3500);
  return () => {
    clearInterval(timer);
    el.removeEventListener("click", onClick);
  };
}

export function initTimeline(root: ParentNode): Cleanup {
  const tl = root.querySelector<HTMLElement>(".timeline");
  if (!tl || reducedMotion()) return noop;
  tl.classList.add("tl-js");
  const io = new IntersectionObserver(
    (entries) =>
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add("is-visible");
          io.unobserve(e.target);
        }
      }),
    { threshold: 0.2, rootMargin: "0px 0px -8% 0px" },
  );
  tl.querySelectorAll(".timeline-item").forEach((item) => io.observe(item));
  const update = () => {
    const r = tl.getBoundingClientRect();
    if (!r.height) return;
    const p = Math.min(1, Math.max(0, (window.innerHeight * 0.65 - r.top) / r.height));
    tl.style.setProperty("--tl-progress", p.toFixed(3));
  };
  window.addEventListener("scroll", update, { passive: true });
  window.addEventListener("resize", update);
  update();
  return () => {
    io.disconnect();
    window.removeEventListener("scroll", update);
    window.removeEventListener("resize", update);
  };
}

const COUNTERS = [
  { id: "s1", target: 12, suffix: "+" },
  { id: "s2", target: 450, suffix: "+" },
  { id: "s3", target: 7, suffix: "/7" },
  { id: "s4", target: 30, suffix: "+" },
];

export function initStatsCounter(root: ParentNode): Cleanup {
  const bar = root.querySelector(".stats-bar");
  if (!bar || reducedMotion()) return noop;
  const timers: ReturnType<typeof setInterval>[] = [];
  const run = () =>
    COUNTERS.forEach(({ id, target, suffix }) => {
      const el = document.getElementById(id);
      if (!el) return;
      let cur = 0;
      const timer = setInterval(() => {
        cur = Math.min(cur + target / 60, target);
        el.innerHTML = `${Math.floor(cur)}<span class="plus">${suffix}</span>`;
        if (cur >= target) clearInterval(timer);
      }, 16);
      timers.push(timer);
    });
  const io = new IntersectionObserver(
    (entries) => {
      if (entries[0].isIntersecting) {
        run();
        io.disconnect();
      }
    },
    { threshold: 0.5 },
  );
  io.observe(bar);
  return () => {
    io.disconnect();
    timers.forEach(clearInterval);
  };
}

export function initCoverageBlink(root: ParentNode): Cleanup {
  const nodes = Array.from(root.querySelectorAll("#coverageMap .cov-prov"));
  if (!nodes.length) return noop;
  let i = 0;
  const tick = () => {
    nodes.forEach((n) => n.classList.remove("is-lit"));
    nodes[i].classList.add("is-lit");
    i = (i + 1) % nodes.length;
  };
  tick();
  if (reducedMotion()) return noop;
  const timer = setInterval(tick, 1400);
  return () => clearInterval(timer);
}

export function initFaq(root: HTMLElement): Cleanup {
  const onClick = (e: Event) => {
    const q = (e.target as HTMLElement).closest("[data-faq-toggle]");
    q?.parentElement?.classList.toggle("open");
  };
  root.addEventListener("click", onClick);
  return () => root.removeEventListener("click", onClick);
}

export function initFeatureTabs(root: HTMLElement): Cleanup {
  const onClick = (e: Event) => {
    const tab = (e.target as HTMLElement).closest<HTMLElement>("[data-tab]");
    if (!tab) return;
    root.querySelectorAll(".feature-tab").forEach((t) => t.classList.remove("active"));
    root.querySelectorAll(".feature-panel").forEach((p) => p.classList.remove("active"));
    tab.classList.add("active");
    root.querySelector(`#tab-${tab.dataset.tab}`)?.classList.add("active");
  };
  root.addEventListener("click", onClick);
  return () => root.removeEventListener("click", onClick);
}
