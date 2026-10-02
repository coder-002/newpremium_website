"use client";

import { useEffect, useRef } from "react";
import {
  initAppSlider,
  initCardMotion,
  initCoverageBlink,
  initFaq,
  initFeatureTabs,
  initHeroSlider,
  initStatsCounter,
  initTimeline,
} from "./effects";

/** Mount at the end of a page: wires sliders, counters, timeline, card motion, FAQ and tabs within that page. */
export default function PageEffects() {
  const marker = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const page = marker.current?.closest<HTMLElement>(".page");
    if (!page) return;
    const cleanups = [
      initCardMotion(page),
      initHeroSlider(page),
      initAppSlider(page),
      initTimeline(page),
      initStatsCounter(page),
      initCoverageBlink(page),
      initFaq(page),
      initFeatureTabs(page),
    ];
    return () => cleanups.forEach((fn) => fn());
  }, []);

  return <span ref={marker} hidden />;
}
