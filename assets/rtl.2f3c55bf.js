import{ce as Ae,r as $,c4 as me,bT as le,ay as _,bR as ie,w as S,o as ge,aB as A,g as D,bV as Fe,bJ as N,cf as De,cg as V,a as Ve,ch as _e,h as R,_ as Re,ci as ze,cj as Oe,c as y,aD as be,ck as pe,bP as X,c0 as Qe,bA as xe,bU as je,bZ as Ie,bB as ye,bg as Ke,cl as Ue,bW as Ne,cm as ae,cn as Ge}from"./index.611653d2.js";import{u as Xe,a as Ye}from"./use-dark.06f6f971.js";import{r as ue,b as Je,c as Ze}from"./use-quasar.3f2aa82f.js";function et(){if(window.getSelection!==void 0){const e=window.getSelection();e.empty!==void 0?e.empty():e.removeAllRanges!==void 0&&(e.removeAllRanges(),Ae.is.mobile!==!0&&e.addRange(document.createRange()))}else document.selection!==void 0&&document.selection.empty()}const tt={target:{default:!0},noParentEvent:Boolean,contextMenu:Boolean};function nt({showing:e,avoidEmit:t,configureAnchorEl:n}){const{props:o,proxy:l,emit:c}=D(),i=$(null);let u=null;function h(a){return i.value===null?!1:a===void 0||a.touches===void 0||a.touches.length<=1}const d={};n===void 0&&(Object.assign(d,{hide(a){l.hide(a)},toggle(a){l.toggle(a),a.qAnchorHandled=!0},toggleKey(a){me(a,13)===!0&&d.toggle(a)},contextClick(a){l.hide(a),le(a),_(()=>{l.show(a),a.qAnchorHandled=!0})},prevent:le,mobileTouch(a){if(d.mobileCleanup(a),h(a)!==!0)return;l.hide(a),i.value.classList.add("non-selectable");const f=a.target;ie(d,"anchor",[[f,"touchmove","mobileCleanup","passive"],[f,"touchend","mobileCleanup","passive"],[f,"touchcancel","mobileCleanup","passive"],[i.value,"contextmenu","prevent","notPassive"]]),u=setTimeout(()=>{u=null,l.show(a),a.qAnchorHandled=!0},300)},mobileCleanup(a){i.value.classList.remove("non-selectable"),u!==null&&(clearTimeout(u),u=null),e.value===!0&&a!==void 0&&et()}}),n=function(a=o.contextMenu){if(o.noParentEvent===!0||i.value===null)return;let f;a===!0?l.$q.platform.is.mobile===!0?f=[[i.value,"touchstart","mobileTouch","passive"]]:f=[[i.value,"mousedown","hide","passive"],[i.value,"contextmenu","contextClick","notPassive"]]:f=[[i.value,"click","toggle","passive"],[i.value,"keyup","toggleKey","passive"]],ie(d,"anchor",f)});function r(){Fe(d,"anchor")}function g(a){for(i.value=a;i.value.classList.contains("q-anchor--skip");)i.value=i.value.parentNode;n()}function b(){if(o.target===!1||o.target===""||l.$el.parentNode===null)i.value=null;else if(o.target===!0)g(l.$el.parentNode);else{let a=o.target;if(typeof o.target=="string")try{a=document.querySelector(o.target)}catch{a=void 0}a!=null?(i.value=a.$el||a,n()):(i.value=null,console.error(`Anchor: target "${o.target}" not found`))}}return S(()=>o.contextMenu,a=>{i.value!==null&&(r(),n(a))}),S(()=>o.target,()=>{i.value!==null&&r(),b()}),S(()=>o.noParentEvent,a=>{i.value!==null&&(a===!0?r():n())}),ge(()=>{b(),t!==!0&&o.modelValue===!0&&i.value===null&&c("update:modelValue",!1)}),A(()=>{u!==null&&clearTimeout(u),r()}),{anchorEl:i,canShow:h,anchorEvents:d}}function ot(e,t){const n=$(null);let o;function l(u,h){const d=`${h!==void 0?"add":"remove"}EventListener`,r=h!==void 0?h:o;u!==window&&u[d]("scroll",r,N.passive),window[d]("scroll",r,N.passive),o=h}function c(){n.value!==null&&(l(n.value),n.value=null)}const i=S(()=>e.noParentEvent,()=>{n.value!==null&&(c(),t())});return A(i),{localScrollTarget:n,unconfigureScrollTarget:c,changeScrollEvent:l}}const lt={modelValue:{type:Boolean,default:null},"onUpdate:modelValue":[Function,Array]},it=["beforeShow","show","beforeHide","hide"];function at({showing:e,canShow:t,hideOnRouteChange:n,handleShow:o,handleHide:l,processOnMount:c}){const i=D(),{props:u,emit:h,proxy:d}=i;let r;function g(v){e.value===!0?f(v):b(v)}function b(v){if(u.disable===!0||v!==void 0&&v.qAnchorHandled===!0||t!==void 0&&t(v)!==!0)return;const m=u["onUpdate:modelValue"]!==void 0;m===!0&&(h("update:modelValue",!0),r=v,_(()=>{r===v&&(r=void 0)})),(u.modelValue===null||m===!1)&&a(v)}function a(v){e.value!==!0&&(e.value=!0,h("beforeShow",v),o!==void 0?o(v):h("show",v))}function f(v){if(u.disable===!0)return;const m=u["onUpdate:modelValue"]!==void 0;m===!0&&(h("update:modelValue",!1),r=v,_(()=>{r===v&&(r=void 0)})),(u.modelValue===null||m===!1)&&k(v)}function k(v){e.value!==!1&&(e.value=!1,h("beforeHide",v),l!==void 0?l(v):h("hide",v))}function T(v){u.disable===!0&&v===!0?u["onUpdate:modelValue"]!==void 0&&h("update:modelValue",!1):v===!0!==e.value&&(v===!0?a:k)(r)}S(()=>u.modelValue,T),n!==void 0&&De(i)===!0&&S(()=>d.$route.fullPath,()=>{n.value===!0&&e.value===!0&&f()}),c===!0&&ge(()=>{T(u.modelValue)});const C={show:b,hide:f,toggle:g};return Object.assign(d,C),C}const L=[];function Pt(e){return L.find(t=>t.contentEl!==null&&t.contentEl.contains(e))}function we(e,t){do{if(e.$options.name==="QMenu"){if(e.hide(t),e.$props.separateClosePopup===!0)return V(e)}else if(e.__qPortal===!0){const n=V(e);return n!==void 0&&n.$options.name==="QPopupProxy"?(e.hide(t),n):e}e=V(e)}while(e!=null)}function qt(e,t,n){for(;n!==0&&e!==void 0&&e!==null;){if(e.__qPortal===!0){if(n--,e.$options.name==="QMenu"){e=we(e,t);continue}e.hide(t)}e=V(e)}}function ut(e){for(e=e.parent;e!=null;){if(e.type.name==="QGlobalDialog")return!0;if(e.type.name==="QDialog"||e.type.name==="QMenu")return!1;e=e.parent}return!1}function rt(e,t,n,o){const l=$(!1),c=$(!1);let i=null;const u={},h=o==="dialog"&&ut(e);function d(g){if(g===!0){ue(u),c.value=!0;return}c.value=!1,l.value===!1&&(h===!1&&i===null&&(i=ze(!1,o)),l.value=!0,L.push(e.proxy),Je(u))}function r(g){if(c.value=!1,g!==!0)return;ue(u),l.value=!1;const b=L.indexOf(e.proxy);b!==-1&&L.splice(b,1),i!==null&&(Oe(i),i=null)}return Ve(()=>{r(!0)}),e.proxy.__qPortal=!0,_e(e.proxy,"contentEl",()=>t.value),{showPortal:d,hidePortal:r,portalIsActive:l,portalIsAccessible:c,renderPortal:()=>h===!0?n():l.value===!0?[R(Re,{to:i},n())]:void 0}}const st={transitionShow:{type:String,default:"fade"},transitionHide:{type:String,default:"fade"},transitionDuration:{type:[String,Number],default:300}};function ct(e,t=()=>{},n=()=>{}){return{transitionProps:y(()=>{const o=`q-transition--${e.transitionShow||t()}`,l=`q-transition--${e.transitionHide||n()}`;return{appear:!0,enterFromClass:`${o}-enter-from`,enterActiveClass:`${o}-enter-active`,enterToClass:`${o}-enter-to`,leaveFromClass:`${l}-leave-from`,leaveActiveClass:`${l}-leave-active`,leaveToClass:`${l}-leave-to`}}),transitionStyle:y(()=>`--q-transition-duration: ${e.transitionDuration}ms`)}}function dt(){let e;const t=D();function n(){e=void 0}return be(n),A(n),{removeTick:n,registerTick(o){e=o,_(()=>{e===o&&(pe(t)===!1&&e(),e=void 0)})}}}function ft(){let e=null;const t=D();function n(){e!==null&&(clearTimeout(e),e=null)}return be(n),A(n),{removeTimeout:n,registerTimeout(o,l){n(),pe(t)===!1&&(e=setTimeout(o,l))}}}const P=[];let B;function ht(e){B=e.keyCode===27}function vt(){B===!0&&(B=!1)}function mt(e){B===!0&&(B=!1,me(e,27)===!0&&P[P.length-1](e))}function Te(e){window[e]("keydown",ht),window[e]("blur",vt),window[e]("keyup",mt),B=!1}function gt(e){X.is.desktop===!0&&(P.push(e),P.length===1&&Te("addEventListener"))}function re(e){const t=P.indexOf(e);t>-1&&(P.splice(t,1),P.length===0&&Te("removeEventListener"))}const q=[];function Ee(e){q[q.length-1](e)}function bt(e){X.is.desktop===!0&&(q.push(e),q.length===1&&document.body.addEventListener("focusin",Ee))}function pt(e){const t=q.indexOf(e);t>-1&&(q.splice(t,1),q.length===0&&document.body.removeEventListener("focusin",Ee))}const{notPassiveCapture:z}=N,M=[];function O(e){const t=e.target;if(t===void 0||t.nodeType===8||t.classList.contains("no-pointer-events")===!0)return;let n=L.length-1;for(;n>=0;){const o=L[n].$;if(o.type.name==="QTooltip"){n--;continue}if(o.type.name!=="QDialog")break;if(o.props.seamless!==!0)return;n--}for(let o=M.length-1;o>=0;o--){const l=M[o];if((l.anchorEl.value===null||l.anchorEl.value.contains(t)===!1)&&(t===document.body||l.innerRef.value!==null&&l.innerRef.value.contains(t)===!1))e.qClickOutside=!0,l.onClickOutside(e);else return}}function xt(e){M.push(e),M.length===1&&(document.addEventListener("mousedown",O,z),document.addEventListener("touchstart",O,z))}function se(e){const t=M.findIndex(n=>n===e);t>-1&&(M.splice(t,1),M.length===0&&(document.removeEventListener("mousedown",O,z),document.removeEventListener("touchstart",O,z)))}let ce,de;function fe(e){const t=e.split(" ");return t.length!==2?!1:["top","center","bottom"].includes(t[0])!==!0?(console.error("Anchor/Self position must start with one of top/center/bottom"),!1):["left","middle","right","start","end"].includes(t[1])!==!0?(console.error("Anchor/Self position must end with one of left/middle/right/start/end"),!1):!0}function yt(e){return e?!(e.length!==2||typeof e[0]!="number"||typeof e[1]!="number"):!0}const G={"start#ltr":"left","start#rtl":"right","end#ltr":"right","end#rtl":"left"};["left","middle","right"].forEach(e=>{G[`${e}#ltr`]=e,G[`${e}#rtl`]=e});function he(e,t){const n=e.split(" ");return{vertical:n[0],horizontal:G[`${n[1]}#${t===!0?"rtl":"ltr"}`]}}function wt(e,t){let{top:n,left:o,right:l,bottom:c,width:i,height:u}=e.getBoundingClientRect();return t!==void 0&&(n-=t[1],o-=t[0],c+=t[1],l+=t[0],i+=t[0],u+=t[1]),{top:n,bottom:c,height:u,left:o,right:l,width:i,middle:o+(l-o)/2,center:n+(c-n)/2}}function Tt(e,t,n){let{top:o,left:l}=e.getBoundingClientRect();return o+=t.top,l+=t.left,n!==void 0&&(o+=n[1],l+=n[0]),{top:o,bottom:o+1,height:1,left:l,right:l+1,width:1,middle:l,center:o}}function Et(e,t){return{top:0,center:t/2,bottom:t,left:0,middle:e/2,right:e}}function ve(e,t,n,o){return{top:e[n.vertical]-t[o.vertical],left:e[n.horizontal]-t[o.horizontal]}}function He(e,t=0){if(e.targetEl===null||e.anchorEl===null||t>5)return;if(e.targetEl.offsetHeight===0||e.targetEl.offsetWidth===0){setTimeout(()=>{He(e,t+1)},10);return}const{targetEl:n,offset:o,anchorEl:l,anchorOrigin:c,selfOrigin:i,absoluteOffset:u,fit:h,cover:d,maxHeight:r,maxWidth:g}=e;if(X.is.ios===!0&&window.visualViewport!==void 0){const W=document.body.style,{offsetLeft:x,offsetTop:w}=window.visualViewport;x!==ce&&(W.setProperty("--q-pe-left",x+"px"),ce=x),w!==de&&(W.setProperty("--q-pe-top",w+"px"),de=w)}const{scrollLeft:b,scrollTop:a}=n,f=u===void 0?wt(l,d===!0?[0,0]:o):Tt(l,u,o);Object.assign(n.style,{top:0,left:0,minWidth:null,minHeight:null,maxWidth:g||"100vw",maxHeight:r||"100vh",visibility:"visible"});const{offsetWidth:k,offsetHeight:T}=n,{elWidth:C,elHeight:v}=h===!0||d===!0?{elWidth:Math.max(f.width,k),elHeight:d===!0?Math.max(f.height,T):T}:{elWidth:k,elHeight:T};let m={maxWidth:g,maxHeight:r};(h===!0||d===!0)&&(m.minWidth=f.width+"px",d===!0&&(m.minHeight=f.height+"px")),Object.assign(n.style,m);const E=Et(C,v);let p=ve(f,E,c,i);if(u===void 0||o===void 0)U(p,f,E,c,i);else{const{top:W,left:x}=p;U(p,f,E,c,i);let w=!1;if(p.top!==W){w=!0;const H=2*o[1];f.center=f.top-=H,f.bottom-=H+2}if(p.left!==x){w=!0;const H=2*o[0];f.middle=f.left-=H,f.right-=H+2}w===!0&&(p=ve(f,E,c,i),U(p,f,E,c,i))}m={top:p.top+"px",left:p.left+"px"},p.maxHeight!==void 0&&(m.maxHeight=p.maxHeight+"px",f.height>p.maxHeight&&(m.minHeight=m.maxHeight)),p.maxWidth!==void 0&&(m.maxWidth=p.maxWidth+"px",f.width>p.maxWidth&&(m.minWidth=m.maxWidth)),Object.assign(n.style,m),n.scrollTop!==a&&(n.scrollTop=a),n.scrollLeft!==b&&(n.scrollLeft=b)}function U(e,t,n,o,l){const c=n.bottom,i=n.right,u=Qe(),h=window.innerHeight-u,d=document.body.clientWidth;if(e.top<0||e.top+c>h)if(l.vertical==="center")e.top=t[o.vertical]>h/2?Math.max(0,h-c):0,e.maxHeight=Math.min(c,h);else if(t[o.vertical]>h/2){const r=Math.min(h,o.vertical==="center"?t.center:o.vertical===l.vertical?t.bottom:t.top);e.maxHeight=Math.min(c,r),e.top=Math.max(0,r-c)}else e.top=Math.max(0,o.vertical==="center"?t.center:o.vertical===l.vertical?t.top:t.bottom),e.maxHeight=Math.min(c,h-e.top);if(e.left<0||e.left+i>d)if(e.maxWidth=Math.min(i,d),l.horizontal==="middle")e.left=t[o.horizontal]>d/2?Math.max(0,d-i):0;else if(t[o.horizontal]>d/2){const r=Math.min(d,o.horizontal==="middle"?t.middle:o.horizontal===l.horizontal?t.right:t.left);e.maxWidth=Math.min(i,r),e.left=Math.max(0,r-e.maxWidth)}else e.left=Math.max(0,o.horizontal==="middle"?t.middle:o.horizontal===l.horizontal?t.left:t.right),e.maxWidth=Math.min(i,d-e.left)}var Mt=xe({name:"QMenu",inheritAttrs:!1,props:{...tt,...lt,...Xe,...st,persistent:Boolean,autoClose:Boolean,separateClosePopup:Boolean,noRouteDismiss:Boolean,noRefocus:Boolean,noFocus:Boolean,fit:Boolean,cover:Boolean,square:Boolean,anchor:{type:String,validator:fe},self:{type:String,validator:fe},offset:{type:Array,validator:yt},scrollTarget:{default:void 0},touchPosition:Boolean,maxHeight:{type:String,default:null},maxWidth:{type:String,default:null}},emits:[...it,"click","escapeKey"],setup(e,{slots:t,emit:n,attrs:o}){let l=null,c,i,u;const h=D(),{proxy:d}=h,{$q:r}=d,g=$(null),b=$(!1),a=y(()=>e.persistent!==!0&&e.noRouteDismiss!==!0),f=Ye(e,r),{registerTick:k,removeTick:T}=dt(),{registerTimeout:C}=ft(),{transitionProps:v,transitionStyle:m}=ct(e),{localScrollTarget:E,changeScrollEvent:p,unconfigureScrollTarget:W}=ot(e,ne),{anchorEl:x,canShow:w}=nt({showing:b}),{hide:H}=at({showing:b,canShow:w,handleShow:qe,handleHide:Me,hideOnRouteChange:a,processOnMount:!0}),{showPortal:Y,hidePortal:J,renderPortal:Se}=rt(h,g,Le,"menu"),Q={anchorEl:x,innerRef:g,onClickOutside(s){if(e.persistent!==!0&&b.value===!0)return H(s),(s.type==="touchstart"||s.target.classList.contains("q-dialog__backdrop"))&&Ne(s),!0}},Z=y(()=>he(e.anchor||(e.cover===!0?"center middle":"bottom start"),r.lang.rtl)),ke=y(()=>e.cover===!0?Z.value:he(e.self||"top start",r.lang.rtl)),Ce=y(()=>(e.square===!0?" q-menu--square":"")+(f.value===!0?" q-menu--dark q-dark":"")),Pe=y(()=>e.autoClose===!0?{onClick:We}:{}),ee=y(()=>b.value===!0&&e.persistent!==!0);S(ee,s=>{s===!0?(gt(I),xt(Q)):(re(I),se(Q))});function j(){Ze(()=>{let s=g.value;s&&s.contains(document.activeElement)!==!0&&(s=s.querySelector("[autofocus][tabindex], [data-autofocus][tabindex]")||s.querySelector("[autofocus] [tabindex], [data-autofocus] [tabindex]")||s.querySelector("[autofocus], [data-autofocus]")||s,s.focus({preventScroll:!0}))})}function qe(s){if(l=e.noRefocus===!1?document.activeElement:null,bt(oe),Y(),ne(),c=void 0,s!==void 0&&(e.touchPosition||e.contextMenu)){const K=je(s);if(K.left!==void 0){const{top:$e,left:Be}=x.value.getBoundingClientRect();c={left:K.left-Be,top:K.top-$e}}}i===void 0&&(i=S(()=>r.screen.width+"|"+r.screen.height+"|"+e.self+"|"+e.anchor+"|"+r.lang.rtl,F)),e.noFocus!==!0&&document.activeElement.blur(),k(()=>{F(),e.noFocus!==!0&&j()}),C(()=>{r.platform.is.ios===!0&&(u=e.autoClose,g.value.click()),F(),Y(!0),n("show",s)},e.transitionDuration)}function Me(s){T(),J(),te(!0),l!==null&&(s===void 0||s.qClickOutside!==!0)&&(((s&&s.type.indexOf("key")===0?l.closest('[tabindex]:not([tabindex^="-"])'):void 0)||l).focus(),l=null),C(()=>{J(!0),n("hide",s)},e.transitionDuration)}function te(s){c=void 0,i!==void 0&&(i(),i=void 0),(s===!0||b.value===!0)&&(pt(oe),W(),se(Q),re(I)),s!==!0&&(l=null)}function ne(){(x.value!==null||e.scrollTarget!==void 0)&&(E.value=Ie(x.value,e.scrollTarget),p(E.value,F))}function We(s){u!==!0?(we(d,s),n("click",s)):u=!1}function oe(s){ee.value===!0&&e.noFocus!==!0&&Ue(g.value,s.target)!==!0&&j()}function I(s){n("escapeKey"),H(s)}function F(){He({targetEl:g.value,offset:e.offset,anchorEl:x.value,anchorOrigin:Z.value,selfOrigin:ke.value,absoluteOffset:c,fit:e.fit,cover:e.cover,maxHeight:e.maxHeight,maxWidth:e.maxWidth})}function Le(){return R(Ke,v.value,()=>b.value===!0?R("div",{role:"menu",...o,ref:g,tabindex:-1,class:["q-menu q-position-engine scroll"+Ce.value,o.class],style:[o.style,m.value],...Pe.value},ye(t.default)):null)}return A(te),Object.assign(d,{focus:j,updatePosition:F}),Se}});function Wt(e,t,n){let o;function l(){o!==void 0&&(ae.remove(o),o=void 0)}return A(()=>{e.value===!0&&l()}),{removeFromHistory:l,addToHistory(){o={condition:()=>n.value===!0,handler:t},ae.add(o)}}}function Lt(){let e;return{preventBodyScroll(t){t!==e&&(e!==void 0||t===!0)&&(e=t,Ge(t))}}}function $t(e,t,n){return n<=t?t:Math.min(n,Math.max(t,e))}function Bt(e,t,n){if(n<=t)return t;const o=n-t+1;let l=t+(e-t)%o;return l<t&&(l=o+l),l===0?0:l}var At=xe({name:"QItemLabel",props:{overline:Boolean,caption:Boolean,header:Boolean,lines:[Number,String]},setup(e,{slots:t}){const n=y(()=>parseInt(e.lines,10)),o=y(()=>"q-item__label"+(e.overline===!0?" q-item__label--overline text-overline":"")+(e.caption===!0?" q-item__label--caption text-caption":"")+(e.header===!0?" q-item__label--header":"")+(n.value===1?" ellipsis":"")),l=y(()=>e.lines!==void 0&&n.value>1?{overflow:"hidden",display:"-webkit-box","-webkit-box-orient":"vertical","-webkit-line-clamp":n.value}:null);return()=>R("div",{style:l.value,class:o.value},ye(t.default))}});let Ht=!1;{const e=document.createElement("div");e.setAttribute("dir","rtl"),Object.assign(e.style,{width:"1px",height:"1px",overflow:"auto"});const t=document.createElement("div");Object.assign(t.style,{width:"1000px",height:"1px"}),document.body.appendChild(e),e.appendChild(t),e.scrollLeft=-1e3,Ht=e.scrollLeft>=0,e.remove()}export{Mt as Q,lt as a,it as b,et as c,ft as d,at as e,Wt as f,$t as g,Lt as h,At as i,dt as j,ct as k,rt as l,pt as m,re as n,bt as o,gt as p,Bt as q,Ht as r,Pt as s,qt as t,st as u};
