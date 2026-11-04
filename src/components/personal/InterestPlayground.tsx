import { useId, useState } from "react";
import {
  ArrowUpRight,
  Code2,
  Cpu,
  Film,
  Gamepad2,
  Map,
  Utensils,
} from "lucide-react";
import "./InterestPlayground.css";

type Interest =
  "tech" | "code" | "badminton" | "travel" | "food" | "movies" | "games";

const interests: {
  id: Interest;
  label: string;
  title: string;
  copy: string;
  action: string;
}[] = [
  {
    id: "tech",
    label: "Tech",
    title: "Follow the connection.",
    copy: "Technology is an invitation to find out how things work.",
    action: "Connect the dots",
  },
  {
    id: "code",
    label: "Code",
    title: "An idea, then a little code.",
    copy: "Personal apps, websites, and experiments with tech and AI.",
    action: "Say hello",
  },
  {
    id: "badminton",
    label: "Court",
    title: "A different kind of rally.",
    copy: "I play badminton regularly. Some problems are better solved on court.",
    action: "Serve a shuttle",
  },
  {
    id: "travel",
    label: "Travel",
    title: "Take the interesting route.",
    copy: "Bikes, cars, new places, and a good reason to keep exploring.",
    action: "Take a detour",
  },
  {
    id: "food",
    label: "Food",
    title: "Curiosity, served warm.",
    copy: "I love eating, exploring different cuisines, and cooking them too.",
    action: "Mix it up",
  },
  {
    id: "movies",
    label: "Movies",
    title: "A little time in another world.",
    copy: "There is always room for a good movie beyond the work.",
    action: "Roll the film",
  },
  {
    id: "games",
    label: "Games",
    title: "Press start. Stay curious.",
    copy: "Gaming is another favorite reason to sit down at a computer.",
    action: "Press start",
  },
];

