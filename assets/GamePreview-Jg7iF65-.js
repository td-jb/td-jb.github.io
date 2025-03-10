import{r as u,j as l,d as i,m as E}from"./index-DlaV70zO.js";let c,s,f;try{const e=require("../../config/gameElements"),t=require("../../config/cellTypes");c=e.EMOJI_DEFINITIONS,s=t.OBJECTS,f=t.CHARACTERS}catch{console.warn("Using fallback emoji definitions for preview"),f={PLAYER:"player"},s={DOOR:"door",PUZZLE_MAKER:"puzzle_maker",WALL:"wall"},c={[f.PLAYER]:"🧙‍♂️",[s.DOOR]:"🚪",[s.PUZZLE_MAKER]:"🧩",[s.WALL]:"🧱"}}const M=E`
  0% { transform: scale(1); }
  50% { transform: scale(1.2); }
  100% { transform: scale(1); }
`,j=i.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: column;
`,A=i.div`
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  grid-template-rows: repeat(8, 1fr);
  gap: 1px;
  height: 80%;
  background: #1e293b; /* Match the game's containerBg */
  padding: 2%;
`,b=i.div`
  background: ${e=>{switch(e.type){case"wall":return"#2c3a52";case"player":return"rgba(124, 133, 241, 0.25)";case"project":return"rgba(124, 133, 241, 0.15)";case"door":return"rgba(124, 133, 241, 0.15)";default:return"#1e293b"}}};
  border: 1px solid #2c3a52; // Match the game's cellBorder
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.8rem;
  position: relative;
  
  &::after {
    content: ${e=>{try{switch(e.type){case"player":return`"${c[f.PLAYER]||"🧙‍♂️"}"`;case"project":return`"${c[s.PUZZLE_MAKER]||"🧩"}"`;case"door":return`"${c[s.DOOR]||"🚪"}"`;case"wall":return`"${c[s.WALL]||"🟫"}"`;default:return'""'}}catch{switch(e.type){case"player":return'"🧙‍♂️"';case"project":return'"🧩"';case"door":return'"🚪"';case"wall":return'"🟫"';default:return'""'}}}};
    position: absolute;
    font-size: 0.7rem;
    animation: ${e=>e.type==="player"?M:"none"} 2s infinite;
  }
`,R=i.div`
  height: 20%;
  background: #121826; // Match the game's panelBg
  border-top: 1px solid #2c3a52; // Match the game's panelBorder
  padding: 2% 4%;
  color: #e2e8f0; // Match the game's text
  font-size: 0.6rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
`,P=i.div`
  font-weight: bold;
  color: #e2e8f0; // Match the game's text
`,S=i.div`
  opacity: 0.8;
  color: #94a3b8; // Match the game's textSecondary
`,v=()=>{const e=Array(8).fill().map(()=>Array(8).fill("floor"));for(let t=0;t<8;t++)e[0][t]="wall",e[7][t]="wall",e[t][0]="wall",e[t][7]="wall";return e[3][2]="wall",e[3][3]="wall",e[3][4]="wall",e[3][5]="wall",e[4][5]="wall",e[5][5]="wall",e[2][2]="player",e[5][2]="project",e[6][6]="door",e[2][6]="project",e},O=({onLoad:e})=>{const[t,x]=u.useState({x:2,y:2}),[d,h]=u.useState(v());return u.useEffect(()=>{if(e&&typeof e=="function"){const o=setTimeout(()=>{e()},100);return()=>clearTimeout(o)}},[e]),u.useEffect(()=>{const o=[{x:0,y:-1},{x:1,y:0},{x:0,y:1},{x:-1,y:0}];let a=0,n=0;const m=3,g=setInterval(()=>{x(p=>{const r={x:p.x+o[a].x,y:p.y+o[a].y};if(r.x>=1&&r.x<7&&r.y>=1&&r.y<7&&d[r.y][r.x]!=="wall"){n++;const y=d.map(w=>[...w]);return y[p.y][p.x]="floor",y[r.y][r.x]="player",h(y),n>=m&&(a=(a+1)%4,n=0),r}return a=(a+1)%4,n=0,p})},1e3);return()=>clearInterval(g)},[d]),l.jsxs(j,{children:[l.jsx(A,{children:d.map((o,a)=>o.map((n,m)=>l.jsx(b,{type:n},`${m}-${a}`)))}),l.jsxs(R,{children:[l.jsx(P,{children:"Main Hall"}),l.jsx(S,{children:"Explore the map to discover projects. Use arrow keys to move."})]})]})};O.defaultProps={onLoad:()=>{}};export{O as default};
