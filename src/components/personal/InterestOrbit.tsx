import { useEffect, useId, useRef, useState } from "react";
import {
  Code2,
  Cpu,
  Film,
  Gamepad2,
  MapPin,
  Pause,
  Play,
  Utensils,
} from "lucide-react";
import InterestScene from "./InterestScenes";
import { interestProfiles, type InterestId } from "./interestProfiles";
import "./InterestOrbit.css";

type Interest = InterestId;

const interestLabels: Record<Interest, string> = {
  tech: "Tech",
  code: "Code",
  movies: "Movies",
  badminton: "Badminton",
  games: "Online games",
  food: "Food",
  travel: "Travel",
};
const interests = interestProfiles.map((profile) => ({
  id: profile.id,
  label: interestLabels[profile.id],
}));

function InterestIcon({ interest }: { interest: Interest }) {
  if (interest === "tech") return <Cpu />;
  if (interest === "code") return <Code2 />;
  if (interest === "movies") return <Film />;
  if (interest === "games") return <Gamepad2 />;
  if (interest === "food") return <Utensils />;
  if (interest === "travel") return <MapPin />;
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <ellipse
        cx="14.3"
        cy="8.5"
        rx="5.4"
        ry="7"
        transform="rotate(35 14.3 8.5)"
      />
      <path d="m10.5 14-6 8M11.4 3l8 9M8.8 6l8 9M11 2.8 8.8 13M15 2l-3 13M19 4l-3 10M5 19l2 1.5" />
    </svg>
  );
}

function SceneGraphic({ interest }: { interest: Interest }) {
  return <InterestScene interest={interest} />;
}

const cycleDuration = 4000;
const interestCount = interests.length;
const wrapIndex = (index: number) =>
  ((index % interestCount) + interestCount) % interestCount;

