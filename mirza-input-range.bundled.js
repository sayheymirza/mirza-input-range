/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const t=globalThis,i=t.ShadowRoot&&(void 0===t.ShadyCSS||t.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,n=Symbol(),r=new WeakMap;class e{constructor(t,i,r){if(this._$cssResult$=!0,r!==n)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=i}get styleSheet(){let t=this.o;const n=this.t;if(i&&void 0===t){const i=void 0!==n&&1===n.length;i&&(t=r.get(n)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&r.set(n,t))}return t}toString(){return this.cssText}}const o=(t,...i)=>{const r=1===t.length?t[0]:i.reduce(((i,n,r)=>i+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(n)+t[r+1]),t[0]);return new e(r,t,n)},s=i?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let i="";for(const n of t.cssRules)i+=n.cssText;return(t=>new e("string"==typeof t?t:t+"",void 0,n))(i)})(t):t
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */,{is:a,defineProperty:h,getOwnPropertyDescriptor:u,getOwnPropertyNames:l,getOwnPropertySymbols:c,getPrototypeOf:f}=Object,d=globalThis,p=d.trustedTypes,v=p?p.emptyScript:"",b=d.reactiveElementPolyfillSupport,m=(t,i)=>t,g={toAttribute(t,i){switch(i){case Boolean:t=t?v:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,i){let n=t;switch(i){case Boolean:n=null!==t;break;case Number:n=null===t?null:Number(t);break;case Object:case Array:try{n=JSON.parse(t)}catch(t){n=null}}return n}},w=(t,i)=>!a(t,i),U={attribute:!0,type:String,converter:g,reflect:!1,hasChanged:w};Symbol.metadata??=Symbol("metadata"),d.litPropertyMetadata??=new WeakMap;class x extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,i=U){if(i.state&&(i.attribute=!1),this._$Ei(),this.elementProperties.set(t,i),!i.noAccessor){const n=Symbol(),r=this.getPropertyDescriptor(t,n,i);void 0!==r&&h(this.prototype,t,r)}}static getPropertyDescriptor(t,i,n){const{get:r,set:e}=u(this.prototype,t)??{get(){return this[i]},set(t){this[i]=t}};return{get(){return r?.call(this)},set(i){const o=r?.call(this);e.call(this,i),this.requestUpdate(t,o,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??U}static _$Ei(){if(this.hasOwnProperty(m("elementProperties")))return;const t=f(this);t.finalize(),void 0!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(m("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(m("properties"))){const t=this.properties,i=[...l(t),...c(t)];for(const n of i)this.createProperty(n,t[n])}const t=this[Symbol.metadata];if(null!==t){const i=litPropertyMetadata.get(t);if(void 0!==i)for(const[t,n]of i)this.elementProperties.set(t,n)}this._$Eh=new Map;for(const[t,i]of this.elementProperties){const n=this._$Eu(t,i);void 0!==n&&this._$Eh.set(n,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const i=[];if(Array.isArray(t)){const n=new Set(t.flat(1/0).reverse());for(const t of n)i.unshift(s(t))}else void 0!==t&&i.push(s(t));return i}static _$Eu(t,i){const n=i.attribute;return!1===n?void 0:"string"==typeof n?n:"string"==typeof t?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$Eg=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$ES(),this.requestUpdate(),this.constructor.l?.forEach((t=>t(this)))}addController(t){(this._$E_??=new Set).add(t),void 0!==this.renderRoot&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$E_?.delete(t)}_$ES(){const t=new Map,i=this.constructor.elementProperties;for(const n of i.keys())this.hasOwnProperty(n)&&(t.set(n,this[n]),delete this[n]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const n=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((n,r)=>{if(i)n.adoptedStyleSheets=r.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet));else for(const i of r){const r=document.createElement("style"),e=t.litNonce;void 0!==e&&r.setAttribute("nonce",e),r.textContent=i.cssText,n.appendChild(r)}})(n,this.constructor.elementStyles),n}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$E_?.forEach((t=>t.hostConnected?.()))}enableUpdating(t){}disconnectedCallback(){this._$E_?.forEach((t=>t.hostDisconnected?.()))}attributeChangedCallback(t,i,n){this._$AK(t,n)}_$EO(t,i){const n=this.constructor.elementProperties.get(t),r=this.constructor._$Eu(t,n);if(void 0!==r&&!0===n.reflect){const e=(void 0!==n.converter?.toAttribute?n.converter:g).toAttribute(i,n.type);this._$Em=t,null==e?this.removeAttribute(r):this.setAttribute(r,e),this._$Em=null}}_$AK(t,i){const n=this.constructor,r=n._$Eh.get(t);if(void 0!==r&&this._$Em!==r){const t=n.getPropertyOptions(r),e="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==t.converter?.fromAttribute?t.converter:g;this._$Em=r,this[r]=e.fromAttribute(i,t.type),this._$Em=null}}requestUpdate(t,i,n,r=!1,e){if(void 0!==t){if(n??=this.constructor.getPropertyOptions(t),!(n.hasChanged??w)(r?e:this[t],i))return;this.C(t,i,n)}!1===this.isUpdatePending&&(this._$Eg=this._$EP())}C(t,i,n){this._$AL.has(t)||this._$AL.set(t,i),!0===n.reflect&&this._$Em!==t&&(this._$Ej??=new Set).add(t)}async _$EP(){this.isUpdatePending=!0;try{await this._$Eg}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[t,i]of this._$Ep)this[t]=i;this._$Ep=void 0}const t=this.constructor.elementProperties;if(t.size>0)for(const[i,n]of t)!0!==n.wrapped||this._$AL.has(i)||void 0===this[i]||this.C(i,this[i],n)}let t=!1;const i=this._$AL;try{t=this.shouldUpdate(i),t?(this.willUpdate(i),this._$E_?.forEach((t=>t.hostUpdate?.())),this.update(i)):this._$ET()}catch(i){throw t=!1,this._$ET(),i}t&&this._$AE(i)}willUpdate(t){}_$AE(t){this._$E_?.forEach((t=>t.hostUpdated?.())),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$ET(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Eg}shouldUpdate(t){return!0}update(t){this._$Ej&&=this._$Ej.forEach((t=>this._$EO(t,this[t]))),this._$ET()}updated(t){}firstUpdated(t){}}x.elementStyles=[],x.shadowRootOptions={mode:"open"},x[m("elementProperties")]=new Map,x[m("finalized")]=new Map,b?.({ReactiveElement:x}),(d.reactiveElementVersions??=[]).push("2.0.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const y=globalThis,S=y.trustedTypes,k=S?S.createPolicy("lit-html",{createHTML:t=>t}):void 0,E="$lit$",A=`lit$${(Math.random()+"").slice(9)}$`,z="?"+A,M=`<${z}>`,N=document,$=()=>N.createComment(""),C=t=>null===t||"object"!=typeof t&&"function"!=typeof t,O=Array.isArray,P="[ \t\n\f\r]",_=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,D=/-->/g,j=/>/g,F=RegExp(`>|${P}(?:([^\\s"'>=/]+)(${P}*=${P}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),T=/'/g,B=/"/g,R=/^(?:script|style|textarea|title)$/i,L=(t=>(i,...n)=>({_$litType$:t,strings:i,values:n}))(1),H=Symbol.for("lit-noChange"),V=Symbol.for("lit-nothing"),I=new WeakMap,q=N.createTreeWalker(N,129);function W(t,i){if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==k?k.createHTML(i):i}const J=(t,i)=>{const n=t.length-1,r=[];let e,o=2===i?"<svg>":"",s=_;for(let i=0;i<n;i++){const n=t[i];let a,h,u=-1,l=0;for(;l<n.length&&(s.lastIndex=l,h=s.exec(n),null!==h);)l=s.lastIndex,s===_?"!--"===h[1]?s=D:void 0!==h[1]?s=j:void 0!==h[2]?(R.test(h[2])&&(e=RegExp("</"+h[2],"g")),s=F):void 0!==h[3]&&(s=F):s===F?">"===h[0]?(s=e??_,u=-1):void 0===h[1]?u=-2:(u=s.lastIndex-h[2].length,a=h[1],s=void 0===h[3]?F:'"'===h[3]?B:T):s===B||s===T?s=F:s===D||s===j?s=_:(s=F,e=void 0);const c=s===F&&t[i+1].startsWith("/>")?" ":"";o+=s===_?n+M:u>=0?(r.push(a),n.slice(0,u)+E+n.slice(u)+A+c):n+A+(-2===u?i:c)}return[W(t,o+(t[n]||"<?>")+(2===i?"</svg>":"")),r]};class Z{constructor({strings:t,_$litType$:i},n){let r;this.parts=[];let e=0,o=0;const s=t.length-1,a=this.parts,[h,u]=J(t,i);if(this.el=Z.createElement(h,n),q.currentNode=this.el.content,2===i){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes)}for(;null!==(r=q.nextNode())&&a.length<s;){if(1===r.nodeType){if(r.hasAttributes())for(const t of r.getAttributeNames())if(t.endsWith(E)){const i=u[o++],n=r.getAttribute(t).split(A),s=/([.?@])?(.*)/.exec(i);a.push({type:1,index:e,name:s[2],strings:n,ctor:"."===s[1]?Y:"?"===s[1]?tt:"@"===s[1]?it:X}),r.removeAttribute(t)}else t.startsWith(A)&&(a.push({type:6,index:e}),r.removeAttribute(t));if(R.test(r.tagName)){const t=r.textContent.split(A),i=t.length-1;if(i>0){r.textContent=S?S.emptyScript:"";for(let n=0;n<i;n++)r.append(t[n],$()),q.nextNode(),a.push({type:2,index:++e});r.append(t[i],$())}}}else if(8===r.nodeType)if(r.data===z)a.push({type:2,index:e});else{let t=-1;for(;-1!==(t=r.data.indexOf(A,t+1));)a.push({type:7,index:e}),t+=A.length-1}e++}}static createElement(t,i){const n=N.createElement("template");return n.innerHTML=t,n}}function K(t,i,n=t,r){if(i===H)return i;let e=void 0!==r?n._$Co?.[r]:n._$Cl;const o=C(i)?void 0:i._$litDirective$;return e?.constructor!==o&&(e?._$AO?.(!1),void 0===o?e=void 0:(e=new o(t),e._$AT(t,n,r)),void 0!==r?(n._$Co??=[])[r]=e:n._$Cl=e),void 0!==e&&(i=K(t,e._$AS(t,i.values),e,r)),i}class G{constructor(t,i){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=i}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:i},parts:n}=this._$AD,r=(t?.creationScope??N).importNode(i,!0);q.currentNode=r;let e=q.nextNode(),o=0,s=0,a=n[0];for(;void 0!==a;){if(o===a.index){let i;2===a.type?i=new Q(e,e.nextSibling,this,t):1===a.type?i=new a.ctor(e,a.name,a.strings,this,t):6===a.type&&(i=new nt(e,this,t)),this._$AV.push(i),a=n[++s]}o!==a?.index&&(e=q.nextNode(),o++)}return q.currentNode=N,r}p(t){let i=0;for(const n of this._$AV)void 0!==n&&(void 0!==n.strings?(n._$AI(t,n,i),i+=n.strings.length-2):n._$AI(t[i])),i++}}class Q{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,i,n,r){this.type=2,this._$AH=V,this._$AN=void 0,this._$AA=t,this._$AB=i,this._$AM=n,this.options=r,this._$Cv=r?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const i=this._$AM;return void 0!==i&&11===t?.nodeType&&(t=i.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,i=this){t=K(this,t,i),C(t)?t===V||null==t||""===t?(this._$AH!==V&&this._$AR(),this._$AH=V):t!==this._$AH&&t!==H&&this._(t):void 0!==t._$litType$?this.g(t):void 0!==t.nodeType?this.$(t):(t=>O(t)||"function"==typeof t?.[Symbol.iterator])(t)?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}_(t){this._$AH!==V&&C(this._$AH)?this._$AA.nextSibling.data=t:this.$(N.createTextNode(t)),this._$AH=t}g(t){const{values:i,_$litType$:n}=t,r="number"==typeof n?this._$AC(t):(void 0===n.el&&(n.el=Z.createElement(W(n.h,n.h[0]),this.options)),n);if(this._$AH?._$AD===r)this._$AH.p(i);else{const t=new G(r,this),n=t.u(this.options);t.p(i),this.$(n),this._$AH=t}}_$AC(t){let i=I.get(t.strings);return void 0===i&&I.set(t.strings,i=new Z(t)),i}T(t){O(this._$AH)||(this._$AH=[],this._$AR());const i=this._$AH;let n,r=0;for(const e of t)r===i.length?i.push(n=new Q(this.k($()),this.k($()),this,this.options)):n=i[r],n._$AI(e),r++;r<i.length&&(this._$AR(n&&n._$AB.nextSibling,r),i.length=r)}_$AR(t=this._$AA.nextSibling,i){for(this._$AP?.(!1,!0,i);t&&t!==this._$AB;){const i=t.nextSibling;t.remove(),t=i}}setConnected(t){void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t))}}class X{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,i,n,r,e){this.type=1,this._$AH=V,this._$AN=void 0,this.element=t,this.name=i,this._$AM=r,this.options=e,n.length>2||""!==n[0]||""!==n[1]?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=V}_$AI(t,i=this,n,r){const e=this.strings;let o=!1;if(void 0===e)t=K(this,t,i,0),o=!C(t)||t!==this._$AH&&t!==H,o&&(this._$AH=t);else{const r=t;let s,a;for(t=e[0],s=0;s<e.length-1;s++)a=K(this,r[n+s],i,s),a===H&&(a=this._$AH[s]),o||=!C(a)||a!==this._$AH[s],a===V?t=V:t!==V&&(t+=(a??"")+e[s+1]),this._$AH[s]=a}o&&!r&&this.O(t)}O(t){t===V?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class Y extends X{constructor(){super(...arguments),this.type=3}O(t){this.element[this.name]=t===V?void 0:t}}class tt extends X{constructor(){super(...arguments),this.type=4}O(t){this.element.toggleAttribute(this.name,!!t&&t!==V)}}class it extends X{constructor(t,i,n,r,e){super(t,i,n,r,e),this.type=5}_$AI(t,i=this){if((t=K(this,t,i,0)??V)===H)return;const n=this._$AH,r=t===V&&n!==V||t.capture!==n.capture||t.once!==n.once||t.passive!==n.passive,e=t!==V&&(n===V||r);r&&this.element.removeEventListener(this.name,this,n),e&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class nt{constructor(t,i,n){this.element=t,this.type=6,this._$AN=void 0,this._$AM=i,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(t){K(this,t)}}const rt=y.litHtmlPolyfillSupport;rt?.(Z,Q),(y.litHtmlVersions??=[]).push("3.1.0");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
class et extends x{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const i=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((t,i,n)=>{const r=n?.renderBefore??i;let e=r._$litPart$;if(void 0===e){const t=n?.renderBefore??null;r._$litPart$=e=new Q(i.insertBefore($(),t),t,void 0,n??{})}return e._$AI(t),e})(i,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return H}}et._$litElement$=!0,et.finalized=!0,globalThis.litElementHydrateSupport?.({LitElement:et});const ot=globalThis.litElementPolyfillSupport;ot?.({LitElement:et}),(globalThis.litElementVersions??=[]).push("4.0.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const st={attribute:!0,type:String,converter:g,reflect:!1,hasChanged:w},at=(t=st,i,n)=>{const{kind:r,metadata:e}=n;let o=globalThis.litPropertyMetadata.get(e);if(void 0===o&&globalThis.litPropertyMetadata.set(e,o=new Map),o.set(n.name,t),"accessor"===r){const{name:r}=n;return{set(n){const e=i.get.call(this);i.set.call(this,n),this.requestUpdate(r,e,t)},init(i){return void 0!==i&&this.C(r,void 0,t),i}}}if("setter"===r){const{name:r}=n;return function(n){const e=this[r];i.call(this,n),this.requestUpdate(r,e,t)}}throw Error("Unsupported decorator location: "+r)};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function ht(t){return(i,n)=>"object"==typeof n?at(t,i,n):((t,i,n)=>{const r=i.hasOwnProperty(n);return i.constructor.createProperty(n,r?{...t,wrapped:!0}:t),r?Object.getOwnPropertyDescriptor(i,n):void 0})(t,i,n)}var ut,lt;function ct(t){return"object"==typeof t&&"function"==typeof t.to}function ft(t){t.parentElement.removeChild(t)}function dt(t){return null!=t}function pt(t){t.preventDefault()}function vt(t){return"number"==typeof t&&!isNaN(t)&&isFinite(t)}function bt(t,i,n){n>0&&(Ut(t,i),setTimeout((function(){xt(t,i)}),n))}function mt(t){return Math.max(Math.min(t,100),0)}function gt(t){return Array.isArray(t)?t:[t]}function wt(t){var i=(t=String(t)).split(".");return i.length>1?i[1].length:0}function Ut(t,i){t.classList&&!/\s/.test(i)?t.classList.add(i):t.className+=" "+i}function xt(t,i){t.classList&&!/\s/.test(i)?t.classList.remove(i):t.className=t.className.replace(new RegExp("(^|\\b)"+i.split(" ").join("|")+"(\\b|$)","gi")," ")}function yt(t){var i=void 0!==window.pageXOffset,n="CSS1Compat"===(t.compatMode||"");return{x:i?window.pageXOffset:n?t.documentElement.scrollLeft:t.body.scrollLeft,y:i?window.pageYOffset:n?t.documentElement.scrollTop:t.body.scrollTop}}function St(t,i){return 100/(i-t)}function kt(t,i,n){return 100*i/(t[n+1]-t[n])}function Et(t,i){for(var n=1;t>=i[n];)n+=1;return n}function At(t,i,n){if(n>=t.slice(-1)[0])return 100;var r=Et(n,t),e=t[r-1],o=t[r],s=i[r-1],a=i[r];return s+function(t,i){return kt(t,t[0]<0?i+Math.abs(t[0]):i-t[0],0)}([e,o],n)/St(s,a)}function zt(t,i,n,r){if(100===r)return r;var e=Et(r,t),o=t[e-1],s=t[e];return n?r-o>(s-o)/2?s:o:i[e-1]?t[e-1]+function(t,i){return Math.round(t/i)*i}(r-t[e-1],i[e-1]):r}!function(t){t.Range="range",t.Steps="steps",t.Positions="positions",t.Count="count",t.Values="values"}(ut||(ut={})),function(t){t[t.None=-1]="None",t[t.NoValue=0]="NoValue",t[t.LargeValue=1]="LargeValue",t[t.SmallValue=2]="SmallValue"}(lt||(lt={}));var Mt=function(){function t(t,i,n){var r;this.xPct=[],this.xVal=[],this.xSteps=[],this.xNumSteps=[],this.xHighestCompleteStep=[],this.xSteps=[n||!1],this.xNumSteps=[!1],this.snap=i;var e=[];for(Object.keys(t).forEach((function(i){e.push([gt(t[i]),i])})),e.sort((function(t,i){return t[0][0]-i[0][0]})),r=0;r<e.length;r++)this.handleEntryPoint(e[r][1],e[r][0]);for(this.xNumSteps=this.xSteps.slice(0),r=0;r<this.xNumSteps.length;r++)this.handleStepPoint(r,this.xNumSteps[r])}return t.prototype.getDistance=function(t){for(var i=[],n=0;n<this.xNumSteps.length-1;n++)i[n]=kt(this.xVal,t,n);return i},t.prototype.getAbsoluteDistance=function(t,i,n){var r,e=0;if(t<this.xPct[this.xPct.length-1])for(;t>this.xPct[e+1];)e++;else t===this.xPct[this.xPct.length-1]&&(e=this.xPct.length-2);n||t!==this.xPct[e+1]||e++,null===i&&(i=[]);var o=1,s=i[e],a=0,h=0,u=0,l=0;for(r=n?(t-this.xPct[e])/(this.xPct[e+1]-this.xPct[e]):(this.xPct[e+1]-t)/(this.xPct[e+1]-this.xPct[e]);s>0;)a=this.xPct[e+1+l]-this.xPct[e+l],i[e+l]*o+100-100*r>100?(h=a*r,o=(s-100*r)/i[e+l],r=1):(h=i[e+l]*a/100*o,o=0),n?(u-=h,this.xPct.length+l>=1&&l--):(u+=h,this.xPct.length-l>=1&&l++),s=i[e+l]*o;return t+u},t.prototype.toStepping=function(t){return t=At(this.xVal,this.xPct,t)},t.prototype.fromStepping=function(t){return function(t,i,n){if(n>=100)return t.slice(-1)[0];var r=Et(n,i),e=t[r-1],o=t[r],s=i[r-1];return function(t,i){return i*(t[1]-t[0])/100+t[0]}([e,o],(n-s)*St(s,i[r]))}(this.xVal,this.xPct,t)},t.prototype.getStep=function(t){return t=zt(this.xPct,this.xSteps,this.snap,t)},t.prototype.getDefaultStep=function(t,i,n){var r=Et(t,this.xPct);return(100===t||i&&t===this.xPct[r-1])&&(r=Math.max(r-1,1)),(this.xVal[r]-this.xVal[r-1])/n},t.prototype.getNearbySteps=function(t){var i=Et(t,this.xPct);return{stepBefore:{startValue:this.xVal[i-2],step:this.xNumSteps[i-2],highestStep:this.xHighestCompleteStep[i-2]},thisStep:{startValue:this.xVal[i-1],step:this.xNumSteps[i-1],highestStep:this.xHighestCompleteStep[i-1]},stepAfter:{startValue:this.xVal[i],step:this.xNumSteps[i],highestStep:this.xHighestCompleteStep[i]}}},t.prototype.countStepDecimals=function(){var t=this.xNumSteps.map(wt);return Math.max.apply(null,t)},t.prototype.hasNoSize=function(){return this.xVal[0]===this.xVal[this.xVal.length-1]},t.prototype.convert=function(t){return this.getStep(this.toStepping(t))},t.prototype.handleEntryPoint=function(t,i){var n;if(!vt(n="min"===t?0:"max"===t?100:parseFloat(t))||!vt(i[0]))throw new Error("noUiSlider: 'range' value isn't numeric.");this.xPct.push(n),this.xVal.push(i[0]);var r=Number(i[1]);n?this.xSteps.push(!isNaN(r)&&r):isNaN(r)||(this.xSteps[0]=r),this.xHighestCompleteStep.push(0)},t.prototype.handleStepPoint=function(t,i){if(i)if(this.xVal[t]!==this.xVal[t+1]){this.xSteps[t]=kt([this.xVal[t],this.xVal[t+1]],i,0)/St(this.xPct[t],this.xPct[t+1]);var n=(this.xVal[t+1]-this.xVal[t])/this.xNumSteps[t],r=Math.ceil(Number(n.toFixed(3))-1),e=this.xVal[t]+this.xNumSteps[t]*r;this.xHighestCompleteStep[t]=e}else this.xSteps[t]=this.xHighestCompleteStep[t]=this.xVal[t]},t}(),Nt={to:function(t){return void 0===t?"":t.toFixed(2)},from:Number},$t={target:"target",base:"base",origin:"origin",handle:"handle",handleLower:"handle-lower",handleUpper:"handle-upper",touchArea:"touch-area",horizontal:"horizontal",vertical:"vertical",background:"background",connect:"connect",connects:"connects",ltr:"ltr",rtl:"rtl",textDirectionLtr:"txt-dir-ltr",textDirectionRtl:"txt-dir-rtl",draggable:"draggable",drag:"state-drag",tap:"state-tap",active:"active",tooltip:"tooltip",pips:"pips",pipsHorizontal:"pips-horizontal",pipsVertical:"pips-vertical",marker:"marker",markerHorizontal:"marker-horizontal",markerVertical:"marker-vertical",markerNormal:"marker-normal",markerLarge:"marker-large",markerSub:"marker-sub",value:"value",valueHorizontal:"value-horizontal",valueVertical:"value-vertical",valueNormal:"value-normal",valueLarge:"value-large",valueSub:"value-sub"},Ct={tooltips:".__tooltips",aria:".__aria"};function Ot(t,i){if(!vt(i))throw new Error("noUiSlider: 'step' is not numeric.");t.singleStep=i}function Pt(t,i){if(!vt(i))throw new Error("noUiSlider: 'keyboardPageMultiplier' is not numeric.");t.keyboardPageMultiplier=i}function _t(t,i){if(!vt(i))throw new Error("noUiSlider: 'keyboardMultiplier' is not numeric.");t.keyboardMultiplier=i}function Dt(t,i){if(!vt(i))throw new Error("noUiSlider: 'keyboardDefaultStep' is not numeric.");t.keyboardDefaultStep=i}function jt(t,i){if("object"!=typeof i||Array.isArray(i))throw new Error("noUiSlider: 'range' is not an object.");if(void 0===i.min||void 0===i.max)throw new Error("noUiSlider: Missing 'min' or 'max' in 'range'.");t.spectrum=new Mt(i,t.snap||!1,t.singleStep)}function Ft(t,i){if(i=gt(i),!Array.isArray(i)||!i.length)throw new Error("noUiSlider: 'start' option is incorrect.");t.handles=i.length,t.start=i}function Tt(t,i){if("boolean"!=typeof i)throw new Error("noUiSlider: 'snap' option must be a boolean.");t.snap=i}function Bt(t,i){if("boolean"!=typeof i)throw new Error("noUiSlider: 'animate' option must be a boolean.");t.animate=i}function Rt(t,i){if("number"!=typeof i)throw new Error("noUiSlider: 'animationDuration' option must be a number.");t.animationDuration=i}function Lt(t,i){var n,r=[!1];if("lower"===i?i=[!0,!1]:"upper"===i&&(i=[!1,!0]),!0===i||!1===i){for(n=1;n<t.handles;n++)r.push(i);r.push(!1)}else{if(!Array.isArray(i)||!i.length||i.length!==t.handles+1)throw new Error("noUiSlider: 'connect' option doesn't match handle count.");r=i}t.connect=r}function Ht(t,i){switch(i){case"horizontal":t.ort=0;break;case"vertical":t.ort=1;break;default:throw new Error("noUiSlider: 'orientation' option is invalid.")}}function Vt(t,i){if(!vt(i))throw new Error("noUiSlider: 'margin' option must be numeric.");0!==i&&(t.margin=t.spectrum.getDistance(i))}function It(t,i){if(!vt(i))throw new Error("noUiSlider: 'limit' option must be numeric.");if(t.limit=t.spectrum.getDistance(i),!t.limit||t.handles<2)throw new Error("noUiSlider: 'limit' option is only supported on linear sliders with 2 or more handles.")}function qt(t,i){var n;if(!vt(i)&&!Array.isArray(i))throw new Error("noUiSlider: 'padding' option must be numeric or array of exactly 2 numbers.");if(Array.isArray(i)&&2!==i.length&&!vt(i[0])&&!vt(i[1]))throw new Error("noUiSlider: 'padding' option must be numeric or array of exactly 2 numbers.");if(0!==i){for(Array.isArray(i)||(i=[i,i]),t.padding=[t.spectrum.getDistance(i[0]),t.spectrum.getDistance(i[1])],n=0;n<t.spectrum.xNumSteps.length-1;n++)if(t.padding[0][n]<0||t.padding[1][n]<0)throw new Error("noUiSlider: 'padding' option must be a positive number(s).");var r=i[0]+i[1],e=t.spectrum.xVal[0];if(r/(t.spectrum.xVal[t.spectrum.xVal.length-1]-e)>1)throw new Error("noUiSlider: 'padding' option must not exceed 100% of the range.")}}function Wt(t,i){switch(i){case"ltr":t.dir=0;break;case"rtl":t.dir=1;break;default:throw new Error("noUiSlider: 'direction' option was not recognized.")}}function Jt(t,i){if("string"!=typeof i)throw new Error("noUiSlider: 'behaviour' must be a string containing options.");var n=i.indexOf("tap")>=0,r=i.indexOf("drag")>=0,e=i.indexOf("fixed")>=0,o=i.indexOf("snap")>=0,s=i.indexOf("hover")>=0,a=i.indexOf("unconstrained")>=0,h=i.indexOf("drag-all")>=0,u=i.indexOf("smooth-steps")>=0;if(e){if(2!==t.handles)throw new Error("noUiSlider: 'fixed' behaviour must be used with 2 handles");Vt(t,t.start[1]-t.start[0])}if(a&&(t.margin||t.limit))throw new Error("noUiSlider: 'unconstrained' behaviour cannot be used with margin or limit");t.events={tap:n||o,drag:r,dragAll:h,smoothSteps:u,fixed:e,snap:o,hover:s,unconstrained:a}}function Zt(t,i){if(!1!==i)if(!0===i||ct(i)){t.tooltips=[];for(var n=0;n<t.handles;n++)t.tooltips.push(i)}else{if((i=gt(i)).length!==t.handles)throw new Error("noUiSlider: must pass a formatter for all handles.");i.forEach((function(t){if("boolean"!=typeof t&&!ct(t))throw new Error("noUiSlider: 'tooltips' must be passed a formatter or 'false'.")})),t.tooltips=i}}function Kt(t,i){if(i.length!==t.handles)throw new Error("noUiSlider: must pass a attributes for all handles.");t.handleAttributes=i}function Gt(t,i){if(!ct(i))throw new Error("noUiSlider: 'ariaFormat' requires 'to' method.");t.ariaFormat=i}function Qt(t,i){if(!function(t){return ct(t)&&"function"==typeof t.from}(i))throw new Error("noUiSlider: 'format' requires 'to' and 'from' methods.");t.format=i}function Xt(t,i){if("boolean"!=typeof i)throw new Error("noUiSlider: 'keyboardSupport' option must be a boolean.");t.keyboardSupport=i}function Yt(t,i){t.documentElement=i}function ti(t,i){if("string"!=typeof i&&!1!==i)throw new Error("noUiSlider: 'cssPrefix' must be a string or `false`.");t.cssPrefix=i}function ii(t,i){if("object"!=typeof i)throw new Error("noUiSlider: 'cssClasses' must be an object.");"string"==typeof t.cssPrefix?(t.cssClasses={},Object.keys(i).forEach((function(n){t.cssClasses[n]=t.cssPrefix+i[n]}))):t.cssClasses=i}function ni(t){var i={margin:null,limit:null,padding:null,animate:!0,animationDuration:300,ariaFormat:Nt,format:Nt},n={step:{r:!1,t:Ot},keyboardPageMultiplier:{r:!1,t:Pt},keyboardMultiplier:{r:!1,t:_t},keyboardDefaultStep:{r:!1,t:Dt},start:{r:!0,t:Ft},connect:{r:!0,t:Lt},direction:{r:!0,t:Wt},snap:{r:!1,t:Tt},animate:{r:!1,t:Bt},animationDuration:{r:!1,t:Rt},range:{r:!0,t:jt},orientation:{r:!1,t:Ht},margin:{r:!1,t:Vt},limit:{r:!1,t:It},padding:{r:!1,t:qt},behaviour:{r:!0,t:Jt},ariaFormat:{r:!1,t:Gt},format:{r:!1,t:Qt},tooltips:{r:!1,t:Zt},keyboardSupport:{r:!0,t:Xt},documentElement:{r:!1,t:Yt},cssPrefix:{r:!0,t:ti},cssClasses:{r:!0,t:ii},handleAttributes:{r:!1,t:Kt}},r={connect:!1,direction:"ltr",behaviour:"tap",orientation:"horizontal",keyboardSupport:!0,cssPrefix:"noUi-",cssClasses:$t,keyboardPageMultiplier:5,keyboardMultiplier:1,keyboardDefaultStep:10};t.format&&!t.ariaFormat&&(t.ariaFormat=t.format),Object.keys(n).forEach((function(e){if(dt(t[e])||void 0!==r[e])n[e].t(i,dt(t[e])?t[e]:r[e]);else if(n[e].r)throw new Error("noUiSlider: '"+e+"' is required.")})),i.pips=t.pips;var e=document.createElement("div"),o=void 0!==e.style.msTransform,s=void 0!==e.style.transform;i.transformRule=s?"transform":o?"msTransform":"webkitTransform";return i.style=[["left","top"],["right","bottom"]][i.dir][i.ort],i}function ri(t,i,n){var r,e,o,s,a,h,u,l=window.navigator.pointerEnabled?{start:"pointerdown",move:"pointermove",end:"pointerup"}:window.navigator.msPointerEnabled?{start:"MSPointerDown",move:"MSPointerMove",end:"MSPointerUp"}:{start:"mousedown touchstart",move:"mousemove touchmove",end:"mouseup touchend"},c=window.CSS&&CSS.supports&&CSS.supports("touch-action","none")&&function(){var t=!1;try{var i=Object.defineProperty({},"passive",{get:function(){t=!0}});window.addEventListener("test",null,i)}catch(t){}return t}(),f=t,d=i.spectrum,p=[],v=[],b=[],m=0,g={},w=t.ownerDocument,U=i.documentElement||w.documentElement,x=w.body,y="rtl"===w.dir||1===i.ort?0:100;function S(t,i){var n=w.createElement("div");return i&&Ut(n,i),t.appendChild(n),n}function k(t,n){var r=S(t,i.cssClasses.origin),e=S(r,i.cssClasses.handle);if(S(e,i.cssClasses.touchArea),e.setAttribute("data-handle",String(n)),i.keyboardSupport&&(e.setAttribute("tabindex","0"),e.addEventListener("keydown",(function(t){return function(t,n){if(z()||M(n))return!1;var r=["Left","Right"],e=["Down","Up"],o=["PageDown","PageUp"],s=["Home","End"];i.dir&&!i.ort?r.reverse():i.ort&&!i.dir&&(e.reverse(),o.reverse());var a,h=t.key.replace("Arrow",""),u=h===o[0],l=h===o[1],c=h===e[0]||h===r[0]||u,f=h===e[1]||h===r[1]||l,b=h===s[0],m=h===s[1];if(!(c||f||b||m))return!0;if(t.preventDefault(),f||c){var g=c?0:1,w=et(n)[g];if(null===w)return!1;!1===w&&(w=d.getDefaultStep(v[n],c,i.keyboardDefaultStep)),w*=l||u?i.keyboardPageMultiplier:i.keyboardMultiplier,w=Math.max(w,1e-7),w*=c?-1:1,a=p[n]+w}else a=m?i.spectrum.xVal[i.spectrum.xVal.length-1]:i.spectrum.xVal[0];return Y(n,d.toStepping(a),!0,!0),J("slide",n),J("update",n),J("change",n),J("set",n),!1}(t,n)}))),void 0!==i.handleAttributes){var o=i.handleAttributes[n];Object.keys(o).forEach((function(t){e.setAttribute(t,o[t])}))}return e.setAttribute("role","slider"),e.setAttribute("aria-orientation",i.ort?"vertical":"horizontal"),0===n?Ut(e,i.cssClasses.handleLower):n===i.handles-1&&Ut(e,i.cssClasses.handleUpper),r.handle=e,r}function E(t,n){return!!n&&S(t,i.cssClasses.connect)}function A(t,n){return!(!i.tooltips||!i.tooltips[n])&&S(t.firstChild,i.cssClasses.tooltip)}function z(){return f.hasAttribute("disabled")}function M(t){return e[t].hasAttribute("disabled")}function N(){a&&(W("update"+Ct.tooltips),a.forEach((function(t){t&&ft(t)})),a=null)}function $(){N(),a=e.map(A),q("update"+Ct.tooltips,(function(t,n,r){if(a&&i.tooltips&&!1!==a[n]){var e=t[n];!0!==i.tooltips[n]&&(e=i.tooltips[n].to(r[n])),a[n].innerHTML=e}}))}function C(t,i){return t.map((function(t){return d.fromStepping(i?d.getStep(t):t)}))}function O(t){var i,n=function(t){if(t.mode===ut.Range||t.mode===ut.Steps)return d.xVal;if(t.mode===ut.Count){if(t.values<2)throw new Error("noUiSlider: 'values' (>= 2) required for mode 'count'.");for(var i=t.values-1,n=100/i,r=[];i--;)r[i]=i*n;return r.push(100),C(r,t.stepped)}return t.mode===ut.Positions?C(t.values,t.stepped):t.mode===ut.Values?t.stepped?t.values.map((function(t){return d.fromStepping(d.getStep(d.toStepping(t)))})):t.values:[]}(t),r={},e=d.xVal[0],o=d.xVal[d.xVal.length-1],s=!1,a=!1,h=0;return i=n.slice().sort((function(t,i){return t-i})),n=i.filter((function(t){return!this[t]&&(this[t]=!0)}),{}),n[0]!==e&&(n.unshift(e),s=!0),n[n.length-1]!==o&&(n.push(o),a=!0),n.forEach((function(i,e){var o,u,l,c,f,p,v,b,m,g,w=i,U=n[e+1],x=t.mode===ut.Steps;for(x&&(o=d.xNumSteps[e]),o||(o=U-w),void 0===U&&(U=w),o=Math.max(o,1e-7),u=w;u<=U;u=Number((u+o).toFixed(7))){for(b=(f=(c=d.toStepping(u))-h)/(t.density||1),g=f/(m=Math.round(b)),l=1;l<=m;l+=1)r[(p=h+l*g).toFixed(5)]=[d.fromStepping(p),0];v=n.indexOf(u)>-1?lt.LargeValue:x?lt.SmallValue:lt.NoValue,!e&&s&&u!==U&&(v=0),u===U&&a||(r[c.toFixed(5)]=[u,v]),h=c}})),r}function P(t,n,r){var e,o,s=w.createElement("div"),a=((e={})[lt.None]="",e[lt.NoValue]=i.cssClasses.valueNormal,e[lt.LargeValue]=i.cssClasses.valueLarge,e[lt.SmallValue]=i.cssClasses.valueSub,e),h=((o={})[lt.None]="",o[lt.NoValue]=i.cssClasses.markerNormal,o[lt.LargeValue]=i.cssClasses.markerLarge,o[lt.SmallValue]=i.cssClasses.markerSub,o),u=[i.cssClasses.valueHorizontal,i.cssClasses.valueVertical],l=[i.cssClasses.markerHorizontal,i.cssClasses.markerVertical];function c(t,n){var r=n===i.cssClasses.value,e=r?a:h;return n+" "+(r?u:l)[i.ort]+" "+e[t]}return Ut(s,i.cssClasses.pips),Ut(s,0===i.ort?i.cssClasses.pipsHorizontal:i.cssClasses.pipsVertical),Object.keys(t).forEach((function(e){!function(t,e,o){if((o=n?n(e,o):o)!==lt.None){var a=S(s,!1);a.className=c(o,i.cssClasses.marker),a.style[i.style]=t+"%",o>lt.NoValue&&((a=S(s,!1)).className=c(o,i.cssClasses.value),a.setAttribute("data-value",String(e)),a.style[i.style]=t+"%",a.innerHTML=String(r.to(e)))}}(e,t[e][0],t[e][1])})),s}function _(){s&&(ft(s),s=null)}function D(t){_();var i=O(t),n=t.filter,r=t.format||{to:function(t){return String(Math.round(t))}};return s=f.appendChild(P(i,n,r))}function j(){var t=r.getBoundingClientRect(),n="offset"+["Width","Height"][i.ort];return 0===i.ort?t.width||r[n]:t.height||r[n]}function F(t,n,r,e){var o=function(o){var s,a,h=function(t,i,n){var r=0===t.type.indexOf("touch"),e=0===t.type.indexOf("mouse"),o=0===t.type.indexOf("pointer"),s=0,a=0;0===t.type.indexOf("MSPointer")&&(o=!0);if("mousedown"===t.type&&!t.buttons&&!t.touches)return!1;if(r){var h=function(i){var r=i.target;return r===n||n.contains(r)||t.composed&&t.composedPath().shift()===n};if("touchstart"===t.type){var u=Array.prototype.filter.call(t.touches,h);if(u.length>1)return!1;s=u[0].pageX,a=u[0].pageY}else{var l=Array.prototype.find.call(t.changedTouches,h);if(!l)return!1;s=l.pageX,a=l.pageY}}i=i||yt(w),(e||o)&&(s=t.clientX+i.x,a=t.clientY+i.y);return t.pageOffset=i,t.points=[s,a],t.cursor=e||o,t}(o,e.pageOffset,e.target||n);return!!h&&(!(z()&&!e.doNotReject)&&(s=f,a=i.cssClasses.tap,!((s.classList?s.classList.contains(a):new RegExp("\\b"+a+"\\b").test(s.className))&&!e.doNotReject)&&(!(t===l.start&&void 0!==h.buttons&&h.buttons>1)&&((!e.hover||!h.buttons)&&(c||h.preventDefault(),h.calcPoint=h.points[i.ort],void r(h,e))))))},s=[];return t.split(" ").forEach((function(t){n.addEventListener(t,o,!!c&&{passive:!0}),s.push([t,o])})),s}function T(t){var n,e,o,s,a,h,u=100*(t-(n=r,e=i.ort,o=n.getBoundingClientRect(),s=n.ownerDocument,a=s.documentElement,h=yt(s),/webkit.*Chrome.*Mobile/i.test(navigator.userAgent)&&(h.x=0),e?o.top+h.y-a.clientTop:o.left+h.x-a.clientLeft))/j();return u=mt(u),i.dir?100-u:u}function B(t,i){"mouseout"===t.type&&"HTML"===t.target.nodeName&&null===t.relatedTarget&&L(t,i)}function R(t,n){if(-1===navigator.appVersion.indexOf("MSIE 9")&&0===t.buttons&&0!==n.buttonsProperty)return L(t,n);var r=(i.dir?-1:1)*(t.calcPoint-n.startCalcPoint);G(r>0,100*r/n.baseSize,n.locations,n.handleNumbers,n.connect)}function L(t,n){n.handle&&(xt(n.handle,i.cssClasses.active),m-=1),n.listeners.forEach((function(t){U.removeEventListener(t[0],t[1])})),0===m&&(xt(f,i.cssClasses.drag),X(),t.cursor&&(x.style.cursor="",x.removeEventListener("selectstart",pt))),i.events.smoothSteps&&(n.handleNumbers.forEach((function(t){Y(t,v[t],!0,!0,!1,!1)})),n.handleNumbers.forEach((function(t){J("update",t)}))),n.handleNumbers.forEach((function(t){J("change",t),J("set",t),J("end",t)}))}function H(t,n){if(!n.handleNumbers.some(M)){var r;if(1===n.handleNumbers.length)r=e[n.handleNumbers[0]].children[0],m+=1,Ut(r,i.cssClasses.active);t.stopPropagation();var o=[],s=F(l.move,U,R,{target:t.target,handle:r,connect:n.connect,listeners:o,startCalcPoint:t.calcPoint,baseSize:j(),pageOffset:t.pageOffset,handleNumbers:n.handleNumbers,buttonsProperty:t.buttons,locations:v.slice()}),a=F(l.end,U,L,{target:t.target,handle:r,listeners:o,doNotReject:!0,handleNumbers:n.handleNumbers}),h=F("mouseout",U,B,{target:t.target,handle:r,listeners:o,doNotReject:!0,handleNumbers:n.handleNumbers});o.push.apply(o,s.concat(a,h)),t.cursor&&(x.style.cursor=getComputedStyle(t.target).cursor,e.length>1&&Ut(f,i.cssClasses.drag),x.addEventListener("selectstart",pt,!1)),n.handleNumbers.forEach((function(t){J("start",t)}))}}function V(t){t.stopPropagation();var n=T(t.calcPoint),r=function(t){var i=100,n=!1;return e.forEach((function(r,e){if(!M(e)){var o=v[e],s=Math.abs(o-t);(s<i||s<=i&&t>o||100===s&&100===i)&&(n=e,i=s)}})),n}(n);!1!==r&&(i.events.snap||bt(f,i.cssClasses.tap,i.animationDuration),Y(r,n,!0,!0),X(),J("slide",r,!0),J("update",r,!0),i.events.snap?H(t,{handleNumbers:[r]}):(J("change",r,!0),J("set",r,!0)))}function I(t){var i=T(t.calcPoint),n=d.getStep(i),r=d.fromStepping(n);Object.keys(g).forEach((function(t){"hover"===t.split(".")[0]&&g[t].forEach((function(t){t.call(ot,r)}))}))}function q(t,i){g[t]=g[t]||[],g[t].push(i),"update"===t.split(".")[0]&&e.forEach((function(t,i){J("update",i)}))}function W(t){var i=t&&t.split(".")[0],n=i?t.substring(i.length):t;Object.keys(g).forEach((function(t){var r=t.split(".")[0],e=t.substring(r.length);i&&i!==r||n&&n!==e||function(t){return t===Ct.aria||t===Ct.tooltips}(e)&&n!==e||delete g[t]}))}function J(t,n,r){Object.keys(g).forEach((function(e){var o=e.split(".")[0];t===o&&g[e].forEach((function(t){t.call(ot,p.map(i.format.to),n,p.slice(),r||!1,v.slice(),ot)}))}))}function Z(t,n,r,o,s,a,h){var u;return e.length>1&&!i.events.unconstrained&&(o&&n>0&&(u=d.getAbsoluteDistance(t[n-1],i.margin,!1),r=Math.max(r,u)),s&&n<e.length-1&&(u=d.getAbsoluteDistance(t[n+1],i.margin,!0),r=Math.min(r,u))),e.length>1&&i.limit&&(o&&n>0&&(u=d.getAbsoluteDistance(t[n-1],i.limit,!1),r=Math.min(r,u)),s&&n<e.length-1&&(u=d.getAbsoluteDistance(t[n+1],i.limit,!0),r=Math.max(r,u))),i.padding&&(0===n&&(u=d.getAbsoluteDistance(0,i.padding[0],!1),r=Math.max(r,u)),n===e.length-1&&(u=d.getAbsoluteDistance(100,i.padding[1],!0),r=Math.min(r,u))),h||(r=d.getStep(r)),!((r=mt(r))===t[n]&&!a)&&r}function K(t,n){var r=i.ort;return(r?n:t)+", "+(r?t:n)}function G(t,n,r,e,o){var s=r.slice(),a=e[0],h=i.events.smoothSteps,u=[!t,t],l=[t,!t];e=e.slice(),t&&e.reverse(),e.length>1?e.forEach((function(t,i){var r=Z(s,t,s[t]+n,u[i],l[i],!1,h);!1===r?n=0:(n=r-s[t],s[t]=r)})):u=l=[!0];var c=!1;e.forEach((function(t,i){c=Y(t,r[t]+n,u[i],l[i],!1,h)||c})),c&&(e.forEach((function(t){J("update",t),J("slide",t)})),null!=o&&J("drag",a))}function Q(t,n){return i.dir?100-t-n:t}function X(){b.forEach((function(t){var i=v[t]>50?-1:1,n=3+(e.length+i*t);e[t].style.zIndex=String(n)}))}function Y(t,n,r,o,s,a){return s||(n=Z(v,t,n,r,o,!1,a)),!1!==n&&(function(t,n){v[t]=n,p[t]=d.fromStepping(n);var r="translate("+K(Q(n,0)-y+"%","0")+")";e[t].style[i.transformRule]=r,tt(t),tt(t+1)}(t,n),!0)}function tt(t){if(o[t]){var n=0,r=100;0!==t&&(n=v[t-1]),t!==o.length-1&&(r=v[t]);var e=r-n,s="translate("+K(Q(n,e)+"%","0")+")",a="scale("+K(e/100,"1")+")";o[t].style[i.transformRule]=s+" "+a}}function it(t,n){return null===t||!1===t||void 0===t?v[n]:("number"==typeof t&&(t=String(t)),!1!==(t=i.format.from(t))&&(t=d.toStepping(t)),!1===t||isNaN(t)?v[n]:t)}function nt(t,n,r){var e=gt(t),o=void 0===v[0];n=void 0===n||n,i.animate&&!o&&bt(f,i.cssClasses.tap,i.animationDuration),b.forEach((function(t){Y(t,it(e[t],t),!0,!1,r)}));var s=1===b.length?0:1;if(o&&d.hasNoSize()&&(r=!0,v[0]=0,b.length>1)){var a=100/(b.length-1);b.forEach((function(t){v[t]=t*a}))}for(;s<b.length;++s)b.forEach((function(t){Y(t,v[t],!0,!0,r)}));X(),b.forEach((function(t){J("update",t),null!==e[t]&&n&&J("set",t)}))}function rt(t){if(void 0===t&&(t=!1),t)return 1===p.length?p[0]:p.slice(0);var n=p.map(i.format.to);return 1===n.length?n[0]:n}function et(t){var n=v[t],r=d.getNearbySteps(n),e=p[t],o=r.thisStep.step,s=null;if(i.snap)return[e-r.stepBefore.startValue||null,r.stepAfter.startValue-e||null];!1!==o&&e+o>r.stepAfter.startValue&&(o=r.stepAfter.startValue-e),s=e>r.thisStep.startValue?r.thisStep.step:!1!==r.stepBefore.step&&e-r.stepBefore.highestStep,100===n?o=null:0===n&&(s=null);var a=d.countStepDecimals();return null!==o&&!1!==o&&(o=Number(o.toFixed(a))),null!==s&&!1!==s&&(s=Number(s.toFixed(a))),[s,o]}Ut(h=f,i.cssClasses.target),0===i.dir?Ut(h,i.cssClasses.ltr):Ut(h,i.cssClasses.rtl),0===i.ort?Ut(h,i.cssClasses.horizontal):Ut(h,i.cssClasses.vertical),Ut(h,"rtl"===getComputedStyle(h).direction?i.cssClasses.textDirectionRtl:i.cssClasses.textDirectionLtr),r=S(h,i.cssClasses.base),function(t,n){var r=S(n,i.cssClasses.connects);e=[],(o=[]).push(E(r,t[0]));for(var s=0;s<i.handles;s++)e.push(k(n,s)),b[s]=s,o.push(E(r,t[s+1]))}(i.connect,r),(u=i.events).fixed||e.forEach((function(t,i){F(l.start,t.children[0],H,{handleNumbers:[i]})})),u.tap&&F(l.start,r,V,{}),u.hover&&F(l.move,r,I,{hover:!0}),u.drag&&o.forEach((function(t,n){if(!1!==t&&0!==n&&n!==o.length-1){var r=e[n-1],s=e[n],a=[t],h=[r,s],c=[n-1,n];Ut(t,i.cssClasses.draggable),u.fixed&&(a.push(r.children[0]),a.push(s.children[0])),u.dragAll&&(h=e,c=b),a.forEach((function(i){F(l.start,i,H,{handles:h,handleNumbers:c,connect:t})}))}})),nt(i.start),i.pips&&D(i.pips),i.tooltips&&$(),W("update"+Ct.aria),q("update"+Ct.aria,(function(t,n,r,o,s){b.forEach((function(t){var n=e[t],o=Z(v,t,0,!0,!0,!0),a=Z(v,t,100,!0,!0,!0),h=s[t],u=String(i.ariaFormat.to(r[t]));o=d.fromStepping(o).toFixed(1),a=d.fromStepping(a).toFixed(1),h=d.fromStepping(h).toFixed(1),n.children[0].setAttribute("aria-valuemin",o),n.children[0].setAttribute("aria-valuemax",a),n.children[0].setAttribute("aria-valuenow",h),n.children[0].setAttribute("aria-valuetext",u)}))}));var ot={destroy:function(){for(W(Ct.aria),W(Ct.tooltips),Object.keys(i.cssClasses).forEach((function(t){xt(f,i.cssClasses[t])}));f.firstChild;)f.removeChild(f.firstChild);delete f.noUiSlider},steps:function(){return b.map(et)},on:q,off:W,get:rt,set:nt,setHandle:function(t,i,n,r){if(!((t=Number(t))>=0&&t<b.length))throw new Error("noUiSlider: invalid handle number, got: "+t);Y(t,it(i,t),!0,!0,r),J("update",t),n&&J("set",t)},reset:function(t){nt(i.start,t)},disable:function(t){null!=t?(e[t].setAttribute("disabled",""),e[t].handle.removeAttribute("tabindex")):(f.setAttribute("disabled",""),e.forEach((function(t){t.handle.removeAttribute("tabindex")})))},enable:function(t){null!=t?(e[t].removeAttribute("disabled"),e[t].handle.setAttribute("tabindex","0")):(f.removeAttribute("disabled"),e.forEach((function(t){t.removeAttribute("disabled"),t.handle.setAttribute("tabindex","0")})))},i:function(t,i,n){G(t,i,v,n)},options:n,updateOptions:function(t,r){var e=rt(),o=["margin","limit","padding","range","animate","snap","step","format","pips","tooltips"];o.forEach((function(i){void 0!==t[i]&&(n[i]=t[i])}));var s=ni(n);o.forEach((function(n){void 0!==t[n]&&(i[n]=s[n])})),d=s.spectrum,i.margin=s.margin,i.limit=s.limit,i.padding=s.padding,i.pips?D(i.pips):_(),i.tooltips?$():N(),v=[],nt(dt(t.start)?t.start:e,r)},target:f,removePips:_,removeTooltips:N,getPositions:function(){return v.slice()},getTooltips:function(){return a},getOrigins:function(){return e},pips:D};return ot}var ei=function(t,i,n,r){for(var e,o=arguments.length,s=o<3?i:null===r?r=Object.getOwnPropertyDescriptor(i,n):r,a=t.length-1;a>=0;a--)(e=t[a])&&(s=(o<3?e(s):o>3?e(i,n,s):e(i,n))||s);return o>3&&s&&Object.defineProperty(i,n,s),s};let oi=class extends et{constructor(){super(...arguments),this.min=0,this.max=1e5,this.values=[0,1e5],this.step=1e4}render(){return L`
      <div> </div>
    `}firstUpdated(){const t=this.shadowRoot.querySelector("div");if(t){(function(t,i){if(!t||!t.nodeName)throw new Error("noUiSlider: create requires a single element, got: "+t);if(t.noUiSlider)throw new Error("noUiSlider: Slider was already initialized.");var n=ri(t,ni(i),i);return t.noUiSlider=n,n})(t,{start:this.values,connect:!0,range:{min:[this.min],max:[this.max]},step:this.step,direction:"rtl"}).on("update",(t=>{this.values=[parseInt(t[0].toString()),parseInt(t[1].toString())],this.dispatchEvent(new CustomEvent("change",{detail:{values:t}}))}))}}};oi.styles=[o`
    .noUi-target,
    .noUi-target * {
        -webkit-touch-callout: none;
        -webkit-tap-highlight-color: transparent;
        -webkit-user-select: none;
        -ms-touch-action: none;
        touch-action: none;
        -ms-user-select: none;
        -moz-user-select: none;
        user-select: none;
        -moz-box-sizing: border-box;
        box-sizing: border-box
    }

    .noUi-target {
        position: relative
    }

    .noUi-base,
    .noUi-connects {
        width: 100%;
        height: 100%;
        position: relative;
        z-index: 1
    }

    .noUi-connects {
        overflow: hidden;
        z-index: 0
    }

    .noUi-connect,
    .noUi-origin {
        will-change: transform;
        position: absolute;
        z-index: 1;
        top: 0;
        right: 0;
        height: 100%;
        width: 100%;
        -ms-transform-origin: 0 0;
        -webkit-transform-origin: 0 0;
        -webkit-transform-style: preserve-3d;
        transform-origin: 0 0;
        transform-style: flat
    }

    .noUi-txt-dir-rtl.noUi-horizontal .noUi-origin {
        left: 0;
        right: auto
    }

    .noUi-vertical .noUi-origin {
        top: -100%;
        width: 0
    }

    .noUi-horizontal .noUi-origin {
        height: 0
    }

    .noUi-handle {
        -webkit-backface-visibility: hidden;
        backface-visibility: hidden;
        position: absolute
    }

    .noUi-touch-area {
        height: 100%;
        width: 100%
    }

    .noUi-state-tap .noUi-connect,
    .noUi-state-tap .noUi-origin {
        -webkit-transition: transform .3s;
        transition: transform .3s
    }

    .noUi-state-drag * {
        cursor: inherit !important
    }

    .noUi-horizontal {
        height: 18px
    }

    .noUi-horizontal .noUi-handle {
        width: 34px;
        height: 28px;
        right: -17px;
        top: -6px
    }

    .noUi-vertical {
        width: 18px
    }

    .noUi-vertical .noUi-handle {
        width: 28px;
        height: 34px;
        right: -6px;
        bottom: -17px
    }

    .noUi-txt-dir-rtl.noUi-horizontal .noUi-handle {
        left: -17px;
        right: auto
    }

    .noUi-target {
        background: #FAFAFA;
        border-radius: 4px;
        border: 1px solid #D3D3D3;
        box-shadow: inset 0 1px 1px #F0F0F0, 0 3px 6px -5px #BBB
    }

    .noUi-connects {
        border-radius: 3px
    }

    .noUi-connect {
        background: #3FB8AF
    }

    .noUi-draggable {
        cursor: ew-resize
    }

    .noUi-vertical .noUi-draggable {
        cursor: ns-resize
    }

    .noUi-handle {
        border: 1px solid #D9D9D9;
        border-radius: 3px;
        background: #FFF;
        cursor: default;
        box-shadow: inset 0 0 1px #FFF, inset 0 1px 7px #EBEBEB, 0 3px 6px -3px #BBB
    }

    .noUi-active {
        box-shadow: inset 0 0 1px #FFF, inset 0 1px 7px #DDD, 0 3px 6px -3px #BBB
    }

    .noUi-handle:after,
    .noUi-handle:before {
        content: "";
        display: block;
        position: absolute;
        height: 14px;
        width: 1px;
        background: #E8E7E6;
        left: 14px;
        top: 6px
    }

    .noUi-handle:after {
        left: 17px
    }

    .noUi-vertical .noUi-handle:after,
    .noUi-vertical .noUi-handle:before {
        width: 14px;
        height: 1px;
        left: 6px;
        top: 14px
    }

    .noUi-vertical .noUi-handle:after {
        top: 17px
    }

    [disabled] .noUi-connect {
        background: #B8B8B8
    }

    [disabled] .noUi-handle,
    [disabled].noUi-handle,
    [disabled].noUi-target {
        cursor: not-allowed
    }

    .noUi-pips,
    .noUi-pips * {
        -moz-box-sizing: border-box;
        box-sizing: border-box
    }

    .noUi-pips {
        position: absolute;
        color: #999
    }

    .noUi-value {
        position: absolute;
        white-space: nowrap;
        text-align: center
    }

    .noUi-value-sub {
        color: #ccc;
        font-size: 10px
    }

    .noUi-marker {
        position: absolute;
        background: #CCC
    }

    .noUi-marker-sub {
        background: #AAA
    }

    .noUi-marker-large {
        background: #AAA
    }

    .noUi-pips-horizontal {
        padding: 10px 0;
        height: 80px;
        top: 100%;
        left: 0;
        width: 100%
    }

    .noUi-value-horizontal {
        -webkit-transform: translate(-50%, 50%);
        transform: translate(-50%, 50%)
    }

    .noUi-rtl .noUi-value-horizontal {
        -webkit-transform: translate(50%, 50%);
        transform: translate(50%, 50%)
    }

    .noUi-marker-horizontal.noUi-marker {
        margin-left: -1px;
        width: 2px;
        height: 5px
    }

    .noUi-marker-horizontal.noUi-marker-sub {
        height: 10px
    }

    .noUi-marker-horizontal.noUi-marker-large {
        height: 15px
    }

    .noUi-pips-vertical {
        padding: 0 10px;
        height: 100%;
        top: 0;
        left: 100%
    }

    .noUi-value-vertical {
        -webkit-transform: translate(0, -50%);
        transform: translate(0, -50%);
        padding-left: 25px
    }

    .noUi-rtl .noUi-value-vertical {
        -webkit-transform: translate(0, 50%);
        transform: translate(0, 50%)
    }

    .noUi-marker-vertical.noUi-marker {
        width: 5px;
        height: 2px;
        margin-top: -1px
    }

    .noUi-marker-vertical.noUi-marker-sub {
        width: 10px
    }

    .noUi-marker-vertical.noUi-marker-large {
        width: 15px
    }

    .noUi-tooltip {
        display: block;
        position: absolute;
        border: 1px solid #D9D9D9;
        border-radius: 3px;
        background: #fff;
        color: #000;
        padding: 5px;
        text-align: center;
        white-space: nowrap
    }

    .noUi-horizontal .noUi-tooltip {
        -webkit-transform: translate(-50%, 0);
        transform: translate(-50%, 0);
        left: 50%;
        bottom: 120%
    }

    .noUi-vertical .noUi-tooltip {
        -webkit-transform: translate(0, -50%);
        transform: translate(0, -50%);
        top: 50%;
        right: 120%
    }

    .noUi-horizontal .noUi-origin>.noUi-tooltip {
        -webkit-transform: translate(50%, 0);
        transform: translate(50%, 0);
        left: auto;
        bottom: 10px
    }

    .noUi-vertical .noUi-origin>.noUi-tooltip {
        -webkit-transform: translate(0, -18px);
        transform: translate(0, -18px);
        top: auto;
        right: 28px
    }
    `,o`
    :host {
      display: block;
      width: 100%;
      height: 100%;
    }

    div {
      height: inherit;
      width: inherit;
    }
  `],ei([ht({type:Number})],oi.prototype,"min",void 0),ei([ht({type:Number})],oi.prototype,"max",void 0),ei([ht({type:Array})],oi.prototype,"values",void 0),ei([ht({type:Number})],oi.prototype,"step",void 0),oi=ei([(t=>(i,n)=>{void 0!==n?n.addInitializer((()=>{customElements.define(t,i)})):customElements.define(t,i)})("mirza-input-range")],oi);export{oi as MirzaInputRangeElement};
