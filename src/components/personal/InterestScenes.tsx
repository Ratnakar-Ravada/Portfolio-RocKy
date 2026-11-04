import { useId } from "react";
import "./InterestScenes.css";

type Interest =
  "tech" | "code" | "movies" | "badminton" | "games" | "food" | "travel";

function SceneDefinitions({ id }: { id: string }) {
  return (
    <defs>
      <linearGradient id={`${id}-sky`} x2="0" y2="1">
        <stop stopColor="#6d91bb" />
        <stop offset=".65" stopColor="#d6e2d4" />
        <stop offset="1" stopColor="#eac68c" />
      </linearGradient>
      <linearGradient id={`${id}-night`} x2="0" y2="1">
        <stop stopColor="#172744" />
        <stop offset="1" stopColor="#334c6b" />
      </linearGradient>
      <linearGradient id={`${id}-car`} x2="0" y2="1">
        <stop stopColor="#e7edce" />
        <stop offset=".45" stopColor="#c0ce92" />
        <stop offset="1" stopColor="#7c9465" />
      </linearGradient>
      <linearGradient id={`${id}-glass`} x2=".8" y2="1">
        <stop stopColor="#284554" />
        <stop offset=".5" stopColor="#7697a0" />
        <stop offset=".51" stopColor="#496b78" />
        <stop offset="1" stopColor="#1a3548" />
      </linearGradient>
      <linearGradient id={`${id}-metal`} x2="0" y2="1">
        <stop stopColor="#b8cce1" />
        <stop offset="1" stopColor="#68839d" />
      </linearGradient>
      <linearGradient id={`${id}-screen`} x2="0" y2="1">
        <stop stopColor="#5d8db2" />
        <stop offset=".6" stopColor="#c9d6c5" />
        <stop offset="1" stopColor="#d4aa72" />
      </linearGradient>
      <linearGradient id={`${id}-court`} x2="0" y2="1">
        <stop stopColor="#467e80" />
        <stop offset="1" stopColor="#234a5d" />
      </linearGradient>
      <linearGradient id={`${id}-pan`} x2="0" y2="1">
        <stop stopColor="#536779" />
        <stop offset=".5" stopColor="#283f51" />
        <stop offset="1" stopColor="#132a3b" />
      </linearGradient>
      <radialGradient id={`${id}-warm`} cx=".5" cy=".3" r=".8">
        <stop stopColor="#806b55" />
        <stop offset="1" stopColor="#17283a" />
      </radialGradient>
      <clipPath id={`${id}-movie-clip`}>
        <rect x="49" y="67" width="224" height="124" rx="3" />
      </clipPath>
      <clipPath id={`${id}-game-clip`}>
        <rect x="48" y="69" width="224" height="133" rx="4" />
      </clipPath>
      <clipPath id={`${id}-food-clip`}>
        <ellipse cx="149" cy="207" rx="70" ry="23" />
      </clipPath>
    </defs>
  );
}

