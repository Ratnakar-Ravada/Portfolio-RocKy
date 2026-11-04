import { ChevronRight, Pause, Play } from "lucide-react";
import { portraitSlides } from "./portraitSlides";
import "./PortraitBanner.css";

interface PortraitBannerProps {
  subtitle: string;
  previousSubtitle?: string;
  version: number;
  paused: boolean;
  reducedMotion: boolean;
  running: boolean;
  busy: boolean;
  onTogglePaused: () => void;
  onNext: () => void;
}

export default function PortraitBanner({
  subtitle,
  previousSubtitle,
  version,
  paused,
  reducedMotion,
  running,
  busy,
  onTogglePaused,
  onNext,
}: PortraitBannerProps) {
  return (
    <figcaption
      className="portrait-banner"
      data-running={running}
      data-subtitle={subtitle}
    >
      <div className="portrait-banner__identity">
        <p className="portrait-banner__name">RocKy</p>
        <p className="portrait-banner__accessible">
          {portraitSlides.map((slide) => slide.title).join(", ")}.
        </p>
        <div className="portrait-banner__subtitle" aria-hidden="true">
          {previousSubtitle && (
            <span
              className="portrait-banner__role portrait-banner__role--leaving"
              key={`previous-${version}`}
            >
              {previousSubtitle}
            </span>
          )}
          <span
            className="portrait-banner__role portrait-banner__role--current"
            key={`current-${version}`}
          >
            {subtitle}
          </span>
        </div>
      </div>
      <button
        className="portrait-banner__control"
        type="button"
        disabled={busy}
        aria-busy={busy || undefined}
        onClick={reducedMotion ? onNext : onTogglePaused}
        aria-label={
          reducedMotion
            ? "Show next portrait and subtitle"
            : paused
              ? "Resume photo and subtitle rotation"
              : "Pause photo and subtitle rotation"
        }
        title={
          reducedMotion
            ? "Next portrait"
            : paused
              ? "Resume rotation"
              : "Pause rotation"
        }
      >
        {reducedMotion ? (
          <ChevronRight aria-hidden="true" />
        ) : paused ? (
          <Play aria-hidden="true" />
        ) : (
          <Pause aria-hidden="true" />
        )}
      </button>
    </figcaption>
  );
}
