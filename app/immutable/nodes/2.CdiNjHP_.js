import{s as Ne,e as v,t as K,c as g,p as y,r as F,d as p,q as ce,a as k,i as U,z as f,u as ne,b as Ce,j as A,l as O,g as le,a0 as H,a1 as At,P as X,U as Ie,a2 as Et,y as tt,V as D,a3 as nt,o as St,x as ye,n as Le,T as Lt,X as B,S as Se,v as de,k as Ot,a4 as Jt}from"../chunks/scheduler.DiGuMIk8.js";import{S as De,i as Ve,c as Ae,h as $t,d as he,e as me,m as pe,b as R,t as Z,f as _e,g as wt,a as bt,k as _t}from"../chunks/index.B_VZWcBB.js";import{e as We,I as Ze,G as V,u as en,i as ee,d as xe,f as Je,c as $e,h as qe,w as vt,t as Be,j as ht,k as Zt,m as Mt,n as tn,o as nn,s as Wt,b as mt,p as ve,q as et,r as yt,v as gt,x as pt,y as sn}from"../chunks/stores.Di_Fz4k_.js";import{w as rn}from"../chunks/index.CLLOBSlE.js";import{f as Te,a as Nt}from"../chunks/index.CB1ibHD4.js";function ln(n){let e,t,i,r,l;return{c(){e=v("div"),t=K(n[0]),this.h()},l(s){e=g(s,"DIV",{style:!0,class:!0});var o=y(e);t=F(o,n[0]),o.forEach(p),this.h()},h(){ce(e,"top",n[2]+"px"),ce(e,"left",n[1]+"px"),k(e,"class","tooltip rounded svelte-13mfmzh")},m(s,o){U(s,e,o),f(e,t),l=!0},p(s,[o]){(!l||o&1)&&ne(t,s[0]),(!l||o&4)&&ce(e,"top",s[2]+"px"),(!l||o&2)&&ce(e,"left",s[1]+"px")},i(s){l||(s&&Ce(()=>{l&&(r&&r.end(1),i=Ae(e,Te,{duration:100}),i.start())}),l=!0)},o(s){i&&i.invalidate(),s&&(r=$t(e,Te,{duration:100})),l=!1},d(s){s&&p(e),s&&r&&r.end()}}}function on(n,e,t){let{message:i}=e,{x:r}=e,{y:l}=e;return n.$$set=s=>{"message"in s&&t(0,i=s.message),"x"in s&&t(1,r=s.x),"y"in s&&t(2,l=s.y)},[i,r,l]}class an extends De{constructor(e){super(),Ve(this,e,on,ln,Ne,{message:0,x:1,y:2})}}const It=(n,e)=>{let t;const i=()=>{t=new an({target:document.body,props:{message:e,x:0,y:0}});const s=document.querySelectorAll(".tooltip");let o=n.getBoundingClientRect();s.forEach(a=>{let u=a,d=o.top+window.scrollY-u.offsetHeight-10,T=o.bottom+window.scrollY+10,S=o.left+window.scrollX,c=o.right+window.scrollX-u.offsetWidth,M=o.left+window.scrollX+(n.offsetWidth-u.offsetWidth)/2;t.$set({x:M,y:T});let W=u.offsetHeight-o.bottom,_=window.innerWidth-u.offsetWidth-o.right,C=o.left-u.offsetWidth;W<=0&&(u.classList.add("top"),t.$set({y:d})),_<=0&&(u.classList.add("right"),t.$set({x:c})),C<=0&&(u.classList.add("left"),t.$set({x:S}))})},r=()=>{t.$destroy()};n.addEventListener("mouseover",i),n.addEventListener("mouseout",r),n.addEventListener("focusin",i),n.addEventListener("focusout",r);var l=new MutationObserver(function(){document.body.contains(n)||r()});return l.observe(document.body,{childList:!0,subtree:!0}),{destroy(){n.removeEventListener("mouseover",i),n.removeEventListener("mouseout",r),n.removeEventListener("focusin",i),n.removeEventListener("focusout",r)}}};function Rt(n,e,t){const i=n.slice();return i[57]=e[t],i}function Qt(n,e,t){const i=n.slice();return i[60]=e[t],i}function un(n){let e,t=n[60]+"",i;return{c(){e=v("span"),i=K(t),this.h()},l(r){e=g(r,"SPAN",{class:!0});var l=y(e);i=F(l,t),l.forEach(p),this.h()},h(){k(e,"class","letter svelte-2nv3e3")},m(r,l){U(r,e,l),f(e,i)},p(r,l){l[0]&2048&&t!==(t=r[60]+"")&&ne(i,t)},d(r){r&&p(e)}}}function cn(n){let e,t="_";return{c(){e=v("span"),e.textContent=t,this.h()},l(i){e=g(i,"SPAN",{class:!0,"data-svelte-h":!0}),le(e)!=="svelte-1s6kay6"&&(e.textContent=t),this.h()},h(){k(e,"class","letter space svelte-2nv3e3")},m(i,r){U(i,e,r)},p:Le,d(i){i&&p(e)}}}function Ht(n){let e;function t(l,s){return l[60]===" "?cn:un}let i=t(n),r=i(n);return{c(){r.c(),e=Ot()},l(l){r.l(l),e=Ot()},m(l,s){r.m(l,s),U(l,e,s)},p(l,s){i===(i=t(l))&&r?r.p(l,s):(r.d(1),r=i(l),r&&(r.c(),r.m(e.parentNode,e)))},d(l){l&&p(e),r.d(l)}}}function jt(n,e){let t,i,r,l=We(e[57].word),s=[];for(let o=0;o<l.length;o+=1)s[o]=Ht(Qt(e,l,o));return{key:n,first:null,c(){t=v("div");for(let o=0;o<s.length;o+=1)s[o].c();i=A(),this.h()},l(o){t=g(o,"DIV",{class:!0});var a=y(t);for(let u=0;u<s.length;u+=1)s[u].l(a);i=O(a),a.forEach(p),this.h()},h(){k(t,"class","word svelte-2nv3e3"),H(t,"padded",e[10]!==V.Quote),this.first=t},m(o,a){U(o,t,a);for(let u=0;u<s.length;u+=1)s[u]&&s[u].m(t,null);f(t,i)},p(o,a){if(e=o,a[0]&2048){l=We(e[57].word);let u;for(u=0;u<l.length;u+=1){const d=Qt(e,l,u);s[u]?s[u].p(d,a):(s[u]=Ht(d),s[u].c(),s[u].m(t,i))}for(;u<s.length;u+=1)s[u].d(1);s.length=l.length}a[0]&1024&&H(t,"padded",e[10]!==V.Quote)},i(o){o&&(r||Ce(()=>{r=Ae(t,Te,{duration:100}),r.start()}))},o:Le,d(o){o&&p(t),Lt(s,o)}}}function fn(n){let e,t,i,r,l,s,o,a='<span class="letter svelte-2nv3e3"> </span>',u,d=[],T=new Map,S,c,M,W,_="Click here to focus",C,m,N,I,E,G,j=We(n[11]);const q=w=>w[57].id;for(let w=0;w<j.length;w+=1){let b=Rt(n,j,w),x=q(b);T.set(x,d[w]=jt(x,b))}return N=new Ze({props:{name:"refresh",size:"2rem"}}),{c(){e=v("div"),t=v("input"),i=A(),r=v("div"),l=v("div"),s=v("div"),o=v("div"),o.innerHTML=a,u=A();for(let w=0;w<d.length;w+=1)d[w].c();S=A(),c=v("div"),M=A(),W=v("div"),W.textContent=_,C=A(),m=v("button"),he(N.$$.fragment),this.h()},l(w){e=g(w,"DIV",{class:!0});var b=y(e);t=g(b,"INPUT",{type:!0,"aria-hidden":!0,style:!0}),i=O(b),r=g(b,"DIV",{class:!0});var x=y(r);l=g(x,"DIV",{class:!0,style:!0});var z=y(l);s=g(z,"DIV",{class:!0});var J=y(s);o=g(J,"DIV",{class:!0,"data-svelte-h":!0}),le(o)!=="svelte-knvb3d"&&(o.innerHTML=a),u=O(J);for(let oe=0;oe<d.length;oe+=1)d[oe].l(J);J.forEach(p),S=O(z),c=g(z,"DIV",{class:!0,style:!0}),y(c).forEach(p),z.forEach(p),M=O(x),W=g(x,"DIV",{class:!0,"data-svelte-h":!0}),le(W)!=="svelte-1hd2oie"&&(W.textContent=_),x.forEach(p),C=O(b),m=g(b,"BUTTON",{class:!0});var fe=y(m);me(N.$$.fragment,fe),fe.forEach(p),b.forEach(p),this.h()},h(){k(t,"type","text"),k(t,"aria-hidden","true"),ce(t,"opacity","0"),ce(t,"height","0px"),t.autofocus=!0,k(o,"class","word padded svelte-2nv3e3"),k(s,"class","input-container svelte-2nv3e3"),H(s,"px-2",n[10]===V.Quote),k(c,"class","caret svelte-2nv3e3"),ce(c,"left",n[7]+"px"),ce(c,"top",n[6]+"px"),H(c,"animate",!n[9]),k(l,"class","flex flex-wrap overflow-hidden relative"),ce(l,"height",n[4]+"px"),k(W,"class","out-of-focus svelte-2nv3e3"),k(r,"class","container relative"),k(m,"class","mt-4 rounded flex"),k(e,"class","flex flex-col items-center w-full")},m(w,b){U(w,e,b),f(e,t),n[22](t),At(t,n[2]),f(e,i),f(e,r),f(r,l),f(l,s),f(s,o),f(s,u);for(let x=0;x<d.length;x+=1)d[x]&&d[x].m(s,null);n[25](s),f(l,S),f(l,c),n[26](c),f(r,M),f(r,W),n[28](W),f(e,C),f(e,m),pe(N,m,null),I=!0,t.focus(),E||(G=[X(t,"input",n[23]),X(t,"input",n[16]),X(t,"keydown",n[24]),X(t,"focus",n[14]),X(t,"blur",n[13]),X(W,"click",n[27]),X(W,"mousedown",Ie(n[21])),Et(It.call(null,m,"Restart Test")),X(m,"click",n[0]),X(m,"mousedown",Ie(n[20]))],E=!0)},p(w,b){b[0]&4&&t.value!==w[2]&&At(t,w[2]),b[0]&3072&&(j=We(w[11]),d=en(d,b,q,1,w,j,T,s,nn,jt,null,Rt)),(!I||b[0]&1024)&&H(s,"px-2",w[10]===V.Quote),(!I||b[0]&128)&&ce(c,"left",w[7]+"px"),(!I||b[0]&64)&&ce(c,"top",w[6]+"px"),(!I||b[0]&512)&&H(c,"animate",!w[9]),(!I||b[0]&16)&&ce(l,"height",w[4]+"px")},i(w){if(!I){for(let b=0;b<j.length;b+=1)R(d[b]);R(N.$$.fragment,w),I=!0}},o(w){Z(N.$$.fragment,w),I=!1},d(w){w&&p(e),n[22](null);for(let b=0;b<d.length;b+=1)d[b].d();n[25](null),n[26](null),n[28](null),_e(N),E=!1,tt(G)}}}function dn(n,e,t){let i,r,l,s,o,a,u,d,T,S,c,M;D(n,ee,h=>t(9,i=h)),D(n,xe,h=>t(33,r=h)),D(n,Je,h=>t(34,l=h)),D(n,$e,h=>t(10,s=h)),D(n,qe,h=>t(35,a=h)),D(n,vt,h=>t(36,u=h)),D(n,Be,h=>t(37,d=h)),D(n,ht,h=>t(38,T=h)),D(n,Zt,h=>t(39,S=h)),D(n,Mt,h=>t(40,c=h)),D(n,tn,h=>t(41,M=h));const W=nt();let _,C="",m,N=0,I,E,G,j,q,w=rn([]);D(n,w,h=>t(11,o=h));let b=0,x=0,z=0;function J(){let h=Math.floor(Math.random()*M.length);return M[h]}function fe(){let h=Math.floor(Math.random()*M.length);return{id:Math.random(),word:M[h]}}function oe(h){let L=[];for(let Q=0;Q<h;Q++){let Y=J(),te={id:Math.random(),word:Y};L.push(te)}return L}function Ee(){let h=Math.floor(Math.random()*S.length);return B(Mt,c=h,c),S[h]}function P(h){B(Be,d=0,d);let L=h.content.split(" "),Q=[];for(let Y=0;Y<L.length;Y++){let je={id:Math.random(),word:L[Y]};B(Be,d+=L[Y].length,d),Q.push(je),Y<L.length-1&&(Q.push({id:Math.random(),word:" "}),B(Be,d++,d))}return Q}function se(){s===V.Time&&B(w,o=oe(100),o),s===V.Word&&B(w,o=oe(u),o),s===V.Quote&&B(w,o=P(Ee()),o)}function $(){I.classList.add("show"),j.classList.add("hidden")}function st(){I.classList.remove("show"),j.classList.remove("hidden")}function Oe(){let L=q.offsetHeight-j.offsetHeight,Q=q.offsetTop+L/2,Y=q.offsetLeft-j.offsetWidth/2;return{newTop:Q,newLeft:Y}}function re(){let h=Oe();t(7,G=h.newLeft),t(6,E=h.newTop)}function ie(){var h;q=(h=m.children[x])==null?void 0:h.children[z],q||console.error("CURRENT ELEMENT NOT FOUND")}function Re(){if(B(ht,T++,T),C.toString()===o[x].word[z]){B(xe,r++,r),q.classList.add("correct");return}q.classList.add("incorrect")}async function Ue(){W("reset"),await ye(),B(qe,a=0,a),b=0,x=0,z=0,ht.set(0),xe.set(0),B(w,o=[],o),se(),t(1,_.disabled=!1,_),_.focus(),await ye(),ie(),re()}function rt(){t(1,_.disabled=!0,_),$()}function Pe(){t(1,_.disabled=!0,_),$()}function ze(){t(1,_.disabled=!0,_),$()}function ge(){z++,s===V.Quote&&(B(Je,l++,l),l>=d&&(W("finishQuoteMode"),Pe())),z>=o[x].word.length&&(x++,s===V.Time&&(o.push(fe()),w.set(o)),s===V.Word&&(B(qe,a++,a),a>=u&&(W("finishWordMode"),Pe())),z=0)}function we(){z>0?z--:x>0&&(s===V.Word&&B(qe,a--,a),x--,z=o[x].word.length-1)}function Ke(){if(!i)return;let h=Oe();if(h.newTop>E){if(b++,b===2){let L=0,Q=0;for(;L<50;L++){let Y=m.children[L].children[0];if(L===0){Q=Y.offsetTop;continue}if(Y.offsetTop!==Q)break}o.splice(0,L),w.set(o),x-=L,b=1,z=0}z=0}h.newTop<E&&b--}function Qe(){we(),ie(),s===V.Quote&&l>0&&B(Je,l--,l),q.classList.contains("correct")?(B(xe,r--,r),q.classList.remove("correct")):q.classList.contains("incorrect")&&q.classList.remove("incorrect"),Ke(),re()}async function be(){if(i||W("start"),await ye(),ie(),Re(),ge(),!i){t(2,C="");return}ie(),Ke(),await ye(),ie(),re(),t(2,C="")}function He(){let h=window.getComputedStyle(m.children[0]),L=parseInt(h.marginTop),Q=parseInt(h.marginBottom),Y=m.children[0];t(4,N=(Y.offsetHeight+L+Q)*3),ie(),re(),m.children[0].remove()}St(async()=>{_.focus(),He(),await ye(),se()});function Fe(h){Se.call(this,n,h)}function Xe(h){Se.call(this,n,h)}function Ge(h){de[h?"unshift":"push"](()=>{_=h,t(1,_)})}function Me(){C=this.value,t(2,C)}const ae=h=>{h.key==="Backspace"&&Qe()};function ke(h){de[h?"unshift":"push"](()=>{m=h,t(3,m)})}function ue(h){de[h?"unshift":"push"](()=>{j=h,t(8,j)})}const Ye=()=>_.focus();function lt(h){de[h?"unshift":"push"](()=>{I=h,t(5,I)})}return[Ue,_,C,m,N,I,E,G,j,i,s,o,w,$,st,Qe,be,rt,Pe,ze,Fe,Xe,Ge,Me,ae,ke,ue,Ye,lt]}class hn extends De{constructor(e){super(),Ve(this,e,dn,fn,Ne,{reset:0,timeUp:17,finishWordMode:18,finishQuoteMode:19},null,[-1,-1,-1])}get reset(){return this.$$.ctx[0]}get timeUp(){return this.$$.ctx[17]}get finishWordMode(){return this.$$.ctx[18]}get finishQuoteMode(){return this.$$.ctx[19]}}function xt(n){let e,t="ເວລາ",i;return{c(){e=v("span"),e.textContent=t},l(r){e=g(r,"SPAN",{"data-svelte-h":!0}),le(e)!=="svelte-151t9ci"&&(e.textContent=t)},m(r,l){U(r,e,l)},i(r){r&&(i||Ce(()=>{i=Ae(e,Nt,{x:-15}),i.start()}))},o:Le,d(r){r&&p(e)}}}function qt(n){let e,t="ຄຳສັບ",i;return{c(){e=v("span"),e.textContent=t},l(r){e=g(r,"SPAN",{"data-svelte-h":!0}),le(e)!=="svelte-1lb3rl6"&&(e.textContent=t)},m(r,l){U(r,e,l)},i(r){r&&(i||Ce(()=>{i=Ae(e,Nt,{x:-15}),i.start()}))},o:Le,d(r){r&&p(e)}}}function Bt(n){let e,t="ປະໂຫຍກ",i;return{c(){e=v("span"),e.textContent=t},l(r){e=g(r,"SPAN",{"data-svelte-h":!0}),le(e)!=="svelte-1w7e5li"&&(e.textContent=t)},m(r,l){U(r,e,l)},i(r){r&&(i||Ce(()=>{i=Ae(e,Nt,{x:-15}),i.start()}))},o:Le,d(r){r&&p(e)}}}function mn(n){let e,t,i,r,l,s,o,a,u,d,T,S,c,M,W;i=new Ze({props:{name:"timer",size:"1.75rem"}});let _=n[0]===V.Time&&xt();o=new Ze({props:{name:"spellcheck",size:"1.75rem"}});let C=n[0]===V.Word&&qt();T=new Ze({props:{name:"article",size:"1.75rem"}});let m=n[0]===V.Quote&&Bt();return{c(){e=v("div"),t=v("button"),he(i.$$.fragment),r=A(),_&&_.c(),l=A(),s=v("button"),he(o.$$.fragment),a=A(),C&&C.c(),u=A(),d=v("button"),he(T.$$.fragment),S=A(),m&&m.c(),this.h()},l(N){e=g(N,"DIV",{class:!0});var I=y(e);t=g(I,"BUTTON",{class:!0});var E=y(t);me(i.$$.fragment,E),r=O(E),_&&_.l(E),E.forEach(p),l=O(I),s=g(I,"BUTTON",{class:!0});var G=y(s);me(o.$$.fragment,G),a=O(G),C&&C.l(G),G.forEach(p),u=O(I),d=g(I,"BUTTON",{class:!0});var j=y(d);me(T.$$.fragment,j),S=O(j),m&&m.l(j),j.forEach(p),I.forEach(p),this.h()},h(){k(t,"class","flex items-end gap-1 svelte-nqjzyb"),H(t,"active",n[0]===V.Time),k(s,"class","flex items-end gap-1 svelte-nqjzyb"),H(s,"active",n[0]===V.Word),k(d,"class","flex items-end gap-1 svelte-nqjzyb"),H(d,"active",n[0]===V.Quote),k(e,"class","flex justify-end gap-2")},m(N,I){U(N,e,I),f(e,t),pe(i,t,null),f(t,r),_&&_.m(t,null),f(e,l),f(e,s),pe(o,s,null),f(s,a),C&&C.m(s,null),f(e,u),f(e,d),pe(T,d,null),f(d,S),m&&m.m(d,null),c=!0,M||(W=[X(t,"click",n[5]),X(t,"mousedown",Ie(n[4])),X(s,"click",n[6]),X(s,"mousedown",Ie(n[3])),X(d,"click",n[7]),X(d,"mousedown",Ie(n[2]))],M=!0)},p(N,[I]){N[0]===V.Time?_?I&1&&R(_,1):(_=xt(),_.c(),R(_,1),_.m(t,null)):_&&(_.d(1),_=null),(!c||I&1)&&H(t,"active",N[0]===V.Time),N[0]===V.Word?C?I&1&&R(C,1):(C=qt(),C.c(),R(C,1),C.m(s,null)):C&&(C.d(1),C=null),(!c||I&1)&&H(s,"active",N[0]===V.Word),N[0]===V.Quote?m?I&1&&R(m,1):(m=Bt(),m.c(),R(m,1),m.m(d,null)):m&&(m.d(1),m=null),(!c||I&1)&&H(d,"active",N[0]===V.Quote)},i(N){c||(R(i.$$.fragment,N),R(_),R(o.$$.fragment,N),R(C),R(T.$$.fragment,N),R(m),c=!0)},o(N){Z(i.$$.fragment,N),Z(o.$$.fragment,N),Z(T.$$.fragment,N),c=!1},d(N){N&&p(e),_e(i),_&&_.d(),_e(o),C&&C.d(),_e(T),m&&m.d(),M=!1,tt(W)}}}function pn(n,e,t){let i,r;D(n,$e,c=>t(0,i=c)),D(n,ee,c=>t(8,r=c));let l=nt();async function s(c){r||i!==c&&($e.set(c),Wt("mode",c.toString()),await ye(),l("setNewMode"))}function o(c){Se.call(this,n,c)}function a(c){Se.call(this,n,c)}function u(c){Se.call(this,n,c)}return[i,s,o,a,u,()=>s(V.Time),()=>s(V.Word),()=>s(V.Quote)]}class _n extends De{constructor(e){super(),Ve(this,e,pn,mn,Ne,{})}}class kt{constructor(){this.isRunning=!1,this.startTime=0,this.overallTime=0}_getTimeElapsedSinceLastStart(){return this.startTime?Date.now()-this.startTime:0}start(){this.isRunning=!0,this.startTime=Date.now()}stop(){this.isRunning=!1,this.overallTime=this.overallTime+this._getTimeElapsedSinceLastStart()}reset(){this.overallTime=0,this.isRunning=!1,this.startTime=0}getTime(){return this.startTime?this.isRunning?this.overallTime+this._getTimeElapsedSinceLastStart():this.overallTime:0}}function Ut(n,e,t){const i=n.slice();return i[15]=e[t],i}function zt(n){let e,t,i,r=We(n[4]),l=[];for(let s=0;s<r.length;s+=1)l[s]=Kt(Ut(n,r,s));return{c(){e=v("div");for(let s=0;s<l.length;s+=1)l[s].c();this.h()},l(s){e=g(s,"DIV",{class:!0});var o=y(e);for(let a=0;a<l.length;a+=1)l[a].l(o);o.forEach(p),this.h()},h(){k(e,"class","flex align-bottom gap-2")},m(s,o){U(s,e,o);for(let a=0;a<l.length;a+=1)l[a]&&l[a].m(e,null);i=!0},p(s,o){if(o&49){r=We(s[4]);let a;for(a=0;a<r.length;a+=1){const u=Ut(s,r,a);l[a]?l[a].p(u,o):(l[a]=Kt(u),l[a].c(),l[a].m(e,null))}for(;a<l.length;a+=1)l[a].d(1);l.length=r.length}},i(s){i||(s&&Ce(()=>{i&&(t||(t=_t(e,Te,{},!0)),t.run(1))}),i=!0)},o(s){s&&(t||(t=_t(e,Te,{},!1)),t.run(0)),i=!1},d(s){s&&p(e),Lt(l,s),s&&t&&t.end()}}}function Kt(n){let e,t=n[15]+"",i,r,l,s;function o(){return n[11](n[15])}return{c(){e=v("button"),i=K(t),r=A(),this.h()},l(a){e=g(a,"BUTTON",{class:!0});var u=y(e);i=F(u,t),r=O(u),u.forEach(p),this.h()},h(){k(e,"class","svelte-1ftf6rh"),H(e,"active",n[0]===n[15])},m(a,u){U(a,e,u),f(e,i),f(e,r),l||(s=[X(e,"click",o),X(e,"mousedown",Ie(n[10]))],l=!0)},p(a,u){n=a,u&17&&H(e,"active",n[0]===n[15])},d(a){a&&p(e),l=!1,tt(s)}}}function vn(n){let e,t,i,r,l=!n[3]&&n[2]===0&&zt(n);return{c(){e=v("div"),t=v("h1"),i=K(n[1]),r=A(),l&&l.c(),this.h()},l(s){e=g(s,"DIV",{class:!0});var o=y(e);t=g(o,"H1",{class:!0});var a=y(t);i=F(a,n[1]),a.forEach(p),r=O(o),l&&l.l(o),o.forEach(p),this.h()},h(){k(t,"class","svelte-1ftf6rh"),H(t,"active-timer",n[3]),H(t,"finish",!n[3]&&n[2]>0),k(e,"class","flex justify-between align-center mt-6")},m(s,o){U(s,e,o),f(e,t),f(t,i),f(e,r),l&&l.m(e,null)},p(s,[o]){o&2&&ne(i,s[1]),o&8&&H(t,"active-timer",s[3]),o&12&&H(t,"finish",!s[3]&&s[2]>0),!s[3]&&s[2]===0?l?(l.p(s,o),o&12&&R(l,1)):(l=zt(s),l.c(),R(l,1),l.m(e,null)):l&&(wt(),Z(l,1,1,()=>{l=null}),bt())},i(s){R(l)},o(s){Z(l)},d(s){s&&p(e),l&&l.d()}}}function gn(n,e,t){let i,r,l,s;D(n,mt,m=>t(0,r=m)),D(n,ve,m=>t(2,l=m)),D(n,ee,m=>t(3,s=m));const o=nt(),a=new kt;let u,d=[15,30,60,120],T;function S(){ee.set(!0),a.start(),u=setInterval(()=>{ve.set(Math.round(a.getTime()/1e3)),t(9,T=r-l),T<=0&&(clearInterval(u),o("finish"))},100)}function c(){ee.set(!1),a.reset(),ve.set(0),clearInterval(u),t(9,T=r)}function M(){ee.set(!1),a.stop(),clearInterval(u)}function W(m){B(mt,r=m,r),Wt("time",m),B(mt,r=m,r),t(9,T=m),o("setNewOption")}St(()=>{t(9,T=r)});function _(m){Se.call(this,n,m)}const C=m=>W(m);return n.$$.update=()=>{n.$$.dirty&513&&t(1,i=new Date((T||r)*1e3).toISOString().substring(14,19))},[r,i,l,s,d,W,S,c,M,T,_,C]}class wn extends De{constructor(e){super(),Ve(this,e,gn,vn,Ne,{start:6,reset:7,pause:8})}get start(){return this.$$.ctx[6]}get reset(){return this.$$.ctx[7]}get pause(){return this.$$.ctx[8]}}function Ft(n,e,t){const i=n.slice();return i[15]=e[t],i}function Xt(n){let e,t,i,r=We(n[5]),l=[];for(let s=0;s<r.length;s+=1)l[s]=Gt(Ft(n,r,s));return{c(){e=v("div");for(let s=0;s<l.length;s+=1)l[s].c();this.h()},l(s){e=g(s,"DIV",{class:!0});var o=y(e);for(let a=0;a<l.length;a+=1)l[a].l(o);o.forEach(p),this.h()},h(){k(e,"class","flex align-bottom gap-2")},m(s,o){U(s,e,o);for(let a=0;a<l.length;a+=1)l[a]&&l[a].m(e,null);i=!0},p(s,o){if(o&49){r=We(s[5]);let a;for(a=0;a<r.length;a+=1){const u=Ft(s,r,a);l[a]?l[a].p(u,o):(l[a]=Gt(u),l[a].c(),l[a].m(e,null))}for(;a<l.length;a+=1)l[a].d(1);l.length=r.length}},i(s){i||(s&&Ce(()=>{i&&(t||(t=_t(e,Te,{},!0)),t.run(1))}),i=!0)},o(s){s&&(t||(t=_t(e,Te,{},!1)),t.run(0)),i=!1},d(s){s&&p(e),Lt(l,s),s&&t&&t.end()}}}function Gt(n){let e,t=n[15]+"",i,r,l,s;function o(){return n[11](n[15])}return{c(){e=v("button"),i=K(t),r=A(),this.h()},l(a){e=g(a,"BUTTON",{class:!0});var u=y(e);i=F(u,t),r=O(u),u.forEach(p),this.h()},h(){k(e,"class","svelte-1bqq4gw"),H(e,"active",n[4]===n[15])},m(a,u){U(a,e,u),f(e,i),f(e,r),l||(s=[X(e,"click",o),X(e,"mousedown",Ie(n[10]))],l=!0)},p(a,u){n=a,u&48&&H(e,"active",n[4]===n[15])},d(a){a&&p(e),l=!1,tt(s)}}}function bn(n){let e,t,i,r,l,s,o=!n[2]&&n[3]===0&&Xt(n);return{c(){e=v("div"),t=v("h1"),i=K(n[1]),r=K("/"),l=K(n[4]),s=A(),o&&o.c(),this.h()},l(a){e=g(a,"DIV",{class:!0});var u=y(e);t=g(u,"H1",{class:!0});var d=y(t);i=F(d,n[1]),r=F(d,"/"),l=F(d,n[4]),d.forEach(p),s=O(u),o&&o.l(u),u.forEach(p),this.h()},h(){k(t,"class","svelte-1bqq4gw"),H(t,"active-counter",n[2]),H(t,"finish",!n[2]&&n[3]>0),k(e,"class","flex justify-between align-center mt-6")},m(a,u){U(a,e,u),f(e,t),f(t,i),f(t,r),f(t,l),f(e,s),o&&o.m(e,null)},p(a,[u]){u&2&&ne(i,a[1]),u&16&&ne(l,a[4]),u&4&&H(t,"active-counter",a[2]),u&12&&H(t,"finish",!a[2]&&a[3]>0),!a[2]&&a[3]===0?o?(o.p(a,u),u&12&&R(o,1)):(o=Xt(a),o.c(),R(o,1),o.m(e,null)):o&&(wt(),Z(o,1,1,()=>{o=null}),bt())},i(a){R(o)},o(a){Z(o)},d(a){a&&p(e),o&&o.d()}}}function kn(n,e,t){let i,r,l,s;D(n,qe,m=>t(1,i=m)),D(n,ee,m=>t(2,r=m)),D(n,ve,m=>t(3,l=m)),D(n,vt,m=>t(4,s=m));const o=nt();let a,u=new kt,d=[10,25,50,100];function T(m){Wt("word",m),vt.set(m),o("setNewOption")}function S(){ee.set(!0),u.start(),a=setInterval(()=>{ve.set(Math.round(u.getTime()/1e3))},100)}function c(){ee.set(!1),u.stop(),B(qe,i=0,i),clearInterval(a)}function M(){ee.set(!1),u.reset(),ve.set(0),clearInterval(a)}function W(){ee.set(!1),clearInterval(a)}function _(m){Se.call(this,n,m)}return[T,i,r,l,s,d,S,c,M,W,_,m=>T(m)]}class Tn extends De{constructor(e){super(),Ve(this,e,kn,bn,Ne,{setWordCount:0,start:6,finish:7,reset:8,pause:9})}get setWordCount(){return this.$$.ctx[0]}get start(){return this.$$.ctx[6]}get finish(){return this.$$.ctx[7]}get reset(){return this.$$.ctx[8]}get pause(){return this.$$.ctx[9]}}function Cn(n){let e,t,i,r,l;return{c(){e=v("div"),t=v("h1"),i=K(n[1]),r=K(" / "),l=K(n[0]),this.h()},l(s){e=g(s,"DIV",{class:!0});var o=y(e);t=g(o,"H1",{class:!0});var a=y(t);i=F(a,n[1]),r=F(a," / "),l=F(a,n[0]),a.forEach(p),o.forEach(p),this.h()},h(){k(t,"class","svelte-k6awdo"),H(t,"active-counter",n[2]),H(t,"finish",!n[2]&&n[3]>0),k(e,"class","flex justify-between align-center mt-6")},m(s,o){U(s,e,o),f(e,t),f(t,i),f(t,r),f(t,l)},p(s,[o]){o&2&&ne(i,s[1]),o&1&&ne(l,s[0]),o&4&&H(t,"active-counter",s[2]),o&12&&H(t,"finish",!s[2]&&s[3]>0)},i:Le,o:Le,d(s){s&&p(e)}}}function En(n,e,t){let i,r,l,s;D(n,Be,c=>t(0,i=c)),D(n,Je,c=>t(1,r=c)),D(n,ee,c=>t(2,l=c)),D(n,ve,c=>t(3,s=c));let o,a=new kt;function u(){ee.set(!0),a.start(),o=setInterval(()=>{ve.set(Math.round(a.getTime()/1e3))},100)}function d(){ee.set(!1),a.stop(),clearInterval(o)}function T(){ee.set(!1),a.reset(),ve.set(0),B(Je,r=0,r),B(Be,i=0,i),clearInterval(o)}function S(){ee.set(!1),clearInterval(o)}return[i,r,l,s,u,d,T,S]}class Mn extends De{constructor(e){super(),Ve(this,e,En,Cn,Ne,{start:4,finish:5,reset:6,pause:7})}get start(){return this.$$.ctx[4]}get finish(){return this.$$.ctx[5]}get reset(){return this.$$.ctx[6]}get pause(){return this.$$.ctx[7]}}function Yt(n){let e,t,i="source",r,l,s=n[6][n[7]].reference+"",o;return{c(){e=v("div"),t=v("span"),t.textContent=i,r=A(),l=v("h3"),o=K(s),this.h()},l(a){e=g(a,"DIV",{class:!0});var u=y(e);t=g(u,"SPAN",{class:!0,"data-svelte-h":!0}),le(t)!=="svelte-1ttjb6m"&&(t.textContent=i),r=O(u),l=g(u,"H3",{class:!0});var d=y(l);o=F(d,s),d.forEach(p),u.forEach(p),this.h()},h(){k(t,"class","text-2xl"),k(l,"class","text-5xl font-bold"),k(e,"class","flex flex-col")},m(a,u){U(a,e,u),f(e,t),f(e,r),f(e,l),f(l,o)},p(a,u){u&192&&s!==(s=a[6][a[7]].reference+"")&&ne(o,s)},d(a){a&&p(e)}}}function yn(n){let e,t,i,r,l="",s,o,a,u,d="wpm",T,S,c=et(n[3],n[5])+"",M,W,_,C,m="acc",N,I,E=yt(n[3],n[4])+"",G,j,q,w,b,x="char",z,J,fe,oe,Ee,P,se,$,st="test type",Oe,re,ie=n[2].toString()+"",Re,Ue,rt=n[9]()+"",Pe,ze,ge,we,Ke="total time",Qe,be,He,Fe,Xe,Ge,Me,ae,ke,ue,Ye,lt,h=n[2]===V.Quote&&Yt(n);return ke=new Ze({props:{name:"arrow_forward",size:"2rem"}}),{c(){e=v("div"),t=v("div"),i=v("div"),r=v("canvas"),r.innerHTML=l,s=A(),o=v("div"),a=v("div"),u=v("span"),u.textContent=d,T=A(),S=v("h3"),M=K(c),W=A(),_=v("div"),C=v("span"),C.textContent=m,N=A(),I=v("h3"),G=K(E),j=K("%"),q=A(),w=v("div"),b=v("span"),b.textContent=x,z=A(),J=v("h3"),fe=K(n[3]),oe=K("/"),Ee=K(n[4]),P=A(),se=v("div"),$=v("span"),$.textContent=st,Oe=A(),re=v("h3"),Re=K(ie),Ue=A(),Pe=K(rt),ze=A(),ge=v("div"),we=v("span"),we.textContent=Ke,Qe=A(),be=v("h3"),He=K(n[5]),Fe=K("s"),Xe=A(),h&&h.c(),Ge=A(),Me=v("div"),ae=v("button"),he(ke.$$.fragment),this.h()},l(L){e=g(L,"DIV",{class:!0});var Q=y(e);t=g(Q,"DIV",{class:!0});var Y=y(t);i=g(Y,"DIV",{class:!0});var je=y(i);r=g(je,"CANVAS",{"data-svelte-h":!0}),le(r)!=="svelte-1vctolp"&&(r.innerHTML=l),je.forEach(p),s=O(Y),o=g(Y,"DIV",{class:!0});var te=y(o);a=g(te,"DIV",{class:!0});var ot=y(a);u=g(ot,"SPAN",{class:!0,"data-svelte-h":!0}),le(u)!=="svelte-1nfzavv"&&(u.textContent=d),T=O(ot),S=g(ot,"H3",{class:!0});var Dt=y(S);M=F(Dt,c),Dt.forEach(p),ot.forEach(p),W=O(te),_=g(te,"DIV",{class:!0});var it=y(_);C=g(it,"SPAN",{class:!0,"data-svelte-h":!0}),le(C)!=="svelte-m2jup8"&&(C.textContent=m),N=O(it),I=g(it,"H3",{class:!0});var Tt=y(I);G=F(Tt,E),j=F(Tt,"%"),Tt.forEach(p),it.forEach(p),q=O(te),w=g(te,"DIV",{class:!0});var at=y(w);b=g(at,"SPAN",{class:!0,"data-svelte-h":!0}),le(b)!=="svelte-1hzxstz"&&(b.textContent=x),z=O(at),J=g(at,"H3",{class:!0});var ut=y(J);fe=F(ut,n[3]),oe=F(ut,"/"),Ee=F(ut,n[4]),ut.forEach(p),at.forEach(p),P=O(te),se=g(te,"DIV",{class:!0});var ct=y(se);$=g(ct,"SPAN",{class:!0,"data-svelte-h":!0}),le($)!=="svelte-d3cgi9"&&($.textContent=st),Oe=O(ct),re=g(ct,"H3",{class:!0});var ft=y(re);Re=F(ft,ie),Ue=O(ft),Pe=F(ft,rt),ft.forEach(p),ct.forEach(p),ze=O(te),ge=g(te,"DIV",{class:!0});var dt=y(ge);we=g(dt,"SPAN",{class:!0,"data-svelte-h":!0}),le(we)!=="svelte-1urfqro"&&(we.textContent=Ke),Qe=O(dt),be=g(dt,"H3",{class:!0});var Ct=y(be);He=F(Ct,n[5]),Fe=F(Ct,"s"),Ct.forEach(p),dt.forEach(p),Xe=O(te),h&&h.l(te),te.forEach(p),Y.forEach(p),Ge=O(Q),Me=g(Q,"DIV",{class:!0});var Vt=y(Me);ae=g(Vt,"BUTTON",{class:!0});var Pt=y(ae);me(ke.$$.fragment,Pt),Pt.forEach(p),Vt.forEach(p),Q.forEach(p),this.h()},h(){k(i,"class","w-full flex justify-center h-72"),k(u,"class","text-2xl"),k(S,"class","text-5xl font-bold"),k(a,"class","flex flex-col"),k(C,"class","text-2xl"),k(I,"class","text-5xl font-bold"),k(_,"class","flex flex-col"),k(b,"class","text-2xl"),k(J,"class","text-5xl font-bold"),k(w,"class","flex flex-col"),k($,"class","text-2xl"),k(re,"class","text-5xl font-bold"),k(se,"class","flex flex-col"),k(we,"class","text-2xl"),k(be,"class","text-5xl font-bold"),k(ge,"class","flex flex-col"),k(o,"class","flex justify-between flex-wrap w-full gap-4 max-sm:flex-col max-sm:items-center max-sm:gap-6"),k(t,"class","flex justify-around flex-wrap gap-4"),k(ae,"class","flex rounded"),k(Me,"class","mt-20 flex justify-center"),k(e,"class","container flex flex-col mt-14")},m(L,Q){U(L,e,Q),f(e,t),f(t,i),f(i,r),n[11](r),f(t,s),f(t,o),f(o,a),f(a,u),f(a,T),f(a,S),f(S,M),f(o,W),f(o,_),f(_,C),f(_,N),f(_,I),f(I,G),f(I,j),f(o,q),f(o,w),f(w,b),f(w,z),f(w,J),f(J,fe),f(J,oe),f(J,Ee),f(o,P),f(o,se),f(se,$),f(se,Oe),f(se,re),f(re,Re),f(re,Ue),f(re,Pe),f(o,ze),f(o,ge),f(ge,we),f(ge,Qe),f(ge,be),f(be,He),f(be,Fe),f(o,Xe),h&&h.m(o,null),f(e,Ge),f(e,Me),f(Me,ae),pe(ke,ae,null),n[12](ae),ue=!0,Ye||(lt=[Et(It.call(null,b,"correct/total")),Et(It.call(null,ae,"Next Test")),X(ae,"click",n[13]),X(ae,"mousedown",Ie(n[10]))],Ye=!0)},p(L,[Q]){(!ue||Q&40)&&c!==(c=et(L[3],L[5])+"")&&ne(M,c),(!ue||Q&24)&&E!==(E=yt(L[3],L[4])+"")&&ne(G,E),(!ue||Q&8)&&ne(fe,L[3]),(!ue||Q&16)&&ne(Ee,L[4]),(!ue||Q&4)&&ie!==(ie=L[2].toString()+"")&&ne(Re,ie),(!ue||Q&32)&&ne(He,L[5]),L[2]===V.Quote?h?h.p(L,Q):(h=Yt(L),h.c(),h.m(o,null)):h&&(h.d(1),h=null)},i(L){ue||(R(ke.$$.fragment,L),ue=!0)},o(L){Z(ke.$$.fragment,L),ue=!1},d(L){L&&p(e),n[11](null),h&&h.d(),_e(ke),n[12](null),Ye=!1,tt(lt)}}}function In(n,e,t){let i,r,l,s,o,a,u,d,T;D(n,gt,E=>t(14,i=E)),D(n,$e,E=>t(2,r=E)),D(n,xe,E=>t(3,l=E)),D(n,ht,E=>t(4,s=E)),D(n,ve,E=>t(5,o=E)),D(n,vt,E=>t(15,a=E)),D(n,mt,E=>t(16,u=E)),D(n,Zt,E=>t(6,d=E)),D(n,Mt,E=>t(7,T=E));const S=nt();function c(){S("nextTest")}let M,W;function _(){return r===V.Time?u.toString():r===V.Word?a.toString():""}St(async()=>{const E={wpm:et(l,o),accuracy:yt(l,s),time:pt(o),total_key:s,correct_key:l,timestamp:Math.floor(Date.now()/1e3),mode:r,sub_mode:_()};sn(E);const G=M.getContext("2d"),j=[],q=[];for(let b=0;b<i.length;b++)q[b]=i[b].wpm,j[b]=i[b].time;const w={labels:j,datasets:[{label:"wpm",data:q,borderWidth:2,borderColor:"#04a5e5",backgroundColor:"#04a5e5"}]};new Chart(G,{type:"line",data:w,options:{animation:{duration:0},plugins:{legend:{display:!1},title:{display:!1},tooltip:{callbacks:{title(){return""}}}},maintainAspectRatio:!1,scales:{y:{beginAtZero:!0,title:{display:!0,text:"Word Per Minute"}}}}})}),Jt(()=>{B(gt,i=[],i),c()});function C(E){Se.call(this,n,E)}function m(E){de[E?"unshift":"push"](()=>{M=E,t(0,M)})}function N(E){de[E?"unshift":"push"](()=>{W=E,t(1,W)})}return[M,W,r,l,s,o,d,T,c,_,C,m,N,()=>{W.blur(),c()}]}class Sn extends De{constructor(e){super(),Ve(this,e,In,yn,Ne,{})}}function Ln(n){let e,t,i,r,l,s,o,a={};e=new _n({props:a}),n[14](e),e.$on("setNewMode",n[15]);const u=[Vn,Dn,Nn],d=[];function T(c,M){return c[8]===V.Time?0:c[8]===V.Word?1:2}i=T(n),r=d[i]=u[i](n);let S={};return s=new hn({props:S}),n[22](s),s.$on("start",n[23]),s.$on("reset",n[24]),s.$on("finishWordMode",n[25]),s.$on("finishArticleMode",n[26]),{c(){he(e.$$.fragment),t=A(),r.c(),l=A(),he(s.$$.fragment)},l(c){me(e.$$.fragment,c),t=O(c),r.l(c),l=O(c),me(s.$$.fragment,c)},m(c,M){pe(e,c,M),U(c,t,M),d[i].m(c,M),U(c,l,M),pe(s,c,M),o=!0},p(c,M){const W={};e.$set(W);let _=i;i=T(c),i===_?d[i].p(c,M):(wt(),Z(d[_],1,1,()=>{d[_]=null}),bt(),r=d[i],r?r.p(c,M):(r=d[i]=u[i](c),r.c()),R(r,1),r.m(l.parentNode,l));const C={};s.$set(C)},i(c){o||(R(e.$$.fragment,c),R(r),R(s.$$.fragment,c),o=!0)},o(c){Z(e.$$.fragment,c),Z(r),Z(s.$$.fragment,c),o=!1},d(c){c&&(p(t),p(l)),n[14](null),_e(e,c),d[i].d(c),n[22](null),_e(s,c)}}}function Wn(n){let e,t,i,r;return t=new Sn({}),t.$on("nextTest",n[13]),{c(){e=v("div"),he(t.$$.fragment)},l(l){e=g(l,"DIV",{});var s=y(e);me(t.$$.fragment,s),s.forEach(p)},m(l,s){U(l,e,s),pe(t,e,null),r=!0},p:Le,i(l){r||(R(t.$$.fragment,l),l&&(i||Ce(()=>{i=Ae(e,Te,{duration:125}),i.start()})),r=!0)},o(l){Z(t.$$.fragment,l),r=!1},d(l){l&&p(e),_e(t)}}}function Nn(n){let e,t,i={};return e=new Mn({props:i}),n[21](e),{c(){he(e.$$.fragment)},l(r){me(e.$$.fragment,r)},m(r,l){pe(e,r,l),t=!0},p(r,l){const s={};e.$set(s)},i(r){t||(R(e.$$.fragment,r),t=!0)},o(r){Z(e.$$.fragment,r),t=!1},d(r){n[21](null),_e(e,r)}}}function Dn(n){let e,t,i={};return e=new Tn({props:i}),n[19](e),e.$on("finish",An),e.$on("setNewOption",n[20]),{c(){he(e.$$.fragment)},l(r){me(e.$$.fragment,r)},m(r,l){pe(e,r,l),t=!0},p(r,l){const s={};e.$set(s)},i(r){t||(R(e.$$.fragment,r),t=!0)},o(r){Z(e.$$.fragment,r),t=!1},d(r){n[19](null),_e(e,r)}}}function Vn(n){let e,t,i={};return e=new wn({props:i}),n[16](e),e.$on("finish",n[17]),e.$on("setNewOption",n[18]),{c(){he(e.$$.fragment)},l(r){me(e.$$.fragment,r)},m(r,l){pe(e,r,l),t=!0},p(r,l){const s={};e.$set(s)},i(r){t||(R(e.$$.fragment,r),t=!0)},o(r){Z(e.$$.fragment,r),t=!1},d(r){n[16](null),_e(e,r)}}}function Pn(n){let e,t,i,r,l;const s=[Wn,Ln],o=[];function a(u,d){return u[6]?0:1}return t=a(n),i=o[t]=s[t](n),{c(){e=v("div"),i.c()},l(u){e=g(u,"DIV",{});var d=y(e);i.l(d),d.forEach(p)},m(u,d){U(u,e,d),o[t].m(e,null),l=!0},p(u,[d]){let T=t;t=a(u),t===T?o[t].p(u,d):(wt(),Z(o[T],1,1,()=>{o[T]=null}),bt(),i=o[t],i?i.p(u,d):(i=o[t]=s[t](u),i.c()),R(i,1),i.m(e,null))},i(u){l||(R(i),u&&(r||Ce(()=>{r=Ae(e,Te,{duration:75}),r.start()})),l=!0)},o(u){Z(i),l=!1},d(u){u&&p(e),o[t].d()}}}const An=()=>{};function On(n,e,t){let i,r,l,s,o;D(n,gt,P=>t(7,r=P)),D(n,ve,P=>t(27,l=P)),D(n,xe,P=>t(28,s=P)),D(n,$e,P=>t(8,o=P));let a,u,d,T,S,c,M=new kt;async function W(){t(6,i=!1),await ye(),S.reset()}async function _(){m(),t(6,i=!0),await ye()}function C(){M.reset(),M.start(),t(5,c=setInterval(()=>{let P=pt(et(s,l)),$={time:Math.round(M.getTime()/1e3),wpm:P};r.push($)},1e3))}function m(){M.stop(),clearInterval(c);let P=pt(et(s,l)),$={time:pt(M.getTime()/1e3),wpm:P};r.push($)}const N=()=>W();function I(P){de[P?"unshift":"push"](()=>{a=P,t(0,a)})}const E=()=>S.reset();function G(P){de[P?"unshift":"push"](()=>{u=P,t(1,u)})}const j=()=>{S.timeUp(),_()},q=()=>S.reset();function w(P){de[P?"unshift":"push"](()=>{d=P,t(2,d)})}const b=()=>S.reset();function x(P){de[P?"unshift":"push"](()=>{T=P,t(3,T)})}function z(P){de[P?"unshift":"push"](()=>{S=P,t(4,S)})}const J=()=>{C(),o===V.Time?u.start():o===V.Word?d.start():T.start()},fe=()=>{M.stop(),clearInterval(c),B(gt,r=[],r),o===V.Time?u.reset():o===V.Word?d.reset():T.reset()},oe=()=>{d.finish(),_()},Ee=()=>{T.finish(),_()};return t(6,i=!1),[a,u,d,T,S,c,i,r,o,M,W,_,C,N,I,E,G,j,q,w,b,x,z,J,fe,oe,Ee]}class qn extends De{constructor(e){super(),Ve(this,e,On,Pn,Ne,{})}}export{qn as component};