function TravelScene({ id }: { id: string }) {
  return (
    <g className="scene-art-travel">
      <path fill={`url(#${id}-sky)`} d="M0 0h320v320H0z" />
      <circle cx="232" cy="82" r="24" fill="#f1dda7" />
      <circle cx="232" cy="82" r="33" fill="#f1dda7" opacity=".12" />
      <g className="scene-art-travel__clouds" fill="#edf0e3" opacity=".56">
        <path d="M41 71c2-11 18-14 24-5 12-6 23-1 25 7H39Z" />
        <path d="M133 49c5-12 21-12 26-1 10-4 19 0 21 7h-52Z" />
      </g>
      <path
        d="m-20 167 67-73 37 44 45-67 66 94 39-53 70 70v42H-20Z"
        fill="#708d9b"
      />
      <path d="m94 123 35-52 32 46-25-11-10 8-8-9Z" fill="#e1e8dc" />
      <path
        d="m10 172 53-41 46 42 45-30 62 47 61-55 58 69v88H0Z"
        fill="#527b7a"
      />
      <path
        d="M-10 199c64-43 99 6 149-21 58-31 124-14 195 23v129H-10Z"
        fill="#3f6659"
      />
      <path
        d="M172 142c65 23-68 37-68 71 0 30 99 27 47 107h91c30-72-82-78-101-106-25-37 103-52 36-72Z"
        fill="#34404b"
      />
      <path
        d="M174 144c62 23-88 43-50 78 32 30 105 32 70 98"
        fill="none"
        stroke="#c9c7ad"
        strokeWidth="2"
        strokeDasharray="11 12"
        className="scene-art-travel__road-line"
      />
      <path
        d="M170 143c61 21-70 37-68 71 1 36 95 26 47 106M180 145c66 21-66 39-37 70 24 27 131 36 101 105"
        fill="none"
        stroke="#9fae9c"
        strokeWidth="1.5"
        opacity=".72"
      />
      <g className="scene-art-travel__trees">
        <path
          d="M38 217v-61m-23 45 23-43 25 43Zm5-22 18-36 19 36Z"
          fill="#254b46"
          stroke="#254b46"
          strokeLinejoin="round"
          strokeWidth="3"
        />
        <path
          d="M281 224v-67m-26 48 26-51 29 51Zm6-26 20-40 23 40Z"
          fill="#244a45"
          stroke="#244a45"
          strokeLinejoin="round"
          strokeWidth="3"
        />
        <path d="M72 189v-36m-14 26 14-30 16 30Z" fill="#365c4f" />
      </g>
      <g className="scene-art-travel__car">
        <ellipse
          cx="174"
          cy="269"
          rx="57"
          ry="9"
          fill="#142735"
          opacity=".42"
        />
        <rect x="127" y="247" width="19" height="25" rx="7" fill="#122635" />
        <rect x="202" y="247" width="19" height="25" rx="7" fill="#122635" />
        <path
          d="m127 243 9-25c2-7 10-11 19-11h34c9 0 16 3 19 11l10 25 4 8v14H123v-14Z"
          fill={`url(#${id}-car)`}
          stroke="#b9c99d"
          strokeWidth="1"
        />
        <path
          d="m144 217-8 23h71l-8-22c-1-3-4-4-8-4h-40c-3 0-6 1-7 3Z"
          fill={`url(#${id}-glass)`}
          stroke="#526b61"
          strokeWidth="2"
        />
        <path d="m148 215-6 21h17l8-22Z" fill="#d9e4da" opacity=".19" />
        <path d="M132 242h82l3 9h-89Z" fill="#dce4bf" />
        <rect x="131" y="250" width="21" height="6" rx="2" fill="#fff2c8" />
        <rect x="193" y="250" width="21" height="6" rx="2" fill="#fff2c8" />
        <rect x="157" y="251" width="31" height="8" rx="2" fill="#314a43" />
        <path
          d="M160 254h25m-25 3h25M130 263h85"
          stroke="#a1b5a0"
          strokeWidth="1.5"
        />
        <path
          d="M131 235h-8m89 0h9"
          stroke="#b6c695"
          strokeWidth="5"
          strokeLinecap="round"
        />
        <rect x="162" y="261" width="23" height="4" rx="1" fill="#d4dccc" />
      </g>
      <g className="scene-art-travel__foreground" fill="#2b4b42">
        <path d="m-11 303 11-58 20 58-9-8 4 25H-7l3-25ZM277 310l18-68 25 68-14-9 5 19h-29l5-19Z" />
      </g>
    </g>
  );
}

