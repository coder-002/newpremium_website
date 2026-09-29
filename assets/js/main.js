// ── LANGUAGE SYSTEM ──
const TRANSLATIONS = {
  en: {
    'nav-home': 'Home', 'nav-products': "Products <span class='nav-caret'>▾</span>", 'nav-cbs': 'Premium CBS', 'nav-about': 'About Us', 'nav-contact': 'Contact',
    'hero-eyebrow': "Nepal's Trusted CBS Provider",
    'hero-title': 'Transforming Financial Institutions Through Smart Digital Banking Solutions',
    'hero-lead': 'Empowering Cooperatives &amp; Microfinance Institutions with Secure, Scalable and Innovative Technology',
    'hero-desc': 'Premium Technologies Pvt. Ltd. is a Nepal-based software solution provider specializing in customized banking and financial technology solutions for Cooperatives, Microfinance Institutions, and Small to Medium Financial Organizations',
    'hero-demo': 'Schedule a Demo →', 'hero-products': 'View Products',
    'stat1-label': 'Years of Experience', 'stat1-sub': 'Est. 2015 · Kathmandu',
    'stat2-label': 'Clients', 'stat2-sub': 'Cooperatives · Microfinance · BFIs',
    'stat3-label': 'Provinces Covered', 'stat3-sub': 'Nationwide coverage',
    'stat4-label': 'Expert Team', 'stat4-sub': 'Specialists on the ground',
    'cta-title': 'Ready to modernize your institution?',
    'cta-desc': 'Join 450+ cooperatives and microfinances across Nepal who have upgraded to Premium CBS.',
    'cta-demo': 'Schedule a Free Demo', 'cta-phone': '📞 +977 9801-130700',
  },
  ne: {
    'nav-home': 'गृहपृष्ठ', 'nav-products': "उत्पादनहरू <span class='nav-caret'>▾</span>", 'nav-cbs': 'Premium CBS', 'nav-about': 'हाम्रोबारे', 'nav-contact': 'सम्पर्क',
    'hero-eyebrow': 'नेपालको विश्वसनीय CBS प्रदायक',
    'hero-title': "नेपालका वित्तीय<br><span class='accent'>संस्थाहरूको लागि</span><br>निर्मित ब्याङ्किङ प्रणाली।",
    'hero-desc': 'प्रिमियम टेक्नोलोजीजले सहकारी, लघुवित्त र क्रेडिट युनियनहरूलाई सबै ७ प्रदेशमा सञ्चालन गर्दछ।',
    'hero-demo': 'डेमो तालिका गर्नुहोस् →', 'hero-products': 'उत्पादनहरू हेर्नुहोस्',
    'stat1-label': 'वर्षको अनुभव', 'stat1-sub': 'स्थापना २०१५ · काठमाडौं',
    'stat2-label': 'ग्राहकहरू', 'stat2-sub': 'सहकारी · लघुवित्त · BFI',
    'stat3-label': 'प्रदेश समेटिएका', 'stat3-sub': 'राष्ट्रव्यापी कवरेज',
    'stat4-label': 'विशेषज्ञ टोली', 'stat4-sub': 'मैदानमा विशेषज्ञहरू',
    'cta-title': 'आफ्नो संस्था आधुनिकीकरण गर्न तयार हुनुहुन्छ?',
    'cta-desc': 'नेपालभरका ४५०+ सहकारी र लघुवित्तहरूसँग सामेल हुनुहोस् जसले Premium CBS मा अपग्रेड गरेका छन्।',
    'cta-demo': 'नि:शुल्क डेमो तालिका गर्नुहोस्', 'cta-phone': '📞 +977 9801-130700',
  }
};

let currentLang = 'en';