function InterestIcon({ interest }: { interest: Interest }) {
  if (interest === "tech") return <Cpu />;
  if (interest === "code") return <Code2 />;
  if (interest === "travel") return <Map />;
  if (interest === "food") return <Utensils />;
  if (interest === "movies") return <Film />;
  if (interest === "games") return <Gamepad2 />;
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="m5 21 5-7m-3-4 8-8 7 7-8 8-7-7Zm3-3 7 7M13 4l7 7M7 10l13-6m-10 9L17 2"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function TechScene({ played }: { played: boolean }) {
  return (
    <g className="interest-lab__circuit">
      <g className="interest-lab__wire">
        <path d="M69 86h91v39h29M68 222h92v-40h29M392 86h-91v39h-29M392 222h-91v-40h-29M230 47v48M230 255v-45" />
      </g>
      <g className="interest-lab__wire interest-lab__wire-signal">
        <path d="M69 86h91v39h29M68 222h92v-40h29M392 86h-91v39h-29M392 222h-91v-40h-29" />
      </g>
      <rect
        className="interest-lab__chip-depth"
        x="182"
        y="103"
        width="108"
        height="108"
        rx="5"
      />
      <rect
        className="interest-lab__chip"
        x="172"
        y="93"
        width="108"
        height="108"
        rx="5"
      />
      <rect
        className="interest-lab__chip-inner"
        x="188"
        y="109"
        width="76"
        height="76"
        rx="2"
      />
      <text
        className="interest-lab__chip-label"
        x="226"
        y="155"
        textAnchor="middle"
      >
        rr
      </text>
      {[69, 392].map((x) =>
        [86, 222].map((y) => (
          <g key={`${x}-${y}`}>
            <circle className="interest-lab__terminal" cx={x} cy={y} r="14" />
            <circle
              className={
                played
                  ? "interest-lab__terminal-light is-connected"
                  : "interest-lab__terminal-light"
              }
              cx={x}
              cy={y}
              r="4"
            />
          </g>
        )),
      )}
      <circle className="interest-lab__terminal" cx="230" cy="47" r="7" />
      <circle className="interest-lab__terminal" cx="230" cy="255" r="7" />
      <text
        className="interest-lab__diagram-note"
        x="230"
        y="286"
        textAnchor="middle"
      >
        INPUT / CURIOSITY / POSSIBILITY
      </text>
    </g>
  );
}

function CodeScene({ played }: { played: boolean }) {
  return (
    <g className="interest-lab__computer">
      <path
        className="interest-lab__object-side"
        d="m95 63 13-12h268v171l-13 13H95Z"
      />
      <rect
        className="interest-lab__object"
        x="84"
        y="63"
        width="280"
        height="173"
        rx="9"
      />
      <rect
        className="interest-lab__screen"
        x="98"
        y="77"
        width="252"
        height="136"
        rx="3"
      />
      <path className="interest-lab__muted-line" d="M111 97h224" />
      <circle className="interest-lab__code-dot" cx="112" cy="87" r="2" />
      <circle className="interest-lab__code-dot" cx="120" cy="87" r="2" />
      <circle className="interest-lab__code-dot" cx="128" cy="87" r="2" />
      <text className="interest-lab__code-label" x="113" y="130">
        {'console.log("hello, world");'}
      </text>
      {played ? (
        <g className="interest-lab__hello">
          <text x="113" y="164">
            hello, world
          </text>
          <path d="M113 184h9" />
        </g>
      ) : (
        <text className="interest-lab__prompt" x="113" y="164">
          {">"}
          <tspan className="interest-lab__block"> ▮</tspan>
        </text>
      )}
      <path
        className="interest-lab__object-side"
        d="M205 236v22h40v-22M181 263h88"
      />
      <path
        className="interest-lab__keyboard"
        d="M110 273h241l18 17H91l19-17Z"
      />
      <path className="interest-lab__muted-line" d="M122 279h215M117 285h226" />
    </g>
  );
}

function BadmintonScene() {
  return (
    <g className="interest-lab__court">
      <path
        className="interest-lab__court-lines"
        d="m53 258 85-80h206l69 80H53Zm51-48h269M82 234h311M233 178v80M153 178l-43 80M312 178l38 80"
      />
      <path
        className="interest-lab__net"
        d="M225 153v113M235 153v113M225 162h10M225 173h10M225 184h10M225 195h10M225 206h10M225 217h10M225 228h10M225 239h10M225 250h10"
      />
      <path className="interest-lab__trajectory" d="M112 191Q210 24 355 126" />
      <g className="interest-lab__racket">
        <ellipse
          className="interest-lab__racket-frame"
          cx="110"
          cy="166"
          rx="27"
          ry="37"
          transform="rotate(30 110 166)"
        />
        <path
          className="interest-lab__racket-strings"
          d="m91 140 37 49m-45-34 39 44m-37-53 43 22m-46-10 39 22m-29-37 22 53m-12-56 22 44"
        />
        <path className="interest-lab__racket-handle" d="m93 198-21 34" />
      </g>
      <g className="interest-lab__shuttle">
        <path
          className="interest-lab__shuttle-feather"
          d="m-9-10 18-8 6 20-17 7-7-19Z"
        />
        <path
          className="interest-lab__shuttle-lines"
          d="m-7-10 20 12M0-14l8 18M8-16l1 17"
        />
        <path
          className="interest-lab__shuttle-base"
          d="m-2 9 17-7c5 11-12 18-17 7Z"
        />
      </g>
      <text
        className="interest-lab__diagram-note"
        x="230"
        y="291"
        textAnchor="middle"
      >
        LESS SCREEN TIME. MORE AIR TIME.
      </text>
    </g>
  );
}

function TravelScene({ variant }: { variant: number }) {
  return (
    <g className="interest-lab__map">
      <path
        className="interest-lab__terrain"
        d="M44 200c47-75 75-45 104-96s75-49 102 0 63-48 98-13 49 76 70 65M55 235c56-59 64-1 117-54s42-37 82-15 85-35 145 47M62 65c52 26 59-35 105-21s45 21 87 0 102-7 138 35"
      />
      <path
        className="interest-lab__map-river"
        d="M293 32c-39 41 18 62-18 105s-21 86-68 124"
      />
      <path
        className="interest-lab__route-shadow"
        d="M81 214C117 219 135 124 184 133S202 77 254 87 307 198 364 120"
      />
      <path
        className={
          variant === 1 ? "interest-lab__route is-long" : "interest-lab__route"
        }
        d={
          variant === 1
            ? "M81 214C117 219 135 124 184 133S202 77 254 87 307 198 364 120"
            : "M81 214Q187 122 364 120"
        }
      />
      <circle className="interest-lab__pin" cx="81" cy="214" r="8" />
      <circle className="interest-lab__pin-end" cx="364" cy="120" r="9" />
      <circle className="interest-lab__pin-middle" cx="254" cy="87" r="4" />
      <g className="interest-lab__compass">
        <circle cx="393" cy="50" r="24" />
        <path d="m393 32-7 22 7-5 7 5-7-22Z" />
        <text x="393" y="18" textAnchor="middle">
          N
        </text>
      </g>
      <text className="interest-lab__map-label" x="62" y="243">
        START HERE
      </text>
      <text className="interest-lab__map-label" x="302" y="101">
        SOMEWHERE NEW
      </text>
    </g>
  );
}

function FoodScene() {
  return (
    <g className="interest-lab__food">
      <ellipse
        className="interest-lab__plate"
        cx="231"
        cy="240"
        rx="138"
        ry="20"
      />
      <path
        className="interest-lab__bowl"
        d="M124 155h214c-12 64-51 94-107 94s-95-30-107-94Z"
      />
      <ellipse
        className="interest-lab__bowl-rim"
        cx="231"
        cy="155"
        rx="107"
        ry="29"
      />
      <g className="interest-lab__ingredients">
        <path
          className="interest-lab__ingredient-a"
          d="m174 140 31-5 7 17-31 5Z"
        />
        <path
          className="interest-lab__ingredient-b"
          d="m238 139 26-6 10 16-26 5Z"
        />
        <path
          className="interest-lab__ingredient-c"
          d="m209 157 28-2 5 18-28 2Z"
        />
        <circle
          className="interest-lab__ingredient-b"
          cx="289"
          cy="156"
          r="9"
        />
        <path
          className="interest-lab__herb"
          d="M170 161c-18-24 21-31 15-5M263 161c-2-29 32-27 19-2M216 138c-12-30 19-28 12-2"
        />
      </g>
      <g className="interest-lab__steam">
        <path d="M189 118c-22-21 18-30 1-54M232 115c-22-21 18-30 1-54M275 118c-22-21 18-30 1-54" />
      </g>
      <path
        className="interest-lab__chopstick"
        d="m300 129 54-68M311 132l58-65"
      />
      <text
        className="interest-lab__diagram-note"
        x="230"
        y="291"
        textAnchor="middle"
      >
        EAT. EXPERIMENT. REPEAT.
      </text>
    </g>
  );
}

function MoviesScene() {
  return (
    <g className="interest-lab__movies">
      <path
        className="interest-lab__projector-beam"
        d="m179 151 203-67v158l-203-67Z"
      />
      <rect
        className="interest-lab__film-screen"
        x="239"
        y="75"
        width="147"
        height="174"
        rx="2"
      />
      <path
        className="interest-lab__screen-frame"
        d="M233 67h159M233 258h159M264 258v22M365 258v22"
      />
      <path
        className="interest-lab__film-landscape"
        d="m251 219 31-49 22 25 27-56 42 80H251Z"
      />
      <circle className="interest-lab__film-sun" cx="275" cy="116" r="13" />
      <g className="interest-lab__film-reels">
        <circle cx="115" cy="112" r="32" />
        <circle cx="165" cy="94" r="25" />
        <path d="M115 87v50M90 112h50M165 76v36M147 94h36" />
      </g>
      <rect
        className="interest-lab__projector"
        x="86"
        y="144"
        width="97"
        height="62"
        rx="5"
      />
      <path
        className="interest-lab__projector-lens"
        d="m183 156 17-8v45l-17-8Z"
      />
      <path
        className="interest-lab__projector-stand"
        d="m120 206-20 57M144 206l20 57M102 255h60"
      />
      <text
        className="interest-lab__diagram-note"
        x="230"
        y="296"
        textAnchor="middle"
      >
        A SMALL ESCAPE. A BIG SCREEN.
      </text>
    </g>
  );
}

function GamesScene() {
  return (
    <g className="interest-lab__games">
      <path
        className="interest-lab__game-grid"
        d="M52 250h356M52 222h356M52 194h356M52 166h356M80 143v115M130 143v115M180 143v115M230 143v115M280 143v115M330 143v115M380 143v115"
      />
      <g className="interest-lab__game-stars">
        <path d="M95 63v12M89 69h12M354 45v12M348 51h12M315 112v8M311 116h8M162 37v7M159 40h7" />
      </g>
      <g className="interest-lab__pixel-ship">
        <path
          className="interest-lab__ship-body"
          d="M224 147v-18h12v18h12v12h12v24h-12v-12h-12v12h-12v-12h-12v12h-12v-24h12v-12Z"
        />
        <path className="interest-lab__ship-window" d="M224 151h12v12h-12Z" />
        <path
          className="interest-lab__ship-flame"
          d="M219 185h22v11h-6v12h-10v-12h-6Z"
        />
      </g>
      <g className="interest-lab__controller">
        <path d="M143 265c-6-9-11-32-2-35 9-3 25 0 34 0h110c9 0 25-3 34 0 9 3 4 26-2 35-6 8-24-9-33-9H176c-9 0-27 17-33 9Z" />
        <path d="M170 236v15M162 243h16" />
        <circle cx="289" cy="240" r="3" />
        <circle cx="300" cy="249" r="3" />
      </g>
    </g>
  );
}

export default function InterestPlayground() {
  const [active, setActive] = useState<Interest>("code");
  const [runCount, setRunCount] = useState(0);
  const titleId = useId();
  const captionId = useId();
  const item =
    interests.find((interest) => interest.id === active) ?? interests[1];
  const played = runCount > 0;

  function chooseInterest(interest: Interest) {
    setActive(interest);
    setRunCount(0);
  }

  return (
    <aside
      className="interest-lab"
      aria-labelledby={titleId}
      data-interest={active}
      data-variant={runCount % 3}
    >
      <div className="interest-lab__header">
        <h2 id={titleId}>The rest of my tabs.</h2>
        <span>PERSONAL / PLAYGROUND</span>
      </div>
      <div className="interest-lab__stage">
        <span className="interest-lab__stage-index" aria-hidden="true">
          {String(
            interests.findIndex((interest) => interest.id === active) + 1,
          ).padStart(2, "0")}{" "}
          / 07
        </span>
        <svg
          key={`${active}-${runCount}`}
          className="interest-lab__scene"
          viewBox="0 0 460 310"
          role="img"
          aria-label={`${item.label}: ${item.title}`}
          data-played={played}
        >
          <g className="interest-lab__registration" aria-hidden="true">
            <path d="M26 30h12M32 24v12M422 30h12M428 24v12M26 286h12M32 280v12M422 286h12M428 280v12" />
          </g>
          {active === "tech" && <TechScene played={played} />}
          {active === "code" && <CodeScene played={played} />}
          {active === "badminton" && <BadmintonScene />}
          {active === "travel" && <TravelScene variant={runCount % 3} />}
          {active === "food" && <FoodScene />}
          {active === "movies" && <MoviesScene />}
          {active === "games" && <GamesScene />}
        </svg>
        <button
          className="interest-lab__action"
          type="button"
          onClick={() => setRunCount((count) => count + 1)}
          aria-describedby={captionId}
        >
          {item.action}
          <ArrowUpRight aria-hidden="true" />
        </button>
      </div>
      <div
        className="interest-lab__channels"
        role="group"
        aria-label="Explore my interests"
      >
        {interests.map((interest) => (
          <button
            type="button"
            key={interest.id}
            onClick={() => chooseInterest(interest.id)}
            aria-pressed={active === interest.id}
            aria-label={
              interest.id === "badminton" ? "Badminton" : interest.label
            }
          >
            <InterestIcon interest={interest.id} />
            <span>{interest.label}</span>
          </button>
        ))}
      </div>
      <div
        className="interest-lab__caption"
        id={captionId}
        aria-live="polite"
        aria-atomic="true"
      >
        <h3>{item.title}</h3>
        <p>{item.copy}</p>
      </div>
    </aside>
  );
}
