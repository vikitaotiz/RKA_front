import{Q as M,a as O,b as y,c as j,e as G,f as H,g as K}from"./excel.4db84bb3.js";import{r as i,aJ as d,a6 as Q,u as c,Q as m,a4 as w,bb as s,d as t,ad as C,bD as R,bE as f,a7 as x,a5 as E}from"./index.db1ee41f.js";import{Q as D}from"./QInput.f5c09571.js";import{a as P,Q as A}from"./QCard.3e101e1d.js";import{Q as W}from"./QSpace.99a561d1.js";import{a as X}from"./use-quasar.0b97bbf0.js";import{a as Y,u as Z}from"./index.bf090e03.js";import{u as ee}from"./role-store.022cc925.js";import"./QSeparator.f70f199c.js";import"./use-dark.a2bf037f.js";import"./QList.f65ab87f.js";import"./rtl.0995307b.js";import"./module_calls.108866f1.js";import"./helpers.a81d5275.js";const T=[{name:"name",required:!0,label:"Name",align:"left",field:v=>v.name,format:v=>`${v}`,sortable:!0},{name:"users",align:"center",label:"Users",field:"users",sortable:!0},{name:"created_at",align:"center",label:"Created On",field:"created_at",sortable:!0},{name:"actions",align:"center",label:"Actions",field:"created_at"}];const ae={class:"q-pa-md"},te={key:0},le={key:1},se={class:"text-h6"},oe={class:"text-center error_msg"},be={__name:"Roles",setup(v){const N=X(),h=Y(),_=ee(),n=i(!1),p=i(!1),b=i(""),g=i(""),o=i(""),k=i(""),u=i(""),{data:V,isLoading:$,isError:q}=Z("roles",()=>_.fetchRoles()),S=async a=>{if(confirm(`Continue with the operation. Delete ${a.name} ?`)){const e=await _.deleteRole({uuid:a.uuid});e.status==="success"?(h.refetchQueries("roles"),r(e.message,"green","top")):r("There was an error","red","top-right")}},B=()=>{g.value="Add New Role",n.value=!0,p.value=!1},U=a=>{p.value=!0,g.value=`Edit ${a.name}`,o.value=a.name,k.value=a.uuid,n.value=!0},z=async()=>{if(u.value="",o.value.trim()){const a=await _.createRole({name:o.value.trim()});a.status==="success"?(h.refetchQueries("roles"),o.value="",n.value=!1,r(a.message,"green","top")):(u.value=a.message,r(a.message,"red","top-right"))}else u.value="Name is required!",r("Name is required!","red","top-right")},I=async()=>{const a={name:o.value.trim(),uuid:k.value};if(a.name){const l=await _.updateRole(a);l.status==="success"?(h.refetchQueries("roles"),o.value="",n.value=!1,p.value=!1,g.value="",r(l.message,"green","top")):r("There was an error","red","top-right")}else u.value="Name is required!",r("Name is required!","red","top-right")},L=()=>{n.value=!1,o.value="",k.value="",u.value=""},r=(a,l,e)=>{N.notify({message:a,color:l,position:e})},F=a=>{const l=a.map(e=>({name:e.name,users:e.users.length,created_at:e.created_at}));H(l,T,K,N,"RolesData")};return(a,l)=>(d(),Q("div",ae,[c($)?(d(),Q("div",te,"Loading roles...")):c(q)?(d(),Q("div",le,"An error has occurred: "+m(c(q)),1)):(d(),w(M,{key:2,title:"Roles",rows:c(V),columns:c(T),separator:"cell","row-key":"name",filter:b.value,dense:""},{body:s(e=>[t(j,{props:e},{default:s(()=>[t(y,{key:"name",props:e},{default:s(()=>[C(m(e.row.name),1)]),_:2},1032,["props"]),t(y,{key:"users",props:e},{default:s(()=>[C(m(e.row.users.length),1)]),_:2},1032,["props"]),t(y,{key:"created_at",props:e},{default:s(()=>[C(m(e.row.created_at),1)]),_:2},1032,["props"]),t(y,{key:"actions",props:e},{default:s(()=>[t(R,{color:"blue",name:"edit",onClick:J=>U(e.row),style:{cursor:"pointer"},size:"20px",class:"q-mr-md"},null,8,["onClick"]),t(R,{color:"red",name:"delete",onClick:J=>S(e.row),style:{cursor:"pointer"},size:"20px"},null,8,["onClick"])]),_:2},1032,["props"])]),_:2},1032,["props"])]),"top-right":s(()=>[t(D,{borderless:"",dense:"",outlined:"",rounded:"",debounce:"300",modelValue:b.value,"onUpdate:modelValue":l[0]||(l[0]=e=>b.value=e),placeholder:"Search",class:"q-mr-md"},{append:s(()=>[t(R,{name:"search"})]),_:1},8,["modelValue"]),t(f,{onClick:B,round:"",dense:"",color:"primary",size:"small",icon:"add"}),t(f,{dense:"",flat:"",color:"primary","icon-right":"archive",label:"Export",class:"q-ml-sm","no-caps":"",onClick:l[1]||(l[1]=e=>F(c(V)))})]),_:1},8,["rows","columns","filter"])),t(O,{modelValue:n.value,"onUpdate:modelValue":l[3]||(l[3]=e=>n.value=e),persistent:""},{default:s(()=>[t(P,{style:{width:"500px"}},{default:s(()=>[t(A,null,{default:s(()=>[x("div",se,m(g.value),1)]),_:1}),t(A,{class:"q-pt-none"},{default:s(()=>[t(D,{outlined:"",dense:"",label:"Name",modelValue:o.value,"onUpdate:modelValue":l[2]||(l[2]=e=>o.value=e)},null,8,["modelValue"])]),_:1}),x("div",oe,[x("small",null,m(u.value),1)]),t(G,{align:"right"},{default:s(()=>[t(f,{flat:"",label:"Cancel",color:"red",onClick:L}),t(W),o.value&&!p.value?(d(),w(f,{key:0,flat:"",label:"Add Role",color:"primary",onClick:z})):E("",!0),o.value&&p.value?(d(),w(f,{key:1,flat:"",label:"Edit Role",color:"primary",onClick:I})):E("",!0)]),_:1})]),_:1})]),_:1},8,["modelValue"])]))}};export{be as default};