interface InterestOrbitProps {
  onInterestChange?: (interest: InterestId, manual: boolean) => void;
  descriptionId?: string;
}
export default function InterestOrbit({
  onInterestChange,
  descriptionId,
}: InterestOrbitProps) {
  const [selection, setSelection] = useState({
    step: 0,
    version: 0,
    previous: null as number | null,
    manual: false,
  });
  const [paused, setPaused] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(
    () =>
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches,
  );
  const [visible, setVisible] = useState(true);
  const [documentVisible, setDocumentVisible] = useState(
    () => typeof document === "undefined" || !document.hidden,
  );
  const [keyboardFocus, setKeyboardFocus] = useState(false);
  const rootRef = useRef<HTMLElement>(null);
  const remainingRef = useRef(cycleDuration);
  const titleId = useId();
  const activeIndex = wrapIndex(selection.step);
  const active = interests[activeIndex];
  const running =
    !paused && !reducedMotion && visible && documentVisible && !keyboardFocus;

  useEffect(() => {
    onInterestChange?.(active.id, selection.manual);
  }, [active.id, selection.manual, selection.version, onInterestChange]);

  useEffect(() => {
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const onChange = () => setReducedMotion(preference.matches);
    preference.addEventListener("change", onChange);
    const onVisibility = () => setDocumentVisible(!document.hidden);
    document.addEventListener("visibilitychange", onVisibility);
    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.15 },
    );
    if (rootRef.current) observer.observe(rootRef.current);
    return () => {
      preference.removeEventListener("change", onChange);
      document.removeEventListener("visibilitychange", onVisibility);
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    rootRef.current?.style.setProperty(
      "--orbit-turn",
      `${selection.step * (-360 / interestCount)}deg`,
    );
  }, [selection.step]);

  useEffect(() => {
    remainingRef.current = cycleDuration;
  }, [selection.version]);

  useEffect(() => {
    if (!running) return;
    const startedAt = performance.now();
    const timer = window.setTimeout(
      () =>
        setSelection((current) => ({
          step: current.step + 1,
          version: current.version + 1,
          previous: wrapIndex(current.step),
          manual: false,
        })),
      remainingRef.current,
    );
    return () => {
      window.clearTimeout(timer);
      remainingRef.current = Math.max(
        0,
        remainingRef.current - (performance.now() - startedAt),
      );
    };
  }, [running, selection.version]);

  useEffect(() => {
    if (selection.previous === null) return;
    const timer = window.setTimeout(
      () =>
        setSelection((current) =>
          current.version === selection.version
            ? { ...current, previous: null }
            : current,
        ),
      650,
    );
    return () => window.clearTimeout(timer);
  }, [selection.previous, selection.version]);

  function chooseInterest(index: number) {
    setSelection((current) => {
      const distance =
        (index - wrapIndex(current.step) + interestCount) % interestCount;
      return {
        step:
          current.step +
          (distance > interestCount / 2 ? distance - interestCount : distance),
        version: current.version + 1,
        previous: wrapIndex(current.step),
        manual: true,
      };
    });
  }

  return (
    <aside
      className="interest-orbit"
      ref={rootRef}
      aria-labelledby={titleId}
      data-interest={active.id}
      data-running={running}
      data-reduced-motion={reducedMotion}
      onFocusCapture={(event) => {
        if (
          event.target instanceof HTMLButtonElement &&
          event.target.classList.contains("interest-orbit__node") &&
          event.target.matches(":focus-visible")
        )
          setKeyboardFocus(true);
      }}
      onBlurCapture={(event) => {
        if (
          !(event.relatedTarget instanceof HTMLButtonElement) ||
          !event.relatedTarget.classList.contains("interest-orbit__node")
        )
          setKeyboardFocus(false);
      }}
    >
      <div className="interest-orbit__heading">
        <span id={titleId}>A few things in my orbit.</span>
        <span className="interest-orbit__index" aria-hidden="true">
          0{activeIndex + 1} <span>/ 07</span>
        </span>
      </div>
      <div className="interest-orbit__wheel">
        <div
          className="interest-orbit__ring interest-orbit__ring--outer"
          aria-hidden="true"
        />
        <div
          className="interest-orbit__ring interest-orbit__ring--middle"
          aria-hidden="true"
        />
        <div
          className="interest-orbit__ring interest-orbit__ring--inner"
          aria-hidden="true"
        />
        <div className="interest-orbit__ticks" aria-hidden="true" />
        <div className="interest-orbit__stage" aria-hidden="true">
          <div className="interest-orbit__stage-grid" />
          {selection.previous !== null && (
            <svg
              className="interest-orbit__scene interest-orbit__scene--leaving"
              viewBox="0 0 320 320"
              key={`old-${selection.version}`}
            >
              <SceneGraphic interest={interests[selection.previous].id} />
            </svg>
          )}
          <svg
            className="interest-orbit__scene interest-orbit__scene--current"
            viewBox="0 0 320 320"
            key={selection.version}
          >
            <SceneGraphic interest={active.id} />
          </svg>
          <span className="interest-orbit__scene-label">{active.label}</span>
        </div>
        <div
          className="interest-orbit__nodes"
          role="group"
          aria-label="Explore my interests"
        >
          {interests.map((interest, index) => (
            <div
              className={`interest-orbit__slot interest-orbit__slot--${index}`}
              key={interest.id}
            >
              <button
                type="button"
                className="interest-orbit__node"
                aria-pressed={activeIndex === index}
                aria-label={interest.label}
                aria-describedby={
                  activeIndex === index ? (descriptionId ?? titleId) : undefined
                }
                onClick={() => chooseInterest(index)}
              >
                <span className="interest-orbit__node-icon">
                  <InterestIcon interest={interest.id} />
                </span>
                <span className="interest-orbit__node-label">
                  {interest.label}
                </span>
              </button>
            </div>
          ))}
        </div>
      </div>

      <div className="interest-orbit__transport">
        <span
          className="interest-orbit__progress"
          key={selection.version}
          aria-hidden="true"
        >
          <span />
        </span>
        <button
          type="button"
          className="interest-orbit__pause"
          onClick={() => setPaused((current) => !current)}
          aria-label={
            paused
              ? "Resume automatic interest rotation"
              : "Pause automatic interest rotation"
          }
          aria-pressed={paused}
          disabled={reducedMotion}
        >
          {paused || reducedMotion ? (
            <Play aria-hidden="true" />
          ) : (
            <Pause aria-hidden="true" />
          )}
          <span>
            {reducedMotion
              ? "Explore at your pace"
              : paused
                ? "Resume orbit"
                : "Pause orbit"}
          </span>
        </button>
      </div>
    </aside>
  );
}
