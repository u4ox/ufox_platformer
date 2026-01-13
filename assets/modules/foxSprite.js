export const foxSVG = `
<svg id="fox-character" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg" style="shape-rendering: crispEdges; overflow: visible;">
  <style>
    .c-fur { fill: #e67e22; }
    .c-white { fill: #f4f0e6; }
    .c-dark { fill: #1a1a1a; }
    .c-cheek { fill: #ffb7b2; }

    .fox-pose { display: none; }
    .fox-pose.active { display: block; }

    /* --- АНИМАЦИИ --- */
    @keyframes wag {
      0%, 100% { transform: rotate(0deg); }
      50% { transform: rotate(10deg); }
    }
    .tail-wag {
      transform-origin: 2px 14px;
      animation: wag 2s infinite ease-in-out;
    }

    @keyframes bob {
        0%, 100% { transform: translateY(0); }
        50% { transform: translateY(-2px); }
    }
    .tail-bobbing {
        animation: bob 0.4s infinite ease-in-out;
    }
  </style>

  <g id="state-sit" class="fox-pose active">
    <g class="tail-wag"> 
        <rect x="2" y="10" width="4" height="4" class="c-white"/>
        <rect x="3" y="12" width="5" height="4" class="c-fur"/>
    </g>
    <rect x="8" y="11" width="8" height="6" class="c-fur"/>
    <rect x="10" y="12" width="4" height="5" class="c-white"/>
    
    <rect x="9" y="16" width="2" height="2" class="c-dark"/>
    <rect x="13" y="16" width="2" height="2" class="c-dark"/>
    
    <g transform="translate(2, 0)"> 
        <rect x="5" y="4" width="10" height="8" class="c-fur"/>
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

  <g id="state-walk-1" class="fox-pose">
    <g class="tail-bobbing">
        <rect x="0" y="9" width="6" height="4" class="c-fur"/>
        <rect x="0" y="9" width="2" height="2" class="c-white"/>
    </g>
    
    <rect x="5" y="11" width="10" height="5" class="c-fur"/> 
    <rect x="13" y="12" width="5" height="4" class="c-white"/> <rect x="5" y="16" width="2" height="2" class="c-dark"/> 
    <rect x="8" y="16" width="2" height="2" class="c-dark"/> 
    <rect x="13" y="16" width="2" height="2" class="c-dark"/> 
    <rect x="16" y="16" width="2" height="2" class="c-dark"/> 

    <g transform="translate(4, -1)">
        <rect x="5" y="4" width="10" height="8" class="c-fur"/>
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
    <g class="tail-bobbing">
        <rect x="0" y="10" width="6" height="4" class="c-fur"/>
        <rect x="0" y="10" width="2" height="2" class="c-white"/>
    </g>

    <rect x="5" y="12" width="10" height="5" class="c-fur"/> 
    <rect x="12" y="12" width="4" height="4" class="c-white"/>

    <rect x="6" y="17" width="2" height="2" class="c-dark"/> 
    <rect x="7" y="17" width="2" height="2" class="c-dark"/> 
    <rect x="14" y="17" width="2" height="2" class="c-dark"/> 
    <rect x="15" y="17" width="2" height="2" class="c-dark"/> 
    
    <g transform="translate(4, 0)"> 
        <rect x="5" y="4" width="10" height="8" class="c-fur"/>
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