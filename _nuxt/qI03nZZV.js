function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["./C-O33-0H.js","./w5Dcy_zS.js","./entry.BJUnyuML.css","./bNaE6FFb.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as f}from"./w5Dcy_zS.js";import{v as y,t as d}from"./C6xkoTkW.js";import"./BjjZuADg.js";import"./Cpj98o6Y.js";import"./BneCoJRQ.js";import"./Dp1udyz6.js";function N(i){const e=i;return async r=>{const h=[],o=[];y(r,s=>{var t,l;return["pre","code"].includes(s.tagName)&&!!((t=s.properties)!=null&&t.language||(l=s.properties)!=null&&l.highlights)},s=>{const t=s,l=typeof t.properties.highlights=="string"?t.properties.highlights.split(/[,\s]+/).map(Number):Array.isArray(t.properties.highlights)?t.properties.highlights.map(Number):[],m=e.highlighter(d(s),t.properties.language,e.theme,{highlights:l.filter(Boolean),meta:t.properties.meta}).then(({tree:a,className:c,style:n,inlineStyle:u})=>{var g;t.properties.className=((t.properties.className||"")+" "+c).trim(),t.properties.style=((t.properties.style||"")+" "+u).trim(),((g=t.children[0])==null?void 0:g.tagName)==="code"?t.children[0].children=a:t.children=a[0].children||a,n&&o.push(n)});h.push(m)}),h.length&&(await Promise.all(h),r.children.push({type:"element",tagName:"style",children:[{type:"text",value:_(o.join(""))}],properties:{}}))}}const _=i=>{const e=i.split("}").filter(r=>!!r.trim()).map(r=>r.trim()+"}");return Array.from(new Set(e)).join("")},p={theme:{},async highlighter(i,e,r,h){var o,s;try{return window.sessionStorage.getItem("mdc-shiki-highlighter")==="browser"?f(()=>import("./C-O33-0H.js"),__vite__mapDeps([0,1,2,3]),import.meta.url).then(t=>t.default(i,e,r,h)).catch(()=>({})):await $fetch("/api/_mdc/highlight",{params:{code:i,lang:e,theme:JSON.stringify(r),options:JSON.stringify(h)}})}catch(t){if(((o=t==null?void 0:t.response)==null?void 0:o.status)===404)return window.sessionStorage.setItem("mdc-shiki-highlighter","browser"),(s=this.highlighter)==null?void 0:s.call(this,i,e,r,h)}return Promise.resolve({tree:[{type:"text",value:i}],className:"",style:""})}};function w(i={}){const e={...p,...i};return typeof e.highlighter!="function"&&(e.highlighter=p.highlighter),N(e)}const x={},I={highlight:{instance:w,options:{}}},O={theme:{light:"material-theme-lighter",default:"material-theme",dark:"material-theme-palenight"}};export{O as highlight,I as rehypePlugins,x as remarkPlugins};
