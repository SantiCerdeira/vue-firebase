(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerPolicy&&(i.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?i.credentials="include":r.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(r){if(r.ep)return;r.ep=!0;const i=n(r);fetch(r.href,i)}})();function Cl(t,e){const n=Object.create(null),s=t.split(",");for(let r=0;r<s.length;r++)n[s[r]]=!0;return e?r=>!!n[r.toLowerCase()]:r=>!!n[r]}function Sl(t){if(ne(t)){const e={};for(let n=0;n<t.length;n++){const s=t[n],r=We(s)?pv(s):Sl(s);if(r)for(const i in r)e[i]=r[i]}return e}else{if(We(t))return t;if(Pe(t))return t}}const hv=/;(?![^(]*\))/g,dv=/:([^]+)/,fv=/\/\*.*?\*\//gs;function pv(t){const e={};return t.replace(fv,"").split(hv).forEach(n=>{if(n){const s=n.split(dv);s.length>1&&(e[s[0].trim()]=s[1].trim())}}),e}function bt(t){let e="";if(We(t))e=t;else if(ne(t))for(let n=0;n<t.length;n++){const s=bt(t[n]);s&&(e+=s+" ")}else if(Pe(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const mv="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",gv=Cl(mv);function Lf(t){return!!t||t===""}const de=t=>We(t)?t:t==null?"":ne(t)||Pe(t)&&(t.toString===Vf||!ie(t.toString))?JSON.stringify(t,Ff,2):String(t),Ff=(t,e)=>e&&e.__v_isRef?Ff(t,e.value):Fs(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[s,r])=>(n[`${s} =>`]=r,n),{})}:$f(e)?{[`Set(${e.size})`]:[...e.values()]}:Pe(e)&&!ne(e)&&!Bf(e)?String(e):e,Ne={},Ls=[],Bt=()=>{},yv=()=>!1,vv=/^on[^a-z]/,Qo=t=>vv.test(t),xl=t=>t.startsWith("onUpdate:"),dt=Object.assign,Al=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},_v=Object.prototype.hasOwnProperty,me=(t,e)=>_v.call(t,e),ne=Array.isArray,Fs=t=>Yo(t)==="[object Map]",$f=t=>Yo(t)==="[object Set]",ie=t=>typeof t=="function",We=t=>typeof t=="string",kl=t=>typeof t=="symbol",Pe=t=>t!==null&&typeof t=="object",Uf=t=>Pe(t)&&ie(t.then)&&ie(t.catch),Vf=Object.prototype.toString,Yo=t=>Vf.call(t),wv=t=>Yo(t).slice(8,-1),Bf=t=>Yo(t)==="[object Object]",Rl=t=>We(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,so=Cl(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Xo=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},Ev=/-(\w)/g,on=Xo(t=>t.replace(Ev,(e,n)=>n?n.toUpperCase():"")),Iv=/\B([A-Z])/g,cr=Xo(t=>t.replace(Iv,"-$1").toLowerCase()),Jo=Xo(t=>t.charAt(0).toUpperCase()+t.slice(1)),Ya=Xo(t=>t?`on${Jo(t)}`:""),Kr=(t,e)=>!Object.is(t,e),Xa=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},go=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},bv=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let wh;const Tv=()=>wh||(wh=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});let $t;class Cv{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=$t,!e&&$t&&(this.index=($t.scopes||($t.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const n=$t;try{return $t=this,e()}finally{$t=n}}}on(){$t=this}off(){$t=this.parent}stop(e){if(this._active){let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.scopes)for(n=0,s=this.scopes.length;n<s;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0,this._active=!1}}}function Sv(t,e=$t){e&&e.active&&e.effects.push(t)}function xv(){return $t}const Nl=t=>{const e=new Set(t);return e.w=0,e.n=0,e},jf=t=>(t.w&qn)>0,qf=t=>(t.n&qn)>0,Av=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=qn},kv=t=>{const{deps:e}=t;if(e.length){let n=0;for(let s=0;s<e.length;s++){const r=e[s];jf(r)&&!qf(r)?r.delete(t):e[n++]=r,r.w&=~qn,r.n&=~qn}e.length=n}},kc=new WeakMap;let Ar=0,qn=1;const Rc=30;let Ut;const us=Symbol(""),Nc=Symbol("");class Dl{constructor(e,n=null,s){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,Sv(this,s)}run(){if(!this.active)return this.fn();let e=Ut,n=Fn;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=Ut,Ut=this,Fn=!0,qn=1<<++Ar,Ar<=Rc?Av(this):Eh(this),this.fn()}finally{Ar<=Rc&&kv(this),qn=1<<--Ar,Ut=this.parent,Fn=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){Ut===this?this.deferStop=!0:this.active&&(Eh(this),this.onStop&&this.onStop(),this.active=!1)}}function Eh(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let Fn=!0;const Hf=[];function lr(){Hf.push(Fn),Fn=!1}function ur(){const t=Hf.pop();Fn=t===void 0?!0:t}function wt(t,e,n){if(Fn&&Ut){let s=kc.get(t);s||kc.set(t,s=new Map);let r=s.get(n);r||s.set(n,r=Nl()),zf(r)}}function zf(t,e){let n=!1;Ar<=Rc?qf(t)||(t.n|=qn,n=!jf(t)):n=!t.has(Ut),n&&(t.add(Ut),Ut.deps.push(t))}function yn(t,e,n,s,r,i){const o=kc.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&ne(t)){const c=Number(s);o.forEach((l,u)=>{(u==="length"||u>=c)&&a.push(l)})}else switch(n!==void 0&&a.push(o.get(n)),e){case"add":ne(t)?Rl(n)&&a.push(o.get("length")):(a.push(o.get(us)),Fs(t)&&a.push(o.get(Nc)));break;case"delete":ne(t)||(a.push(o.get(us)),Fs(t)&&a.push(o.get(Nc)));break;case"set":Fs(t)&&a.push(o.get(us));break}if(a.length===1)a[0]&&Dc(a[0]);else{const c=[];for(const l of a)l&&c.push(...l);Dc(Nl(c))}}function Dc(t,e){const n=ne(t)?t:[...t];for(const s of n)s.computed&&Ih(s);for(const s of n)s.computed||Ih(s)}function Ih(t,e){(t!==Ut||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}const Rv=Cl("__proto__,__v_isRef,__isVue"),Kf=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(kl)),Nv=Pl(),Dv=Pl(!1,!0),Pv=Pl(!0),bh=Ov();function Ov(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const s=ve(this);for(let i=0,o=this.length;i<o;i++)wt(s,"get",i+"");const r=s[e](...n);return r===-1||r===!1?s[e](...n.map(ve)):r}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){lr();const s=ve(this)[e].apply(this,n);return ur(),s}}),t}function Mv(t){const e=ve(this);return wt(e,"has",t),e.hasOwnProperty(t)}function Pl(t=!1,e=!1){return function(s,r,i){if(r==="__v_isReactive")return!t;if(r==="__v_isReadonly")return t;if(r==="__v_isShallow")return e;if(r==="__v_raw"&&i===(t?e?Xv:Xf:e?Yf:Qf).get(s))return s;const o=ne(s);if(!t){if(o&&me(bh,r))return Reflect.get(bh,r,i);if(r==="hasOwnProperty")return Mv}const a=Reflect.get(s,r,i);return(kl(r)?Kf.has(r):Rv(r))||(t||wt(s,"get",r),e)?a:ot(a)?o&&Rl(r)?a:a.value:Pe(a)?t?Jf(a):mi(a):a}}const Lv=Wf(),Fv=Wf(!0);function Wf(t=!1){return function(n,s,r,i){let o=n[s];if(Gs(o)&&ot(o)&&!ot(r))return!1;if(!t&&(!yo(r)&&!Gs(r)&&(o=ve(o),r=ve(r)),!ne(n)&&ot(o)&&!ot(r)))return o.value=r,!0;const a=ne(n)&&Rl(s)?Number(s)<n.length:me(n,s),c=Reflect.set(n,s,r,i);return n===ve(i)&&(a?Kr(r,o)&&yn(n,"set",s,r):yn(n,"add",s,r)),c}}function $v(t,e){const n=me(t,e);t[e];const s=Reflect.deleteProperty(t,e);return s&&n&&yn(t,"delete",e,void 0),s}function Uv(t,e){const n=Reflect.has(t,e);return(!kl(e)||!Kf.has(e))&&wt(t,"has",e),n}function Vv(t){return wt(t,"iterate",ne(t)?"length":us),Reflect.ownKeys(t)}const Gf={get:Nv,set:Lv,deleteProperty:$v,has:Uv,ownKeys:Vv},Bv={get:Pv,set(t,e){return!0},deleteProperty(t,e){return!0}},jv=dt({},Gf,{get:Dv,set:Fv}),Ol=t=>t,Zo=t=>Reflect.getPrototypeOf(t);function Bi(t,e,n=!1,s=!1){t=t.__v_raw;const r=ve(t),i=ve(e);n||(e!==i&&wt(r,"get",e),wt(r,"get",i));const{has:o}=Zo(r),a=s?Ol:n?Fl:Wr;if(o.call(r,e))return a(t.get(e));if(o.call(r,i))return a(t.get(i));t!==r&&t.get(e)}function ji(t,e=!1){const n=this.__v_raw,s=ve(n),r=ve(t);return e||(t!==r&&wt(s,"has",t),wt(s,"has",r)),t===r?n.has(t):n.has(t)||n.has(r)}function qi(t,e=!1){return t=t.__v_raw,!e&&wt(ve(t),"iterate",us),Reflect.get(t,"size",t)}function Th(t){t=ve(t);const e=ve(this);return Zo(e).has.call(e,t)||(e.add(t),yn(e,"add",t,t)),this}function Ch(t,e){e=ve(e);const n=ve(this),{has:s,get:r}=Zo(n);let i=s.call(n,t);i||(t=ve(t),i=s.call(n,t));const o=r.call(n,t);return n.set(t,e),i?Kr(e,o)&&yn(n,"set",t,e):yn(n,"add",t,e),this}function Sh(t){const e=ve(this),{has:n,get:s}=Zo(e);let r=n.call(e,t);r||(t=ve(t),r=n.call(e,t)),s&&s.call(e,t);const i=e.delete(t);return r&&yn(e,"delete",t,void 0),i}function xh(){const t=ve(this),e=t.size!==0,n=t.clear();return e&&yn(t,"clear",void 0,void 0),n}function Hi(t,e){return function(s,r){const i=this,o=i.__v_raw,a=ve(o),c=e?Ol:t?Fl:Wr;return!t&&wt(a,"iterate",us),o.forEach((l,u)=>s.call(r,c(l),c(u),i))}}function zi(t,e,n){return function(...s){const r=this.__v_raw,i=ve(r),o=Fs(i),a=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,l=r[t](...s),u=n?Ol:e?Fl:Wr;return!e&&wt(i,"iterate",c?Nc:us),{next(){const{value:h,done:d}=l.next();return d?{value:h,done:d}:{value:a?[u(h[0]),u(h[1])]:u(h),done:d}},[Symbol.iterator](){return this}}}}function Sn(t){return function(...e){return t==="delete"?!1:this}}function qv(){const t={get(i){return Bi(this,i)},get size(){return qi(this)},has:ji,add:Th,set:Ch,delete:Sh,clear:xh,forEach:Hi(!1,!1)},e={get(i){return Bi(this,i,!1,!0)},get size(){return qi(this)},has:ji,add:Th,set:Ch,delete:Sh,clear:xh,forEach:Hi(!1,!0)},n={get(i){return Bi(this,i,!0)},get size(){return qi(this,!0)},has(i){return ji.call(this,i,!0)},add:Sn("add"),set:Sn("set"),delete:Sn("delete"),clear:Sn("clear"),forEach:Hi(!0,!1)},s={get(i){return Bi(this,i,!0,!0)},get size(){return qi(this,!0)},has(i){return ji.call(this,i,!0)},add:Sn("add"),set:Sn("set"),delete:Sn("delete"),clear:Sn("clear"),forEach:Hi(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{t[i]=zi(i,!1,!1),n[i]=zi(i,!0,!1),e[i]=zi(i,!1,!0),s[i]=zi(i,!0,!0)}),[t,n,e,s]}const[Hv,zv,Kv,Wv]=qv();function Ml(t,e){const n=e?t?Wv:Kv:t?zv:Hv;return(s,r,i)=>r==="__v_isReactive"?!t:r==="__v_isReadonly"?t:r==="__v_raw"?s:Reflect.get(me(n,r)&&r in s?n:s,r,i)}const Gv={get:Ml(!1,!1)},Qv={get:Ml(!1,!0)},Yv={get:Ml(!0,!1)},Qf=new WeakMap,Yf=new WeakMap,Xf=new WeakMap,Xv=new WeakMap;function Jv(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Zv(t){return t.__v_skip||!Object.isExtensible(t)?0:Jv(wv(t))}function mi(t){return Gs(t)?t:Ll(t,!1,Gf,Gv,Qf)}function e_(t){return Ll(t,!1,jv,Qv,Yf)}function Jf(t){return Ll(t,!0,Bv,Yv,Xf)}function Ll(t,e,n,s,r){if(!Pe(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=r.get(t);if(i)return i;const o=Zv(t);if(o===0)return t;const a=new Proxy(t,o===2?s:n);return r.set(t,a),a}function $s(t){return Gs(t)?$s(t.__v_raw):!!(t&&t.__v_isReactive)}function Gs(t){return!!(t&&t.__v_isReadonly)}function yo(t){return!!(t&&t.__v_isShallow)}function Zf(t){return $s(t)||Gs(t)}function ve(t){const e=t&&t.__v_raw;return e?ve(e):t}function ep(t){return go(t,"__v_skip",!0),t}const Wr=t=>Pe(t)?mi(t):t,Fl=t=>Pe(t)?Jf(t):t;function tp(t){Fn&&Ut&&(t=ve(t),zf(t.dep||(t.dep=Nl())))}function np(t,e){t=ve(t);const n=t.dep;n&&Dc(n)}function ot(t){return!!(t&&t.__v_isRef===!0)}function ce(t){return sp(t,!1)}function t_(t){return sp(t,!0)}function sp(t,e){return ot(t)?t:new n_(t,e)}class n_{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:ve(e),this._value=n?e:Wr(e)}get value(){return tp(this),this._value}set value(e){const n=this.__v_isShallow||yo(e)||Gs(e);e=n?e:ve(e),Kr(e,this._rawValue)&&(this._rawValue=e,this._value=n?e:Wr(e),np(this))}}function k(t){return ot(t)?t.value:t}const s_={get:(t,e,n)=>k(Reflect.get(t,e,n)),set:(t,e,n,s)=>{const r=t[e];return ot(r)&&!ot(n)?(r.value=n,!0):Reflect.set(t,e,n,s)}};function rp(t){return $s(t)?t:new Proxy(t,s_)}var ip;class r_{constructor(e,n,s,r){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this[ip]=!1,this._dirty=!0,this.effect=new Dl(e,()=>{this._dirty||(this._dirty=!0,np(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!r,this.__v_isReadonly=s}get value(){const e=ve(this);return tp(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}ip="__v_isReadonly";function i_(t,e,n=!1){let s,r;const i=ie(t);return i?(s=t,r=Bt):(s=t.get,r=t.set),new r_(s,r,i||!r,n)}function $n(t,e,n,s){let r;try{r=s?t(...s):t()}catch(i){ea(i,e,n)}return r}function Dt(t,e,n,s){if(ie(t)){const i=$n(t,e,n,s);return i&&Uf(i)&&i.catch(o=>{ea(o,e,n)}),i}const r=[];for(let i=0;i<t.length;i++)r.push(Dt(t[i],e,n,s));return r}function ea(t,e,n,s=!0){const r=e?e.vnode:null;if(e){let i=e.parent;const o=e.proxy,a=n;for(;i;){const l=i.ec;if(l){for(let u=0;u<l.length;u++)if(l[u](t,o,a)===!1)return}i=i.parent}const c=e.appContext.config.errorHandler;if(c){$n(c,null,10,[t,o,a]);return}}o_(t,n,r,s)}function o_(t,e,n,s=!0){console.error(t)}let Gr=!1,Pc=!1;const rt=[];let Zt=0;const Us=[];let hn=null,rs=0;const op=Promise.resolve();let $l=null;function ap(t){const e=$l||op;return t?e.then(this?t.bind(this):t):e}function a_(t){let e=Zt+1,n=rt.length;for(;e<n;){const s=e+n>>>1;Qr(rt[s])<t?e=s+1:n=s}return e}function Ul(t){(!rt.length||!rt.includes(t,Gr&&t.allowRecurse?Zt+1:Zt))&&(t.id==null?rt.push(t):rt.splice(a_(t.id),0,t),cp())}function cp(){!Gr&&!Pc&&(Pc=!0,$l=op.then(up))}function c_(t){const e=rt.indexOf(t);e>Zt&&rt.splice(e,1)}function l_(t){ne(t)?Us.push(...t):(!hn||!hn.includes(t,t.allowRecurse?rs+1:rs))&&Us.push(t),cp()}function Ah(t,e=Gr?Zt+1:0){for(;e<rt.length;e++){const n=rt[e];n&&n.pre&&(rt.splice(e,1),e--,n())}}function lp(t){if(Us.length){const e=[...new Set(Us)];if(Us.length=0,hn){hn.push(...e);return}for(hn=e,hn.sort((n,s)=>Qr(n)-Qr(s)),rs=0;rs<hn.length;rs++)hn[rs]();hn=null,rs=0}}const Qr=t=>t.id==null?1/0:t.id,u_=(t,e)=>{const n=Qr(t)-Qr(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function up(t){Pc=!1,Gr=!0,rt.sort(u_);const e=Bt;try{for(Zt=0;Zt<rt.length;Zt++){const n=rt[Zt];n&&n.active!==!1&&$n(n,null,14)}}finally{Zt=0,rt.length=0,lp(),Gr=!1,$l=null,(rt.length||Us.length)&&up()}}function h_(t,e,...n){if(t.isUnmounted)return;const s=t.vnode.props||Ne;let r=n;const i=e.startsWith("update:"),o=i&&e.slice(7);if(o&&o in s){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:d}=s[u]||Ne;d&&(r=n.map(p=>We(p)?p.trim():p)),h&&(r=n.map(bv))}let a,c=s[a=Ya(e)]||s[a=Ya(on(e))];!c&&i&&(c=s[a=Ya(cr(e))]),c&&Dt(c,t,6,r);const l=s[a+"Once"];if(l){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,Dt(l,t,6,r)}}function hp(t,e,n=!1){const s=e.emitsCache,r=s.get(t);if(r!==void 0)return r;const i=t.emits;let o={},a=!1;if(!ie(t)){const c=l=>{const u=hp(l,e,!0);u&&(a=!0,dt(o,u))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!i&&!a?(Pe(t)&&s.set(t,null),null):(ne(i)?i.forEach(c=>o[c]=null):dt(o,i),Pe(t)&&s.set(t,o),o)}function ta(t,e){return!t||!Qo(e)?!1:(e=e.slice(2).replace(/Once$/,""),me(t,e[0].toLowerCase()+e.slice(1))||me(t,cr(e))||me(t,e))}let at=null,dp=null;function vo(t){const e=at;return at=t,dp=t&&t.type.__scopeId||null,e}function G(t,e=at,n){if(!e||t._n)return t;const s=(...r)=>{s._d&&$h(-1);const i=vo(e);let o;try{o=t(...r)}finally{vo(i),s._d&&$h(1)}return o};return s._n=!0,s._c=!0,s._d=!0,s}function Ja(t){const{type:e,vnode:n,proxy:s,withProxy:r,props:i,propsOptions:[o],slots:a,attrs:c,emit:l,render:u,renderCache:h,data:d,setupState:p,ctx:g,inheritAttrs:v}=t;let b,w;const O=vo(t);try{if(n.shapeFlag&4){const Q=r||s;b=Jt(u.call(Q,Q,h,i,p,d,g)),w=c}else{const Q=e;b=Jt(Q.length>1?Q(i,{attrs:c,slots:a,emit:l}):Q(i,null)),w=e.props?c:d_(c)}}catch(Q){$r.length=0,ea(Q,t,1),b=q(Pt)}let S=b;if(w&&v!==!1){const Q=Object.keys(w),{shapeFlag:oe}=S;Q.length&&oe&7&&(o&&Q.some(xl)&&(w=f_(w,o)),S=Hn(S,w))}return n.dirs&&(S=Hn(S),S.dirs=S.dirs?S.dirs.concat(n.dirs):n.dirs),n.transition&&(S.transition=n.transition),b=S,vo(O),b}const d_=t=>{let e;for(const n in t)(n==="class"||n==="style"||Qo(n))&&((e||(e={}))[n]=t[n]);return e},f_=(t,e)=>{const n={};for(const s in t)(!xl(s)||!(s.slice(9)in e))&&(n[s]=t[s]);return n};function p_(t,e,n){const{props:s,children:r,component:i}=t,{props:o,children:a,patchFlag:c}=e,l=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return s?kh(s,o,l):!!o;if(c&8){const u=e.dynamicProps;for(let h=0;h<u.length;h++){const d=u[h];if(o[d]!==s[d]&&!ta(l,d))return!0}}}else return(r||a)&&(!a||!a.$stable)?!0:s===o?!1:s?o?kh(s,o,l):!0:!!o;return!1}function kh(t,e,n){const s=Object.keys(e);if(s.length!==Object.keys(t).length)return!0;for(let r=0;r<s.length;r++){const i=s[r];if(e[i]!==t[i]&&!ta(n,i))return!0}return!1}function m_({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const g_=t=>t.__isSuspense;function y_(t,e){e&&e.pendingBranch?ne(t)?e.effects.push(...t):e.effects.push(t):l_(t)}function ro(t,e){if(Ve){let n=Ve.provides;const s=Ve.parent&&Ve.parent.provides;s===n&&(n=Ve.provides=Object.create(s)),n[t]=e}}function jt(t,e,n=!1){const s=Ve||at;if(s){const r=s.parent==null?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides;if(r&&t in r)return r[t];if(arguments.length>1)return n&&ie(e)?e.call(s.proxy):e}}const Ki={};function Vs(t,e,n){return fp(t,e,n)}function fp(t,e,{immediate:n,deep:s,flush:r,onTrack:i,onTrigger:o}=Ne){const a=xv()===(Ve==null?void 0:Ve.scope)?Ve:null;let c,l=!1,u=!1;if(ot(t)?(c=()=>t.value,l=yo(t)):$s(t)?(c=()=>t,s=!0):ne(t)?(u=!0,l=t.some(S=>$s(S)||yo(S)),c=()=>t.map(S=>{if(ot(S))return S.value;if($s(S))return Ps(S);if(ie(S))return $n(S,a,2)})):ie(t)?e?c=()=>$n(t,a,2):c=()=>{if(!(a&&a.isUnmounted))return h&&h(),Dt(t,a,3,[d])}:c=Bt,e&&s){const S=c;c=()=>Ps(S())}let h,d=S=>{h=w.onStop=()=>{$n(S,a,4)}},p;if(Xr)if(d=Bt,e?n&&Dt(e,a,3,[c(),u?[]:void 0,d]):c(),r==="sync"){const S=p0();p=S.__watcherHandles||(S.__watcherHandles=[])}else return Bt;let g=u?new Array(t.length).fill(Ki):Ki;const v=()=>{if(w.active)if(e){const S=w.run();(s||l||(u?S.some((Q,oe)=>Kr(Q,g[oe])):Kr(S,g)))&&(h&&h(),Dt(e,a,3,[S,g===Ki?void 0:u&&g[0]===Ki?[]:g,d]),g=S)}else w.run()};v.allowRecurse=!!e;let b;r==="sync"?b=v:r==="post"?b=()=>vt(v,a&&a.suspense):(v.pre=!0,a&&(v.id=a.uid),b=()=>Ul(v));const w=new Dl(c,b);e?n?v():g=w.run():r==="post"?vt(w.run.bind(w),a&&a.suspense):w.run();const O=()=>{w.stop(),a&&a.scope&&Al(a.scope.effects,w)};return p&&p.push(O),O}function v_(t,e,n){const s=this.proxy,r=We(t)?t.includes(".")?pp(s,t):()=>s[t]:t.bind(s,s);let i;ie(e)?i=e:(i=e.handler,n=e);const o=Ve;Ys(this);const a=fp(r,i.bind(s),n);return o?Ys(o):hs(),a}function pp(t,e){const n=e.split(".");return()=>{let s=t;for(let r=0;r<n.length&&s;r++)s=s[n[r]];return s}}function Ps(t,e){if(!Pe(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),ot(t))Ps(t.value,e);else if(ne(t))for(let n=0;n<t.length;n++)Ps(t[n],e);else if($f(t)||Fs(t))t.forEach(n=>{Ps(n,e)});else if(Bf(t))for(const n in t)Ps(t[n],e);return t}function __(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return hr(()=>{t.isMounted=!0}),_p(()=>{t.isUnmounting=!0}),t}const xt=[Function,Array],w_={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:xt,onEnter:xt,onAfterEnter:xt,onEnterCancelled:xt,onBeforeLeave:xt,onLeave:xt,onAfterLeave:xt,onLeaveCancelled:xt,onBeforeAppear:xt,onAppear:xt,onAfterAppear:xt,onAppearCancelled:xt},setup(t,{slots:e}){const n=o0(),s=__();let r;return()=>{const i=e.default&&gp(e.default(),!0);if(!i||!i.length)return;let o=i[0];if(i.length>1){for(const v of i)if(v.type!==Pt){o=v;break}}const a=ve(t),{mode:c}=a;if(s.isLeaving)return Za(o);const l=Rh(o);if(!l)return Za(o);const u=Oc(l,a,s,n);Mc(l,u);const h=n.subTree,d=h&&Rh(h);let p=!1;const{getTransitionKey:g}=l.type;if(g){const v=g();r===void 0?r=v:v!==r&&(r=v,p=!0)}if(d&&d.type!==Pt&&(!is(l,d)||p)){const v=Oc(d,a,s,n);if(Mc(d,v),c==="out-in")return s.isLeaving=!0,v.afterLeave=()=>{s.isLeaving=!1,n.update.active!==!1&&n.update()},Za(o);c==="in-out"&&l.type!==Pt&&(v.delayLeave=(b,w,O)=>{const S=mp(s,d);S[String(d.key)]=d,b._leaveCb=()=>{w(),b._leaveCb=void 0,delete u.delayedLeave},u.delayedLeave=O})}return o}}},E_=w_;function mp(t,e){const{leavingVNodes:n}=t;let s=n.get(e.type);return s||(s=Object.create(null),n.set(e.type,s)),s}function Oc(t,e,n,s){const{appear:r,mode:i,persisted:o=!1,onBeforeEnter:a,onEnter:c,onAfterEnter:l,onEnterCancelled:u,onBeforeLeave:h,onLeave:d,onAfterLeave:p,onLeaveCancelled:g,onBeforeAppear:v,onAppear:b,onAfterAppear:w,onAppearCancelled:O}=e,S=String(t.key),Q=mp(n,t),oe=(Y,ge)=>{Y&&Dt(Y,s,9,ge)},Ce=(Y,ge)=>{const fe=ge[1];oe(Y,ge),ne(Y)?Y.every(Le=>Le.length<=1)&&fe():Y.length<=1&&fe()},Re={mode:i,persisted:o,beforeEnter(Y){let ge=a;if(!n.isMounted)if(r)ge=v||a;else return;Y._leaveCb&&Y._leaveCb(!0);const fe=Q[S];fe&&is(t,fe)&&fe.el._leaveCb&&fe.el._leaveCb(),oe(ge,[Y])},enter(Y){let ge=c,fe=l,Le=u;if(!n.isMounted)if(r)ge=b||c,fe=w||l,Le=O||u;else return;let Ue=!1;const Et=Y._enterCb=Ot=>{Ue||(Ue=!0,Ot?oe(Le,[Y]):oe(fe,[Y]),Re.delayedLeave&&Re.delayedLeave(),Y._enterCb=void 0)};ge?Ce(ge,[Y,Et]):Et()},leave(Y,ge){const fe=String(t.key);if(Y._enterCb&&Y._enterCb(!0),n.isUnmounting)return ge();oe(h,[Y]);let Le=!1;const Ue=Y._leaveCb=Et=>{Le||(Le=!0,ge(),Et?oe(g,[Y]):oe(p,[Y]),Y._leaveCb=void 0,Q[fe]===t&&delete Q[fe])};Q[fe]=t,d?Ce(d,[Y,Ue]):Ue()},clone(Y){return Oc(Y,e,n,s)}};return Re}function Za(t){if(na(t))return t=Hn(t),t.children=null,t}function Rh(t){return na(t)?t.children?t.children[0]:void 0:t}function Mc(t,e){t.shapeFlag&6&&t.component?Mc(t.component.subTree,e):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function gp(t,e=!1,n){let s=[],r=0;for(let i=0;i<t.length;i++){let o=t[i];const a=n==null?o.key:String(n)+String(o.key!=null?o.key:i);o.type===we?(o.patchFlag&128&&r++,s=s.concat(gp(o.children,e,a))):(e||o.type!==Pt)&&s.push(a!=null?Hn(o,{key:a}):o)}if(r>1)for(let i=0;i<s.length;i++)s[i].patchFlag=-2;return s}function yp(t){return ie(t)?{setup:t,name:t.name}:t}const Lr=t=>!!t.type.__asyncLoader,na=t=>t.type.__isKeepAlive;function I_(t,e){vp(t,"a",e)}function b_(t,e){vp(t,"da",e)}function vp(t,e,n=Ve){const s=t.__wdc||(t.__wdc=()=>{let r=n;for(;r;){if(r.isDeactivated)return;r=r.parent}return t()});if(sa(e,s,n),n){let r=n.parent;for(;r&&r.parent;)na(r.parent.vnode)&&T_(s,e,n,r),r=r.parent}}function T_(t,e,n,s){const r=sa(e,t,s,!0);wp(()=>{Al(s[e],r)},n)}function sa(t,e,n=Ve,s=!1){if(n){const r=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;lr(),Ys(n);const a=Dt(e,n,t,o);return hs(),ur(),a});return s?r.unshift(i):r.push(i),i}}const bn=t=>(e,n=Ve)=>(!Xr||t==="sp")&&sa(t,(...s)=>e(...s),n),C_=bn("bm"),hr=bn("m"),S_=bn("bu"),x_=bn("u"),_p=bn("bum"),wp=bn("um"),A_=bn("sp"),k_=bn("rtg"),R_=bn("rtc");function N_(t,e=Ve){sa("ec",t,e)}function es(t,e,n,s){const r=t.dirs,i=e&&e.dirs;for(let o=0;o<r.length;o++){const a=r[o];i&&(a.oldValue=i[o].value);let c=a.dir[s];c&&(lr(),Dt(c,n,8,[t.el,a,t,e]),ur())}}const Ep="components";function an(t,e){return P_(Ep,t,!0,e)||t}const D_=Symbol();function P_(t,e,n=!0,s=!1){const r=at||Ve;if(r){const i=r.type;if(t===Ep){const a=h0(i,!1);if(a&&(a===e||a===on(e)||a===Jo(on(e))))return i}const o=Nh(r[t]||i[t],e)||Nh(r.appContext[t],e);return!o&&s?i:o}}function Nh(t,e){return t&&(t[e]||t[on(e)]||t[Jo(on(e))])}function Qs(t,e,n,s){let r;const i=n&&n[s];if(ne(t)||We(t)){r=new Array(t.length);for(let o=0,a=t.length;o<a;o++)r[o]=e(t[o],o,void 0,i&&i[o])}else if(typeof t=="number"){r=new Array(t);for(let o=0;o<t;o++)r[o]=e(o+1,o,void 0,i&&i[o])}else if(Pe(t))if(t[Symbol.iterator])r=Array.from(t,(o,a)=>e(o,a,void 0,i&&i[a]));else{const o=Object.keys(t);r=new Array(o.length);for(let a=0,c=o.length;a<c;a++){const l=o[a];r[a]=e(t[l],l,a,i&&i[a])}}else r=[];return n&&(n[s]=r),r}function O_(t,e){for(let n=0;n<e.length;n++){const s=e[n];if(ne(s))for(let r=0;r<s.length;r++)t[s[r].name]=s[r].fn;else s&&(t[s.name]=s.key?(...r)=>{const i=s.fn(...r);return i&&(i.key=s.key),i}:s.fn)}return t}function kt(t,e,n={},s,r){if(at.isCE||at.parent&&Lr(at.parent)&&at.parent.isCE)return e!=="default"&&(n.name=e),q("slot",n,s&&s());let i=t[e];i&&i._c&&(i._d=!1),N();const o=i&&Ip(i(n)),a=Ht(we,{key:n.key||o&&o.key||`_${e}`},o||(s?s():[]),o&&t._===1?64:-2);return!r&&a.scopeId&&(a.slotScopeIds=[a.scopeId+"-s"]),i&&i._c&&(i._d=!0),a}function Ip(t){return t.some(e=>wo(e)?!(e.type===Pt||e.type===we&&!Ip(e.children)):!0)?t:null}const Lc=t=>t?Pp(t)?ql(t)||t.proxy:Lc(t.parent):null,Fr=dt(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Lc(t.parent),$root:t=>Lc(t.root),$emit:t=>t.emit,$options:t=>Vl(t),$forceUpdate:t=>t.f||(t.f=()=>Ul(t.update)),$nextTick:t=>t.n||(t.n=ap.bind(t.proxy)),$watch:t=>v_.bind(t)}),ec=(t,e)=>t!==Ne&&!t.__isScriptSetup&&me(t,e),M_={get({_:t},e){const{ctx:n,setupState:s,data:r,props:i,accessCache:o,type:a,appContext:c}=t;let l;if(e[0]!=="$"){const p=o[e];if(p!==void 0)switch(p){case 1:return s[e];case 2:return r[e];case 4:return n[e];case 3:return i[e]}else{if(ec(s,e))return o[e]=1,s[e];if(r!==Ne&&me(r,e))return o[e]=2,r[e];if((l=t.propsOptions[0])&&me(l,e))return o[e]=3,i[e];if(n!==Ne&&me(n,e))return o[e]=4,n[e];Fc&&(o[e]=0)}}const u=Fr[e];let h,d;if(u)return e==="$attrs"&&wt(t,"get",e),u(t);if((h=a.__cssModules)&&(h=h[e]))return h;if(n!==Ne&&me(n,e))return o[e]=4,n[e];if(d=c.config.globalProperties,me(d,e))return d[e]},set({_:t},e,n){const{data:s,setupState:r,ctx:i}=t;return ec(r,e)?(r[e]=n,!0):s!==Ne&&me(s,e)?(s[e]=n,!0):me(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:s,appContext:r,propsOptions:i}},o){let a;return!!n[o]||t!==Ne&&me(t,o)||ec(e,o)||(a=i[0])&&me(a,o)||me(s,o)||me(Fr,o)||me(r.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:me(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};let Fc=!0;function L_(t){const e=Vl(t),n=t.proxy,s=t.ctx;Fc=!1,e.beforeCreate&&Dh(e.beforeCreate,t,"bc");const{data:r,computed:i,methods:o,watch:a,provide:c,inject:l,created:u,beforeMount:h,mounted:d,beforeUpdate:p,updated:g,activated:v,deactivated:b,beforeDestroy:w,beforeUnmount:O,destroyed:S,unmounted:Q,render:oe,renderTracked:Ce,renderTriggered:Re,errorCaptured:Y,serverPrefetch:ge,expose:fe,inheritAttrs:Le,components:Ue,directives:Et,filters:Ot}=e;if(l&&F_(l,s,null,t.appContext.config.unwrapInjectedRef),o)for(const Se in o){const be=o[Se];ie(be)&&(s[Se]=be.bind(n))}if(r){const Se=r.call(n,n);Pe(Se)&&(t.data=mi(Se))}if(Fc=!0,i)for(const Se in i){const be=i[Se],Mt=ie(be)?be.bind(n,n):ie(be.get)?be.get.bind(n,n):Bt,Zn=!ie(be)&&ie(be.set)?be.set.bind(n):Bt,Lt=Rt({get:Mt,set:Zn});Object.defineProperty(s,Se,{enumerable:!0,configurable:!0,get:()=>Lt.value,set:yt=>Lt.value=yt})}if(a)for(const Se in a)bp(a[Se],s,n,Se);if(c){const Se=ie(c)?c.call(n):c;Reflect.ownKeys(Se).forEach(be=>{ro(be,Se[be])})}u&&Dh(u,t,"c");function Be(Se,be){ne(be)?be.forEach(Mt=>Se(Mt.bind(n))):be&&Se(be.bind(n))}if(Be(C_,h),Be(hr,d),Be(S_,p),Be(x_,g),Be(I_,v),Be(b_,b),Be(N_,Y),Be(R_,Ce),Be(k_,Re),Be(_p,O),Be(wp,Q),Be(A_,ge),ne(fe))if(fe.length){const Se=t.exposed||(t.exposed={});fe.forEach(be=>{Object.defineProperty(Se,be,{get:()=>n[be],set:Mt=>n[be]=Mt})})}else t.exposed||(t.exposed={});oe&&t.render===Bt&&(t.render=oe),Le!=null&&(t.inheritAttrs=Le),Ue&&(t.components=Ue),Et&&(t.directives=Et)}function F_(t,e,n=Bt,s=!1){ne(t)&&(t=$c(t));for(const r in t){const i=t[r];let o;Pe(i)?"default"in i?o=jt(i.from||r,i.default,!0):o=jt(i.from||r):o=jt(i),ot(o)&&s?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>o.value,set:a=>o.value=a}):e[r]=o}}function Dh(t,e,n){Dt(ne(t)?t.map(s=>s.bind(e.proxy)):t.bind(e.proxy),e,n)}function bp(t,e,n,s){const r=s.includes(".")?pp(n,s):()=>n[s];if(We(t)){const i=e[t];ie(i)&&Vs(r,i)}else if(ie(t))Vs(r,t.bind(n));else if(Pe(t))if(ne(t))t.forEach(i=>bp(i,e,n,s));else{const i=ie(t.handler)?t.handler.bind(n):e[t.handler];ie(i)&&Vs(r,i,t)}}function Vl(t){const e=t.type,{mixins:n,extends:s}=e,{mixins:r,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,a=i.get(e);let c;return a?c=a:!r.length&&!n&&!s?c=e:(c={},r.length&&r.forEach(l=>_o(c,l,o,!0)),_o(c,e,o)),Pe(e)&&i.set(e,c),c}function _o(t,e,n,s=!1){const{mixins:r,extends:i}=e;i&&_o(t,i,n,!0),r&&r.forEach(o=>_o(t,o,n,!0));for(const o in e)if(!(s&&o==="expose")){const a=$_[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const $_={data:Ph,props:ns,emits:ns,methods:ns,computed:ns,beforeCreate:mt,created:mt,beforeMount:mt,mounted:mt,beforeUpdate:mt,updated:mt,beforeDestroy:mt,beforeUnmount:mt,destroyed:mt,unmounted:mt,activated:mt,deactivated:mt,errorCaptured:mt,serverPrefetch:mt,components:ns,directives:ns,watch:V_,provide:Ph,inject:U_};function Ph(t,e){return e?t?function(){return dt(ie(t)?t.call(this,this):t,ie(e)?e.call(this,this):e)}:e:t}function U_(t,e){return ns($c(t),$c(e))}function $c(t){if(ne(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function mt(t,e){return t?[...new Set([].concat(t,e))]:e}function ns(t,e){return t?dt(dt(Object.create(null),t),e):e}function V_(t,e){if(!t)return e;if(!e)return t;const n=dt(Object.create(null),t);for(const s in e)n[s]=mt(t[s],e[s]);return n}function B_(t,e,n,s=!1){const r={},i={};go(i,ia,1),t.propsDefaults=Object.create(null),Tp(t,e,r,i);for(const o in t.propsOptions[0])o in r||(r[o]=void 0);n?t.props=s?r:e_(r):t.type.props?t.props=r:t.props=i,t.attrs=i}function j_(t,e,n,s){const{props:r,attrs:i,vnode:{patchFlag:o}}=t,a=ve(r),[c]=t.propsOptions;let l=!1;if((s||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let h=0;h<u.length;h++){let d=u[h];if(ta(t.emitsOptions,d))continue;const p=e[d];if(c)if(me(i,d))p!==i[d]&&(i[d]=p,l=!0);else{const g=on(d);r[g]=Uc(c,a,g,p,t,!1)}else p!==i[d]&&(i[d]=p,l=!0)}}}else{Tp(t,e,r,i)&&(l=!0);let u;for(const h in a)(!e||!me(e,h)&&((u=cr(h))===h||!me(e,u)))&&(c?n&&(n[h]!==void 0||n[u]!==void 0)&&(r[h]=Uc(c,a,h,void 0,t,!0)):delete r[h]);if(i!==a)for(const h in i)(!e||!me(e,h))&&(delete i[h],l=!0)}l&&yn(t,"set","$attrs")}function Tp(t,e,n,s){const[r,i]=t.propsOptions;let o=!1,a;if(e)for(let c in e){if(so(c))continue;const l=e[c];let u;r&&me(r,u=on(c))?!i||!i.includes(u)?n[u]=l:(a||(a={}))[u]=l:ta(t.emitsOptions,c)||(!(c in s)||l!==s[c])&&(s[c]=l,o=!0)}if(i){const c=ve(n),l=a||Ne;for(let u=0;u<i.length;u++){const h=i[u];n[h]=Uc(r,c,h,l[h],t,!me(l,h))}}return o}function Uc(t,e,n,s,r,i){const o=t[n];if(o!=null){const a=me(o,"default");if(a&&s===void 0){const c=o.default;if(o.type!==Function&&ie(c)){const{propsDefaults:l}=r;n in l?s=l[n]:(Ys(r),s=l[n]=c.call(null,e),hs())}else s=c}o[0]&&(i&&!a?s=!1:o[1]&&(s===""||s===cr(n))&&(s=!0))}return s}function Cp(t,e,n=!1){const s=e.propsCache,r=s.get(t);if(r)return r;const i=t.props,o={},a=[];let c=!1;if(!ie(t)){const u=h=>{c=!0;const[d,p]=Cp(h,e,!0);dt(o,d),p&&a.push(...p)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!i&&!c)return Pe(t)&&s.set(t,Ls),Ls;if(ne(i))for(let u=0;u<i.length;u++){const h=on(i[u]);Oh(h)&&(o[h]=Ne)}else if(i)for(const u in i){const h=on(u);if(Oh(h)){const d=i[u],p=o[h]=ne(d)||ie(d)?{type:d}:Object.assign({},d);if(p){const g=Fh(Boolean,p.type),v=Fh(String,p.type);p[0]=g>-1,p[1]=v<0||g<v,(g>-1||me(p,"default"))&&a.push(h)}}}const l=[o,a];return Pe(t)&&s.set(t,l),l}function Oh(t){return t[0]!=="$"}function Mh(t){const e=t&&t.toString().match(/^\s*(function|class) (\w+)/);return e?e[2]:t===null?"null":""}function Lh(t,e){return Mh(t)===Mh(e)}function Fh(t,e){return ne(e)?e.findIndex(n=>Lh(n,t)):ie(e)&&Lh(e,t)?0:-1}const Sp=t=>t[0]==="_"||t==="$stable",Bl=t=>ne(t)?t.map(Jt):[Jt(t)],q_=(t,e,n)=>{if(e._n)return e;const s=G((...r)=>Bl(e(...r)),n);return s._c=!1,s},xp=(t,e,n)=>{const s=t._ctx;for(const r in t){if(Sp(r))continue;const i=t[r];if(ie(i))e[r]=q_(r,i,s);else if(i!=null){const o=Bl(i);e[r]=()=>o}}},Ap=(t,e)=>{const n=Bl(e);t.slots.default=()=>n},H_=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=ve(e),go(e,"_",n)):xp(e,t.slots={})}else t.slots={},e&&Ap(t,e);go(t.slots,ia,1)},z_=(t,e,n)=>{const{vnode:s,slots:r}=t;let i=!0,o=Ne;if(s.shapeFlag&32){const a=e._;a?n&&a===1?i=!1:(dt(r,e),!n&&a===1&&delete r._):(i=!e.$stable,xp(e,r)),o=e}else e&&(Ap(t,e),o={default:1});if(i)for(const a in r)!Sp(a)&&!(a in o)&&delete r[a]};function kp(){return{app:null,config:{isNativeTag:yv,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let K_=0;function W_(t,e){return function(s,r=null){ie(s)||(s=Object.assign({},s)),r!=null&&!Pe(r)&&(r=null);const i=kp(),o=new Set;let a=!1;const c=i.app={_uid:K_++,_component:s,_props:r,_container:null,_context:i,_instance:null,version:m0,get config(){return i.config},set config(l){},use(l,...u){return o.has(l)||(l&&ie(l.install)?(o.add(l),l.install(c,...u)):ie(l)&&(o.add(l),l(c,...u))),c},mixin(l){return i.mixins.includes(l)||i.mixins.push(l),c},component(l,u){return u?(i.components[l]=u,c):i.components[l]},directive(l,u){return u?(i.directives[l]=u,c):i.directives[l]},mount(l,u,h){if(!a){const d=q(s,r);return d.appContext=i,u&&e?e(d,l):t(d,l,h),a=!0,c._container=l,l.__vue_app__=c,ql(d.component)||d.component.proxy}},unmount(){a&&(t(null,c._container),delete c._container.__vue_app__)},provide(l,u){return i.provides[l]=u,c}};return c}}function Vc(t,e,n,s,r=!1){if(ne(t)){t.forEach((d,p)=>Vc(d,e&&(ne(e)?e[p]:e),n,s,r));return}if(Lr(s)&&!r)return;const i=s.shapeFlag&4?ql(s.component)||s.component.proxy:s.el,o=r?null:i,{i:a,r:c}=t,l=e&&e.r,u=a.refs===Ne?a.refs={}:a.refs,h=a.setupState;if(l!=null&&l!==c&&(We(l)?(u[l]=null,me(h,l)&&(h[l]=null)):ot(l)&&(l.value=null)),ie(c))$n(c,a,12,[o,u]);else{const d=We(c),p=ot(c);if(d||p){const g=()=>{if(t.f){const v=d?me(h,c)?h[c]:u[c]:c.value;r?ne(v)&&Al(v,i):ne(v)?v.includes(i)||v.push(i):d?(u[c]=[i],me(h,c)&&(h[c]=u[c])):(c.value=[i],t.k&&(u[t.k]=c.value))}else d?(u[c]=o,me(h,c)&&(h[c]=o)):p&&(c.value=o,t.k&&(u[t.k]=o))};o?(g.id=-1,vt(g,n)):g()}}}const vt=y_;function G_(t){return Q_(t)}function Q_(t,e){const n=Tv();n.__VUE__=!0;const{insert:s,remove:r,patchProp:i,createElement:o,createText:a,createComment:c,setText:l,setElementText:u,parentNode:h,nextSibling:d,setScopeId:p=Bt,insertStaticContent:g}=t,v=(f,m,_,E=null,C=null,D=null,$=!1,R=null,P=!!m.dynamicChildren)=>{if(f===m)return;f&&!is(f,m)&&(E=M(f),yt(f,C,D,!0),f=null),m.patchFlag===-2&&(P=!1,m.dynamicChildren=null);const{type:x,ref:K,shapeFlag:B}=m;switch(x){case ra:b(f,m,_,E);break;case Pt:w(f,m,_,E);break;case io:f==null&&O(m,_,E,$);break;case we:Ue(f,m,_,E,C,D,$,R,P);break;default:B&1?oe(f,m,_,E,C,D,$,R,P):B&6?Et(f,m,_,E,C,D,$,R,P):(B&64||B&128)&&x.process(f,m,_,E,C,D,$,R,P,pe)}K!=null&&C&&Vc(K,f&&f.ref,D,m||f,!m)},b=(f,m,_,E)=>{if(f==null)s(m.el=a(m.children),_,E);else{const C=m.el=f.el;m.children!==f.children&&l(C,m.children)}},w=(f,m,_,E)=>{f==null?s(m.el=c(m.children||""),_,E):m.el=f.el},O=(f,m,_,E)=>{[f.el,f.anchor]=g(f.children,m,_,E,f.el,f.anchor)},S=({el:f,anchor:m},_,E)=>{let C;for(;f&&f!==m;)C=d(f),s(f,_,E),f=C;s(m,_,E)},Q=({el:f,anchor:m})=>{let _;for(;f&&f!==m;)_=d(f),r(f),f=_;r(m)},oe=(f,m,_,E,C,D,$,R,P)=>{$=$||m.type==="svg",f==null?Ce(m,_,E,C,D,$,R,P):ge(f,m,C,D,$,R,P)},Ce=(f,m,_,E,C,D,$,R)=>{let P,x;const{type:K,props:B,shapeFlag:W,transition:ee,dirs:le}=f;if(P=f.el=o(f.type,D,B&&B.is,B),W&8?u(P,f.children):W&16&&Y(f.children,P,null,E,C,D&&K!=="foreignObject",$,R),le&&es(f,null,E,"created"),Re(P,f,f.scopeId,$,E),B){for(const Te in B)Te!=="value"&&!so(Te)&&i(P,Te,null,B[Te],D,f.children,E,C,U);"value"in B&&i(P,"value",null,B.value),(x=B.onVnodeBeforeMount)&&Xt(x,E,f)}le&&es(f,null,E,"beforeMount");const xe=(!C||C&&!C.pendingBranch)&&ee&&!ee.persisted;xe&&ee.beforeEnter(P),s(P,m,_),((x=B&&B.onVnodeMounted)||xe||le)&&vt(()=>{x&&Xt(x,E,f),xe&&ee.enter(P),le&&es(f,null,E,"mounted")},C)},Re=(f,m,_,E,C)=>{if(_&&p(f,_),E)for(let D=0;D<E.length;D++)p(f,E[D]);if(C){let D=C.subTree;if(m===D){const $=C.vnode;Re(f,$,$.scopeId,$.slotScopeIds,C.parent)}}},Y=(f,m,_,E,C,D,$,R,P=0)=>{for(let x=P;x<f.length;x++){const K=f[x]=R?kn(f[x]):Jt(f[x]);v(null,K,m,_,E,C,D,$,R)}},ge=(f,m,_,E,C,D,$)=>{const R=m.el=f.el;let{patchFlag:P,dynamicChildren:x,dirs:K}=m;P|=f.patchFlag&16;const B=f.props||Ne,W=m.props||Ne;let ee;_&&ts(_,!1),(ee=W.onVnodeBeforeUpdate)&&Xt(ee,_,m,f),K&&es(m,f,_,"beforeUpdate"),_&&ts(_,!0);const le=C&&m.type!=="foreignObject";if(x?fe(f.dynamicChildren,x,R,_,E,le,D):$||be(f,m,R,null,_,E,le,D,!1),P>0){if(P&16)Le(R,m,B,W,_,E,C);else if(P&2&&B.class!==W.class&&i(R,"class",null,W.class,C),P&4&&i(R,"style",B.style,W.style,C),P&8){const xe=m.dynamicProps;for(let Te=0;Te<xe.length;Te++){const je=xe[Te],Ft=B[je],Ss=W[je];(Ss!==Ft||je==="value")&&i(R,je,Ft,Ss,C,f.children,_,E,U)}}P&1&&f.children!==m.children&&u(R,m.children)}else!$&&x==null&&Le(R,m,B,W,_,E,C);((ee=W.onVnodeUpdated)||K)&&vt(()=>{ee&&Xt(ee,_,m,f),K&&es(m,f,_,"updated")},E)},fe=(f,m,_,E,C,D,$)=>{for(let R=0;R<m.length;R++){const P=f[R],x=m[R],K=P.el&&(P.type===we||!is(P,x)||P.shapeFlag&70)?h(P.el):_;v(P,x,K,null,E,C,D,$,!0)}},Le=(f,m,_,E,C,D,$)=>{if(_!==E){if(_!==Ne)for(const R in _)!so(R)&&!(R in E)&&i(f,R,_[R],null,$,m.children,C,D,U);for(const R in E){if(so(R))continue;const P=E[R],x=_[R];P!==x&&R!=="value"&&i(f,R,x,P,$,m.children,C,D,U)}"value"in E&&i(f,"value",_.value,E.value)}},Ue=(f,m,_,E,C,D,$,R,P)=>{const x=m.el=f?f.el:a(""),K=m.anchor=f?f.anchor:a("");let{patchFlag:B,dynamicChildren:W,slotScopeIds:ee}=m;ee&&(R=R?R.concat(ee):ee),f==null?(s(x,_,E),s(K,_,E),Y(m.children,_,K,C,D,$,R,P)):B>0&&B&64&&W&&f.dynamicChildren?(fe(f.dynamicChildren,W,_,C,D,$,R),(m.key!=null||C&&m===C.subTree)&&Rp(f,m,!0)):be(f,m,_,K,C,D,$,R,P)},Et=(f,m,_,E,C,D,$,R,P)=>{m.slotScopeIds=R,f==null?m.shapeFlag&512?C.ctx.activate(m,_,E,$,P):Ot(m,_,E,C,D,$,P):Jn(f,m,P)},Ot=(f,m,_,E,C,D,$)=>{const R=f.component=i0(f,E,C);if(na(f)&&(R.ctx.renderer=pe),a0(R),R.asyncDep){if(C&&C.registerDep(R,Be),!f.el){const P=R.subTree=q(Pt);w(null,P,m,_)}return}Be(R,f,m,_,C,D,$)},Jn=(f,m,_)=>{const E=m.component=f.component;if(p_(f,m,_))if(E.asyncDep&&!E.asyncResolved){Se(E,m,_);return}else E.next=m,c_(E.update),E.update();else m.el=f.el,E.vnode=m},Be=(f,m,_,E,C,D,$)=>{const R=()=>{if(f.isMounted){let{next:K,bu:B,u:W,parent:ee,vnode:le}=f,xe=K,Te;ts(f,!1),K?(K.el=le.el,Se(f,K,$)):K=le,B&&Xa(B),(Te=K.props&&K.props.onVnodeBeforeUpdate)&&Xt(Te,ee,K,le),ts(f,!0);const je=Ja(f),Ft=f.subTree;f.subTree=je,v(Ft,je,h(Ft.el),M(Ft),f,C,D),K.el=je.el,xe===null&&m_(f,je.el),W&&vt(W,C),(Te=K.props&&K.props.onVnodeUpdated)&&vt(()=>Xt(Te,ee,K,le),C)}else{let K;const{el:B,props:W}=m,{bm:ee,m:le,parent:xe}=f,Te=Lr(m);if(ts(f,!1),ee&&Xa(ee),!Te&&(K=W&&W.onVnodeBeforeMount)&&Xt(K,xe,m),ts(f,!0),B&&ae){const je=()=>{f.subTree=Ja(f),ae(B,f.subTree,f,C,null)};Te?m.type.__asyncLoader().then(()=>!f.isUnmounted&&je()):je()}else{const je=f.subTree=Ja(f);v(null,je,_,E,f,C,D),m.el=je.el}if(le&&vt(le,C),!Te&&(K=W&&W.onVnodeMounted)){const je=m;vt(()=>Xt(K,xe,je),C)}(m.shapeFlag&256||xe&&Lr(xe.vnode)&&xe.vnode.shapeFlag&256)&&f.a&&vt(f.a,C),f.isMounted=!0,m=_=E=null}},P=f.effect=new Dl(R,()=>Ul(x),f.scope),x=f.update=()=>P.run();x.id=f.uid,ts(f,!0),x()},Se=(f,m,_)=>{m.component=f;const E=f.vnode.props;f.vnode=m,f.next=null,j_(f,m.props,E,_),z_(f,m.children,_),lr(),Ah(),ur()},be=(f,m,_,E,C,D,$,R,P=!1)=>{const x=f&&f.children,K=f?f.shapeFlag:0,B=m.children,{patchFlag:W,shapeFlag:ee}=m;if(W>0){if(W&128){Zn(x,B,_,E,C,D,$,R,P);return}else if(W&256){Mt(x,B,_,E,C,D,$,R,P);return}}ee&8?(K&16&&U(x,C,D),B!==x&&u(_,B)):K&16?ee&16?Zn(x,B,_,E,C,D,$,R,P):U(x,C,D,!0):(K&8&&u(_,""),ee&16&&Y(B,_,E,C,D,$,R,P))},Mt=(f,m,_,E,C,D,$,R,P)=>{f=f||Ls,m=m||Ls;const x=f.length,K=m.length,B=Math.min(x,K);let W;for(W=0;W<B;W++){const ee=m[W]=P?kn(m[W]):Jt(m[W]);v(f[W],ee,_,null,C,D,$,R,P)}x>K?U(f,C,D,!0,!1,B):Y(m,_,E,C,D,$,R,P,B)},Zn=(f,m,_,E,C,D,$,R,P)=>{let x=0;const K=m.length;let B=f.length-1,W=K-1;for(;x<=B&&x<=W;){const ee=f[x],le=m[x]=P?kn(m[x]):Jt(m[x]);if(is(ee,le))v(ee,le,_,null,C,D,$,R,P);else break;x++}for(;x<=B&&x<=W;){const ee=f[B],le=m[W]=P?kn(m[W]):Jt(m[W]);if(is(ee,le))v(ee,le,_,null,C,D,$,R,P);else break;B--,W--}if(x>B){if(x<=W){const ee=W+1,le=ee<K?m[ee].el:E;for(;x<=W;)v(null,m[x]=P?kn(m[x]):Jt(m[x]),_,le,C,D,$,R,P),x++}}else if(x>W)for(;x<=B;)yt(f[x],C,D,!0),x++;else{const ee=x,le=x,xe=new Map;for(x=le;x<=W;x++){const It=m[x]=P?kn(m[x]):Jt(m[x]);It.key!=null&&xe.set(It.key,x)}let Te,je=0;const Ft=W-le+1;let Ss=!1,yh=0;const Tr=new Array(Ft);for(x=0;x<Ft;x++)Tr[x]=0;for(x=ee;x<=B;x++){const It=f[x];if(je>=Ft){yt(It,C,D,!0);continue}let Yt;if(It.key!=null)Yt=xe.get(It.key);else for(Te=le;Te<=W;Te++)if(Tr[Te-le]===0&&is(It,m[Te])){Yt=Te;break}Yt===void 0?yt(It,C,D,!0):(Tr[Yt-le]=x+1,Yt>=yh?yh=Yt:Ss=!0,v(It,m[Yt],_,null,C,D,$,R,P),je++)}const vh=Ss?Y_(Tr):Ls;for(Te=vh.length-1,x=Ft-1;x>=0;x--){const It=le+x,Yt=m[It],_h=It+1<K?m[It+1].el:E;Tr[x]===0?v(null,Yt,_,_h,C,D,$,R,P):Ss&&(Te<0||x!==vh[Te]?Lt(Yt,_,_h,2):Te--)}}},Lt=(f,m,_,E,C=null)=>{const{el:D,type:$,transition:R,children:P,shapeFlag:x}=f;if(x&6){Lt(f.component.subTree,m,_,E);return}if(x&128){f.suspense.move(m,_,E);return}if(x&64){$.move(f,m,_,pe);return}if($===we){s(D,m,_);for(let B=0;B<P.length;B++)Lt(P[B],m,_,E);s(f.anchor,m,_);return}if($===io){S(f,m,_);return}if(E!==2&&x&1&&R)if(E===0)R.beforeEnter(D),s(D,m,_),vt(()=>R.enter(D),C);else{const{leave:B,delayLeave:W,afterLeave:ee}=R,le=()=>s(D,m,_),xe=()=>{B(D,()=>{le(),ee&&ee()})};W?W(D,le,xe):xe()}else s(D,m,_)},yt=(f,m,_,E=!1,C=!1)=>{const{type:D,props:$,ref:R,children:P,dynamicChildren:x,shapeFlag:K,patchFlag:B,dirs:W}=f;if(R!=null&&Vc(R,null,_,f,!0),K&256){m.ctx.deactivate(f);return}const ee=K&1&&W,le=!Lr(f);let xe;if(le&&(xe=$&&$.onVnodeBeforeUnmount)&&Xt(xe,m,f),K&6)T(f.component,_,E);else{if(K&128){f.suspense.unmount(_,E);return}ee&&es(f,null,m,"beforeUnmount"),K&64?f.type.remove(f,m,_,C,pe,E):x&&(D!==we||B>0&&B&64)?U(x,m,_,!1,!0):(D===we&&B&384||!C&&K&16)&&U(P,m,_),E&&Cs(f)}(le&&(xe=$&&$.onVnodeUnmounted)||ee)&&vt(()=>{xe&&Xt(xe,m,f),ee&&es(f,null,m,"unmounted")},_)},Cs=f=>{const{type:m,el:_,anchor:E,transition:C}=f;if(m===we){Vi(_,E);return}if(m===io){Q(f);return}const D=()=>{r(_),C&&!C.persisted&&C.afterLeave&&C.afterLeave()};if(f.shapeFlag&1&&C&&!C.persisted){const{leave:$,delayLeave:R}=C,P=()=>$(_,D);R?R(f.el,D,P):P()}else D()},Vi=(f,m)=>{let _;for(;f!==m;)_=d(f),r(f),f=_;r(m)},T=(f,m,_)=>{const{bum:E,scope:C,update:D,subTree:$,um:R}=f;E&&Xa(E),C.stop(),D&&(D.active=!1,yt($,f,m,_)),R&&vt(R,m),vt(()=>{f.isUnmounted=!0},m),m&&m.pendingBranch&&!m.isUnmounted&&f.asyncDep&&!f.asyncResolved&&f.suspenseId===m.pendingId&&(m.deps--,m.deps===0&&m.resolve())},U=(f,m,_,E=!1,C=!1,D=0)=>{for(let $=D;$<f.length;$++)yt(f[$],m,_,E,C)},M=f=>f.shapeFlag&6?M(f.component.subTree):f.shapeFlag&128?f.suspense.next():d(f.anchor||f.el),H=(f,m,_)=>{f==null?m._vnode&&yt(m._vnode,null,null,!0):v(m._vnode||null,f,m,null,null,null,_),Ah(),lp(),m._vnode=f},pe={p:v,um:yt,m:Lt,r:Cs,mt:Ot,mc:Y,pc:be,pbc:fe,n:M,o:t};let Oe,ae;return e&&([Oe,ae]=e(pe)),{render:H,hydrate:Oe,createApp:W_(H,Oe)}}function ts({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function Rp(t,e,n=!1){const s=t.children,r=e.children;if(ne(s)&&ne(r))for(let i=0;i<s.length;i++){const o=s[i];let a=r[i];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=r[i]=kn(r[i]),a.el=o.el),n||Rp(o,a)),a.type===ra&&(a.el=o.el)}}function Y_(t){const e=t.slice(),n=[0];let s,r,i,o,a;const c=t.length;for(s=0;s<c;s++){const l=t[s];if(l!==0){if(r=n[n.length-1],t[r]<l){e[s]=r,n.push(s);continue}for(i=0,o=n.length-1;i<o;)a=i+o>>1,t[n[a]]<l?i=a+1:o=a;l<t[n[i]]&&(i>0&&(e[s]=n[i-1]),n[i]=s)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}const X_=t=>t.__isTeleport,we=Symbol(void 0),ra=Symbol(void 0),Pt=Symbol(void 0),io=Symbol(void 0),$r=[];let Vt=null;function N(t=!1){$r.push(Vt=t?null:[])}function J_(){$r.pop(),Vt=$r[$r.length-1]||null}let Yr=1;function $h(t){Yr+=t}function Np(t){return t.dynamicChildren=Yr>0?Vt||Ls:null,J_(),Yr>0&&Vt&&Vt.push(t),t}function L(t,e,n,s,r,i){return Np(y(t,e,n,s,r,i,!0))}function Ht(t,e,n,s,r){return Np(q(t,e,n,s,r,!0))}function wo(t){return t?t.__v_isVNode===!0:!1}function is(t,e){return t.type===e.type&&t.key===e.key}const ia="__vInternal",Dp=({key:t})=>t??null,oo=({ref:t,ref_key:e,ref_for:n})=>t!=null?We(t)||ot(t)||ie(t)?{i:at,r:t,k:e,f:!!n}:t:null;function y(t,e=null,n=null,s=0,r=null,i=t===we?0:1,o=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Dp(e),ref:e&&oo(e),scopeId:dp,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:s,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:at};return a?(jl(c,n),i&128&&t.normalize(c)):n&&(c.shapeFlag|=We(n)?8:16),Yr>0&&!o&&Vt&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&Vt.push(c),c}const q=Z_;function Z_(t,e=null,n=null,s=0,r=null,i=!1){if((!t||t===D_)&&(t=Pt),wo(t)){const a=Hn(t,e,!0);return n&&jl(a,n),Yr>0&&!i&&Vt&&(a.shapeFlag&6?Vt[Vt.indexOf(t)]=a:Vt.push(a)),a.patchFlag|=-2,a}if(d0(t)&&(t=t.__vccOpts),e){e=e0(e);let{class:a,style:c}=e;a&&!We(a)&&(e.class=bt(a)),Pe(c)&&(Zf(c)&&!ne(c)&&(c=dt({},c)),e.style=Sl(c))}const o=We(t)?1:g_(t)?128:X_(t)?64:Pe(t)?4:ie(t)?2:0;return y(t,e,n,s,r,o,i,!0)}function e0(t){return t?Zf(t)||ia in t?dt({},t):t:null}function Hn(t,e,n=!1){const{props:s,ref:r,patchFlag:i,children:o}=t,a=e?n0(s||{},e):s;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&Dp(a),ref:e&&e.ref?n&&r?ne(r)?r.concat(oo(e)):[r,oo(e)]:oo(e):r,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==we?i===-1?16:i|16:i,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Hn(t.ssContent),ssFallback:t.ssFallback&&Hn(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce}}function re(t=" ",e=0){return q(ra,null,t,e)}function t0(t,e){const n=q(io,null,t);return n.staticCount=e,n}function Fe(t="",e=!1){return e?(N(),Ht(Pt,null,t)):q(Pt,null,t)}function Jt(t){return t==null||typeof t=="boolean"?q(Pt):ne(t)?q(we,null,t.slice()):typeof t=="object"?kn(t):q(ra,null,String(t))}function kn(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Hn(t)}function jl(t,e){let n=0;const{shapeFlag:s}=t;if(e==null)e=null;else if(ne(e))n=16;else if(typeof e=="object")if(s&65){const r=e.default;r&&(r._c&&(r._d=!1),jl(t,r()),r._c&&(r._d=!0));return}else{n=32;const r=e._;!r&&!(ia in e)?e._ctx=at:r===3&&at&&(at.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else ie(e)?(e={default:e,_ctx:at},n=32):(e=String(e),s&64?(n=16,e=[re(e)]):n=8);t.children=e,t.shapeFlag|=n}function n0(...t){const e={};for(let n=0;n<t.length;n++){const s=t[n];for(const r in s)if(r==="class")e.class!==s.class&&(e.class=bt([e.class,s.class]));else if(r==="style")e.style=Sl([e.style,s.style]);else if(Qo(r)){const i=e[r],o=s[r];o&&i!==o&&!(ne(i)&&i.includes(o))&&(e[r]=i?[].concat(i,o):o)}else r!==""&&(e[r]=s[r])}return e}function Xt(t,e,n,s=null){Dt(t,e,7,[n,s])}const s0=kp();let r0=0;function i0(t,e,n){const s=t.type,r=(e?e.appContext:t.appContext)||s0,i={uid:r0++,vnode:t,type:s,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,scope:new Cv(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Cp(s,r),emitsOptions:hp(s,r),emit:null,emitted:null,propsDefaults:Ne,inheritAttrs:s.inheritAttrs,ctx:Ne,data:Ne,props:Ne,attrs:Ne,slots:Ne,refs:Ne,setupState:Ne,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=h_.bind(null,i),t.ce&&t.ce(i),i}let Ve=null;const o0=()=>Ve||at,Ys=t=>{Ve=t,t.scope.on()},hs=()=>{Ve&&Ve.scope.off(),Ve=null};function Pp(t){return t.vnode.shapeFlag&4}let Xr=!1;function a0(t,e=!1){Xr=e;const{props:n,children:s}=t.vnode,r=Pp(t);B_(t,n,r,e),H_(t,s);const i=r?c0(t,e):void 0;return Xr=!1,i}function c0(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=ep(new Proxy(t.ctx,M_));const{setup:s}=n;if(s){const r=t.setupContext=s.length>1?u0(t):null;Ys(t),lr();const i=$n(s,t,0,[t.props,r]);if(ur(),hs(),Uf(i)){if(i.then(hs,hs),e)return i.then(o=>{Uh(t,o,e)}).catch(o=>{ea(o,t,0)});t.asyncDep=i}else Uh(t,i,e)}else Op(t,e)}function Uh(t,e,n){ie(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:Pe(e)&&(t.setupState=rp(e)),Op(t,n)}let Vh;function Op(t,e,n){const s=t.type;if(!t.render){if(!e&&Vh&&!s.render){const r=s.template||Vl(t).template;if(r){const{isCustomElement:i,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:c}=s,l=dt(dt({isCustomElement:i,delimiters:a},o),c);s.render=Vh(r,l)}}t.render=s.render||Bt}Ys(t),lr(),L_(t),ur(),hs()}function l0(t){return new Proxy(t.attrs,{get(e,n){return wt(t,"get","$attrs"),e[n]}})}function u0(t){const e=s=>{t.exposed=s||{}};let n;return{get attrs(){return n||(n=l0(t))},slots:t.slots,emit:t.emit,expose:e}}function ql(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(rp(ep(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Fr)return Fr[n](t)},has(e,n){return n in e||n in Fr}}))}function h0(t,e=!0){return ie(t)?t.displayName||t.name:t.name||e&&t.__name}function d0(t){return ie(t)&&"__vccOpts"in t}const Rt=(t,e)=>i_(t,e,Xr);function Mp(t,e,n){const s=arguments.length;return s===2?Pe(e)&&!ne(e)?wo(e)?q(t,null,[e]):q(t,e):q(t,null,e):(s>3?n=Array.prototype.slice.call(arguments,2):s===3&&wo(n)&&(n=[n]),q(t,e,n))}const f0=Symbol(""),p0=()=>jt(f0),m0="3.2.47",g0="http://www.w3.org/2000/svg",os=typeof document<"u"?document:null,Bh=os&&os.createElement("template"),y0={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,s)=>{const r=e?os.createElementNS(g0,t):os.createElement(t,n?{is:n}:void 0);return t==="select"&&s&&s.multiple!=null&&r.setAttribute("multiple",s.multiple),r},createText:t=>os.createTextNode(t),createComment:t=>os.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>os.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,s,r,i){const o=n?n.previousSibling:e.lastChild;if(r&&(r===i||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),n),!(r===i||!(r=r.nextSibling)););else{Bh.innerHTML=s?`<svg>${t}</svg>`:t;const a=Bh.content;if(s){const c=a.firstChild;for(;c.firstChild;)a.appendChild(c.firstChild);a.removeChild(c)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function v0(t,e,n){const s=t._vtc;s&&(e=(e?[e,...s]:[...s]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function _0(t,e,n){const s=t.style,r=We(n);if(n&&!r){if(e&&!We(e))for(const i in e)n[i]==null&&Bc(s,i,"");for(const i in n)Bc(s,i,n[i])}else{const i=s.display;r?e!==n&&(s.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(s.display=i)}}const jh=/\s*!important$/;function Bc(t,e,n){if(ne(n))n.forEach(s=>Bc(t,e,s));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const s=w0(t,e);jh.test(n)?t.setProperty(cr(s),n.replace(jh,""),"important"):t[s]=n}}const qh=["Webkit","Moz","ms"],tc={};function w0(t,e){const n=tc[e];if(n)return n;let s=on(e);if(s!=="filter"&&s in t)return tc[e]=s;s=Jo(s);for(let r=0;r<qh.length;r++){const i=qh[r]+s;if(i in t)return tc[e]=i}return e}const Hh="http://www.w3.org/1999/xlink";function E0(t,e,n,s,r){if(s&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(Hh,e.slice(6,e.length)):t.setAttributeNS(Hh,e,n);else{const i=gv(e);n==null||i&&!Lf(n)?t.removeAttribute(e):t.setAttribute(e,i?"":n)}}function I0(t,e,n,s,r,i,o){if(e==="innerHTML"||e==="textContent"){s&&o(s,r,i),t[e]=n??"";return}if(e==="value"&&t.tagName!=="PROGRESS"&&!t.tagName.includes("-")){t._value=n;const c=n??"";(t.value!==c||t.tagName==="OPTION")&&(t.value=c),n==null&&t.removeAttribute(e);return}let a=!1;if(n===""||n==null){const c=typeof t[e];c==="boolean"?n=Lf(n):n==null&&c==="string"?(n="",a=!0):c==="number"&&(n=0,a=!0)}try{t[e]=n}catch{}a&&t.removeAttribute(e)}function b0(t,e,n,s){t.addEventListener(e,n,s)}function T0(t,e,n,s){t.removeEventListener(e,n,s)}function C0(t,e,n,s,r=null){const i=t._vei||(t._vei={}),o=i[e];if(s&&o)o.value=s;else{const[a,c]=S0(e);if(s){const l=i[e]=k0(s,r);b0(t,a,l,c)}else o&&(T0(t,a,o,c),i[e]=void 0)}}const zh=/(?:Once|Passive|Capture)$/;function S0(t){let e;if(zh.test(t)){e={};let s;for(;s=t.match(zh);)t=t.slice(0,t.length-s[0].length),e[s[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):cr(t.slice(2)),e]}let nc=0;const x0=Promise.resolve(),A0=()=>nc||(x0.then(()=>nc=0),nc=Date.now());function k0(t,e){const n=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=n.attached)return;Dt(R0(s,n.value),e,5,[s])};return n.value=t,n.attached=A0(),n}function R0(t,e){if(ne(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(s=>r=>!r._stopped&&s&&s(r))}else return e}const Kh=/^on[a-z]/,N0=(t,e,n,s,r=!1,i,o,a,c)=>{e==="class"?v0(t,s,r):e==="style"?_0(t,n,s):Qo(e)?xl(e)||C0(t,e,n,s,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):D0(t,e,s,r))?I0(t,e,s,i,o,a,c):(e==="true-value"?t._trueValue=s:e==="false-value"&&(t._falseValue=s),E0(t,e,s,r))};function D0(t,e,n,s){return s?!!(e==="innerHTML"||e==="textContent"||e in t&&Kh.test(e)&&ie(n)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||Kh.test(e)&&We(n)?!1:e in t}const P0={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String};E_.props;const O0=["ctrl","shift","alt","meta"],M0={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>O0.some(n=>t[`${n}Key`]&&!e.includes(n))},oa=(t,e)=>(n,...s)=>{for(let r=0;r<e.length;r++){const i=M0[e[r]];if(i&&i(n,e))return}return t(n,...s)},L0=dt({patchProp:N0},y0);let Wh;function F0(){return Wh||(Wh=G_(L0))}const $0=(...t)=>{const e=F0().createApp(...t),{mount:n}=e;return e.mount=s=>{const r=U0(s);if(!r)return;const i=e._component;!ie(i)&&!i.render&&!i.template&&(i.template=r.innerHTML),r.innerHTML="";const o=n(r,!1,r instanceof SVGElement);return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},e};function U0(t){return We(t)?document.querySelector(t):t}/*!
  * vue-router v4.1.6
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const Rs=typeof window<"u";function V0(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const Ee=Object.assign;function sc(t,e){const n={};for(const s in e){const r=e[s];n[s]=zt(r)?r.map(t):t(r)}return n}const Ur=()=>{},zt=Array.isArray,B0=/\/$/,j0=t=>t.replace(B0,"");function rc(t,e,n="/"){let s,r={},i="",o="";const a=e.indexOf("#");let c=e.indexOf("?");return a<c&&a>=0&&(c=-1),c>-1&&(s=e.slice(0,c),i=e.slice(c+1,a>-1?a:e.length),r=t(i)),a>-1&&(s=s||e.slice(0,a),o=e.slice(a,e.length)),s=K0(s??e,n),{fullPath:s+(i&&"?")+i+o,path:s,query:r,hash:o}}function q0(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function Gh(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function H0(t,e,n){const s=e.matched.length-1,r=n.matched.length-1;return s>-1&&s===r&&Xs(e.matched[s],n.matched[r])&&Lp(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function Xs(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function Lp(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!z0(t[n],e[n]))return!1;return!0}function z0(t,e){return zt(t)?Qh(t,e):zt(e)?Qh(e,t):t===e}function Qh(t,e){return zt(e)?t.length===e.length&&t.every((n,s)=>n===e[s]):t.length===1&&t[0]===e}function K0(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),s=t.split("/");let r=n.length-1,i,o;for(i=0;i<s.length;i++)if(o=s[i],o!==".")if(o==="..")r>1&&r--;else break;return n.slice(0,r).join("/")+"/"+s.slice(i-(i===s.length?1:0)).join("/")}var Jr;(function(t){t.pop="pop",t.push="push"})(Jr||(Jr={}));var Vr;(function(t){t.back="back",t.forward="forward",t.unknown=""})(Vr||(Vr={}));function W0(t){if(!t)if(Rs){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),j0(t)}const G0=/^[^#]+#/;function Q0(t,e){return t.replace(G0,"#")+e}function Y0(t,e){const n=document.documentElement.getBoundingClientRect(),s=t.getBoundingClientRect();return{behavior:e.behavior,left:s.left-n.left-(e.left||0),top:s.top-n.top-(e.top||0)}}const aa=()=>({left:window.pageXOffset,top:window.pageYOffset});function X0(t){let e;if("el"in t){const n=t.el,s=typeof n=="string"&&n.startsWith("#"),r=typeof n=="string"?s?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!r)return;e=Y0(r,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function Yh(t,e){return(history.state?history.state.position-e:-1)+t}const jc=new Map;function J0(t,e){jc.set(t,e)}function Z0(t){const e=jc.get(t);return jc.delete(t),e}let ew=()=>location.protocol+"//"+location.host;function Fp(t,e){const{pathname:n,search:s,hash:r}=e,i=t.indexOf("#");if(i>-1){let a=r.includes(t.slice(i))?t.slice(i).length:1,c=r.slice(a);return c[0]!=="/"&&(c="/"+c),Gh(c,"")}return Gh(n,t)+s+r}function tw(t,e,n,s){let r=[],i=[],o=null;const a=({state:d})=>{const p=Fp(t,location),g=n.value,v=e.value;let b=0;if(d){if(n.value=p,e.value=d,o&&o===g){o=null;return}b=v?d.position-v.position:0}else s(p);r.forEach(w=>{w(n.value,g,{delta:b,type:Jr.pop,direction:b?b>0?Vr.forward:Vr.back:Vr.unknown})})};function c(){o=n.value}function l(d){r.push(d);const p=()=>{const g=r.indexOf(d);g>-1&&r.splice(g,1)};return i.push(p),p}function u(){const{history:d}=window;d.state&&d.replaceState(Ee({},d.state,{scroll:aa()}),"")}function h(){for(const d of i)d();i=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u),{pauseListeners:c,listen:l,destroy:h}}function Xh(t,e,n,s=!1,r=!1){return{back:t,current:e,forward:n,replaced:s,position:window.history.length,scroll:r?aa():null}}function nw(t){const{history:e,location:n}=window,s={value:Fp(t,n)},r={value:e.state};r.value||i(s.value,{back:null,current:s.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(c,l,u){const h=t.indexOf("#"),d=h>-1?(n.host&&document.querySelector("base")?t:t.slice(h))+c:ew()+t+c;try{e[u?"replaceState":"pushState"](l,"",d),r.value=l}catch(p){console.error(p),n[u?"replace":"assign"](d)}}function o(c,l){const u=Ee({},e.state,Xh(r.value.back,c,r.value.forward,!0),l,{position:r.value.position});i(c,u,!0),s.value=c}function a(c,l){const u=Ee({},r.value,e.state,{forward:c,scroll:aa()});i(u.current,u,!0);const h=Ee({},Xh(s.value,c,null),{position:u.position+1},l);i(c,h,!1),s.value=c}return{location:s,state:r,push:a,replace:o}}function sw(t){t=W0(t);const e=nw(t),n=tw(t,e.state,e.location,e.replace);function s(i,o=!0){o||n.pauseListeners(),history.go(i)}const r=Ee({location:"",base:t,go:s,createHref:Q0.bind(null,t)},e,n);return Object.defineProperty(r,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(r,"state",{enumerable:!0,get:()=>e.state.value}),r}function rw(t){return t=location.host?t||location.pathname+location.search:"",t.includes("#")||(t+="#"),sw(t)}function iw(t){return typeof t=="string"||t&&typeof t=="object"}function $p(t){return typeof t=="string"||typeof t=="symbol"}const xn={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},Up=Symbol("");var Jh;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(Jh||(Jh={}));function Js(t,e){return Ee(new Error,{type:t,[Up]:!0},e)}function un(t,e){return t instanceof Error&&Up in t&&(e==null||!!(t.type&e))}const Zh="[^/]+?",ow={sensitive:!1,strict:!1,start:!0,end:!0},aw=/[.+*?^${}()[\]/\\]/g;function cw(t,e){const n=Ee({},ow,e),s=[];let r=n.start?"^":"";const i=[];for(const l of t){const u=l.length?[]:[90];n.strict&&!l.length&&(r+="/");for(let h=0;h<l.length;h++){const d=l[h];let p=40+(n.sensitive?.25:0);if(d.type===0)h||(r+="/"),r+=d.value.replace(aw,"\\$&"),p+=40;else if(d.type===1){const{value:g,repeatable:v,optional:b,regexp:w}=d;i.push({name:g,repeatable:v,optional:b});const O=w||Zh;if(O!==Zh){p+=10;try{new RegExp(`(${O})`)}catch(Q){throw new Error(`Invalid custom RegExp for param "${g}" (${O}): `+Q.message)}}let S=v?`((?:${O})(?:/(?:${O}))*)`:`(${O})`;h||(S=b&&l.length<2?`(?:/${S})`:"/"+S),b&&(S+="?"),r+=S,p+=20,b&&(p+=-8),v&&(p+=-20),O===".*"&&(p+=-50)}u.push(p)}s.push(u)}if(n.strict&&n.end){const l=s.length-1;s[l][s[l].length-1]+=.7000000000000001}n.strict||(r+="/?"),n.end?r+="$":n.strict&&(r+="(?:/|$)");const o=new RegExp(r,n.sensitive?"":"i");function a(l){const u=l.match(o),h={};if(!u)return null;for(let d=1;d<u.length;d++){const p=u[d]||"",g=i[d-1];h[g.name]=p&&g.repeatable?p.split("/"):p}return h}function c(l){let u="",h=!1;for(const d of t){(!h||!u.endsWith("/"))&&(u+="/"),h=!1;for(const p of d)if(p.type===0)u+=p.value;else if(p.type===1){const{value:g,repeatable:v,optional:b}=p,w=g in l?l[g]:"";if(zt(w)&&!v)throw new Error(`Provided param "${g}" is an array but it is not repeatable (* or + modifiers)`);const O=zt(w)?w.join("/"):w;if(!O)if(b)d.length<2&&(u.endsWith("/")?u=u.slice(0,-1):h=!0);else throw new Error(`Missing required param "${g}"`);u+=O}}return u||"/"}return{re:o,score:s,keys:i,parse:a,stringify:c}}function lw(t,e){let n=0;for(;n<t.length&&n<e.length;){const s=e[n]-t[n];if(s)return s;n++}return t.length<e.length?t.length===1&&t[0]===40+40?-1:1:t.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function uw(t,e){let n=0;const s=t.score,r=e.score;for(;n<s.length&&n<r.length;){const i=lw(s[n],r[n]);if(i)return i;n++}if(Math.abs(r.length-s.length)===1){if(ed(s))return 1;if(ed(r))return-1}return r.length-s.length}function ed(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const hw={type:0,value:""},dw=/[a-zA-Z0-9_]/;function fw(t){if(!t)return[[]];if(t==="/")return[[hw]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(p){throw new Error(`ERR (${n})/"${l}": ${p}`)}let n=0,s=n;const r=[];let i;function o(){i&&r.push(i),i=[]}let a=0,c,l="",u="";function h(){l&&(n===0?i.push({type:0,value:l}):n===1||n===2||n===3?(i.length>1&&(c==="*"||c==="+")&&e(`A repeatable param (${l}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:l,regexp:u,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):e("Invalid state to consume buffer"),l="")}function d(){l+=c}for(;a<t.length;){if(c=t[a++],c==="\\"&&n!==2){s=n,n=4;continue}switch(n){case 0:c==="/"?(l&&h(),o()):c===":"?(h(),n=1):d();break;case 4:d(),n=s;break;case 1:c==="("?n=2:dw.test(c)?d():(h(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--);break;case 2:c===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+c:n=3:u+=c;break;case 3:h(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--,u="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${l}"`),h(),o(),r}function pw(t,e,n){const s=cw(fw(t.path),n),r=Ee(s,{record:t,parent:e,children:[],alias:[]});return e&&!r.record.aliasOf==!e.record.aliasOf&&e.children.push(r),r}function mw(t,e){const n=[],s=new Map;e=sd({strict:!1,end:!0,sensitive:!1},e);function r(u){return s.get(u)}function i(u,h,d){const p=!d,g=gw(u);g.aliasOf=d&&d.record;const v=sd(e,u),b=[g];if("alias"in u){const S=typeof u.alias=="string"?[u.alias]:u.alias;for(const Q of S)b.push(Ee({},g,{components:d?d.record.components:g.components,path:Q,aliasOf:d?d.record:g}))}let w,O;for(const S of b){const{path:Q}=S;if(h&&Q[0]!=="/"){const oe=h.record.path,Ce=oe[oe.length-1]==="/"?"":"/";S.path=h.record.path+(Q&&Ce+Q)}if(w=pw(S,h,v),d?d.alias.push(w):(O=O||w,O!==w&&O.alias.push(w),p&&u.name&&!nd(w)&&o(u.name)),g.children){const oe=g.children;for(let Ce=0;Ce<oe.length;Ce++)i(oe[Ce],w,d&&d.children[Ce])}d=d||w,(w.record.components&&Object.keys(w.record.components).length||w.record.name||w.record.redirect)&&c(w)}return O?()=>{o(O)}:Ur}function o(u){if($p(u)){const h=s.get(u);h&&(s.delete(u),n.splice(n.indexOf(h),1),h.children.forEach(o),h.alias.forEach(o))}else{const h=n.indexOf(u);h>-1&&(n.splice(h,1),u.record.name&&s.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function a(){return n}function c(u){let h=0;for(;h<n.length&&uw(u,n[h])>=0&&(u.record.path!==n[h].record.path||!Vp(u,n[h]));)h++;n.splice(h,0,u),u.record.name&&!nd(u)&&s.set(u.record.name,u)}function l(u,h){let d,p={},g,v;if("name"in u&&u.name){if(d=s.get(u.name),!d)throw Js(1,{location:u});v=d.record.name,p=Ee(td(h.params,d.keys.filter(O=>!O.optional).map(O=>O.name)),u.params&&td(u.params,d.keys.map(O=>O.name))),g=d.stringify(p)}else if("path"in u)g=u.path,d=n.find(O=>O.re.test(g)),d&&(p=d.parse(g),v=d.record.name);else{if(d=h.name?s.get(h.name):n.find(O=>O.re.test(h.path)),!d)throw Js(1,{location:u,currentLocation:h});v=d.record.name,p=Ee({},h.params,u.params),g=d.stringify(p)}const b=[];let w=d;for(;w;)b.unshift(w.record),w=w.parent;return{name:v,path:g,params:p,matched:b,meta:vw(b)}}return t.forEach(u=>i(u)),{addRoute:i,resolve:l,removeRoute:o,getRoutes:a,getRecordMatcher:r}}function td(t,e){const n={};for(const s of e)s in t&&(n[s]=t[s]);return n}function gw(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:yw(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function yw(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const s in t.components)e[s]=typeof n=="boolean"?n:n[s];return e}function nd(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function vw(t){return t.reduce((e,n)=>Ee(e,n.meta),{})}function sd(t,e){const n={};for(const s in t)n[s]=s in e?e[s]:t[s];return n}function Vp(t,e){return e.children.some(n=>n===t||Vp(t,n))}const Bp=/#/g,_w=/&/g,ww=/\//g,Ew=/=/g,Iw=/\?/g,jp=/\+/g,bw=/%5B/g,Tw=/%5D/g,qp=/%5E/g,Cw=/%60/g,Hp=/%7B/g,Sw=/%7C/g,zp=/%7D/g,xw=/%20/g;function Hl(t){return encodeURI(""+t).replace(Sw,"|").replace(bw,"[").replace(Tw,"]")}function Aw(t){return Hl(t).replace(Hp,"{").replace(zp,"}").replace(qp,"^")}function qc(t){return Hl(t).replace(jp,"%2B").replace(xw,"+").replace(Bp,"%23").replace(_w,"%26").replace(Cw,"`").replace(Hp,"{").replace(zp,"}").replace(qp,"^")}function kw(t){return qc(t).replace(Ew,"%3D")}function Rw(t){return Hl(t).replace(Bp,"%23").replace(Iw,"%3F")}function Nw(t){return t==null?"":Rw(t).replace(ww,"%2F")}function Eo(t){try{return decodeURIComponent(""+t)}catch{}return""+t}function Dw(t){const e={};if(t===""||t==="?")return e;const s=(t[0]==="?"?t.slice(1):t).split("&");for(let r=0;r<s.length;++r){const i=s[r].replace(jp," "),o=i.indexOf("="),a=Eo(o<0?i:i.slice(0,o)),c=o<0?null:Eo(i.slice(o+1));if(a in e){let l=e[a];zt(l)||(l=e[a]=[l]),l.push(c)}else e[a]=c}return e}function rd(t){let e="";for(let n in t){const s=t[n];if(n=kw(n),s==null){s!==void 0&&(e+=(e.length?"&":"")+n);continue}(zt(s)?s.map(i=>i&&qc(i)):[s&&qc(s)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function Pw(t){const e={};for(const n in t){const s=t[n];s!==void 0&&(e[n]=zt(s)?s.map(r=>r==null?null:""+r):s==null?s:""+s)}return e}const Ow=Symbol(""),id=Symbol(""),ca=Symbol(""),zl=Symbol(""),Hc=Symbol("");function Cr(){let t=[];function e(s){return t.push(s),()=>{const r=t.indexOf(s);r>-1&&t.splice(r,1)}}function n(){t=[]}return{add:e,list:()=>t,reset:n}}function Rn(t,e,n,s,r){const i=s&&(s.enterCallbacks[r]=s.enterCallbacks[r]||[]);return()=>new Promise((o,a)=>{const c=h=>{h===!1?a(Js(4,{from:n,to:e})):h instanceof Error?a(h):iw(h)?a(Js(2,{from:e,to:h})):(i&&s.enterCallbacks[r]===i&&typeof h=="function"&&i.push(h),o())},l=t.call(s&&s.instances[r],e,n,c);let u=Promise.resolve(l);t.length<3&&(u=u.then(c)),u.catch(h=>a(h))})}function ic(t,e,n,s){const r=[];for(const i of t)for(const o in i.components){let a=i.components[o];if(!(e!=="beforeRouteEnter"&&!i.instances[o]))if(Mw(a)){const l=(a.__vccOpts||a)[e];l&&r.push(Rn(l,n,s,i,o))}else{let c=a();r.push(()=>c.then(l=>{if(!l)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${i.path}"`));const u=V0(l)?l.default:l;i.components[o]=u;const d=(u.__vccOpts||u)[e];return d&&Rn(d,n,s,i,o)()}))}}return r}function Mw(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function od(t){const e=jt(ca),n=jt(zl),s=Rt(()=>e.resolve(k(t.to))),r=Rt(()=>{const{matched:c}=s.value,{length:l}=c,u=c[l-1],h=n.matched;if(!u||!h.length)return-1;const d=h.findIndex(Xs.bind(null,u));if(d>-1)return d;const p=ad(c[l-2]);return l>1&&ad(u)===p&&h[h.length-1].path!==p?h.findIndex(Xs.bind(null,c[l-2])):d}),i=Rt(()=>r.value>-1&&Uw(n.params,s.value.params)),o=Rt(()=>r.value>-1&&r.value===n.matched.length-1&&Lp(n.params,s.value.params));function a(c={}){return $w(c)?e[k(t.replace)?"replace":"push"](k(t.to)).catch(Ur):Promise.resolve()}return{route:s,href:Rt(()=>s.value.href),isActive:i,isExactActive:o,navigate:a}}const Lw=yp({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:od,setup(t,{slots:e}){const n=mi(od(t)),{options:s}=jt(ca),r=Rt(()=>({[cd(t.activeClass,s.linkActiveClass,"router-link-active")]:n.isActive,[cd(t.exactActiveClass,s.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&e.default(n);return t.custom?i:Mp("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:r.value},i)}}}),Fw=Lw;function $w(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function Uw(t,e){for(const n in e){const s=e[n],r=t[n];if(typeof s=="string"){if(s!==r)return!1}else if(!zt(r)||r.length!==s.length||s.some((i,o)=>i!==r[o]))return!1}return!0}function ad(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const cd=(t,e,n)=>t??e??n,Vw=yp({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const s=jt(Hc),r=Rt(()=>t.route||s.value),i=jt(id,0),o=Rt(()=>{let l=k(i);const{matched:u}=r.value;let h;for(;(h=u[l])&&!h.components;)l++;return l}),a=Rt(()=>r.value.matched[o.value]);ro(id,Rt(()=>o.value+1)),ro(Ow,a),ro(Hc,r);const c=ce();return Vs(()=>[c.value,a.value,t.name],([l,u,h],[d,p,g])=>{u&&(u.instances[h]=l,p&&p!==u&&l&&l===d&&(u.leaveGuards.size||(u.leaveGuards=p.leaveGuards),u.updateGuards.size||(u.updateGuards=p.updateGuards))),l&&u&&(!p||!Xs(u,p)||!d)&&(u.enterCallbacks[h]||[]).forEach(v=>v(l))},{flush:"post"}),()=>{const l=r.value,u=t.name,h=a.value,d=h&&h.components[u];if(!d)return ld(n.default,{Component:d,route:l});const p=h.props[u],g=p?p===!0?l.params:typeof p=="function"?p(l):p:null,b=Mp(d,Ee({},g,e,{onVnodeUnmounted:w=>{w.component.isUnmounted&&(h.instances[u]=null)},ref:c}));return ld(n.default,{Component:b,route:l})||b}}});function ld(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const Bw=Vw;function jw(t){const e=mw(t.routes,t),n=t.parseQuery||Dw,s=t.stringifyQuery||rd,r=t.history,i=Cr(),o=Cr(),a=Cr(),c=t_(xn);let l=xn;Rs&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=sc.bind(null,T=>""+T),h=sc.bind(null,Nw),d=sc.bind(null,Eo);function p(T,U){let M,H;return $p(T)?(M=e.getRecordMatcher(T),H=U):H=T,e.addRoute(H,M)}function g(T){const U=e.getRecordMatcher(T);U&&e.removeRoute(U)}function v(){return e.getRoutes().map(T=>T.record)}function b(T){return!!e.getRecordMatcher(T)}function w(T,U){if(U=Ee({},U||c.value),typeof T=="string"){const f=rc(n,T,U.path),m=e.resolve({path:f.path},U),_=r.createHref(f.fullPath);return Ee(f,m,{params:d(m.params),hash:Eo(f.hash),redirectedFrom:void 0,href:_})}let M;if("path"in T)M=Ee({},T,{path:rc(n,T.path,U.path).path});else{const f=Ee({},T.params);for(const m in f)f[m]==null&&delete f[m];M=Ee({},T,{params:h(T.params)}),U.params=h(U.params)}const H=e.resolve(M,U),pe=T.hash||"";H.params=u(d(H.params));const Oe=q0(s,Ee({},T,{hash:Aw(pe),path:H.path})),ae=r.createHref(Oe);return Ee({fullPath:Oe,hash:pe,query:s===rd?Pw(T.query):T.query||{}},H,{redirectedFrom:void 0,href:ae})}function O(T){return typeof T=="string"?rc(n,T,c.value.path):Ee({},T)}function S(T,U){if(l!==T)return Js(8,{from:U,to:T})}function Q(T){return Re(T)}function oe(T){return Q(Ee(O(T),{replace:!0}))}function Ce(T){const U=T.matched[T.matched.length-1];if(U&&U.redirect){const{redirect:M}=U;let H=typeof M=="function"?M(T):M;return typeof H=="string"&&(H=H.includes("?")||H.includes("#")?H=O(H):{path:H},H.params={}),Ee({query:T.query,hash:T.hash,params:"path"in H?{}:T.params},H)}}function Re(T,U){const M=l=w(T),H=c.value,pe=T.state,Oe=T.force,ae=T.replace===!0,f=Ce(M);if(f)return Re(Ee(O(f),{state:typeof f=="object"?Ee({},pe,f.state):pe,force:Oe,replace:ae}),U||M);const m=M;m.redirectedFrom=U;let _;return!Oe&&H0(s,H,M)&&(_=Js(16,{to:m,from:H}),Zn(H,H,!0,!1)),(_?Promise.resolve(_):ge(m,H)).catch(E=>un(E)?un(E,2)?E:Mt(E):Se(E,m,H)).then(E=>{if(E){if(un(E,2))return Re(Ee({replace:ae},O(E.to),{state:typeof E.to=="object"?Ee({},pe,E.to.state):pe,force:Oe}),U||m)}else E=Le(m,H,!0,ae,pe);return fe(m,H,E),E})}function Y(T,U){const M=S(T,U);return M?Promise.reject(M):Promise.resolve()}function ge(T,U){let M;const[H,pe,Oe]=qw(T,U);M=ic(H.reverse(),"beforeRouteLeave",T,U);for(const f of H)f.leaveGuards.forEach(m=>{M.push(Rn(m,T,U))});const ae=Y.bind(null,T,U);return M.push(ae),xs(M).then(()=>{M=[];for(const f of i.list())M.push(Rn(f,T,U));return M.push(ae),xs(M)}).then(()=>{M=ic(pe,"beforeRouteUpdate",T,U);for(const f of pe)f.updateGuards.forEach(m=>{M.push(Rn(m,T,U))});return M.push(ae),xs(M)}).then(()=>{M=[];for(const f of T.matched)if(f.beforeEnter&&!U.matched.includes(f))if(zt(f.beforeEnter))for(const m of f.beforeEnter)M.push(Rn(m,T,U));else M.push(Rn(f.beforeEnter,T,U));return M.push(ae),xs(M)}).then(()=>(T.matched.forEach(f=>f.enterCallbacks={}),M=ic(Oe,"beforeRouteEnter",T,U),M.push(ae),xs(M))).then(()=>{M=[];for(const f of o.list())M.push(Rn(f,T,U));return M.push(ae),xs(M)}).catch(f=>un(f,8)?f:Promise.reject(f))}function fe(T,U,M){for(const H of a.list())H(T,U,M)}function Le(T,U,M,H,pe){const Oe=S(T,U);if(Oe)return Oe;const ae=U===xn,f=Rs?history.state:{};M&&(H||ae?r.replace(T.fullPath,Ee({scroll:ae&&f&&f.scroll},pe)):r.push(T.fullPath,pe)),c.value=T,Zn(T,U,M,ae),Mt()}let Ue;function Et(){Ue||(Ue=r.listen((T,U,M)=>{if(!Vi.listening)return;const H=w(T),pe=Ce(H);if(pe){Re(Ee(pe,{replace:!0}),H).catch(Ur);return}l=H;const Oe=c.value;Rs&&J0(Yh(Oe.fullPath,M.delta),aa()),ge(H,Oe).catch(ae=>un(ae,12)?ae:un(ae,2)?(Re(ae.to,H).then(f=>{un(f,20)&&!M.delta&&M.type===Jr.pop&&r.go(-1,!1)}).catch(Ur),Promise.reject()):(M.delta&&r.go(-M.delta,!1),Se(ae,H,Oe))).then(ae=>{ae=ae||Le(H,Oe,!1),ae&&(M.delta&&!un(ae,8)?r.go(-M.delta,!1):M.type===Jr.pop&&un(ae,20)&&r.go(-1,!1)),fe(H,Oe,ae)}).catch(Ur)}))}let Ot=Cr(),Jn=Cr(),Be;function Se(T,U,M){Mt(T);const H=Jn.list();return H.length?H.forEach(pe=>pe(T,U,M)):console.error(T),Promise.reject(T)}function be(){return Be&&c.value!==xn?Promise.resolve():new Promise((T,U)=>{Ot.add([T,U])})}function Mt(T){return Be||(Be=!T,Et(),Ot.list().forEach(([U,M])=>T?M(T):U()),Ot.reset()),T}function Zn(T,U,M,H){const{scrollBehavior:pe}=t;if(!Rs||!pe)return Promise.resolve();const Oe=!M&&Z0(Yh(T.fullPath,0))||(H||!M)&&history.state&&history.state.scroll||null;return ap().then(()=>pe(T,U,Oe)).then(ae=>ae&&X0(ae)).catch(ae=>Se(ae,T,U))}const Lt=T=>r.go(T);let yt;const Cs=new Set,Vi={currentRoute:c,listening:!0,addRoute:p,removeRoute:g,hasRoute:b,getRoutes:v,resolve:w,options:t,push:Q,replace:oe,go:Lt,back:()=>Lt(-1),forward:()=>Lt(1),beforeEach:i.add,beforeResolve:o.add,afterEach:a.add,onError:Jn.add,isReady:be,install(T){const U=this;T.component("RouterLink",Fw),T.component("RouterView",Bw),T.config.globalProperties.$router=U,Object.defineProperty(T.config.globalProperties,"$route",{enumerable:!0,get:()=>k(c)}),Rs&&!yt&&c.value===xn&&(yt=!0,Q(r.location).catch(pe=>{}));const M={};for(const pe in xn)M[pe]=Rt(()=>c.value[pe]);T.provide(ca,U),T.provide(zl,mi(M)),T.provide(Hc,c);const H=T.unmount;Cs.add(T),T.unmount=function(){Cs.delete(T),Cs.size<1&&(l=xn,Ue&&Ue(),Ue=null,c.value=xn,yt=!1,Be=!1),H()}}};return Vi}function xs(t){return t.reduce((e,n)=>e.then(()=>n()),Promise.resolve())}function qw(t,e){const n=[],s=[],r=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const a=e.matched[o];a&&(t.matched.find(l=>Xs(l,a))?s.push(a):n.push(a));const c=t.matched[o];c&&(e.matched.find(l=>Xs(l,c))||r.push(c))}return[n,s,r]}function la(){return jt(ca)}function Kl(){return jt(zl)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kp=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let r=t.charCodeAt(s);r<128?e[n++]=r:r<2048?(e[n++]=r>>6|192,e[n++]=r&63|128):(r&64512)===55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)===56320?(r=65536+((r&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=r>>18|240,e[n++]=r>>12&63|128,e[n++]=r>>6&63|128,e[n++]=r&63|128):(e[n++]=r>>12|224,e[n++]=r>>6&63|128,e[n++]=r&63|128)}return e},Hw=function(t){const e=[];let n=0,s=0;for(;n<t.length;){const r=t[n++];if(r<128)e[s++]=String.fromCharCode(r);else if(r>191&&r<224){const i=t[n++];e[s++]=String.fromCharCode((r&31)<<6|i&63)}else if(r>239&&r<365){const i=t[n++],o=t[n++],a=t[n++],c=((r&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[s++]=String.fromCharCode(55296+(c>>10)),e[s++]=String.fromCharCode(56320+(c&1023))}else{const i=t[n++],o=t[n++];e[s++]=String.fromCharCode((r&15)<<12|(i&63)<<6|o&63)}}return e.join("")},Wp={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let r=0;r<t.length;r+=3){const i=t[r],o=r+1<t.length,a=o?t[r+1]:0,c=r+2<t.length,l=c?t[r+2]:0,u=i>>2,h=(i&3)<<4|a>>4;let d=(a&15)<<2|l>>6,p=l&63;c||(p=64,o||(d=64)),s.push(n[u],n[h],n[d],n[p])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Kp(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Hw(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let r=0;r<t.length;){const i=n[t.charAt(r++)],a=r<t.length?n[t.charAt(r)]:0;++r;const l=r<t.length?n[t.charAt(r)]:64;++r;const h=r<t.length?n[t.charAt(r)]:64;if(++r,i==null||a==null||l==null||h==null)throw new zw;const d=i<<2|a>>4;if(s.push(d),l!==64){const p=a<<4&240|l>>2;if(s.push(p),h!==64){const g=l<<6&192|h;s.push(g)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class zw extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Kw=function(t){const e=Kp(t);return Wp.encodeByteArray(e,!0)},Io=function(t){return Kw(t).replace(/\./g,"")},Gp=function(t){try{return Wp.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ww(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gw=()=>Ww().__FIREBASE_DEFAULTS__,Qw=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},Yw=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Gp(t[1]);return e&&JSON.parse(e)},Wl=()=>{try{return Gw()||Qw()||Yw()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Qp=t=>{var e,n;return(n=(e=Wl())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},Xw=t=>{const e=Qp(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),s]:[e.substring(0,n),s]},Jw=()=>{var t;return(t=Wl())===null||t===void 0?void 0:t.config},Yp=t=>{var e;return(e=Wl())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zw{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eE(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=e||"demo-project",r=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:r,exp:r+3600,auth_time:r,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[Io(JSON.stringify(n)),Io(JSON.stringify(o)),a].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ft(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function tE(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ft())}function nE(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function sE(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function rE(){const t=ft();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function iE(){try{return typeof indexedDB=="object"}catch{return!1}}function oE(){return new Promise((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(s);r.onsuccess=()=>{r.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},r.onupgradeneeded=()=>{n=!1},r.onerror=()=>{var i;e(((i=r.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aE="FirebaseError";class Tn extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=aE,Object.setPrototypeOf(this,Tn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,gi.prototype.create)}}class gi{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},r=`${this.service}/${e}`,i=this.errors[e],o=i?cE(i,s):"Error",a=`${this.serviceName}: ${o} (${r}).`;return new Tn(r,a,s)}}function cE(t,e){return t.replace(lE,(n,s)=>{const r=e[s];return r!=null?String(r):`<${s}?>`})}const lE=/\{\$([^}]+)}/g;function uE(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function bo(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const r of n){if(!s.includes(r))return!1;const i=t[r],o=e[r];if(ud(i)&&ud(o)){if(!bo(i,o))return!1}else if(i!==o)return!1}for(const r of s)if(!n.includes(r))return!1;return!0}function ud(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yi(t){const e=[];for(const[n,s]of Object.entries(t))Array.isArray(s)?s.forEach(r=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(r))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function kr(t){const e={};return t.replace(/^\?/,"").split("&").forEach(s=>{if(s){const[r,i]=s.split("=");e[decodeURIComponent(r)]=decodeURIComponent(i)}}),e}function Rr(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function hE(t,e){const n=new dE(t,e);return n.subscribe.bind(n)}class dE{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,s){let r;if(e===void 0&&n===void 0&&s===void 0)throw new Error("Missing Observer.");fE(e,["next","error","complete"])?r=e:r={next:e,error:n,complete:s},r.next===void 0&&(r.next=oc),r.error===void 0&&(r.error=oc),r.complete===void 0&&(r.complete=oc);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch{}}),this.observers.push(r),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function fE(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function oc(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ge(t){return t&&t._delegate?t._delegate:t}class ps{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ss="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pE{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new Zw;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:n});r&&s.resolve(r)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(i){if(r)return null;throw i}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(gE(e))try{this.getOrInitializeService({instanceIdentifier:ss})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:r});s.resolve(i)}catch{}}}}clearInstance(e=ss){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=ss){return this.instances.has(e)}getOptions(e=ss){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);s===a&&o.resolve(r)}return r}onInit(e,n){var s;const r=this.normalizeInstanceIdentifier(n),i=(s=this.onInitCallbacks.get(r))!==null&&s!==void 0?s:new Set;i.add(e),this.onInitCallbacks.set(r,i);const o=this.instances.get(r);return o&&e(o,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(s)for(const r of s)try{r(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:mE(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=ss){return this.component?this.component.multipleInstances?e:ss:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function mE(t){return t===ss?void 0:t}function gE(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yE{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new pE(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ye;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ye||(ye={}));const vE={debug:ye.DEBUG,verbose:ye.VERBOSE,info:ye.INFO,warn:ye.WARN,error:ye.ERROR,silent:ye.SILENT},_E=ye.INFO,wE={[ye.DEBUG]:"log",[ye.VERBOSE]:"log",[ye.INFO]:"info",[ye.WARN]:"warn",[ye.ERROR]:"error"},EE=(t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),r=wE[e];if(r)console[r](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Gl{constructor(e){this.name=e,this._logLevel=_E,this._logHandler=EE,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ye))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?vE[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ye.DEBUG,...e),this._logHandler(this,ye.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ye.VERBOSE,...e),this._logHandler(this,ye.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ye.INFO,...e),this._logHandler(this,ye.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ye.WARN,...e),this._logHandler(this,ye.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ye.ERROR,...e),this._logHandler(this,ye.ERROR,...e)}}const IE=(t,e)=>e.some(n=>t instanceof n);let hd,dd;function bE(){return hd||(hd=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function TE(){return dd||(dd=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Xp=new WeakMap,zc=new WeakMap,Jp=new WeakMap,ac=new WeakMap,Ql=new WeakMap;function CE(t){const e=new Promise((n,s)=>{const r=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(Un(t.result)),r()},o=()=>{s(t.error),r()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Xp.set(n,t)}).catch(()=>{}),Ql.set(e,t),e}function SE(t){if(zc.has(t))return;const e=new Promise((n,s)=>{const r=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),r()},o=()=>{s(t.error||new DOMException("AbortError","AbortError")),r()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});zc.set(t,e)}let Kc={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return zc.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Jp.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Un(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function xE(t){Kc=t(Kc)}function AE(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=t.call(cc(this),e,...n);return Jp.set(s,e.sort?e.sort():[e]),Un(s)}:TE().includes(t)?function(...e){return t.apply(cc(this),e),Un(Xp.get(this))}:function(...e){return Un(t.apply(cc(this),e))}}function kE(t){return typeof t=="function"?AE(t):(t instanceof IDBTransaction&&SE(t),IE(t,bE())?new Proxy(t,Kc):t)}function Un(t){if(t instanceof IDBRequest)return CE(t);if(ac.has(t))return ac.get(t);const e=kE(t);return e!==t&&(ac.set(t,e),Ql.set(e,t)),e}const cc=t=>Ql.get(t);function RE(t,e,{blocked:n,upgrade:s,blocking:r,terminated:i}={}){const o=indexedDB.open(t,e),a=Un(o);return s&&o.addEventListener("upgradeneeded",c=>{s(Un(o.result),c.oldVersion,c.newVersion,Un(o.transaction),c)}),n&&o.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),a.then(c=>{i&&c.addEventListener("close",()=>i()),r&&c.addEventListener("versionchange",l=>r(l.oldVersion,l.newVersion,l))}).catch(()=>{}),a}const NE=["get","getKey","getAll","getAllKeys","count"],DE=["put","add","delete","clear"],lc=new Map;function fd(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(lc.get(e))return lc.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,r=DE.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(r||NE.includes(n)))return;const i=async function(o,...a){const c=this.transaction(o,r?"readwrite":"readonly");let l=c.store;return s&&(l=l.index(a.shift())),(await Promise.all([l[n](...a),r&&c.done]))[0]};return lc.set(e,i),i}xE(t=>({...t,get:(e,n,s)=>fd(e,n)||t.get(e,n,s),has:(e,n)=>!!fd(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PE{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(OE(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function OE(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Wc="@firebase/app",pd="0.9.9";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ms=new Gl("@firebase/app"),ME="@firebase/app-compat",LE="@firebase/analytics-compat",FE="@firebase/analytics",$E="@firebase/app-check-compat",UE="@firebase/app-check",VE="@firebase/auth",BE="@firebase/auth-compat",jE="@firebase/database",qE="@firebase/database-compat",HE="@firebase/functions",zE="@firebase/functions-compat",KE="@firebase/installations",WE="@firebase/installations-compat",GE="@firebase/messaging",QE="@firebase/messaging-compat",YE="@firebase/performance",XE="@firebase/performance-compat",JE="@firebase/remote-config",ZE="@firebase/remote-config-compat",eI="@firebase/storage",tI="@firebase/storage-compat",nI="@firebase/firestore",sI="@firebase/firestore-compat",rI="firebase",iI="9.21.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gc="[DEFAULT]",oI={[Wc]:"fire-core",[ME]:"fire-core-compat",[FE]:"fire-analytics",[LE]:"fire-analytics-compat",[UE]:"fire-app-check",[$E]:"fire-app-check-compat",[VE]:"fire-auth",[BE]:"fire-auth-compat",[jE]:"fire-rtdb",[qE]:"fire-rtdb-compat",[HE]:"fire-fn",[zE]:"fire-fn-compat",[KE]:"fire-iid",[WE]:"fire-iid-compat",[GE]:"fire-fcm",[QE]:"fire-fcm-compat",[YE]:"fire-perf",[XE]:"fire-perf-compat",[JE]:"fire-rc",[ZE]:"fire-rc-compat",[eI]:"fire-gcs",[tI]:"fire-gcs-compat",[nI]:"fire-fst",[sI]:"fire-fst-compat","fire-js":"fire-js",[rI]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const To=new Map,Qc=new Map;function aI(t,e){try{t.container.addComponent(e)}catch(n){ms.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Zs(t){const e=t.name;if(Qc.has(e))return ms.debug(`There were multiple attempts to register component ${e}.`),!1;Qc.set(e,t);for(const n of To.values())aI(n,t);return!0}function Yl(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cI={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Vn=new gi("app","Firebase",cI);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lI{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new ps("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Vn.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dr=iI;function Zp(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const s=Object.assign({name:Gc,automaticDataCollectionEnabled:!1},e),r=s.name;if(typeof r!="string"||!r)throw Vn.create("bad-app-name",{appName:String(r)});if(n||(n=Jw()),!n)throw Vn.create("no-options");const i=To.get(r);if(i){if(bo(n,i.options)&&bo(s,i.config))return i;throw Vn.create("duplicate-app",{appName:r})}const o=new yE(r);for(const c of Qc.values())o.addComponent(c);const a=new lI(n,s,o);return To.set(r,a),a}function em(t=Gc){const e=To.get(t);if(!e&&t===Gc)return Zp();if(!e)throw Vn.create("no-app",{appName:t});return e}function Bn(t,e,n){var s;let r=(s=oI[t])!==null&&s!==void 0?s:t;n&&(r+=`-${n}`);const i=r.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const a=[`Unable to register library "${r}" with version "${e}":`];i&&a.push(`library name "${r}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),ms.warn(a.join(" "));return}Zs(new ps(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uI="firebase-heartbeat-database",hI=1,Zr="firebase-heartbeat-store";let uc=null;function tm(){return uc||(uc=RE(uI,hI,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Zr)}}}).catch(t=>{throw Vn.create("idb-open",{originalErrorMessage:t.message})})),uc}async function dI(t){try{return(await tm()).transaction(Zr).objectStore(Zr).get(nm(t))}catch(e){if(e instanceof Tn)ms.warn(e.message);else{const n=Vn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});ms.warn(n.message)}}}async function md(t,e){try{const s=(await tm()).transaction(Zr,"readwrite");return await s.objectStore(Zr).put(e,nm(t)),s.done}catch(n){if(n instanceof Tn)ms.warn(n.message);else{const s=Vn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});ms.warn(s.message)}}}function nm(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fI=1024,pI=30*24*60*60*1e3;class mI{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new yI(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=gd();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(r=>r.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(r=>{const i=new Date(r.date).valueOf();return Date.now()-i<=pI}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=gd(),{heartbeatsToSend:n,unsentEntries:s}=gI(this._heartbeatsCache.heartbeats),r=Io(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function gd(){return new Date().toISOString().substring(0,10)}function gI(t,e=fI){const n=[];let s=t.slice();for(const r of t){const i=n.find(o=>o.agent===r.agent);if(i){if(i.dates.push(r.date),yd(n)>e){i.dates.pop();break}}else if(n.push({agent:r.agent,dates:[r.date]}),yd(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class yI{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return iE()?oE().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await dI(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return md(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return md(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function yd(t){return Io(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vI(t){Zs(new ps("platform-logger",e=>new PE(e),"PRIVATE")),Zs(new ps("heartbeat",e=>new mI(e),"PRIVATE")),Bn(Wc,pd,t),Bn(Wc,pd,"esm2017"),Bn("fire-js","")}vI("");var _I="firebase",wI="9.21.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Bn(_I,wI,"app");var EI=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},F,Xl=Xl||{},Z=EI||self;function Co(){}function ua(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function vi(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function II(t){return Object.prototype.hasOwnProperty.call(t,hc)&&t[hc]||(t[hc]=++bI)}var hc="closure_uid_"+(1e9*Math.random()>>>0),bI=0;function TI(t,e,n){return t.call.apply(t.bind,arguments)}function CI(t,e,n){if(!t)throw Error();if(2<arguments.length){var s=Array.prototype.slice.call(arguments,2);return function(){var r=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(r,s),t.apply(e,r)}}return function(){return t.apply(e,arguments)}}function ct(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?ct=TI:ct=CI,ct.apply(null,arguments)}function Wi(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var s=n.slice();return s.push.apply(s,arguments),t.apply(this,s)}}function Xe(t,e){function n(){}n.prototype=e.prototype,t.$=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.ac=function(s,r,i){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[r].apply(s,o)}}function Qn(){this.s=this.s,this.o=this.o}var SI=0;Qn.prototype.s=!1;Qn.prototype.ra=function(){!this.s&&(this.s=!0,this.N(),SI!=0)&&II(this)};Qn.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const sm=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function Jl(t){const e=t.length;if(0<e){const n=Array(e);for(let s=0;s<e;s++)n[s]=t[s];return n}return[]}function vd(t,e){for(let n=1;n<arguments.length;n++){const s=arguments[n];if(ua(s)){const r=t.length||0,i=s.length||0;t.length=r+i;for(let o=0;o<i;o++)t[r+o]=s[o]}else t.push(s)}}function lt(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}lt.prototype.h=function(){this.defaultPrevented=!0};var xI=function(){if(!Z.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{Z.addEventListener("test",Co,e),Z.removeEventListener("test",Co,e)}catch{}return t}();function So(t){return/^[\s\xa0]*$/.test(t)}var _d=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function dc(t,e){return t<e?-1:t>e?1:0}function ha(){var t=Z.navigator;return t&&(t=t.userAgent)?t:""}function en(t){return ha().indexOf(t)!=-1}function Zl(t){return Zl[" "](t),t}Zl[" "]=Co;function rm(t,e,n){return Object.prototype.hasOwnProperty.call(t,e)?t[e]:t[e]=n(e)}var AI=en("Opera"),er=en("Trident")||en("MSIE"),im=en("Edge"),Yc=im||er,om=en("Gecko")&&!(ha().toLowerCase().indexOf("webkit")!=-1&&!en("Edge"))&&!(en("Trident")||en("MSIE"))&&!en("Edge"),kI=ha().toLowerCase().indexOf("webkit")!=-1&&!en("Edge");function am(){var t=Z.document;return t?t.documentMode:void 0}var xo;e:{var fc="",pc=function(){var t=ha();if(om)return/rv:([^\);]+)(\)|;)/.exec(t);if(im)return/Edge\/([\d\.]+)/.exec(t);if(er)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(kI)return/WebKit\/(\S+)/.exec(t);if(AI)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(pc&&(fc=pc?pc[1]:""),er){var mc=am();if(mc!=null&&mc>parseFloat(fc)){xo=String(mc);break e}}xo=fc}var RI={};function NI(){return rm(RI,9,function(){let t=0;const e=_d(String(xo)).split("."),n=_d("9").split("."),s=Math.max(e.length,n.length);for(let o=0;t==0&&o<s;o++){var r=e[o]||"",i=n[o]||"";do{if(r=/(\d*)(\D*)(.*)/.exec(r)||["","","",""],i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],r[0].length==0&&i[0].length==0)break;t=dc(r[1].length==0?0:parseInt(r[1],10),i[1].length==0?0:parseInt(i[1],10))||dc(r[2].length==0,i[2].length==0)||dc(r[2],i[2]),r=r[3],i=i[3]}while(t==0)}return 0<=t})}var Xc;if(Z.document&&er){var wd=am();Xc=wd||parseInt(xo,10)||void 0}else Xc=void 0;var DI=Xc;function ei(t,e){if(lt.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,s=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(om){e:{try{Zl(e.nodeName);var r=!0;break e}catch{}r=!1}r||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,s?(this.clientX=s.clientX!==void 0?s.clientX:s.pageX,this.clientY=s.clientY!==void 0?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:PI[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&ei.$.h.call(this)}}Xe(ei,lt);var PI={2:"touch",3:"pen",4:"mouse"};ei.prototype.h=function(){ei.$.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var _i="closure_listenable_"+(1e6*Math.random()|0),OI=0;function MI(t,e,n,s,r){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!s,this.la=r,this.key=++OI,this.fa=this.ia=!1}function da(t){t.fa=!0,t.listener=null,t.proxy=null,t.src=null,t.la=null}function eu(t,e,n){for(const s in t)e.call(n,t[s],s,t)}function cm(t){const e={};for(const n in t)e[n]=t[n];return e}const Ed="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function lm(t,e){let n,s;for(let r=1;r<arguments.length;r++){s=arguments[r];for(n in s)t[n]=s[n];for(let i=0;i<Ed.length;i++)n=Ed[i],Object.prototype.hasOwnProperty.call(s,n)&&(t[n]=s[n])}}function fa(t){this.src=t,this.g={},this.h=0}fa.prototype.add=function(t,e,n,s,r){var i=t.toString();t=this.g[i],t||(t=this.g[i]=[],this.h++);var o=Zc(t,e,s,r);return-1<o?(e=t[o],n||(e.ia=!1)):(e=new MI(e,this.src,i,!!s,r),e.ia=n,t.push(e)),e};function Jc(t,e){var n=e.type;if(n in t.g){var s=t.g[n],r=sm(s,e),i;(i=0<=r)&&Array.prototype.splice.call(s,r,1),i&&(da(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function Zc(t,e,n,s){for(var r=0;r<t.length;++r){var i=t[r];if(!i.fa&&i.listener==e&&i.capture==!!n&&i.la==s)return r}return-1}var tu="closure_lm_"+(1e6*Math.random()|0),gc={};function um(t,e,n,s,r){if(s&&s.once)return dm(t,e,n,s,r);if(Array.isArray(e)){for(var i=0;i<e.length;i++)um(t,e[i],n,s,r);return null}return n=ru(n),t&&t[_i]?t.O(e,n,vi(s)?!!s.capture:!!s,r):hm(t,e,n,!1,s,r)}function hm(t,e,n,s,r,i){if(!e)throw Error("Invalid event type");var o=vi(r)?!!r.capture:!!r,a=su(t);if(a||(t[tu]=a=new fa(t)),n=a.add(e,n,s,o,i),n.proxy)return n;if(s=LI(),n.proxy=s,s.src=t,s.listener=n,t.addEventListener)xI||(r=o),r===void 0&&(r=!1),t.addEventListener(e.toString(),s,r);else if(t.attachEvent)t.attachEvent(pm(e.toString()),s);else if(t.addListener&&t.removeListener)t.addListener(s);else throw Error("addEventListener and attachEvent are unavailable.");return n}function LI(){function t(n){return e.call(t.src,t.listener,n)}const e=FI;return t}function dm(t,e,n,s,r){if(Array.isArray(e)){for(var i=0;i<e.length;i++)dm(t,e[i],n,s,r);return null}return n=ru(n),t&&t[_i]?t.P(e,n,vi(s)?!!s.capture:!!s,r):hm(t,e,n,!0,s,r)}function fm(t,e,n,s,r){if(Array.isArray(e))for(var i=0;i<e.length;i++)fm(t,e[i],n,s,r);else s=vi(s)?!!s.capture:!!s,n=ru(n),t&&t[_i]?(t=t.i,e=String(e).toString(),e in t.g&&(i=t.g[e],n=Zc(i,n,s,r),-1<n&&(da(i[n]),Array.prototype.splice.call(i,n,1),i.length==0&&(delete t.g[e],t.h--)))):t&&(t=su(t))&&(e=t.g[e.toString()],t=-1,e&&(t=Zc(e,n,s,r)),(n=-1<t?e[t]:null)&&nu(n))}function nu(t){if(typeof t!="number"&&t&&!t.fa){var e=t.src;if(e&&e[_i])Jc(e.i,t);else{var n=t.type,s=t.proxy;e.removeEventListener?e.removeEventListener(n,s,t.capture):e.detachEvent?e.detachEvent(pm(n),s):e.addListener&&e.removeListener&&e.removeListener(s),(n=su(e))?(Jc(n,t),n.h==0&&(n.src=null,e[tu]=null)):da(t)}}}function pm(t){return t in gc?gc[t]:gc[t]="on"+t}function FI(t,e){if(t.fa)t=!0;else{e=new ei(e,this);var n=t.listener,s=t.la||t.src;t.ia&&nu(t),t=n.call(s,e)}return t}function su(t){return t=t[tu],t instanceof fa?t:null}var yc="__closure_events_fn_"+(1e9*Math.random()>>>0);function ru(t){return typeof t=="function"?t:(t[yc]||(t[yc]=function(e){return t.handleEvent(e)}),t[yc])}function Ye(){Qn.call(this),this.i=new fa(this),this.S=this,this.J=null}Xe(Ye,Qn);Ye.prototype[_i]=!0;Ye.prototype.removeEventListener=function(t,e,n,s){fm(this,t,e,n,s)};function et(t,e){var n,s=t.J;if(s)for(n=[];s;s=s.J)n.push(s);if(t=t.S,s=e.type||e,typeof e=="string")e=new lt(e,t);else if(e instanceof lt)e.target=e.target||t;else{var r=e;e=new lt(s,t),lm(e,r)}if(r=!0,n)for(var i=n.length-1;0<=i;i--){var o=e.g=n[i];r=Gi(o,s,!0,e)&&r}if(o=e.g=t,r=Gi(o,s,!0,e)&&r,r=Gi(o,s,!1,e)&&r,n)for(i=0;i<n.length;i++)o=e.g=n[i],r=Gi(o,s,!1,e)&&r}Ye.prototype.N=function(){if(Ye.$.N.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],s=0;s<n.length;s++)da(n[s]);delete t.g[e],t.h--}}this.J=null};Ye.prototype.O=function(t,e,n,s){return this.i.add(String(t),e,!1,n,s)};Ye.prototype.P=function(t,e,n,s){return this.i.add(String(t),e,!0,n,s)};function Gi(t,e,n,s){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var r=!0,i=0;i<e.length;++i){var o=e[i];if(o&&!o.fa&&o.capture==n){var a=o.listener,c=o.la||o.src;o.ia&&Jc(t.i,o),r=a.call(c,s)!==!1&&r}}return r&&!s.defaultPrevented}var iu=Z.JSON.stringify;function $I(){var t=ym;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class UI{constructor(){this.h=this.g=null}add(e,n){const s=mm.get();s.set(e,n),this.h?this.h.next=s:this.g=s,this.h=s}}var mm=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}(()=>new VI,t=>t.reset());class VI{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function BI(t){Z.setTimeout(()=>{throw t},0)}function gm(t,e){el||jI(),tl||(el(),tl=!0),ym.add(t,e)}var el;function jI(){var t=Z.Promise.resolve(void 0);el=function(){t.then(qI)}}var tl=!1,ym=new UI;function qI(){for(var t;t=$I();){try{t.h.call(t.g)}catch(n){BI(n)}var e=mm;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}tl=!1}function pa(t,e){Ye.call(this),this.h=t||1,this.g=e||Z,this.j=ct(this.qb,this),this.l=Date.now()}Xe(pa,Ye);F=pa.prototype;F.ga=!1;F.T=null;F.qb=function(){if(this.ga){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-t):(this.T&&(this.g.clearTimeout(this.T),this.T=null),et(this,"tick"),this.ga&&(ou(this),this.start()))}};F.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function ou(t){t.ga=!1,t.T&&(t.g.clearTimeout(t.T),t.T=null)}F.N=function(){pa.$.N.call(this),ou(this),delete this.g};function au(t,e,n){if(typeof t=="function")n&&(t=ct(t,n));else if(t&&typeof t.handleEvent=="function")t=ct(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:Z.setTimeout(t,e||0)}function vm(t){t.g=au(()=>{t.g=null,t.i&&(t.i=!1,vm(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class HI extends Qn{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:vm(this)}N(){super.N(),this.g&&(Z.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function ti(t){Qn.call(this),this.h=t,this.g={}}Xe(ti,Qn);var Id=[];function _m(t,e,n,s){Array.isArray(n)||(n&&(Id[0]=n.toString()),n=Id);for(var r=0;r<n.length;r++){var i=um(e,n[r],s||t.handleEvent,!1,t.h||t);if(!i)break;t.g[i.key]=i}}function wm(t){eu(t.g,function(e,n){this.g.hasOwnProperty(n)&&nu(e)},t),t.g={}}ti.prototype.N=function(){ti.$.N.call(this),wm(this)};ti.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function ma(){this.g=!0}ma.prototype.Ea=function(){this.g=!1};function zI(t,e,n,s,r,i){t.info(function(){if(t.g)if(i)for(var o="",a=i.split("&"),c=0;c<a.length;c++){var l=a[c].split("=");if(1<l.length){var u=l[0];l=l[1];var h=u.split("_");o=2<=h.length&&h[1]=="type"?o+(u+"="+l+"&"):o+(u+"=redacted&")}}else o=null;else o=i;return"XMLHTTP REQ ("+s+") [attempt "+r+"]: "+e+`
`+n+`
`+o})}function KI(t,e,n,s,r,i,o){t.info(function(){return"XMLHTTP RESP ("+s+") [ attempt "+r+"]: "+e+`
`+n+`
`+i+" "+o})}function Os(t,e,n,s){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+GI(t,n)+(s?" "+s:"")})}function WI(t,e){t.info(function(){return"TIMEOUT: "+e})}ma.prototype.info=function(){};function GI(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var s=n[t];if(!(2>s.length)){var r=s[1];if(Array.isArray(r)&&!(1>r.length)){var i=r[0];if(i!="noop"&&i!="stop"&&i!="close")for(var o=1;o<r.length;o++)r[o]=""}}}}return iu(n)}catch{return e}}var Es={},bd=null;function ga(){return bd=bd||new Ye}Es.Ta="serverreachability";function Em(t){lt.call(this,Es.Ta,t)}Xe(Em,lt);function ni(t){const e=ga();et(e,new Em(e))}Es.STAT_EVENT="statevent";function Im(t,e){lt.call(this,Es.STAT_EVENT,t),this.stat=e}Xe(Im,lt);function gt(t){const e=ga();et(e,new Im(e,t))}Es.Ua="timingevent";function bm(t,e){lt.call(this,Es.Ua,t),this.size=e}Xe(bm,lt);function wi(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return Z.setTimeout(function(){t()},e)}var ya={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},Tm={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function cu(){}cu.prototype.h=null;function Td(t){return t.h||(t.h=t.i())}function Cm(){}var Ei={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function lu(){lt.call(this,"d")}Xe(lu,lt);function uu(){lt.call(this,"c")}Xe(uu,lt);var nl;function va(){}Xe(va,cu);va.prototype.g=function(){return new XMLHttpRequest};va.prototype.i=function(){return{}};nl=new va;function Ii(t,e,n,s){this.l=t,this.j=e,this.m=n,this.W=s||1,this.U=new ti(this),this.P=QI,t=Yc?125:void 0,this.V=new pa(t),this.I=null,this.i=!1,this.s=this.A=this.v=this.L=this.G=this.Y=this.B=null,this.F=[],this.g=null,this.C=0,this.o=this.u=null,this.aa=-1,this.J=!1,this.O=0,this.M=null,this.ca=this.K=this.ba=this.S=!1,this.h=new Sm}function Sm(){this.i=null,this.g="",this.h=!1}var QI=45e3,sl={},Ao={};F=Ii.prototype;F.setTimeout=function(t){this.P=t};function rl(t,e,n){t.L=1,t.v=wa(vn(e)),t.s=n,t.S=!0,xm(t,null)}function xm(t,e){t.G=Date.now(),bi(t),t.A=vn(t.v);var n=t.A,s=t.W;Array.isArray(s)||(s=[String(s)]),Mm(n.i,"t",s),t.C=0,n=t.l.I,t.h=new Sm,t.g=ng(t.l,n?e:null,!t.s),0<t.O&&(t.M=new HI(ct(t.Pa,t,t.g),t.O)),_m(t.U,t.g,"readystatechange",t.nb),e=t.I?cm(t.I):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ha(t.A,t.u,t.s,e)):(t.u="GET",t.g.ha(t.A,t.u,null,e)),ni(),zI(t.j,t.u,t.A,t.m,t.W,t.s)}F.nb=function(t){t=t.target;const e=this.M;e&&dn(t)==3?e.l():this.Pa(t)};F.Pa=function(t){try{if(t==this.g)e:{const u=dn(this.g);var e=this.g.Ia();const h=this.g.da();if(!(3>u)&&(u!=3||Yc||this.g&&(this.h.h||this.g.ja()||Ad(this.g)))){this.J||u!=4||e==7||(e==8||0>=h?ni(3):ni(2)),_a(this);var n=this.g.da();this.aa=n;t:if(Am(this)){var s=Ad(this.g);t="";var r=s.length,i=dn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){as(this),Br(this);var o="";break t}this.h.i=new Z.TextDecoder}for(e=0;e<r;e++)this.h.h=!0,t+=this.h.i.decode(s[e],{stream:i&&e==r-1});s.splice(0,r),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.ja();if(this.i=n==200,KI(this.j,this.u,this.A,this.m,this.W,u,n),this.i){if(this.ba&&!this.K){t:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!So(a)){var l=a;break t}}l=null}if(n=l)Os(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,il(this,n);else{this.i=!1,this.o=3,gt(12),as(this),Br(this);break e}}this.S?(km(this,u,o),Yc&&this.i&&u==3&&(_m(this.U,this.V,"tick",this.mb),this.V.start())):(Os(this.j,this.m,o,null),il(this,o)),u==4&&as(this),this.i&&!this.J&&(u==4?Jm(this.l,this):(this.i=!1,bi(this)))}else n==400&&0<o.indexOf("Unknown SID")?(this.o=3,gt(12)):(this.o=0,gt(13)),as(this),Br(this)}}}catch{}finally{}};function Am(t){return t.g?t.u=="GET"&&t.L!=2&&t.l.Ha:!1}function km(t,e,n){let s=!0,r;for(;!t.J&&t.C<n.length;)if(r=YI(t,n),r==Ao){e==4&&(t.o=4,gt(14),s=!1),Os(t.j,t.m,null,"[Incomplete Response]");break}else if(r==sl){t.o=4,gt(15),Os(t.j,t.m,n,"[Invalid Chunk]"),s=!1;break}else Os(t.j,t.m,r,null),il(t,r);Am(t)&&r!=Ao&&r!=sl&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,gt(16),s=!1),t.i=t.i&&s,s?0<n.length&&!t.ca&&(t.ca=!0,e=t.l,e.g==t&&e.ca&&!e.L&&(e.j.info("Great, no buffering proxy detected. Bytes received: "+n.length),yu(e),e.L=!0,gt(11))):(Os(t.j,t.m,n,"[Invalid Chunked Response]"),as(t),Br(t))}F.mb=function(){if(this.g){var t=dn(this.g),e=this.g.ja();this.C<e.length&&(_a(this),km(this,t,e),this.i&&t!=4&&bi(this))}};function YI(t,e){var n=t.C,s=e.indexOf(`
`,n);return s==-1?Ao:(n=Number(e.substring(n,s)),isNaN(n)?sl:(s+=1,s+n>e.length?Ao:(e=e.substr(s,n),t.C=s+n,e)))}F.cancel=function(){this.J=!0,as(this)};function bi(t){t.Y=Date.now()+t.P,Rm(t,t.P)}function Rm(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=wi(ct(t.lb,t),e)}function _a(t){t.B&&(Z.clearTimeout(t.B),t.B=null)}F.lb=function(){this.B=null;const t=Date.now();0<=t-this.Y?(WI(this.j,this.A),this.L!=2&&(ni(),gt(17)),as(this),this.o=2,Br(this)):Rm(this,this.Y-t)};function Br(t){t.l.H==0||t.J||Jm(t.l,t)}function as(t){_a(t);var e=t.M;e&&typeof e.ra=="function"&&e.ra(),t.M=null,ou(t.V),wm(t.U),t.g&&(e=t.g,t.g=null,e.abort(),e.ra())}function il(t,e){try{var n=t.l;if(n.H!=0&&(n.g==t||ol(n.h,t))){if(!t.K&&ol(n.h,t)&&n.H==3){try{var s=n.Ja.g.parse(e)}catch{s=null}if(Array.isArray(s)&&s.length==3){var r=s;if(r[0]==0){e:if(!n.u){if(n.g)if(n.g.G+3e3<t.G)No(n),ba(n);else break e;gu(n),gt(18)}}else n.Fa=r[1],0<n.Fa-n.V&&37500>r[2]&&n.M&&n.A==0&&!n.v&&(n.v=wi(ct(n.ib,n),6e3));if(1>=$m(n.h)&&n.na){try{n.na()}catch{}n.na=void 0}}else cs(n,11)}else if((t.K||n.g==t)&&No(n),!So(e))for(r=n.Ja.g.parse(e),e=0;e<r.length;e++){let l=r[e];if(n.V=l[0],l=l[1],n.H==2)if(l[0]=="c"){n.J=l[1],n.oa=l[2];const u=l[3];u!=null&&(n.qa=u,n.j.info("VER="+n.qa));const h=l[4];h!=null&&(n.Ga=h,n.j.info("SVER="+n.Ga));const d=l[5];d!=null&&typeof d=="number"&&0<d&&(s=1.5*d,n.K=s,n.j.info("backChannelRequestTimeoutMs_="+s)),s=n;const p=t.g;if(p){const g=p.g?p.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(g){var i=s.h;i.g||g.indexOf("spdy")==-1&&g.indexOf("quic")==-1&&g.indexOf("h2")==-1||(i.j=i.l,i.g=new Set,i.h&&(hu(i,i.h),i.h=null))}if(s.F){const v=p.g?p.g.getResponseHeader("X-HTTP-Session-Id"):null;v&&(s.Da=v,De(s.G,s.F,v))}}n.H=3,n.l&&n.l.Ba(),n.ca&&(n.S=Date.now()-t.G,n.j.info("Handshake RTT: "+n.S+"ms")),s=n;var o=t;if(s.wa=tg(s,s.I?s.oa:null,s.Y),o.K){Um(s.h,o);var a=o,c=s.K;c&&a.setTimeout(c),a.B&&(_a(a),bi(a)),s.g=o}else Ym(s);0<n.i.length&&Ta(n)}else l[0]!="stop"&&l[0]!="close"||cs(n,7);else n.H==3&&(l[0]=="stop"||l[0]=="close"?l[0]=="stop"?cs(n,7):mu(n):l[0]!="noop"&&n.l&&n.l.Aa(l),n.A=0)}}ni(4)}catch{}}function XI(t){if(t.Z&&typeof t.Z=="function")return t.Z();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(ua(t)){for(var e=[],n=t.length,s=0;s<n;s++)e.push(t[s]);return e}e=[],n=0;for(s in t)e[n++]=t[s];return e}function JI(t){if(t.sa&&typeof t.sa=="function")return t.sa();if(!t.Z||typeof t.Z!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(ua(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const s in t)e[n++]=s;return e}}}function Nm(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(ua(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=JI(t),s=XI(t),r=s.length,i=0;i<r;i++)e.call(void 0,s[i],n&&n[i],t)}var Dm=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function ZI(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var s=t[n].indexOf("="),r=null;if(0<=s){var i=t[n].substring(0,s);r=t[n].substring(s+1)}else i=t[n];e(i,r?decodeURIComponent(r.replace(/\+/g," ")):"")}}}function ds(t,e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof ds){this.h=e!==void 0?e:t.h,ko(this,t.j),this.s=t.s,this.g=t.g,Ro(this,t.m),this.l=t.l,e=t.i;var n=new si;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),Cd(this,n),this.o=t.o}else t&&(n=String(t).match(Dm))?(this.h=!!e,ko(this,n[1]||"",!0),this.s=Nr(n[2]||""),this.g=Nr(n[3]||"",!0),Ro(this,n[4]),this.l=Nr(n[5]||"",!0),Cd(this,n[6]||"",!0),this.o=Nr(n[7]||"")):(this.h=!!e,this.i=new si(null,this.h))}ds.prototype.toString=function(){var t=[],e=this.j;e&&t.push(Dr(e,Sd,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(Dr(e,Sd,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(Dr(n,n.charAt(0)=="/"?nb:tb,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",Dr(n,rb)),t.join("")};function vn(t){return new ds(t)}function ko(t,e,n){t.j=n?Nr(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function Ro(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function Cd(t,e,n){e instanceof si?(t.i=e,ib(t.i,t.h)):(n||(e=Dr(e,sb)),t.i=new si(e,t.h))}function De(t,e,n){t.i.set(e,n)}function wa(t){return De(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function Nr(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function Dr(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,eb),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function eb(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var Sd=/[#\/\?@]/g,tb=/[#\?:]/g,nb=/[#\?]/g,sb=/[#\?@]/g,rb=/#/g;function si(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function Yn(t){t.g||(t.g=new Map,t.h=0,t.i&&ZI(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}F=si.prototype;F.add=function(t,e){Yn(this),this.i=null,t=fr(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function Pm(t,e){Yn(t),e=fr(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function Om(t,e){return Yn(t),e=fr(t,e),t.g.has(e)}F.forEach=function(t,e){Yn(this),this.g.forEach(function(n,s){n.forEach(function(r){t.call(e,r,s,this)},this)},this)};F.sa=function(){Yn(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let s=0;s<e.length;s++){const r=t[s];for(let i=0;i<r.length;i++)n.push(e[s])}return n};F.Z=function(t){Yn(this);let e=[];if(typeof t=="string")Om(this,t)&&(e=e.concat(this.g.get(fr(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};F.set=function(t,e){return Yn(this),this.i=null,t=fr(this,t),Om(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};F.get=function(t,e){return t?(t=this.Z(t),0<t.length?String(t[0]):e):e};function Mm(t,e,n){Pm(t,e),0<n.length&&(t.i=null,t.g.set(fr(t,e),Jl(n)),t.h+=n.length)}F.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var s=e[n];const i=encodeURIComponent(String(s)),o=this.Z(s);for(s=0;s<o.length;s++){var r=i;o[s]!==""&&(r+="="+encodeURIComponent(String(o[s]))),t.push(r)}}return this.i=t.join("&")};function fr(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function ib(t,e){e&&!t.j&&(Yn(t),t.i=null,t.g.forEach(function(n,s){var r=s.toLowerCase();s!=r&&(Pm(this,s),Mm(this,r,n))},t)),t.j=e}var ob=class{constructor(t,e){this.h=t,this.g=e}};function Lm(t){this.l=t||ab,Z.PerformanceNavigationTiming?(t=Z.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(Z.g&&Z.g.Ka&&Z.g.Ka()&&Z.g.Ka().ec),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var ab=10;function Fm(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function $m(t){return t.h?1:t.g?t.g.size:0}function ol(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function hu(t,e){t.g?t.g.add(e):t.h=e}function Um(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}Lm.prototype.cancel=function(){if(this.i=Vm(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function Vm(t){if(t.h!=null)return t.i.concat(t.h.F);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.F);return e}return Jl(t.i)}function du(){}du.prototype.stringify=function(t){return Z.JSON.stringify(t,void 0)};du.prototype.parse=function(t){return Z.JSON.parse(t,void 0)};function cb(){this.g=new du}function lb(t,e,n){const s=n||"";try{Nm(t,function(r,i){let o=r;vi(r)&&(o=iu(r)),e.push(s+i+"="+encodeURIComponent(o))})}catch(r){throw e.push(s+"type="+encodeURIComponent("_badmap")),r}}function ub(t,e){const n=new ma;if(Z.Image){const s=new Image;s.onload=Wi(Qi,n,s,"TestLoadImage: loaded",!0,e),s.onerror=Wi(Qi,n,s,"TestLoadImage: error",!1,e),s.onabort=Wi(Qi,n,s,"TestLoadImage: abort",!1,e),s.ontimeout=Wi(Qi,n,s,"TestLoadImage: timeout",!1,e),Z.setTimeout(function(){s.ontimeout&&s.ontimeout()},1e4),s.src=t}else e(!1)}function Qi(t,e,n,s,r){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,r(s)}catch{}}function Ti(t){this.l=t.fc||null,this.j=t.ob||!1}Xe(Ti,cu);Ti.prototype.g=function(){return new Ea(this.l,this.j)};Ti.prototype.i=function(t){return function(){return t}}({});function Ea(t,e){Ye.call(this),this.F=t,this.u=e,this.m=void 0,this.readyState=fu,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}Xe(Ea,Ye);var fu=0;F=Ea.prototype;F.open=function(t,e){if(this.readyState!=fu)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,ri(this)};F.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.F||Z).fetch(new Request(this.B,e)).then(this.$a.bind(this),this.ka.bind(this))};F.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Ci(this)),this.readyState=fu};F.$a=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,ri(this)),this.g&&(this.readyState=3,ri(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof Z.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Bm(this)}else t.text().then(this.Za.bind(this),this.ka.bind(this))};function Bm(t){t.j.read().then(t.Xa.bind(t)).catch(t.ka.bind(t))}F.Xa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?Ci(this):ri(this),this.readyState==3&&Bm(this)}};F.Za=function(t){this.g&&(this.response=this.responseText=t,Ci(this))};F.Ya=function(t){this.g&&(this.response=t,Ci(this))};F.ka=function(){this.g&&Ci(this)};function Ci(t){t.readyState=4,t.l=null,t.j=null,t.A=null,ri(t)}F.setRequestHeader=function(t,e){this.v.append(t,e)};F.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};F.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function ri(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(Ea.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var hb=Z.JSON.parse;function $e(t){Ye.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=jm,this.L=this.M=!1}Xe($e,Ye);var jm="",db=/^https?$/i,fb=["POST","PUT"];F=$e.prototype;F.Oa=function(t){this.M=t};F.ha=function(t,e,n,s){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+t);e=e?e.toUpperCase():"GET",this.I=t,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():nl.g(),this.C=this.u?Td(this.u):Td(nl),this.g.onreadystatechange=ct(this.La,this);try{this.G=!0,this.g.open(e,String(t),!0),this.G=!1}catch(i){xd(this,i);return}if(t=n||"",n=new Map(this.headers),s)if(Object.getPrototypeOf(s)===Object.prototype)for(var r in s)n.set(r,s[r]);else if(typeof s.keys=="function"&&typeof s.get=="function")for(const i of s.keys())n.set(i,s.get(i));else throw Error("Unknown input type for opt_headers: "+String(s));s=Array.from(n.keys()).find(i=>i.toLowerCase()=="content-type"),r=Z.FormData&&t instanceof Z.FormData,!(0<=sm(fb,e))||s||r||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[i,o]of n)this.g.setRequestHeader(i,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{zm(this),0<this.B&&((this.L=pb(this.g))?(this.g.timeout=this.B,this.g.ontimeout=ct(this.ua,this)):this.A=au(this.ua,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(i){xd(this,i)}};function pb(t){return er&&NI()&&typeof t.timeout=="number"&&t.ontimeout!==void 0}F.ua=function(){typeof Xl<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,et(this,"timeout"),this.abort(8))};function xd(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,qm(t),Ia(t)}function qm(t){t.F||(t.F=!0,et(t,"complete"),et(t,"error"))}F.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,et(this,"complete"),et(this,"abort"),Ia(this))};F.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Ia(this,!0)),$e.$.N.call(this)};F.La=function(){this.s||(this.G||this.v||this.l?Hm(this):this.kb())};F.kb=function(){Hm(this)};function Hm(t){if(t.h&&typeof Xl<"u"&&(!t.C[1]||dn(t)!=4||t.da()!=2)){if(t.v&&dn(t)==4)au(t.La,0,t);else if(et(t,"readystatechange"),dn(t)==4){t.h=!1;try{const a=t.da();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var s;if(s=a===0){var r=String(t.I).match(Dm)[1]||null;if(!r&&Z.self&&Z.self.location){var i=Z.self.location.protocol;r=i.substr(0,i.length-1)}s=!db.test(r?r.toLowerCase():"")}n=s}if(n)et(t,"complete"),et(t,"success");else{t.m=6;try{var o=2<dn(t)?t.g.statusText:""}catch{o=""}t.j=o+" ["+t.da()+"]",qm(t)}}finally{Ia(t)}}}}function Ia(t,e){if(t.g){zm(t);const n=t.g,s=t.C[0]?Co:null;t.g=null,t.C=null,e||et(t,"ready");try{n.onreadystatechange=s}catch{}}}function zm(t){t.g&&t.L&&(t.g.ontimeout=null),t.A&&(Z.clearTimeout(t.A),t.A=null)}function dn(t){return t.g?t.g.readyState:0}F.da=function(){try{return 2<dn(this)?this.g.status:-1}catch{return-1}};F.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};F.Wa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),hb(e)}};function Ad(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.K){case jm:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}F.Ia=function(){return this.m};F.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function Km(t){let e="";return eu(t,function(n,s){e+=s,e+=":",e+=n,e+=`\r
`}),e}function pu(t,e,n){e:{for(s in n){var s=!1;break e}s=!0}s||(n=Km(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):De(t,e,n))}function Sr(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function Wm(t){this.Ga=0,this.i=[],this.j=new ma,this.oa=this.wa=this.G=this.Y=this.g=this.Da=this.F=this.ma=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=Sr("failFast",!1,t),this.M=this.v=this.u=this.m=this.l=null,this.aa=!0,this.ta=this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=Sr("baseRetryDelayMs",5e3,t),this.hb=Sr("retryDelaySeedMs",1e4,t),this.eb=Sr("forwardChannelMaxRetries",2,t),this.xa=Sr("forwardChannelRequestTimeoutMs",2e4,t),this.va=t&&t.xmlHttpFactory||void 0,this.Ha=t&&t.dc||!1,this.K=void 0,this.I=t&&t.supportsCrossDomainXhr||!1,this.J="",this.h=new Lm(t&&t.concurrentRequestLimit),this.Ja=new cb,this.P=t&&t.fastHandshake||!1,this.O=t&&t.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=t&&t.bc||!1,t&&t.Ea&&this.j.Ea(),t&&t.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&t&&t.detectBufferingProxy||!1,this.na=void 0,this.S=0,this.L=!1,this.pa=this.B=null}F=Wm.prototype;F.qa=8;F.H=1;function mu(t){if(Gm(t),t.H==3){var e=t.W++,n=vn(t.G);De(n,"SID",t.J),De(n,"RID",e),De(n,"TYPE","terminate"),Si(t,n),e=new Ii(t,t.j,e,void 0),e.L=2,e.v=wa(vn(n)),n=!1,Z.navigator&&Z.navigator.sendBeacon&&(n=Z.navigator.sendBeacon(e.v.toString(),"")),!n&&Z.Image&&(new Image().src=e.v,n=!0),n||(e.g=ng(e.l,null),e.g.ha(e.v)),e.G=Date.now(),bi(e)}eg(t)}function ba(t){t.g&&(yu(t),t.g.cancel(),t.g=null)}function Gm(t){ba(t),t.u&&(Z.clearTimeout(t.u),t.u=null),No(t),t.h.cancel(),t.m&&(typeof t.m=="number"&&Z.clearTimeout(t.m),t.m=null)}function Ta(t){Fm(t.h)||t.m||(t.m=!0,gm(t.Na,t),t.C=0)}function mb(t,e){return $m(t.h)>=t.h.j-(t.m?1:0)?!1:t.m?(t.i=e.F.concat(t.i),!0):t.H==1||t.H==2||t.C>=(t.cb?0:t.eb)?!1:(t.m=wi(ct(t.Na,t,e),Zm(t,t.C)),t.C++,!0)}F.Na=function(t){if(this.m)if(this.m=null,this.H==1){if(!t){this.W=Math.floor(1e5*Math.random()),t=this.W++;const r=new Ii(this,this.j,t,void 0);let i=this.s;if(this.U&&(i?(i=cm(i),lm(i,this.U)):i=this.U),this.o!==null||this.O||(r.I=i,i=null),this.P)e:{for(var e=0,n=0;n<this.i.length;n++){t:{var s=this.i[n];if("__data__"in s.g&&(s=s.g.__data__,typeof s=="string")){s=s.length;break t}s=void 0}if(s===void 0)break;if(e+=s,4096<e){e=n;break e}if(e===4096||n===this.i.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=Qm(this,r,e),n=vn(this.G),De(n,"RID",t),De(n,"CVER",22),this.F&&De(n,"X-HTTP-Session-Id",this.F),Si(this,n),i&&(this.O?e="headers="+encodeURIComponent(String(Km(i)))+"&"+e:this.o&&pu(n,this.o,i)),hu(this.h,r),this.bb&&De(n,"TYPE","init"),this.P?(De(n,"$req",e),De(n,"SID","null"),r.ba=!0,rl(r,n,null)):rl(r,n,e),this.H=2}}else this.H==3&&(t?kd(this,t):this.i.length==0||Fm(this.h)||kd(this))};function kd(t,e){var n;e?n=e.m:n=t.W++;const s=vn(t.G);De(s,"SID",t.J),De(s,"RID",n),De(s,"AID",t.V),Si(t,s),t.o&&t.s&&pu(s,t.o,t.s),n=new Ii(t,t.j,n,t.C+1),t.o===null&&(n.I=t.s),e&&(t.i=e.F.concat(t.i)),e=Qm(t,n,1e3),n.setTimeout(Math.round(.5*t.xa)+Math.round(.5*t.xa*Math.random())),hu(t.h,n),rl(n,s,e)}function Si(t,e){t.ma&&eu(t.ma,function(n,s){De(e,s,n)}),t.l&&Nm({},function(n,s){De(e,s,n)})}function Qm(t,e,n){n=Math.min(t.i.length,n);var s=t.l?ct(t.l.Va,t.l,t):null;e:{var r=t.i;let i=-1;for(;;){const o=["count="+n];i==-1?0<n?(i=r[0].h,o.push("ofs="+i)):i=0:o.push("ofs="+i);let a=!0;for(let c=0;c<n;c++){let l=r[c].h;const u=r[c].g;if(l-=i,0>l)i=Math.max(0,r[c].h-100),a=!1;else try{lb(u,o,"req"+l+"_")}catch{s&&s(u)}}if(a){s=o.join("&");break e}}}return t=t.i.splice(0,n),e.F=t,s}function Ym(t){t.g||t.u||(t.ba=1,gm(t.Ma,t),t.A=0)}function gu(t){return t.g||t.u||3<=t.A?!1:(t.ba++,t.u=wi(ct(t.Ma,t),Zm(t,t.A)),t.A++,!0)}F.Ma=function(){if(this.u=null,Xm(this),this.ca&&!(this.L||this.g==null||0>=this.S)){var t=2*this.S;this.j.info("BP detection timer enabled: "+t),this.B=wi(ct(this.jb,this),t)}};F.jb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.M=!1,this.L=!0,gt(10),ba(this),Xm(this))};function yu(t){t.B!=null&&(Z.clearTimeout(t.B),t.B=null)}function Xm(t){t.g=new Ii(t,t.j,"rpc",t.ba),t.o===null&&(t.g.I=t.s),t.g.O=0;var e=vn(t.wa);De(e,"RID","rpc"),De(e,"SID",t.J),De(e,"CI",t.M?"0":"1"),De(e,"AID",t.V),De(e,"TYPE","xmlhttp"),Si(t,e),t.o&&t.s&&pu(e,t.o,t.s),t.K&&t.g.setTimeout(t.K);var n=t.g;t=t.oa,n.L=1,n.v=wa(vn(e)),n.s=null,n.S=!0,xm(n,t)}F.ib=function(){this.v!=null&&(this.v=null,ba(this),gu(this),gt(19))};function No(t){t.v!=null&&(Z.clearTimeout(t.v),t.v=null)}function Jm(t,e){var n=null;if(t.g==e){No(t),yu(t),t.g=null;var s=2}else if(ol(t.h,e))n=e.F,Um(t.h,e),s=1;else return;if(t.H!=0){if(t.ta=e.aa,e.i)if(s==1){n=e.s?e.s.length:0,e=Date.now()-e.G;var r=t.C;s=ga(),et(s,new bm(s,n)),Ta(t)}else Ym(t);else if(r=e.o,r==3||r==0&&0<t.ta||!(s==1&&mb(t,e)||s==2&&gu(t)))switch(n&&0<n.length&&(e=t.h,e.i=e.i.concat(n)),r){case 1:cs(t,5);break;case 4:cs(t,10);break;case 3:cs(t,6);break;default:cs(t,2)}}}function Zm(t,e){let n=t.ab+Math.floor(Math.random()*t.hb);return t.l||(n*=2),n*e}function cs(t,e){if(t.j.info("Error code "+e),e==2){var n=null;t.l&&(n=null);var s=ct(t.pb,t);n||(n=new ds("//www.google.com/images/cleardot.gif"),Z.location&&Z.location.protocol=="http"||ko(n,"https"),wa(n)),ub(n.toString(),s)}else gt(2);t.H=0,t.l&&t.l.za(e),eg(t),Gm(t)}F.pb=function(t){t?(this.j.info("Successfully pinged google.com"),gt(2)):(this.j.info("Failed to ping google.com"),gt(1))};function eg(t){if(t.H=0,t.pa=[],t.l){const e=Vm(t.h);(e.length!=0||t.i.length!=0)&&(vd(t.pa,e),vd(t.pa,t.i),t.h.i.length=0,Jl(t.i),t.i.length=0),t.l.ya()}}function tg(t,e,n){var s=n instanceof ds?vn(n):new ds(n,void 0);if(s.g!="")e&&(s.g=e+"."+s.g),Ro(s,s.m);else{var r=Z.location;s=r.protocol,e=e?e+"."+r.hostname:r.hostname,r=+r.port;var i=new ds(null,void 0);s&&ko(i,s),e&&(i.g=e),r&&Ro(i,r),n&&(i.l=n),s=i}return n=t.F,e=t.Da,n&&e&&De(s,n,e),De(s,"VER",t.qa),Si(t,s),s}function ng(t,e,n){if(e&&!t.I)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Ha&&!t.va?new $e(new Ti({ob:!0})):new $e(t.va),e.Oa(t.I),e}function sg(){}F=sg.prototype;F.Ba=function(){};F.Aa=function(){};F.za=function(){};F.ya=function(){};F.Va=function(){};function Do(){if(er&&!(10<=Number(DI)))throw Error("Environmental error: no available transport.")}Do.prototype.g=function(t,e){return new St(t,e)};function St(t,e){Ye.call(this),this.g=new Wm(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.Ca&&(t?t["X-WebChannel-Client-Profile"]=e.Ca:t={"X-WebChannel-Client-Profile":e.Ca}),this.g.U=t,(t=e&&e.cc)&&!So(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!So(e)&&(this.g.F=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new pr(this)}Xe(St,Ye);St.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.I=!0);var t=this.g,e=this.l,n=this.h||void 0;gt(0),t.Y=e,t.ma=n||{},t.M=t.aa,t.G=tg(t,null,t.Y),Ta(t)};St.prototype.close=function(){mu(this.g)};St.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=iu(t),t=n);e.i.push(new ob(e.fb++,t)),e.H==3&&Ta(e)};St.prototype.N=function(){this.g.l=null,delete this.j,mu(this.g),delete this.g,St.$.N.call(this)};function rg(t){lu.call(this);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}Xe(rg,lu);function ig(){uu.call(this),this.status=1}Xe(ig,uu);function pr(t){this.g=t}Xe(pr,sg);pr.prototype.Ba=function(){et(this.g,"a")};pr.prototype.Aa=function(t){et(this.g,new rg(t))};pr.prototype.za=function(t){et(this.g,new ig)};pr.prototype.ya=function(){et(this.g,"b")};function gb(){this.blockSize=-1}function Kt(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}Xe(Kt,gb);Kt.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function vc(t,e,n){n||(n=0);var s=Array(16);if(typeof e=="string")for(var r=0;16>r;++r)s[r]=e.charCodeAt(n++)|e.charCodeAt(n++)<<8|e.charCodeAt(n++)<<16|e.charCodeAt(n++)<<24;else for(r=0;16>r;++r)s[r]=e[n++]|e[n++]<<8|e[n++]<<16|e[n++]<<24;e=t.g[0],n=t.g[1],r=t.g[2];var i=t.g[3],o=e+(i^n&(r^i))+s[0]+3614090360&4294967295;e=n+(o<<7&4294967295|o>>>25),o=i+(r^e&(n^r))+s[1]+3905402710&4294967295,i=e+(o<<12&4294967295|o>>>20),o=r+(n^i&(e^n))+s[2]+606105819&4294967295,r=i+(o<<17&4294967295|o>>>15),o=n+(e^r&(i^e))+s[3]+3250441966&4294967295,n=r+(o<<22&4294967295|o>>>10),o=e+(i^n&(r^i))+s[4]+4118548399&4294967295,e=n+(o<<7&4294967295|o>>>25),o=i+(r^e&(n^r))+s[5]+1200080426&4294967295,i=e+(o<<12&4294967295|o>>>20),o=r+(n^i&(e^n))+s[6]+2821735955&4294967295,r=i+(o<<17&4294967295|o>>>15),o=n+(e^r&(i^e))+s[7]+4249261313&4294967295,n=r+(o<<22&4294967295|o>>>10),o=e+(i^n&(r^i))+s[8]+1770035416&4294967295,e=n+(o<<7&4294967295|o>>>25),o=i+(r^e&(n^r))+s[9]+2336552879&4294967295,i=e+(o<<12&4294967295|o>>>20),o=r+(n^i&(e^n))+s[10]+4294925233&4294967295,r=i+(o<<17&4294967295|o>>>15),o=n+(e^r&(i^e))+s[11]+2304563134&4294967295,n=r+(o<<22&4294967295|o>>>10),o=e+(i^n&(r^i))+s[12]+1804603682&4294967295,e=n+(o<<7&4294967295|o>>>25),o=i+(r^e&(n^r))+s[13]+4254626195&4294967295,i=e+(o<<12&4294967295|o>>>20),o=r+(n^i&(e^n))+s[14]+2792965006&4294967295,r=i+(o<<17&4294967295|o>>>15),o=n+(e^r&(i^e))+s[15]+1236535329&4294967295,n=r+(o<<22&4294967295|o>>>10),o=e+(r^i&(n^r))+s[1]+4129170786&4294967295,e=n+(o<<5&4294967295|o>>>27),o=i+(n^r&(e^n))+s[6]+3225465664&4294967295,i=e+(o<<9&4294967295|o>>>23),o=r+(e^n&(i^e))+s[11]+643717713&4294967295,r=i+(o<<14&4294967295|o>>>18),o=n+(i^e&(r^i))+s[0]+3921069994&4294967295,n=r+(o<<20&4294967295|o>>>12),o=e+(r^i&(n^r))+s[5]+3593408605&4294967295,e=n+(o<<5&4294967295|o>>>27),o=i+(n^r&(e^n))+s[10]+38016083&4294967295,i=e+(o<<9&4294967295|o>>>23),o=r+(e^n&(i^e))+s[15]+3634488961&4294967295,r=i+(o<<14&4294967295|o>>>18),o=n+(i^e&(r^i))+s[4]+3889429448&4294967295,n=r+(o<<20&4294967295|o>>>12),o=e+(r^i&(n^r))+s[9]+568446438&4294967295,e=n+(o<<5&4294967295|o>>>27),o=i+(n^r&(e^n))+s[14]+3275163606&4294967295,i=e+(o<<9&4294967295|o>>>23),o=r+(e^n&(i^e))+s[3]+4107603335&4294967295,r=i+(o<<14&4294967295|o>>>18),o=n+(i^e&(r^i))+s[8]+1163531501&4294967295,n=r+(o<<20&4294967295|o>>>12),o=e+(r^i&(n^r))+s[13]+2850285829&4294967295,e=n+(o<<5&4294967295|o>>>27),o=i+(n^r&(e^n))+s[2]+4243563512&4294967295,i=e+(o<<9&4294967295|o>>>23),o=r+(e^n&(i^e))+s[7]+1735328473&4294967295,r=i+(o<<14&4294967295|o>>>18),o=n+(i^e&(r^i))+s[12]+2368359562&4294967295,n=r+(o<<20&4294967295|o>>>12),o=e+(n^r^i)+s[5]+4294588738&4294967295,e=n+(o<<4&4294967295|o>>>28),o=i+(e^n^r)+s[8]+2272392833&4294967295,i=e+(o<<11&4294967295|o>>>21),o=r+(i^e^n)+s[11]+1839030562&4294967295,r=i+(o<<16&4294967295|o>>>16),o=n+(r^i^e)+s[14]+4259657740&4294967295,n=r+(o<<23&4294967295|o>>>9),o=e+(n^r^i)+s[1]+2763975236&4294967295,e=n+(o<<4&4294967295|o>>>28),o=i+(e^n^r)+s[4]+1272893353&4294967295,i=e+(o<<11&4294967295|o>>>21),o=r+(i^e^n)+s[7]+4139469664&4294967295,r=i+(o<<16&4294967295|o>>>16),o=n+(r^i^e)+s[10]+3200236656&4294967295,n=r+(o<<23&4294967295|o>>>9),o=e+(n^r^i)+s[13]+681279174&4294967295,e=n+(o<<4&4294967295|o>>>28),o=i+(e^n^r)+s[0]+3936430074&4294967295,i=e+(o<<11&4294967295|o>>>21),o=r+(i^e^n)+s[3]+3572445317&4294967295,r=i+(o<<16&4294967295|o>>>16),o=n+(r^i^e)+s[6]+76029189&4294967295,n=r+(o<<23&4294967295|o>>>9),o=e+(n^r^i)+s[9]+3654602809&4294967295,e=n+(o<<4&4294967295|o>>>28),o=i+(e^n^r)+s[12]+3873151461&4294967295,i=e+(o<<11&4294967295|o>>>21),o=r+(i^e^n)+s[15]+530742520&4294967295,r=i+(o<<16&4294967295|o>>>16),o=n+(r^i^e)+s[2]+3299628645&4294967295,n=r+(o<<23&4294967295|o>>>9),o=e+(r^(n|~i))+s[0]+4096336452&4294967295,e=n+(o<<6&4294967295|o>>>26),o=i+(n^(e|~r))+s[7]+1126891415&4294967295,i=e+(o<<10&4294967295|o>>>22),o=r+(e^(i|~n))+s[14]+2878612391&4294967295,r=i+(o<<15&4294967295|o>>>17),o=n+(i^(r|~e))+s[5]+4237533241&4294967295,n=r+(o<<21&4294967295|o>>>11),o=e+(r^(n|~i))+s[12]+1700485571&4294967295,e=n+(o<<6&4294967295|o>>>26),o=i+(n^(e|~r))+s[3]+2399980690&4294967295,i=e+(o<<10&4294967295|o>>>22),o=r+(e^(i|~n))+s[10]+4293915773&4294967295,r=i+(o<<15&4294967295|o>>>17),o=n+(i^(r|~e))+s[1]+2240044497&4294967295,n=r+(o<<21&4294967295|o>>>11),o=e+(r^(n|~i))+s[8]+1873313359&4294967295,e=n+(o<<6&4294967295|o>>>26),o=i+(n^(e|~r))+s[15]+4264355552&4294967295,i=e+(o<<10&4294967295|o>>>22),o=r+(e^(i|~n))+s[6]+2734768916&4294967295,r=i+(o<<15&4294967295|o>>>17),o=n+(i^(r|~e))+s[13]+1309151649&4294967295,n=r+(o<<21&4294967295|o>>>11),o=e+(r^(n|~i))+s[4]+4149444226&4294967295,e=n+(o<<6&4294967295|o>>>26),o=i+(n^(e|~r))+s[11]+3174756917&4294967295,i=e+(o<<10&4294967295|o>>>22),o=r+(e^(i|~n))+s[2]+718787259&4294967295,r=i+(o<<15&4294967295|o>>>17),o=n+(i^(r|~e))+s[9]+3951481745&4294967295,t.g[0]=t.g[0]+e&4294967295,t.g[1]=t.g[1]+(r+(o<<21&4294967295|o>>>11))&4294967295,t.g[2]=t.g[2]+r&4294967295,t.g[3]=t.g[3]+i&4294967295}Kt.prototype.j=function(t,e){e===void 0&&(e=t.length);for(var n=e-this.blockSize,s=this.m,r=this.h,i=0;i<e;){if(r==0)for(;i<=n;)vc(this,t,i),i+=this.blockSize;if(typeof t=="string"){for(;i<e;)if(s[r++]=t.charCodeAt(i++),r==this.blockSize){vc(this,s),r=0;break}}else for(;i<e;)if(s[r++]=t[i++],r==this.blockSize){vc(this,s),r=0;break}}this.h=r,this.i+=e};Kt.prototype.l=function(){var t=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);t[0]=128;for(var e=1;e<t.length-8;++e)t[e]=0;var n=8*this.i;for(e=t.length-8;e<t.length;++e)t[e]=n&255,n/=256;for(this.j(t),t=Array(16),e=n=0;4>e;++e)for(var s=0;32>s;s+=8)t[n++]=this.g[e]>>>s&255;return t};function Ie(t,e){this.h=e;for(var n=[],s=!0,r=t.length-1;0<=r;r--){var i=t[r]|0;s&&i==e||(n[r]=i,s=!1)}this.g=n}var yb={};function vu(t){return-128<=t&&128>t?rm(yb,t,function(e){return new Ie([e|0],0>e?-1:0)}):new Ie([t|0],0>t?-1:0)}function tn(t){if(isNaN(t)||!isFinite(t))return Bs;if(0>t)return Ze(tn(-t));for(var e=[],n=1,s=0;t>=n;s++)e[s]=t/n|0,n*=al;return new Ie(e,0)}function og(t,e){if(t.length==0)throw Error("number format error: empty string");if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(t.charAt(0)=="-")return Ze(og(t.substring(1),e));if(0<=t.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=tn(Math.pow(e,8)),s=Bs,r=0;r<t.length;r+=8){var i=Math.min(8,t.length-r),o=parseInt(t.substring(r,r+i),e);8>i?(i=tn(Math.pow(e,i)),s=s.R(i).add(tn(o))):(s=s.R(n),s=s.add(tn(o)))}return s}var al=4294967296,Bs=vu(0),cl=vu(1),Rd=vu(16777216);F=Ie.prototype;F.ea=function(){if(Nt(this))return-Ze(this).ea();for(var t=0,e=1,n=0;n<this.g.length;n++){var s=this.D(n);t+=(0<=s?s:al+s)*e,e*=al}return t};F.toString=function(t){if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(fn(this))return"0";if(Nt(this))return"-"+Ze(this).toString(t);for(var e=tn(Math.pow(t,6)),n=this,s="";;){var r=Oo(n,e).g;n=Po(n,r.R(e));var i=((0<n.g.length?n.g[0]:n.h)>>>0).toString(t);if(n=r,fn(n))return i+s;for(;6>i.length;)i="0"+i;s=i+s}};F.D=function(t){return 0>t?0:t<this.g.length?this.g[t]:this.h};function fn(t){if(t.h!=0)return!1;for(var e=0;e<t.g.length;e++)if(t.g[e]!=0)return!1;return!0}function Nt(t){return t.h==-1}F.X=function(t){return t=Po(this,t),Nt(t)?-1:fn(t)?0:1};function Ze(t){for(var e=t.g.length,n=[],s=0;s<e;s++)n[s]=~t.g[s];return new Ie(n,~t.h).add(cl)}F.abs=function(){return Nt(this)?Ze(this):this};F.add=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],s=0,r=0;r<=e;r++){var i=s+(this.D(r)&65535)+(t.D(r)&65535),o=(i>>>16)+(this.D(r)>>>16)+(t.D(r)>>>16);s=o>>>16,i&=65535,o&=65535,n[r]=o<<16|i}return new Ie(n,n[n.length-1]&-2147483648?-1:0)};function Po(t,e){return t.add(Ze(e))}F.R=function(t){if(fn(this)||fn(t))return Bs;if(Nt(this))return Nt(t)?Ze(this).R(Ze(t)):Ze(Ze(this).R(t));if(Nt(t))return Ze(this.R(Ze(t)));if(0>this.X(Rd)&&0>t.X(Rd))return tn(this.ea()*t.ea());for(var e=this.g.length+t.g.length,n=[],s=0;s<2*e;s++)n[s]=0;for(s=0;s<this.g.length;s++)for(var r=0;r<t.g.length;r++){var i=this.D(s)>>>16,o=this.D(s)&65535,a=t.D(r)>>>16,c=t.D(r)&65535;n[2*s+2*r]+=o*c,Yi(n,2*s+2*r),n[2*s+2*r+1]+=i*c,Yi(n,2*s+2*r+1),n[2*s+2*r+1]+=o*a,Yi(n,2*s+2*r+1),n[2*s+2*r+2]+=i*a,Yi(n,2*s+2*r+2)}for(s=0;s<e;s++)n[s]=n[2*s+1]<<16|n[2*s];for(s=e;s<2*e;s++)n[s]=0;return new Ie(n,0)};function Yi(t,e){for(;(t[e]&65535)!=t[e];)t[e+1]+=t[e]>>>16,t[e]&=65535,e++}function xr(t,e){this.g=t,this.h=e}function Oo(t,e){if(fn(e))throw Error("division by zero");if(fn(t))return new xr(Bs,Bs);if(Nt(t))return e=Oo(Ze(t),e),new xr(Ze(e.g),Ze(e.h));if(Nt(e))return e=Oo(t,Ze(e)),new xr(Ze(e.g),e.h);if(30<t.g.length){if(Nt(t)||Nt(e))throw Error("slowDivide_ only works with positive integers.");for(var n=cl,s=e;0>=s.X(t);)n=Nd(n),s=Nd(s);var r=As(n,1),i=As(s,1);for(s=As(s,2),n=As(n,2);!fn(s);){var o=i.add(s);0>=o.X(t)&&(r=r.add(n),i=o),s=As(s,1),n=As(n,1)}return e=Po(t,r.R(e)),new xr(r,e)}for(r=Bs;0<=t.X(e);){for(n=Math.max(1,Math.floor(t.ea()/e.ea())),s=Math.ceil(Math.log(n)/Math.LN2),s=48>=s?1:Math.pow(2,s-48),i=tn(n),o=i.R(e);Nt(o)||0<o.X(t);)n-=s,i=tn(n),o=i.R(e);fn(i)&&(i=cl),r=r.add(i),t=Po(t,o)}return new xr(r,t)}F.gb=function(t){return Oo(this,t).h};F.and=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],s=0;s<e;s++)n[s]=this.D(s)&t.D(s);return new Ie(n,this.h&t.h)};F.or=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],s=0;s<e;s++)n[s]=this.D(s)|t.D(s);return new Ie(n,this.h|t.h)};F.xor=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],s=0;s<e;s++)n[s]=this.D(s)^t.D(s);return new Ie(n,this.h^t.h)};function Nd(t){for(var e=t.g.length+1,n=[],s=0;s<e;s++)n[s]=t.D(s)<<1|t.D(s-1)>>>31;return new Ie(n,t.h)}function As(t,e){var n=e>>5;e%=32;for(var s=t.g.length-n,r=[],i=0;i<s;i++)r[i]=0<e?t.D(i+n)>>>e|t.D(i+n+1)<<32-e:t.D(i+n);return new Ie(r,t.h)}Do.prototype.createWebChannel=Do.prototype.g;St.prototype.send=St.prototype.u;St.prototype.open=St.prototype.m;St.prototype.close=St.prototype.close;ya.NO_ERROR=0;ya.TIMEOUT=8;ya.HTTP_ERROR=6;Tm.COMPLETE="complete";Cm.EventType=Ei;Ei.OPEN="a";Ei.CLOSE="b";Ei.ERROR="c";Ei.MESSAGE="d";Ye.prototype.listen=Ye.prototype.O;$e.prototype.listenOnce=$e.prototype.P;$e.prototype.getLastError=$e.prototype.Sa;$e.prototype.getLastErrorCode=$e.prototype.Ia;$e.prototype.getStatus=$e.prototype.da;$e.prototype.getResponseJson=$e.prototype.Wa;$e.prototype.getResponseText=$e.prototype.ja;$e.prototype.send=$e.prototype.ha;$e.prototype.setWithCredentials=$e.prototype.Oa;Kt.prototype.digest=Kt.prototype.l;Kt.prototype.reset=Kt.prototype.reset;Kt.prototype.update=Kt.prototype.j;Ie.prototype.add=Ie.prototype.add;Ie.prototype.multiply=Ie.prototype.R;Ie.prototype.modulo=Ie.prototype.gb;Ie.prototype.compare=Ie.prototype.X;Ie.prototype.toNumber=Ie.prototype.ea;Ie.prototype.toString=Ie.prototype.toString;Ie.prototype.getBits=Ie.prototype.D;Ie.fromNumber=tn;Ie.fromString=og;var vb=function(){return new Do},_b=function(){return ga()},_c=ya,wb=Tm,Eb=Es,Dd={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},Ib=Ti,Xi=Cm,bb=$e,Tb=Kt,js=Ie;const Pd="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}nt.UNAUTHENTICATED=new nt(null),nt.GOOGLE_CREDENTIALS=new nt("google-credentials-uid"),nt.FIRST_PARTY=new nt("first-party-uid"),nt.MOCK_USER=new nt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let mr="9.21.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gs=new Gl("@firebase/firestore");function Od(){return gs.logLevel}function j(t,...e){if(gs.logLevel<=ye.DEBUG){const n=e.map(_u);gs.debug(`Firestore (${mr}): ${t}`,...n)}}function _n(t,...e){if(gs.logLevel<=ye.ERROR){const n=e.map(_u);gs.error(`Firestore (${mr}): ${t}`,...n)}}function tr(t,...e){if(gs.logLevel<=ye.WARN){const n=e.map(_u);gs.warn(`Firestore (${mr}): ${t}`,...n)}}function _u(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function J(t="Unexpected state"){const e=`FIRESTORE (${mr}) INTERNAL ASSERTION FAILED: `+t;throw _n(e),new Error(e)}function ke(t,e){t||J()}function se(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const I={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class V extends Tn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gn{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ag{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Cb{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(nt.UNAUTHENTICATED))}shutdown(){}}class Sb{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class xb{constructor(e){this.t=e,this.currentUser=nt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let s=this.i;const r=c=>this.i!==s?(s=this.i,n(c)):Promise.resolve();let i=new gn;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new gn,e.enqueueRetryable(()=>r(this.currentUser))};const o=()=>{const c=i;e.enqueueRetryable(async()=>{await c.promise,await r(this.currentUser)})},a=c=>{j("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(c=>a(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?a(c):(j("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new gn)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(s=>this.i!==e?(j("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(ke(typeof s.accessToken=="string"),new ag(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return ke(e===null||typeof e=="string"),new nt(e)}}class Ab{constructor(e,n,s){this.h=e,this.l=n,this.m=s,this.type="FirstParty",this.user=nt.FIRST_PARTY,this.g=new Map}p(){return this.m?this.m():null}get headers(){this.g.set("X-Goog-AuthUser",this.h);const e=this.p();return e&&this.g.set("Authorization",e),this.l&&this.g.set("X-Goog-Iam-Authorization-Token",this.l),this.g}}class kb{constructor(e,n,s){this.h=e,this.l=n,this.m=s}getToken(){return Promise.resolve(new Ab(this.h,this.l,this.m))}start(e,n){e.enqueueRetryable(()=>n(nt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Rb{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Nb{constructor(e){this.I=e,this.forceRefresh=!1,this.appCheck=null,this.T=null}start(e,n){const s=i=>{i.error!=null&&j("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.T;return this.T=i.token,j("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>s(i))};const r=i=>{j("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.appCheck.addTokenListener(this.o)};this.I.onInit(i=>r(i)),setTimeout(()=>{if(!this.appCheck){const i=this.I.getImmediate({optional:!0});i?r(i):j("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(ke(typeof n.token=="string"),this.T=n.token,new Rb(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Db(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let s=0;s<t;s++)n[s]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cg{static A(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let s="";for(;s.length<20;){const r=Db(40);for(let i=0;i<r.length;++i)s.length<20&&r[i]<n&&(s+=e.charAt(r[i]%e.length))}return s}}function _e(t,e){return t<e?-1:t>e?1:0}function nr(t,e,n){return t.length===e.length&&t.every((s,r)=>n(s,e[r]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ke{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new V(I.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new V(I.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new V(I.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new V(I.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Ke.fromMillis(Date.now())}static fromDate(e){return Ke.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),s=Math.floor(1e6*(e-1e3*n));return new Ke(n,s)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?_e(this.nanoseconds,e.nanoseconds):_e(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class te{constructor(e){this.timestamp=e}static fromTimestamp(e){return new te(e)}static min(){return new te(new Ke(0,0))}static max(){return new te(new Ke(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ii{constructor(e,n,s){n===void 0?n=0:n>e.length&&J(),s===void 0?s=e.length-n:s>e.length-n&&J(),this.segments=e,this.offset=n,this.len=s}get length(){return this.len}isEqual(e){return ii.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof ii?e.forEach(s=>{n.push(s)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,s=this.limit();n<s;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const s=Math.min(e.length,n.length);for(let r=0;r<s;r++){const i=e.get(r),o=n.get(r);if(i<o)return-1;if(i>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class Ae extends ii{construct(e,n,s){return new Ae(e,n,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const s of e){if(s.indexOf("//")>=0)throw new V(I.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);n.push(...s.split("/").filter(r=>r.length>0))}return new Ae(n)}static emptyPath(){return new Ae([])}}const Pb=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class it extends ii{construct(e,n,s){return new it(e,n,s)}static isValidIdentifier(e){return Pb.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),it.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new it(["__name__"])}static fromServerFormat(e){const n=[];let s="",r=0;const i=()=>{if(s.length===0)throw new V(I.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(s),s=""};let o=!1;for(;r<e.length;){const a=e[r];if(a==="\\"){if(r+1===e.length)throw new V(I.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[r+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new V(I.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=c,r+=2}else a==="`"?(o=!o,r++):a!=="."||o?(s+=a,r++):(i(),r++)}if(i(),o)throw new V(I.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new it(n)}static emptyPath(){return new it([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class z{constructor(e){this.path=e}static fromPath(e){return new z(Ae.fromString(e))}static fromName(e){return new z(Ae.fromString(e).popFirst(5))}static empty(){return new z(Ae.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Ae.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Ae.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new z(new Ae(e.slice()))}}function Ob(t,e){const n=t.toTimestamp().seconds,s=t.toTimestamp().nanoseconds+1,r=te.fromTimestamp(s===1e9?new Ke(n+1,0):new Ke(n,s));return new zn(r,z.empty(),e)}function Mb(t){return new zn(t.readTime,t.key,-1)}class zn{constructor(e,n,s){this.readTime=e,this.documentKey=n,this.largestBatchId=s}static min(){return new zn(te.min(),z.empty(),-1)}static max(){return new zn(te.max(),z.empty(),-1)}}function Lb(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=z.comparator(t.documentKey,e.documentKey),n!==0?n:_e(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fb="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class $b{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xi(t){if(t.code!==I.FAILED_PRECONDITION||t.message!==Fb)throw t;j("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class A{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&J(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new A((s,r)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(s,r)},this.catchCallback=i=>{this.wrapFailure(n,i).next(s,r)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof A?n:A.resolve(n)}catch(n){return A.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):A.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):A.reject(n)}static resolve(e){return new A((n,s)=>{n(e)})}static reject(e){return new A((n,s)=>{s(e)})}static waitFor(e){return new A((n,s)=>{let r=0,i=0,o=!1;e.forEach(a=>{++r,a.next(()=>{++i,o&&i===r&&n()},c=>s(c))}),o=!0,i===r&&n()})}static or(e){let n=A.resolve(!1);for(const s of e)n=n.next(r=>r?A.resolve(r):s());return n}static forEach(e,n){const s=[];return e.forEach((r,i)=>{s.push(n.call(this,r,i))}),this.waitFor(s)}static mapArray(e,n){return new A((s,r)=>{const i=e.length,o=new Array(i);let a=0;for(let c=0;c<i;c++){const l=c;n(e[l]).next(u=>{o[l]=u,++a,a===i&&s(o)},u=>r(u))}})}static doWhile(e,n){return new A((s,r)=>{const i=()=>{e()===!0?n().next(()=>{i()},r):s()};i()})}}function Ai(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wu{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=s=>this.ot(s),this.ut=s=>n.writeSequenceNumber(s))}ot(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ut&&this.ut(e),e}}wu.ct=-1;function Ca(t){return t==null}function Mo(t){return t===0&&1/t==-1/0}function Ub(t){return typeof t=="number"&&Number.isInteger(t)&&!Mo(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Md(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Is(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function lg(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Me{constructor(e,n){this.comparator=e,this.root=n||Je.EMPTY}insert(e,n){return new Me(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Je.BLACK,null,null))}remove(e){return new Me(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Je.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const s=this.comparator(e,n.key);if(s===0)return n.value;s<0?n=n.left:s>0&&(n=n.right)}return null}indexOf(e){let n=0,s=this.root;for(;!s.isEmpty();){const r=this.comparator(e,s.key);if(r===0)return n+s.left.size;r<0?s=s.left:(n+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,s)=>(e(n,s),!1))}toString(){const e=[];return this.inorderTraversal((n,s)=>(e.push(`${n}:${s}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Ji(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Ji(this.root,e,this.comparator,!1)}getReverseIterator(){return new Ji(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Ji(this.root,e,this.comparator,!0)}}class Ji{constructor(e,n,s,r){this.isReverse=r,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?s(e.key,n):1,n&&r&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Je{constructor(e,n,s,r,i){this.key=e,this.value=n,this.color=s??Je.RED,this.left=r??Je.EMPTY,this.right=i??Je.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,s,r,i){return new Je(e??this.key,n??this.value,s??this.color,r??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let r=this;const i=s(e,r.key);return r=i<0?r.copy(null,null,null,r.left.insert(e,n,s),null):i===0?r.copy(null,n,null,null,null):r.copy(null,null,null,null,r.right.insert(e,n,s)),r.fixUp()}removeMin(){if(this.left.isEmpty())return Je.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let s,r=this;if(n(e,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),n(e,r.key)===0){if(r.right.isEmpty())return Je.EMPTY;s=r.right.min(),r=r.copy(s.key,s.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Je.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Je.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw J();const e=this.left.check();if(e!==this.right.check())throw J();return e+(this.isRed()?0:1)}}Je.EMPTY=null,Je.RED=!0,Je.BLACK=!1;Je.EMPTY=new class{constructor(){this.size=0}get key(){throw J()}get value(){throw J()}get color(){throw J()}get left(){throw J()}get right(){throw J()}copy(t,e,n,s,r){return this}insert(t,e,n){return new Je(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ut{constructor(e){this.comparator=e,this.data=new Me(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,s)=>(e(n),!1))}forEachInRange(e,n){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const r=s.getNext();if(this.comparator(r.key,e[1])>=0)return;n(r.key)}}forEachWhile(e,n){let s;for(s=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Ld(this.data.getIterator())}getIteratorFrom(e){return new Ld(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(s=>{n=n.add(s)}),n}isEqual(e){if(!(e instanceof ut)||this.size!==e.size)return!1;const n=this.data.getIterator(),s=e.data.getIterator();for(;n.hasNext();){const r=n.getNext().key,i=s.getNext().key;if(this.comparator(r,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new ut(this.comparator);return n.data=e,n}}class Ld{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tt{constructor(e){this.fields=e,e.sort(it.comparator)}static empty(){return new Tt([])}unionWith(e){let n=new ut(it.comparator);for(const s of this.fields)n=n.add(s);for(const s of e)n=n.add(s);return new Tt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return nr(this.fields,e.fields,(n,s)=>n.isEqual(s))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ug extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pt{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(s){try{return atob(s)}catch(r){throw typeof DOMException<"u"&&r instanceof DOMException?new ug("Invalid base64 string: "+r):r}}(e);return new pt(n)}static fromUint8Array(e){const n=function(s){let r="";for(let i=0;i<s.length;++i)r+=String.fromCharCode(s[i]);return r}(e);return new pt(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let s=0;s<e.length;s++)n[s]=e.charCodeAt(s);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return _e(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}pt.EMPTY_BYTE_STRING=new pt("");const Vb=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Kn(t){if(ke(!!t),typeof t=="string"){let e=0;const n=Vb.exec(t);if(ke(!!n),n[1]){let r=n[1];r=(r+"000000000").substr(0,9),e=Number(r)}const s=new Date(t);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:He(t.seconds),nanos:He(t.nanos)}}function He(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function ys(t){return typeof t=="string"?pt.fromBase64String(t):pt.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Eu(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Iu(t){const e=t.mapValue.fields.__previous_value__;return Eu(e)?Iu(e):e}function oi(t){const e=Kn(t.mapValue.fields.__local_write_time__.timestampValue);return new Ke(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bb{constructor(e,n,s,r,i,o,a,c){this.databaseId=e,this.appId=n,this.persistenceKey=s,this.host=r,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=c}}class ai{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new ai("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof ai&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zi={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function vs(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Eu(t)?4:jb(t)?9007199254740991:10:J()}function cn(t,e){if(t===e)return!0;const n=vs(t);if(n!==vs(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return oi(t).isEqual(oi(e));case 3:return function(s,r){if(typeof s.timestampValue=="string"&&typeof r.timestampValue=="string"&&s.timestampValue.length===r.timestampValue.length)return s.timestampValue===r.timestampValue;const i=Kn(s.timestampValue),o=Kn(r.timestampValue);return i.seconds===o.seconds&&i.nanos===o.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,r){return ys(s.bytesValue).isEqual(ys(r.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,r){return He(s.geoPointValue.latitude)===He(r.geoPointValue.latitude)&&He(s.geoPointValue.longitude)===He(r.geoPointValue.longitude)}(t,e);case 2:return function(s,r){if("integerValue"in s&&"integerValue"in r)return He(s.integerValue)===He(r.integerValue);if("doubleValue"in s&&"doubleValue"in r){const i=He(s.doubleValue),o=He(r.doubleValue);return i===o?Mo(i)===Mo(o):isNaN(i)&&isNaN(o)}return!1}(t,e);case 9:return nr(t.arrayValue.values||[],e.arrayValue.values||[],cn);case 10:return function(s,r){const i=s.mapValue.fields||{},o=r.mapValue.fields||{};if(Md(i)!==Md(o))return!1;for(const a in i)if(i.hasOwnProperty(a)&&(o[a]===void 0||!cn(i[a],o[a])))return!1;return!0}(t,e);default:return J()}}function ci(t,e){return(t.values||[]).find(n=>cn(n,e))!==void 0}function sr(t,e){if(t===e)return 0;const n=vs(t),s=vs(e);if(n!==s)return _e(n,s);switch(n){case 0:case 9007199254740991:return 0;case 1:return _e(t.booleanValue,e.booleanValue);case 2:return function(r,i){const o=He(r.integerValue||r.doubleValue),a=He(i.integerValue||i.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(t,e);case 3:return Fd(t.timestampValue,e.timestampValue);case 4:return Fd(oi(t),oi(e));case 5:return _e(t.stringValue,e.stringValue);case 6:return function(r,i){const o=ys(r),a=ys(i);return o.compareTo(a)}(t.bytesValue,e.bytesValue);case 7:return function(r,i){const o=r.split("/"),a=i.split("/");for(let c=0;c<o.length&&c<a.length;c++){const l=_e(o[c],a[c]);if(l!==0)return l}return _e(o.length,a.length)}(t.referenceValue,e.referenceValue);case 8:return function(r,i){const o=_e(He(r.latitude),He(i.latitude));return o!==0?o:_e(He(r.longitude),He(i.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(r,i){const o=r.values||[],a=i.values||[];for(let c=0;c<o.length&&c<a.length;++c){const l=sr(o[c],a[c]);if(l)return l}return _e(o.length,a.length)}(t.arrayValue,e.arrayValue);case 10:return function(r,i){if(r===Zi.mapValue&&i===Zi.mapValue)return 0;if(r===Zi.mapValue)return 1;if(i===Zi.mapValue)return-1;const o=r.fields||{},a=Object.keys(o),c=i.fields||{},l=Object.keys(c);a.sort(),l.sort();for(let u=0;u<a.length&&u<l.length;++u){const h=_e(a[u],l[u]);if(h!==0)return h;const d=sr(o[a[u]],c[l[u]]);if(d!==0)return d}return _e(a.length,l.length)}(t.mapValue,e.mapValue);default:throw J()}}function Fd(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return _e(t,e);const n=Kn(t),s=Kn(e),r=_e(n.seconds,s.seconds);return r!==0?r:_e(n.nanos,s.nanos)}function rr(t){return ll(t)}function ll(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(s){const r=Kn(s);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?ys(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,z.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(s){let r="[",i=!0;for(const o of s.values||[])i?i=!1:r+=",",r+=ll(o);return r+"]"}(t.arrayValue):"mapValue"in t?function(s){const r=Object.keys(s.fields||{}).sort();let i="{",o=!0;for(const a of r)o?o=!1:i+=",",i+=`${a}:${ll(s.fields[a])}`;return i+"}"}(t.mapValue):J();var e,n}function $d(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function ul(t){return!!t&&"integerValue"in t}function bu(t){return!!t&&"arrayValue"in t}function Ud(t){return!!t&&"nullValue"in t}function Vd(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function ao(t){return!!t&&"mapValue"in t}function jr(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Is(t.mapValue.fields,(n,s)=>e.mapValue.fields[n]=jr(s)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=jr(t.arrayValue.values[n]);return e}return Object.assign({},t)}function jb(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _t{constructor(e){this.value=e}static empty(){return new _t({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let s=0;s<e.length-1;++s)if(n=(n.mapValue.fields||{})[e.get(s)],!ao(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=jr(n)}setAll(e){let n=it.emptyPath(),s={},r=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const c=this.getFieldsMap(n);this.applyChanges(c,s,r),s={},r=[],n=a.popLast()}o?s[a.lastSegment()]=jr(o):r.push(a.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,s,r)}delete(e){const n=this.field(e.popLast());ao(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return cn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let s=0;s<e.length;++s){let r=n.mapValue.fields[e.get(s)];ao(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},n.mapValue.fields[e.get(s)]=r),n=r}return n.mapValue.fields}applyChanges(e,n,s){Is(n,(r,i)=>e[r]=i);for(const r of s)delete e[r]}clone(){return new _t(jr(this.value))}}function hg(t){const e=[];return Is(t.fields,(n,s)=>{const r=new it([n]);if(ao(s)){const i=hg(s.mapValue).fields;if(i.length===0)e.push(r);else for(const o of i)e.push(r.child(o))}else e.push(r)}),new Tt(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class st{constructor(e,n,s,r,i,o,a){this.key=e,this.documentType=n,this.version=s,this.readTime=r,this.createTime=i,this.data=o,this.documentState=a}static newInvalidDocument(e){return new st(e,0,te.min(),te.min(),te.min(),_t.empty(),0)}static newFoundDocument(e,n,s,r){return new st(e,1,n,te.min(),s,r,0)}static newNoDocument(e,n){return new st(e,2,n,te.min(),te.min(),_t.empty(),0)}static newUnknownDocument(e,n){return new st(e,3,n,te.min(),te.min(),_t.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(te.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=_t.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=_t.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=te.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof st&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new st(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lo{constructor(e,n){this.position=e,this.inclusive=n}}function Bd(t,e,n){let s=0;for(let r=0;r<t.position.length;r++){const i=e[r],o=t.position[r];if(i.field.isKeyField()?s=z.comparator(z.fromName(o.referenceValue),n.key):s=sr(o,n.data.field(i.field)),i.dir==="desc"&&(s*=-1),s!==0)break}return s}function jd(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!cn(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qs{constructor(e,n="asc"){this.field=e,this.dir=n}}function qb(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dg{}class ze extends dg{constructor(e,n,s){super(),this.field=e,this.op=n,this.value=s}static create(e,n,s){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,s):new zb(e,n,s):n==="array-contains"?new Gb(e,s):n==="in"?new Qb(e,s):n==="not-in"?new Yb(e,s):n==="array-contains-any"?new Xb(e,s):new ze(e,n,s)}static createKeyFieldInFilter(e,n,s){return n==="in"?new Kb(e,s):new Wb(e,s)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(sr(n,this.value)):n!==null&&vs(this.value)===vs(n)&&this.matchesComparison(sr(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return J()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class Wt extends dg{constructor(e,n){super(),this.filters=e,this.op=n,this.ht=null}static create(e,n){return new Wt(e,n)}matches(e){return fg(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ht!==null||(this.ht=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ht}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const e=this.lt(n=>n.isInequality());return e!==null?e.field:null}lt(e){for(const n of this.getFlattenedFilters())if(e(n))return n;return null}}function fg(t){return t.op==="and"}function pg(t){return Hb(t)&&fg(t)}function Hb(t){for(const e of t.filters)if(e instanceof Wt)return!1;return!0}function hl(t){if(t instanceof ze)return t.field.canonicalString()+t.op.toString()+rr(t.value);if(pg(t))return t.filters.map(e=>hl(e)).join(",");{const e=t.filters.map(n=>hl(n)).join(",");return`${t.op}(${e})`}}function mg(t,e){return t instanceof ze?function(n,s){return s instanceof ze&&n.op===s.op&&n.field.isEqual(s.field)&&cn(n.value,s.value)}(t,e):t instanceof Wt?function(n,s){return s instanceof Wt&&n.op===s.op&&n.filters.length===s.filters.length?n.filters.reduce((r,i,o)=>r&&mg(i,s.filters[o]),!0):!1}(t,e):void J()}function gg(t){return t instanceof ze?function(e){return`${e.field.canonicalString()} ${e.op} ${rr(e.value)}`}(t):t instanceof Wt?function(e){return e.op.toString()+" {"+e.getFilters().map(gg).join(" ,")+"}"}(t):"Filter"}class zb extends ze{constructor(e,n,s){super(e,n,s),this.key=z.fromName(s.referenceValue)}matches(e){const n=z.comparator(e.key,this.key);return this.matchesComparison(n)}}class Kb extends ze{constructor(e,n){super(e,"in",n),this.keys=yg("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class Wb extends ze{constructor(e,n){super(e,"not-in",n),this.keys=yg("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function yg(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(s=>z.fromName(s.referenceValue))}class Gb extends ze{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return bu(n)&&ci(n.arrayValue,this.value)}}class Qb extends ze{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&ci(this.value.arrayValue,n)}}class Yb extends ze{constructor(e,n){super(e,"not-in",n)}matches(e){if(ci(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!ci(this.value.arrayValue,n)}}class Xb extends ze{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!bu(n)||!n.arrayValue.values)&&n.arrayValue.values.some(s=>ci(this.value.arrayValue,s))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jb{constructor(e,n=null,s=[],r=[],i=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=s,this.filters=r,this.limit=i,this.startAt=o,this.endAt=a,this.ft=null}}function qd(t,e=null,n=[],s=[],r=null,i=null,o=null){return new Jb(t,e,n,s,r,i,o)}function Tu(t){const e=se(t);if(e.ft===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(s=>hl(s)).join(","),n+="|ob:",n+=e.orderBy.map(s=>function(r){return r.field.canonicalString()+r.dir}(s)).join(","),Ca(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(s=>rr(s)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(s=>rr(s)).join(",")),e.ft=n}return e.ft}function Cu(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!qb(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!mg(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!jd(t.startAt,e.startAt)&&jd(t.endAt,e.endAt)}function dl(t){return z.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gr{constructor(e,n=null,s=[],r=[],i=null,o="F",a=null,c=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=s,this.filters=r,this.limit=i,this.limitType=o,this.startAt=a,this.endAt=c,this.dt=null,this._t=null,this.startAt,this.endAt}}function Zb(t,e,n,s,r,i,o,a){return new gr(t,e,n,s,r,i,o,a)}function Sa(t){return new gr(t)}function Hd(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function Su(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function xa(t){for(const e of t.filters){const n=e.getFirstInequalityField();if(n!==null)return n}return null}function vg(t){return t.collectionGroup!==null}function Hs(t){const e=se(t);if(e.dt===null){e.dt=[];const n=xa(e),s=Su(e);if(n!==null&&s===null)n.isKeyField()||e.dt.push(new qs(n)),e.dt.push(new qs(it.keyField(),"asc"));else{let r=!1;for(const i of e.explicitOrderBy)e.dt.push(i),i.field.isKeyField()&&(r=!0);if(!r){const i=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.dt.push(new qs(it.keyField(),i))}}}return e.dt}function wn(t){const e=se(t);if(!e._t)if(e.limitType==="F")e._t=qd(e.path,e.collectionGroup,Hs(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const i of Hs(e)){const o=i.dir==="desc"?"asc":"desc";n.push(new qs(i.field,o))}const s=e.endAt?new Lo(e.endAt.position,e.endAt.inclusive):null,r=e.startAt?new Lo(e.startAt.position,e.startAt.inclusive):null;e._t=qd(e.path,e.collectionGroup,n,e.filters,e.limit,s,r)}return e._t}function fl(t,e){e.getFirstInequalityField(),xa(t);const n=t.filters.concat([e]);return new gr(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function Fo(t,e,n){return new gr(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Aa(t,e){return Cu(wn(t),wn(e))&&t.limitType===e.limitType}function _g(t){return`${Tu(wn(t))}|lt:${t.limitType}`}function pl(t){return`Query(target=${function(e){let n=e.path.canonicalString();return e.collectionGroup!==null&&(n+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(n+=`, filters: [${e.filters.map(s=>gg(s)).join(", ")}]`),Ca(e.limit)||(n+=", limit: "+e.limit),e.orderBy.length>0&&(n+=`, orderBy: [${e.orderBy.map(s=>function(r){return`${r.field.canonicalString()} (${r.dir})`}(s)).join(", ")}]`),e.startAt&&(n+=", startAt: ",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(s=>rr(s)).join(",")),e.endAt&&(n+=", endAt: ",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(s=>rr(s)).join(",")),`Target(${n})`}(wn(t))}; limitType=${t.limitType})`}function ka(t,e){return e.isFoundDocument()&&function(n,s){const r=s.key.path;return n.collectionGroup!==null?s.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(r):z.isDocumentKey(n.path)?n.path.isEqual(r):n.path.isImmediateParentOf(r)}(t,e)&&function(n,s){for(const r of Hs(n))if(!r.field.isKeyField()&&s.data.field(r.field)===null)return!1;return!0}(t,e)&&function(n,s){for(const r of n.filters)if(!r.matches(s))return!1;return!0}(t,e)&&function(n,s){return!(n.startAt&&!function(r,i,o){const a=Bd(r,i,o);return r.inclusive?a<=0:a<0}(n.startAt,Hs(n),s)||n.endAt&&!function(r,i,o){const a=Bd(r,i,o);return r.inclusive?a>=0:a>0}(n.endAt,Hs(n),s))}(t,e)}function eT(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function wg(t){return(e,n)=>{let s=!1;for(const r of Hs(t)){const i=tT(r,e,n);if(i!==0)return i;s=s||r.field.isKeyField()}return 0}}function tT(t,e,n){const s=t.field.isKeyField()?z.comparator(e.key,n.key):function(r,i,o){const a=i.data.field(r),c=o.data.field(r);return a!==null&&c!==null?sr(a,c):J()}(t.field,e,n);switch(t.dir){case"asc":return s;case"desc":return-1*s;default:return J()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yr{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s!==void 0){for(const[r,i]of s)if(this.equalsFn(r,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const s=this.mapKeyFn(e),r=this.inner[s];if(r===void 0)return this.inner[s]=[[e,n]],void this.innerSize++;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return void(r[i]=[e,n]);r.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s===void 0)return!1;for(let r=0;r<s.length;r++)if(this.equalsFn(s[r][0],e))return s.length===1?delete this.inner[n]:s.splice(r,1),this.innerSize--,!0;return!1}forEach(e){Is(this.inner,(n,s)=>{for(const[r,i]of s)e(r,i)})}isEmpty(){return lg(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nT=new Me(z.comparator);function En(){return nT}const Eg=new Me(z.comparator);function Pr(...t){let e=Eg;for(const n of t)e=e.insert(n.key,n);return e}function Ig(t){let e=Eg;return t.forEach((n,s)=>e=e.insert(n,s.overlayedDocument)),e}function ls(){return qr()}function bg(){return qr()}function qr(){return new yr(t=>t.toString(),(t,e)=>t.isEqual(e))}const sT=new Me(z.comparator),rT=new ut(z.comparator);function ue(...t){let e=rT;for(const n of t)e=e.add(n);return e}const iT=new ut(_e);function oT(){return iT}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tg(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Mo(e)?"-0":e}}function Cg(t){return{integerValue:""+t}}function aT(t,e){return Ub(e)?Cg(e):Tg(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ra{constructor(){this._=void 0}}function cT(t,e,n){return t instanceof li?function(s,r){const i={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return r&&Eu(r)&&(r=Iu(r)),r&&(i.fields.__previous_value__=r),{mapValue:i}}(n,e):t instanceof ui?xg(t,e):t instanceof hi?Ag(t,e):function(s,r){const i=Sg(s,r),o=zd(i)+zd(s.wt);return ul(i)&&ul(s.wt)?Cg(o):Tg(s.serializer,o)}(t,e)}function lT(t,e,n){return t instanceof ui?xg(t,e):t instanceof hi?Ag(t,e):n}function Sg(t,e){return t instanceof $o?ul(n=e)||function(s){return!!s&&"doubleValue"in s}(n)?e:{integerValue:0}:null;var n}class li extends Ra{}class ui extends Ra{constructor(e){super(),this.elements=e}}function xg(t,e){const n=kg(e);for(const s of t.elements)n.some(r=>cn(r,s))||n.push(s);return{arrayValue:{values:n}}}class hi extends Ra{constructor(e){super(),this.elements=e}}function Ag(t,e){let n=kg(e);for(const s of t.elements)n=n.filter(r=>!cn(r,s));return{arrayValue:{values:n}}}class $o extends Ra{constructor(e,n){super(),this.serializer=e,this.wt=n}}function zd(t){return He(t.integerValue||t.doubleValue)}function kg(t){return bu(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uT{constructor(e,n){this.field=e,this.transform=n}}function hT(t,e){return t.field.isEqual(e.field)&&function(n,s){return n instanceof ui&&s instanceof ui||n instanceof hi&&s instanceof hi?nr(n.elements,s.elements,cn):n instanceof $o&&s instanceof $o?cn(n.wt,s.wt):n instanceof li&&s instanceof li}(t.transform,e.transform)}class dT{constructor(e,n){this.version=e,this.transformResults=n}}class qt{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new qt}static exists(e){return new qt(void 0,e)}static updateTime(e){return new qt(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function co(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Na{}function Rg(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new Dg(t.key,qt.none()):new ki(t.key,t.data,qt.none());{const n=t.data,s=_t.empty();let r=new ut(it.comparator);for(let i of e.fields)if(!r.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?s.delete(i):s.set(i,o),r=r.add(i)}return new Xn(t.key,s,new Tt(r.toArray()),qt.none())}}function fT(t,e,n){t instanceof ki?function(s,r,i){const o=s.value.clone(),a=Wd(s.fieldTransforms,r,i.transformResults);o.setAll(a),r.convertToFoundDocument(i.version,o).setHasCommittedMutations()}(t,e,n):t instanceof Xn?function(s,r,i){if(!co(s.precondition,r))return void r.convertToUnknownDocument(i.version);const o=Wd(s.fieldTransforms,r,i.transformResults),a=r.data;a.setAll(Ng(s)),a.setAll(o),r.convertToFoundDocument(i.version,a).setHasCommittedMutations()}(t,e,n):function(s,r,i){r.convertToNoDocument(i.version).setHasCommittedMutations()}(0,e,n)}function Hr(t,e,n,s){return t instanceof ki?function(r,i,o,a){if(!co(r.precondition,i))return o;const c=r.value.clone(),l=Gd(r.fieldTransforms,a,i);return c.setAll(l),i.convertToFoundDocument(i.version,c).setHasLocalMutations(),null}(t,e,n,s):t instanceof Xn?function(r,i,o,a){if(!co(r.precondition,i))return o;const c=Gd(r.fieldTransforms,a,i),l=i.data;return l.setAll(Ng(r)),l.setAll(c),i.convertToFoundDocument(i.version,l).setHasLocalMutations(),o===null?null:o.unionWith(r.fieldMask.fields).unionWith(r.fieldTransforms.map(u=>u.field))}(t,e,n,s):function(r,i,o){return co(r.precondition,i)?(i.convertToNoDocument(i.version).setHasLocalMutations(),null):o}(t,e,n)}function pT(t,e){let n=null;for(const s of t.fieldTransforms){const r=e.data.field(s.field),i=Sg(s.transform,r||null);i!=null&&(n===null&&(n=_t.empty()),n.set(s.field,i))}return n||null}function Kd(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(n,s){return n===void 0&&s===void 0||!(!n||!s)&&nr(n,s,(r,i)=>hT(r,i))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class ki extends Na{constructor(e,n,s,r=[]){super(),this.key=e,this.value=n,this.precondition=s,this.fieldTransforms=r,this.type=0}getFieldMask(){return null}}class Xn extends Na{constructor(e,n,s,r,i=[]){super(),this.key=e,this.data=n,this.fieldMask=s,this.precondition=r,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function Ng(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const s=t.data.field(n);e.set(n,s)}}),e}function Wd(t,e,n){const s=new Map;ke(t.length===n.length);for(let r=0;r<n.length;r++){const i=t[r],o=i.transform,a=e.data.field(i.field);s.set(i.field,lT(o,a,n[r]))}return s}function Gd(t,e,n){const s=new Map;for(const r of t){const i=r.transform,o=n.data.field(r.field);s.set(r.field,cT(i,o,e))}return s}class Dg extends Na{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class mT extends Na{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gT{constructor(e,n,s,r){this.batchId=e,this.localWriteTime=n,this.baseMutations=s,this.mutations=r}applyToRemoteDocument(e,n){const s=n.mutationResults;for(let r=0;r<this.mutations.length;r++){const i=this.mutations[r];i.key.isEqual(e.key)&&fT(i,e,s[r])}}applyToLocalView(e,n){for(const s of this.baseMutations)s.key.isEqual(e.key)&&(n=Hr(s,e,n,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(e.key)&&(n=Hr(s,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const s=bg();return this.mutations.forEach(r=>{const i=e.get(r.key),o=i.overlayedDocument;let a=this.applyToLocalView(o,i.mutatedFields);a=n.has(r.key)?null:a;const c=Rg(o,a);c!==null&&s.set(r.key,c),o.isValidDocument()||o.convertToNoDocument(te.min())}),s}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),ue())}isEqual(e){return this.batchId===e.batchId&&nr(this.mutations,e.mutations,(n,s)=>Kd(n,s))&&nr(this.baseMutations,e.baseMutations,(n,s)=>Kd(n,s))}}class xu{constructor(e,n,s,r){this.batch=e,this.commitVersion=n,this.mutationResults=s,this.docVersions=r}static from(e,n,s){ke(e.mutations.length===s.length);let r=sT;const i=e.mutations;for(let o=0;o<i.length;o++)r=r.insert(i[o].key,s[o].version);return new xu(e,n,s,r)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yT{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vT{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var qe,he;function _T(t){switch(t){default:return J();case I.CANCELLED:case I.UNKNOWN:case I.DEADLINE_EXCEEDED:case I.RESOURCE_EXHAUSTED:case I.INTERNAL:case I.UNAVAILABLE:case I.UNAUTHENTICATED:return!1;case I.INVALID_ARGUMENT:case I.NOT_FOUND:case I.ALREADY_EXISTS:case I.PERMISSION_DENIED:case I.FAILED_PRECONDITION:case I.ABORTED:case I.OUT_OF_RANGE:case I.UNIMPLEMENTED:case I.DATA_LOSS:return!0}}function Pg(t){if(t===void 0)return _n("GRPC error has no .code"),I.UNKNOWN;switch(t){case qe.OK:return I.OK;case qe.CANCELLED:return I.CANCELLED;case qe.UNKNOWN:return I.UNKNOWN;case qe.DEADLINE_EXCEEDED:return I.DEADLINE_EXCEEDED;case qe.RESOURCE_EXHAUSTED:return I.RESOURCE_EXHAUSTED;case qe.INTERNAL:return I.INTERNAL;case qe.UNAVAILABLE:return I.UNAVAILABLE;case qe.UNAUTHENTICATED:return I.UNAUTHENTICATED;case qe.INVALID_ARGUMENT:return I.INVALID_ARGUMENT;case qe.NOT_FOUND:return I.NOT_FOUND;case qe.ALREADY_EXISTS:return I.ALREADY_EXISTS;case qe.PERMISSION_DENIED:return I.PERMISSION_DENIED;case qe.FAILED_PRECONDITION:return I.FAILED_PRECONDITION;case qe.ABORTED:return I.ABORTED;case qe.OUT_OF_RANGE:return I.OUT_OF_RANGE;case qe.UNIMPLEMENTED:return I.UNIMPLEMENTED;case qe.DATA_LOSS:return I.DATA_LOSS;default:return J()}}(he=qe||(qe={}))[he.OK=0]="OK",he[he.CANCELLED=1]="CANCELLED",he[he.UNKNOWN=2]="UNKNOWN",he[he.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",he[he.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",he[he.NOT_FOUND=5]="NOT_FOUND",he[he.ALREADY_EXISTS=6]="ALREADY_EXISTS",he[he.PERMISSION_DENIED=7]="PERMISSION_DENIED",he[he.UNAUTHENTICATED=16]="UNAUTHENTICATED",he[he.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",he[he.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",he[he.ABORTED=10]="ABORTED",he[he.OUT_OF_RANGE=11]="OUT_OF_RANGE",he[he.UNIMPLEMENTED=12]="UNIMPLEMENTED",he[he.INTERNAL=13]="INTERNAL",he[he.UNAVAILABLE=14]="UNAVAILABLE",he[he.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Au{constructor(){this.onExistenceFilterMismatchCallbacks=new Map}static get instance(){return eo}static getOrCreateInstance(){return eo===null&&(eo=new Au),eo}onExistenceFilterMismatch(e){const n=Symbol();return this.onExistenceFilterMismatchCallbacks.set(n,e),()=>this.onExistenceFilterMismatchCallbacks.delete(n)}notifyOnExistenceFilterMismatch(e){this.onExistenceFilterMismatchCallbacks.forEach(n=>n(e))}}let eo=null;/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wT(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ET=new js([4294967295,4294967295],0);function Qd(t){const e=wT().encode(t),n=new Tb;return n.update(e),new Uint8Array(n.digest())}function Yd(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),s=e.getUint32(4,!0),r=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new js([n,s],0),new js([r,i],0)]}class ku{constructor(e,n,s){if(this.bitmap=e,this.padding=n,this.hashCount=s,n<0||n>=8)throw new Or(`Invalid padding: ${n}`);if(s<0)throw new Or(`Invalid hash count: ${s}`);if(e.length>0&&this.hashCount===0)throw new Or(`Invalid hash count: ${s}`);if(e.length===0&&n!==0)throw new Or(`Invalid padding when bitmap length is 0: ${n}`);this.yt=8*e.length-n,this.It=js.fromNumber(this.yt)}Tt(e,n,s){let r=e.add(n.multiply(js.fromNumber(s)));return r.compare(ET)===1&&(r=new js([r.getBits(0),r.getBits(1)],0)),r.modulo(this.It).toNumber()}Et(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}At(e){if(this.yt===0)return!1;const n=Qd(e),[s,r]=Yd(n);for(let i=0;i<this.hashCount;i++){const o=this.Tt(s,r,i);if(!this.Et(o))return!1}return!0}static create(e,n,s){const r=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new ku(i,r,n);return s.forEach(a=>o.insert(a)),o}insert(e){if(this.yt===0)return;const n=Qd(e),[s,r]=Yd(n);for(let i=0;i<this.hashCount;i++){const o=this.Tt(s,r,i);this.Rt(o)}}Rt(e){const n=Math.floor(e/8),s=e%8;this.bitmap[n]|=1<<s}}class Or extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Da{constructor(e,n,s,r,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=s,this.documentUpdates=r,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,s){const r=new Map;return r.set(e,Ri.createSynthesizedTargetChangeForCurrentChange(e,n,s)),new Da(te.min(),r,new Me(_e),En(),ue())}}class Ri{constructor(e,n,s,r,i){this.resumeToken=e,this.current=n,this.addedDocuments=s,this.modifiedDocuments=r,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,s){return new Ri(s,n,ue(),ue(),ue())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lo{constructor(e,n,s,r){this.vt=e,this.removedTargetIds=n,this.key=s,this.Pt=r}}class Og{constructor(e,n){this.targetId=e,this.bt=n}}class Mg{constructor(e,n,s=pt.EMPTY_BYTE_STRING,r=null){this.state=e,this.targetIds=n,this.resumeToken=s,this.cause=r}}class Xd{constructor(){this.Vt=0,this.St=Zd(),this.Dt=pt.EMPTY_BYTE_STRING,this.Ct=!1,this.xt=!0}get current(){return this.Ct}get resumeToken(){return this.Dt}get Nt(){return this.Vt!==0}get kt(){return this.xt}Mt(e){e.approximateByteSize()>0&&(this.xt=!0,this.Dt=e)}Ot(){let e=ue(),n=ue(),s=ue();return this.St.forEach((r,i)=>{switch(i){case 0:e=e.add(r);break;case 2:n=n.add(r);break;case 1:s=s.add(r);break;default:J()}}),new Ri(this.Dt,this.Ct,e,n,s)}$t(){this.xt=!1,this.St=Zd()}Ft(e,n){this.xt=!0,this.St=this.St.insert(e,n)}Bt(e){this.xt=!0,this.St=this.St.remove(e)}Lt(){this.Vt+=1}qt(){this.Vt-=1}Ut(){this.xt=!0,this.Ct=!0}}class IT{constructor(e){this.Kt=e,this.Gt=new Map,this.Qt=En(),this.jt=Jd(),this.zt=new Me(_e)}Wt(e){for(const n of e.vt)e.Pt&&e.Pt.isFoundDocument()?this.Ht(n,e.Pt):this.Jt(n,e.key,e.Pt);for(const n of e.removedTargetIds)this.Jt(n,e.key,e.Pt)}Yt(e){this.forEachTarget(e,n=>{const s=this.Xt(n);switch(e.state){case 0:this.Zt(n)&&s.Mt(e.resumeToken);break;case 1:s.qt(),s.Nt||s.$t(),s.Mt(e.resumeToken);break;case 2:s.qt(),s.Nt||this.removeTarget(n);break;case 3:this.Zt(n)&&(s.Ut(),s.Mt(e.resumeToken));break;case 4:this.Zt(n)&&(this.te(n),s.Mt(e.resumeToken));break;default:J()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Gt.forEach((s,r)=>{this.Zt(r)&&n(r)})}ee(e){var n;const s=e.targetId,r=e.bt.count,i=this.ne(s);if(i){const o=i.target;if(dl(o))if(r===0){const a=new z(o.path);this.Jt(s,a,st.newNoDocument(a,te.min()))}else ke(r===1);else{const a=this.se(s);if(a!==r){const c=this.ie(e,a);if(c!==0){this.te(s);const l=c===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.zt=this.zt.insert(s,l)}(n=Au.instance)===null||n===void 0||n.notifyOnExistenceFilterMismatch(function(l,u,h){var d,p,g,v,b,w;const O={localCacheCount:u,existenceFilterCount:h.count},S=h.unchangedNames;return S&&(O.bloomFilter={applied:l===0,hashCount:(d=S==null?void 0:S.hashCount)!==null&&d!==void 0?d:0,bitmapLength:(v=(g=(p=S==null?void 0:S.bits)===null||p===void 0?void 0:p.bitmap)===null||g===void 0?void 0:g.length)!==null&&v!==void 0?v:0,padding:(w=(b=S==null?void 0:S.bits)===null||b===void 0?void 0:b.padding)!==null&&w!==void 0?w:0}),O}(c,a,e.bt))}}}}ie(e,n){const{unchangedNames:s,count:r}=e.bt;if(!s||!s.bits)return 1;const{bits:{bitmap:i="",padding:o=0},hashCount:a=0}=s;let c,l;try{c=ys(i).toUint8Array()}catch(u){if(u instanceof ug)return tr("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),1;throw u}try{l=new ku(c,o,a)}catch(u){return tr(u instanceof Or?"BloomFilter error: ":"Applying bloom filter failed: ",u),1}return l.yt===0?1:r!==n-this.re(e.targetId,l)?2:0}re(e,n){const s=this.Kt.getRemoteKeysForTarget(e);let r=0;return s.forEach(i=>{const o=this.Kt.oe(),a=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;n.At(a)||(this.Jt(e,i,null),r++)}),r}ue(e){const n=new Map;this.Gt.forEach((i,o)=>{const a=this.ne(o);if(a){if(i.current&&dl(a.target)){const c=new z(a.target.path);this.Qt.get(c)!==null||this.ce(o,c)||this.Jt(o,c,st.newNoDocument(c,e))}i.kt&&(n.set(o,i.Ot()),i.$t())}});let s=ue();this.jt.forEach((i,o)=>{let a=!0;o.forEachWhile(c=>{const l=this.ne(c);return!l||l.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(s=s.add(i))}),this.Qt.forEach((i,o)=>o.setReadTime(e));const r=new Da(e,n,this.zt,this.Qt,s);return this.Qt=En(),this.jt=Jd(),this.zt=new Me(_e),r}Ht(e,n){if(!this.Zt(e))return;const s=this.ce(e,n.key)?2:0;this.Xt(e).Ft(n.key,s),this.Qt=this.Qt.insert(n.key,n),this.jt=this.jt.insert(n.key,this.ae(n.key).add(e))}Jt(e,n,s){if(!this.Zt(e))return;const r=this.Xt(e);this.ce(e,n)?r.Ft(n,1):r.Bt(n),this.jt=this.jt.insert(n,this.ae(n).delete(e)),s&&(this.Qt=this.Qt.insert(n,s))}removeTarget(e){this.Gt.delete(e)}se(e){const n=this.Xt(e).Ot();return this.Kt.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Lt(e){this.Xt(e).Lt()}Xt(e){let n=this.Gt.get(e);return n||(n=new Xd,this.Gt.set(e,n)),n}ae(e){let n=this.jt.get(e);return n||(n=new ut(_e),this.jt=this.jt.insert(e,n)),n}Zt(e){const n=this.ne(e)!==null;return n||j("WatchChangeAggregator","Detected inactive target",e),n}ne(e){const n=this.Gt.get(e);return n&&n.Nt?null:this.Kt.he(e)}te(e){this.Gt.set(e,new Xd),this.Kt.getRemoteKeysForTarget(e).forEach(n=>{this.Jt(e,n,null)})}ce(e,n){return this.Kt.getRemoteKeysForTarget(e).has(n)}}function Jd(){return new Me(z.comparator)}function Zd(){return new Me(z.comparator)}const bT=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),TT=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),CT=(()=>({and:"AND",or:"OR"}))();class ST{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function ml(t,e){return t.useProto3Json||Ca(e)?e:{value:e}}function Uo(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Lg(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function xT(t,e){return Uo(t,e.toTimestamp())}function nn(t){return ke(!!t),te.fromTimestamp(function(e){const n=Kn(e);return new Ke(n.seconds,n.nanos)}(t))}function Ru(t,e){return function(n){return new Ae(["projects",n.projectId,"databases",n.database])}(t).child("documents").child(e).canonicalString()}function Fg(t){const e=Ae.fromString(t);return ke(Bg(e)),e}function gl(t,e){return Ru(t.databaseId,e.path)}function wc(t,e){const n=Fg(e);if(n.get(1)!==t.databaseId.projectId)throw new V(I.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new V(I.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new z($g(n))}function yl(t,e){return Ru(t.databaseId,e)}function AT(t){const e=Fg(t);return e.length===4?Ae.emptyPath():$g(e)}function vl(t){return new Ae(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function $g(t){return ke(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function ef(t,e,n){return{name:gl(t,e),fields:n.value.mapValue.fields}}function kT(t,e){let n;if("targetChange"in e){e.targetChange;const s=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:J()}(e.targetChange.targetChangeType||"NO_CHANGE"),r=e.targetChange.targetIds||[],i=function(c,l){return c.useProto3Json?(ke(l===void 0||typeof l=="string"),pt.fromBase64String(l||"")):(ke(l===void 0||l instanceof Uint8Array),pt.fromUint8Array(l||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(c){const l=c.code===void 0?I.UNKNOWN:Pg(c.code);return new V(l,c.message||"")}(o);n=new Mg(s,r,i,a||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const r=wc(t,s.document.name),i=nn(s.document.updateTime),o=s.document.createTime?nn(s.document.createTime):te.min(),a=new _t({mapValue:{fields:s.document.fields}}),c=st.newFoundDocument(r,i,o,a),l=s.targetIds||[],u=s.removedTargetIds||[];n=new lo(l,u,c.key,c)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const r=wc(t,s.document),i=s.readTime?nn(s.readTime):te.min(),o=st.newNoDocument(r,i),a=s.removedTargetIds||[];n=new lo([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const r=wc(t,s.document),i=s.removedTargetIds||[];n=new lo([],i,r,null)}else{if(!("filter"in e))return J();{e.filter;const s=e.filter;s.targetId;const{count:r=0,unchangedNames:i}=s,o=new vT(r,i),a=s.targetId;n=new Og(a,o)}}return n}function RT(t,e){let n;if(e instanceof ki)n={update:ef(t,e.key,e.value)};else if(e instanceof Dg)n={delete:gl(t,e.key)};else if(e instanceof Xn)n={update:ef(t,e.key,e.data),updateMask:UT(e.fieldMask)};else{if(!(e instanceof mT))return J();n={verify:gl(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(s=>function(r,i){const o=i.transform;if(o instanceof li)return{fieldPath:i.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof ui)return{fieldPath:i.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof hi)return{fieldPath:i.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof $o)return{fieldPath:i.field.canonicalString(),increment:o.wt};throw J()}(0,s))),e.precondition.isNone||(n.currentDocument=function(s,r){return r.updateTime!==void 0?{updateTime:xT(s,r.updateTime)}:r.exists!==void 0?{exists:r.exists}:J()}(t,e.precondition)),n}function NT(t,e){return t&&t.length>0?(ke(e!==void 0),t.map(n=>function(s,r){let i=s.updateTime?nn(s.updateTime):nn(r);return i.isEqual(te.min())&&(i=nn(r)),new dT(i,s.transformResults||[])}(n,e))):[]}function DT(t,e){return{documents:[yl(t,e.path)]}}function PT(t,e){const n={structuredQuery:{}},s=e.path;e.collectionGroup!==null?(n.parent=yl(t,s),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=yl(t,s.popLast()),n.structuredQuery.from=[{collectionId:s.lastSegment()}]);const r=function(c){if(c.length!==0)return Vg(Wt.create(c,"and"))}(e.filters);r&&(n.structuredQuery.where=r);const i=function(c){if(c.length!==0)return c.map(l=>function(u){return{field:Ns(u.field),direction:LT(u.dir)}}(l))}(e.orderBy);i&&(n.structuredQuery.orderBy=i);const o=ml(t,e.limit);var a;return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),n}function OT(t){let e=AT(t.parent);const n=t.structuredQuery,s=n.from?n.from.length:0;let r=null;if(s>0){ke(s===1);const u=n.from[0];u.allDescendants?r=u.collectionId:e=e.child(u.collectionId)}let i=[];n.where&&(i=function(u){const h=Ug(u);return h instanceof Wt&&pg(h)?h.getFilters():[h]}(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(u=>function(h){return new qs(Ds(h.field),function(d){switch(d){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(h.direction))}(u)));let a=null;n.limit&&(a=function(u){let h;return h=typeof u=="object"?u.value:u,Ca(h)?null:h}(n.limit));let c=null;n.startAt&&(c=function(u){const h=!!u.before,d=u.values||[];return new Lo(d,h)}(n.startAt));let l=null;return n.endAt&&(l=function(u){const h=!u.before,d=u.values||[];return new Lo(d,h)}(n.endAt)),Zb(e,r,o,i,a,"F",c,l)}function MT(t,e){const n=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return J()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function Ug(t){return t.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const n=Ds(e.unaryFilter.field);return ze.create(n,"==",{doubleValue:NaN});case"IS_NULL":const s=Ds(e.unaryFilter.field);return ze.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=Ds(e.unaryFilter.field);return ze.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const i=Ds(e.unaryFilter.field);return ze.create(i,"!=",{nullValue:"NULL_VALUE"});default:return J()}}(t):t.fieldFilter!==void 0?function(e){return ze.create(Ds(e.fieldFilter.field),function(n){switch(n){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return J()}}(e.fieldFilter.op),e.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(e){return Wt.create(e.compositeFilter.filters.map(n=>Ug(n)),function(n){switch(n){case"AND":return"and";case"OR":return"or";default:return J()}}(e.compositeFilter.op))}(t):J()}function LT(t){return bT[t]}function FT(t){return TT[t]}function $T(t){return CT[t]}function Ns(t){return{fieldPath:t.canonicalString()}}function Ds(t){return it.fromServerFormat(t.fieldPath)}function Vg(t){return t instanceof ze?function(e){if(e.op==="=="){if(Vd(e.value))return{unaryFilter:{field:Ns(e.field),op:"IS_NAN"}};if(Ud(e.value))return{unaryFilter:{field:Ns(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(Vd(e.value))return{unaryFilter:{field:Ns(e.field),op:"IS_NOT_NAN"}};if(Ud(e.value))return{unaryFilter:{field:Ns(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Ns(e.field),op:FT(e.op),value:e.value}}}(t):t instanceof Wt?function(e){const n=e.getFilters().map(s=>Vg(s));return n.length===1?n[0]:{compositeFilter:{op:$T(e.op),filters:n}}}(t):J()}function UT(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function Bg(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ln{constructor(e,n,s,r,i=te.min(),o=te.min(),a=pt.EMPTY_BYTE_STRING,c=null){this.target=e,this.targetId=n,this.purpose=s,this.sequenceNumber=r,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=c}withSequenceNumber(e){return new Ln(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new Ln(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Ln(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Ln(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VT{constructor(e){this.le=e}}function BT(t){const e=OT({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Fo(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jT{constructor(){this.sn=new qT}addToCollectionParentIndex(e,n){return this.sn.add(n),A.resolve()}getCollectionParents(e,n){return A.resolve(this.sn.getEntries(n))}addFieldIndex(e,n){return A.resolve()}deleteFieldIndex(e,n){return A.resolve()}getDocumentsMatchingTarget(e,n){return A.resolve(null)}getIndexType(e,n){return A.resolve(0)}getFieldIndexes(e,n){return A.resolve([])}getNextCollectionGroupToUpdate(e){return A.resolve(null)}getMinOffset(e,n){return A.resolve(zn.min())}getMinOffsetFromCollectionGroup(e,n){return A.resolve(zn.min())}updateCollectionGroup(e,n,s){return A.resolve()}updateIndexEntries(e,n){return A.resolve()}}class qT{constructor(){this.index={}}add(e){const n=e.lastSegment(),s=e.popLast(),r=this.index[n]||new ut(Ae.comparator),i=!r.has(s);return this.index[n]=r.add(s),i}has(e){const n=e.lastSegment(),s=e.popLast(),r=this.index[n];return r&&r.has(s)}getEntries(e){return(this.index[e]||new ut(Ae.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ir{constructor(e){this.xn=e}next(){return this.xn+=2,this.xn}static Nn(){return new ir(0)}static kn(){return new ir(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HT{constructor(){this.changes=new yr(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,st.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const s=this.changes.get(n);return s!==void 0?A.resolve(s):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zT{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KT{constructor(e,n,s,r){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=s,this.indexManager=r}getDocument(e,n){let s=null;return this.documentOverlayCache.getOverlay(e,n).next(r=>(s=r,this.remoteDocumentCache.getEntry(e,n))).next(r=>(s!==null&&Hr(s.mutation,r,Tt.empty(),Ke.now()),r))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(s=>this.getLocalViewOfDocuments(e,s,ue()).next(()=>s))}getLocalViewOfDocuments(e,n,s=ue()){const r=ls();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,s).next(i=>{let o=Pr();return i.forEach((a,c)=>{o=o.insert(a,c.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const s=ls();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,ue()))}populateOverlays(e,n,s){const r=[];return s.forEach(i=>{n.has(i)||r.push(i)}),this.documentOverlayCache.getOverlays(e,r).next(i=>{i.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,s,r){let i=En();const o=qr(),a=qr();return n.forEach((c,l)=>{const u=s.get(l.key);r.has(l.key)&&(u===void 0||u.mutation instanceof Xn)?i=i.insert(l.key,l):u!==void 0?(o.set(l.key,u.mutation.getFieldMask()),Hr(u.mutation,l,u.mutation.getFieldMask(),Ke.now())):o.set(l.key,Tt.empty())}),this.recalculateAndSaveOverlays(e,i).next(c=>(c.forEach((l,u)=>o.set(l,u)),n.forEach((l,u)=>{var h;return a.set(l,new zT(u,(h=o.get(l))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,n){const s=qr();let r=new Me((o,a)=>o-a),i=ue();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(c=>{const l=n.get(c);if(l===null)return;let u=s.get(c)||Tt.empty();u=a.applyToLocalView(l,u),s.set(c,u);const h=(r.get(a.batchId)||ue()).add(c);r=r.insert(a.batchId,h)})}).next(()=>{const o=[],a=r.getReverseIterator();for(;a.hasNext();){const c=a.getNext(),l=c.key,u=c.value,h=bg();u.forEach(d=>{if(!i.has(d)){const p=Rg(n.get(d),s.get(d));p!==null&&h.set(d,p),i=i.add(d)}}),o.push(this.documentOverlayCache.saveOverlays(e,l,h))}return A.waitFor(o)}).next(()=>s)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(s=>this.recalculateAndSaveOverlays(e,s))}getDocumentsMatchingQuery(e,n,s){return function(r){return z.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):vg(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,s):this.getDocumentsMatchingCollectionQuery(e,n,s)}getNextDocuments(e,n,s,r){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,s,r).next(i=>{const o=r-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,s.largestBatchId,r-i.size):A.resolve(ls());let a=-1,c=i;return o.next(l=>A.forEach(l,(u,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),i.get(u)?A.resolve():this.remoteDocumentCache.getEntry(e,u).next(d=>{c=c.insert(u,d)}))).next(()=>this.populateOverlays(e,l,i)).next(()=>this.computeViews(e,c,l,ue())).next(u=>({batchId:a,changes:Ig(u)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new z(n)).next(s=>{let r=Pr();return s.isFoundDocument()&&(r=r.insert(s.key,s)),r})}getDocumentsMatchingCollectionGroupQuery(e,n,s){const r=n.collectionGroup;let i=Pr();return this.indexManager.getCollectionParents(e,r).next(o=>A.forEach(o,a=>{const c=function(l,u){return new gr(u,null,l.explicitOrderBy.slice(),l.filters.slice(),l.limit,l.limitType,l.startAt,l.endAt)}(n,a.child(r));return this.getDocumentsMatchingCollectionQuery(e,c,s).next(l=>{l.forEach((u,h)=>{i=i.insert(u,h)})})}).next(()=>i))}getDocumentsMatchingCollectionQuery(e,n,s){let r;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,s.largestBatchId).next(i=>(r=i,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,s,r))).next(i=>{r.forEach((a,c)=>{const l=c.getKey();i.get(l)===null&&(i=i.insert(l,st.newInvalidDocument(l)))});let o=Pr();return i.forEach((a,c)=>{const l=r.get(a);l!==void 0&&Hr(l.mutation,c,Tt.empty(),Ke.now()),ka(n,c)&&(o=o.insert(a,c))}),o})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WT{constructor(e){this.serializer=e,this.us=new Map,this.cs=new Map}getBundleMetadata(e,n){return A.resolve(this.us.get(n))}saveBundleMetadata(e,n){var s;return this.us.set(n.id,{id:(s=n).id,version:s.version,createTime:nn(s.createTime)}),A.resolve()}getNamedQuery(e,n){return A.resolve(this.cs.get(n))}saveNamedQuery(e,n){return this.cs.set(n.name,function(s){return{name:s.name,query:BT(s.bundledQuery),readTime:nn(s.readTime)}}(n)),A.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GT{constructor(){this.overlays=new Me(z.comparator),this.hs=new Map}getOverlay(e,n){return A.resolve(this.overlays.get(n))}getOverlays(e,n){const s=ls();return A.forEach(n,r=>this.getOverlay(e,r).next(i=>{i!==null&&s.set(r,i)})).next(()=>s)}saveOverlays(e,n,s){return s.forEach((r,i)=>{this.de(e,n,i)}),A.resolve()}removeOverlaysForBatchId(e,n,s){const r=this.hs.get(s);return r!==void 0&&(r.forEach(i=>this.overlays=this.overlays.remove(i)),this.hs.delete(s)),A.resolve()}getOverlaysForCollection(e,n,s){const r=ls(),i=n.length+1,o=new z(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const c=a.getNext().value,l=c.getKey();if(!n.isPrefixOf(l.path))break;l.path.length===i&&c.largestBatchId>s&&r.set(c.getKey(),c)}return A.resolve(r)}getOverlaysForCollectionGroup(e,n,s,r){let i=new Me((l,u)=>l-u);const o=this.overlays.getIterator();for(;o.hasNext();){const l=o.getNext().value;if(l.getKey().getCollectionGroup()===n&&l.largestBatchId>s){let u=i.get(l.largestBatchId);u===null&&(u=ls(),i=i.insert(l.largestBatchId,u)),u.set(l.getKey(),l)}}const a=ls(),c=i.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((l,u)=>a.set(l,u)),!(a.size()>=r)););return A.resolve(a)}de(e,n,s){const r=this.overlays.get(s.key);if(r!==null){const o=this.hs.get(r.largestBatchId).delete(s.key);this.hs.set(r.largestBatchId,o)}this.overlays=this.overlays.insert(s.key,new yT(n,s));let i=this.hs.get(n);i===void 0&&(i=ue(),this.hs.set(n,i)),this.hs.set(n,i.add(s.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nu{constructor(){this.ls=new ut(Qe.fs),this.ds=new ut(Qe._s)}isEmpty(){return this.ls.isEmpty()}addReference(e,n){const s=new Qe(e,n);this.ls=this.ls.add(s),this.ds=this.ds.add(s)}ws(e,n){e.forEach(s=>this.addReference(s,n))}removeReference(e,n){this.gs(new Qe(e,n))}ys(e,n){e.forEach(s=>this.removeReference(s,n))}ps(e){const n=new z(new Ae([])),s=new Qe(n,e),r=new Qe(n,e+1),i=[];return this.ds.forEachInRange([s,r],o=>{this.gs(o),i.push(o.key)}),i}Is(){this.ls.forEach(e=>this.gs(e))}gs(e){this.ls=this.ls.delete(e),this.ds=this.ds.delete(e)}Ts(e){const n=new z(new Ae([])),s=new Qe(n,e),r=new Qe(n,e+1);let i=ue();return this.ds.forEachInRange([s,r],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new Qe(e,0),s=this.ls.firstAfterOrEqual(n);return s!==null&&e.isEqual(s.key)}}class Qe{constructor(e,n){this.key=e,this.Es=n}static fs(e,n){return z.comparator(e.key,n.key)||_e(e.Es,n.Es)}static _s(e,n){return _e(e.Es,n.Es)||z.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QT{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.As=1,this.Rs=new ut(Qe.fs)}checkEmpty(e){return A.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,s,r){const i=this.As;this.As++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new gT(i,n,s,r);this.mutationQueue.push(o);for(const a of r)this.Rs=this.Rs.add(new Qe(a.key,i)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return A.resolve(o)}lookupMutationBatch(e,n){return A.resolve(this.vs(n))}getNextMutationBatchAfterBatchId(e,n){const s=n+1,r=this.Ps(s),i=r<0?0:r;return A.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return A.resolve(this.mutationQueue.length===0?-1:this.As-1)}getAllMutationBatches(e){return A.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const s=new Qe(n,0),r=new Qe(n,Number.POSITIVE_INFINITY),i=[];return this.Rs.forEachInRange([s,r],o=>{const a=this.vs(o.Es);i.push(a)}),A.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let s=new ut(_e);return n.forEach(r=>{const i=new Qe(r,0),o=new Qe(r,Number.POSITIVE_INFINITY);this.Rs.forEachInRange([i,o],a=>{s=s.add(a.Es)})}),A.resolve(this.bs(s))}getAllMutationBatchesAffectingQuery(e,n){const s=n.path,r=s.length+1;let i=s;z.isDocumentKey(i)||(i=i.child(""));const o=new Qe(new z(i),0);let a=new ut(_e);return this.Rs.forEachWhile(c=>{const l=c.key.path;return!!s.isPrefixOf(l)&&(l.length===r&&(a=a.add(c.Es)),!0)},o),A.resolve(this.bs(a))}bs(e){const n=[];return e.forEach(s=>{const r=this.vs(s);r!==null&&n.push(r)}),n}removeMutationBatch(e,n){ke(this.Vs(n.batchId,"removed")===0),this.mutationQueue.shift();let s=this.Rs;return A.forEach(n.mutations,r=>{const i=new Qe(r.key,n.batchId);return s=s.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,r.key)}).next(()=>{this.Rs=s})}Dn(e){}containsKey(e,n){const s=new Qe(n,0),r=this.Rs.firstAfterOrEqual(s);return A.resolve(n.isEqual(r&&r.key))}performConsistencyCheck(e){return this.mutationQueue.length,A.resolve()}Vs(e,n){return this.Ps(e)}Ps(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}vs(e){const n=this.Ps(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YT{constructor(e){this.Ss=e,this.docs=new Me(z.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const s=n.key,r=this.docs.get(s),i=r?r.size:0,o=this.Ss(n);return this.docs=this.docs.insert(s,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const s=this.docs.get(n);return A.resolve(s?s.document.mutableCopy():st.newInvalidDocument(n))}getEntries(e,n){let s=En();return n.forEach(r=>{const i=this.docs.get(r);s=s.insert(r,i?i.document.mutableCopy():st.newInvalidDocument(r))}),A.resolve(s)}getDocumentsMatchingQuery(e,n,s,r){let i=En();const o=n.path,a=new z(o.child("")),c=this.docs.getIteratorFrom(a);for(;c.hasNext();){const{key:l,value:{document:u}}=c.getNext();if(!o.isPrefixOf(l.path))break;l.path.length>o.length+1||Lb(Mb(u),s)<=0||(r.has(u.key)||ka(n,u))&&(i=i.insert(u.key,u.mutableCopy()))}return A.resolve(i)}getAllFromCollectionGroup(e,n,s,r){J()}Ds(e,n){return A.forEach(this.docs,s=>n(s))}newChangeBuffer(e){return new XT(this)}getSize(e){return A.resolve(this.size)}}class XT extends HT{constructor(e){super(),this.rs=e}applyChanges(e){const n=[];return this.changes.forEach((s,r)=>{r.isValidDocument()?n.push(this.rs.addEntry(e,r)):this.rs.removeEntry(s)}),A.waitFor(n)}getFromCache(e,n){return this.rs.getEntry(e,n)}getAllFromCache(e,n){return this.rs.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JT{constructor(e){this.persistence=e,this.Cs=new yr(n=>Tu(n),Cu),this.lastRemoteSnapshotVersion=te.min(),this.highestTargetId=0,this.xs=0,this.Ns=new Nu,this.targetCount=0,this.ks=ir.Nn()}forEachTarget(e,n){return this.Cs.forEach((s,r)=>n(r)),A.resolve()}getLastRemoteSnapshotVersion(e){return A.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return A.resolve(this.xs)}allocateTargetId(e){return this.highestTargetId=this.ks.next(),A.resolve(this.highestTargetId)}setTargetsMetadata(e,n,s){return s&&(this.lastRemoteSnapshotVersion=s),n>this.xs&&(this.xs=n),A.resolve()}$n(e){this.Cs.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.ks=new ir(n),this.highestTargetId=n),e.sequenceNumber>this.xs&&(this.xs=e.sequenceNumber)}addTargetData(e,n){return this.$n(n),this.targetCount+=1,A.resolve()}updateTargetData(e,n){return this.$n(n),A.resolve()}removeTargetData(e,n){return this.Cs.delete(n.target),this.Ns.ps(n.targetId),this.targetCount-=1,A.resolve()}removeTargets(e,n,s){let r=0;const i=[];return this.Cs.forEach((o,a)=>{a.sequenceNumber<=n&&s.get(a.targetId)===null&&(this.Cs.delete(o),i.push(this.removeMatchingKeysForTargetId(e,a.targetId)),r++)}),A.waitFor(i).next(()=>r)}getTargetCount(e){return A.resolve(this.targetCount)}getTargetData(e,n){const s=this.Cs.get(n)||null;return A.resolve(s)}addMatchingKeys(e,n,s){return this.Ns.ws(n,s),A.resolve()}removeMatchingKeys(e,n,s){this.Ns.ys(n,s);const r=this.persistence.referenceDelegate,i=[];return r&&n.forEach(o=>{i.push(r.markPotentiallyOrphaned(e,o))}),A.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.Ns.ps(n),A.resolve()}getMatchingKeysForTargetId(e,n){const s=this.Ns.Ts(n);return A.resolve(s)}containsKey(e,n){return A.resolve(this.Ns.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZT{constructor(e,n){this.Ms={},this.overlays={},this.Os=new wu(0),this.$s=!1,this.$s=!0,this.referenceDelegate=e(this),this.Fs=new JT(this),this.indexManager=new jT,this.remoteDocumentCache=function(s){return new YT(s)}(s=>this.referenceDelegate.Bs(s)),this.serializer=new VT(n),this.Ls=new WT(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.$s=!1,Promise.resolve()}get started(){return this.$s}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new GT,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let s=this.Ms[e.toKey()];return s||(s=new QT(n,this.referenceDelegate),this.Ms[e.toKey()]=s),s}getTargetCache(){return this.Fs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ls}runTransaction(e,n,s){j("MemoryPersistence","Starting transaction:",e);const r=new e1(this.Os.next());return this.referenceDelegate.qs(),s(r).next(i=>this.referenceDelegate.Us(r).next(()=>i)).toPromise().then(i=>(r.raiseOnCommittedEvent(),i))}Ks(e,n){return A.or(Object.values(this.Ms).map(s=>()=>s.containsKey(e,n)))}}class e1 extends $b{constructor(e){super(),this.currentSequenceNumber=e}}class Du{constructor(e){this.persistence=e,this.Gs=new Nu,this.Qs=null}static js(e){return new Du(e)}get zs(){if(this.Qs)return this.Qs;throw J()}addReference(e,n,s){return this.Gs.addReference(s,n),this.zs.delete(s.toString()),A.resolve()}removeReference(e,n,s){return this.Gs.removeReference(s,n),this.zs.add(s.toString()),A.resolve()}markPotentiallyOrphaned(e,n){return this.zs.add(n.toString()),A.resolve()}removeTarget(e,n){this.Gs.ps(n.targetId).forEach(r=>this.zs.add(r.toString()));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,n.targetId).next(r=>{r.forEach(i=>this.zs.add(i.toString()))}).next(()=>s.removeTargetData(e,n))}qs(){this.Qs=new Set}Us(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return A.forEach(this.zs,s=>{const r=z.fromPath(s);return this.Ws(e,r).next(i=>{i||n.removeEntry(r,te.min())})}).next(()=>(this.Qs=null,n.apply(e)))}updateLimboDocument(e,n){return this.Ws(e,n).next(s=>{s?this.zs.delete(n.toString()):this.zs.add(n.toString())})}Bs(e){return 0}Ws(e,n){return A.or([()=>A.resolve(this.Gs.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ks(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pu{constructor(e,n,s,r){this.targetId=e,this.fromCache=n,this.$i=s,this.Fi=r}static Bi(e,n){let s=ue(),r=ue();for(const i of n.docChanges)switch(i.type){case 0:s=s.add(i.doc.key);break;case 1:r=r.add(i.doc.key)}return new Pu(e,n.fromCache,s,r)}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class t1{constructor(){this.Li=!1}initialize(e,n){this.qi=e,this.indexManager=n,this.Li=!0}getDocumentsMatchingQuery(e,n,s,r){return this.Ui(e,n).next(i=>i||this.Ki(e,n,r,s)).next(i=>i||this.Gi(e,n))}Ui(e,n){if(Hd(n))return A.resolve(null);let s=wn(n);return this.indexManager.getIndexType(e,s).next(r=>r===0?null:(n.limit!==null&&r===1&&(n=Fo(n,null,"F"),s=wn(n)),this.indexManager.getDocumentsMatchingTarget(e,s).next(i=>{const o=ue(...i);return this.qi.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,s).next(c=>{const l=this.Qi(n,a);return this.ji(n,l,o,c.readTime)?this.Ui(e,Fo(n,null,"F")):this.zi(e,l,n,c)}))})))}Ki(e,n,s,r){return Hd(n)||r.isEqual(te.min())?this.Gi(e,n):this.qi.getDocuments(e,s).next(i=>{const o=this.Qi(n,i);return this.ji(n,o,s,r)?this.Gi(e,n):(Od()<=ye.DEBUG&&j("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),pl(n)),this.zi(e,o,n,Ob(r,-1)))})}Qi(e,n){let s=new ut(wg(e));return n.forEach((r,i)=>{ka(e,i)&&(s=s.add(i))}),s}ji(e,n,s,r){if(e.limit===null)return!1;if(s.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(r)>0)}Gi(e,n){return Od()<=ye.DEBUG&&j("QueryEngine","Using full collection scan to execute query:",pl(n)),this.qi.getDocumentsMatchingQuery(e,n,zn.min())}zi(e,n,s,r){return this.qi.getDocumentsMatchingQuery(e,s,r).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class n1{constructor(e,n,s,r){this.persistence=e,this.Wi=n,this.serializer=r,this.Hi=new Me(_e),this.Ji=new yr(i=>Tu(i),Cu),this.Yi=new Map,this.Xi=e.getRemoteDocumentCache(),this.Fs=e.getTargetCache(),this.Ls=e.getBundleCache(),this.Zi(s)}Zi(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new KT(this.Xi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Xi.setIndexManager(this.indexManager),this.Wi.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Hi))}}function s1(t,e,n,s){return new n1(t,e,n,s)}async function jg(t,e){const n=se(t);return await n.persistence.runTransaction("Handle user change","readonly",s=>{let r;return n.mutationQueue.getAllMutationBatches(s).next(i=>(r=i,n.Zi(e),n.mutationQueue.getAllMutationBatches(s))).next(i=>{const o=[],a=[];let c=ue();for(const l of r){o.push(l.batchId);for(const u of l.mutations)c=c.add(u.key)}for(const l of i){a.push(l.batchId);for(const u of l.mutations)c=c.add(u.key)}return n.localDocuments.getDocuments(s,c).next(l=>({tr:l,removedBatchIds:o,addedBatchIds:a}))})})}function r1(t,e){const n=se(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",s=>{const r=e.batch.keys(),i=n.Xi.newChangeBuffer({trackRemovals:!0});return function(o,a,c,l){const u=c.batch,h=u.keys();let d=A.resolve();return h.forEach(p=>{d=d.next(()=>l.getEntry(a,p)).next(g=>{const v=c.docVersions.get(p);ke(v!==null),g.version.compareTo(v)<0&&(u.applyToRemoteDocument(g,c),g.isValidDocument()&&(g.setReadTime(c.commitVersion),l.addEntry(g)))})}),d.next(()=>o.mutationQueue.removeMutationBatch(a,u))}(n,s,e,i).next(()=>i.apply(s)).next(()=>n.mutationQueue.performConsistencyCheck(s)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(s,r,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,function(o){let a=ue();for(let c=0;c<o.mutationResults.length;++c)o.mutationResults[c].transformResults.length>0&&(a=a.add(o.batch.mutations[c].key));return a}(e))).next(()=>n.localDocuments.getDocuments(s,r))})}function qg(t){const e=se(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Fs.getLastRemoteSnapshotVersion(n))}function i1(t,e){const n=se(t),s=e.snapshotVersion;let r=n.Hi;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.Xi.newChangeBuffer({trackRemovals:!0});r=n.Hi;const a=[];e.targetChanges.forEach((u,h)=>{const d=r.get(h);if(!d)return;a.push(n.Fs.removeMatchingKeys(i,u.removedDocuments,h).next(()=>n.Fs.addMatchingKeys(i,u.addedDocuments,h)));let p=d.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(h)!==null?p=p.withResumeToken(pt.EMPTY_BYTE_STRING,te.min()).withLastLimboFreeSnapshotVersion(te.min()):u.resumeToken.approximateByteSize()>0&&(p=p.withResumeToken(u.resumeToken,s)),r=r.insert(h,p),function(g,v,b){return g.resumeToken.approximateByteSize()===0||v.snapshotVersion.toMicroseconds()-g.snapshotVersion.toMicroseconds()>=3e8?!0:b.addedDocuments.size+b.modifiedDocuments.size+b.removedDocuments.size>0}(d,p,u)&&a.push(n.Fs.updateTargetData(i,p))});let c=En(),l=ue();if(e.documentUpdates.forEach(u=>{e.resolvedLimboDocuments.has(u)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(i,u))}),a.push(o1(i,o,e.documentUpdates).next(u=>{c=u.er,l=u.nr})),!s.isEqual(te.min())){const u=n.Fs.getLastRemoteSnapshotVersion(i).next(h=>n.Fs.setTargetsMetadata(i,i.currentSequenceNumber,s));a.push(u)}return A.waitFor(a).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,c,l)).next(()=>c)}).then(i=>(n.Hi=r,i))}function o1(t,e,n){let s=ue(),r=ue();return n.forEach(i=>s=s.add(i)),e.getEntries(t,s).next(i=>{let o=En();return n.forEach((a,c)=>{const l=i.get(a);c.isFoundDocument()!==l.isFoundDocument()&&(r=r.add(a)),c.isNoDocument()&&c.version.isEqual(te.min())?(e.removeEntry(a,c.readTime),o=o.insert(a,c)):!l.isValidDocument()||c.version.compareTo(l.version)>0||c.version.compareTo(l.version)===0&&l.hasPendingWrites?(e.addEntry(c),o=o.insert(a,c)):j("LocalStore","Ignoring outdated watch update for ",a,". Current version:",l.version," Watch version:",c.version)}),{er:o,nr:r}})}function a1(t,e){const n=se(t);return n.persistence.runTransaction("Get next mutation batch","readonly",s=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(s,e)))}function c1(t,e){const n=se(t);return n.persistence.runTransaction("Allocate target","readwrite",s=>{let r;return n.Fs.getTargetData(s,e).next(i=>i?(r=i,A.resolve(r)):n.Fs.allocateTargetId(s).next(o=>(r=new Ln(e,o,"TargetPurposeListen",s.currentSequenceNumber),n.Fs.addTargetData(s,r).next(()=>r))))}).then(s=>{const r=n.Hi.get(s.targetId);return(r===null||s.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(n.Hi=n.Hi.insert(s.targetId,s),n.Ji.set(e,s.targetId)),s})}async function _l(t,e,n){const s=se(t),r=s.Hi.get(e),i=n?"readwrite":"readwrite-primary";try{n||await s.persistence.runTransaction("Release target",i,o=>s.persistence.referenceDelegate.removeTarget(o,r))}catch(o){if(!Ai(o))throw o;j("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}s.Hi=s.Hi.remove(e),s.Ji.delete(r.target)}function tf(t,e,n){const s=se(t);let r=te.min(),i=ue();return s.persistence.runTransaction("Execute query","readonly",o=>function(a,c,l){const u=se(a),h=u.Ji.get(l);return h!==void 0?A.resolve(u.Hi.get(h)):u.Fs.getTargetData(c,l)}(s,o,wn(e)).next(a=>{if(a)return r=a.lastLimboFreeSnapshotVersion,s.Fs.getMatchingKeysForTargetId(o,a.targetId).next(c=>{i=c})}).next(()=>s.Wi.getDocumentsMatchingQuery(o,e,n?r:te.min(),n?i:ue())).next(a=>(l1(s,eT(e),a),{documents:a,sr:i})))}function l1(t,e,n){let s=t.Yi.get(e)||te.min();n.forEach((r,i)=>{i.readTime.compareTo(s)>0&&(s=i.readTime)}),t.Yi.set(e,s)}class nf{constructor(){this.activeTargetIds=oT()}hr(e){this.activeTargetIds=this.activeTargetIds.add(e)}lr(e){this.activeTargetIds=this.activeTargetIds.delete(e)}ar(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class u1{constructor(){this.Wr=new nf,this.Hr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,s){}addLocalQueryTarget(e){return this.Wr.hr(e),this.Hr[e]||"not-current"}updateQueryState(e,n,s){this.Hr[e]=n}removeLocalQueryTarget(e){this.Wr.lr(e)}isLocalQueryTarget(e){return this.Wr.activeTargetIds.has(e)}clearQueryState(e){delete this.Hr[e]}getAllActiveQueryTargets(){return this.Wr.activeTargetIds}isActiveQueryTarget(e){return this.Wr.activeTargetIds.has(e)}start(){return this.Wr=new nf,Promise.resolve()}handleUserChange(e,n,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class h1{Jr(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sf{constructor(){this.Yr=()=>this.Xr(),this.Zr=()=>this.eo(),this.no=[],this.so()}Jr(e){this.no.push(e)}shutdown(){window.removeEventListener("online",this.Yr),window.removeEventListener("offline",this.Zr)}so(){window.addEventListener("online",this.Yr),window.addEventListener("offline",this.Zr)}Xr(){j("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.no)e(0)}eo(){j("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.no)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let to=null;function Ec(){return to===null?to=268435456+Math.round(2147483648*Math.random()):to++,"0x"+to.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const d1={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class f1{constructor(e){this.io=e.io,this.ro=e.ro}oo(e){this.uo=e}co(e){this.ao=e}onMessage(e){this.ho=e}close(){this.ro()}send(e){this.io(e)}lo(){this.uo()}fo(e){this.ao(e)}_o(e){this.ho(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tt="WebChannelConnection";class p1 extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http";this.wo=n+"://"+e.host,this.mo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get yo(){return!1}po(e,n,s,r,i){const o=Ec(),a=this.Io(e,n);j("RestConnection",`Sending RPC '${e}' ${o}:`,a,s);const c={};return this.To(c,r,i),this.Eo(e,a,c,s).then(l=>(j("RestConnection",`Received RPC '${e}' ${o}: `,l),l),l=>{throw tr("RestConnection",`RPC '${e}' ${o} failed with error: `,l,"url: ",a,"request:",s),l})}Ao(e,n,s,r,i,o){return this.po(e,n,s,r,i)}To(e,n,s){e["X-Goog-Api-Client"]="gl-js/ fire/"+mr,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((r,i)=>e[i]=r),s&&s.headers.forEach((r,i)=>e[i]=r)}Io(e,n){const s=d1[e];return`${this.wo}/v1/${n}:${s}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}Eo(e,n,s,r){const i=Ec();return new Promise((o,a)=>{const c=new bb;c.setWithCredentials(!0),c.listenOnce(wb.COMPLETE,()=>{try{switch(c.getLastErrorCode()){case _c.NO_ERROR:const u=c.getResponseJson();j(tt,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(u)),o(u);break;case _c.TIMEOUT:j(tt,`RPC '${e}' ${i} timed out`),a(new V(I.DEADLINE_EXCEEDED,"Request time out"));break;case _c.HTTP_ERROR:const h=c.getStatus();if(j(tt,`RPC '${e}' ${i} failed with status:`,h,"response text:",c.getResponseText()),h>0){let d=c.getResponseJson();Array.isArray(d)&&(d=d[0]);const p=d==null?void 0:d.error;if(p&&p.status&&p.message){const g=function(v){const b=v.toLowerCase().replace(/_/g,"-");return Object.values(I).indexOf(b)>=0?b:I.UNKNOWN}(p.status);a(new V(g,p.message))}else a(new V(I.UNKNOWN,"Server responded with status "+c.getStatus()))}else a(new V(I.UNAVAILABLE,"Connection failed."));break;default:J()}}finally{j(tt,`RPC '${e}' ${i} completed.`)}});const l=JSON.stringify(r);j(tt,`RPC '${e}' ${i} sending request:`,r),c.send(n,"POST",l,s,15)})}Ro(e,n,s){const r=Ec(),i=[this.wo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=vb(),a=_b(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(c.xmlHttpFactory=new Ib({})),this.To(c.initMessageHeaders,n,s),c.encodeInitMessageHeaders=!0;const l=i.join("");j(tt,`Creating RPC '${e}' stream ${r}: ${l}`,c);const u=o.createWebChannel(l,c);let h=!1,d=!1;const p=new f1({io:v=>{d?j(tt,`Not sending because RPC '${e}' stream ${r} is closed:`,v):(h||(j(tt,`Opening RPC '${e}' stream ${r} transport.`),u.open(),h=!0),j(tt,`RPC '${e}' stream ${r} sending:`,v),u.send(v))},ro:()=>u.close()}),g=(v,b,w)=>{v.listen(b,O=>{try{w(O)}catch(S){setTimeout(()=>{throw S},0)}})};return g(u,Xi.EventType.OPEN,()=>{d||j(tt,`RPC '${e}' stream ${r} transport opened.`)}),g(u,Xi.EventType.CLOSE,()=>{d||(d=!0,j(tt,`RPC '${e}' stream ${r} transport closed`),p.fo())}),g(u,Xi.EventType.ERROR,v=>{d||(d=!0,tr(tt,`RPC '${e}' stream ${r} transport errored:`,v),p.fo(new V(I.UNAVAILABLE,"The operation could not be completed")))}),g(u,Xi.EventType.MESSAGE,v=>{var b;if(!d){const w=v.data[0];ke(!!w);const O=w,S=O.error||((b=O[0])===null||b===void 0?void 0:b.error);if(S){j(tt,`RPC '${e}' stream ${r} received error:`,S);const Q=S.status;let oe=function(Re){const Y=qe[Re];if(Y!==void 0)return Pg(Y)}(Q),Ce=S.message;oe===void 0&&(oe=I.INTERNAL,Ce="Unknown error status: "+Q+" with message "+S.message),d=!0,p.fo(new V(oe,Ce)),u.close()}else j(tt,`RPC '${e}' stream ${r} received:`,w),p._o(w)}}),g(a,Eb.STAT_EVENT,v=>{v.stat===Dd.PROXY?j(tt,`RPC '${e}' stream ${r} detected buffering proxy`):v.stat===Dd.NOPROXY&&j(tt,`RPC '${e}' stream ${r} detected no buffering proxy`)}),setTimeout(()=>{p.lo()},0),p}}function Ic(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pa(t){return new ST(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hg{constructor(e,n,s=1e3,r=1.5,i=6e4){this.si=e,this.timerId=n,this.vo=s,this.Po=r,this.bo=i,this.Vo=0,this.So=null,this.Do=Date.now(),this.reset()}reset(){this.Vo=0}Co(){this.Vo=this.bo}xo(e){this.cancel();const n=Math.floor(this.Vo+this.No()),s=Math.max(0,Date.now()-this.Do),r=Math.max(0,n-s);r>0&&j("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.Vo} ms, delay with jitter: ${n} ms, last attempt: ${s} ms ago)`),this.So=this.si.enqueueAfterDelay(this.timerId,r,()=>(this.Do=Date.now(),e())),this.Vo*=this.Po,this.Vo<this.vo&&(this.Vo=this.vo),this.Vo>this.bo&&(this.Vo=this.bo)}ko(){this.So!==null&&(this.So.skipDelay(),this.So=null)}cancel(){this.So!==null&&(this.So.cancel(),this.So=null)}No(){return(Math.random()-.5)*this.Vo}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zg{constructor(e,n,s,r,i,o,a,c){this.si=e,this.Mo=s,this.Oo=r,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=c,this.state=0,this.$o=0,this.Fo=null,this.Bo=null,this.stream=null,this.Lo=new Hg(e,n)}qo(){return this.state===1||this.state===5||this.Uo()}Uo(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Ko()}async stop(){this.qo()&&await this.close(0)}Go(){this.state=0,this.Lo.reset()}Qo(){this.Uo()&&this.Fo===null&&(this.Fo=this.si.enqueueAfterDelay(this.Mo,6e4,()=>this.jo()))}zo(e){this.Wo(),this.stream.send(e)}async jo(){if(this.Uo())return this.close(0)}Wo(){this.Fo&&(this.Fo.cancel(),this.Fo=null)}Ho(){this.Bo&&(this.Bo.cancel(),this.Bo=null)}async close(e,n){this.Wo(),this.Ho(),this.Lo.cancel(),this.$o++,e!==4?this.Lo.reset():n&&n.code===I.RESOURCE_EXHAUSTED?(_n(n.toString()),_n("Using maximum backoff delay to prevent overloading the backend."),this.Lo.Co()):n&&n.code===I.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Jo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.co(n)}Jo(){}auth(){this.state=1;const e=this.Yo(this.$o),n=this.$o;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([s,r])=>{this.$o===n&&this.Xo(s,r)},s=>{e(()=>{const r=new V(I.UNKNOWN,"Fetching auth token failed: "+s.message);return this.Zo(r)})})}Xo(e,n){const s=this.Yo(this.$o);this.stream=this.tu(e,n),this.stream.oo(()=>{s(()=>(this.state=2,this.Bo=this.si.enqueueAfterDelay(this.Oo,1e4,()=>(this.Uo()&&(this.state=3),Promise.resolve())),this.listener.oo()))}),this.stream.co(r=>{s(()=>this.Zo(r))}),this.stream.onMessage(r=>{s(()=>this.onMessage(r))})}Ko(){this.state=5,this.Lo.xo(async()=>{this.state=0,this.start()})}Zo(e){return j("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Yo(e){return n=>{this.si.enqueueAndForget(()=>this.$o===e?n():(j("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class m1 extends zg{constructor(e,n,s,r,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,s,r,o),this.serializer=i}tu(e,n){return this.connection.Ro("Listen",e,n)}onMessage(e){this.Lo.reset();const n=kT(this.serializer,e),s=function(r){if(!("targetChange"in r))return te.min();const i=r.targetChange;return i.targetIds&&i.targetIds.length?te.min():i.readTime?nn(i.readTime):te.min()}(e);return this.listener.eu(n,s)}nu(e){const n={};n.database=vl(this.serializer),n.addTarget=function(r,i){let o;const a=i.target;if(o=dl(a)?{documents:DT(r,a)}:{query:PT(r,a)},o.targetId=i.targetId,i.resumeToken.approximateByteSize()>0){o.resumeToken=Lg(r,i.resumeToken);const c=ml(r,i.expectedCount);c!==null&&(o.expectedCount=c)}else if(i.snapshotVersion.compareTo(te.min())>0){o.readTime=Uo(r,i.snapshotVersion.toTimestamp());const c=ml(r,i.expectedCount);c!==null&&(o.expectedCount=c)}return o}(this.serializer,e);const s=MT(this.serializer,e);s&&(n.labels=s),this.zo(n)}su(e){const n={};n.database=vl(this.serializer),n.removeTarget=e,this.zo(n)}}class g1 extends zg{constructor(e,n,s,r,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,s,r,o),this.serializer=i,this.iu=!1}get ru(){return this.iu}start(){this.iu=!1,this.lastStreamToken=void 0,super.start()}Jo(){this.iu&&this.ou([])}tu(e,n){return this.connection.Ro("Write",e,n)}onMessage(e){if(ke(!!e.streamToken),this.lastStreamToken=e.streamToken,this.iu){this.Lo.reset();const n=NT(e.writeResults,e.commitTime),s=nn(e.commitTime);return this.listener.uu(s,n)}return ke(!e.writeResults||e.writeResults.length===0),this.iu=!0,this.listener.cu()}au(){const e={};e.database=vl(this.serializer),this.zo(e)}ou(e){const n={streamToken:this.lastStreamToken,writes:e.map(s=>RT(this.serializer,s))};this.zo(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class y1 extends class{}{constructor(e,n,s,r){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=s,this.serializer=r,this.hu=!1}lu(){if(this.hu)throw new V(I.FAILED_PRECONDITION,"The client has already been terminated.")}po(e,n,s){return this.lu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,i])=>this.connection.po(e,n,s,r,i)).catch(r=>{throw r.name==="FirebaseError"?(r.code===I.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),r):new V(I.UNKNOWN,r.toString())})}Ao(e,n,s,r){return this.lu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.Ao(e,n,s,i,o,r)).catch(i=>{throw i.name==="FirebaseError"?(i.code===I.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new V(I.UNKNOWN,i.toString())})}terminate(){this.hu=!0}}class v1{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.du=0,this._u=null,this.wu=!0}mu(){this.du===0&&(this.gu("Unknown"),this._u=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this._u=null,this.yu("Backend didn't respond within 10 seconds."),this.gu("Offline"),Promise.resolve())))}pu(e){this.state==="Online"?this.gu("Unknown"):(this.du++,this.du>=1&&(this.Iu(),this.yu(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.gu("Offline")))}set(e){this.Iu(),this.du=0,e==="Online"&&(this.wu=!1),this.gu(e)}gu(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}yu(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.wu?(_n(n),this.wu=!1):j("OnlineStateTracker",n)}Iu(){this._u!==null&&(this._u.cancel(),this._u=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _1{constructor(e,n,s,r,i){this.localStore=e,this.datastore=n,this.asyncQueue=s,this.remoteSyncer={},this.Tu=[],this.Eu=new Map,this.Au=new Set,this.Ru=[],this.vu=i,this.vu.Jr(o=>{s.enqueueAndForget(async()=>{bs(this)&&(j("RemoteStore","Restarting streams for network reachability change."),await async function(a){const c=se(a);c.Au.add(4),await Ni(c),c.Pu.set("Unknown"),c.Au.delete(4),await Oa(c)}(this))})}),this.Pu=new v1(s,r)}}async function Oa(t){if(bs(t))for(const e of t.Ru)await e(!0)}async function Ni(t){for(const e of t.Ru)await e(!1)}function Kg(t,e){const n=se(t);n.Eu.has(e.targetId)||(n.Eu.set(e.targetId,e),Lu(n)?Mu(n):vr(n).Uo()&&Ou(n,e))}function Wg(t,e){const n=se(t),s=vr(n);n.Eu.delete(e),s.Uo()&&Gg(n,e),n.Eu.size===0&&(s.Uo()?s.Qo():bs(n)&&n.Pu.set("Unknown"))}function Ou(t,e){if(t.bu.Lt(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(te.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}vr(t).nu(e)}function Gg(t,e){t.bu.Lt(e),vr(t).su(e)}function Mu(t){t.bu=new IT({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),he:e=>t.Eu.get(e)||null,oe:()=>t.datastore.serializer.databaseId}),vr(t).start(),t.Pu.mu()}function Lu(t){return bs(t)&&!vr(t).qo()&&t.Eu.size>0}function bs(t){return se(t).Au.size===0}function Qg(t){t.bu=void 0}async function w1(t){t.Eu.forEach((e,n)=>{Ou(t,e)})}async function E1(t,e){Qg(t),Lu(t)?(t.Pu.pu(e),Mu(t)):t.Pu.set("Unknown")}async function I1(t,e,n){if(t.Pu.set("Online"),e instanceof Mg&&e.state===2&&e.cause)try{await async function(s,r){const i=r.cause;for(const o of r.targetIds)s.Eu.has(o)&&(await s.remoteSyncer.rejectListen(o,i),s.Eu.delete(o),s.bu.removeTarget(o))}(t,e)}catch(s){j("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),s),await Vo(t,s)}else if(e instanceof lo?t.bu.Wt(e):e instanceof Og?t.bu.ee(e):t.bu.Yt(e),!n.isEqual(te.min()))try{const s=await qg(t.localStore);n.compareTo(s)>=0&&await function(r,i){const o=r.bu.ue(i);return o.targetChanges.forEach((a,c)=>{if(a.resumeToken.approximateByteSize()>0){const l=r.Eu.get(c);l&&r.Eu.set(c,l.withResumeToken(a.resumeToken,i))}}),o.targetMismatches.forEach((a,c)=>{const l=r.Eu.get(a);if(!l)return;r.Eu.set(a,l.withResumeToken(pt.EMPTY_BYTE_STRING,l.snapshotVersion)),Gg(r,a);const u=new Ln(l.target,a,c,l.sequenceNumber);Ou(r,u)}),r.remoteSyncer.applyRemoteEvent(o)}(t,n)}catch(s){j("RemoteStore","Failed to raise snapshot:",s),await Vo(t,s)}}async function Vo(t,e,n){if(!Ai(e))throw e;t.Au.add(1),await Ni(t),t.Pu.set("Offline"),n||(n=()=>qg(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{j("RemoteStore","Retrying IndexedDB access"),await n(),t.Au.delete(1),await Oa(t)})}function Yg(t,e){return e().catch(n=>Vo(t,n,e))}async function Ma(t){const e=se(t),n=Wn(e);let s=e.Tu.length>0?e.Tu[e.Tu.length-1].batchId:-1;for(;b1(e);)try{const r=await a1(e.localStore,s);if(r===null){e.Tu.length===0&&n.Qo();break}s=r.batchId,T1(e,r)}catch(r){await Vo(e,r)}Xg(e)&&Jg(e)}function b1(t){return bs(t)&&t.Tu.length<10}function T1(t,e){t.Tu.push(e);const n=Wn(t);n.Uo()&&n.ru&&n.ou(e.mutations)}function Xg(t){return bs(t)&&!Wn(t).qo()&&t.Tu.length>0}function Jg(t){Wn(t).start()}async function C1(t){Wn(t).au()}async function S1(t){const e=Wn(t);for(const n of t.Tu)e.ou(n.mutations)}async function x1(t,e,n){const s=t.Tu.shift(),r=xu.from(s,e,n);await Yg(t,()=>t.remoteSyncer.applySuccessfulWrite(r)),await Ma(t)}async function A1(t,e){e&&Wn(t).ru&&await async function(n,s){if(r=s.code,_T(r)&&r!==I.ABORTED){const i=n.Tu.shift();Wn(n).Go(),await Yg(n,()=>n.remoteSyncer.rejectFailedWrite(i.batchId,s)),await Ma(n)}var r}(t,e),Xg(t)&&Jg(t)}async function rf(t,e){const n=se(t);n.asyncQueue.verifyOperationInProgress(),j("RemoteStore","RemoteStore received new credentials");const s=bs(n);n.Au.add(3),await Ni(n),s&&n.Pu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.Au.delete(3),await Oa(n)}async function k1(t,e){const n=se(t);e?(n.Au.delete(2),await Oa(n)):e||(n.Au.add(2),await Ni(n),n.Pu.set("Unknown"))}function vr(t){return t.Vu||(t.Vu=function(e,n,s){const r=se(e);return r.lu(),new m1(n,r.connection,r.authCredentials,r.appCheckCredentials,r.serializer,s)}(t.datastore,t.asyncQueue,{oo:w1.bind(null,t),co:E1.bind(null,t),eu:I1.bind(null,t)}),t.Ru.push(async e=>{e?(t.Vu.Go(),Lu(t)?Mu(t):t.Pu.set("Unknown")):(await t.Vu.stop(),Qg(t))})),t.Vu}function Wn(t){return t.Su||(t.Su=function(e,n,s){const r=se(e);return r.lu(),new g1(n,r.connection,r.authCredentials,r.appCheckCredentials,r.serializer,s)}(t.datastore,t.asyncQueue,{oo:C1.bind(null,t),co:A1.bind(null,t),cu:S1.bind(null,t),uu:x1.bind(null,t)}),t.Ru.push(async e=>{e?(t.Su.Go(),await Ma(t)):(await t.Su.stop(),t.Tu.length>0&&(j("RemoteStore",`Stopping write stream with ${t.Tu.length} pending writes`),t.Tu=[]))})),t.Su}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fu{constructor(e,n,s,r,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=s,this.op=r,this.removalCallback=i,this.deferred=new gn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,s,r,i){const o=Date.now()+s,a=new Fu(e,n,o,r,i);return a.start(s),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new V(I.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function $u(t,e){if(_n("AsyncQueue",`${e}: ${t}`),Ai(t))return new V(I.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zs{constructor(e){this.comparator=e?(n,s)=>e(n,s)||z.comparator(n.key,s.key):(n,s)=>z.comparator(n.key,s.key),this.keyedMap=Pr(),this.sortedSet=new Me(this.comparator)}static emptySet(e){return new zs(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,s)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof zs)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;n.hasNext();){const r=n.getNext().key,i=s.getNext().key;if(!r.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const s=new zs;return s.comparator=this.comparator,s.keyedMap=e,s.sortedSet=n,s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class of{constructor(){this.Du=new Me(z.comparator)}track(e){const n=e.doc.key,s=this.Du.get(n);s?e.type!==0&&s.type===3?this.Du=this.Du.insert(n,e):e.type===3&&s.type!==1?this.Du=this.Du.insert(n,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.Du=this.Du.insert(n,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.Du=this.Du.insert(n,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.Du=this.Du.remove(n):e.type===1&&s.type===2?this.Du=this.Du.insert(n,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.Du=this.Du.insert(n,{type:2,doc:e.doc}):J():this.Du=this.Du.insert(n,e)}Cu(){const e=[];return this.Du.inorderTraversal((n,s)=>{e.push(s)}),e}}class or{constructor(e,n,s,r,i,o,a,c,l){this.query=e,this.docs=n,this.oldDocs=s,this.docChanges=r,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=c,this.hasCachedResults=l}static fromInitialDocuments(e,n,s,r,i){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new or(e,n,zs.emptySet(n),o,s,r,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Aa(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,s=e.docChanges;if(n.length!==s.length)return!1;for(let r=0;r<n.length;r++)if(n[r].type!==s[r].type||!n[r].doc.isEqual(s[r].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R1{constructor(){this.xu=void 0,this.listeners=[]}}class N1{constructor(){this.queries=new yr(e=>_g(e),Aa),this.onlineState="Unknown",this.Nu=new Set}}async function Uu(t,e){const n=se(t),s=e.query;let r=!1,i=n.queries.get(s);if(i||(r=!0,i=new R1),r)try{i.xu=await n.onListen(s)}catch(o){const a=$u(o,`Initialization of query '${pl(e.query)}' failed`);return void e.onError(a)}n.queries.set(s,i),i.listeners.push(e),e.ku(n.onlineState),i.xu&&e.Mu(i.xu)&&Bu(n)}async function Vu(t,e){const n=se(t),s=e.query;let r=!1;const i=n.queries.get(s);if(i){const o=i.listeners.indexOf(e);o>=0&&(i.listeners.splice(o,1),r=i.listeners.length===0)}if(r)return n.queries.delete(s),n.onUnlisten(s)}function D1(t,e){const n=se(t);let s=!1;for(const r of e){const i=r.query,o=n.queries.get(i);if(o){for(const a of o.listeners)a.Mu(r)&&(s=!0);o.xu=r}}s&&Bu(n)}function P1(t,e,n){const s=se(t),r=s.queries.get(e);if(r)for(const i of r.listeners)i.onError(n);s.queries.delete(e)}function Bu(t){t.Nu.forEach(e=>{e.next()})}class ju{constructor(e,n,s){this.query=e,this.Ou=n,this.$u=!1,this.Fu=null,this.onlineState="Unknown",this.options=s||{}}Mu(e){if(!this.options.includeMetadataChanges){const s=[];for(const r of e.docChanges)r.type!==3&&s.push(r);e=new or(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.$u?this.Bu(e)&&(this.Ou.next(e),n=!0):this.Lu(e,this.onlineState)&&(this.qu(e),n=!0),this.Fu=e,n}onError(e){this.Ou.error(e)}ku(e){this.onlineState=e;let n=!1;return this.Fu&&!this.$u&&this.Lu(this.Fu,e)&&(this.qu(this.Fu),n=!0),n}Lu(e,n){if(!e.fromCache)return!0;const s=n!=="Offline";return(!this.options.Uu||!s)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Bu(e){if(e.docChanges.length>0)return!0;const n=this.Fu&&this.Fu.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}qu(e){e=or.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.$u=!0,this.Ou.next(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zg{constructor(e){this.key=e}}class ey{constructor(e){this.key=e}}class O1{constructor(e,n){this.query=e,this.Ju=n,this.Yu=null,this.hasCachedResults=!1,this.current=!1,this.Xu=ue(),this.mutatedKeys=ue(),this.Zu=wg(e),this.tc=new zs(this.Zu)}get ec(){return this.Ju}nc(e,n){const s=n?n.sc:new of,r=n?n.tc:this.tc;let i=n?n.mutatedKeys:this.mutatedKeys,o=r,a=!1;const c=this.query.limitType==="F"&&r.size===this.query.limit?r.last():null,l=this.query.limitType==="L"&&r.size===this.query.limit?r.first():null;if(e.inorderTraversal((u,h)=>{const d=r.get(u),p=ka(this.query,h)?h:null,g=!!d&&this.mutatedKeys.has(d.key),v=!!p&&(p.hasLocalMutations||this.mutatedKeys.has(p.key)&&p.hasCommittedMutations);let b=!1;d&&p?d.data.isEqual(p.data)?g!==v&&(s.track({type:3,doc:p}),b=!0):this.ic(d,p)||(s.track({type:2,doc:p}),b=!0,(c&&this.Zu(p,c)>0||l&&this.Zu(p,l)<0)&&(a=!0)):!d&&p?(s.track({type:0,doc:p}),b=!0):d&&!p&&(s.track({type:1,doc:d}),b=!0,(c||l)&&(a=!0)),b&&(p?(o=o.add(p),i=v?i.add(u):i.delete(u)):(o=o.delete(u),i=i.delete(u)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const u=this.query.limitType==="F"?o.last():o.first();o=o.delete(u.key),i=i.delete(u.key),s.track({type:1,doc:u})}return{tc:o,sc:s,ji:a,mutatedKeys:i}}ic(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,s){const r=this.tc;this.tc=e.tc,this.mutatedKeys=e.mutatedKeys;const i=e.sc.Cu();i.sort((l,u)=>function(h,d){const p=g=>{switch(g){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return J()}};return p(h)-p(d)}(l.type,u.type)||this.Zu(l.doc,u.doc)),this.rc(s);const o=n?this.oc():[],a=this.Xu.size===0&&this.current?1:0,c=a!==this.Yu;return this.Yu=a,i.length!==0||c?{snapshot:new or(this.query,e.tc,r,i,e.mutatedKeys,a===0,c,!1,!!s&&s.resumeToken.approximateByteSize()>0),uc:o}:{uc:o}}ku(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({tc:this.tc,sc:new of,mutatedKeys:this.mutatedKeys,ji:!1},!1)):{uc:[]}}cc(e){return!this.Ju.has(e)&&!!this.tc.has(e)&&!this.tc.get(e).hasLocalMutations}rc(e){e&&(e.addedDocuments.forEach(n=>this.Ju=this.Ju.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Ju=this.Ju.delete(n)),this.current=e.current)}oc(){if(!this.current)return[];const e=this.Xu;this.Xu=ue(),this.tc.forEach(s=>{this.cc(s.key)&&(this.Xu=this.Xu.add(s.key))});const n=[];return e.forEach(s=>{this.Xu.has(s)||n.push(new ey(s))}),this.Xu.forEach(s=>{e.has(s)||n.push(new Zg(s))}),n}ac(e){this.Ju=e.sr,this.Xu=ue();const n=this.nc(e.documents);return this.applyChanges(n,!0)}hc(){return or.fromInitialDocuments(this.query,this.tc,this.mutatedKeys,this.Yu===0,this.hasCachedResults)}}class M1{constructor(e,n,s){this.query=e,this.targetId=n,this.view=s}}class L1{constructor(e){this.key=e,this.lc=!1}}class F1{constructor(e,n,s,r,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=s,this.sharedClientState=r,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.fc={},this.dc=new yr(a=>_g(a),Aa),this._c=new Map,this.wc=new Set,this.mc=new Me(z.comparator),this.gc=new Map,this.yc=new Nu,this.Ic={},this.Tc=new Map,this.Ec=ir.kn(),this.onlineState="Unknown",this.Ac=void 0}get isPrimaryClient(){return this.Ac===!0}}async function $1(t,e){const n=G1(t);let s,r;const i=n.dc.get(e);if(i)s=i.targetId,n.sharedClientState.addLocalQueryTarget(s),r=i.view.hc();else{const o=await c1(n.localStore,wn(e)),a=n.sharedClientState.addLocalQueryTarget(o.targetId);s=o.targetId,r=await U1(n,e,s,a==="current",o.resumeToken),n.isPrimaryClient&&Kg(n.remoteStore,o)}return r}async function U1(t,e,n,s,r){t.Rc=(h,d,p)=>async function(g,v,b,w){let O=v.view.nc(b);O.ji&&(O=await tf(g.localStore,v.query,!1).then(({documents:oe})=>v.view.nc(oe,O)));const S=w&&w.targetChanges.get(v.targetId),Q=v.view.applyChanges(O,g.isPrimaryClient,S);return cf(g,v.targetId,Q.uc),Q.snapshot}(t,h,d,p);const i=await tf(t.localStore,e,!0),o=new O1(e,i.sr),a=o.nc(i.documents),c=Ri.createSynthesizedTargetChangeForCurrentChange(n,s&&t.onlineState!=="Offline",r),l=o.applyChanges(a,t.isPrimaryClient,c);cf(t,n,l.uc);const u=new M1(e,n,o);return t.dc.set(e,u),t._c.has(n)?t._c.get(n).push(e):t._c.set(n,[e]),l.snapshot}async function V1(t,e){const n=se(t),s=n.dc.get(e),r=n._c.get(s.targetId);if(r.length>1)return n._c.set(s.targetId,r.filter(i=>!Aa(i,e))),void n.dc.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(s.targetId),n.sharedClientState.isActiveQueryTarget(s.targetId)||await _l(n.localStore,s.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(s.targetId),Wg(n.remoteStore,s.targetId),wl(n,s.targetId)}).catch(xi)):(wl(n,s.targetId),await _l(n.localStore,s.targetId,!0))}async function B1(t,e,n){const s=Q1(t);try{const r=await function(i,o){const a=se(i),c=Ke.now(),l=o.reduce((d,p)=>d.add(p.key),ue());let u,h;return a.persistence.runTransaction("Locally write mutations","readwrite",d=>{let p=En(),g=ue();return a.Xi.getEntries(d,l).next(v=>{p=v,p.forEach((b,w)=>{w.isValidDocument()||(g=g.add(b))})}).next(()=>a.localDocuments.getOverlayedDocuments(d,p)).next(v=>{u=v;const b=[];for(const w of o){const O=pT(w,u.get(w.key).overlayedDocument);O!=null&&b.push(new Xn(w.key,O,hg(O.value.mapValue),qt.exists(!0)))}return a.mutationQueue.addMutationBatch(d,c,b,o)}).next(v=>{h=v;const b=v.applyToLocalDocumentSet(u,g);return a.documentOverlayCache.saveOverlays(d,v.batchId,b)})}).then(()=>({batchId:h.batchId,changes:Ig(u)}))}(s.localStore,e);s.sharedClientState.addPendingMutation(r.batchId),function(i,o,a){let c=i.Ic[i.currentUser.toKey()];c||(c=new Me(_e)),c=c.insert(o,a),i.Ic[i.currentUser.toKey()]=c}(s,r.batchId,n),await Di(s,r.changes),await Ma(s.remoteStore)}catch(r){const i=$u(r,"Failed to persist write");n.reject(i)}}async function ty(t,e){const n=se(t);try{const s=await i1(n.localStore,e);e.targetChanges.forEach((r,i)=>{const o=n.gc.get(i);o&&(ke(r.addedDocuments.size+r.modifiedDocuments.size+r.removedDocuments.size<=1),r.addedDocuments.size>0?o.lc=!0:r.modifiedDocuments.size>0?ke(o.lc):r.removedDocuments.size>0&&(ke(o.lc),o.lc=!1))}),await Di(n,s,e)}catch(s){await xi(s)}}function af(t,e,n){const s=se(t);if(s.isPrimaryClient&&n===0||!s.isPrimaryClient&&n===1){const r=[];s.dc.forEach((i,o)=>{const a=o.view.ku(e);a.snapshot&&r.push(a.snapshot)}),function(i,o){const a=se(i);a.onlineState=o;let c=!1;a.queries.forEach((l,u)=>{for(const h of u.listeners)h.ku(o)&&(c=!0)}),c&&Bu(a)}(s.eventManager,e),r.length&&s.fc.eu(r),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function j1(t,e,n){const s=se(t);s.sharedClientState.updateQueryState(e,"rejected",n);const r=s.gc.get(e),i=r&&r.key;if(i){let o=new Me(z.comparator);o=o.insert(i,st.newNoDocument(i,te.min()));const a=ue().add(i),c=new Da(te.min(),new Map,new Me(_e),o,a);await ty(s,c),s.mc=s.mc.remove(i),s.gc.delete(e),qu(s)}else await _l(s.localStore,e,!1).then(()=>wl(s,e,n)).catch(xi)}async function q1(t,e){const n=se(t),s=e.batch.batchId;try{const r=await r1(n.localStore,e);sy(n,s,null),ny(n,s),n.sharedClientState.updateMutationState(s,"acknowledged"),await Di(n,r)}catch(r){await xi(r)}}async function H1(t,e,n){const s=se(t);try{const r=await function(i,o){const a=se(i);return a.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let l;return a.mutationQueue.lookupMutationBatch(c,o).next(u=>(ke(u!==null),l=u.keys(),a.mutationQueue.removeMutationBatch(c,u))).next(()=>a.mutationQueue.performConsistencyCheck(c)).next(()=>a.documentOverlayCache.removeOverlaysForBatchId(c,l,o)).next(()=>a.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,l)).next(()=>a.localDocuments.getDocuments(c,l))})}(s.localStore,e);sy(s,e,n),ny(s,e),s.sharedClientState.updateMutationState(e,"rejected",n),await Di(s,r)}catch(r){await xi(r)}}function ny(t,e){(t.Tc.get(e)||[]).forEach(n=>{n.resolve()}),t.Tc.delete(e)}function sy(t,e,n){const s=se(t);let r=s.Ic[s.currentUser.toKey()];if(r){const i=r.get(e);i&&(n?i.reject(n):i.resolve(),r=r.remove(e)),s.Ic[s.currentUser.toKey()]=r}}function wl(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const s of t._c.get(e))t.dc.delete(s),n&&t.fc.vc(s,n);t._c.delete(e),t.isPrimaryClient&&t.yc.ps(e).forEach(s=>{t.yc.containsKey(s)||ry(t,s)})}function ry(t,e){t.wc.delete(e.path.canonicalString());const n=t.mc.get(e);n!==null&&(Wg(t.remoteStore,n),t.mc=t.mc.remove(e),t.gc.delete(n),qu(t))}function cf(t,e,n){for(const s of n)s instanceof Zg?(t.yc.addReference(s.key,e),z1(t,s)):s instanceof ey?(j("SyncEngine","Document no longer in limbo: "+s.key),t.yc.removeReference(s.key,e),t.yc.containsKey(s.key)||ry(t,s.key)):J()}function z1(t,e){const n=e.key,s=n.path.canonicalString();t.mc.get(n)||t.wc.has(s)||(j("SyncEngine","New document in limbo: "+n),t.wc.add(s),qu(t))}function qu(t){for(;t.wc.size>0&&t.mc.size<t.maxConcurrentLimboResolutions;){const e=t.wc.values().next().value;t.wc.delete(e);const n=new z(Ae.fromString(e)),s=t.Ec.next();t.gc.set(s,new L1(n)),t.mc=t.mc.insert(n,s),Kg(t.remoteStore,new Ln(wn(Sa(n.path)),s,"TargetPurposeLimboResolution",wu.ct))}}async function Di(t,e,n){const s=se(t),r=[],i=[],o=[];s.dc.isEmpty()||(s.dc.forEach((a,c)=>{o.push(s.Rc(c,e,n).then(l=>{if((l||n)&&s.isPrimaryClient&&s.sharedClientState.updateQueryState(c.targetId,l!=null&&l.fromCache?"not-current":"current"),l){r.push(l);const u=Pu.Bi(c.targetId,l);i.push(u)}}))}),await Promise.all(o),s.fc.eu(r),await async function(a,c){const l=se(a);try{await l.persistence.runTransaction("notifyLocalViewChanges","readwrite",u=>A.forEach(c,h=>A.forEach(h.$i,d=>l.persistence.referenceDelegate.addReference(u,h.targetId,d)).next(()=>A.forEach(h.Fi,d=>l.persistence.referenceDelegate.removeReference(u,h.targetId,d)))))}catch(u){if(!Ai(u))throw u;j("LocalStore","Failed to update sequence numbers: "+u)}for(const u of c){const h=u.targetId;if(!u.fromCache){const d=l.Hi.get(h),p=d.snapshotVersion,g=d.withLastLimboFreeSnapshotVersion(p);l.Hi=l.Hi.insert(h,g)}}}(s.localStore,i))}async function K1(t,e){const n=se(t);if(!n.currentUser.isEqual(e)){j("SyncEngine","User change. New user:",e.toKey());const s=await jg(n.localStore,e);n.currentUser=e,function(r,i){r.Tc.forEach(o=>{o.forEach(a=>{a.reject(new V(I.CANCELLED,i))})}),r.Tc.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await Di(n,s.tr)}}function W1(t,e){const n=se(t),s=n.gc.get(e);if(s&&s.lc)return ue().add(s.key);{let r=ue();const i=n._c.get(e);if(!i)return r;for(const o of i){const a=n.dc.get(o);r=r.unionWith(a.view.ec)}return r}}function G1(t){const e=se(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=ty.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=W1.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=j1.bind(null,e),e.fc.eu=D1.bind(null,e.eventManager),e.fc.vc=P1.bind(null,e.eventManager),e}function Q1(t){const e=se(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=q1.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=H1.bind(null,e),e}class lf{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=Pa(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,n){return null}createIndexBackfillerScheduler(e,n){return null}createLocalStore(e){return s1(this.persistence,new t1,e.initialUser,this.serializer)}createPersistence(e){return new ZT(Du.js,this.serializer)}createSharedClientState(e){return new u1}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class Y1{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>af(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=K1.bind(null,this.syncEngine),await k1(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new N1}createDatastore(e){const n=Pa(e.databaseInfo.databaseId),s=(r=e.databaseInfo,new p1(r));var r;return function(i,o,a,c){return new y1(i,o,a,c)}(e.authCredentials,e.appCheckCredentials,s,n)}createRemoteStore(e){return n=this.localStore,s=this.datastore,r=e.asyncQueue,i=a=>af(this.syncEngine,a,0),o=sf.D()?new sf:new h1,new _1(n,s,r,i,o);var n,s,r,i,o}createSyncEngine(e,n){return function(s,r,i,o,a,c,l){const u=new F1(s,r,i,o,a,c);return l&&(u.Ac=!0),u}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(e){const n=se(e);j("RemoteStore","RemoteStore shutting down."),n.Au.add(5),await Ni(n),n.vu.shutdown(),n.Pu.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hu{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Vc(this.observer.next,e)}error(e){this.observer.error?this.Vc(this.observer.error,e):_n("Uncaught Error in snapshot listener:",e.toString())}Sc(){this.muted=!0}Vc(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X1{constructor(e,n,s,r){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=s,this.databaseInfo=r,this.user=nt.UNAUTHENTICATED,this.clientId=cg.A(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(s,async i=>{j("FirestoreClient","Received user=",i.uid),await this.authCredentialListener(i),this.user=i}),this.appCheckCredentials.start(s,i=>(j("FirestoreClient","Received new app check token=",i),this.appCheckCredentialListener(i,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new V(I.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new gn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const s=$u(n,"Failed to shutdown persistence");e.reject(s)}}),e.promise}}async function bc(t,e){t.asyncQueue.verifyOperationInProgress(),j("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let s=n.initialUser;t.setCredentialChangeListener(async r=>{s.isEqual(r)||(await jg(e.localStore,r),s=r)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function uf(t,e){t.asyncQueue.verifyOperationInProgress();const n=await Z1(t);j("FirestoreClient","Initializing OnlineComponentProvider");const s=await t.getConfiguration();await e.initialize(n,s),t.setCredentialChangeListener(r=>rf(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>rf(e.remoteStore,i)),t._onlineComponents=e}function J1(t){return t.name==="FirebaseError"?t.code===I.FAILED_PRECONDITION||t.code===I.UNIMPLEMENTED:!(typeof DOMException<"u"&&t instanceof DOMException)||t.code===22||t.code===20||t.code===11}async function Z1(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){j("FirestoreClient","Using user provided OfflineComponentProvider");try{await bc(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!J1(n))throw n;tr("Error using user provided cache. Falling back to memory cache: "+n),await bc(t,new lf)}}else j("FirestoreClient","Using default OfflineComponentProvider"),await bc(t,new lf);return t._offlineComponents}async function iy(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(j("FirestoreClient","Using user provided OnlineComponentProvider"),await uf(t,t._uninitializedComponentsProvider._online)):(j("FirestoreClient","Using default OnlineComponentProvider"),await uf(t,new Y1))),t._onlineComponents}function eC(t){return iy(t).then(e=>e.syncEngine)}async function Bo(t){const e=await iy(t),n=e.eventManager;return n.onListen=$1.bind(null,e.syncEngine),n.onUnlisten=V1.bind(null,e.syncEngine),n}function tC(t,e,n={}){const s=new gn;return t.asyncQueue.enqueueAndForget(async()=>function(r,i,o,a,c){const l=new Hu({next:h=>{i.enqueueAndForget(()=>Vu(r,u));const d=h.docs.has(o);!d&&h.fromCache?c.reject(new V(I.UNAVAILABLE,"Failed to get document because the client is offline.")):d&&h.fromCache&&a&&a.source==="server"?c.reject(new V(I.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):c.resolve(h)},error:h=>c.reject(h)}),u=new ju(Sa(o.path),l,{includeMetadataChanges:!0,Uu:!0});return Uu(r,u)}(await Bo(t),t.asyncQueue,e,n,s)),s.promise}function nC(t,e,n={}){const s=new gn;return t.asyncQueue.enqueueAndForget(async()=>function(r,i,o,a,c){const l=new Hu({next:h=>{i.enqueueAndForget(()=>Vu(r,u)),h.fromCache&&a.source==="server"?c.reject(new V(I.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):c.resolve(h)},error:h=>c.reject(h)}),u=new ju(o,l,{includeMetadataChanges:!0,Uu:!0});return Uu(r,u)}(await Bo(t),t.asyncQueue,e,n,s)),s.promise}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hf=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oy(t,e,n){if(!n)throw new V(I.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function sC(t,e,n,s){if(e===!0&&s===!0)throw new V(I.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function df(t){if(!z.isDocumentKey(t))throw new V(I.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function ff(t){if(z.isDocumentKey(t))throw new V(I.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function La(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":J()}function Ct(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new V(I.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=La(t);throw new V(I.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}function rC(t,e){if(e<=0)throw new V(I.INVALID_ARGUMENT,`Function ${t}() requires a positive number, but it was: ${e}.`)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pf{constructor(e){var n;if(e.host===void 0){if(e.ssl!==void 0)throw new V(I.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.cache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new V(I.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}sC("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!1:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fa{constructor(e,n,s,r){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=s,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new pf({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new V(I.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new V(I.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new pf(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new Cb;switch(n.type){case"firstParty":return new kb(n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new V(I.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=hf.get(e);n&&(j("ComponentProvider","Removing Datastore"),hf.delete(e),n.terminate())}(this),Promise.resolve()}}function iC(t,e,n,s={}){var r;const i=(t=Ct(t,Fa))._getSettings();if(i.host!=="firestore.googleapis.com"&&i.host!==e&&tr("Host has been set in both settings() and useEmulator(), emulator host will be used"),t._setSettings(Object.assign(Object.assign({},i),{host:`${e}:${n}`,ssl:!1})),s.mockUserToken){let o,a;if(typeof s.mockUserToken=="string")o=s.mockUserToken,a=nt.MOCK_USER;else{o=eE(s.mockUserToken,(r=t._app)===null||r===void 0?void 0:r.options.projectId);const c=s.mockUserToken.sub||s.mockUserToken.user_id;if(!c)throw new V(I.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");a=new nt(c)}t._authCredentials=new Sb(new ag(o,a))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ht{constructor(e,n,s){this.converter=n,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new jn(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new ht(this.firestore,e,this._key)}}class Cn{constructor(e,n,s){this.converter=n,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new Cn(this.firestore,e,this._query)}}class jn extends Cn{constructor(e,n,s){super(e,n,Sa(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new ht(this.firestore,null,new z(e))}withConverter(e){return new jn(this.firestore,e,this._path)}}function Ts(t,e,...n){if(t=Ge(t),oy("collection","path",e),t instanceof Fa){const s=Ae.fromString(e,...n);return ff(s),new jn(t,null,s)}{if(!(t instanceof ht||t instanceof jn))throw new V(I.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(Ae.fromString(e,...n));return ff(s),new jn(t.firestore,null,s)}}function Pi(t,e,...n){if(t=Ge(t),arguments.length===1&&(e=cg.A()),oy("doc","path",e),t instanceof Fa){const s=Ae.fromString(e,...n);return df(s),new ht(t,null,new z(s))}{if(!(t instanceof ht||t instanceof jn))throw new V(I.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(Ae.fromString(e,...n));return df(s),new ht(t.firestore,t instanceof jn?t.converter:null,new z(s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oC{constructor(){this.Kc=Promise.resolve(),this.Gc=[],this.Qc=!1,this.jc=[],this.zc=null,this.Wc=!1,this.Hc=!1,this.Jc=[],this.Lo=new Hg(this,"async_queue_retry"),this.Yc=()=>{const n=Ic();n&&j("AsyncQueue","Visibility state changed to "+n.visibilityState),this.Lo.ko()};const e=Ic();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Yc)}get isShuttingDown(){return this.Qc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Xc(),this.Zc(e)}enterRestrictedMode(e){if(!this.Qc){this.Qc=!0,this.Hc=e||!1;const n=Ic();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Yc)}}enqueue(e){if(this.Xc(),this.Qc)return new Promise(()=>{});const n=new gn;return this.Zc(()=>this.Qc&&this.Hc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Gc.push(e),this.ta()))}async ta(){if(this.Gc.length!==0){try{await this.Gc[0](),this.Gc.shift(),this.Lo.reset()}catch(e){if(!Ai(e))throw e;j("AsyncQueue","Operation failed with retryable error: "+e)}this.Gc.length>0&&this.Lo.xo(()=>this.ta())}}Zc(e){const n=this.Kc.then(()=>(this.Wc=!0,e().catch(s=>{this.zc=s,this.Wc=!1;const r=function(i){let o=i.message||"";return i.stack&&(o=i.stack.includes(i.message)?i.stack:i.message+`
`+i.stack),o}(s);throw _n("INTERNAL UNHANDLED ERROR: ",r),s}).then(s=>(this.Wc=!1,s))));return this.Kc=n,n}enqueueAfterDelay(e,n,s){this.Xc(),this.Jc.indexOf(e)>-1&&(n=0);const r=Fu.createAndSchedule(this,e,n,s,i=>this.ea(i));return this.jc.push(r),r}Xc(){this.zc&&J()}verifyOperationInProgress(){}async na(){let e;do e=this.Kc,await e;while(e!==this.Kc)}sa(e){for(const n of this.jc)if(n.timerId===e)return!0;return!1}ia(e){return this.na().then(()=>{this.jc.sort((n,s)=>n.targetTimeMs-s.targetTimeMs);for(const n of this.jc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.na()})}ra(e){this.Jc.push(e)}ea(e){const n=this.jc.indexOf(e);this.jc.splice(n,1)}}function mf(t){return function(e,n){if(typeof e!="object"||e===null)return!1;const s=e;for(const r of n)if(r in s&&typeof s[r]=="function")return!0;return!1}(t,["next","error","complete"])}class Gn extends Fa{constructor(e,n,s,r){super(e,n,s,r),this.type="firestore",this._queue=new oC,this._persistenceKey=(r==null?void 0:r.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||ay(this),this._firestoreClient.terminate()}}function aC(t,e){const n=typeof t=="object"?t:em(),s=typeof t=="string"?t:e||"(default)",r=Yl(n,"firestore").getImmediate({identifier:s});if(!r._initialized){const i=Xw("firestore");i&&iC(r,...i)}return r}function $a(t){return t._firestoreClient||ay(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function ay(t){var e,n,s;const r=t._freezeSettings(),i=function(o,a,c,l){return new Bb(o,a,c,l.host,l.ssl,l.experimentalForceLongPolling,l.experimentalAutoDetectLongPolling,l.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,r);t._firestoreClient=new X1(t._authCredentials,t._appCheckCredentials,t._queue,i),!((n=r.cache)===null||n===void 0)&&n._offlineComponentProvider&&(!((s=r.cache)===null||s===void 0)&&s._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:r.cache.kind,_offline:r.cache._offlineComponentProvider,_online:r.cache._onlineComponentProvider})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ar{constructor(e){this._byteString=e}static fromBase64String(e){try{return new ar(pt.fromBase64String(e))}catch(n){throw new V(I.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new ar(pt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ua{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new V(I.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new it(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Va{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zu{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new V(I.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new V(I.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return _e(this._lat,e._lat)||_e(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cC=/^__.*__$/;class lC{constructor(e,n,s){this.data=e,this.fieldMask=n,this.fieldTransforms=s}toMutation(e,n){return this.fieldMask!==null?new Xn(e,this.data,this.fieldMask,n,this.fieldTransforms):new ki(e,this.data,n,this.fieldTransforms)}}class cy{constructor(e,n,s){this.data=e,this.fieldMask=n,this.fieldTransforms=s}toMutation(e,n){return new Xn(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function ly(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw J()}}class Ku{constructor(e,n,s,r,i,o){this.settings=e,this.databaseId=n,this.serializer=s,this.ignoreUndefinedProperties=r,i===void 0&&this.oa(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get ua(){return this.settings.ua}ca(e){return new Ku(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}aa(e){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(e),r=this.ca({path:s,ha:!1});return r.la(e),r}fa(e){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(e),r=this.ca({path:s,ha:!1});return r.oa(),r}da(e){return this.ca({path:void 0,ha:!0})}_a(e){return jo(e,this.settings.methodName,this.settings.wa||!1,this.path,this.settings.ma)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}oa(){if(this.path)for(let e=0;e<this.path.length;e++)this.la(this.path.get(e))}la(e){if(e.length===0)throw this._a("Document fields must not be empty");if(ly(this.ua)&&cC.test(e))throw this._a('Document fields cannot begin and end with "__"')}}class uC{constructor(e,n,s){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=s||Pa(e)}ga(e,n,s,r=!1){return new Ku({ua:e,methodName:n,ma:s,path:it.emptyPath(),ha:!1,wa:r},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Ba(t){const e=t._freezeSettings(),n=Pa(t._databaseId);return new uC(t._databaseId,!!e.ignoreUndefinedProperties,n)}function uy(t,e,n,s,r,i={}){const o=t.ga(i.merge||i.mergeFields?2:0,e,n,r);Gu("Data must be an object, but it was:",o,s);const a=hy(s,o);let c,l;if(i.merge)c=new Tt(o.fieldMask),l=o.fieldTransforms;else if(i.mergeFields){const u=[];for(const h of i.mergeFields){const d=El(e,h,n);if(!o.contains(d))throw new V(I.INVALID_ARGUMENT,`Field '${d}' is specified in your field mask but missing from your input data.`);fy(u,d)||u.push(d)}c=new Tt(u),l=o.fieldTransforms.filter(h=>c.covers(h.field))}else c=null,l=o.fieldTransforms;return new lC(new _t(a),c,l)}class ja extends Va{_toFieldTransform(e){if(e.ua!==2)throw e.ua===1?e._a(`${this._methodName}() can only appear at the top level of your update data`):e._a(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof ja}}class Wu extends Va{_toFieldTransform(e){return new uT(e.path,new li)}isEqual(e){return e instanceof Wu}}function hC(t,e,n,s){const r=t.ga(1,e,n);Gu("Data must be an object, but it was:",r,s);const i=[],o=_t.empty();Is(s,(c,l)=>{const u=Qu(e,c,n);l=Ge(l);const h=r.fa(u);if(l instanceof ja)i.push(u);else{const d=Oi(l,h);d!=null&&(i.push(u),o.set(u,d))}});const a=new Tt(i);return new cy(o,a,r.fieldTransforms)}function dC(t,e,n,s,r,i){const o=t.ga(1,e,n),a=[El(e,s,n)],c=[r];if(i.length%2!=0)throw new V(I.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let d=0;d<i.length;d+=2)a.push(El(e,i[d])),c.push(i[d+1]);const l=[],u=_t.empty();for(let d=a.length-1;d>=0;--d)if(!fy(l,a[d])){const p=a[d];let g=c[d];g=Ge(g);const v=o.fa(p);if(g instanceof ja)l.push(p);else{const b=Oi(g,v);b!=null&&(l.push(p),u.set(p,b))}}const h=new Tt(l);return new cy(u,h,o.fieldTransforms)}function fC(t,e,n,s=!1){return Oi(n,t.ga(s?4:3,e))}function Oi(t,e){if(dy(t=Ge(t)))return Gu("Unsupported field value:",e,t),hy(t,e);if(t instanceof Va)return function(n,s){if(!ly(s.ua))throw s._a(`${n._methodName}() can only be used with update() and set()`);if(!s.path)throw s._a(`${n._methodName}() is not currently supported inside arrays`);const r=n._toFieldTransform(s);r&&s.fieldTransforms.push(r)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.ha&&e.ua!==4)throw e._a("Nested arrays are not supported");return function(n,s){const r=[];let i=0;for(const o of n){let a=Oi(o,s.da(i));a==null&&(a={nullValue:"NULL_VALUE"}),r.push(a),i++}return{arrayValue:{values:r}}}(t,e)}return function(n,s){if((n=Ge(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return aT(s.serializer,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const r=Ke.fromDate(n);return{timestampValue:Uo(s.serializer,r)}}if(n instanceof Ke){const r=new Ke(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:Uo(s.serializer,r)}}if(n instanceof zu)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof ar)return{bytesValue:Lg(s.serializer,n._byteString)};if(n instanceof ht){const r=s.databaseId,i=n.firestore._databaseId;if(!i.isEqual(r))throw s._a(`Document reference is for database ${i.projectId}/${i.database} but should be for database ${r.projectId}/${r.database}`);return{referenceValue:Ru(n.firestore._databaseId||s.databaseId,n._key.path)}}throw s._a(`Unsupported field value: ${La(n)}`)}(t,e)}function hy(t,e){const n={};return lg(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Is(t,(s,r)=>{const i=Oi(r,e.aa(s));i!=null&&(n[s]=i)}),{mapValue:{fields:n}}}function dy(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Ke||t instanceof zu||t instanceof ar||t instanceof ht||t instanceof Va)}function Gu(t,e,n){if(!dy(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const s=La(n);throw s==="an object"?e._a(t+" a custom object"):e._a(t+" "+s)}}function El(t,e,n){if((e=Ge(e))instanceof Ua)return e._internalPath;if(typeof e=="string")return Qu(t,e);throw jo("Field path arguments must be of type string or ",t,!1,void 0,n)}const pC=new RegExp("[~\\*/\\[\\]]");function Qu(t,e,n){if(e.search(pC)>=0)throw jo(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Ua(...e.split("."))._internalPath}catch{throw jo(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function jo(t,e,n,s,r){const i=s&&!s.isEmpty(),o=r!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(i||o)&&(c+=" (found",i&&(c+=` in field ${s}`),o&&(c+=` in document ${r}`),c+=")"),new V(I.INVALID_ARGUMENT,a+t+c)}function fy(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class py{constructor(e,n,s,r,i){this._firestore=e,this._userDataWriter=n,this._key=s,this._document=r,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new ht(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new mC(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(qa("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class mC extends py{data(){return super.data()}}function qa(t,e){return typeof e=="string"?Qu(t,e):e instanceof Ua?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function my(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new V(I.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Yu{}class Xu extends Yu{}function Ju(t,e,...n){let s=[];e instanceof Yu&&s.push(e),s=s.concat(n),function(r){const i=r.filter(a=>a instanceof Zu).length,o=r.filter(a=>a instanceof Ha).length;if(i>1||i>0&&o>0)throw new V(I.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(s);for(const r of s)t=r._apply(t);return t}class Ha extends Xu{constructor(e,n,s){super(),this._field=e,this._op=n,this._value=s,this.type="where"}static _create(e,n,s){return new Ha(e,n,s)}_apply(e){const n=this._parse(e);return yy(e._query,n),new Cn(e.firestore,e.converter,fl(e._query,n))}_parse(e){const n=Ba(e.firestore);return function(r,i,o,a,c,l,u){let h;if(c.isKeyField()){if(l==="array-contains"||l==="array-contains-any")throw new V(I.INVALID_ARGUMENT,`Invalid Query. You can't perform '${l}' queries on documentId().`);if(l==="in"||l==="not-in"){yf(u,l);const d=[];for(const p of u)d.push(gf(a,r,p));h={arrayValue:{values:d}}}else h=gf(a,r,u)}else l!=="in"&&l!=="not-in"&&l!=="array-contains-any"||yf(u,l),h=fC(o,i,u,l==="in"||l==="not-in");return ze.create(c,l,h)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function gy(t,e,n){const s=e,r=qa("where",t);return Ha._create(r,s,n)}class Zu extends Yu{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new Zu(e,n)}_parse(e){const n=this._queryConstraints.map(s=>s._parse(e)).filter(s=>s.getFilters().length>0);return n.length===1?n[0]:Wt.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(s,r){let i=s;const o=r.getFlattenedFilters();for(const a of o)yy(i,a),i=fl(i,a)}(e._query,n),new Cn(e.firestore,e.converter,fl(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class eh extends Xu{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new eh(e,n)}_apply(e){const n=function(s,r,i){if(s.startAt!==null)throw new V(I.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(s.endAt!==null)throw new V(I.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");const o=new qs(r,i);return function(a,c){if(Su(a)===null){const l=xa(a);l!==null&&vy(a,l,c.field)}}(s,o),o}(e._query,this._field,this._direction);return new Cn(e.firestore,e.converter,function(s,r){const i=s.explicitOrderBy.concat([r]);return new gr(s.path,s.collectionGroup,i,s.filters.slice(),s.limit,s.limitType,s.startAt,s.endAt)}(e._query,n))}}function gC(t,e="asc"){const n=e,s=qa("orderBy",t);return eh._create(s,n)}class th extends Xu{constructor(e,n,s){super(),this.type=e,this._limit=n,this._limitType=s}static _create(e,n,s){return new th(e,n,s)}_apply(e){return new Cn(e.firestore,e.converter,Fo(e._query,this._limit,this._limitType))}}function yC(t){return rC("limit",t),th._create("limit",t,"F")}function gf(t,e,n){if(typeof(n=Ge(n))=="string"){if(n==="")throw new V(I.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!vg(e)&&n.indexOf("/")!==-1)throw new V(I.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const s=e.path.child(Ae.fromString(n));if(!z.isDocumentKey(s))throw new V(I.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${s}' is not because it has an odd number of segments (${s.length}).`);return $d(t,new z(s))}if(n instanceof ht)return $d(t,n._key);throw new V(I.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${La(n)}.`)}function yf(t,e){if(!Array.isArray(t)||t.length===0)throw new V(I.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function yy(t,e){if(e.isInequality()){const s=xa(t),r=e.field;if(s!==null&&!s.isEqual(r))throw new V(I.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${s.toString()}' and '${r.toString()}'`);const i=Su(t);i!==null&&vy(t,r,i)}const n=function(s,r){for(const i of s)for(const o of i.getFlattenedFilters())if(r.indexOf(o.op)>=0)return o.op;return null}(t.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new V(I.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new V(I.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}function vy(t,e,n){if(!n.isEqual(e))throw new V(I.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${e.toString()}' and so you must also use '${e.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}class vC{convertValue(e,n="none"){switch(vs(e)){case 0:return null;case 1:return e.booleanValue;case 2:return He(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(ys(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw J()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const s={};return Is(e,(r,i)=>{s[r]=this.convertValue(i,n)}),s}convertGeoPoint(e){return new zu(He(e.latitude),He(e.longitude))}convertArray(e,n){return(e.values||[]).map(s=>this.convertValue(s,n))}convertServerTimestamp(e,n){switch(n){case"previous":const s=Iu(e);return s==null?null:this.convertValue(s,n);case"estimate":return this.convertTimestamp(oi(e));default:return null}}convertTimestamp(e){const n=Kn(e);return new Ke(n.seconds,n.nanos)}convertDocumentKey(e,n){const s=Ae.fromString(e);ke(Bg(s));const r=new ai(s.get(1),s.get(3)),i=new z(s.popFirst(5));return r.isEqual(n)||_n(`Document ${i} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _y(t,e,n){let s;return s=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mr{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class wy extends py{constructor(e,n,s,r,i,o){super(e,n,s,r,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new uo(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const s=this._document.data.field(qa("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,n.serverTimestamps)}}}class uo extends wy{data(e={}){return super.data(e)}}class Ey{constructor(e,n,s,r){this._firestore=e,this._userDataWriter=n,this._snapshot=r,this.metadata=new Mr(r.hasPendingWrites,r.fromCache),this.query=s}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(s=>{e.call(n,new uo(this._firestore,this._userDataWriter,s.key,s,new Mr(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new V(I.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,r){if(s._snapshot.oldDocs.isEmpty()){let i=0;return s._snapshot.docChanges.map(o=>{const a=new uo(s._firestore,s._userDataWriter,o.doc.key,o.doc,new Mr(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter);return o.doc,{type:"added",doc:a,oldIndex:-1,newIndex:i++}})}{let i=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(o=>r||o.type!==3).map(o=>{const a=new uo(s._firestore,s._userDataWriter,o.doc.key,o.doc,new Mr(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter);let c=-1,l=-1;return o.type!==0&&(c=i.indexOf(o.doc.key),i=i.delete(o.doc.key)),o.type!==1&&(i=i.add(o.doc),l=i.indexOf(o.doc.key)),{type:_C(o.type),doc:a,oldIndex:c,newIndex:l}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function _C(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return J()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Iy(t){t=Ct(t,ht);const e=Ct(t.firestore,Gn);return tC($a(e),t._key).then(n=>by(e,t,n))}class nh extends vC{constructor(e){super(),this.firestore=e}convertBytes(e){return new ar(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new ht(this.firestore,null,n)}}function za(t){t=Ct(t,Cn);const e=Ct(t.firestore,Gn),n=$a(e),s=new nh(e);return my(t._query),nC(n,t._query).then(r=>new Ey(e,s,t,r))}function wC(t,e,n){t=Ct(t,ht);const s=Ct(t.firestore,Gn),r=_y(t.converter,e,n);return rh(s,[uy(Ba(s),"setDoc",t._key,r,t.converter!==null,n).toMutation(t._key,qt.none())])}function EC(t,e,n,...s){t=Ct(t,ht);const r=Ct(t.firestore,Gn),i=Ba(r);let o;return o=typeof(e=Ge(e))=="string"||e instanceof Ua?dC(i,"updateDoc",t._key,e,n,s):hC(i,"updateDoc",t._key,e),rh(r,[o.toMutation(t._key,qt.exists(!0))])}function sh(t,e){const n=Ct(t.firestore,Gn),s=Pi(t),r=_y(t.converter,e);return rh(n,[uy(Ba(t.firestore),"addDoc",s._key,r,t.converter!==null,{}).toMutation(s._key,qt.exists(!1))]).then(()=>s)}function IC(t,...e){var n,s,r;t=Ge(t);let i={includeMetadataChanges:!1},o=0;typeof e[o]!="object"||mf(e[o])||(i=e[o],o++);const a={includeMetadataChanges:i.includeMetadataChanges};if(mf(e[o])){const h=e[o];e[o]=(n=h.next)===null||n===void 0?void 0:n.bind(h),e[o+1]=(s=h.error)===null||s===void 0?void 0:s.bind(h),e[o+2]=(r=h.complete)===null||r===void 0?void 0:r.bind(h)}let c,l,u;if(t instanceof ht)l=Ct(t.firestore,Gn),u=Sa(t._key.path),c={next:h=>{e[o]&&e[o](by(l,t,h))},error:e[o+1],complete:e[o+2]};else{const h=Ct(t,Cn);l=Ct(h.firestore,Gn),u=h._query;const d=new nh(l);c={next:p=>{e[o]&&e[o](new Ey(l,d,h,p))},error:e[o+1],complete:e[o+2]},my(t._query)}return function(h,d,p,g){const v=new Hu(g),b=new ju(d,v,p);return h.asyncQueue.enqueueAndForget(async()=>Uu(await Bo(h),b)),()=>{v.Sc(),h.asyncQueue.enqueueAndForget(async()=>Vu(await Bo(h),b))}}($a(l),u,a,c)}function rh(t,e){return function(n,s){const r=new gn;return n.asyncQueue.enqueueAndForget(async()=>B1(await eC(n),s,r)),r.promise}($a(t),e)}function by(t,e,n){const s=n.docs.get(e._key),r=new nh(t);return new wy(t,r,e._key,s,new Mr(n.hasPendingWrites,n.fromCache),e.converter)}function bC(){return new Wu("serverTimestamp")}(function(t,e=!0){(function(n){mr=n})(dr),Zs(new ps("firestore",(n,{instanceIdentifier:s,options:r})=>{const i=n.getProvider("app").getImmediate(),o=new Gn(new xb(n.getProvider("auth-internal")),new Nb(n.getProvider("app-check-internal")),function(a,c){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new V(I.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new ai(a.options.projectId,c)}(i,s),i);return r=Object.assign({useFetchStreams:e},r),o._setSettings(r),o},"PUBLIC").setMultipleInstances(!0)),Bn(Pd,"3.11.0",t),Bn(Pd,"3.11.0","esm2017")})();function ih(t,e){var n={};for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&e.indexOf(s)<0&&(n[s]=t[s]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,s=Object.getOwnPropertySymbols(t);r<s.length;r++)e.indexOf(s[r])<0&&Object.prototype.propertyIsEnumerable.call(t,s[r])&&(n[s[r]]=t[s[r]]);return n}function Ty(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const TC=Ty,Cy=new gi("auth","Firebase",Ty());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qo=new Gl("@firebase/auth");function CC(t,...e){qo.logLevel<=ye.WARN&&qo.warn(`Auth (${dr}): ${t}`,...e)}function ho(t,...e){qo.logLevel<=ye.ERROR&&qo.error(`Auth (${dr}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gt(t,...e){throw oh(t,...e)}function sn(t,...e){return oh(t,...e)}function SC(t,e,n){const s=Object.assign(Object.assign({},TC()),{[e]:n});return new gi("auth","Firebase",s).create(e,{appName:t.name})}function oh(t,...e){if(typeof t!="string"){const n=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=t.name),t._errorFactory.create(n,...s)}return Cy.create(t,...e)}function X(t,e,...n){if(!t)throw oh(e,...n)}function pn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw ho(e),new Error(e)}function In(t,e){t||pn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Il(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function xC(){return vf()==="http:"||vf()==="https:"}function vf(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function AC(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(xC()||nE()||"connection"in navigator)?navigator.onLine:!0}function kC(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mi{constructor(e,n){this.shortDelay=e,this.longDelay=n,In(n>e,"Short delay should be less than long delay!"),this.isMobile=tE()||sE()}get(){return AC()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ah(t,e){In(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sy{static initialize(e,n,s){this.fetchImpl=e,n&&(this.headersImpl=n),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;pn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;pn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;pn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const RC={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const NC=new Mi(3e4,6e4);function _r(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function wr(t,e,n,s,r={}){return xy(t,r,async()=>{let i={},o={};s&&(e==="GET"?o=s:i={body:JSON.stringify(s)});const a=yi(Object.assign({key:t.config.apiKey},o)).slice(1),c=await t._getAdditionalHeaders();return c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode),Sy.fetch()(Ay(t,t.config.apiHost,n,a),Object.assign({method:e,headers:c,referrerPolicy:"no-referrer"},i))})}async function xy(t,e,n){t._canInitEmulator=!1;const s=Object.assign(Object.assign({},RC),e);try{const r=new DC(t),i=await Promise.race([n(),r.promise]);r.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw no(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[c,l]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw no(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw no(t,"email-already-in-use",o);if(c==="USER_DISABLED")throw no(t,"user-disabled",o);const u=s[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw SC(t,u,l);Gt(t,u)}}catch(r){if(r instanceof Tn)throw r;Gt(t,"network-request-failed",{message:String(r)})}}async function Li(t,e,n,s,r={}){const i=await wr(t,e,n,s,r);return"mfaPendingCredential"in i&&Gt(t,"multi-factor-auth-required",{_serverResponse:i}),i}function Ay(t,e,n,s){const r=`${e}${n}?${s}`;return t.config.emulator?ah(t.config,r):`${t.config.apiScheme}://${r}`}class DC{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,s)=>{this.timer=setTimeout(()=>s(sn(this.auth,"network-request-failed")),NC.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function no(t,e,n){const s={appName:t.name};n.email&&(s.email=n.email),n.phoneNumber&&(s.phoneNumber=n.phoneNumber);const r=sn(t,e,s);return r.customData._tokenResponse=n,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function PC(t,e){return wr(t,"POST","/v1/accounts:delete",e)}async function OC(t,e){return wr(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zr(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function MC(t,e=!1){const n=Ge(t),s=await n.getIdToken(e),r=ch(s);X(r&&r.exp&&r.auth_time&&r.iat,n.auth,"internal-error");const i=typeof r.firebase=="object"?r.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:r,token:s,authTime:zr(Tc(r.auth_time)),issuedAtTime:zr(Tc(r.iat)),expirationTime:zr(Tc(r.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function Tc(t){return Number(t)*1e3}function ch(t){const[e,n,s]=t.split(".");if(e===void 0||n===void 0||s===void 0)return ho("JWT malformed, contained fewer than 3 sections"),null;try{const r=Gp(n);return r?JSON.parse(r):(ho("Failed to decode base64 JWT payload"),null)}catch(r){return ho("Caught error parsing JWT payload as JSON",r==null?void 0:r.toString()),null}}function LC(t){const e=ch(t);return X(e,"internal-error"),X(typeof e.exp<"u","internal-error"),X(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function di(t,e,n=!1){if(n)return e;try{return await e}catch(s){throw s instanceof Tn&&FC(s)&&t.auth.currentUser===t&&await t.auth.signOut(),s}}function FC({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $C{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const r=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ky{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=zr(this.lastLoginAt),this.creationTime=zr(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ho(t){var e;const n=t.auth,s=await t.getIdToken(),r=await di(t,OC(n,{idToken:s}));X(r==null?void 0:r.users.length,n,"internal-error");const i=r.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?BC(i.providerUserInfo):[],a=VC(t.providerData,o),c=t.isAnonymous,l=!(t.email&&i.passwordHash)&&!(a!=null&&a.length),u=c?l:!1,h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new ky(i.createdAt,i.lastLoginAt),isAnonymous:u};Object.assign(t,h)}async function UC(t){const e=Ge(t);await Ho(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function VC(t,e){return[...t.filter(s=>!e.some(r=>r.providerId===s.providerId)),...e]}function BC(t){return t.map(e=>{var{providerId:n}=e,s=ih(e,["providerId"]);return{providerId:n,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function jC(t,e){const n=await xy(t,{},async()=>{const s=yi({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:r,apiKey:i}=t.config,o=Ay(t,r,"/v1/token",`key=${i}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",Sy.fetch()(o,{method:"POST",headers:a,body:s})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fi{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){X(e.idToken,"internal-error"),X(typeof e.idToken<"u","internal-error"),X(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):LC(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return X(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:s,refreshToken:r,expiresIn:i}=await jC(e,n);this.updateTokensAndExpiration(s,r,Number(i))}updateTokensAndExpiration(e,n,s){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,n){const{refreshToken:s,accessToken:r,expirationTime:i}=n,o=new fi;return s&&(X(typeof s=="string","internal-error",{appName:e}),o.refreshToken=s),r&&(X(typeof r=="string","internal-error",{appName:e}),o.accessToken=r),i&&(X(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new fi,this.toJSON())}_performRefresh(){return pn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function An(t,e){X(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class fs{constructor(e){var{uid:n,auth:s,stsTokenManager:r}=e,i=ih(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new $C(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=s,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new ky(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await di(this,this.stsTokenManager.getToken(this.auth,e));return X(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return MC(this,e)}reload(){return UC(this)}_assign(e){this!==e&&(X(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new fs(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){X(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),n&&await Ho(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await di(this,PC(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var s,r,i,o,a,c,l,u;const h=(s=n.displayName)!==null&&s!==void 0?s:void 0,d=(r=n.email)!==null&&r!==void 0?r:void 0,p=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,g=(o=n.photoURL)!==null&&o!==void 0?o:void 0,v=(a=n.tenantId)!==null&&a!==void 0?a:void 0,b=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,w=(l=n.createdAt)!==null&&l!==void 0?l:void 0,O=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:S,emailVerified:Q,isAnonymous:oe,providerData:Ce,stsTokenManager:Re}=n;X(S&&Re,e,"internal-error");const Y=fi.fromJSON(this.name,Re);X(typeof S=="string",e,"internal-error"),An(h,e.name),An(d,e.name),X(typeof Q=="boolean",e,"internal-error"),X(typeof oe=="boolean",e,"internal-error"),An(p,e.name),An(g,e.name),An(v,e.name),An(b,e.name),An(w,e.name),An(O,e.name);const ge=new fs({uid:S,auth:e,email:d,emailVerified:Q,displayName:h,isAnonymous:oe,photoURL:g,phoneNumber:p,tenantId:v,stsTokenManager:Y,createdAt:w,lastLoginAt:O});return Ce&&Array.isArray(Ce)&&(ge.providerData=Ce.map(fe=>Object.assign({},fe))),b&&(ge._redirectEventId=b),ge}static async _fromIdTokenResponse(e,n,s=!1){const r=new fi;r.updateFromServerResponse(n);const i=new fs({uid:n.localId,auth:e,stsTokenManager:r,isAnonymous:s});return await Ho(i),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _f=new Map;function mn(t){In(t instanceof Function,"Expected a class definition");let e=_f.get(t);return e?(In(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,_f.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ry{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Ry.type="NONE";const wf=Ry;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fo(t,e,n){return`firebase:${t}:${e}:${n}`}class Ks{constructor(e,n,s){this.persistence=e,this.auth=n,this.userKey=s;const{config:r,name:i}=this.auth;this.fullUserKey=fo(this.userKey,r.apiKey,i),this.fullPersistenceKey=fo("persistence",r.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?fs._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,s="authUser"){if(!n.length)return new Ks(mn(wf),e,s);const r=(await Promise.all(n.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let i=r[0]||mn(wf);const o=fo(s,e.config.apiKey,e.name);let a=null;for(const l of n)try{const u=await l._get(o);if(u){const h=fs._fromJSON(e,u);l!==i&&(a=h),i=l;break}}catch{}const c=r.filter(l=>l._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new Ks(i,e,s):(i=c[0],a&&await i._set(o,a.toJSON()),await Promise.all(n.map(async l=>{if(l!==i)try{await l._remove(o)}catch{}})),new Ks(i,e,s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ef(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Py(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Ny(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(My(e))return"Blackberry";if(Ly(e))return"Webos";if(lh(e))return"Safari";if((e.includes("chrome/")||Dy(e))&&!e.includes("edge/"))return"Chrome";if(Oy(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=t.match(n);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function Ny(t=ft()){return/firefox\//i.test(t)}function lh(t=ft()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Dy(t=ft()){return/crios\//i.test(t)}function Py(t=ft()){return/iemobile/i.test(t)}function Oy(t=ft()){return/android/i.test(t)}function My(t=ft()){return/blackberry/i.test(t)}function Ly(t=ft()){return/webos/i.test(t)}function Ka(t=ft()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function qC(t=ft()){var e;return Ka(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function HC(){return rE()&&document.documentMode===10}function Fy(t=ft()){return Ka(t)||Oy(t)||Ly(t)||My(t)||/windows phone/i.test(t)||Py(t)}function zC(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $y(t,e=[]){let n;switch(t){case"Browser":n=Ef(ft());break;case"Worker":n=`${Ef(ft())}-${t}`;break;default:n=t}const s=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${dr}/${s}`}async function Uy(t,e){return wr(t,"GET","/v2/recaptchaConfig",_r(t,e))}function If(t){return t!==void 0&&t.enterprise!==void 0}class Vy{constructor(e){if(this.siteKey="",this.emailPasswordEnabled=!1,e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.emailPasswordEnabled=e.recaptchaEnforcementState.some(n=>n.provider==="EMAIL_PASSWORD_PROVIDER"&&n.enforcementState!=="OFF")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function KC(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function By(t){return new Promise((e,n)=>{const s=document.createElement("script");s.setAttribute("src",t),s.onload=e,s.onerror=r=>{const i=sn("internal-error");i.customData=r,n(i)},s.type="text/javascript",s.charset="UTF-8",KC().appendChild(s)})}function WC(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const GC="https://www.google.com/recaptcha/enterprise.js?render=",QC="recaptcha-enterprise",YC="NO_RECAPTCHA";class jy{constructor(e){this.type=QC,this.auth=Er(e)}async verify(e="verify",n=!1){async function s(i){if(!n){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,a)=>{Uy(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(c=>{if(c.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const l=new Vy(c);return i.tenantId==null?i._agentRecaptchaConfig=l:i._tenantRecaptchaConfigs[i.tenantId]=l,o(l.siteKey)}}).catch(c=>{a(c)})})}function r(i,o,a){const c=window.grecaptcha;If(c)?c.enterprise.ready(()=>{c.enterprise.execute(i,{action:e}).then(l=>{o(l)}).catch(()=>{o(YC)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((i,o)=>{s(this.auth).then(a=>{if(!n&&If(window.grecaptcha))r(a,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}By(GC+a).then(()=>{r(a,i,o)}).catch(c=>{o(c)})}}).catch(a=>{o(a)})})}}async function zo(t,e,n,s=!1){const r=new jy(t);let i;try{i=await r.verify(n)}catch{i=await r.verify(n,!0)}const o=Object.assign({},e);return s?Object.assign(o,{captchaResp:i}):Object.assign(o,{captchaResponse:i}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XC{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const s=i=>new Promise((o,a)=>{try{const c=e(i);o(c)}catch(c){a(c)}});s.onAbort=n,this.queue.push(s);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const s of this.queue)await s(e),s.onAbort&&n.push(s.onAbort)}catch(s){n.reverse();for(const r of n)try{r()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JC{constructor(e,n,s,r){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=s,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new bf(this),this.idTokenSubscription=new bf(this),this.beforeStateQueue=new XC(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Cy,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=mn(n)),this._initializationPromise=this.queue(async()=>{var s,r;if(!this._deleted&&(this.persistenceManager=await Ks.create(this,e),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((r=this.currentUser)===null||r===void 0?void 0:r.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const s=await this.assertedPersistence.getCurrentUser();let r=s,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=r==null?void 0:r._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===a)&&(c!=null&&c.user)&&(r=c.user,i=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(r)}catch(o){r=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return X(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Ho(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=kC()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?Ge(e):null;return n&&X(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&X(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(mn(e))})}async initializeRecaptchaConfig(){const e=await Uy(this,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),n=new Vy(e);this.tenantId==null?this._agentRecaptchaConfig=n:this._tenantRecaptchaConfigs[this.tenantId]=n,n.emailPasswordEnabled&&new jy(this).verify()}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new gi("auth","Firebase",e())}onAuthStateChanged(e,n,s){return this.registerStateListener(this.authStateSubscription,e,n,s)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,s){return this.registerStateListener(this.idTokenSubscription,e,n,s)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const s=await this.getOrInitRedirectPersistenceManager(n);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&mn(e)||this._popupRedirectResolver;X(n,this,"argument-error"),this.redirectPersistenceManager=await Ks.create(this,[mn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,s;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,s,r){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return X(o,this,"internal-error"),o.then(()=>i(this.currentUser)),typeof n=="function"?e.addObserver(n,s,r):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return X(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=$y(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const s=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());s&&(n["X-Firebase-Client"]=s);const r=await this._getAppCheckToken();return r&&(n["X-Firebase-AppCheck"]=r),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&CC(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Er(t){return Ge(t)}class bf{constructor(e){this.auth=e,this.observer=null,this.addObserver=hE(n=>this.observer=n)}get next(){return X(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ZC(t,e){const n=Yl(t,"auth");if(n.isInitialized()){const r=n.getImmediate(),i=n.getOptions();if(bo(i,e??{}))return r;Gt(r,"already-initialized")}return n.initialize({options:e})}function eS(t,e){const n=(e==null?void 0:e.persistence)||[],s=(Array.isArray(n)?n:[n]).map(mn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}function tS(t,e,n){const s=Er(t);X(s._canInitEmulator,s,"emulator-config-failed"),X(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const r=!!(n!=null&&n.disableWarnings),i=qy(e),{host:o,port:a}=nS(e),c=a===null?"":`:${a}`;s.config.emulator={url:`${i}//${o}${c}/`},s.settings.appVerificationDisabledForTesting=!0,s.emulatorConfig=Object.freeze({host:o,port:a,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:r})}),r||sS()}function qy(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function nS(t){const e=qy(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const s=n[2].split("@").pop()||"",r=/^(\[[^\]]+\])(:|$)/.exec(s);if(r){const i=r[1];return{host:i,port:Tf(s.substr(i.length+1))}}else{const[i,o]=s.split(":");return{host:i,port:Tf(o)}}}function Tf(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function sS(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uh{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return pn("not implemented")}_getIdTokenResponse(e){return pn("not implemented")}_linkToIdToken(e,n){return pn("not implemented")}_getReauthenticationResolver(e){return pn("not implemented")}}async function rS(t,e){return wr(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Cc(t,e){return Li(t,"POST","/v1/accounts:signInWithPassword",_r(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function iS(t,e){return Li(t,"POST","/v1/accounts:signInWithEmailLink",_r(t,e))}async function oS(t,e){return Li(t,"POST","/v1/accounts:signInWithEmailLink",_r(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pi extends uh{constructor(e,n,s,r=null){super("password",s),this._email=e,this._password=n,this._tenantId=r}static _fromEmailAndPassword(e,n){return new pi(e,n,"password")}static _fromEmailAndCode(e,n,s=null){return new pi(e,n,"emailLink",s)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){var n;switch(this.signInMethod){case"password":const s={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};if(!((n=e._getRecaptchaConfig())===null||n===void 0)&&n.emailPasswordEnabled){const r=await zo(e,s,"signInWithPassword");return Cc(e,r)}else return Cc(e,s).catch(async r=>{if(r.code==="auth/missing-recaptcha-token"){console.log("Sign-in with email address and password is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");const i=await zo(e,s,"signInWithPassword");return Cc(e,i)}else return Promise.reject(r)});case"emailLink":return iS(e,{email:this._email,oobCode:this._password});default:Gt(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":return rS(e,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return oS(e,{idToken:n,email:this._email,oobCode:this._password});default:Gt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ws(t,e){return Li(t,"POST","/v1/accounts:signInWithIdp",_r(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aS="http://localhost";class _s extends uh{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new _s(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Gt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:r}=n,i=ih(n,["providerId","signInMethod"]);if(!s||!r)return null;const o=new _s(s,r);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Ws(e,n)}_linkToIdToken(e,n){const s=this.buildRequest();return s.idToken=n,Ws(e,s)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Ws(e,n)}buildRequest(){const e={requestUri:aS,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=yi(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cS(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function lS(t){const e=kr(Rr(t)).link,n=e?kr(Rr(e)).deep_link_id:null,s=kr(Rr(t)).deep_link_id;return(s?kr(Rr(s)).link:null)||s||n||e||t}class hh{constructor(e){var n,s,r,i,o,a;const c=kr(Rr(e)),l=(n=c.apiKey)!==null&&n!==void 0?n:null,u=(s=c.oobCode)!==null&&s!==void 0?s:null,h=cS((r=c.mode)!==null&&r!==void 0?r:null);X(l&&u&&h,"argument-error"),this.apiKey=l,this.operation=h,this.code=u,this.continueUrl=(i=c.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=c.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=c.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=lS(e);try{return new hh(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ir{constructor(){this.providerId=Ir.PROVIDER_ID}static credential(e,n){return pi._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const s=hh.parseLink(n);return X(s,"argument-error"),pi._fromEmailAndCode(e,s.code,s.tenantId)}}Ir.PROVIDER_ID="password";Ir.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Ir.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hy{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fi extends Hy{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nn extends Fi{constructor(){super("facebook.com")}static credential(e){return _s._fromParams({providerId:Nn.PROVIDER_ID,signInMethod:Nn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Nn.credentialFromTaggedObject(e)}static credentialFromError(e){return Nn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Nn.credential(e.oauthAccessToken)}catch{return null}}}Nn.FACEBOOK_SIGN_IN_METHOD="facebook.com";Nn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dn extends Fi{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return _s._fromParams({providerId:Dn.PROVIDER_ID,signInMethod:Dn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Dn.credentialFromTaggedObject(e)}static credentialFromError(e){return Dn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:s}=e;if(!n&&!s)return null;try{return Dn.credential(n,s)}catch{return null}}}Dn.GOOGLE_SIGN_IN_METHOD="google.com";Dn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pn extends Fi{constructor(){super("github.com")}static credential(e){return _s._fromParams({providerId:Pn.PROVIDER_ID,signInMethod:Pn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Pn.credentialFromTaggedObject(e)}static credentialFromError(e){return Pn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Pn.credential(e.oauthAccessToken)}catch{return null}}}Pn.GITHUB_SIGN_IN_METHOD="github.com";Pn.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class On extends Fi{constructor(){super("twitter.com")}static credential(e,n){return _s._fromParams({providerId:On.PROVIDER_ID,signInMethod:On.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return On.credentialFromTaggedObject(e)}static credentialFromError(e){return On.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:s}=e;if(!n||!s)return null;try{return On.credential(n,s)}catch{return null}}}On.TWITTER_SIGN_IN_METHOD="twitter.com";On.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Sc(t,e){return Li(t,"POST","/v1/accounts:signUp",_r(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ws{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,s,r=!1){const i=await fs._fromIdTokenResponse(e,s,r),o=Cf(s);return new ws({user:i,providerId:o,_tokenResponse:s,operationType:n})}static async _forOperation(e,n,s){await e._updateTokensIfNecessary(s,!0);const r=Cf(s);return new ws({user:e,providerId:r,_tokenResponse:s,operationType:n})}}function Cf(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ko extends Tn{constructor(e,n,s,r){var i;super(n.code,n.message),this.operationType=s,this.user=r,Object.setPrototypeOf(this,Ko.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,n,s,r){return new Ko(e,n,s,r)}}function zy(t,e,n,s){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Ko._fromErrorAndOperation(t,i,e,s):i})}async function uS(t,e,n=!1){const s=await di(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return ws._forOperation(t,"link",s)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function hS(t,e,n=!1){const{auth:s}=t,r="reauthenticate";try{const i=await di(t,zy(s,r,e,t),n);X(i.idToken,s,"internal-error");const o=ch(i.idToken);X(o,s,"internal-error");const{sub:a}=o;return X(t.uid===a,s,"user-mismatch"),ws._forOperation(t,r,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&Gt(s,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ky(t,e,n=!1){const s="signIn",r=await zy(t,s,e),i=await ws._fromIdTokenResponse(t,s,r);return n||await t._updateCurrentUser(i.user),i}async function dS(t,e){return Ky(Er(t),e)}async function fS(t,e,n){var s;const r=Er(t),i={returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"};let o;if(!((s=r._getRecaptchaConfig())===null||s===void 0)&&s.emailPasswordEnabled){const l=await zo(r,i,"signUpPassword");o=Sc(r,l)}else o=Sc(r,i).catch(async l=>{if(l.code==="auth/missing-recaptcha-token"){console.log("Sign-up is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-up flow.");const u=await zo(r,i,"signUpPassword");return Sc(r,u)}else return Promise.reject(l)});const a=await o.catch(l=>Promise.reject(l)),c=await ws._fromIdTokenResponse(r,"signIn",a);return await r._updateCurrentUser(c.user),c}function pS(t,e,n){return dS(Ge(t),Ir.credential(e,n))}function mS(t,e,n,s){return Ge(t).onIdTokenChanged(e,n,s)}function gS(t,e,n){return Ge(t).beforeAuthStateChanged(e,n)}function yS(t,e,n,s){return Ge(t).onAuthStateChanged(e,n,s)}function vS(t){return Ge(t).signOut()}const Wo="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wy{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Wo,"1"),this.storage.removeItem(Wo),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _S(){const t=ft();return lh(t)||Ka(t)}const wS=1e3,ES=10;class Gy extends Wy{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=_S()&&zC(),this.fallbackToPolling=Fy(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const s=this.storage.getItem(n),r=this.localCache[n];s!==r&&e(n,r,s)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const s=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(s);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(s,e.newValue):this.storage.removeItem(s);else if(this.localCache[s]===e.newValue&&!n)return}const r=()=>{const o=this.storage.getItem(s);!n&&this.localCache[s]===o||this.notifyListeners(s,o)},i=this.storage.getItem(s);HC()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,ES):r()}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const r of Array.from(s))r(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:s}),!0)})},wS)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Gy.type="LOCAL";const IS=Gy;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qy extends Wy{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Qy.type="SESSION";const Yy=Qy;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bS(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wa{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(r=>r.isListeningto(e));if(n)return n;const s=new Wa(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:s,eventType:r,data:i}=n.data,o=this.handlersMap[r];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:s,eventType:r});const a=Array.from(o).map(async l=>l(n.origin,i)),c=await bS(a);n.ports[0].postMessage({status:"done",eventId:s,eventType:r,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Wa.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dh(t="",e=10){let n="";for(let s=0;s<e;s++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TS{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,s=50){const r=typeof MessageChannel<"u"?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let i,o;return new Promise((a,c)=>{const l=dh("",20);r.port1.start();const u=setTimeout(()=>{c(new Error("unsupported_event"))},s);o={messageChannel:r,onMessage(h){const d=h;if(d.data.eventId===l)switch(d.data.status){case"ack":clearTimeout(u),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(d.data.response);break;default:clearTimeout(u),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(o),r.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:l,data:n},[r.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rn(){return window}function CS(t){rn().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xy(){return typeof rn().WorkerGlobalScope<"u"&&typeof rn().importScripts=="function"}async function SS(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function xS(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function AS(){return Xy()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jy="firebaseLocalStorageDb",kS=1,Go="firebaseLocalStorage",Zy="fbase_key";class $i{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Ga(t,e){return t.transaction([Go],e?"readwrite":"readonly").objectStore(Go)}function RS(){const t=indexedDB.deleteDatabase(Jy);return new $i(t).toPromise()}function bl(){const t=indexedDB.open(Jy,kS);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const s=t.result;try{s.createObjectStore(Go,{keyPath:Zy})}catch(r){n(r)}}),t.addEventListener("success",async()=>{const s=t.result;s.objectStoreNames.contains(Go)?e(s):(s.close(),await RS(),e(await bl()))})})}async function Sf(t,e,n){const s=Ga(t,!0).put({[Zy]:e,value:n});return new $i(s).toPromise()}async function NS(t,e){const n=Ga(t,!1).get(e),s=await new $i(n).toPromise();return s===void 0?null:s.value}function xf(t,e){const n=Ga(t,!0).delete(e);return new $i(n).toPromise()}const DS=800,PS=3;class ev{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await bl(),this.db)}async _withRetries(e){let n=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(n++>PS)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Xy()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Wa._getInstance(AS()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await SS(),!this.activeServiceWorker)return;this.sender=new TS(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);s&&!((e=s[0])===null||e===void 0)&&e.fulfilled&&!((n=s[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||xS()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await bl();return await Sf(e,Wo,"1"),await xf(e,Wo),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(s=>Sf(s,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(s=>NS(s,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>xf(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(r=>{const i=Ga(r,!1).getAll();return new $i(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],s=new Set;for(const{fbase_key:r,value:i}of e)s.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(i)&&(this.notifyListeners(r,i),n.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!s.has(r)&&(this.notifyListeners(r,null),n.push(r));return n}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const r of Array.from(s))r(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),DS)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}ev.type="LOCAL";const OS=ev;new Mi(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function MS(t,e){return e?mn(e):(X(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fh extends uh{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Ws(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Ws(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Ws(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function LS(t){return Ky(t.auth,new fh(t),t.bypassAuthState)}function FS(t){const{auth:e,user:n}=t;return X(n,e,"internal-error"),hS(n,new fh(t),t.bypassAuthState)}async function $S(t){const{auth:e,user:n}=t;return X(n,e,"internal-error"),uS(n,new fh(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tv{constructor(e,n,s,r,i=!1){this.auth=e,this.resolver=s,this.user=r,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:s,postBody:r,tenantId:i,error:o,type:a}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:s,tenantId:i||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(l){this.reject(l)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return LS;case"linkViaPopup":case"linkViaRedirect":return $S;case"reauthViaPopup":case"reauthViaRedirect":return FS;default:Gt(this.auth,"internal-error")}}resolve(e){In(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){In(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const US=new Mi(2e3,1e4);class Ms extends tv{constructor(e,n,s,r,i){super(e,n,r,i),this.provider=s,this.authWindow=null,this.pollId=null,Ms.currentPopupAction&&Ms.currentPopupAction.cancel(),Ms.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return X(e,this.auth,"internal-error"),e}async onExecution(){In(this.filter.length===1,"Popup operations only handle one event");const e=dh();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(sn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(sn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Ms.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,s;if(!((s=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(sn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,US.get())};e()}}Ms.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const VS="pendingRedirect",po=new Map;class BS extends tv{constructor(e,n,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,s),this.eventId=null}async execute(){let e=po.get(this.auth._key());if(!e){try{const s=await jS(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(n){e=()=>Promise.reject(n)}po.set(this.auth._key(),e)}return this.bypassAuthState||po.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function jS(t,e){const n=zS(e),s=HS(t);if(!await s._isAvailable())return!1;const r=await s._get(n)==="true";return await s._remove(n),r}function qS(t,e){po.set(t._key(),e)}function HS(t){return mn(t._redirectPersistence)}function zS(t){return fo(VS,t.config.apiKey,t.name)}async function KS(t,e,n=!1){const s=Er(t),r=MS(s,e),o=await new BS(s,r,n).execute();return o&&!n&&(delete o.user._redirectEventId,await s._persistUserIfCurrent(o.user),await s._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const WS=10*60*1e3;class GS{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(n=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!QS(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var s;if(e.error&&!nv(e)){const r=((s=e.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";n.onError(sn(this.auth,r))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const s=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=WS&&this.cachedEventUids.clear(),this.cachedEventUids.has(Af(e))}saveEventToCache(e){this.cachedEventUids.add(Af(e)),this.lastProcessedEventTime=Date.now()}}function Af(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function nv({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function QS(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return nv(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function YS(t,e={}){return wr(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const XS=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,JS=/^https?/;async function ZS(t){if(t.config.emulator)return;const{authorizedDomains:e}=await YS(t);for(const n of e)try{if(ex(n))return}catch{}Gt(t,"unauthorized-domain")}function ex(t){const e=Il(),{protocol:n,hostname:s}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&s===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===s}if(!JS.test(n))return!1;if(XS.test(t))return s===t;const r=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+r+"|"+r+")$","i").test(s)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tx=new Mi(3e4,6e4);function kf(){const t=rn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function nx(t){return new Promise((e,n)=>{var s,r,i;function o(){kf(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{kf(),n(sn(t,"network-request-failed"))},timeout:tx.get()})}if(!((r=(s=rn().gapi)===null||s===void 0?void 0:s.iframes)===null||r===void 0)&&r.Iframe)e(gapi.iframes.getContext());else if(!((i=rn().gapi)===null||i===void 0)&&i.load)o();else{const a=WC("iframefcb");return rn()[a]=()=>{gapi.load?o():n(sn(t,"network-request-failed"))},By(`https://apis.google.com/js/api.js?onload=${a}`).catch(c=>n(c))}}).catch(e=>{throw mo=null,e})}let mo=null;function sx(t){return mo=mo||nx(t),mo}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rx=new Mi(5e3,15e3),ix="__/auth/iframe",ox="emulator/auth/iframe",ax={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},cx=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function lx(t){const e=t.config;X(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?ah(e,ox):`https://${t.config.authDomain}/${ix}`,s={apiKey:e.apiKey,appName:t.name,v:dr},r=cx.get(t.config.apiHost);r&&(s.eid=r);const i=t._getFrameworks();return i.length&&(s.fw=i.join(",")),`${n}?${yi(s).slice(1)}`}async function ux(t){const e=await sx(t),n=rn().gapi;return X(n,t,"internal-error"),e.open({where:document.body,url:lx(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:ax,dontclear:!0},s=>new Promise(async(r,i)=>{await s.restyle({setHideOnLeave:!1});const o=sn(t,"network-request-failed"),a=rn().setTimeout(()=>{i(o)},rx.get());function c(){rn().clearTimeout(a),r(s)}s.ping(c).then(c,()=>{i(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hx={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},dx=500,fx=600,px="_blank",mx="http://localhost";class Rf{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function gx(t,e,n,s=dx,r=fx){const i=Math.max((window.screen.availHeight-r)/2,0).toString(),o=Math.max((window.screen.availWidth-s)/2,0).toString();let a="";const c=Object.assign(Object.assign({},hx),{width:s.toString(),height:r.toString(),top:i,left:o}),l=ft().toLowerCase();n&&(a=Dy(l)?px:n),Ny(l)&&(e=e||mx,c.scrollbars="yes");const u=Object.entries(c).reduce((d,[p,g])=>`${d}${p}=${g},`,"");if(qC(l)&&a!=="_self")return yx(e||"",a),new Rf(null);const h=window.open(e||"",a,u);X(h,t,"popup-blocked");try{h.focus()}catch{}return new Rf(h)}function yx(t,e){const n=document.createElement("a");n.href=t,n.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(s)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vx="__/auth/handler",_x="emulator/auth/handler",wx=encodeURIComponent("fac");async function Nf(t,e,n,s,r,i){X(t.config.authDomain,t,"auth-domain-config-required"),X(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:s,v:dr,eventId:r};if(e instanceof Hy){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",uE(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[u,h]of Object.entries(i||{}))o[u]=h}if(e instanceof Fi){const u=e.getScopes().filter(h=>h!=="");u.length>0&&(o.scopes=u.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const u of Object.keys(a))a[u]===void 0&&delete a[u];const c=await t._getAppCheckToken(),l=c?`#${wx}=${encodeURIComponent(c)}`:"";return`${Ex(t)}?${yi(a).slice(1)}${l}`}function Ex({config:t}){return t.emulator?ah(t,_x):`https://${t.authDomain}/${vx}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xc="webStorageSupport";class Ix{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Yy,this._completeRedirectFn=KS,this._overrideRedirectResult=qS}async _openPopup(e,n,s,r){var i;In((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await Nf(e,n,s,Il(),r);return gx(e,o,dh())}async _openRedirect(e,n,s,r){await this._originValidation(e);const i=await Nf(e,n,s,Il(),r);return CS(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:r,promise:i}=this.eventManagers[n];return r?Promise.resolve(r):(In(i,"If manager is not set, promise should be"),i)}const s=this.initAndGetManager(e);return this.eventManagers[n]={promise:s},s.catch(()=>{delete this.eventManagers[n]}),s}async initAndGetManager(e){const n=await ux(e),s=new GS(e);return n.register("authEvent",r=>(X(r==null?void 0:r.authEvent,e,"invalid-auth-event"),{status:s.onEvent(r.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=n,s}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(xc,{type:xc},r=>{var i;const o=(i=r==null?void 0:r[0])===null||i===void 0?void 0:i[xc];o!==void 0&&n(!!o),Gt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=ZS(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Fy()||lh()||Ka()}}const bx=Ix;var Df="@firebase/auth",Pf="0.23.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tx{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){X(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cx(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function Sx(t){Zs(new ps("auth",(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),r=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=s.options;X(o&&!o.includes(":"),"invalid-api-key",{appName:s.name}),X(!(a!=null&&a.includes(":")),"argument-error",{appName:s.name});const c={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:$y(t)},l=new JC(s,r,i,c);return eS(l,n),l},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,s)=>{e.getProvider("auth-internal").initialize()})),Zs(new ps("auth-internal",e=>{const n=Er(e.getProvider("auth").getImmediate());return(s=>new Tx(s))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Bn(Df,Pf,Cx(t)),Bn(Df,Pf,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xx=5*60,Ax=Yp("authIdTokenMaxAge")||xx;let Of=null;const kx=t=>async e=>{const n=e&&await e.getIdTokenResult(),s=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(s&&s>Ax)return;const r=n==null?void 0:n.token;Of!==r&&(Of=r,await fetch(t,{method:r?"POST":"DELETE",headers:r?{Authorization:`Bearer ${r}`}:{}}))};function Rx(t=em()){const e=Yl(t,"auth");if(e.isInitialized())return e.getImmediate();const n=ZC(t,{popupRedirectResolver:bx,persistence:[OS,IS,Yy]}),s=Yp("authTokenSyncURL");if(s){const i=kx(s);gS(n,i,()=>i(n.currentUser)),mS(n,o=>i(o))}const r=Qp("auth");return r&&tS(n,`http://${r}`),n}Sx("Browser");const Nx={apiKey:"AIzaSyDhMBhPmbgQxuUPETH_zw4HTwhKmfu519Q",authDomain:"cwm-2023-davinci.firebaseapp.com",projectId:"cwm-2023-davinci",storageBucket:"cwm-2023-davinci.appspot.com",messagingSenderId:"917571590777",appId:"1:917571590777:web:039abaabce695a29ead2a8"},sv=Zp(Nx),Qt=aC(sv),Qa=Rx(sv);let At={id:null,email:null,name:null,lastName:null,role:null};const ph=t=>{At.id=t?t.id:null,At.email=t?t.email:null,At.name=t?t.name:null,At.lastName=t?t.lastName:null,At.role=t?t.role:null,Mx()};yS(Qa,ph);const Dx=async({email:t,password:e,name:n,lastName:s})=>{try{const{user:r}=await fS(Qa,t,e),i=Pi(Qt,"users",r.uid);return await wC(i,{name:n,lastName:s,role:2,email:t,id:r.uid}),At.id=r.uid,At.email=t,At.name=n,At.lastName=s,At.role=2,ph(At),r}catch(r){throw new Error(r)}},Px=async({email:t,password:e})=>await pS(Qa,t,e).then(async n=>{const s=Pi(Qt,"users",n.user.uid),i=(await Iy(s)).data(),o={id:n.user.uid,email:n.user.email,name:i.name,lastName:i.lastName,role:i.role};return ph(o),o}).catch(n=>{throw console.log(n),new Error(n.message)}),Ox=async()=>await vS(Qa).catch(t=>{console.log(t)});let rv=[];const iv=t=>{rv.push(t),ov(t)},ov=t=>{t({...At})},Mx=t=>{rv.forEach(e=>ov(e))};function Ui(){const t=ce({id:null,email:null,name:null,lastName:null,role:null});return hr(()=>{iv(e=>{t.value=e})}),{user:t}}const Lx={class:"flex bg-slate-950 p-4 justify-center items-center text-white w-full"},Fx={class:"flex justify-end gap-5 container"},$x={class:"hover:scale-110 focus:scale-110 transition duration-200"},Ux={class:"hover:scale-110 focus:scale-110 transition duration-200"},Vx={class:"hover:scale-110 focus:scale-110 transition duration-200"},Bx={class:"hover:scale-110 focus:scale-110 transition duration-200"},jx={class:"hover:scale-110 focus:scale-110 transition duration-200"},qx={key:0,class:"hover:scale-110 focus:scale-110 transition duration-200"},Hx={class:"hover:scale-110 focus:scale-110 transition duration-200"},zx={type:"submit",class:"block p-2"},Kx=y("footer",null,[y("div",{class:"flex justify-center items-center bg-slate-950 text-white p-4 h-32"},[y("p",null,"© Da Vinci 2023, Santiago Cerdeira")])],-1),Wx={__name:"App",setup(t){const{user:e}=Ui(),{handleLogout:n}=s();function s(){const r=la();return{handleLogout(){Ox().then(()=>{r.push("/iniciar-sesion")})}}}return(r,i)=>{const o=an("router-link"),a=an("router-view");return N(),L(we,null,[y("nav",Lx,[y("ul",Fx,[y("li",$x,[q(o,{class:"block p-2",to:"/"},{default:G(()=>[re("Home")]),_:1})]),y("li",Ux,[q(o,{class:"block p-2",to:"/precios"},{default:G(()=>[re("Precios")]),_:1})]),k(e).id===void 0||k(e).id===null?(N(),L(we,{key:0},[y("li",Vx,[q(o,{class:"block p-2",to:"/iniciar-sesion"},{default:G(()=>[re("Iniciar sesión")]),_:1})]),y("li",Bx,[q(o,{class:"block p-2",to:"/registrarse"},{default:G(()=>[re("Registro")]),_:1})])],64)):(N(),L(we,{key:1},[y("li",jx,[q(o,{class:"block p-2",to:"/perfil"},{default:G(()=>[re("Mi Perfil")]),_:1})]),k(e).role===1?(N(),L("li",qx,[q(o,{class:"block p-2",to:"/admin"},{default:G(()=>[re("Admin")]),_:1})])):Fe("",!0),y("li",Hx,[y("form",{action:"#",method:"post",onSubmit:i[0]||(i[0]=oa((...c)=>k(n)&&k(n)(...c),["prevent"]))},[y("button",zx,de(k(e).email)+" (Cerrar sesión)",1)],32)])],64))])]),y("main",null,[q(a)]),Kx],64)}}},Gx="/assets/dashboard.png",Qx="/assets/testimonio-1.jpeg",Yx="/assets/testimonio-2.jpeg",Xx="/assets/testimonio-3.jpeg",br=(t,e)=>{const n=t.__vccOpts||t;for(const[s,r]of e)n[s]=r;return n},Jx={},Zx={class:"bg-slate-200 w-10/12 md:w-5/12 xl:w-1/4 h-auto mx-auto text-black py-10 text-center flex flex-col justify-center rounded-lg hover:bg-slate-200 transition duration-500 px-4 hover:text-violet-700"},eA={class:"mb-5 text-3xl"},tA={class:"text-xl font-bold"};function nA(t,e){return N(),L("article",Zx,[y("div",eA,[kt(t.$slots,"icon")]),y("h4",tA,[kt(t.$slots,"h4")])])}const ks=br(Jx,[["render",nA]]),sA={},rA={class:"bg-slate-200 w-10/12 lg:w-5/12 2xl:w-1/4 h-auto mx-auto text-black py-10 text-center flex flex-col justify-center rounded-lg"},iA={class:"text-lg font-bold mb-4"},oA={class:"mb-4"},aA={class:"border-solid border-2 border-violet-400 rounded-lg w-10/12 p-3 mx-auto"};function cA(t,e){return N(),L("article",rA,[y("h4",iA,[kt(t.$slots,"h4")]),kt(t.$slots,"img"),y("div",oA,[kt(t.$slots,"stars")]),y("p",aA,[kt(t.$slots,"p")])])}const Ac=br(sA,[["render",cA]]),lA={class:"p-2 text-white flex justify-center items-center flex-col bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900"},uA={class:"flex flex-col w-3/4 mx-auto min-h-[90vh] items-center justify-center"},hA=y("h1",{class:"text-4xl md:text-5xl xl:text-6xl 2xl:text-7xl font-bold my-5 mx-auto text-center drop-shadow-2xl"},[re("Consigue más clientes gracias a la "),y("span",{class:"text-4xl md:text-5xl xl:text-6xl 2xl:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-fuchsia-600 to-pink-600"},"optimización SEO")],-1),dA=y("p",{class:"my-2 text-center text-md md:text-lg 2xl:text-xl"},"¿Buscas mejorar el posicionamiento de tu empresa en los motores de búsqueda? Nuestro servicio de optimización SEO puede ayudarte a lograrlo. Con nuestra experiencia y herramientas especializadas, nos aseguramos de que tu empresa aparezca en los primeros resultados de búsqueda de tus clientes potenciales.",-1),fA=t0('<section class="min-h-[50vh] mt-5 bg-slate-950 p-[2rem]"><div class="flex flex-wrap w-10/12 justify-around mx-auto my-10"><div class="w-10/12 lg:w-5/12 flex flex-col justify-center"><h2 class="text-2xl xl:text-3xl font-bold mb-4 drop-shadow-2xl">Servicio de Optimización SEO Personalizado</h2><p class="mb-4 text-md xl:text-lg">En nuestro servicio de optimización SEO, trabajamos con nuestros clientes para desarrollar una estrategia personalizada que se adapte a las necesidades de su empresa y su público objetivo. Desde la investigación de palabras clave hasta la creación de contenido y la optimización técnica, nuestro equipo de expertos en SEO está comprometido en ayudarte a alcanzar tus objetivos de visibilidad en línea.</p></div><div class="w-5/12 flex justify-end items-center"><img src="'+Gx+'" alt="Dashboard" class="rounded border-solid border-2 border-violet-400 xl:ml-10 shadow-lg hover:shadow-2xl transition duration-300 my-7"></div></div></section>',1),pA={class:"min-h-[80vh] mt-5 p-[5rem]"},mA=y("h2",{class:"text-4xl xl:text-5xl font-bold my-5 mx-auto text-center leading-tight drop-shadow-2xl"},"¿Qué ofrecemos?",-1),gA={class:"flex flex-wrap gap-10 mx-auto mt-10"},yA=y("i",{class:"fa-solid fa-magnifying-glass fa-2xl"},null,-1),vA=y("i",{class:"fa-solid fa-folder-open fa-2xl"},null,-1),_A=y("i",{class:"fa-sharp fa-solid fa-paperclip fa-2xl"},null,-1),wA=y("i",{class:"fa-solid fa-tag fa-2xl"},null,-1),EA=y("i",{class:"fa-solid fa-money-bill fa-2xl"},null,-1),IA=y("i",{class:"fa-solid fa-phone fa-2xl"},null,-1),bA={class:"min-h-[80vh] mt-5 p-[5rem]"},TA=y("h3",{class:"text-5xl font-bold my-5 mx-auto text-center leading-tight drop-shadow-2xl"},"Testimonios de nuestros clientes",-1),CA={class:"flex flex-wrap gap-10 mx-auto mt-10"},SA=y("img",{src:Qx,alt:"José Martínez",class:"w-1/4 mx-auto mb-4 rounded-full border-solid border-2 border-violet-400 shadow-lg hover:shadow-2xl transition duration-300"},null,-1),xA=y("i",{class:"fas fa-star"},null,-1),AA=y("i",{class:"fas fa-star"},null,-1),kA=y("i",{class:"fas fa-star"},null,-1),RA=y("i",{class:"fas fa-star"},null,-1),NA=y("i",{class:"fas fa-star"},null,-1),DA=y("img",{src:Yx,alt:"José Martínez",class:"w-1/4 mx-auto mb-4 rounded-full border-solid border-2 border-violet-400 shadow-lg hover:shadow-2xl transition duration-300"},null,-1),PA=y("i",{class:"fas fa-star"},null,-1),OA=y("i",{class:"fas fa-star"},null,-1),MA=y("i",{class:"fas fa-star"},null,-1),LA=y("i",{class:"fas fa-star"},null,-1),FA=y("i",{class:"fas fa-star"},null,-1),$A=y("img",{src:Xx,alt:"José Martínez",class:"w-1/4 mx-auto mb-4 rounded-full border-solid border-2 border-violet-400 shadow-lg hover:shadow-2xl transition duration-300"},null,-1),UA=y("i",{class:"fas fa-star"},null,-1),VA=y("i",{class:"fas fa-star"},null,-1),BA=y("i",{class:"fas fa-star"},null,-1),jA=y("i",{class:"fas fa-star"},null,-1),qA=y("i",{class:"fas fa-star"},null,-1),HA={__name:"Home",setup(t){const{user:e}=Ui();return(n,s)=>{const r=an("router-link");return N(),L("div",lA,[y("section",uA,[hA,dA,k(e).id===void 0||k(e).id===null?(N(),Ht(r,{key:0,to:"/iniciar-sesion",class:"w-1/4 p-3 rounded bg-violet-700 font-semibold text-center my-7 mx-auto hover:bg-violet-600 hover:scale-105 focus:scale-105 focus:bg-violet-600 transition duration-300"},{default:G(()=>[re("Ingresar")]),_:1})):(N(),Ht(r,{key:1,to:"/precios",class:"w-1/4 p-3 rounded bg-violet-700 font-semibold text-center my-7 mx-auto hover:bg-violet-600 hover:scale-105 focus:scale-105 focus:bg-violet-600 transition duration-300"},{default:G(()=>[re("Contratar")]),_:1}))]),fA,y("section",pA,[mA,y("div",gA,[q(ks,null,{icon:G(()=>[yA]),h4:G(()=>[re("Análisis de palabras clave")]),_:1}),q(ks,null,{icon:G(()=>[vA]),h4:G(()=>[re("Optimización de contenido")]),_:1}),q(ks,null,{icon:G(()=>[_A]),h4:G(()=>[re("Construcción de enlaces")]),_:1}),q(ks,null,{icon:G(()=>[wA]),h4:G(()=>[re("Optimización de meta etiquetas")]),_:1}),q(ks,null,{icon:G(()=>[EA]),h4:G(()=>[re("Precios accesibles")]),_:1}),q(ks,null,{icon:G(()=>[IA]),h4:G(()=>[re("Atención al cliente")]),_:1})])]),y("section",bA,[TA,y("div",CA,[q(Ac,null,{h4:G(()=>[re("José Martínez")]),img:G(()=>[SA]),stars:G(()=>[xA,AA,kA,RA,NA]),p:G(()=>[re("Gracias a los servicios de SEO de esta empresa, hemos visto un aumento significativo en el tráfico orgánico a nuestro sitio web, lo que ha llevado a un aumento en las conversiones y ventas. Estamos muy contentos con los resultados y continuaremos trabajando con ellos en el futuro")]),_:1}),q(Ac,null,{h4:G(()=>[re("Pedro González")]),img:G(()=>[DA]),stars:G(()=>[PA,OA,MA,LA,FA]),p:G(()=>[re("Desde que contraté el servicio SEO de esta empresa, he notado una gran diferencia en mi negocio en línea. Antes, apenas recibía tráfico orgánico, pero ahora mi sitio web está en la primera página de resultados de búsqueda para varias palabras clave importantes. ¡Estoy muy contento con los resultados y definitivamente recomendaría este servicio a otros dueños de negocios en línea!")]),_:1}),q(Ac,null,{h4:G(()=>[re("Marcela Gutierrez")]),img:G(()=>[$A]),stars:G(()=>[UA,VA,BA,jA,qA]),p:G(()=>[re("Nunca pensé que la optimización SEO podría tener un impacto tan grande en mi sitio web, pero después de trabajar con este equipo, estoy convencido de que es una necesidad para cualquier negocio en línea. Gracias a su ayuda, mi sitio web ahora está mejor posicionado en los motores de búsqueda y estoy recibiendo más tráfico orgánico que nunca antes. ¡Estoy muy agradecido por su excelente trabajo y profesionalismo!")]),_:1})])])])}}},zA={},KA={type:"submit",class:"p-2 bg-indigo-700 text-white rounded my-4 hover:bg-indigo-500 focus:bg-indigo-500 transition duration-500"};function WA(t,e){return N(),L("button",KA,[kt(t.$slots,"default",{},()=>[re("Enviar")])])}const mh=br(zA,[["render",WA]]),GA=["value"],Mn={__name:"Input",props:["modelValue"],emits:["update:modelValue"],setup(t){return(e,n)=>(N(),L("input",{class:"border-2 border-gray-300 rounded-md p-2 w-full mb-3",value:t.modelValue,onInput:n[0]||(n[0]=s=>e.$emit("update:modelValue",s.target.value))},null,40,GA))}},QA={},YA={class:"loader"},XA=y("div",null,null,-1),JA=y("span",{class:"sr-only"},"Cargando...",-1),ZA=[XA,JA];function ek(t,e){return N(),L("div",YA,ZA)}const ln=br(QA,[["render",ek]]),tk={class:"p-2 flex justify-center items-center flex-col bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 min-h-[90vh]"},nk=y("h1",{class:"text-white text-4xl md:text-5xl xl:text-6xl 2xl:text-7xl font-bold mb-10 mx-auto text-center leading-tight drop-shadow-2xl"},"Iniciar sesión",-1),sk={class:"p-7 bg-white border-solid border-4 border-violet-800 rounded-lg w-full lg:w-[50vw]"},rk=y("label",{for:"email",class:"text-[1.2rem] font-semibold my-2 block"},"Correo electrónico:",-1),ik={key:0,class:"text-red-500 mt-1"},ok=y("label",{for:"password",class:"text-[1.2rem] font-semibold my-2 block"},"Contraseña:",-1),ak={key:0,class:"text-red-500 mt-1"},ck={class:"text-center my-2 text-gray-500"},lk={key:1,className:"flex justify-center"},uk={__name:"Login",setup(t){const{fields:e,loading:n,feedback:s,handleSubmit:r,emailError:i,emailErrorMessage:o,passwordError:a,passwordErrorMessage:c}=l();function l(){const u=ce({email:"",password:""}),h=ce(!1),d=ce({message:"",type:"error"}),p=ce(!1),g=ce(""),v=ce(!1),b=ce(""),w=la();function O(){d.value={message:"",type:"error"},h.value=!0,p.value=!1,g.value="",v.value=!1,b.value="",u.value.email||(p.value=!0,g.value="Por favor, ingresá un email con el formato correcto.",h.value=!1),u.value.password||(v.value=!0,b.value="Por favor, ingresá tu contraseña.",h.value=!1),!(p.value||v.value)&&Px({...u.value}).then(S=>{d.value={message:"Sesión iniciada con éxito.",type:"success"},h.value=!1,S.role===1?w.push("/admin"):w.push("/perfil")}).catch(S=>{h.value=!1,d.value={message:"Error al iniciar sesión.",type:"error"}})}return{fields:u,loading:h,feedback:d,handleSubmit:O,emailError:p,emailErrorMessage:g,passwordError:v,passwordErrorMessage:b}}return(u,h)=>{const d=an("router-link");return N(),L("section",tk,[nk,y("div",sk,[y("form",{action:"#",id:"login-form",onSubmit:h[2]||(h[2]=oa((...p)=>k(r)&&k(r)(...p),["prevent"]))},[y("div",null,[rk,q(Mn,{type:"email",name:"email",id:"email",modelValue:k(e).email,"onUpdate:modelValue":h[0]||(h[0]=p=>k(e).email=p),class:bt({"border-red-500":k(i)}),"aria-invalid":"emailError"},null,8,["modelValue","class"]),k(i)?(N(),L("div",ik,de(k(o)),1)):Fe("",!0)]),y("div",null,[ok,q(Mn,{type:"password",name:"password",id:"password",modelValue:k(e).password,"onUpdate:modelValue":h[1]||(h[1]=p=>k(e).password=p),class:bt({"border-red-500":k(a)}),"aria-invalid":"passwordError"},null,8,["modelValue","class"]),k(a)?(N(),L("div",ak,de(k(c)),1)):Fe("",!0)]),q(mh,{class:"w-full"},{default:G(()=>[re("Ingresar")]),_:1}),y("p",ck,[re("¿No tenés una cuenta? "),q(d,{to:"/registrarse",class:"underline"},{default:G(()=>[re("Registrate")]),_:1})]),k(s).message!==""?(N(),L("div",{key:0,class:bt([k(s).type==="success"?"bg-green-500":"bg-red-500","text-white text-center p-2 rounded-lg"])},[y("p",null,de(k(s).message),1)],2)):Fe("",!0),k(n)?(N(),L("div",lk,[q(ln)])):Fe("",!0)],32)])])}}},hk={class:"p-2 flex justify-center items-center flex-col bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 min-h-[90vh]"},dk=y("h1",{class:"text-white text-4xl md:text-5xl xl:text-6xl 2xl:text-7xl font-bold mb-10 mt-5 mx-auto text-center leading-tight drop-shadow-2xl"},"Registro",-1),fk={class:"p-7 bg-white border-solid border-4 border-violet-800 rounded-lg w-full lg:w-[50vw]"},pk=y("label",{for:"name",class:"text-[1.2rem] font-semibold my-2 block"},"Nombre:",-1),mk={key:0,class:"text-red-500 mt-1"},gk=y("label",{for:"lastName",class:"text-[1.2rem] font-semibold my-2 block"},"Apellido:",-1),yk={key:0,class:"text-red-500 mt-1"},vk=y("label",{for:"email",class:"text-[1.2rem] font-semibold my-2 block"},"Correo electrónico:",-1),_k={key:0,class:"text-red-500 mt-1"},wk=y("label",{for:"password",class:"text-[1.2rem] font-semibold my-2 block"},"Contraseña:",-1),Ek={key:0,class:"text-red-500 mt-1"},Ik=y("label",{for:"confirmPassword",class:"text-[1.2rem] font-semibold my-2 block"},"Confirmar contraseña:",-1),bk={key:0,class:"text-red-500 mt-1"},Tk={class:"text-center my-2 text-gray-500"},Ck={key:1,className:"flex justify-center"},Sk={__name:"Registro",setup(t){const{fields:e,loading:n,feedback:s,handleSubmit:r,emailError:i,emailErrorMessage:o,nameError:a,nameErrorMessage:c,lastNameError:l,lastNameErrorMessage:u,passwordError:h,passwordErrorMessage:d,confirmPasswordError:p,confirmPasswordErrorMessage:g}=v();function v(){const b=ce({name:"",lastName:"",email:"",password:"",confirmPassword:""}),w=ce(!1),O=ce({message:"",type:"error"}),S=ce(!1),Q=ce(""),oe=ce(!1),Ce=ce(""),Re=ce(!1),Y=ce(""),ge=ce(!1),fe=ce(""),Le=ce(!1),Ue=ce(""),Et=la();function Ot(){if(w.value=!0,O.value.message="",S.value=!1,Q.value="",oe.value=!1,Ce.value="",Re.value=!1,Y.value="",ge.value=!1,fe.value="",Le.value=!1,Ue.value="",b.value.name||(oe.value=!0,Ce.value="Por favor, ingresá tu nombre.",w.value=!1),b.value.lastName||(Re.value=!0,Y.value="Por favor, ingresá tu apellido.",w.value=!1),b.value.email||(S.value=!0,Q.value="Por favor, ingresá tu email.",w.value=!1),b.value.password||(ge.value=!0,fe.value="Por favor, ingresá una contraseña.",w.value=!1),b.value.password&&b.value.password.length<6&&(ge.value=!0,fe.value="La contraseña debe tener al menos 6 caracteres.",w.value=!1),b.value.confirmPassword||(Le.value=!0,Ue.value="Por favor, vuelve a ingresar tu contraseña para confirmarla.",w.value=!1),b.value.password&&b.value.confirmPassword&&b.value.password!==b.value.confirmPassword&&(ge.value=!0,fe.value="Las contraseñas no coinciden.",Le.value=!0,Ue.value="Las contraseñas no coinciden.",w.value=!1),oe.value||Re.value||S.value||ge.value||Le.value){w.value=!1;return}Dx({...b.value}).then(Jn=>{O.value={message:"Te registraste con éxito.",type:"success"},w.value=!1,Et.push("/perfil")}).catch(Jn=>{w.value=!1,O.value={message:"Error al registrarte",type:"error"}})}return{fields:b,loading:w,feedback:O,handleSubmit:Ot,emailError:S,emailErrorMessage:Q,nameError:oe,nameErrorMessage:Ce,lastNameError:Re,lastNameErrorMessage:Y,passwordError:ge,passwordErrorMessage:fe,confirmPasswordError:Le,confirmPasswordErrorMessage:Ue}}return(b,w)=>{const O=an("router-link");return N(),L("section",hk,[dk,y("div",fk,[y("form",{action:"#",id:"login-form",onSubmit:w[5]||(w[5]=oa((...S)=>k(r)&&k(r)(...S),["prevent"]))},[y("div",null,[pk,q(Mn,{type:"text",name:"name",id:"name",class:bt({"border-red-500":k(a)}),modelValue:k(e).name,"onUpdate:modelValue":w[0]||(w[0]=S=>k(e).name=S)},null,8,["class","modelValue"]),k(a)?(N(),L("div",mk,de(k(c)),1)):Fe("",!0)]),y("div",null,[gk,q(Mn,{type:"text",name:"lastName",id:"lastName",class:bt({"border-red-500":k(l)}),modelValue:k(e).lastName,"onUpdate:modelValue":w[1]||(w[1]=S=>k(e).lastName=S)},null,8,["class","modelValue"]),k(l)?(N(),L("div",yk,de(k(u)),1)):Fe("",!0)]),y("div",null,[vk,q(Mn,{type:"email",name:"email",id:"email",class:bt({"border-red-500":k(i)}),modelValue:k(e).email,"onUpdate:modelValue":w[2]||(w[2]=S=>k(e).email=S)},null,8,["class","modelValue"]),k(i)?(N(),L("div",_k,de(k(o)),1)):Fe("",!0)]),y("div",null,[wk,q(Mn,{type:"password",name:"password",id:"password",class:bt({"border-red-500":k(h)}),modelValue:k(e).password,"onUpdate:modelValue":w[3]||(w[3]=S=>k(e).password=S)},null,8,["class","modelValue"]),k(h)?(N(),L("div",Ek,de(k(d)),1)):Fe("",!0)]),y("div",null,[Ik,q(Mn,{type:"password",name:"confirmPassword",id:"confirmPassword",class:bt({"border-red-500":k(p)}),modelValue:k(e).confirmPassword,"onUpdate:modelValue":w[4]||(w[4]=S=>k(e).confirmPassword=S)},null,8,["class","modelValue"]),k(p)?(N(),L("div",bk,de(k(g)),1)):Fe("",!0)]),q(mh,{class:"w-full"},{default:G(()=>[re("Registrarme")]),_:1}),y("p",Tk,[re("¿Ya tenés una cuenta? "),q(O,{to:"/iniciar-sesion",class:"underline"},{default:G(()=>[re("Iniciá sesión")]),_:1})]),k(s).message!==""?(N(),L("div",{key:0,class:bt([k(s).type==="success"?"bg-green-500":"bg-red-500","text-white text-center p-2 rounded-lg"])},[y("p",null,de(k(s).message),1)],2)):Fe("",!0),k(n)?(N(),L("div",Ck,[q(ln)])):Fe("",!0)],32)])])}}};async function xk(t,e,n){try{const s={userId:n,serviceId:t,total:e,estado:"pending",fecha:new Date().toLocaleString("es-AR",{day:"2-digit",month:"2-digit",year:"2-digit",hour:"2-digit",minute:"2-digit"})};console.log("compraData",s);const r=await sh(Ts(Qt,"compras"),s);console.log("Order created with ID:",r.id)}catch(s){console.error(s)}}async function av(t){try{const e=Ts(Qt,"compras"),n=Ju(e,gy("userId","==",t));return(await za(n)).docs.map(i=>({id:i.id,...i.data()}))}catch(e){console.error(e)}}async function Mf(t,e){try{const n=Pi(Qt,"compras",t);await EC(n,{estado:e})}catch(n){console.error(n)}}const Ak={class:"p-2 flex items-center flex-col text-white bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 min-h-[90vh] py-10"},kk={class:"text-white text-4xl md:text-5xl xl:text-6xl 2xl:text-7xl font-bold mb-10 mx-auto text-center leading-tight drop-shadow-2xl"},Rk=y("h2",{class:"font-semibold text-white text-center text-2xl"},"Administrador",-1),Nk={key:0,class:"my-5 text-5xl"},Dk=y("p",{class:"my-5 text-5xl"},"Mis compras",-1),Pk={class:"w-full lg:w-[80vw] text-sm text-left text-gray-500 dark:text-gray-400"},Ok=y("thead",{class:"text-xs text-white uppercase bg-violet-500"},[y("tr",null,[y("th",{class:"px-6 py-4"},"Servicio"),y("th",{class:"py-4"},"Precio"),y("th",{class:"py-4"},"Fecha"),y("th",{class:"py-4 text-center"},"Estado")])],-1),Mk={key:0,class:"px-6 py-4 font-medium text-gray-900"},Lk={key:1,class:"px-6 py-4 font-medium text-gray-900"},Fk={key:2,class:"py-4 font-medium text-white bg-orange-400 text-center"},$k={key:3,class:"py-4 font-medium text-white bg-green-600 text-center"},Uk={__name:"MyProfile",setup(t){const{user:e}=Ui(),n=ce(!1),s=ce([]);return Vs(e,async()=>{if(e.value){n.value=!0;const r=await av(e.value.id);s.value=r,n.value=!1}}),(r,i)=>{const o=an("router-link");return N(),L("section",Ak,[y("h1",kk,de(k(e).name)+" "+de(k(e).lastName),1),k(e).role===1?(N(),L(we,{key:0},[Rk,q(o,{to:"/admin",class:"my-2 text-center w-80 bg-white text-violet-700 mx-auto p-3 rounded-xl font-semibold hover:scale-105 focus:scale-105 transition duration-200"},{default:G(()=>[re("Panel de administración")]),_:1})],64)):(N(),L(we,{key:1},[n.value?(N(),Ht(ln,{key:0})):(N(),L(we,{key:1},[s.value.length===0?(N(),L("p",Nk,"Aún no has realizado ninguna compra")):(N(),L(we,{key:1},[Dk,y("table",Pk,[Ok,y("tbody",null,[(N(!0),L(we,null,Qs(s.value,(a,c)=>(N(),L("tr",{key:c,class:"bg-white border-b dark:bg-gray-800 dark:border-gray-700"},[a.serviceId==="Z6dSllSe8orFL6Sc0U6J"?(N(),L("td",Mk,"Plan básico")):(N(),L("td",Lk,"Plan premium")),y("td",null,"$"+de(a.total),1),y("td",null,de(a.fecha),1),a.estado==="pending"?(N(),L("td",Fk,"Pendiente")):(N(),L("td",$k,"Finalizada"))]))),128))])])],64))],64)),!n.value&&k(e).role!==1?(N(),Ht(o,{key:2,to:"/usuario/LHL2RfZxOCXzKNARQuhg63gZd663/chat",class:"w-full lg:w-5/12 mx-auto text-center bg-purple-600 hover:bg-purple-700 hover:scale-105 transition duration-200 px-4 py-2 my-5 text-white rounded-md"},{default:G(()=>[re(" Chatear con soporte ")]),_:1})):Fe("",!0)],64))])}}};async function Vk(t){const e=Pi(Qt,"users",t),n=await Iy(e);return n.exists()?{id:n.id,name:n.data().name,lastName:n.data().lastName,email:n.data().email,role:n.data().role}:null}async function Bk(){try{const t=Ts(Qt,"users");return(await za(t)).docs.map(s=>({id:s.id,...s.data()}))}catch(t){console.error(t)}}function gh(t){const e=ce({id:"",email:"",name:"",lastName:""}),n=ce(!0);return Vk(t).then(s=>{n.value=!1,e.value=s}).catch(s=>{console.log(s)}),{user:e,loading:n}}const jk={key:0,class:"p-2 flex items-center flex-col text-white bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 min-h-[90vh] py-10"},qk={class:"text-white text-4xl md:text-5xl xl:text-6xl 2xl:text-7xl font-bold mb-10 mx-auto text-center leading-tight drop-shadow-2xl"},Hk={__name:"UserProfile",setup(t){const e=Kl(),{user:n,loading:s}=gh(e.params.id);return(r,i)=>{const o=an("router-link");return k(s)?(N(),Ht(ln,{key:1})):(N(),L("section",jk,[y("h1",qk,"Perfil de "+de(k(n).name)+" "+de(k(n).lastName),1),q(o,{to:`/usuario/${k(n).id}/chat`,class:"my-2 text-center w-full lg:w-8/12 bg-white text-purple-700 rounded-lg p-5 mx-auto text-xl font-semibold"},{default:G(()=>[re("Chatear con "+de(k(n).name)+" "+de(k(n).lastName),1)]),_:1},8,["to"])]))}}};async function zk({from:t,to:e,message:n}){const s=await cv(t,e),r=Ts(Qt,`private-chats/${s.id}/messages`);return sh(r,{userId:t,message:n,created_at:bC()})}async function cv(t,e){const n=Ts(Qt,"private-chats"),s={[t]:!0,[e]:!0},r=Ju(n,gy("users","==",s),yC(1)),i=await za(r);return i.empty?await sh(n,{users:s}):i.docs[0]}async function Kk({from:t,to:e},n){const s=await cv(t,e),r=Ts(Qt,`private-chats/${s.id}/messages`),i=Ju(r,gC("created_at","asc"));return IC(i,o=>{const a=o.docs.map(c=>{var u;const l=c.data();return{userId:l.userId,message:l.message,created_at:(u=l.created_at)==null?void 0:u.toDate()}});n(a)})}function Wk(t){const e=Intl.DateTimeFormat("es-AR",{day:"2-digit",month:"2-digit",year:"numeric"}).format(t),n=Intl.DateTimeFormat("es-AR",{hour:"2-digit",minute:"2-digit",second:"2-digit"}).format(t);return`${e} ${n}`}const Gk=["datetime"],Qk={key:1,class:"block text-sm text-gray-500"},Yk={__name:"Date",props:{date:{type:[Date,null],required:!0}},setup(t){return(e,n)=>t.date?(N(),L("time",{key:0,class:"block text-sm text-gray-500",datetime:t.date.toISOString()},de(k(Wk)(t.date)),9,Gk)):(N(),L("span",Qk,"Enviando..."))}},Xk={key:0,class:"p-2 flex items-center flex-col text-white bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 min-h-[90vh] py-10"},Jk={class:"text-white text-4xl md:text-5xl xl:text-6xl 2xl:text-7xl font-bold mb-10 mx-auto text-center leading-tight drop-shadow-2xl"},Zk={class:"w-full lg:w-6/12 mx-auto p-2 flex flex-col"},eR={id:"mini-chat"},tR={key:0,class:"flex justify-center"},nR={class:"flex flex-col w-10/12 mx-auto"},sR={class:"flex flex-col"},rR=y("label",{for:"message",class:"text-[1.2rem] font-semibold my-2"},"Mensaje",-1),iR={key:0},oR={__name:"PrivateChat",setup(t){const e=Kl(),{user:n}=Ui(),{user:s,loading:r}=gh(e.params.id),{newMessage:i,handleForm:o,newMessageLoading:a}=h(n,s),{messages:c,loading:l}=u(n,s);function u(d,p){const g=ce([]),v=ce(!0);return Vs(p,b=>{b.id!==""&&Kk({from:d.value.id,to:p.value.id},w=>{g.value=w,v.value=!1})}),{messages:g,loading:v}}function h(d,p){const g=ce(!1),v=ce({message:""});function b(){g.value=!0,zk({from:d.value.id,to:p.value.id,message:v.value.message}).then(()=>{v.value.message="",g.value=!1})}return{newMessage:v,handleForm:b,newMessageLoading:g}}return(d,p)=>k(r)?Fe("",!0):(N(),L("section",Xk,[y("h1",Jk,"Chat con "+de(k(s).name)+" "+de(k(s).lastName),1),y("section",Zk,[y("div",eR,[k(l)?(N(),L("div",tR,[q(ln)])):Fe("",!0),y("ul",null,[(N(!0),L(we,null,Qs(k(c),(g,v)=>(N(),L("li",{key:v,class:bt(["w-full mb-2",{"text-right":g.userId===k(n).id}])},[re(de(g.message)+" ",1),q(Yk,{date:g.created_at},null,8,["date"])],2))),128))])]),y("div",nR,[y("form",{action:"#",id:"form-message",onSubmit:p[1]||(p[1]=oa((...g)=>k(o)&&k(o)(...g),["prevent"]))},[y("div",sR,[rR,q(Mn,{type:"text",name:"message",id:"message",class:"text-black",modelValue:k(i).message,"onUpdate:modelValue":p[0]||(p[0]=g=>k(i).message=g)},null,8,["modelValue"])]),q(mh,{class:"w-full"})],32),k(a)?(N(),L("div",iR,"Enviando mensaje...")):Fe("",!0)])])]))}},aR={},cR={class:"p-2 flex items-center flex-col min-h-[90vh] py-10"},lR=y("h1",{class:"text-4xl md:text-5xl xl:text-6xl 2xl:text-7xl font-bold mb-10 mx-auto text-center leading-tight drop-shadow-2xl"},"Panel de administración",-1);function uR(t,e){const n=an("router-link");return N(),L("section",cR,[lR,q(n,{to:"/admin/usuarios",class:"w-1/4 p-3 rounded bg-violet-700 font-semibold text-center my-7 mx-auto hover:bg-violet-600 hover:scale-105 focus:scale-105 focus:bg-violet-600 transition duration-300 text-white"},{default:G(()=>[re("Administrar usuarios")]),_:1})])}const hR=br(aR,[["render",uR]]),dR={class:"p-2 flex items-center flex-col min-h-[90vh] py-10"},fR=y("h1",{class:"text-4xl md:text-5xl xl:text-6xl 2xl:text-7xl font-bold mb-10 mx-auto text-center leading-tight drop-shadow-2xl"},"Usuarios",-1),pR={key:0,class:"my-5 text-5xl"},mR={key:1,class:"w-full lg:w-[80vw] text-sm text-left text-gray-500 dark:text-gray-400"},gR=y("thead",{class:"text-xs text-white uppercase bg-violet-500"},[y("tr",null,[y("th",{class:"px-6 py-4"},"Id"),y("th",{class:"py-4"},"Nombre y apellido"),y("th",{class:"py-4"},"Email"),y("th",{class:"py-4 text-center"},"Compras"),y("th",{class:"py-4 text-center"},"Chat")])],-1),yR={class:"px-6 py-4 font-medium text-gray-900"},vR={class:"px-6 py-4 font-medium text-gray-900"},_R={class:"px-6 py-4 font-medium text-gray-900"},wR={class:"py-4 text-center"},ER={class:"py-4 text-center"},IR={__name:"adminUsuarios",setup(t){const e=ce([]),n=ce(!1);async function s(){n.value=!0;const r=await Bk();e.value=r,n.value=!1}return hr(()=>{s()}),(r,i)=>{const o=an("router-link");return N(),L(we,null,[q(o,{to:"/admin",class:"block p-3 rounded underline font-semibold text-start text-xl m-5"},{default:G(()=>[re("Volver al inicio")]),_:1}),y("section",dR,[fR,n.value?(N(),Ht(ln,{key:0})):(N(),L(we,{key:1},[e.value.length===0?(N(),L("p",pR,"Aún no hay usuarios")):(N(),L("table",mR,[gR,y("tbody",null,[(N(!0),L(we,null,Qs(e.value,(a,c)=>(N(),L("tr",{key:c,class:"bg-white border-b dark:bg-gray-800 dark:border-gray-700"},[a.role===2?(N(),L(we,{key:0},[y("td",yR,de(a.id),1),y("td",vR,de(a.name)+" "+de(a.lastName),1),y("td",_R,de(a.email),1),y("td",wR,[q(o,{to:`/admin/usuarios/${a.id}/compras`,class:"w-1/4 p-3 rounded bg-violet-700 font-semibold text-center my-7 mx-auto hover:bg-violet-600 hover:scale-105 focus:scale-105 focus:bg-violet-600 transition duration-300 text-white"},{default:G(()=>[re("Ver compras")]),_:2},1032,["to"])]),y("td",ER,[q(o,{to:`/usuario/${a.id}/chat`,class:"w-1/4 p-3 rounded bg-violet-700 font-semibold text-center my-7 mx-auto hover:bg-violet-600 hover:scale-105 focus:scale-105 focus:bg-violet-600 transition duration-300 text-white"},{default:G(()=>[re("Chat")]),_:2},1032,["to"])])],64)):Fe("",!0)]))),128))])]))],64))])],64)}}},bR={class:"p-2 flex items-center flex-col min-h-[90vh] py-10"},TR={class:"text-4xl md:text-5xl xl:text-6xl 2xl:text-7xl font-bold mb-10 mx-auto text-center leading-tight drop-shadow-2xl"},CR={key:0,class:"my-5 text-5xl"},SR={class:"w-full lg:w-[80vw] text-sm text-left text-gray-500 dark:text-gray-400"},xR=y("thead",{class:"text-xs text-white uppercase bg-violet-500"},[y("tr",null,[y("th",{class:"px-6 py-4"},"Servicio"),y("th",{class:"py-4"},"Precio"),y("th",{class:"py-4"},"Fecha"),y("th",{class:"py-4 text-center"},"Estado"),y("th",{class:"py-4 text-center"},"Acciones")])],-1),AR={key:0,class:"px-6 py-4 font-medium text-gray-900"},kR={key:1,class:"px-6 py-4 font-medium text-gray-900"},RR={key:2,class:"py-4 font-medium text-white bg-orange-400 text-center"},NR={key:3,class:"py-4 font-medium text-white bg-green-600 text-center"},DR={key:4},PR=["onClick"],OR={key:5},MR=["onClick"],LR={key:0},FR={__name:"adminUsuarioCompras",setup(t){const e=Kl(),{user:n,loading:s}=gh(e.params.userId),r=ce(!1),i=ce(!1),o=ce([]);async function a(){r.value=!0;const l=await av(e.params.userId);o.value=l,r.value=!1}async function c(l,u){i.value=!0,u==="pending"?await Mf(l,"completed"):await Mf(l,"pending"),i.value=!1,a()}return hr(()=>{a()}),(l,u)=>(N(),L("section",bR,[k(s)||r.value?(N(),Ht(ln,{key:0})):(N(),L(we,{key:1},[y("h1",TR,"Compras de "+de(k(n).name)+" "+de(k(n).lastName),1),o.value.length===0?(N(),L("p",CR,"Este usuario no ha realizado ninguna compra")):(N(),L(we,{key:1},[y("table",SR,[xR,y("tbody",null,[(N(!0),L(we,null,Qs(o.value,(h,d)=>(N(),L("tr",{key:d,class:"bg-white border-b dark:bg-gray-800 dark:border-gray-700"},[h.serviceId==="Z6dSllSe8orFL6Sc0U6J"?(N(),L("td",AR,"Plan básico")):(N(),L("td",kR,"Plan premium")),y("td",null,"$"+de(h.total),1),y("td",null,de(h.fecha),1),h.estado==="pending"?(N(),L("td",RR,"Pendiente")):(N(),L("td",NR,"Finalizada")),h.estado==="pending"?(N(),L("td",DR,[y("button",{onClick:p=>c(h.id,h.estado),class:"py-4 font-medium text-white bg-blue-900 text-center w-full hover:scale-95 transition duration-300"},"Marcar como finalizada",8,PR)])):Fe("",!0),h.estado==="completed"?(N(),L("td",OR,[y("button",{onClick:p=>c(h.id,h.estado),class:"py-4 font-medium text-white bg-red-500 text-center w-full hover:scale-95 transition duration-300"},"Marcar como activa",8,MR)])):Fe("",!0)]))),128))])]),i.value?(N(),L("td",LR,[q(ln)])):Fe("",!0)],64))],64))]))}},$R={},UR={class:"bg-slate-200 w-10/12 lg:w-5/12 2xl:w-4/12 h-auto mx-auto text-black py-10 text-center flex flex-col justify-start rounded-lg px-10 border-4 border-solid border-violet-700 shadow-lg my-5"},VR={class:"text-4xl font-bold mb-4"},BR={class:"text-5xl font-bold mb-4"},jR={class:"text-lg mb-4"},qR=y("hr",{class:"w-full mx-auto border-1 border-solid border-gray-700"},null,-1),HR={class:"text-start px-5 my-7 list-disc"};function zR(t,e){return N(),L("article",UR,[y("h3",VR,[kt(t.$slots,"title")]),y("p",BR,[kt(t.$slots,"price")]),y("p",jR,[kt(t.$slots,"description")]),qR,y("ul",HR,[kt(t.$slots,"features")]),kt(t.$slots,"button")])}const KR=br($R,[["render",zR]]);async function WR(){const t=[],e=Ts(Qt,"services");return(await za(e)).forEach(s=>{const r=s.data();t.push(r)}),t}const GR={class:"p-2 flex justify-center items-center flex-col bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 min-h-[90vh] py-10"},QR=y("h1",{class:"text-white text-4xl md:text-5xl xl:text-6xl 2xl:text-7xl font-bold mb-10 mx-auto text-center leading-tight drop-shadow-2xl"},"Planes",-1),YR={key:0,className:"flex justify-center"},XR={key:1,class:"flex flex-col-reverse lg:flex-row-reverse justify-center gap-0 w-10/12 flex-wrap"},JR=["onClick"],ZR={key:0,className:"flex justify-center"},eN={__name:"Pricing",setup(t){const{user:e}=Ui(),n=ce([]),s=ce(!0),r=ce(!1),i=la();hr(async()=>{n.value=await WR(),s.value=!1});const o=async(c,l,u)=>{r.value=!0;try{console.log(c,l,u);const h=await xk(c,l,u);r.value=!1,i.push("/perfil")}catch(h){console.error(h)}},a=(c,l,u)=>{confirm(`¿Estás seguro de que deseas comprar este servicio por $${l}?`)&&o(c,l,u)};return(c,l)=>{const u=an("router-link");return N(),L("section",GR,[QR,s.value?(N(),L("div",YR,[q(ln)])):(N(),L("div",XR,[(N(!0),L(we,null,Qs(n.value,h=>(N(),Ht(KR,{key:h.id},O_({title:G(()=>[re(de(h.name),1)]),price:G(()=>[re("$"+de(h.price),1)]),description:G(()=>[re(de(h.description),1)]),features:G(()=>[(N(!0),L(we,null,Qs(h.features,(d,p)=>(N(),L("li",{key:p,class:"mb-2"},de(d),1))),128))]),_:2},[k(e).id&&k(e).role!==1?{name:"button",fn:G(()=>[y("button",{onClick:d=>a(h.id,h.price,k(e).id),class:"bg-purple-600 hover:bg-purple-700 px-4 py-2 text-white rounded-md"}," Comprar ",8,JR),r.value?(N(),L("div",ZR,[q(ln)])):Fe("",!0)]),key:"0"}:void 0]),1024))),128))])),!s.value&&k(e).role!==1?(N(),Ht(u,{key:2,to:"/usuario/LHL2RfZxOCXzKNARQuhg63gZd663/chat",class:"w-full lg:w-5/12 mx-auto text-center bg-purple-600 hover:bg-purple-700 hover:scale-105 transition duration-200 px-4 py-2 my-5 text-white rounded-md"},{default:G(()=>[re(" Chatear con soporte ")]),_:1})):Fe("",!0)])}}},tN=[{path:"/",component:HA},{path:"/iniciar-sesion",component:uk},{path:"/registrarse",component:Sk},{path:"/precios",component:eN},{path:"/perfil",component:Uk,meta:{requiresAuth:!0}},{path:"/usuario/:id",component:Hk,meta:{requiresAuth:!0}},{path:"/usuario/:id/chat",component:oR,meta:{requiresAuth:!0}},{path:"/admin",component:hR,meta:{requiresAuth:!0,requiresAdmin:!0}},{path:"/admin/usuarios",component:IR,meta:{requiresAuth:!0,requiresAdmin:!0}},{path:"/admin/usuarios/:userId/compras",component:FR,meta:{requiresAuth:!0,requiresAdmin:!0}}],lv=jw({routes:tN,history:rw()});let Tl={id:null,email:null,name:null,lastName:null};iv(t=>Tl=t);lv.beforeEach((t,e)=>{if(t.meta.requiresAuth&&Tl.id===null)return"/iniciar-sesion";if(t.meta.requiresAdmin&&Tl.role!==1)return"/perfil"});const uv=$0(Wx);uv.use(lv);uv.mount("#app");