function setLang(lang) {
  currentLang = lang;
  document.getElementById('btn-en').classList.toggle('active', lang === 'en');
  document.getElementById('btn-ne').classList.toggle('active', lang === 'ne');
  document.body.classList.toggle('ne', lang === 'ne');

  // Translate all data-en / data-ne elements
  document.querySelectorAll('[data-en]').forEach(el => {
    const val = el.getAttribute('data-' + lang);
    if (val) el.innerHTML = val;
  });

  // Specific keyed translations
  const t = TRANSLATIONS[lang];
  const set = (sel, key) => { const el = document.querySelector(sel); if (el && t[key]) el.innerHTML = t[key]; };
  set('[data-page="home"]', 'nav-home');
  set('[data-page="products"]', 'nav-products');
  set('[data-page="cbs"]', 'nav-cbs');
  set('[data-page="about"]', 'nav-about');
  set('[data-page="contact"]', 'nav-contact');

  translatePage(lang);
  const eyebrow = document.querySelector('.hero-eyebrow .type-text');
  if (eyebrow) {
    if (!eyebrow.dataset.textEn) eyebrow.dataset.textEn = eyebrow.getAttribute('data-text') || '';
    const en = eyebrow.dataset.textEn;
    const full = lang === 'ne' ? ((window.NE_TEXT || {})[en] || en) : en;
    eyebrow.setAttribute('data-text', full);
    eyebrow.textContent = full;
  }
}

const TRANSLATED_ATTRS = ['alt', 'placeholder', 'aria-label', 'title'];

function translatePage(lang, root) {
  const dict = window.NE_TEXT || {};
  const attrDict = window.NE_ATTR || {};
  root = root || document.body;

  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
    acceptNode(node) {
      const parent = node.parentElement;
      if (!parent || parent.closest('script, style, [data-en], .type-text')) return NodeFilter.FILTER_REJECT;
      return node.__en !== undefined || node.nodeValue.trim() ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT;
    }
  });
  const nodes = [];
  while (walker.nextNode()) nodes.push(walker.currentNode);
  nodes.forEach(node => {
    if (node.__en === undefined) {
      const key = node.nodeValue.replace(/\s+/g, ' ').trim();
      if (!dict[key]) return;
      node.__en = node.nodeValue;
      node.__key = key;
    }
    if (lang === 'ne') {
      const m = node.__en.match(/^(\s*)[\s\S]*?(\s*)$/);
      node.nodeValue = m[1] + dict[node.__key] + m[2];
    } else {
      node.nodeValue = node.__en;
    }
  });

  TRANSLATED_ATTRS.forEach(attr => {
    root.querySelectorAll('[' + attr + ']').forEach(el => {
      const store = 'data-en-' + attr;
      const en = el.getAttribute(store) || el.getAttribute(attr);
      const ne = attrDict[attr + '::' + en.replace(/\s+/g, ' ').trim()];
      if (!ne) return;
      el.setAttribute(store, en);
      el.setAttribute(attr, lang === 'ne' ? ne : en);
    });
  });
}

// ── ROUTER ──
const PRODUCT_PAGES = ['products', 'cbs', 'cbs-lite', 'mobile', 'atm', 'sms', 'tablet'];

function toggleMenu() {
  document.querySelector('nav').classList.toggle('menu-open');
}

function toggleDropdown(event) {
  event.preventDefault();
  event.stopPropagation();
  const item = event.currentTarget.closest('.nav-item');
  const willOpen = !item.classList.contains('open');
  document.querySelectorAll('.nav-item.open').forEach(n => n.classList.remove('open'));
  item.classList.toggle('open', willOpen);
}

document.addEventListener('click', () => {
  document.querySelectorAll('.nav-item.open').forEach(n => n.classList.remove('open'));
});

const CLIENT_COLORS = ['#1A7EFF', '#0A2540', '#10B981', '#7C3AED', '#F59E0B', '#EF4444', '#0E7490', '#BE185D', '#374151', '#065F46', '#92400E', '#1E3A5F'];

function clientInitials(name) {
  return name.split(/\s+/).filter(w => /^[A-Za-z]/.test(w)).slice(0, 2).map(w => w[0].toUpperCase()).join('') || name.slice(0, 2).toUpperCase();
}

