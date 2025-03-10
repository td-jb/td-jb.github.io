import{r as s,p,j as e,d as i,m as c}from"./index-CjnSG9Iv.js";const l=c`
  from { opacity: 0; }
  to { opacity: 1; }
`,f=c`
  from { transform: translateX(-10px); opacity: 0; }
  to { transform: translateX(0); opacity: 1; }
`,g=i.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  font-size: 0.6rem; // Scaled down for preview
  animation: ${l} 0.5s ease-in-out;
`,x=i.div`
  height: 10%;
  background: ${t=>t.theme.backgroundAlt};
  border-bottom: 1px solid ${t=>t.theme.border};
  display: flex;
  align-items: center;
  padding: 0 5%;
`,u=i.div`
  display: flex;
  height: 90%;
`,v=i.div`
  width: 25%;
  background: ${t=>t.theme.background};
  border-right: 1px solid ${t=>t.theme.border};
  padding: 5%;
`,b=i.div`
  width: 75%;
  padding: 5%;
  background: ${t=>t.theme.background};
  overflow: hidden;
`,n=i.div`
  margin-bottom: 8%;
  color: ${t=>t.theme.text};
  font-weight: bold;
  position: relative;
  padding-left: 10px;
  animation: ${f} 0.5s ease-in-out;
  animation-delay: ${t=>t.index*.1}s;
  animation-fill-mode: both;
  
  &:before {
    content: '';
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    width: 3px;
    height: 70%;
    background: ${t=>t.active==="true"?t.theme.primary:"transparent"};
    border-radius: 2px;
  }
  
  &:first-child {
    &:before {
      background: ${t=>t.active==="true"?t.theme.primary:"transparent"};
    }
  }
`,j=i.h3`
  margin: 0 0 5% 0;
  color: ${t=>t.theme.primary};
  font-size: 0.8rem;
`,w=i.p`
  color: ${t=>t.theme.text};
  margin: 0;
  line-height: 1.4;
  font-size: 0.6rem;
`,d=i.div`
  margin-top: ${t=>t.marginTop||"5%"};
  width: ${t=>t.width||"80%"};
  height: ${t=>t.height||"30%"};
  background: #3a3a3a;
  border-radius: 4px;
  animation: ${l} 0.5s ease-in-out;
  animation-delay: ${t=>t.delay||0}s;
  animation-fill-mode: both;
`,y=({onLoad:t})=>{const[r,h]=s.useState(0);s.useEffect(()=>{if(t&&typeof t=="function"){const a=setTimeout(()=>{t()},100);return()=>clearTimeout(a)}},[t]),s.useEffect(()=>{const a=setInterval(()=>{h(m=>(m+1)%4)},2e3);return()=>clearInterval(a)},[]);const o=Object.values(p)[0]||{title:"Sample Project",description:"This is a sample project description for the preview. It showcases what the website layout looks like in a simplified form."};return e.jsxs(g,{children:[e.jsx(x,{children:e.jsx("div",{style:{color:"#fff",fontWeight:"bold"},children:"Portfolio"})}),e.jsxs(u,{children:[e.jsxs(v,{children:[e.jsx(n,{active:(r===0).toString(),index:0,children:"About Me"}),e.jsx(n,{active:(r===1).toString(),index:1,children:"Projects"}),e.jsx(n,{active:(r===2).toString(),index:2,children:"Contact"}),e.jsx(n,{active:(r===3).toString(),index:3,children:"Links"})]}),e.jsxs(b,{children:[e.jsx(j,{children:o.title}),e.jsx(w,{children:typeof o.description=="string"?o.description.length>150?`${o.description.substring(0,150)}...`:o.description:"Project description preview"}),e.jsx(d,{width:"80%",height:"30%",delay:.2}),e.jsx(d,{width:"60%",height:"10%",marginTop:"5%",delay:.3})]})]})]})};y.defaultProps={onLoad:()=>{}};export{y as default};
