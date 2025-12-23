export const foxSVG = `
<svg id="fox-character" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" style="shape-rendering: crispEdges; overflow: visible;">
  <style>
    /* ПАЛИТРА */
    .c-fur { fill: #e67e22; }      /* Рыжий */
    .c-white { fill: #f4f0e6; }    /* Белый */
    .c-dark { fill: #1a1a1a; }     /* Черный (контур/глаза) */
    .c-cheek { fill: #ffb7b2; }    /* Розовые щеки */

    /* УПРАВЛЕНИЕ СЛОЯМИ */
    .fox-pose { display: none; }   /* Скрываем всё по умолчанию */
    .fox-pose.active { display: block; } /* Показываем активное */

    /* АНИМАЦИЯ ХВОСТА (когда сидит) */
    @keyframes wag {
      0%, 100% { transform: rotate(0deg); }
      50% { transform: rotate(5deg); }
    }
    .tail-wag {
      transform-origin: 2px 14px; /* Точка крепления хвоста */
      animation: wag 2s infinite ease-in-out;
    }
  </style>

  <g id="state-sit" class="fox-pose active">
    <g class="tail-wag">
        <rect x="0" y="9" width="4" height="4" class="c-white"/>
        <rect x="1" y="11" width="5" height="4" class="c-fur"/>
        <rect x="2" y="14" width="3" height="2" class="c-fur"/>
    </g>
    <rect x="6" y="11" width="8" height="6" class="c-fur"/>
    <rect x="8" y="12" width="4" height="5" class="c-white"/> <rect x="8" y="16" width="1" height="2" class="c-dark"/>
    <rect x="11" y="16" width="1" height="2" class="c-dark"/>
    <rect x="5" y="4" width="10" height="8" class="c-fur"/>
    <path d="M5 2 h3 v3 h-3 z M12 2 h3 v3 h-3 z" class="c-fur"/>
    <path d="M6 3 h1 v2 h-1 z M13 3 h1 v2 h-1 z" class="c-white"/>
    <path d="M5 9 h10 v3 h-10 z M7 12 h6 v1 h-6 z" class="c-white"/>
    <rect x="7" y="7" width="1" height="1" class="c-dark"/>
    <rect x="12" y="7" width="1" height="1" class="c-dark"/>
    <rect x="9" y="10" width="2" height="1" class="c-dark"/> <rect x="5" y="9" width="2" height="1" class="c-cheek"/>
    <rect x="13" y="9" width="2" height="1" class="c-cheek"/>
  </g>

  <g id="state-walk-1" class="fox-pose">
    <rect x="0" y="10" width="5" height="3" class="c-fur"/>
    <rect x="0" y="10" width="2" height="2" class="c-white"/>
    <rect x="6" y="10" width="8" height="5" class="c-fur"/>
    <rect x="8" y="11" width="4" height="4" class="c-white"/>
    <rect x="6" y="15" width="2" height="3" class="c-dark"/> <rect x="12" y="15" width="2" height="3" class="c-dark"/> <g transform="translate(0, -1)"> <rect x="5" y="4" width="10" height="8" class="c-fur"/>
       <path d="M5 2 h3 v3 h-3 z M12 2 h3 v3 h-3 z" class="c-fur"/>
       <path d="M6 3 h1 v2 h-1 z M13 3 h1 v2 h-1 z" class="c-white"/>
       <path d="M5 9 h10 v3 h-10 z M7 12 h6 v1 h-6 z" class="c-white"/>
       <rect x="7" y="7" width="1" height="1" class="c-dark"/>
       <rect x="12" y="7" width="1" height="1" class="c-dark"/>
       <rect x="9" y="10" width="2" height="1" class="c-dark"/>
       <rect x="5" y="9" width="2" height="1" class="c-cheek"/>
       <rect x="13" y="9" width="2" height="1" class="c-cheek"/>
    </g>
  </g>

  <g id="state-walk-2" class="fox-pose">
    <rect x="0" y="11" width="5" height="3" class="c-fur"/>
    <rect x="0" y="11" width="2" height="2" class="c-white"/>
    <rect x="6" y="10" width="8" height="5" class="c-fur"/>
    <rect x="8" y="11" width="4" height="4" class="c-white"/>
    <rect x="8" y="15" width="2" height="3" class="c-dark"/>
    <rect x="10" y="15" width="2" height="3" class="c-dark"/>
    <g transform="translate(0, 0)"> <rect x="5" y="4" width="10" height="8" class="c-fur"/>
       <path d="M5 2 h3 v3 h-3 z M12 2 h3 v3 h-3 z" class="c-fur"/>
       <path d="M6 3 h1 v2 h-1 z M13 3 h1 v2 h-1 z" class="c-white"/>
       <path d="M5 9 h10 v3 h-10 z M7 12 h6 v1 h-6 z" class="c-white"/>
       <rect x="7" y="7" width="1" height="1" class="c-dark"/>
       <rect x="12" y="7" width="1" height="1" class="c-dark"/>
       <rect x="9" y="10" width="2" height="1" class="c-dark"/>
       <rect x="5" y="9" width="2" height="1" class="c-cheek"/>
       <rect x="13" y="9" width="2" height="1" class="c-cheek"/>
    </g>
  </g>
</svg>
`;