function clientChip(client, i) {
  const card = document.createElement('div');
  card.className = 'client-card';
  const mark = document.createElement('div');
  mark.className = 'client-card-logo';
  const showInitials = () => {
    mark.classList.remove('has-img');
    mark.classList.add('is-initials');
    mark.textContent = clientInitials(client.name);
    mark.style.setProperty('--client-color', CLIENT_COLORS[i % CLIENT_COLORS.length]);
  };
  if (client.logo) {
    const img = document.createElement('img');
    img.src = client.logo;
    img.alt = client.name + ' logo';
    img.loading = 'lazy';
    img.decoding = 'async';
    img.onerror = () => { img.remove(); showInitials(); };
    mark.classList.add('has-img');
    mark.appendChild(img);
  } else {
    showInitials();
  }
  const name = document.createElement('div');
  name.className = 'client-card-name';
  name.textContent = client.name;
  card.append(mark, name);
  const meta = client.address || [client.type, client.location].filter(Boolean).join(' · ');
  if (meta) {
    const addr = document.createElement('div');
    addr.className = 'client-card-meta';
    addr.innerHTML = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 22s7-6.2 7-12a7 7 0 1 0-14 0c0 5.8 7 12 7 12z"/><circle cx="12" cy="10" r="2.5"/></svg>';
    addr.appendChild(document.createTextNode(meta));
    card.appendChild(addr);
  }
  return card;
}

function renderClients() {
  const clients = (window.PREMIUM_CLIENTS || []).filter(c => c && c.name && c.logo);
  const rows = [document.getElementById('logoTrack'), document.getElementById('logoTrack2')].filter(Boolean);
  if (!clients.length || !rows.length || rows[0].childElementCount) return;
  rows.forEach((track, r) => {
    const list = rows.length > 1 ? clients.filter((_, i) => i % rows.length === r) : clients;
    [...list, ...list].forEach((c, i) => {
      const card = clientChip(c, i + r);
      if (i >= list.length) card.setAttribute('aria-hidden', 'true');
      track.appendChild(card);
    });
    track.style.animationDuration = Math.max(40, list.length * 4) + 's';
  });
}

const ABOUT_CLIENTS_INITIAL = 20;

function fillAboutClients() {
  const dest = document.getElementById('aboutClients');
  if (!dest || dest.childElementCount) return;
  const clients = (window.PREMIUM_CLIENTS || []).filter(c => c && c.name);
  clients.slice(0, ABOUT_CLIENTS_INITIAL).forEach((c, i) => dest.appendChild(clientChip(c, i)));
  if (currentLang === 'ne') translatePage('ne', dest);
  initCardMotion(dest);
}

// ── CARD MOTION ──
const MOTION_CARDS = '.product-card, .why-cbs-card, .feature-item, .arch-card, .compliance-card, .receipt-card, .testimonial-card, .contact-card, .pillar-item, .integration-chip, .client-card, .team-card';
let cardObserver;
function initCardMotion(root = document) {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  if (!cardObserver) {
    cardObserver = new IntersectionObserver(entries => entries.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add('is-in'); cardObserver.unobserve(e.target); }
    }), { threshold: 0.12, rootMargin: '0px 0px -6% 0px' });
  }
  root.querySelectorAll(MOTION_CARDS).forEach(card => {
    if (card.dataset.motion) return;
    card.dataset.motion = '1';
    const i = [...card.parentElement.children].indexOf(card);
    card.style.setProperty('--float-delay', -((i % 5) * 0.9) + 's');
    if (card.closest('.logo-bar-track')) return;
    card.style.setProperty('--reveal-delay', (i % 6) * 0.08 + 's');
    card.classList.add('reveal-card');
    cardObserver.observe(card);
  });
}
document.addEventListener('pointermove', e => {
  const card = e.target.closest && e.target.closest(MOTION_CARDS);
  if (!card) return;
  const r = card.getBoundingClientRect();
  card.style.setProperty('--mx', (e.clientX - r.left) + 'px');
  card.style.setProperty('--my', (e.clientY - r.top) + 'px');
}, { passive: true });
if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', () => initCardMotion());
else initCardMotion();

if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', renderClients);
else renderClients();

function navigate(page, section) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  const target = document.getElementById('page-' + page);
  if (target) target.classList.add('active');
  document.querySelectorAll('.nav-links a').forEach(a => {
    const key = a.dataset.page;
    const active = key === 'products' ? PRODUCT_PAGES.includes(page) : key === page;
    a.classList.toggle('active', active);
  });
  document.querySelector('nav').classList.remove('menu-open');
  document.querySelectorAll('.nav-item.open').forEach(n => n.classList.remove('open'));
  if (page === 'about') fillAboutClients();
  const sectionEl = section ? document.getElementById(section) : null;
  if (sectionEl) sectionEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
  else window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ── COVERAGE ──
