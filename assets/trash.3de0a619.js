import{d as T,r as o,o as x,a as S,b as f,s as v,E as u,e as t,f as a,ac as z,w as s,M as B,F as b,D as N,ae as M,ag as H,a7 as P,I as w,aw as A,P as L,y as _,U as i,H as I,a8 as U,B as F,a9 as V,ad as $}from"./vendor.64da71ad.js";import{i as h,b as j}from"./index.cffb7b70.js";const q={class:"list-page"},R={class:"header"},G={class:"title n-ellipsis"},K=_("\u56DE\u6536\u7AD9"),O={key:0,class:"loading"},W=_("\u52A0\u8F7D\u4E2D "),X={key:0,class:"outer-wrapper static show"},Y={class:"toolbar-wrapper"},Z=_(" \u8FD8\u539F\u6240\u9009 "),J=_(" \u5220\u9664\u6240\u9009 "),ae=T({setup(Q){const d=o(),n=o([]),C=o([{title:"\u5220\u9664\u65F6\u95F4",key:"modified_time",sorter:"default",render:e=>i(I,{time:new Date(String(e.created_time)||""),format:"MM-dd HH:MM"}),className:"modified_time",width:200},{title:"\u5927\u5C0F",key:"size",sorter:"default",render:e=>Number(e.size)>0?j(Number(e.size)):"",className:"size",width:160}]),k=o([{type:"selection"},{title:"\u540D\u79F0",key:"name",sorter:"default",render:e=>i("div",{class:"file-info"},[i("img",{src:e.thumbnail_link||e.icon_link}),i(U,{class:"title"},{default:()=>String(e.name)}),i("span",{class:"action"},"1")])},{title:"\u64CD\u4F5C",key:"action",width:90,align:"right",render:e=>i($,{},{default:()=>[i(F,{type:"primary",onClick:()=>{y(String(e.id))}},{default:()=>"\u8FD8\u539F"}),i(V,{placement:"right",onPositiveClick:()=>{g(String(e.id))}},{trigger:()=>i(F,{type:"primary"},{default:()=>"\u5220\u9664"}),default:()=>"\u786E\u5B9A\u5220\u9664\u6587\u4EF6\u5417\uFF1F"})]})}]),c=o(!1),p=o(),m=()=>{c.value=!0,h.get("https://api-drive.mypikpak.com/drive/v1/files",{params:{parent_id:"*",thumbnail_size:"SIZE_LARGE",with_audit:!0,page_token:p.value||void 0,filters:{phase:{eq:"PHASE_TYPE_COMPLETE"},trashed:{eq:!0}}}}).then(e=>{const{data:l}=e;p.value||(d.value=[]),d.value=d.value.concat(l.files),p.value=l.next_page_token}).finally(()=>{c.value=!1})},g=e=>{h.post("https://api-drive.mypikpak.com/drive/v1/files:batchDelete",{ids:typeof e=="string"?[e]:e}).then(()=>{window.$message.success("\u5220\u9664\u6210\u529F"),m()})},y=e=>{h.post("https://api-drive.mypikpak.com/drive/v1/files:batchUntrash",{ids:typeof e=="string"?[e]:e}).then(()=>{m()})},D=e=>{e.target.offsetHeight-e.target.scrollTop<30&&p.value&&!c.value&&m()};return x(()=>{document.body.clientWidth>968&&k.value.splice(2,0,...C.value),m()}),(e,l)=>{const E=S("router-link");return f(),v("div",q,[u("div",R,[u("div",G,[t(a(z),{separator:">"},{default:s(()=>[t(a(M),null,{default:s(()=>[t(E,{to:""},{default:s(()=>[K]),_:1})]),_:1})]),_:1})])]),t(a(B),{style:{"max-height":"calc(100vh - 190px)"},onScroll:D},{default:s(()=>[t(a(H),{"checked-row-keys":n.value,"onUpdate:checked-row-keys":l[0]||(l[0]=r=>n.value=r),"row-key":r=>r.id,data:d.value,size:"small",columns:k.value,bordered:!1},null,8,["checked-row-keys","row-key","data","columns"]),c.value?(f(),v("div",O,[t(a(P),{size:"small"}),W])):N("",!0)]),_:1}),n.value.length?(f(),v("div",X,[u("div",Y,[u("div",{class:"toolbar-item",onClick:l[1]||(l[1]=r=>y(n.value))},[t(a(b),null,{trigger:s(()=>[t(a(w),null,{default:s(()=>[t(a(A))]),_:1})]),default:s(()=>[Z]),_:1})]),u("div",{class:"toolbar-item",onClick:l[2]||(l[2]=r=>g(n.value))},[t(a(b),null,{trigger:s(()=>[t(a(w),null,{default:s(()=>[t(a(L))]),_:1})]),default:s(()=>[J]),_:1})])])])):N("",!0)])}}});export{ae as default};
