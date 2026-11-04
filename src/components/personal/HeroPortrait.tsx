import { useEffect, useRef, useState } from "react";
import PortraitBanner from "./PortraitBanner";
import { portraitSlides } from "./portraitSlides";
import "./HeroPortrait.css";

const portraitLoads = new Map<string, Promise<boolean>>();

function preparePortrait(source: string) {
  const existing = portraitLoads.get(source);
  if (existing) return existing;
  const image = new Image();
  image.decoding = "async";
  image.src = source;
  const ready = image
    .decode()
    .then(() => true)
    .catch(() => {
      portraitLoads.delete(source);
      return false;
    });
  portraitLoads.set(source, ready);
  return ready;
}

export default function HeroPortrait() {
  const figureRef = useRef<HTMLElement>(null);
  const [selection, setSelection] = useState({
    index: 0,
    previous: null as number | null,
    version: 0,
  });
  const [paused, setPaused] = useState(false);
  const [visible, setVisible] = useState(false);
  const [documentVisible, setDocumentVisible] = useState(true);
  const [reducedMotion, setReducedMotion] = useState(false);
  const [busy, setBusy] = useState(false);
  const [ready, setReady] = useState(false);
  const nextInProgress = useRef(false);
  const running =
    ready && visible && documentVisible && !paused && !reducedMotion;
  const current = portraitSlides[selection.index];
  const previous =
    selection.previous === null
      ? undefined
      : portraitSlides[selection.previous];

  useEffect(() => {
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    function updatePreference() {
      setReducedMotion(preference.matches);
    }
    updatePreference();
    preference.addEventListener("change", updatePreference);
    return () => preference.removeEventListener("change", updatePreference);
  }, []);

  useEffect(() => {
    function updateVisibility() {
      setDocumentVisible(!document.hidden);
    }
    updateVisibility();
    document.addEventListener("visibilitychange", updateVisibility);
    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.2 },
    );
    if (figureRef.current) observer.observe(figureRef.current);
    return () => {
      observer.disconnect();
      document.removeEventListener("visibilitychange", updateVisibility);
    };
  }, []);

  useEffect(() => {
    if (visible)
      void preparePortrait(
        portraitSlides[(selection.index + 1) % portraitSlides.length].image,
      );
  }, [selection.index, visible]);

  useEffect(() => {
    if (!running) return;
    let active = true;
    const timer = window.setTimeout(async () => {
      const next = (selection.index + 1) % portraitSlides.length;
      const ready = await preparePortrait(portraitSlides[next].image);
      if (active && ready)
        setSelection((value) => ({
          index: next,
          previous: value.index,
          version: value.version + 1,
        }));
    }, 4000);
    return () => {
      active = false;
      window.clearTimeout(timer);
    };
  }, [running, selection.index, selection.version]);

  useEffect(() => {
    if (selection.previous === null) return;
    const timer = window.setTimeout(
      () => setSelection((value) => ({ ...value, previous: null })),
      900,
    );
    return () => window.clearTimeout(timer);
  }, [selection.previous, selection.version]);

  async function advancePortrait() {
    if (nextInProgress.current) return;
    nextInProgress.current = true;
    setBusy(true);
    const next = (selection.index + 1) % portraitSlides.length;
    const ready = await preparePortrait(portraitSlides[next].image);
    if (ready)
      setSelection((value) => ({
        index: next,
        previous: value.index,
        version: value.version + 1,
      }));
    setBusy(false);
    nextInProgress.current = false;
  }

  return (
    <div className="portfolio-hero__portrait">
      <figure
        className="portfolio-hero__photograph"
        ref={figureRef}
        data-portrait={current.id}
        data-running={running}
      >
        <div className="hero-portrait__images">
          {previous && (
            <img
              className="portfolio-hero__photo hero-portrait__image hero-portrait__image--previous"
              src={previous.image}
              alt=""
              aria-hidden="true"
              data-portrait={previous.id}
              width={previous.width}
              height={previous.height}
              key={`previous-${selection.version}`}
            />
          )}
          <img
            className={`portfolio-hero__photo hero-portrait__image hero-portrait__image--current${selection.version > 0 ? " hero-portrait__image--arriving" : ""}`}
            src={current.image}
            alt={`Ravada Ratnakar, ${current.title}`}
            data-portrait={current.id}
            width={current.width}
            height={current.height}
            fetchPriority={selection.index === 0 ? "high" : "auto"}
            decoding="async"
            onLoad={() => setReady(true)}
            key={`current-${selection.version}`}
          />
        </div>
        <PortraitBanner
          subtitle={current.title}
          previousSubtitle={previous?.title}
          version={selection.version}
          paused={paused}
          reducedMotion={reducedMotion}
          running={running}
          busy={busy}
          onTogglePaused={() => setPaused((value) => !value)}
          onNext={advancePortrait}
        />
      </figure>
    </div>
  );
}