function typeEyebrow() {
  const el = document.querySelector('.hero-eyebrow .type-text');
  if (!el) return;
  const full = el.getAttribute('data-text') || '';
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    el.textContent = full;
    return;
  }
  el.textContent = '';
  let i = 0;
  const tick = () => {
    if (el.getAttribute('data-text') !== full) return;
    el.textContent = full.slice(0, i);
    if (i < full.length) {
      i += 1;
      setTimeout(tick, 55);
    }
  };
  setTimeout(tick, 350);
}

function initCoverageBlink() {
  const nodes = [...document.querySelectorAll('#coverageMap .cov-prov')];
  if (!nodes.length) return;
  let i = 0;
  const tick = () => {
    nodes.forEach(n => n.classList.remove('is-lit'));
    nodes[i].classList.add('is-lit');
    i = (i + 1) % nodes.length;
  };
  tick();
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  setInterval(tick, 1400);
}
function initAppSlider() {
  const root = document.querySelector('[data-app-slider]');
  if (!root || root.dataset.ready) return;
  root.dataset.ready = '1';
  const slides = [...root.querySelectorAll('.app-slide')];
  const dots = [...root.querySelectorAll('.app-dots button')];
  const title = root.querySelector('.app-caption strong');
  const note = root.querySelector('.app-caption span');
  let index = 0;
  const show = (n) => {
    index = (n + slides.length) % slides.length;
    slides.forEach((slide, i) => {
      const on = i === index;
      slide.classList.toggle('is-active', on);
      slide.setAttribute('aria-hidden', on ? 'false' : 'true');
    });
    dots.forEach((dot, i) => dot.classList.toggle('is-active', i === index));
    const current = slides[index];
    title.textContent = current.getAttribute('data-name');
    note.textContent = current.getAttribute('data-note');
  };
  show(0);
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  setInterval(() => show(index + 1), 3500);
  root.querySelectorAll('.app-nav').forEach(btn => {
    btn.addEventListener('click', () => show(index + Number(btn.dataset.dir)));
  });
  dots.forEach((dot, i) => dot.addEventListener('click', () => show(i)));
}

function initHeroSlider() {
  const root = document.querySelector('[data-hero-slider]');
  if (!root || root.dataset.ready) return;
  root.dataset.ready = '1';
  const slides = [...root.querySelectorAll('.hero-slide')];
  const dotsWrap = root.querySelector('.hero-slider-dots');
  const dots = slides.map((slide, i) => {
    const dot = document.createElement('button');
    dot.type = 'button';
    dot.setAttribute('role', 'tab');
    dot.setAttribute('aria-label', slide.querySelector('figcaption').textContent);
    dot.addEventListener('click', () => { show(i); restart(); });
    dotsWrap.appendChild(dot);
    return dot;
  });
  let index = 0, timer = null;
  const show = (n) => {
    const next = (n + slides.length) % slides.length;
    if (next === index && slides[index].classList.contains('is-active')) return;
    slides[index].classList.remove('is-active');
    slides[index].classList.add('is-leaving');
    const prev = slides[index];
    setTimeout(() => prev.classList.remove('is-leaving'), 1000);
    index = next;
    slides[index].classList.remove('is-leaving');
    slides[index].classList.add('is-active');
    dots.forEach((d, i) => { d.classList.toggle('is-active', i === index); d.setAttribute('aria-selected', i === index ? 'true' : 'false'); });
  };
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const restart = () => { clearInterval(timer); if (!reduced) timer = setInterval(() => show(index + 1), 4500); };
  dots[0].classList.add('is-active');
  dots[0].setAttribute('aria-selected', 'true');
  if (reduced) return;
  root.addEventListener('mouseenter', () => clearInterval(timer));
  root.addEventListener('mouseleave', restart);
  restart();
}
if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', initHeroSlider);
else initHeroSlider();

window.addEventListener('load', initCoverageBlink);
window.addEventListener('load', typeEyebrow);
if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', initAppSlider);
else initAppSlider();

