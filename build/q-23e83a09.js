import{_ as g,c as K,o as Z,J as st,j as it,l as lt,k as ct,H as ut,L as O,r as dt,R as j,B as v,s as _t,d as mt,i as M,q as pt,h as vt}from"./q-0daa6403.js";import{t as ft,j as $,k as z,r as tt,l as et,m as ot,n as J,o as yt,p as ht,q as St,s as P,v as w,w as Ct,x as Et,y as qt,z as bt,c as wt,C as gt,d as Rt,D as Lt,R as Pt,e as At,f as Dt,h as It,i as kt}from"./q-b66fad94.js";const Tt=":root{view-transition-name:none}";const G=()=>g(()=>import("./q-fd0d3c88.js"),["build/q-fd0d3c88.js","build/q-0daa6403.js","build/q-b66fad94.js","build/q-4ed993c7.js"]),W=[["/",[G,()=>g(()=>import("./q-673b65fd.js"),["build/q-673b65fd.js","build/q-0daa6403.js"])]],["trailer/",[G,()=>g(()=>import("./q-f5f60d08.js"),["build/q-f5f60d08.js","build/q-0daa6403.js"])]]],B=[];const Q=!0;const Ht=async(f,n)=>{const[y,S,a,C]=K(),{type:i="link",forceReload:d=f===void 0,replaceState:_=!1,scroll:E=!0}=typeof n=="object"?n:{forceReload:n},l=a.value.dest,o=f===void 0?l:ft(f,C.url);if(!$(o,l)){location.href=o.href;return}if(!d&&z(o,l)){i==="link"&&o.href!==location.href&&history.pushState(null,"",o),tt(i,o,new URL(location.href),et()),i==="popstate"&&(window._qCityScrollEnabled=!0);return}return a.value={type:i,dest:o,forceReload:d,replaceState:_,scroll:E},ot(o,Z()),J(W,B,Q,o.pathname),y.value=void 0,C.isNavigating=!0,new Promise(q=>{S.r=q})},Ot=({track:f})=>{const[n,y,S,a,C,i,d,_,E,l,o]=K();async function q(){var X;const[u,R]=f(()=>[l.value,n.value]),nt=st(""),A=o.url,m=R?"form":u.type,rt=u.replaceState;let r,L,U=null,D;{r=new URL(u.dest,location),r.pathname.endsWith("/")||(r.pathname+="/");let I=J(W,B,Q,r.pathname);D=Z();const k=L=await ot(r,D,!0,R);if(!k){l.untrackedValue={type:m,dest:r};return}const x=k.href,T=new URL(x,r);yt(T,r)||(r=T,I=J(W,B,Q,r.pathname)),U=await I}if(U){const[I,k,x,T]=U,H=x,at=H[H.length-1];o.prevUrl=A,o.url=r,o.params={...k},l.untrackedValue={type:m,dest:r};const b=ht(L,o,H,nt);y.headings=at.headings,y.menu=T,S.value=it(H),a.links=b.links,a.meta=b.meta,a.styles=b.styles,a.scripts=b.scripts,a.title=b.title,a.frontmatter=b.frontmatter;{E.viewTransition!==!1&&(document.__q_view_transition__=!0);let F;m==="popstate"&&(F=et()),u.scroll&&(!u.forceReload||!z(r,A))&&(m==="link"||m==="popstate")&&(document.__q_scroll_restore__=()=>tt(m,r,A,F));const Y=L==null?void 0:L.loaders,t=window;if(Y&&Object.assign(d,Y),St.clear(),!t._qCitySPA){if(t._qCitySPA=!0,history.scrollRestoration="manual",t.addEventListener("popstate",()=>{t._qCityScrollEnabled=!1,clearTimeout(t._qCityScrollDebounce),i(location.href,{type:"popstate"})}),t.removeEventListener("popstate",t._qCityInitPopstate),t._qCityInitPopstate=void 0,!t._qCityHistoryPatch){t._qCityHistoryPatch=!0;const s=history.pushState,p=history.replaceState,h=e=>(e===null||typeof e>"u"?e={}:(e==null?void 0:e.constructor)!==Object&&(e={_data:e}),e._qCityScroll=e._qCityScroll||w(document.documentElement),e);history.pushState=(e,c,V)=>(e=h(e),s.call(history,e,c,V)),history.replaceState=(e,c,V)=>(e=h(e),p.call(history,e,c,V))}document.body.addEventListener("click",s=>{if(s.defaultPrevented)return;const p=s.target.closest("a[href]");if(p&&!p.hasAttribute("preventdefault:click")){const h=p.getAttribute("href"),e=new URL(location.href),c=new URL(h,e);if($(c,e)&&z(c,e)){if(s.preventDefault(),!c.hash&&!c.href.endsWith("#")){c.href!==e.href&&history.pushState(null,"",c),t._qCityScrollEnabled=!1,clearTimeout(t._qCityScrollDebounce),P({...w(document.documentElement),x:0,y:0}),location.reload();return}i(p.getAttribute("href"))}}}),document.body.removeEventListener("click",t._qCityInitAnchors),t._qCityInitAnchors=void 0,window.navigation||(document.addEventListener("visibilitychange",()=>{if(t._qCityScrollEnabled&&document.visibilityState==="hidden"){const s=w(document.documentElement);P(s)}},{passive:!0}),document.removeEventListener("visibilitychange",t._qCityInitVisibility),t._qCityInitVisibility=void 0),t.addEventListener("scroll",()=>{t._qCityScrollEnabled&&(clearTimeout(t._qCityScrollDebounce),t._qCityScrollDebounce=setTimeout(()=>{const s=w(document.documentElement);P(s),t._qCityScrollDebounce=void 0},200))},{passive:!0}),removeEventListener("scroll",t._qCityInitScroll),t._qCityInitScroll=void 0,(X=t._qCityBootstrap)==null||X.remove(),t._qCityBootstrap=void 0,Ct.resolve()}if(m!=="popstate"){t._qCityScrollEnabled=!1,clearTimeout(t._qCityScrollDebounce);const s=w(document.documentElement);P(s)}Et(window,m,A,r,rt),lt(D).then(()=>{var h;qt(D).setAttribute("q:route",I);const p=w(document.documentElement);P(p),t._qCityScrollEnabled=!0,o.isNavigating=!1,(h=_.r)==null||h.call(_)})}}}q()},Ut=f=>{ct(M(()=>g(()=>Promise.resolve().then(()=>N),void 0),"s_RPDJAz33WLA"));const n=bt();if(!(n!=null&&n.params))throw new Error("Missing Qwik City Env Data");const y=ut("url");if(!y)throw new Error("Missing Qwik URL Env Data");const S=new URL(y),a=O({url:S,params:n.params,isNavigating:!1,prevUrl:void 0},{deep:!1}),C={},i=dt(O(n.response.loaders,{deep:!1})),d=j({type:"initial",dest:S,forceReload:!1,replaceState:!1,scroll:!0}),_=O(wt),E=O({headings:void 0,menu:void 0}),l=j(),o=n.response.action,q=o?n.response.loaders[o]:void 0,u=j(q?{id:o,data:n.response.formData,output:{result:q,status:n.response.status}}:void 0),R=M(()=>g(()=>Promise.resolve().then(()=>N),void 0),"s_fX0bDjeJa0E",[u,C,d,a]);return v(gt,E),v(Rt,l),v(Lt,_),v(Pt,a),v(At,R),v(Dt,i),v(It,u),v(kt,d),_t(M(()=>g(()=>Promise.resolve().then(()=>N),void 0),"s_02wMImzEAbk",[u,E,l,_,n,R,i,C,f,d,a])),mt(pt,null,3,"qY_0")},N=Object.freeze(Object.defineProperty({__proto__:null,_hW:vt,s_02wMImzEAbk:Ot,s_RPDJAz33WLA:Tt,s_TxCFOy819ag:Ut,s_fX0bDjeJa0E:Ht},Symbol.toStringTag,{value:"Module"}));export{vt as _hW,Ot as s_02wMImzEAbk,Tt as s_RPDJAz33WLA,Ut as s_TxCFOy819ag,Ht as s_fX0bDjeJa0E};