function BadmintonScene({ id }: { id: string }) {
  return (
    <g className="scene-art-badminton">
      <path fill={`url(#${id}-night)`} d="M0 0h320v320H0z" />
      <path
        d="M0 82h320M0 143h320M63 32v117M160 22v127M257 32v117"
        stroke="#6f92a3"
        strokeWidth="1"
        opacity=".23"
      />
      <path d="m64 160-58 160h310l-60-160Z" fill={`url(#${id}-court)`} />
      <path
        d="m76 170-42 127h254l-43-127ZM57 230h208M67 201h189M160 170v127M98 170 78 297M221 170l21 127"
        fill="none"
        stroke="#c2d6c4"
        strokeWidth="1.5"
        opacity=".72"
      />
      <path
        d="M62 50h46M213 50h46"
        stroke="#dae8d8"
        strokeWidth="4"
        strokeLinecap="round"
      />
      <path
        d="m71 53-29 93h90l-29-93Zm151 0-30 93h90l-30-93Z"
        fill="#c5e1dc"
        opacity=".035"
      />
      <ellipse cx="228" cy="178" rx="22" ry="5" fill="#173c48" />
      <g className="scene-art-badminton__opponent">
        <circle cx="232" cy="127" r="8" fill="#d2a184" />
        <path d="M225 124c0-9 15-11 16 1l-6-3-9 4Z" fill="#152d3b" />
        <path d="m228 136-8 23 20 3 4-25Z" fill="#d4dd9d" />
        <path d="m222 157-5 12 9 3 7-13m0 1 6 12 9-4-7-12" fill="#183d50" />
        <path
          d="m220 170-8 10m30-10 8 9M226 139l-11 6-8-11m33 4 10 14"
          stroke="#d2a184"
          strokeWidth="5"
          fill="none"
          strokeLinecap="round"
        />
        <path d="m208 134-7-15" stroke="#a6c5cc" strokeWidth="2" />
        <ellipse
          cx="198"
          cy="112"
          rx="6"
          ry="10"
          fill="none"
          stroke="#dae4b0"
          strokeWidth="2"
          transform="rotate(-20 198 112)"
        />
      </g>
      <g className="scene-art-badminton__net">
        <path d="M31 185h258v31H31Z" fill="#163d4a" opacity=".35" />
        <path
          d="M31 190h258M31 196h258M31 202h258M31 208h258M41 185v31m12-31v31m12-31v31m12-31v31m12-31v31m12-31v31m12-31v31m12-31v31m12-31v31m12-31v31m12-31v31m12-31v31m12-31v31m12-31v31m12-31v31m12-31v31m12-31v31m12-31v31m12-31v31m12-31v31"
          fill="none"
          stroke="#b7c7be"
          strokeWidth=".6"
          opacity=".42"
        />
        <path
          d="M29 185h262M30 184v49m260-49v49"
          stroke="#dee5d2"
          strokeWidth="3"
        />
      </g>
      <g className="scene-art-badminton__player">
        <ellipse
          cx="106"
          cy="267"
          rx="42"
          ry="8"
          fill="#102f40"
          opacity=".65"
        />
        <path
          d="m102 225-19 17 6 19m27-36 18 12 15 19"
          stroke="#dca481"
          strokeWidth="10"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
        <path d="m97 213-7 16 17 9 7-13 12 10 11-14-15-12Z" fill="#142f48" />
        <path d="m101 182-13 29c10 8 26 11 39 4l-6-28Z" fill="#91b6e9" />
        <path d="m104 188-6 21 9 6 6-28Z" fill="#bdd0e8" opacity=".5" />
        <path
          d="m96 188-15 17-14-1"
          fill="none"
          stroke="#dca481"
          strokeWidth="8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="111" cy="170" r="12" fill="#dca481" />
        <path d="M99 168c-2-15 18-20 24-7l-8-2-4 6-9 1v8Z" fill="#172d3e" />
        <path d="m106 181 1 7 9 1 1-9" fill="#dca481" />
        <g className="scene-art-badminton__racket-arm">
          <path
            d="m119 190 15-9 8-23"
            fill="none"
            stroke="#dca481"
            strokeWidth="8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="m142 156 5-15"
            stroke="#162b3d"
            strokeWidth="4"
            strokeLinecap="round"
          />
          <path d="m147 142 3-12" stroke="#c1d5c7" strokeWidth="2" />
          <ellipse
            cx="155"
            cy="116"
            rx="12"
            ry="19"
            transform="rotate(18 155 116)"
            stroke="#e0edb0"
            strokeWidth="3"
            fill="#8ba9b4"
            fillOpacity=".08"
          />
          <path
            d="m149 101-1 28m7-29-1 31m7-27-1 25m-16-19 22 6m-24 0 24 6m-25 0 22 6"
            stroke="#d5e1c4"
            strokeWidth=".6"
            opacity=".7"
          />
        </g>
        <path
          d="m85 259 1 9h-17c-4-2-1-6 2-7l8-4Zm60-6 5 7 13 2c4 2 2 6-2 6h-19l-7-9Z"
          fill="#e4e9d5"
        />
        <path d="M71 267h15m59 0h15" stroke="#8ea7bc" strokeWidth="2" />
      </g>
      <g className="scene-art-badminton__shuttle">
        <path d="m169 111 12-11 6 16-14 2Z" fill="#e8eedb" />
        <path d="m172 114 9-13m-6 15 9-10" stroke="#9db0b1" strokeWidth="1" />
        <circle cx="171" cy="117" r="3" fill="#dce9ac" />
        <path
          d="m158 118-12 3m13 2-8 3"
          stroke="#dce9ac"
          strokeWidth="1.5"
          opacity=".6"
        />
      </g>
    </g>
  );
}

function MoviesScene({ id }: { id: string }) {
  return (
    <g className="scene-art-movies">
      <path fill="#162137" d="M0 0h320v320H0z" />
      <path d="M10 40h300v164H10Z" fill="#3b3546" />
      <path d="M0 40h43v177H0Zm279 0h41v177h-41Z" fill="#583f4a" />
      <path
        d="M12 40v170M24 40v170M297 40v170M308 40v170"
        stroke="#78545a"
        strokeWidth="5"
        opacity=".45"
      />
      <rect x="41" y="59" width="240" height="140" rx="5" fill="#0c192b" />
      <rect x="46" y="64" width="230" height="130" rx="4" fill="#d4dfd7" />
      <g clipPath={`url(#${id}-movie-clip)`}>
        <path d="M49 67h224v124H49Z" fill={`url(#${id}-screen)`} />
        <circle cx="219" cy="99" r="19" fill="#f5e1b0" />
        <circle cx="219" cy="99" r="26" fill="#f5e1b0" opacity=".14" />
        <g className="scene-art-movies__landscape">
          <path
            d="m22 180 45-45 35 18 38-54 58 64 37-31 73 64H22Z"
            fill="#737e86"
          />
          <path d="m82 191 53-43 42 21 52-30 74 55Z" fill="#465b6a" />
          <path
            d="m17 203 55-30 48 12 52-14 63 24 76-18v46H17Z"
            fill="#2d475b"
          />
        </g>
        <g className="scene-art-movies__ship">
          <path d="m132 118 17-6 14 5-15 5Z" fill="#dfe7d7" />
          <path d="m148 111 1-5 8 8m-12 8 5 5 7-7" fill="#9fb8c2" />
          <path
            d="m132 117-11 1"
            stroke="#dff08a"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </g>
        <path
          d="M49 67h224v124H49Z"
          fill="#bcdbe0"
          className="scene-art-movies__flicker"
          opacity=".04"
        />
      </g>
      <path
        d="m160 19-111 48v124L160 27Z"
        fill="#d2e3d7"
        opacity=".055"
        className="scene-art-movies__beam"
      />
      <rect x="146" y="14" width="29" height="14" rx="4" fill="#6e8496" />
      <circle cx="160" cy="26" r="4" fill="#dff0cf" />
      <path
        d="M48 207h224M38 212h244"
        stroke="#9aa9b5"
        strokeWidth="1"
        opacity=".28"
      />
      <g fill="#5b3947" stroke="#7c4b56" strokeWidth="1.2">
        <path d="M15 243v-14c0-19 37-19 37 0v14Zm45 0v-14c0-19 37-19 37 0v14Zm45 0v-14c0-19 37-19 37 0v14Zm73 0v-14c0-19 37-19 37 0v14Zm45 0v-14c0-19 37-19 37 0v14Zm45 0v-14c0-19 37-19 37 0v14Z" />
      </g>
      <g fill="#754754" stroke="#96606a" strokeWidth="1.5">
        <path d="M-12 286v-27c0-24 47-24 47 0v27Zm56 0v-27c0-24 47-24 47 0v27Zm56 0v-27c0-24 47-24 47 0v27Zm73 0v-27c0-24 47-24 47 0v27Zm56 0v-27c0-24 47-24 47 0v27Zm56 0v-27c0-24 47-24 47 0v27Z" />
      </g>
      <path d="M-6 282h332v38H-6Z" fill="#20263b" />
      <path d="m113 319 24-36h46l24 36" fill="#32364c" />
      <g className="scene-art-movies__popcorn">
        <path d="m231 255 4 30h26l5-30Z" fill="#d6d6b8" />
        <path
          d="m237 258 2 25m9-25v25m11-25-2 25"
          stroke="#b77a64"
          strokeWidth="5"
        />
        <path
          d="M230 255c-5-5-1-12 5-12-2-7 8-12 12-6 4-7 14-4 13 3 8-1 13 9 6 14Z"
          fill="#efe0b1"
        />
        <path
          d="m238 246 4 3m7-8 3 4m7 4 3 1"
          stroke="#ceb987"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </g>
    </g>
  );
}

