import{S as R,i as H,s as B,e as g,a as x,t as j,b as f,c as $,d as c,l as E,f as K,u as re,g as se,h as ie,j as w,k,m as T,n as D,o as W,p as P,q as V,r as le,v as C,w as L,x as N,C as ae,y as ce,z as G,A,B as F,D as X,E as U,F as Y,R as de,G as ue}from"./vendor.867f8985.js";const q={},fe=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))t(n);new MutationObserver(n=>{for(const o of n)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&t(i)}).observe(document,{childList:!0,subtree:!0});function r(n){const o={};return n.integrity&&(o.integrity=n.integrity),n.referrerpolicy&&(o.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?o.credentials="include":n.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function t(n){if(n.ep)return;n.ep=!0;const o=r(n);fetch(n.href,o)}};fe();const ge=s=>({}),Z=s=>({});function J(s){let e,r,t,n,o,i,l,h,m,v,_,u,d;const p=s[4].body,b=le(p,s,s[3],Z);return{c(){e=g("div"),r=g("div"),t=x(),n=g("div"),o=g("div"),i=j(s[1]),l=x(),h=g("button"),h.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" height="15px" viewBox="0 0 24 24" width="14px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"></path><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"></path></svg>',m=x(),v=g("div"),b&&b.c(),f(r,"class","modal-overlay fixed w-full h-full bg-gray-900 opacity-50"),f(h,"class","simple-signer-demo close-button p-2 bg-gray-200 hover:bg-gray-300 rounded-full ml-4"),f(o,"class","head bg-gray-100 py-3 px-8 text-2xl font-bold flex justify-between"),f(v,"class","simple-signer-demo body content p-8"),f(n,"class","bg-white max-w-sm h-108 mx-auto rounded-lg shadow-xl z-50 overflow-y-auto"),f(e,"class","simple-signer-demo sign-transaction-modal-container modal z-50 fixed w-full h-full top-0 left-0 flex items-center justify-center p-8 lg:p-0")},m(y,a){$(y,e,a),c(e,r),c(e,t),c(e,n),c(n,o),c(o,i),c(o,l),c(o,h),c(n,m),c(n,v),b&&b.m(v,null),_=!0,u||(d=E(h,"click",s[5]),u=!0)},p(y,a){(!_||a&2)&&K(i,y[1]),b&&b.p&&(!_||a&8)&&re(b,p,y,y[3],_?ie(p,y[3],a,ge):se(y[3]),Z)},i(y){_||(w(b,y),_=!0)},o(y){k(b,y),_=!1},d(y){y&&T(e),b&&b.d(y),u=!1,d()}}}function me(s){let e,r,t=s[0]&&J(s);return{c(){t&&t.c(),e=D()},m(n,o){t&&t.m(n,o),$(n,e,o),r=!0},p(n,[o]){n[0]?t?(t.p(n,o),o&1&&w(t,1)):(t=J(n),t.c(),w(t,1),t.m(e.parentNode,e)):t&&(W(),k(t,1,1,()=>{t=null}),P())},i(n){r||(w(t),r=!0)},o(n){k(t),r=!1},d(n){t&&t.d(n),n&&T(e)}}}function pe(s,e,r){let{$$slots:t={},$$scope:n}=e,{open:o=!1}=e,{title:i=""}=e;const l=V(),h=()=>l("close");return s.$$set=m=>{"open"in m&&r(0,o=m.open),"title"in m&&r(1,i=m.title),"$$scope"in m&&r(3,n=m.$$scope)},[o,i,l,n,t,h]}class be extends R{constructor(e){super();H(this,e,pe,me,B,{open:0,title:1})}}function Q(s){let e,r,t,n,o,i,l,h,m,v,_,u,d,p,b,y;return _=new ae({props:{text:s[0],$$slots:{default:[he,({copy:a})=>({4:a}),({copy:a})=>a?16:0]},$$scope:{ctx:s}}}),{c(){e=g("div"),r=g("div"),r.innerHTML='<svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>',t=x(),n=g("div"),o=g("p"),o.innerHTML="Your <b>transaction</b> has been signed:",i=x(),l=g("p"),h=g("b"),m=j(s[0]),v=x(),C(_.$$.fragment),u=x(),d=g("button"),d.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" height="15px" viewBox="0 0 24 24" width="14px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"></path><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"></path></svg>',f(r,"class","w-8 h-5 text-green-500 bg-green-100 rounded-lg dark:bg-green-800 dark:text-green-200"),f(l,"class","text-ellipsis overflow-hidden"),f(n,"class","truncate text-area ml-3 text-sm font-normal"),f(d,"class","simple-signer-demo close-button p-2 bg-gray-200 hover:bg-gray-300 rounded-full ml-4"),f(e,"id","toast-success"),f(e,"class","simple-signer-demo toast absolute inset-x-0 bottom-0 h-26 flex justify-center items-center w-full max-w-md p-4 mb-4 text-gray-500 bg-white rounded-lg shadow dark:text-gray-400 dark:bg-gray-800 svelte-181q8qz"),f(e,"role","alert")},m(a,S){$(a,e,S),c(e,r),c(e,t),c(e,n),c(n,o),c(n,i),c(n,l),c(l,h),c(h,m),c(e,v),L(_,e,null),c(e,u),c(e,d),p=!0,b||(y=E(d,"click",s[3]),b=!0)},p(a,S){(!p||S&1)&&K(m,a[0]);const z={};S&1&&(z.text=a[0]),S&48&&(z.$$scope={dirty:S,ctx:a}),_.$set(z)},i(a){p||(w(_.$$.fragment,a),p=!0)},o(a){k(_.$$.fragment,a),p=!1},d(a){a&&T(e),N(_),b=!1,y()}}}function he(s){let e,r=(s[4]?"Copy":"")+"",t,n,o;return{c(){e=g("button"),t=j(r),f(e,"type","button"),f(e,"class","text-white bg-gray-800 hover:bg-gray-900 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center ml-2 mb-1 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-800 dark:border-gray-700")},m(i,l){$(i,e,l),c(e,t),n||(o=E(e,"click",function(){ce(s[4])&&s[4].apply(this,arguments)}),n=!0)},p(i,l){s=i,l&16&&r!==(r=(s[4]?"Copy":"")+"")&&K(t,r)},d(i){i&&T(e),n=!1,o()}}}function _e(s){let e,r,t=s[1]&&Q(s);return{c(){t&&t.c(),e=D()},m(n,o){t&&t.m(n,o),$(n,e,o),r=!0},p(n,[o]){n[1]?t?(t.p(n,o),o&2&&w(t,1)):(t=Q(n),t.c(),w(t,1),t.m(e.parentNode,e)):t&&(W(),k(t,1,1,()=>{t=null}),P())},i(n){r||(w(t),r=!0)},o(n){k(t),r=!1},d(n){t&&t.d(n),n&&T(e)}}}function ye(s,e,r){let{xdr:t=""}=e,{show:n=!0}=e;const o=V(),i=()=>o("close");return s.$$set=l=>{"xdr"in l&&r(0,t=l.xdr),"show"in l&&r(1,n=l.show)},[t,n,o,i]}class we extends R{constructor(e){super();H(this,e,ye,_e,B,{xdr:0,show:1})}}const O=q.env.VITE_HOST_SIMPLE_SIGNER;function ee(){return window.open(`${O}/connect`,"Connect_Window","width=280, height=350")}async function ve(s,e){const r=window.open(`${O}/sign`,"Sign_Window","width=450, height=350");return window.addEventListener("message",t=>{t.origin===`${O}`&&r&&t.data.type==="onReady"&&r.postMessage({xdr:s,description:e},`${O}`)}),r}const te=G(""),ne=G("");class ke extends Error{}const xe=new A.Server("https://horizon-testnet.stellar.org");async function $e(s){try{const e=s,r=await xe.loadAccount(e);return new A.TransactionBuilder(r,{fee:A.BASE_FEE,networkPassphrase:A.Networks.TESTNET}).addOperation(A.Operation.payment({destination:q.env.VITE_DESTINATION_PUBLICKEY,asset:A.Asset.native(),amount:"200"})).addMemo(A.Memo.text("Tx test")).setTimeout(0).build().toXDR()}catch{throw new ke}}function Te(s){let e,r,t,n,o,i;return{c(){e=g("div"),r=g("button"),r.textContent="Connect",t=x(),n=g("button"),n.textContent="Sign",f(r,"type","button"),f(r,"class","simple-signer-demo modal-connect-btn text-gray-900 bg-white hover:bg-gray-100 border border-gray-200 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-600 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 mr-2 mb-2"),f(n,"type","button"),f(n,"class","simple-signer-demo modal-sign-btn text-gray-900 bg-white hover:bg-gray-100 border border-gray-200 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-600 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 mr-2 mb-2"),f(e,"class","simple-signer-demo modal-container-body flex justify-center")},m(l,h){$(l,e,h),c(e,r),c(e,t),c(e,n),o||(i=[E(r,"click",s[6]),E(n,"click",s[7])],o=!0)},p:U,d(l){l&&T(e),o=!1,F(i)}}}function oe(s){let e,r;return e=new we({props:{show:s[1],xdr:s[2]}}),e.$on("close",s[11]),{c(){C(e.$$.fragment)},m(t,n){L(e,t,n),r=!0},p(t,n){const o={};n&2&&(o.show=t[1]),n&4&&(o.xdr=t[2]),e.$set(o)},i(t){r||(w(e.$$.fragment,t),r=!0)},o(t){k(e.$$.fragment,t),r=!1},d(t){N(e,t)}}}function Se(s){let e,r,t,n,o,i,l,h,m,v,_;e=new be({props:{title:"Sign Transaction",open:s[0],$$slots:{body:[Te]},$$scope:{ctx:s}}}),e.$on("close",s[8]);let u=s[2]!=""&&oe(s);return{c(){C(e.$$.fragment),r=x(),t=g("div"),n=g("div"),o=g("button"),o.textContent="Connect",i=x(),l=g("button"),l.textContent="Sign Transaction",h=x(),u&&u.c(),f(o,"type","button"),f(o,"class","simple-signer-demo connect-btn text-gray-900 bg-white hover:bg-gray-100 border border-gray-200 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-600 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 mr-2 mb-2"),f(l,"type","button"),f(l,"class","simple-signer-demo sign-btn text-gray-900 bg-white hover:bg-gray-100 border border-gray-200 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-600 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 mr-2 mb-2"),f(n,"class","w-9/12 m-auto py-16 min-h-screen flex items-center justify-center"),f(t,"class","simple-signer-demo main-container bg-gradient-to-r from-indigo-600 to-blue-400")},m(d,p){L(e,d,p),$(d,r,p),$(d,t,p),c(t,n),c(n,o),c(n,i),c(n,l),c(t,h),u&&u.m(t,null),m=!0,v||(_=[E(o,"click",s[9]),E(l,"click",s[10])],v=!0)},p(d,[p]){const b={};p&1&&(b.open=d[0]),p&16384&&(b.$$scope={dirty:p,ctx:d}),e.$set(b),d[2]!=""?u?(u.p(d,p),p&4&&w(u,1)):(u=oe(d),u.c(),w(u,1),u.m(t,null)):u&&(W(),k(u,1,1,()=>{u=null}),P())},i(d){m||(w(e.$$.fragment,d),w(u),m=!0)},o(d){k(e.$$.fragment,d),k(u),m=!1},d(d){N(e,d),d&&T(r),d&&T(t),u&&u.d(),v=!1,F(_)}}}function Ee(s,e,r){let t,n;X(s,ne,a=>r(12,t=a)),X(s,te,a=>r(2,n=a));let o=!1,i=!0;function l(){r(0,o=!o)}function h(){r(1,i=!i)}function m(a){if(a.origin!==q.env.VITE_HOST_SIMPLE_SIGNER)return;const S=new RegExp(/^AAAAAgAAAAA[a-zA-Z0-9!@#%*+=._-]+/gm),z=/^G[A-Za-z0-9]{55}$/,M=a.data;if(M.type==="onConnect"){const I=M.message.publicKey;z.test(I)&&(Y(ne,t=I,t),console.log(M.message))}if(M.type==="onSign"){const I=M.message.signedXDR;S.test(I)&&(Y(te,n=I,n),console.log(M.message))}}window.addEventListener("message",m);async function v(){const a=await $e(t);return ve(a,"This is a payment")}return[o,i,n,l,h,v,()=>ee(),()=>v(),()=>l(),()=>ee(),()=>l(),()=>h()]}class Ae extends R{constructor(e){super();H(this,e,Ee,Se,B,{})}}class Me extends R{constructor(e){super();H(this,e,null,null,B,{})}}function Ce(s){let e,r,t;return r=new ue({props:{path:"/",component:Ae}}),{c(){e=g("main"),C(r.$$.fragment)},m(n,o){$(n,e,o),L(r,e,null),t=!0},p:U,i(n){t||(w(r.$$.fragment,n),t=!0)},o(n){k(r.$$.fragment,n),t=!1},d(n){n&&T(e),N(r)}}}function Le(s){let e,r,t,n;return e=new Me({}),t=new de({props:{$$slots:{default:[Ce]},$$scope:{ctx:s}}}),{c(){C(e.$$.fragment),r=x(),C(t.$$.fragment)},m(o,i){L(e,o,i),$(o,r,i),L(t,o,i),n=!0},p(o,[i]){const l={};i&1&&(l.$$scope={dirty:i,ctx:o}),t.$set(l)},i(o){n||(w(e.$$.fragment,o),w(t.$$.fragment,o),n=!0)},o(o){k(e.$$.fragment,o),k(t.$$.fragment,o),n=!1},d(o){N(e,o),o&&T(r),N(t,o)}}}class Ne extends R{constructor(e){super();H(this,e,null,Le,B,{})}}new Ne({target:document.getElementById("app")});
