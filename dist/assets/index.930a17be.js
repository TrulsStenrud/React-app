import{s as b,d as M,r as d,j as a,F as x,a as t,b as _,R as C,u as j,l as P,L as g,c as T,B as E,S as I,e as y}from"./vendor.a435a0b6.js";const q=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))n(o);new MutationObserver(o=>{for(const c of o)if(c.type==="childList")for(const l of c.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&n(l)}).observe(document,{childList:!0,subtree:!0});function s(o){const c={};return o.integrity&&(c.integrity=o.integrity),o.referrerpolicy&&(c.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?c.credentials="include":o.crossorigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function n(o){if(o.ep)return;o.ep=!0;const c=s(o);fetch(o.href,c)}};q();const w=b.div`
display: flex;
flex-direction: column;
align-items: center;
align-items: center;
justify-content: center;
`,k=b.div`
display: flex;
flex-direction: row;
align-items: center;
align-items: center;
justify-content: center;
`,m=["Johanne","Sara","Kevin","Truls","Jostein","Eirin"],v=["Ordstyrer"];function z(){const e=_("AwesomeSeed3".toString()),s=[],n=[];for(v.forEach(()=>{n.push(Object.assign([],m))});s.length!==m.length;){const o=[],c=[];v.forEach((l,i)=>{const u=n[i].filter(f=>!o.includes(f)),p=u[Math.floor(e.quick()*u.length)];c.push(p),o.push(p),n[i]=n[i].filter(f=>f!==p)}),s.push(c)}return s}function U(r,e,s){const n=s%m.length,o=e[n];for(var c=0;c<o.length;c++)if(o[c]===r)return v[c];return""}const H=()=>{var r=new Date("01/8/2021");const e=M(new Date,r),s=z(),[n,o]=d.exports.useState(e);return a(x,{children:[a(k,{children:["Day ",n,a(w,{children:[t("button",{onClick:()=>o(n+(n<15?1:0)),children:"\u25B2"}),t("button",{onClick:()=>o(n+(n>1?-1:0)),children:"\u25BC"})]})]}),t("table",{cellSpacing:"20px",style:{textAlign:"left"},children:t("tbody",{children:m.map((c,l)=>a("tr",{children:[t("td",{children:c}),t("td",{children:U(c,s,n)})]},c))})})]})};class K extends C.Component{componentDidMount(){document.title="Roles"}render(){return t(H,{})}}const N="https://api.spotify.com/v1/",S=N+"me/player",$=N+"search",F="https://accounts.spotify.com/authorize",J=window.location.origin+"/spotify";function Q(r,e,s){const n="track",o="NO",c=10,l=$+"?q="+encodeURIComponent(r)+"&type="+n+"&market="+o+"&limit="+c;fetch(l,{method:"GET",headers:{Authorization:"Bearer "+e}}).then(i=>i.json()).then(i=>{console.log("received data",i),s(i)},i=>{console.log("received error",i)})}const G="user-read-currently-playing user-read-playback-state streaming user-modify-playback-state",V=String("918ae6ee825d47db939674675145724f"),R=F+"?response_type=token&client_id="+V+("&scope="+encodeURIComponent(G))+"&redirect_uri="+encodeURIComponent(J);function W(r,e){const s=S+"/next";fetch(s,{method:"POST",headers:{Authorization:"Bearer "+r,Accept:"application/json","Content-Type":"application/json"}}).then(n=>{console.log("received data",n),e()},n=>{console.log("received error",n)})}function X(r,e){const s=S+"/previous";A(s,r,e)}function Y(r,e,s){const n=S+"/queue?uri="+r;A(n,e,s)}function A(r,e,s){fetch(r,{method:"POST",headers:{Authorization:"Bearer "+e}}).then(n=>{console.log("received data",n),s()},n=>{console.log("received error",n)})}const Z=r=>{const{track:e,queueSong:s}=r;return t("div",{onClick:()=>{s(e.uri)},children:e.name})},ee=r=>{const{token:e}=r,[s,n]=d.exports.useState({}),[o,c]=d.exports.useState(""),[l,i]=d.exports.useState(""),u=h=>{c(h.target.value)},p=()=>{console.log(o),Q(o,e.access_token,n)},f=h=>{h.key==="Enter"&&p()},B=()=>{i("Loading"),W(e.access_token,()=>i(""))},L=()=>{i("Loading"),X(e.access_token,()=>i(""))},O=h=>{i("Loading"),Y(h,e.access_token,()=>i(""))};return a(w,{children:[t(x,{children:l}),a(k,{children:[t("button",{onClick:L,children:"Previous"}),t("button",{onClick:B,children:"Next"})]}),a(k,{children:[t("input",{value:o,onChange:u,onKeyDown:f}),t("button",{onClick:p,children:"Search"})]}),s.tracks&&s.tracks.items.map((h,D)=>t(Z,{track:h,queueSong:O},D))]})},te=()=>{d.exports.useEffect(()=>{document.title="Spotify"});const[r,e]=d.exports.useState({}),s=j();d.exports.useEffect(()=>{const c=new URLSearchParams(s.search);s.hash?e(window.location.hash.substring(1).split("&").reduce(function(l,i){if(i){var u=i.split("=");l[u[0]]=decodeURIComponent(u[1])}return l},[])):c.has("code")||(console.log("Redirecting to spotify auth"),window.location.assign(R))},[s.hash,s.search]);const n=window.location.href,o=200;return t("div",{className:"SpotifyApp",children:a("header",{className:"App-header",children:[t(P,{style:{width:o,height:o},size:512,value:n}),!("access_token"in r)&&t("a",{className:"btn btn--loginApp-link",href:R,children:"Login to Spotify"}),"access_token"in r&&t(ee,{token:r})]})})};const ne=r=>{const e=r.isClicked?"change":"";return a("div",{id:r.id,className:"container",onClick:r.onClick,children:[t("div",{id:"bar1",className:e}),t("div",{id:"bar2",className:e}),t("div",{id:"bar3",className:e})]})};const oe=r=>{const e=r.show?"show":"hide";return a("div",{id:"slidingMenu",className:e,children:[t(g,{className:"link",to:"/",children:"Home"}),t(g,{className:"link",to:"/roles",children:"Roles"}),t(g,{className:"link",to:"/spotify",children:"Spotify"})]})},se=r=>{var[e,s]=d.exports.useState(!1);const n=()=>s(!e);function o(){e&&s(!1)}return a("div",{onClick:o,children:[t(oe,{show:e}),t(ne,{id:"menuBtn",onClick:n,isClicked:e}),t("div",{className:"Content",children:t("header",{className:"Content-header",children:r.children})})]})};T.render(t(C.StrictMode,{children:t(E,{children:t(se,{children:a(I,{children:[t(y,{path:"/spotify",children:t(te,{})}),t(y,{path:"/roles",children:t(K,{})}),a(y,{path:"/",children:["Welcome",t("br",{}),"Currently not much to see here"]})]})})})}),document.getElementById("root"));