function TechScene({ id }: { id: string }) {
  return (
    <g className="scene-art-tech">
      <path fill={`url(#${id}-night)`} d="M0 0h320v320H0z" />
      <path
        d="M30 78h264M30 137h264M30 196h264M71 40v182M130 30v192M189 30v192M248 40v182"
        stroke="#799ab4"
        strokeWidth=".6"
        opacity=".11"
      />
      <path d="M0 235h320v85H0Z" fill="#1c3149" />
      <path
        d="m0 250 320-12M0 283l320-23M66 320l34-85m100 85-27-85"
        stroke="#597288"
        strokeWidth=".7"
        opacity=".28"
      />
      <g
        className="scene-art-tech__traces"
        fill="none"
        stroke="#a8c6ff"
        strokeWidth="2"
      >
        <path
          d="M66 228v31h82v-17m21 0v35h91v-50M35 235v52h113v-45M246 231v28h-42"
          opacity=".2"
        />
        <path
          d="M66 228v31h82v-17m21 0v35h91v-50M35 235v52h113v-45M246 231v28h-42"
          className="scene-art-tech__packets"
        />
      </g>
      <rect
        x="52"
        y="84"
        width="173"
        height="124"
        rx="8"
        fill="#111d30"
        stroke="#7893aa"
        strokeWidth="2"
      />
      <rect x="59" y="91" width="159" height="107" rx="3" fill="#20364e" />
      <rect x="65" y="98" width="147" height="15" rx="3" fill="#2c465f" />
      <circle cx="73" cy="105" r="2" fill="#dfb17e" />
      <circle cx="81" cy="105" r="2" fill="#b9cf89" />
      <path
        d="M96 105h67"
        stroke="#8faac2"
        strokeWidth="3"
        strokeLinecap="round"
        opacity=".55"
      />
      <rect x="68" y="120" width="46" height="69" rx="3" fill="#2a435c" />
      <path
        d="M75 130h30m-30 10h22m-22 10h26m-26 10h17m-17 10h25m-25 10h19"
        stroke="#a8c6ff"
        strokeWidth="2.5"
        strokeLinecap="round"
        opacity=".5"
      />
      <g fill="none" stroke="#7799b8" strokeWidth="1.5">
        <path d="M134 137h17l14 26h26M151 137l15-9h25m-39 10 14 43h25" />
      </g>
      <rect x="124" y="128" width="20" height="20" rx="5" fill="#a8c6ff" />
      <path d="m130 136 3 3 6-7" stroke="#26465d" strokeWidth="2" fill="none" />
      <rect x="184" y="119" width="20" height="18" rx="4" fill="#7899c4" />
      <rect x="184" y="154" width="20" height="18" rx="4" fill="#d7e698" />
      <rect x="184" y="175" width="20" height="12" rx="3" fill="#6e9f9e" />
      <circle
        cx="159"
        cy="152"
        r="3"
        fill="#e6f1ba"
        className="scene-art-tech__node"
      />
      <path
        d="M125 208v19h29v-19m-44 22h59"
        fill="#667e94"
        stroke="#8299ad"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <rect
        x="237"
        y="112"
        width="47"
        height="119"
        rx="5"
        fill="#152a40"
        stroke="#6d879c"
        strokeWidth="1.5"
      />
      <g fill="#2b455e" stroke="#526e86" strokeWidth="1">
        <rect x="242" y="120" width="37" height="21" rx="2" />
        <rect x="242" y="147" width="37" height="21" rx="2" />
        <rect x="242" y="174" width="37" height="21" rx="2" />
        <rect x="242" y="201" width="37" height="21" rx="2" />
      </g>
      <path
        d="M247 126h15m-15 5h15m-15 22h15m-15 5h15m-15 22h15m-15 5h15m-15 22h15m-15 5h15"
        stroke="#8ca8b8"
        strokeWidth="1"
        opacity=".65"
      />
      <g fill="#dff08a" className="scene-art-tech__leds">
        <circle cx="272" cy="130" r="2" />
        <circle cx="272" cy="157" r="2" />
        <circle cx="272" cy="184" r="2" />
        <circle cx="272" cy="211" r="2" />
      </g>
      <g className="scene-art-tech__phone">
        <rect
          x="22"
          y="157"
          width="34"
          height="69"
          rx="6"
          fill="#102035"
          stroke="#91a9ba"
          strokeWidth="1.5"
        />
        <rect x="26" y="163" width="26" height="55" rx="3" fill="#355978" />
        <path
          d="M33 177h12m-12 8h12m-12 6h8"
          stroke="#a8c6ff"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <circle cx="39" cy="206" r="6" fill="#dff08a" />
        <path
          d="m36 206 2 2 4-5"
          stroke="#385548"
          strokeWidth="1.5"
          fill="none"
        />
      </g>
      <text
        x="161"
        y="58"
        fill="#a8c6ff"
        fontSize="8"
        letterSpacing="2"
        textAnchor="middle"
        className="scene-art__mono"
      >
        CONNECTED THINKING
      </text>
      <circle
        cx="259"
        cy="91"
        r="3"
        fill="#dff08a"
        className="scene-art-tech__node"
      />
      <path
        d="M250 85a12 12 0 0 1 18 0m-22-5a18 18 0 0 1 26 0"
        fill="none"
        stroke="#a8c6ff"
        strokeWidth="1.5"
        opacity=".6"
      />
    </g>
  );
}

