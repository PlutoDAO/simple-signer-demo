import{S as z,i as H,s as B,e as g,a as x,t as j,b as f,c as $,d as c,l as S,f as D,u as re,g as se,h as ie,j as w,k,m as T,n as W,o as K,p as V,q,r as le,v as M,w as L,x as N,C as ae,y as ce,z as G,A,B as U,D as F,E as X,F as Y,R as de,G as ue}from"./vendor.867f8985.js";const P={},fe=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))n(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function r(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerpolicy&&(o.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?o.credentials="include":t.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(t){if(t.ep)return;t.ep=!0;const o=r(t);fetch(t.href,o)}};fe();const ge=s=>({}),Z=s=>({});function J(s){let e,r,n,t,o,i,l,_,m,v,h,u,d;const p=s[4].body,b=le(p,s,s[3],Z);return{c(){e=g("div"),r=g("div"),n=x(),t=g("div"),o=g("div"),i=j(s[1]),l=x(),_=g("button"),_.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" height="15px" viewBox="0 0 24 24" width="14px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"></path><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"></path></svg>',m=x(),v=g("div"),b&&b.c(),f(r,"class","modal-overlay fixed w-full h-full bg-gray-900 opacity-50"),f(_,"class","simple-signer-demo close-button p-2 bg-gray-200 hover:bg-gray-300 rounded-full ml-4"),f(o,"class","head bg-gray-100 py-3 px-8 text-2xl font-bold flex justify-between"),f(v,"class","simple-signer-demo body content p-8"),f(t,"class","bg-white max-w-sm h-108 mx-auto rounded-lg shadow-xl z-50 overflow-y-auto"),f(e,"class","simple-signer-demo sign-transaction-modal-container modal z-50 fixed w-full h-full top-0 left-0 flex items-center justify-center p-8 lg:p-0")},m(y,a){$(y,e,a),c(e,r),c(e,n),c(e,t),c(t,o),c(o,i),c(o,l),c(o,_),c(t,m),c(t,v),b&&b.m(v,null),h=!0,u||(d=S(_,"click",s[5]),u=!0)},p(y,a){(!h||a&2)&&D(i,y[1]),b&&b.p&&(!h||a&8)&&re(b,p,y,y[3],h?ie(p,y[3],a,ge):se(y[3]),Z)},i(y){h||(w(b,y),h=!0)},o(y){k(b,y),h=!1},d(y){y&&T(e),b&&b.d(y),u=!1,d()}}}function me(s){let e,r,n=s[0]&&J(s);return{c(){n&&n.c(),e=W()},m(t,o){n&&n.m(t,o),$(t,e,o),r=!0},p(t,[o]){t[0]?n?(n.p(t,o),o&1&&w(n,1)):(n=J(t),n.c(),w(n,1),n.m(e.parentNode,e)):n&&(K(),k(n,1,1,()=>{n=null}),V())},i(t){r||(w(n),r=!0)},o(t){k(n),r=!1},d(t){n&&n.d(t),t&&T(e)}}}function pe(s,e,r){let{$$slots:n={},$$scope:t}=e,{open:o=!1}=e,{title:i=""}=e;const l=q(),_=()=>l("close");return s.$$set=m=>{"open"in m&&r(0,o=m.open),"title"in m&&r(1,i=m.title),"$$scope"in m&&r(3,t=m.$$scope)},[o,i,l,t,n,_]}class be extends z{constructor(e){super();H(this,e,pe,me,B,{open:0,title:1})}}function Q(s){let e,r,n,t,o,i,l,_,m,v,h,u,d,p,b,y;return h=new ae({props:{text:s[0],$$slots:{default:[_e,({copy:a})=>({4:a}),({copy:a})=>a?16:0]},$$scope:{ctx:s}}}),{c(){e=g("div"),r=g("div"),r.innerHTML='<svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>',n=x(),t=g("div"),o=g("p"),o.innerHTML="Your <b>transaction</b> has been signed:",i=x(),l=g("p"),_=g("b"),m=j(s[0]),v=x(),M(h.$$.fragment),u=x(),d=g("button"),d.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" height="15px" viewBox="0 0 24 24" width="14px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"></path><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"></path></svg>',f(r,"class","w-8 h-5 text-green-500 bg-green-100 rounded-lg dark:bg-green-800 dark:text-green-200"),f(l,"class","text-ellipsis overflow-hidden"),f(t,"class","truncate text-area ml-3 text-sm font-normal"),f(d,"class","simple-signer-demo close-button p-2 bg-gray-200 hover:bg-gray-300 rounded-full ml-4"),f(e,"id","toast-success"),f(e,"class","simple-signer-demo toast absolute inset-x-0 bottom-0 h-26 flex justify-center items-center w-full max-w-md p-4 mb-4 text-gray-500 bg-white rounded-lg shadow dark:text-gray-400 dark:bg-gray-800 svelte-181q8qz"),f(e,"role","alert")},m(a,E){$(a,e,E),c(e,r),c(e,n),c(e,t),c(t,o),c(t,i),c(t,l),c(l,_),c(_,m),c(e,v),L(h,e,null),c(e,u),c(e,d),p=!0,b||(y=S(d,"click",s[3]),b=!0)},p(a,E){(!p||E&1)&&D(m,a[0]);const I={};E&1&&(I.text=a[0]),E&48&&(I.$$scope={dirty:E,ctx:a}),h.$set(I)},i(a){p||(w(h.$$.fragment,a),p=!0)},o(a){k(h.$$.fragment,a),p=!1},d(a){a&&T(e),N(h),b=!1,y()}}}function _e(s){let e,r=(s[4]?"Copy":"")+"",n,t,o;return{c(){e=g("button"),n=j(r),f(e,"type","button"),f(e,"class","text-white bg-gray-800 hover:bg-gray-900 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center ml-2 mb-1 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-800 dark:border-gray-700")},m(i,l){$(i,e,l),c(e,n),t||(o=S(e,"click",function(){ce(s[4])&&s[4].apply(this,arguments)}),t=!0)},p(i,l){s=i,l&16&&r!==(r=(s[4]?"Copy":"")+"")&&D(n,r)},d(i){i&&T(e),t=!1,o()}}}function he(s){let e,r,n=s[1]&&Q(s);return{c(){n&&n.c(),e=W()},m(t,o){n&&n.m(t,o),$(t,e,o),r=!0},p(t,[o]){t[1]?n?(n.p(t,o),o&2&&w(n,1)):(n=Q(t),n.c(),w(n,1),n.m(e.parentNode,e)):n&&(K(),k(n,1,1,()=>{n=null}),V())},i(t){r||(w(n),r=!0)},o(t){k(n),r=!1},d(t){n&&n.d(t),t&&T(e)}}}function ye(s,e,r){let{xdr:n=""}=e,{show:t=!0}=e;const o=q(),i=()=>o("close");return s.$$set=l=>{"xdr"in l&&r(0,n=l.xdr),"show"in l&&r(1,t=l.show)},[n,t,o,i]}class we extends z{constructor(e){super();H(this,e,ye,he,B,{xdr:0,show:1})}}const R=P.env.VITE_HOST_SIMPLE_SIGNER;function ee(s){const e=window.open(`${R}/connect`,"Connect_Window","width=360, height=450");return s&&window.addEventListener("message",r=>{r.origin===`${R}`&&e&&r.data.type==="onReady"&&e.postMessage({wallets:s},`${R}`)}),e}async function ve(s,e,r){const n=window.open(`${R}/sign`,"Sign_Window","width=360, height=700");return window.addEventListener("message",t=>{t.origin===`${R}`&&n&&t.data.type==="onReady"&&n.postMessage({xdr:s,description:e,operationGroups:r},`${R}/`)}),n}const te=G(""),ne=G("");class ke extends Error{}const xe=new A.Server(P.env.VITE_HORIZON_URL);async function $e(s){try{const e=s,r=await xe.loadAccount(e);return new A.TransactionBuilder(r,{fee:A.BASE_FEE,networkPassphrase:A.Networks.TESTNET}).addOperation(A.Operation.payment({destination:P.env.VITE_DESTINATION_PUBLICKEY,asset:A.Asset.native(),amount:"200"})).addMemo(A.Memo.text("Tx test")).setTimeout(0).build().toXDR()}catch{throw new ke}}function Te(s){let e,r,n,t,o,i;return{c(){e=g("div"),r=g("button"),r.textContent="Connect",n=x(),t=g("button"),t.textContent="Sign",f(r,"type","button"),f(r,"class","simple-signer-demo modal-connect-btn text-gray-900 bg-white hover:bg-gray-100 border border-gray-200 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-600 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 mr-2 mb-2"),f(t,"type","button"),f(t,"class","simple-signer-demo modal-sign-btn text-gray-900 bg-white hover:bg-gray-100 border border-gray-200 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-600 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 mr-2 mb-2"),f(e,"class","simple-signer-demo modal-container-body flex justify-center")},m(l,_){$(l,e,_),c(e,r),c(e,n),c(e,t),o||(i=[S(r,"click",s[6]),S(t,"click",s[7])],o=!0)},p:X,d(l){l&&T(e),o=!1,U(i)}}}function oe(s){let e,r;return e=new we({props:{show:s[1],xdr:s[2]}}),e.$on("close",s[11]),{c(){M(e.$$.fragment)},m(n,t){L(e,n,t),r=!0},p(n,t){const o={};t&2&&(o.show=n[1]),t&4&&(o.xdr=n[2]),e.$set(o)},i(n){r||(w(e.$$.fragment,n),r=!0)},o(n){k(e.$$.fragment,n),r=!1},d(n){N(e,n)}}}function Ee(s){let e,r,n,t,o,i,l,_,m,v,h;e=new be({props:{title:"Sign Transaction",open:s[0],$$slots:{body:[Te]},$$scope:{ctx:s}}}),e.$on("close",s[8]);let u=s[2]!=""&&oe(s);return{c(){M(e.$$.fragment),r=x(),n=g("div"),t=g("div"),o=g("button"),o.textContent="Connect",i=x(),l=g("button"),l.textContent="Sign Transaction",_=x(),u&&u.c(),f(o,"type","button"),f(o,"class","simple-signer-demo connect-btn text-gray-900 bg-white hover:bg-gray-100 border border-gray-200 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-600 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 mr-2 mb-2"),f(l,"type","button"),f(l,"class","simple-signer-demo sign-btn text-gray-900 bg-white hover:bg-gray-100 border border-gray-200 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-600 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 mr-2 mb-2"),f(t,"class","w-9/12 m-auto py-16 min-h-screen flex items-center justify-center"),f(n,"class","simple-signer-demo main-container bg-gradient-to-r from-indigo-600 to-blue-400")},m(d,p){L(e,d,p),$(d,r,p),$(d,n,p),c(n,t),c(t,o),c(t,i),c(t,l),c(n,_),u&&u.m(n,null),m=!0,v||(h=[S(o,"click",s[9]),S(l,"click",s[10])],v=!0)},p(d,[p]){const b={};p&1&&(b.open=d[0]),p&16384&&(b.$$scope={dirty:p,ctx:d}),e.$set(b),d[2]!=""?u?(u.p(d,p),p&4&&w(u,1)):(u=oe(d),u.c(),w(u,1),u.m(n,null)):u&&(K(),k(u,1,1,()=>{u=null}),V())},i(d){m||(w(e.$$.fragment,d),w(u),m=!0)},o(d){k(e.$$.fragment,d),k(u),m=!1},d(d){N(e,d),d&&T(r),d&&T(n),u&&u.d(),v=!1,U(h)}}}function Se(s,e,r){let n,t;F(s,ne,a=>r(12,n=a)),F(s,te,a=>r(2,t=a));let o=!1,i=!0;function l(){r(0,o=!o)}function _(){r(1,i=!i)}function m(a){if(a.origin!==P.env.VITE_HOST_SIMPLE_SIGNER)return;const E=new RegExp(/^AAAAAgAAAA[a-zA-Z0-9!@#%*+=._-]+/gm),I=/^G[A-Za-z0-9]{55}$/,C=a.data;if(C.type==="onConnect"){const O=C.message.publicKey;I.test(O)&&(Y(ne,n=O,n),console.log(C.message))}if(C.type==="onSign"){const O=C.message.signedXDR;E.test(O)&&(Y(te,t=O,t),console.log(C.message))}}window.addEventListener("message",m);async function v(){const a=await $e(n);return ve(a,"This is a payment",[{from:0,to:5,description:"You stake 100 yUSDC on PlutoDAO",title:"Payment and Create Account"}])}return[o,i,t,l,_,v,()=>ee(),()=>v(),()=>l(),()=>ee(),()=>l(),()=>_()]}class Ae extends z{constructor(e){super();H(this,e,Se,Ee,B,{})}}class Ce extends z{constructor(e){super();H(this,e,null,null,B,{})}}function Me(s){let e,r,n;return r=new ue({props:{path:"/",component:Ae}}),{c(){e=g("main"),M(r.$$.fragment)},m(t,o){$(t,e,o),L(r,e,null),n=!0},p:X,i(t){n||(w(r.$$.fragment,t),n=!0)},o(t){k(r.$$.fragment,t),n=!1},d(t){t&&T(e),N(r)}}}function Le(s){let e,r,n,t;return e=new Ce({}),n=new de({props:{$$slots:{default:[Me]},$$scope:{ctx:s}}}),{c(){M(e.$$.fragment),r=x(),M(n.$$.fragment)},m(o,i){L(e,o,i),$(o,r,i),L(n,o,i),t=!0},p(o,[i]){const l={};i&1&&(l.$$scope={dirty:i,ctx:o}),n.$set(l)},i(o){t||(w(e.$$.fragment,o),w(n.$$.fragment,o),t=!0)},o(o){k(e.$$.fragment,o),k(n.$$.fragment,o),t=!1},d(o){N(e,o),o&&T(r),N(n,o)}}}class Ne extends z{constructor(e){super();H(this,e,null,Le,B,{})}}new Ne({target:document.getElementById("app")});