function initTimeline() {
  const tl = document.querySelector('.timeline');
  if (!tl || tl.dataset.ready) return;
  tl.dataset.ready = '1';
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  tl.classList.add('tl-js');
  const io = new IntersectionObserver(entries => entries.forEach(e => {
    if (e.isIntersecting) { e.target.classList.add('is-visible'); io.unobserve(e.target); }
  }), { threshold: 0.2, rootMargin: '0px 0px -8% 0px' });
  tl.querySelectorAll('.timeline-item').forEach(item => io.observe(item));
  const update = () => {
    const r = tl.getBoundingClientRect();
    if (!r.height) return;
    const p = Math.min(1, Math.max(0, (window.innerHeight * 0.65 - r.top) / r.height));
    tl.style.setProperty('--tl-progress', p.toFixed(3));
  };
  window.addEventListener('scroll', update, { passive: true });
  window.addEventListener('resize', update);
  update();
}
if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', initTimeline);
else initTimeline();

// ── STAT COUNTERS ──
function animateCounters() {
  const data = [{id:'s1',t:12,s:'+'},{id:'s2',t:450,s:'+'},{id:'s3',t:7,s:'/7'},{id:'s4',t:30,s:'+'}];
  data.forEach(c => {
    const el = document.getElementById(c.id); if(!el) return;
    let cur=0; const inc=c.t/60;
    const iv=setInterval(()=>{
      cur=Math.min(cur+inc,c.t);
      el.innerHTML=`${Math.floor(cur)}<span class="plus">${c.s}</span>`;
      if(cur>=c.t) clearInterval(iv);
    },16);
  });
}
const statsObs = new IntersectionObserver(entries=>{
  if(entries[0].isIntersecting){animateCounters();statsObs.disconnect();}
},{threshold:0.5});
const sb=document.querySelector('.stats-bar'); if(sb) statsObs.observe(sb);

// ── FEATURE TABS ──
function showTab(id) {
  document.querySelectorAll('.feature-tab').forEach(t=>t.classList.remove('active'));
  document.querySelectorAll('.feature-panel').forEach(p=>p.classList.remove('active'));
  event.target.classList.add('active');
  document.getElementById('tab-'+id).classList.add('active');
}

// ── FAQ ──
function toggleFaq(el) {
  const item = el.parentElement;
  item.classList.toggle('open');
}

// ── FORM ──
function submitForm(e) {
  if (e) e.preventDefault();
  const form = document.getElementById('demoForm');
  const name = form.querySelector('[name="name"]').value.trim();
  const phone = form.querySelector('[name="phone"]').value.trim();
  const inst = form.querySelector('[name="institution"]').value.trim();
  if (!name || !phone || !inst) {
    alert(currentLang === 'ne' ? 'कृपया सबै आवश्यक फिल्डहरू भर्नुहोस्।' : 'Please fill in all required fields.');
    return;
  }
  // POST to Formspree (replace YOUR_FORM_ID with actual Formspree endpoint)
  const data = new FormData(form);
  fetch('https://formspree.io/f/xpwzgnjp', { method: 'POST', body: data, headers: { Accept: 'application/json' } })
    .catch(() => {}); // silently handle - always show success for demo
  document.getElementById('form-body').style.display = 'none';
  document.getElementById('form-success').style.display = 'block';
}

function toggleCheck(label) {
  label.classList.toggle('checked');
}

function updateProgress() {
  const form = document.getElementById('demoForm');
  if (!form) return;
  const name = form.querySelector('[name="name"]').value.trim();
  const inst = form.querySelector('[name="institution"]').value.trim();
  const phone = form.querySelector('[name="phone"]').value.trim();
  const type = form.querySelector('[name="institution_type"]').value;
  const filled = [name, inst, phone, type].filter(Boolean).length;
  document.getElementById('sd1').className = 'form-step-dot done';
  document.getElementById('sd2').className = 'form-step-dot ' + (filled >= 2 ? 'done' : 'active');
  document.getElementById('sd3').className = 'form-step-dot ' + (filled >= 4 ? 'done' : filled >= 2 ? 'active' : '');
}
