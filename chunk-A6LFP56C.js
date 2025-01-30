import{Y as pt}from"./chunk-IIHLPXRX.js";import{Ad as P,Kd as V,Pd as D,Qd as Y,Vd as T,Yd as G,a as q,b as B,d as dt,f as Q}from"./chunk-FQPWDFHW.js";var X=dt((N,z)=>{"use strict";(function(o,s){typeof N=="object"&&typeof z=="object"?z.exports=s():typeof define=="function"&&define.amd?define([],s):typeof N=="object"?N.ClipboardJS=s():o.ClipboardJS=s()})(N,function(){return function(){var u={686:function(a,n,t){"use strict";t.d(n,{default:function(){return lt}});var e=t(279),g=t.n(e),l=t(370),b=t.n(l),v=t(817),E=t.n(v);function c(p){try{return document.execCommand(p)}catch{return!1}}var w=function(i){var r=E()(i);return c("cut"),r},y=w;function _(p){var i=document.documentElement.getAttribute("dir")==="rtl",r=document.createElement("textarea");r.style.fontSize="12pt",r.style.border="0",r.style.padding="0",r.style.margin="0",r.style.position="absolute",r.style[i?"right":"left"]="-9999px";var f=window.pageYOffset||document.documentElement.scrollTop;return r.style.top="".concat(f,"px"),r.setAttribute("readonly",""),r.value=p,r}var A=function(i,r){var f=_(i);r.container.appendChild(f);var d=E()(f);return c("copy"),f.remove(),d},O=function(i){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{container:document.body},f="";return typeof i=="string"?f=A(i,r):i instanceof HTMLInputElement&&!["text","search","url","tel","password"].includes(i?.type)?f=A(i.value,r):(f=E()(i),c("copy")),f},I=O;function C(p){"@babel/helpers - typeof";return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?C=function(r){return typeof r}:C=function(r){return r&&typeof Symbol=="function"&&r.constructor===Symbol&&r!==Symbol.prototype?"symbol":typeof r},C(p)}var j=function(){var i=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},r=i.action,f=r===void 0?"copy":r,d=i.container,m=i.target,S=i.text;if(f!=="copy"&&f!=="cut")throw new Error('Invalid "action" value, use either "copy" or "cut"');if(m!==void 0)if(m&&C(m)==="object"&&m.nodeType===1){if(f==="copy"&&m.hasAttribute("disabled"))throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');if(f==="cut"&&(m.hasAttribute("readonly")||m.hasAttribute("disabled")))throw new Error(`Invalid "target" attribute. You can't cut text from elements with "readonly" or "disabled" attributes`)}else throw new Error('Invalid "target" value, use a valid Element');if(S)return I(S,{container:d});if(m)return f==="cut"?y(m):I(m,{container:d})},h=j;function x(p){"@babel/helpers - typeof";return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?x=function(r){return typeof r}:x=function(r){return r&&typeof Symbol=="function"&&r.constructor===Symbol&&r!==Symbol.prototype?"symbol":typeof r},x(p)}function rt(p,i){if(!(p instanceof i))throw new TypeError("Cannot call a class as a function")}function J(p,i){for(var r=0;r<i.length;r++){var f=i[r];f.enumerable=f.enumerable||!1,f.configurable=!0,"value"in f&&(f.writable=!0),Object.defineProperty(p,f.key,f)}}function ot(p,i,r){return i&&J(p.prototype,i),r&&J(p,r),p}function it(p,i){if(typeof i!="function"&&i!==null)throw new TypeError("Super expression must either be null or a function");p.prototype=Object.create(i&&i.prototype,{constructor:{value:p,writable:!0,configurable:!0}}),i&&F(p,i)}function F(p,i){return F=Object.setPrototypeOf||function(f,d){return f.__proto__=d,f},F(p,i)}function at(p){var i=st();return function(){var f=L(p),d;if(i){var m=L(this).constructor;d=Reflect.construct(f,arguments,m)}else d=f.apply(this,arguments);return ct(this,d)}}function ct(p,i){return i&&(x(i)==="object"||typeof i=="function")?i:ut(p)}function ut(p){if(p===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return p}function st(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch{return!1}}function L(p){return L=Object.setPrototypeOf?Object.getPrototypeOf:function(r){return r.__proto__||Object.getPrototypeOf(r)},L(p)}function W(p,i){var r="data-clipboard-".concat(p);if(i.hasAttribute(r))return i.getAttribute(r)}var ft=function(p){it(r,p);var i=at(r);function r(f,d){var m;return rt(this,r),m=i.call(this),m.resolveOptions(d),m.listenClick(f),m}return ot(r,[{key:"resolveOptions",value:function(){var d=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};this.action=typeof d.action=="function"?d.action:this.defaultAction,this.target=typeof d.target=="function"?d.target:this.defaultTarget,this.text=typeof d.text=="function"?d.text:this.defaultText,this.container=x(d.container)==="object"?d.container:document.body}},{key:"listenClick",value:function(d){var m=this;this.listener=b()(d,"click",function(S){return m.onClick(S)})}},{key:"onClick",value:function(d){var m=d.delegateTarget||d.currentTarget,S=this.action(m)||"copy",k=h({action:S,container:this.container,target:this.target(m),text:this.text(m)});this.emit(k?"success":"error",{action:S,text:k,trigger:m,clearSelection:function(){m&&m.focus(),window.getSelection().removeAllRanges()}})}},{key:"defaultAction",value:function(d){return W("action",d)}},{key:"defaultTarget",value:function(d){var m=W("target",d);if(m)return document.querySelector(m)}},{key:"defaultText",value:function(d){return W("text",d)}},{key:"destroy",value:function(){this.listener.destroy()}}],[{key:"copy",value:function(d){var m=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{container:document.body};return I(d,m)}},{key:"cut",value:function(d){return y(d)}},{key:"isSupported",value:function(){var d=arguments.length>0&&arguments[0]!==void 0?arguments[0]:["copy","cut"],m=typeof d=="string"?[d]:d,S=!!document.queryCommandSupported;return m.forEach(function(k){S=S&&!!document.queryCommandSupported(k)}),S}}]),r}(g()),lt=ft},828:function(a){var n=9;if(typeof Element<"u"&&!Element.prototype.matches){var t=Element.prototype;t.matches=t.matchesSelector||t.mozMatchesSelector||t.msMatchesSelector||t.oMatchesSelector||t.webkitMatchesSelector}function e(g,l){for(;g&&g.nodeType!==n;){if(typeof g.matches=="function"&&g.matches(l))return g;g=g.parentNode}}a.exports=e},438:function(a,n,t){var e=t(828);function g(v,E,c,w,y){var _=b.apply(this,arguments);return v.addEventListener(c,_,y),{destroy:function(){v.removeEventListener(c,_,y)}}}function l(v,E,c,w,y){return typeof v.addEventListener=="function"?g.apply(null,arguments):typeof c=="function"?g.bind(null,document).apply(null,arguments):(typeof v=="string"&&(v=document.querySelectorAll(v)),Array.prototype.map.call(v,function(_){return g(_,E,c,w,y)}))}function b(v,E,c,w){return function(y){y.delegateTarget=e(y.target,E),y.delegateTarget&&w.call(v,y)}}a.exports=l},879:function(a,n){n.node=function(t){return t!==void 0&&t instanceof HTMLElement&&t.nodeType===1},n.nodeList=function(t){var e=Object.prototype.toString.call(t);return t!==void 0&&(e==="[object NodeList]"||e==="[object HTMLCollection]")&&"length"in t&&(t.length===0||n.node(t[0]))},n.string=function(t){return typeof t=="string"||t instanceof String},n.fn=function(t){var e=Object.prototype.toString.call(t);return e==="[object Function]"}},370:function(a,n,t){var e=t(879),g=t(438);function l(c,w,y){if(!c&&!w&&!y)throw new Error("Missing required arguments");if(!e.string(w))throw new TypeError("Second argument must be a String");if(!e.fn(y))throw new TypeError("Third argument must be a Function");if(e.node(c))return b(c,w,y);if(e.nodeList(c))return v(c,w,y);if(e.string(c))return E(c,w,y);throw new TypeError("First argument must be a String, HTMLElement, HTMLCollection, or NodeList")}function b(c,w,y){return c.addEventListener(w,y),{destroy:function(){c.removeEventListener(w,y)}}}function v(c,w,y){return Array.prototype.forEach.call(c,function(_){_.addEventListener(w,y)}),{destroy:function(){Array.prototype.forEach.call(c,function(_){_.removeEventListener(w,y)})}}}function E(c,w,y){return g(document.body,c,w,y)}a.exports=l},817:function(a){function n(t){var e;if(t.nodeName==="SELECT")t.focus(),e=t.value;else if(t.nodeName==="INPUT"||t.nodeName==="TEXTAREA"){var g=t.hasAttribute("readonly");g||t.setAttribute("readonly",""),t.select(),t.setSelectionRange(0,t.value.length),g||t.removeAttribute("readonly"),e=t.value}else{t.hasAttribute("contenteditable")&&t.focus();var l=window.getSelection(),b=document.createRange();b.selectNodeContents(t),l.removeAllRanges(),l.addRange(b),e=l.toString()}return e}a.exports=n},279:function(a){function n(){}n.prototype={on:function(t,e,g){var l=this.e||(this.e={});return(l[t]||(l[t]=[])).push({fn:e,ctx:g}),this},once:function(t,e,g){var l=this;function b(){l.off(t,b),e.apply(g,arguments)}return b._=e,this.on(t,b,g)},emit:function(t){var e=[].slice.call(arguments,1),g=((this.e||(this.e={}))[t]||[]).slice(),l=0,b=g.length;for(l;l<b;l++)g[l].fn.apply(g[l].ctx,e);return this},off:function(t,e){var g=this.e||(this.e={}),l=g[t],b=[];if(l&&e)for(var v=0,E=l.length;v<E;v++)l[v].fn!==e&&l[v].fn._!==e&&b.push(l[v]);return b.length?g[t]=b:delete g[t],this}},a.exports=n,a.exports.TinyEmitter=n}},o={};function s(a){if(o[a])return o[a].exports;var n=o[a]={exports:{}};return u[a](n,n.exports,s),n.exports}return function(){s.n=function(a){var n=a&&a.__esModule?function(){return a.default}:function(){return a};return s.d(n,{a:n}),n}}(),function(){s.d=function(a,n){for(var t in n)s.o(n,t)&&!s.o(a,t)&&Object.defineProperty(a,t,{enumerable:!0,get:n[t]})}}(),function(){s.o=function(a,n){return Object.prototype.hasOwnProperty.call(a,n)}}(),s(686)}().default})});var et=Q(pt()),nt=Q(X());var K=(e=>(e[e.All=1]="All",e[e.Title=2]="Title",e[e.Desc=3]="Desc",e[e.Url=4]="Url",e[e.Current=5]="Current",e[e.Quick=6]="Quick",e))(K||{});function $(u){return Math.floor(Math.random()*u)}function _t(u,o){if(!o.trim())return[];let{type:s,page:a,id:n}=U(),t=Number(s)||2,e=[],g=[{nav:e}],l={};function b(v){v=v||u;for(let E=0;E<v.length;E++){let c=v[E];if(Array.isArray(c.nav)&&b(c.nav),c.name){c.name=tt(c.name),c.desc=tt(c.desc);let w=c.name.toLowerCase(),y=c.desc.toLowerCase(),_=c.url.toLowerCase(),A=o.toLowerCase(),O=()=>{if(w.includes(A)){let h=c,x=new RegExp(`(${o})`,"i");if(h.__name__=h.name,h.name=h.name.replace(x,"<b>$1</b>"),!l[h.id])return l[h.id]=!0,e.push(h),!0}return!1},I=()=>{if(_?.includes?.(A)&&!l[c.id]||c.tags.some(x=>x.url?.includes(o))&&!l[c.id])return l[c.id]=!0,e.push(c),!0},C=()=>{if(y[0]==="!")return!1;if(y.includes(A)){let h=c,x=new RegExp(`(${o})`,"i");if(h.__desc__=h.desc,h.desc=h.desc.replace(x,"<b>$1</b>"),!l[h.id])return l[h.id]=!0,e.push(h),!0}return!1},j=()=>{if(c.top&&w.includes(A)){let h=c,x=new RegExp(`(${o})`,"i");if(h.__name__=h.name,h.name=h.name.replace(x,"<b>$1</b>"),!l[h.id])return l[h.id]=!0,e.push(h),!0}return!1};try{switch(t){case 4:I();break;case 2:O();break;case 3:C();break;case 6:j();break;default:O(),C(),I()}}catch(h){console.error(h)}}}}return t===5?b(u[a].nav[n].nav):b(),e.length<=0?[]:g}function M(){let u=$(255),o=$(255),s=$(255);return`#${u.toString(16)}${o.toString(16)}${s.toString(16)}000`.slice(0,7)}var H;function St(){if(Z())return;clearInterval(H);let u="random-light-bg",o=document.getElementById(u)||document.createElement("div"),s=$(360);o.id=u,o.style.cssText="position:fixed;top:0;left:0;right:0;bottom:0;z-index:-3;transition: 1s linear;",o.style.backgroundImage=`linear-gradient(${s}deg, ${M()} 0%, ${M()} 100%)`,document.body.appendChild(o);function a(){if(Z()){clearInterval(H);return}let n=`linear-gradient(${s}deg, ${M()} 0%, ${M()} 100%)`;o.style.opacity=".3",setTimeout(()=>{o.style.backgroundImage=n,o.style.opacity="1"},1e3)}H=setInterval(a,1e4)}function U(){let{href:u}=window.location,o=u.split("?")[1]||"",s=et.default.parse(o),a=parseInt(s.id)||0,n=parseInt(s.page)||0;if(s.id===void 0&&s.page===void 0)try{let t=window.localStorage.getItem(P.location);if(t){let e=JSON.parse(t);n=e.page||0,a=e.id||0}}catch{}return n>T.length-1?(n=0,a=0):T[n]&&!(a<=T[n].nav.length-1)&&(a=T[n].nav.length-1),n=n<0?0:n,a=a<0?0:a,B(q({},s),{q:s.q||"",id:a,page:n})}function Tt(){let{page:u,id:o}=U();window.localStorage.setItem(P.location,JSON.stringify({page:u,id:o}))}function At(){let u=Y[0]||{};try{let o=window.localStorage.getItem(P.engine);if(o){let s=JSON.parse(o),a=Y.find(n=>n.name===s.name);a&&(u=a)}}catch{}return u}function Ct(u){window.localStorage.setItem(P.engine,JSON.stringify(u))}function Z(){let u=window.localStorage.getItem(P.isDark),o=window?.matchMedia?.("(prefers-color-scheme: dark)")?.matches;return!u&&o?o:!!Number(u)}function It(u,o){let s=u.target,a=`copy-${Date.now()}`;return s.id=a,s.setAttribute("data-clipboard-text",o),new Promise(n=>{let t=new nt.default(`#${a}`);t.on("success",function(){t.destroy(),n(!0)}),t.on("error",function(){t.destroy(),n(!1)})})}function tt(u){return u?u.replace(/<b>|<\/b>/g,""):""}function Pt(){let{id:u,page:o}=U(),s=[];try{T[o]&&T[o]?.nav?.length>0&&(V||!T[o].nav[u].ownVisible)?s=T[o].nav[u].nav:s=[]}catch{s=[]}return s}function R(u){return u<10?`0${u}`:String(u)}function Nt(u){let o=document.querySelectorAll(u),s=Number.MAX_SAFE_INTEGER;if(o.length<=0)return s;let n=o[0].parentNode.clientWidth,t=0;for(let e=0;e<o.length;e++){let g=o[e];if(t+=g.clientWidth,t>n){s=e-1;break}}return s}function gt(){return"ontouchstart"in window}function Ot(){let u=new Date,o=new Date(u.getFullYear(),0,0),s=u-o,a=1e3*60*60*24;return Math.floor(s/a)}function Lt(){let u=G("_weeks"),o=new Date,s=o.getFullYear(),a=R(o.getHours()),n=R(o.getMinutes()),t=R(o.getSeconds()),e=o.getMonth()+1,g=o.getDate(),l=o.getDay(),b=R(g);return{year:s,hours:a,minutes:n,seconds:t,month:e,date:g,zeroDate:b,dayText:u[l]}}function kt(){let u=gt()?D.appTheme:D.theme;return u==="Current"?D.theme:u}export{K as a,_t as b,St as c,U as d,Tt as e,At as f,Ct as g,Z as h,It as i,tt as j,Pt as k,Nt as l,gt as m,Ot as n,Lt as o,kt as p};
