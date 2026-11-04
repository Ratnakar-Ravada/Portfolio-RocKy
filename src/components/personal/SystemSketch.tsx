import { useId, useState } from "react";
import "./SystemSketch.css";

type SystemMode = "build" | "play" | "reset";

const modes: {
  id: SystemMode;
  label: string;
  index: string;
  caption: string;
}[] = [
  {
    id: "build",
    label: "Build",
    index: "01",
    caption: "Personal apps and websites. A little curiosity, tech, and AI.",
  },
  {
    id: "play",
    label: "Play",
    index: "02",
    caption:
      "Gaming is one of my favorite ways to spend time away from a build.",
  },
  {
    id: "reset",
    label: "Reset",
    index: "03",
    caption: "A different kind of rally. I play badminton regularly.",
  },
];

export default function SystemSketch() {
  const [activeMode, setActiveMode] = useState<SystemMode>("build");
  const diagramId = useId();
  const captionId = useId();
  const activeItem = modes.find((mode) => mode.id === activeMode) ?? modes[0];

  return (
    <div className="system-sketch" data-mode={activeMode}>
      <div className="system-sketch__heading">
        <span>Fig. 01</span>
        <span>A personal system</span>
        <span className="system-sketch__heading-mark" aria-hidden="true">
          +
        </span>
      </div>

      <svg
        className="system-sketch__diagram"
        viewBox="0 0 430 350"
        role="img"
        aria-labelledby={diagramId}
      >
        <title id={diagramId}>
          A computer connected to three parts of my world: building apps,
          gaming, and badminton.
        </title>

        <defs>
          <pattern
            id={`${diagramId}-grid`}
            width="22"
            height="22"
            patternUnits="userSpaceOnUse"
          >
            <circle cx="1" cy="1" r="0.7" className="system-sketch__grid-dot" />
          </pattern>
        </defs>

        <rect width="430" height="350" fill={`url(#${diagramId}-grid)`} />

        <g className="system-sketch__registration" aria-hidden="true">
          <path d="M19 32h12M25 26v12M399 32h12M405 26v12M19 321h12M25 315v12M399 321h12M405 315v12" />
          <path d="M215 37v9M215 307v9M30 176h9M391 176h9" />
          <path d="M37 48h8M37 48v8M393 48h-8M393 48v8M37 304h8M37 304v-8M393 304h-8M393 304v-8" />
        </g>

        <g className="system-sketch__routes" aria-hidden="true">
          <path
            className="system-sketch__orbit"
            d="M68 166C68 78 177 41 277 65C378 89 404 195 323 268C246 336 106 296 68 216C60 199 60 182 68 166Z"
          />
          <path
            className="system-sketch__orbit system-sketch__orbit--secondary"
            d="M43 240C117 265 286 89 383 114"
          />
          <path className="system-sketch__axis" d="M76 294L354 55" />
          <circle cx="0" cy="0" r="4.5" className="system-sketch__packet" />
        </g>

        <g
          className="system-sketch__node system-sketch__node--build"
          aria-hidden="true"
        >
          <path className="system-sketch__node-leader" d="M95 100h30l27 27" />
          <rect
            className="system-sketch__node-panel"
            x="43"
            y="73"
            width="61"
            height="52"
            rx="2"
          />
          <path
            className="system-sketch__node-icon"
            d="M64 89l-8 10 8 10M83 89l8 10-8 10M77 85l-7 28"
          />
          <text x="44" y="62" className="system-sketch__tiny-label">
            01 / INPUT
          </text>
        </g>

        <g
          className="system-sketch__node system-sketch__node--play"
          aria-hidden="true"
        >
          <path className="system-sketch__node-leader" d="M328 98h-27l-20 31" />
          <rect
            className="system-sketch__node-panel"
            x="327"
            y="76"
            width="63"
            height="49"
            rx="2"
          />
          <path
            className="system-sketch__node-icon"
            d="M344 94c-5 0-9 16-7 20 2 4 7-1 11-5h21c4 4 9 9 11 5 2-4-2-20-7-20h-29Z"
          />
          <path
            className="system-sketch__node-icon"
            d="M349 98v10M344 103h10M368 100h.1M373 105h.1"
          />
          <text x="328" y="65" className="system-sketch__tiny-label">
            02 / SIDE QUEST
          </text>
        </g>

        <g
          className="system-sketch__node system-sketch__node--reset"
          aria-hidden="true"
        >
          <path
            className="system-sketch__node-leader"
            d="M333 261h-27l-18-17"
          />
          <rect
            className="system-sketch__node-panel"
            x="329"
            y="239"
            width="61"
            height="53"
            rx="2"
          />
          <path
            className="system-sketch__node-icon"
            d="M348 253l17-6 6 17-17 5-6-16ZM350 255l17 11M355 251l7 16M360 249l7 16M354 269l-6 11M346 279l5 3"
          />
          <text x="329" y="309" className="system-sketch__tiny-label">
            03 / OFFLINE
          </text>
        </g>

        <g className="system-sketch__computer" aria-hidden="true">
          <path
            className="system-sketch__computer-depth"
            d="M148 121l11-11h124v98l-11 12H148Z"
          />
          <rect
            className="system-sketch__computer-case"
            x="137"
            y="121"
            width="135"
            height="99"
            rx="5"
          />
          <rect
            className="system-sketch__screen"
            x="148"
            y="132"
            width="113"
            height="67"
            rx="2"
          />
          <path
            className="system-sketch__screen-line"
            d="M155 141h4M163 141h4M171 141h4M156 190h91"
          />
          <path
            className="system-sketch__glyph"
            d="M176 151h7v7h14v7h-14v21h-7ZM211 151h7v7h14v7h-14v21h-7Z"
          />
          <path
            className="system-sketch__case-detail"
            d="M190 220v18h31v-18M174 242h63M147 209h17"
          />
          <circle className="system-sketch__power" cx="254" cy="209" r="2.2" />
          <path
            className="system-sketch__keyboard"
            d="M139 255h133l18 20H121l18-20Z"
          />
          <path
            className="system-sketch__keyboard-keys"
            d="M142 262h127M136 268h139M153 259l-4 12M167 259l-3 12M181 259l-1 12M195 259v12M209 259l1 12M223 259l3 12M237 259l4 12M251 259l5 12"
          />
          <text
            x="204"
            y="296"
            textAnchor="middle"
            className="system-sketch__machine-label"
          >
            PERSONAL COMPUTER
          </text>
        </g>

        <g className="system-sketch__measurement" aria-hidden="true">
          <path d="M117 130v85M113 130h8M113 215h8" />
          <text
            x="104"
            y="174"
            textAnchor="middle"
            transform="rotate(-90 104 174)"
          >
            WORK IN PROGRESS
          </text>
          <text x="38" y="339">
            SYS.RR / {activeItem.index}
          </text>
          <text x="392" y="339" textAnchor="end">
            NOT TO SCALE
          </text>
        </g>
      </svg>

      <div
        className="system-sketch__controls"
        role="group"
        aria-label="Explore my personal system"
      >
        {modes.map((mode) => (
          <button
            key={mode.id}
            type="button"
            className="system-sketch__control"
            aria-pressed={activeMode === mode.id}
            aria-describedby={activeMode === mode.id ? captionId : undefined}
            onClick={() => setActiveMode(mode.id)}
          >
            <span className="system-sketch__control-index">{mode.index}</span>
            <span>{mode.label}</span>
            <span
              className="system-sketch__control-indicator"
              aria-hidden="true"
            />
          </button>
        ))}
      </div>
      <div
        className="system-sketch__caption"
        id={captionId}
        aria-live="polite"
        aria-atomic="true"
      >
        <span className="system-sketch__caption-symbol" aria-hidden="true">
          ↳
        </span>
        <p>{activeItem.caption}</p>
      </div>
    </div>
  );
}
