import{b,S as k,i as q}from"./index.B_VZWcBB.js";import{y as x,s as A,e as W,t as D,c as L,p as E,r as F,d as J,a as K,q as z,i as j,z as Q,u as R,n as U}from"./scheduler.DiGuMIk8.js";import{w as r}from"./index.CLLOBSlE.js";function et(t){return(t==null?void 0:t.length)!==void 0?t:Array.from(t)}function nt(t,e){t.d(1),e.delete(t.key)}function st(t,e,n,a,o,l,d,p,h,S,m,P){let f=t.length,g=l.length,u=f;const C={};for(;u--;)C[t[u].key]=u;const y=[],I=new Map,N=new Map,_=[];for(u=g;u--;){const s=P(o,l,u),i=n(s);let c=d.get(i);c?_.push(()=>c.p(s,e)):(c=S(i,s),c.c()),I.set(i,y[u]=c),i in C&&N.set(i,Math.abs(u-C[i]))}const M=new Set,O=new Set;function T(s){b(s,1),s.m(p,m),d.set(s.key,s),m=s.first,g--}for(;f&&g;){const s=y[g-1],i=t[f-1],c=s.key,w=i.key;s===i?(m=s.first,f--,g--):I.has(w)?!d.has(c)||M.has(c)?T(s):O.has(w)?f--:N.get(c)>N.get(w)?(O.add(c),T(s)):(M.add(w),f--):(h(i,d),f--)}for(;f--;){const s=t[f];I.has(s.key)||h(s,d)}for(;g;)T(y[g-1]);return x(_),y}function Y(t){let e,n;return{c(){e=W("span"),n=D(t[0]),this.h()},l(a){e=L(a,"SPAN",{class:!0,style:!0});var o=E(e);n=F(o,t[0]),o.forEach(J),this.h()},h(){K(e,"class","material-symbols-outlined"),z(e,"font-size",t[1])},m(a,o){j(a,e,o),Q(e,n)},p(a,[o]){o&1&&R(n,a[0]),o&2&&z(e,"font-size",a[1])},i:U,o:U,d(a){a&&J(e)}}}function B(t,e,n){let{name:a}=e,{size:o}=e;return t.$$set=l=>{"name"in l&&n(0,a=l.name),"size"in l&&n(1,o=l.size)},[a,o]}class at extends k{constructor(e){super(),q(this,e,B,Y,A,{name:0,size:1})}}let v={mode:"time",time:30,word:25};function ot(){let t=localStorage.getItem("config");return t?(t=JSON.parse(t),t):v}function rt(t,e){let n=localStorage.getItem("config");if(!n){localStorage.setItem("config",JSON.stringify(v));return}n=JSON.parse(n),n[t]=e,localStorage.setItem("config",JSON.stringify(n))}function H(t){return Math.round((t+Number.EPSILON)*100)/100}function it(t,e){const n=t/5/(e/60);return H(n)}function ct(t,e){return H(t/e)*100}function lt(t,e=!0){const n=new Date(Math.floor(t)*1e3),a=n.getUTCDate().toString().padStart(2,"0"),o=(n.getUTCMonth()+1).toString().padStart(2,"0"),l=n.getUTCFullYear(),d=n.getHours().toString().padStart(2,"0"),p=n.getUTCMinutes().toString().padStart(2,"0"),h=n.getUTCSeconds().toString().padStart(2,"0"),S=`${a}/${o}/${l}`,m=`${d}:${p}:${h}`;return e?S+" "+m:S}function ft(){let t=localStorage.getItem("history");return t?JSON.parse(t):[]}function ut(t){let e=localStorage.getItem("history");if(!e){localStorage.setItem("history",JSON.stringify([t]));return}const n=JSON.parse(e);n.unshift(t),localStorage.setItem("history",JSON.stringify(n))}const V=["ບໍ່","ກະຊວງ","ເດືອນ","ບຸກຄົນ","ເພີ່ມ","ຕ່ຳ","ນຳ","ນາຍ","ໃບ","ເຊື່ອ","ຫນ້າ","ພໍ","ສົ່ງ","ຍາວ","ເຄີຍ","ກິນ","ລົງ","ເມືອງ","ບາງ","ລາຄາ","ບັດ","ສິ່ງ","ລາວ","ແທ້","ເດີມ","ເລົ່າ","ອາຫານ","ຫລີ້ນ","ຄວາມ","ໃສ່","ຮຽນ","ຜະລິດ","ຄູ່","ດື່ມ","ລົດ","ສຳລັບ","ເສຍ","ຈຳເປັນ","ຊະນິດ","ຊ່ວຍ","ສັດ","ຫລື","ຈັບ","ຜິດ","ວິຊາ","ແຕ່","ຈຳນວນ","ດ້ວຍ","ມະນຸດ","ສຳເນົາ","ຈາກ","ແພງ","ສືກສາ","ຊາດ","ຄືນ","ຊ້າຍ","ບໍລິສັດ","ນະຄອນຫລວງ","ຕອນ","ພະຍາຍາມ","ນາງ","ຖື","ຄອບຄົວ","ຜູ້","ຖືກ","ຂໍ້ມູນ","ຢູ່","ເອົາ","ຄູ","ຂວາ","ຮູ້","ກຳນົດ","ນັ້ນ","ສາມາດ","ດັງ","ສ້າງ","ມັນ","ໄກ","ໂດຍ","ອັນ","ໃຈ","ປະເພດ","ແທນ","ຂ້ອຍ","ສິນຄ້າ","ນອກ","ສູງ","ເຈົ້າ","ເຈັບ","ວຽກ","ຂໍ","ພາບ","ຮັກ","ກັບ","ເງິນ","ຜ່ານ","ດັ່ງກ່າວ","ຂື້ນ","ສະແດງ","ຮອບ","ຕອບ","ລະອຽດ","ວິທີ","ພໍ່","ທັງຫມົດ","ຢ່າ","ໃຫ້","ປ່ຽນ","ຂໍ້","ອອກ","ເກັບກຳ","ບັນຫາ","ເກີນ","ກະກຽມ","ແລກ","ສັ້ນ","ຕ້ອງ","ສະບາຍ","ຮັບ","ເວລາ","ຄວບຄຸມ","ທີ່","ແມ່","ຮ້ອງ","ນ້ຳ","ປະເທດ","ແລ້ວ","ຈັດ","ເດັກ","ວັນທີ","ເປັນ","ຫ່າງ","ເກີດ","ປອມ","ເມື່ອ","ບ້ານ","ຫົວ","ຫ້ອງ","ຂະຫນາດ","ທຸກ","ສະເພາະ","ດົນ","ສັງຄົມ","ປີ","ຊື່","ແຮງງານ","ກຳລັງ","ຊີວິດ","ທ່ານ","ຖາມ"],X=[{content:"ເມືອງລາວປະຈໍາສັບປະດາ ແມ່ນລາຍການ ທີ່ນໍາເອົາຂ່າວ ແລະ ເຫດການຕ່າງໆ ຮວມທັງການສໍາພາດບຸກຄົນຊື່ດັງ ມີຜົນງານທີ່ໂດດເດັ່ນ ສ້າງຊື່ສຽງໃຫ້ກັບສັງຄົມລາວ ມາສົນທະນາກັນ ເພື່ອຜັນຂະຫຍາຍອອກໃຫ້ກວ້າງໄກ",reference:"https://www.rfa.org/lao/"},{content:"ຊາວບ້ານ 10 ກວ່າບ້ານ ໃນເມືອງລ້ອງແຈ້ງ ແຂວງໄຊສົມບູນ ໄດ້ຮັບຜົນກະທົບຈາກລົດຂົນແຮ່ ຂອງຫລາຍ ບໍລິສັດຈີນ ແລ່ນທຸກມື້ ເຮັດໃຫ້ເສັ້ນທາງ ສັນຈອນໄປມາລຳບາກ ແຕ່ບໍ່ມີການແກ້ໄຂ.",reference:"https://www.rfa.org/lao/"},{content:"ງາມທາດປວກເມືອງຄອບ ປະນົມນ້ອມພຣະທາດມັດຄຳເມືອງເງິນ ແສນເພີດເພີນພຣະທາດຊຽງ ລົມເມືອງຊຽງຮ່ອນ ອອນຊອນບຸນບັ້ງໄຟເມືອງປາກລາຍ ງາມເຫຼືອຫຼາຍ ສາວດອກຝ້າຍຈັນເມືອງແກ່ນທ້າວ ຫວານນ້ຳໝາກພ້າວເມືອງບໍ່ແຕນ ແດນພູເຂົາຊ້າງເມືອງຫົງສາ-ເມືອງທົ່ງ ຮວງເຂົ້າກົ່ງເມືອງພຽງ  ສຽງຂັບລຳ ລ່ອງຮຸ່ງເມືອງໄຊຍະບູລີ",reference:"ຄຳຂວັນ ແຂວງໄຊຍະບູລີ"},{content:"ຫຼວງພະບາງເມືອງງາມ ອາຮາມຮຸ່ງ ເມືອງນຸ່ງສິ້ນໄໝ ຂວັນໃຈນັກທ່ອງທ່ຽວ ເມືອງກ້ຽວຄຳ ຫວານ ຕຳນານເມືອງຂັບທຸ່ມ ງາມພູຕັ້ງກາງເມືອງ ເລື່ອງລືວັດທະນະທຳ ເອາະຫຼາມໃສ່ສະຄານ ງາມ ຊ່ວງເຮືອເດືອນເກົ້າ ວັດເກົ່າແກ່ມາກມີ ຕາດກວາງຊີຖ້ຳຕິ່ງ ເປັນມິ່ງເມືອງມໍລະດົກໂລກ",reference:"ຄຳຂວັນ ແຂວງຫຼວງພະບາງ"}];var Z=(t=>(t.Time="time",t.Word="word",t.Quote="quote",t))(Z||{});const dt=r(V),gt=r(0),mt=r(X),ht=r(0),St=r(0),yt=r(!1),wt=r(0),pt=r("time"),Ct=r(30),It=r(25),Nt=r(0),Tt=r(0),_t=r(0),Mt=r([]);export{Z as G,at as I,lt as a,Ct as b,pt as c,St as d,et as e,_t as f,ft as g,Nt as h,yt as i,ht as j,mt as k,ot as l,gt as m,dt as n,nt as o,wt as p,it as q,ct as r,rt as s,Tt as t,st as u,Mt as v,It as w,H as x,ut as y};