function CodeScene() {
  return (
    <g className="scene-art-code">
      <path fill="#192b43" d="M0 0h320v320H0z" />
      <circle cx="270" cy="64" r="83" fill="#243e5b" opacity=".45" />
      <path d="M0 260h320v60H0Z" fill="#233950" />
      <ellipse cx="160" cy="269" rx="133" ry="10" fill="#0e2036" opacity=".4" />
      <rect
        x="24"
        y="62"
        width="272"
        height="185"
        rx="7"
        fill="#0e1a2a"
        stroke="#637f97"
        strokeWidth="1.5"
      />
      <path
        d="M31 62h258a7 7 0 0 1 7 7v13H24V69a7 7 0 0 1 7-7Z"
        fill="#334a61"
      />
      <circle cx="35" cy="72" r="2.7" fill="#d59d88" />
      <circle cx="44" cy="72" r="2.7" fill="#d8cc8d" />
      <circle cx="53" cy="72" r="2.7" fill="#9abd9f" />
      <text
        x="160"
        y="75"
        textAnchor="middle"
        fill="#c0d1de"
        fontSize="6.5"
        className="scene-art__mono"
      >
        a little idea / editor
      </text>
      <path d="M24 83h23v151H24Z" fill="#1a2a3e" />
      <path d="M47 83h59v151H47Z" fill="#142338" />
      <path
        d="M31 94h8v10h-8Zm0 21h8m-8 4h8m-8 4h8m-7 15 5-5 5 5-5 5Zm-1 18v8m-4-4h8"
        stroke="#8da6bb"
        strokeWidth="1.2"
        fill="none"
      />
      <path d="M110 83h71v17h-71Z" fill="#263e55" />
      <path d="M111 100h181" stroke="#324a60" strokeWidth=".8" />
      <text
        x="118"
        y="94"
        fill="#d5e0d4"
        fontSize="6"
        className="scene-art__mono"
      >
        experiment.ts
      </text>
      <g fontSize="5.8" fill="#91a7bb" className="scene-art__mono">
        <text x="55" y="96">
          EXPLORER
        </text>
        <text x="55" y="112">
          ▾ little-idea
        </text>
        <text x="60" y="125">
          ▾ src
        </text>
        <text x="64" y="138" fill="#dff08a">
          experiment.ts
        </text>
        <text x="64" y="151">
          index.ts
        </text>
        <text x="60" y="165">
          package.json
        </text>
      </g>
      <g className="scene-art__mono" fontSize="7.2">
        <g fill="#566c84" fontSize="6.8">
          <text x="112" y="116">
            1
          </text>
          <text x="112" y="132">
            2
          </text>
          <text x="112" y="148">
            3
          </text>
          <text x="112" y="164">
            4
          </text>
          <text x="112" y="180">
            5
          </text>
          <text x="112" y="196">
            6
          </text>
        </g>
        <text x="125" y="116">
          <tspan fill="#b9acd4">const </tspan>
          <tspan fill="#d5e1e6">idea = </tspan>
          <tspan fill="#dff08a">"build something"</tspan>
          <tspan fill="#d5e1e6">;</tspan>
        </text>
        <text x="125" y="132" fill="#7a93ac">
          // curiosity, meet code.
        </text>
        <text x="125" y="148">
          <tspan fill="#b9acd4">async function </tspan>
          <tspan fill="#a8c6ff">create</tspan>
          <tspan fill="#d5e1e6">() {"{"}</tspan>
        </text>
        <text x="133" y="164">
          <tspan fill="#b9acd4">const </tspan>
          <tspan fill="#d5e1e6">draft = </tspan>
          <tspan fill="#b9acd4">await </tspan>
          <tspan fill="#a8c6ff">explore</tspan>
          <tspan fill="#d5e1e6">();</tspan>
        </text>
        <text x="133" y="180" className="scene-art-code__new-line">
          <tspan fill="#b9acd4">return </tspan>
          <tspan fill="#a8c6ff">ship</tspan>
          <tspan fill="#d5e1e6">(draft);</tspan>
        </text>
        <text x="125" y="196" fill="#d5e1e6">
          {"}"}
        </text>
        <path
          d="M227 171v11"
          stroke="#dff08a"
          strokeWidth="2"
          className="scene-art-code__caret"
        />
      </g>
      <path d="M106 205h190v29H106Z" fill="#111f30" />
      <path d="M106 205h190" stroke="#3c5269" strokeWidth="1" />
      <text
        x="116"
        y="218"
        fill="#dff08a"
        fontSize="6.4"
        className="scene-art__mono"
      >
        $ npm run dev
      </text>
      <text
        x="116"
        y="229"
        fill="#8faac1"
        fontSize="6"
        className="scene-art__mono scene-art-code__ready"
      >
        ready. let's make it work.
      </text>
      <path d="M24 234h272v7a6 6 0 0 1-6 6H30a6 6 0 0 1-6-6Z" fill="#335e86" />
      <text
        x="32"
        y="242"
        fill="#d3e0df"
        fontSize="5.7"
        className="scene-art__mono"
      >
        main* ✓ TypeScript
      </text>
      <g className="scene-art-code__preview">
        <rect
          x="213"
          y="190"
          width="87"
          height="64"
          rx="5"
          fill="#e0e5d5"
          stroke="#7194b2"
          strokeWidth="1.3"
        />
        <path
          d="M218 190h77a5 5 0 0 1 5 5v7h-87v-7a5 5 0 0 1 5-5Z"
          fill="#91acc0"
        />
        <circle cx="220" cy="196" r="1.6" fill="#e2e9d6" />
        <circle cx="226" cy="196" r="1.6" fill="#e2e9d6" />
        <rect x="220" y="209" width="31" height="35" rx="3" fill="#2c5884" />
        <path
          d="m227 228 5 5 11-14"
          fill="none"
          stroke="#dff08a"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M259 214h31m-31 6h23m-23 6h28"
          stroke="#7594a5"
          strokeWidth="3"
          strokeLinecap="round"
        />
        <rect x="259" y="235" width="24" height="8" rx="3" fill="#9bb779" />
      </g>
      <path d="m71 253-13 20h169l-13-20Z" fill="#7692a8" />
      <path d="m77 258-5 9h141l-5-9Z" fill="#3f5a73" />
      <path
        d="M82 260h121m-124 4h127m-117-7-2 10m13-10-1 10m13-10v10m12-10v10m12-10 1 10m11-10 2 10m11-10 2 10m11-10 2 10m11-10 2 10"
        stroke="#9cb0bd"
        strokeWidth=".8"
        opacity=".65"
      />
      <path
        d="M27 246h22v18c0 9-22 9-22 0Zm22 3h3c10 0 10 13-3 13"
        fill="#d4dbc4"
        stroke="#9dafb0"
        strokeWidth="2"
      />
      <path
        d="M32 238c-7-8 7-9 1-18m9 18c-6-9 7-10 1-18"
        fill="none"
        stroke="#b7c9cb"
        strokeWidth="1.5"
        opacity=".5"
        className="scene-art-code__steam"
      />
    </g>
  );
}

