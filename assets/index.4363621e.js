import{S as H,i as O,s as z,e as g,a as x,t as A,b as f,c as T,d as c,l as L,f as K,u as ne,g as re,h as oe,j as w,k as $,m as S,n as D,o as j,p as P,q as V,r as se,v as C,w as N,x as I,C as ie,y as le,z as W,A as M,B as q,D as X,E as F,F as G,R as ae,G as ce}from"./vendor.f6d9a7d3.js";const B={},de=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))n(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function o(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerpolicy&&(r.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?r.credentials="include":t.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(t){if(t.ep)return;t.ep=!0;const r=o(t);fetch(t.href,r)}};de();const ue=s=>({}),U=s=>({});function Y(s){let e,o,n,t,r,i,l,h,m,v,_,u,d;const p=s[4].body,b=se(p,s,s[3],U);return{c(){e=g("div"),o=g("div"),n=x(),t=g("div"),r=g("div"),i=A(s[1]),l=x(),h=g("button"),h.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" height="15px" viewBox="0 0 24 24" width="14px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"></path><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"></path></svg>',m=x(),v=g("div"),b&&b.c(),f(o,"class","modal-overlay fixed w-full h-full bg-gray-900 opacity-50"),f(h,"class","simple-signer-demo close-button p-2 bg-gray-200 hover:bg-gray-300 rounded-full ml-4"),f(r,"class","head bg-gray-100 py-3 px-8 text-2xl font-bold flex justify-between"),f(v,"class","simple-signer-demo body content p-8"),f(t,"class","bg-white max-w-sm h-108 mx-auto rounded-lg shadow-xl z-50 overflow-y-auto"),f(e,"class","simple-signer-demo sign-transaction-modal-container modal z-50 fixed w-full h-full top-0 left-0 flex items-center justify-center p-8 lg:p-0")},m(y,a){T(y,e,a),c(e,o),c(e,n),c(e,t),c(t,r),c(r,i),c(r,l),c(r,h),c(t,m),c(t,v),b&&b.m(v,null),_=!0,u||(d=L(h,"click",s[5]),u=!0)},p(y,a){(!_||a&2)&&K(i,y[1]),b&&b.p&&(!_||a&8)&&ne(b,p,y,y[3],_?oe(p,y[3],a,ue):re(y[3]),U)},i(y){_||(w(b,y),_=!0)},o(y){$(b,y),_=!1},d(y){y&&S(e),b&&b.d(y),u=!1,d()}}}function fe(s){let e,o,n=s[0]&&Y(s);return{c(){n&&n.c(),e=D()},m(t,r){n&&n.m(t,r),T(t,e,r),o=!0},p(t,[r]){t[0]?n?(n.p(t,r),r&1&&w(n,1)):(n=Y(t),n.c(),w(n,1),n.m(e.parentNode,e)):n&&(j(),$(n,1,1,()=>{n=null}),P())},i(t){o||(w(n),o=!0)},o(t){$(n),o=!1},d(t){n&&n.d(t),t&&S(e)}}}function ge(s,e,o){let{$$slots:n={},$$scope:t}=e,{open:r=!1}=e,{title:i=""}=e;const l=V(),h=()=>l("close");return s.$$set=m=>{"open"in m&&o(0,r=m.open),"title"in m&&o(1,i=m.title),"$$scope"in m&&o(3,t=m.$$scope)},[r,i,l,t,n,h]}class me extends H{constructor(e){super();O(this,e,ge,fe,z,{open:0,title:1})}}function Z(s){let e,o,n,t,r,i,l,h,m,v,_,u,d,p,b,y;return _=new ie({props:{text:s[0],$$slots:{default:[pe,({copy:a})=>({4:a}),({copy:a})=>a?16:0]},$$scope:{ctx:s}}}),{c(){e=g("div"),o=g("div"),o.innerHTML='<svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>',n=x(),t=g("div"),r=g("p"),r.innerHTML="Your <b>transaction</b> has been signed:",i=x(),l=g("p"),h=g("b"),m=A(s[0]),v=x(),C(_.$$.fragment),u=x(),d=g("button"),d.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" height="15px" viewBox="0 0 24 24" width="14px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"></path><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"></path></svg>',f(o,"class","w-8 h-5 text-green-500 bg-green-100 rounded-lg dark:bg-green-800 dark:text-green-200"),f(l,"class","text-ellipsis overflow-hidden"),f(t,"class","truncate text-area ml-3 text-sm font-normal"),f(d,"class","simple-signer-demo close-button p-2 bg-gray-200 hover:bg-gray-300 rounded-full ml-4"),f(e,"id","toast-success"),f(e,"class","simple-signer-demo toast absolute inset-x-0 bottom-0 h-26 flex justify-center items-center w-full max-w-md p-4 mb-4 text-gray-500 bg-white rounded-lg shadow dark:text-gray-400 dark:bg-gray-800 svelte-181q8qz"),f(e,"role","alert")},m(a,k){T(a,e,k),c(e,o),c(e,n),c(e,t),c(t,r),c(t,i),c(t,l),c(l,h),c(h,m),c(e,v),N(_,e,null),c(e,u),c(e,d),p=!0,b||(y=L(d,"click",s[3]),b=!0)},p(a,k){(!p||k&1)&&K(m,a[0]);const E={};k&1&&(E.text=a[0]),k&48&&(E.$$scope={dirty:k,ctx:a}),_.$set(E)},i(a){p||(w(_.$$.fragment,a),p=!0)},o(a){$(_.$$.fragment,a),p=!1},d(a){a&&S(e),I(_),b=!1,y()}}}function pe(s){let e,o=(s[4]?"Copy":"")+"",n,t,r;return{c(){e=g("button"),n=A(o),f(e,"type","button"),f(e,"class","text-white bg-gray-800 hover:bg-gray-900 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center ml-2 mb-1 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-800 dark:border-gray-700")},m(i,l){T(i,e,l),c(e,n),t||(r=L(e,"click",function(){le(s[4])&&s[4].apply(this,arguments)}),t=!0)},p(i,l){s=i,l&16&&o!==(o=(s[4]?"Copy":"")+"")&&K(n,o)},d(i){i&&S(e),t=!1,r()}}}function be(s){let e,o,n=s[1]&&Z(s);return{c(){n&&n.c(),e=D()},m(t,r){n&&n.m(t,r),T(t,e,r),o=!0},p(t,[r]){t[1]?n?(n.p(t,r),r&2&&w(n,1)):(n=Z(t),n.c(),w(n,1),n.m(e.parentNode,e)):n&&(j(),$(n,1,1,()=>{n=null}),P())},i(t){o||(w(n),o=!0)},o(t){$(n),o=!1},d(t){n&&n.d(t),t&&S(e)}}}function he(s,e,o){let{xdr:n=""}=e,{show:t=!0}=e;const r=V(),i=()=>r("close");return s.$$set=l=>{"xdr"in l&&o(0,n=l.xdr),"show"in l&&o(1,t=l.show)},[n,t,r,i]}class _e extends H{constructor(e){super();O(this,e,he,be,z,{xdr:0,show:1})}}const R=B.env.VITE_HOST_SIMPLE_SIGNER;function J(s){const e=window.open(`${R}/connect`,"Connect_Window","width=360, height=450");return s&&window.addEventListener("message",o=>{o.origin===`${R}`&&e&&o.data.type==="onReady"&&e.postMessage({wallets:s},`${R}`)}),e}async function ye(s,e,o){const n=window.open(`${R}/sign`,"Sign_Window","width=360, height=700");return window.addEventListener("message",t=>{t.origin===`${R}`&&n&&t.data.type==="onReady"&&n.postMessage({xdr:s,description:e,operationGroups:o},`${R}/`)}),n}const Q=W(""),ee=W("");class we extends Error{}const ve=new M.Server(B.env.VITE_HORIZON_URL);async function ke(s){try{const e=s,o=await ve.loadAccount(e);return new M.TransactionBuilder(o,{fee:M.BASE_FEE,networkPassphrase:M.Networks.TESTNET}).addOperation(M.Operation.payment({destination:B.env.VITE_DESTINATION_PUBLICKEY,asset:M.Asset.native(),amount:"200"})).addMemo(M.Memo.text("Tx test")).setTimeout(0).build().toXDR()}catch{throw new we}}function $e(s){let e,o,n,t,r,i;return{c(){e=g("div"),o=g("button"),o.textContent="Connect",n=x(),t=g("button"),t.textContent="Sign",f(o,"type","button"),f(o,"class","simple-signer-demo modal-connect-btn text-gray-900 bg-white hover:bg-gray-100 border border-gray-200 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-600 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 mr-2 mb-2"),f(t,"type","button"),f(t,"class","simple-signer-demo modal-sign-btn text-gray-900 bg-white hover:bg-gray-100 border border-gray-200 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-600 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 mr-2 mb-2"),f(e,"class","simple-signer-demo modal-container-body flex justify-center")},m(l,h){T(l,e,h),c(e,o),c(e,n),c(e,t),r||(i=[L(o,"click",s[6]),L(t,"click",s[7])],r=!0)},p:F,d(l){l&&S(e),r=!1,q(i)}}}function te(s){let e,o;return e=new _e({props:{show:s[1],xdr:s[2]}}),e.$on("close",s[11]),{c(){C(e.$$.fragment)},m(n,t){N(e,n,t),o=!0},p(n,t){const r={};t&2&&(r.show=n[1]),t&4&&(r.xdr=n[2]),e.$set(r)},i(n){o||(w(e.$$.fragment,n),o=!0)},o(n){$(e.$$.fragment,n),o=!1},d(n){I(e,n)}}}function xe(s){let e,o,n,t,r,i,l,h,m,v,_;e=new me({props:{title:"Sign Transaction",open:s[0],$$slots:{body:[$e]},$$scope:{ctx:s}}}),e.$on("close",s[8]);let u=s[2]!=""&&te(s);return{c(){C(e.$$.fragment),o=x(),n=g("div"),t=g("div"),r=g("button"),r.textContent="Connect",i=x(),l=g("button"),l.textContent="Sign Transaction",h=x(),u&&u.c(),f(r,"type","button"),f(r,"class","simple-signer-demo connect-btn text-gray-900 bg-white hover:bg-gray-100 border border-gray-200 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-600 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 mr-2 mb-2"),f(l,"type","button"),f(l,"class","simple-signer-demo sign-btn text-gray-900 bg-white hover:bg-gray-100 border border-gray-200 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-600 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 mr-2 mb-2"),f(t,"class","w-9/12 m-auto py-16 min-h-screen flex items-center justify-center"),f(n,"class","simple-signer-demo main-container bg-gradient-to-r from-indigo-600 to-blue-400")},m(d,p){N(e,d,p),T(d,o,p),T(d,n,p),c(n,t),c(t,r),c(t,i),c(t,l),c(n,h),u&&u.m(n,null),m=!0,v||(_=[L(r,"click",s[9]),L(l,"click",s[10])],v=!0)},p(d,[p]){const b={};p&1&&(b.open=d[0]),p&16384&&(b.$$scope={dirty:p,ctx:d}),e.$set(b),d[2]!=""?u?(u.p(d,p),p&4&&w(u,1)):(u=te(d),u.c(),w(u,1),u.m(n,null)):u&&(j(),$(u,1,1,()=>{u=null}),P())},i(d){m||(w(e.$$.fragment,d),w(u),m=!0)},o(d){$(e.$$.fragment,d),$(u),m=!1},d(d){I(e,d),d&&S(o),d&&S(n),u&&u.d(),v=!1,q(_)}}}function Te(s,e,o){let n,t;X(s,ee,a=>o(12,n=a)),X(s,Q,a=>o(2,t=a));let r=!1,i=!0;function l(){o(0,r=!r)}function h(){o(1,i=!i)}function m(a){if(a.origin!==B.env.VITE_HOST_SIMPLE_SIGNER)return;const k=a.data;if(k.type==="onConnect"){const E=k.message.publicKey;M.Keypair.fromPublicKey(E)&&(G(ee,n=E,n),console.log(k.message))}if(k.type==="onSign"){const E=k.message.signedXDR;M.xdr.TransactionEnvelope.validateXDR(E,"base64")===!0&&(G(Q,t=E,t),console.log(k.message))}}window.addEventListener("message",m);async function v(){const a=await ke(n);return ye(a,"This is a payment")}return[r,i,t,l,h,v,()=>J(),()=>v(),()=>l(),()=>J(),()=>l(),()=>h()]}class Se extends H{constructor(e){super();O(this,e,Te,xe,z,{})}}class Ee extends H{constructor(e){super();O(this,e,null,null,z,{})}}function Me(s){let e,o,n;return o=new ce({props:{path:"/",component:Se}}),{c(){e=g("main"),C(o.$$.fragment)},m(t,r){T(t,e,r),N(o,e,null),n=!0},p:F,i(t){n||(w(o.$$.fragment,t),n=!0)},o(t){$(o.$$.fragment,t),n=!1},d(t){t&&S(e),I(o)}}}function Le(s){let e,o,n,t;return e=new Ee({}),n=new ae({props:{$$slots:{default:[Me]},$$scope:{ctx:s}}}),{c(){C(e.$$.fragment),o=x(),C(n.$$.fragment)},m(r,i){N(e,r,i),T(r,o,i),N(n,r,i),t=!0},p(r,[i]){const l={};i&1&&(l.$$scope={dirty:i,ctx:r}),n.$set(l)},i(r){t||(w(e.$$.fragment,r),w(n.$$.fragment,r),t=!0)},o(r){$(e.$$.fragment,r),$(n.$$.fragment,r),t=!1},d(r){I(e,r),r&&S(o),I(n,r)}}}class Ce extends H{constructor(e){super();O(this,e,null,Le,z,{})}}new Ce({target:document.getElementById("app")});