function GamesScene({ id }: { id: string }) {
  return (
    <g className="scene-art-games">
      <path d="M0 0h320v320H0Z" fill="#1a2944" />
      <ellipse
        cx="161"
        cy="275"
        rx="115"
        ry="12"
        fill="#0f1e32"
        opacity=".65"
      />
      <rect
        x="40"
        y="61"
        width="240"
        height="150"
        rx="9"
        fill="#0d192d"
        stroke="#6483a2"
        strokeWidth="2"
      />
      <g clipPath={`url(#${id}-game-clip)`}>
        <path d="M48 69h224v133H48Z" fill="#2b385b" />
        <circle cx="229" cy="99" r="17" fill="#d5dfb0" />
        <circle cx="235" cy="94" r="16" fill="#2b385b" />
        <path
          d="m73 86 1 3 3 1-3 1-1 3-1-3-3-1 3-1Zm69-4 1 2 3 1-3 1-1 3-1-3-2-1 2-1Zm38 24 1 2 3 1-3 1-1 3-1-3-2-1 2-1Z"
          fill="#c7d7dd"
          opacity=".8"
        />
        <g className="scene-art-games__hills">
          <path
            d="m24 171 41-41 40 35 40-47 49 52 34-29 69 51v22H24Z"
            fill="#3e5474"
          />
          <path
            d="M26 196c33-55 70-6 106-33s62-10 101 13 44-6 69-15v56H26Z"
            fill="#436c78"
          />
        </g>
        <path d="M48 190h224v15H48Z" fill="#1b3948" />
        <path d="M48 190h224" stroke="#9db68c" strokeWidth="4" />
        <path
          d="M54 197h18m13 0h14m16 0h21m15 0h12m14 0h22m15 0h20m10 0h19"
          stroke="#426354"
          strokeWidth="2"
        />
        <path d="M104 166h38v7h-38Zm79-24h44v7h-44Z" fill="#91aa80" />
        <path d="M107 173h32v5h-32m79-29h38v5h-38" fill="#315762" />
        <g className="scene-art-games__runner">
          <path
            d="m137 176-5 12m12-12 8 10"
            fill="none"
            stroke="#e3d9b5"
            strokeWidth="4"
            strokeLinecap="round"
            className="scene-art-games__legs"
          />
          <path d="m134 158-3 18h16l-3-18Z" fill="#b6c5e6" />
          <path
            d="m134 161-8 8m18-8 9 3"
            stroke="#d5af91"
            strokeWidth="3"
            strokeLinecap="round"
          />
          <circle cx="139" cy="151" r="7" fill="#d5af91" />
          <path d="M132 149c0-9 13-9 15-2l-8-2-6 6Z" fill="#182b42" />
          <path d="m134 157-6 5 6 6Z" fill="#dba08a" />
        </g>
        <g className="scene-art-games__gem" fill="#dff08a">
          <path d="m214 121 5 6-5 7-5-7Z" />
          <path d="m241 166 5 6-5 7-5-7Z" />
        </g>
        <path
          d="M57 79h24"
          stroke="#dff08a"
          strokeWidth="3"
          strokeLinecap="round"
        />
        <path
          d="M57 85h16"
          stroke="#a8c6ff"
          strokeWidth="2"
          strokeLinecap="round"
          opacity=".6"
        />
      </g>
      <path
        d="M146 212v13m28-13v13m-40 2h52"
        stroke="#6a849e"
        strokeWidth="5"
        strokeLinecap="round"
      />
      <path
        d="M87 235c3-17 15-23 29-16l14 4h61l15-4c13-7 27-1 29 16l8 28c3 16-11 25-21 16l-23-19h-77l-23 19c-11 9-25 0-21-16Z"
        fill="#b7c8d3"
        stroke="#e1e8dd"
        strokeWidth="1"
      />
      <path
        d="M88 244c-3 15-5 21-4 26 1 7 6 8 11 4l17-16m120-14c3 15 5 21 4 26-1 7-6 8-11 4l-17-16"
        fill="#7190a5"
      />
      <circle cx="136" cy="251" r="10" fill="#3d5870" />
      <circle cx="185" cy="251" r="10" fill="#3d5870" />
      <circle cx="136" cy="251" r="6" fill="#66849c" />
      <circle cx="185" cy="251" r="6" fill="#66849c" />
      <path d="M106 228h8v7h7v8h-7v7h-8v-7h-7v-8h7Z" fill="#29455e" />
      <g stroke="#28465f" strokeWidth="1">
        <circle
          cx="213"
          cy="230"
          r="4"
          fill="#dff08a"
          className="scene-art-games__button"
        />
        <circle cx="222" cy="239" r="4" fill="#a8c6ff" />
        <circle cx="213" cy="248" r="4" fill="#d6a28a" />
        <circle cx="204" cy="239" r="4" fill="#8eb1b0" />
      </g>
      <path
        d="M153 237h5m7 0h5"
        stroke="#55758a"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        d="M151 223h20"
        stroke="#dff08a"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </g>
  );
}

function FoodScene({ id }: { id: string }) {
  return (
    <g className="scene-art-food">
      <path d="M0 0h320v320H0Z" fill={`url(#${id}-warm)`} />
      <path
        d="M0 90h320M0 130h320M0 170h320M40 50v40m80-40v40m80-40v40m80-40v40M0 90v40m80-40v40m80-40v40m80-40v40m80-40v40M40 130v40m80-40v40m80-40v40m80-40v40"
        stroke="#d3c5aa"
        strokeWidth=".7"
        opacity=".13"
      />
      <path d="M0 239h320v81H0Z" fill="#253b48" />
      <path d="M0 240h320" stroke="#8f9e92" strokeWidth="3" />
      <rect x="31" y="218" width="256" height="15" rx="3" fill="#9d8160" />
      <path d="M47 180h51v39H47Z" fill="#b49d76" />
      <ellipse cx="72" cy="181" rx="25" ry="7" fill="#cfb893" />
      <g fill="#7e9e72">
        <path d="M69 183c-23-1-22-26-13-22 2-19 15-19 16 2 10-19 22-7 9 7 18-5 22 11-7 15Z" />
        <path d="M70 183c-8-13-2-32 5-35 8 10 9 26-3 35Z" fill="#a2b17b" />
      </g>
      <path
        d="M239 125h18l5 91h-29Zm4-15h10v15h-10Z"
        fill="#6a8268"
        stroke="#93a086"
        strokeWidth="1.5"
      />
      <rect x="238" y="158" width="20" height="27" rx="2" fill="#c9c6a3" />
      <path
        d="M243 164h10m-10 6h8m-8 6h10"
        stroke="#75876c"
        strokeWidth="1.5"
      />
      <rect x="48" y="247" width="218" height="37" rx="5" fill="#71828a" />
      <rect x="56" y="251" width="202" height="28" rx="4" fill="#334d5c" />
      <ellipse
        cx="150"
        cy="255"
        rx="65"
        ry="13"
        fill="#db9a61"
        opacity=".23"
        className="scene-art-food__heat"
      />
      <path
        d="M90 261h117m-103-11v21m24-21v21m24-21v21m24-21v21m24-21v21"
        stroke="#162f40"
        strokeWidth="3"
      />
      <g className="scene-art-food__wok">
        <path
          d="m213 203 58-26c8-3 14 9 6 13l-57 26Z"
          fill="#8c694c"
          stroke="#b2966e"
          strokeWidth="1.5"
        />
        <path
          d="M75 207c7 67 141 67 150 0Z"
          fill={`url(#${id}-pan)`}
          stroke="#78909a"
          strokeWidth="1"
        />
        <path
          d="M89 222c23 23 72 31 106 11"
          fill="none"
          stroke="#b0b8a5"
          strokeWidth="2"
          opacity=".17"
        />
        <ellipse
          cx="149"
          cy="207"
          rx="75"
          ry="28"
          fill="#182d38"
          stroke="#94a3a0"
          strokeWidth="3"
        />
        <g clipPath={`url(#${id}-food-clip)`}>
          <ellipse cx="149" cy="211" rx="71" ry="24" fill="#7f6245" />
          <g fill="none" stroke="#d3ad69" strokeWidth="3" strokeLinecap="round">
            <path d="M91 207c22-27 39 35 67 3s39-1 56 1M92 219c10-28 27 4 42-11s17 28 43 9 29 6 36-9M102 197c19-9 24 17 39 9s37-6 42 10M111 222c19-10 35 14 56-17s31-4 40-3" />
          </g>
          <path
            d="m102 212 9-8 7 9-11 7m65-17 7-6 10 9-8 9m-40 1 7-10 11 4-5 9"
            fill="#c87953"
          />
          <path
            d="m123 202 5-10 8 7-2 10m58 2 8-7 4 8-8 7m-53-2 7-4 6 9-9 3"
            fill="#91ad71"
          />
        </g>
        <path
          d="M79 204c21-23 115-34 141 1"
          stroke="#bdc0a8"
          strokeWidth="1.3"
          opacity=".5"
          fill="none"
        />
      </g>
      <g className="scene-art-food__spoon">
        <path d="m202 193 47-66c3-5 9-1 6 4l-46 67Z" fill="#b28b5d" />
        <ellipse
          cx="199"
          cy="202"
          rx="10"
          ry="17"
          transform="rotate(39 199 202)"
          fill="#c5a270"
        />
        <path
          d="m195 198 5 3 3 6"
          stroke="#a17e52"
          strokeWidth="1.3"
          fill="none"
        />
      </g>
      <g className="scene-art-food__ingredients">
        <path d="m118 160 8-8 9 7-7 10Z" fill="#d29458" />
        <path d="m159 146 8 2-3 13-9-3Z" fill="#aac279" />
        <path d="m184 169 9-7 6 8-10 6Z" fill="#cc795e" />
        <path d="M139 169c-11-12 4-24 11-20 3 9-1 17-11 20Z" fill="#84a86e" />
        <path d="m140 167 5-12" stroke="#b8ca8e" strokeWidth="1" />
      </g>
      <g
        className="scene-art-food__steam"
        fill="none"
        stroke="#d4e2d1"
        strokeWidth="2"
        strokeLinecap="round"
        opacity=".44"
      >
        <path d="M111 177c-17-19 15-28 3-48" />
        <path d="M148 169c-16-20 17-30 3-54" />
        <path d="M181 182c-16-19 12-24 3-42" />
      </g>
      <circle cx="248" cy="264" r="6" fill="#aeb8a8" />
      <path
        d="M248 260v5"
        stroke="#456374"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </g>
  );
}

export default function InterestScene({ interest }: { interest: Interest }) {
  const id = `interest-scene-${useId().replace(/:/g, "")}`;
  return (
    <g className={`interest-scene interest-scene--${interest}`}>
      <SceneDefinitions id={id} />
      {interest === "travel" && <TravelScene id={id} />}
      {interest === "badminton" && <BadmintonScene id={id} />}
      {interest === "movies" && <MoviesScene id={id} />}
      {interest === "tech" && <TechScene id={id} />}
      {interest === "code" && <CodeScene />}
      {interest === "games" && <GamesScene id={id} />}
      {interest === "food" && <FoodScene id={id} />}
    </g>
  );
}
