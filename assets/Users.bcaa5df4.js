import{Q as ie,a as de,b as _,c as me,d as ce,e as fe,f as ve,g as pe}from"./excel.bbfd68f6.js";import{Q as R}from"./QBadge.65c3723f.js";import{cd as _e,cc as ye,r as n,aJ as o,a6 as w,u as Q,Q as m,a4 as c,bb as t,d as l,ad as y,F as be,aP as ge,a5 as b,bD as I,N as ke,a7 as V,bE as N}from"./index.611653d2.js";import{Q as x}from"./QInput.f6f230e5.js";import{Q as L}from"./QSpace.de15ea5a.js";import{Q as H}from"./QToggle.5e5969c5.js";import{Q as K}from"./QToolbar.4da83c1d.js";import{a as we,Q as he}from"./QCard.bca8ddcd.js";import{Q as W}from"./QSeparator.eaaf609a.js";import{a as Ue}from"./use-quasar.3f2aa82f.js";import{a as Qe,u as X}from"./index.922c9500.js";import{g as Ve,p as S}from"./module_calls.108866f1.js";import{u as Ce}from"./role-store.b1a86a15.js";import"./QList.60f6f080.js";import"./use-dark.06f6f971.js";import"./rtl.2f3c55bf.js";import"./helpers.a81d5275.js";const Z=[{name:"name",required:!0,label:"Name",align:"left",field:r=>r.name,format:r=>`${r}`,sortable:!0},{name:"email",align:"center",label:"Email",field:"email",sortable:!0},{name:"phone",align:"center",label:"Phone",field:"phone",sortable:!0},{name:"email_notify",align:"center",label:"Email Notify",field:"email_notify",sortable:!0},{name:"roles",align:"center",label:"Roles",field:"roles",sortable:!0},{name:"active",align:"center",label:"User Status",field:"active",sortable:!0},{name:"created_at",align:"center",label:"Created On",field:"created_at",sortable:!0},{name:"actions",align:"center",label:"Actions",field:"created_at"}],C=_e(),i=C==null?void 0:C.token,Ae=ye("users",{state:()=>({users:[],access_granted:!1}),actions:{async fetchUsers(){if(i){const r=await Ve("users",i);return this.users=r==null?void 0:r.data,this.users}},async createUser(r){var d;if(r.user_uuid=(d=C==null?void 0:C.user)==null?void 0:d.uuid,i)return await S(r,"users",i)},async updateUser(r){if(i)return await S(r,"update_user",i)},async deleteUser(r){if(i)return await S(r,"delete_user",i)},async confirmAdmin(r){if(i)return await S(r,"confirm_admin",i)},async verifyAccessToken(r){if(i){const d=await S(r,"verify_access_token",i);return this.access_granted=d.access_granted,d}}}});const Ee={class:"q-pa-md"},qe={key:0},Ne={key:1},xe=V("br",null,null,-1),Se={key:0},De=V("small",null,"No Role Assigned",-1),$e=[De],Te={class:"text-h6"},Be={class:"text-center error_msg"},ze={key:0},aa={__name:"Users",setup(r){const d=Ue(),D=Qe(),$=Ae(),ee=Ce(),A=n(!1),E=n(!1),g=n(!1),P=n(""),T=n(""),u=n(""),f=n(""),h=n(""),U=n(!0),q=n(!1),v=n(""),k=n([]),O=n(""),B=n(""),J=n([]),{data:M,isLoading:ae,isError:Y}=X("users",()=>$.fetchUsers());X("roles",()=>ee.fetchRoles(),{onSuccess:s=>{J.value=s.map(a=>({name:a.name,uuid:a.uuid}))}});const le=async s=>{if(confirm(`Continue with the operation. Delete ${s.name} ?`)){const e=await $.deleteUser({uuid:s.uuid});e.status==="success"?(D.refetchQueries("users"),p(e.message,"green","top")):p("There was an error","red","top-right")}},se=()=>{T.value="Add New User",A.value=!0,E.value=!1},te=s=>{U.value=!!s.active,q.value=!!s.email_notify,E.value=!0,O.value=s.uuid,u.value=s.name,h.value=s.email,f.value=s.phone,v.value=s.password,k.value=s.roles.map(a=>({name:a.name,uuid:a.uuid})),T.value=`Edit ${s.name}`,A.value=!0},re=async()=>{g.value=!0;const s={name:u.value.trim(),active:U.value?1:0,email:h.value.trim(),phone:f.value.trim(),role_uuids:k.value.map(a=>a.uuid),password:v.value.trim()};if(s.name&&s.email&&s.password){const a=await $.createUser(s);console.log(a),a.status==="success"?(D.refetchQueries("users"),g.value=!1,F(),p(a.message,"green","top")):(B.value=a.message,g.value=!1,p(a.message,"red","top-right"))}else g.value=!1,B.value="All fields are required!",p("All fields are required!","red","top-right")},oe=async()=>{const s={user_uuid:O.value,name:u.value.trim(),active:U.value?1:0,email_notify:q.value?1:0,email:h.value.trim(),phone:f.value?f.value.trim():f.value,role_uuids:k.value.map(a=>a.uuid),password:v.value?v.value.trim():v.value};if(s.name&&s.email&&k.value.length>0){const a=await $.updateUser(s);a.status==="success"?(D.refetchQueries("users"),F(),p(a.message,"green","top")):p("There was an error","red","top-right")}else B.value="All fields are required!",p("All fields are required!","red","top-right")},ne=()=>F(),p=(s,a,e)=>{d.notify({message:s,color:a,position:e})},F=()=>{h.value="",u.value="",f.value="",k.value=[],v.value="",A.value=!1,E.value=!1,T.value="",g.value=!1},ue=s=>{const a=s.map(e=>({name:e.name,users:e.users.length,created_at:e.created_at}));ve(a,Z,pe,d,"UsersData")};return(s,a)=>(o(),w("div",Ee,[Q(ae)?(o(),w("div",qe,"Loading users...")):Q(Y)?(o(),w("div",Ne,"An error has occurred: "+m(Q(Y)),1)):(o(),c(ie,{key:2,title:"Users",rows:Q(M),columns:Q(Z),separator:"cell","row-key":"name",filter:P.value,dense:""},{body:t(e=>[l(me,{props:e,class:ke(`${e.row.name=="Administrator"?"bg-admin text-white":""}`)},{default:t(()=>[l(_,{key:"name",props:e},{default:t(()=>[y(m(e.row.name),1)]),_:2},1032,["props"]),l(_,{key:"email",props:e},{default:t(()=>[y(m(e.row.email),1)]),_:2},1032,["props"]),l(_,{key:"phone",props:e},{default:t(()=>[y(m(e.row.phone?e.row.phone:"Null"),1)]),_:2},1032,["props"]),l(_,{key:"email_notify",props:e},{default:t(()=>[l(R,{color:`${e.row.email_notify?"blue":"red"}`},{default:t(()=>[y(m(e.row.email_notify?"Enabled":"Disabled"),1)]),_:2},1032,["color"])]),_:2},1032,["props"]),l(_,{key:"roles",props:e},{default:t(()=>{var z,j;return[(o(!0),w(be,null,ge(e.row.roles,G=>(o(),w("div",{key:G.uuid},[l(R,{color:"blue"},{default:t(()=>[y(m(G.name),1)]),_:2},1024),xe]))),128)),((j=(z=e.row)==null?void 0:z.roles)==null?void 0:j.length)===0?(o(),w("div",Se,$e)):b("",!0)]}),_:2},1032,["props"]),l(_,{key:"active",props:e},{default:t(()=>[e.row.active?(o(),c(R,{key:0},{default:t(()=>[y(" Enabled ")]),_:1})):(o(),c(R,{key:1,color:"red"},{default:t(()=>[y(" Disbled ")]),_:1}))]),_:2},1032,["props"]),l(_,{key:"created_at",props:e},{default:t(()=>[y(m(e.row.created_at),1)]),_:2},1032,["props"]),l(_,{key:"actions",props:e},{default:t(()=>[l(I,{color:"blue",name:"edit",onClick:z=>te(e.row),style:{cursor:"pointer"},size:"20px",class:"q-mr-md"},null,8,["onClick"]),e.row.name!=="Administrator"?(o(),c(I,{key:0,color:"red",name:"delete",onClick:z=>le(e.row),style:{cursor:"pointer"},size:"20px"},null,8,["onClick"])):b("",!0)]),_:2},1032,["props"])]),_:2},1032,["props","class"])]),"top-right":t(()=>[l(x,{borderless:"",dense:"",outlined:"",rounded:"",debounce:"300",modelValue:P.value,"onUpdate:modelValue":a[0]||(a[0]=e=>P.value=e),placeholder:"Search Name",class:"q-mr-md",clearable:""},{append:t(()=>[l(I,{name:"search"})]),_:1},8,["modelValue"]),V("span",null,[l(N,{onClick:se,dense:"",color:"primary",icon:"add",label:"Create New User",unelevated:"",size:"sm"}),l(N,{dense:"",outline:"",color:"primary","icon-right":"archive",label:"Export Users",class:"q-ml-sm","no-caps":"",onClick:a[1]||(a[1]=e=>ue(Q(M))),size:"sm"})])]),_:1},8,["rows","columns","filter"])),l(de,{modelValue:A.value,"onUpdate:modelValue":a[9]||(a[9]=e=>A.value=e),persistent:""},{default:t(()=>[l(we,{style:{width:"500px"}},{default:t(()=>[l(K,null,{default:t(()=>[V("div",Te,m(T.value),1),l(L),l(H,{modelValue:U.value,"onUpdate:modelValue":a[2]||(a[2]=e=>U.value=e),"checked-icon":"check",color:"green","unchecked-icon":"clear",label:`${U.value?"User active.":"User disabled."}`},null,8,["modelValue","label"])]),_:1}),l(he,{class:"q-pt-none"},{default:t(()=>[u.value!=="Administrator"?(o(),c(x,{key:0,class:"q-mb-sm",outlined:"",dense:"",label:"Name",modelValue:u.value,"onUpdate:modelValue":a[3]||(a[3]=e=>u.value=e)},null,8,["modelValue"])):b("",!0),l(x,{class:"q-mb-sm",outlined:"",dense:"",label:"Phone (Optional)",modelValue:f.value,"onUpdate:modelValue":a[4]||(a[4]=e=>f.value=e)},null,8,["modelValue"]),l(x,{class:"q-mb-sm",outlined:"",dense:"",label:"Email",modelValue:h.value,"onUpdate:modelValue":a[5]||(a[5]=e=>h.value=e),type:"email"},null,8,["modelValue"]),u.value!=="Administrator"?(o(),c(ce,{key:1,dense:"",multiple:"","use-chips":"",hint:"You can assign a user multiple roles.",outlined:"",modelValue:k.value,"onUpdate:modelValue":a[6]||(a[6]=e=>k.value=e),options:J.value,"option-value":"uuid","option-label":"name",label:"Select Role",class:"q-mb-sm"},null,8,["modelValue","options"])):b("",!0),u.value!=="Administrator"?(o(),c(x,{key:2,class:"q-mb-sm",outlined:"",dense:"",label:"Password",modelValue:v.value,"onUpdate:modelValue":a[7]||(a[7]=e=>v.value=e),type:"password"},null,8,["modelValue"])):b("",!0)]),_:1}),V("div",Be,[V("small",null,m(B.value),1)]),u.value==="Administrator"?(o(),w("small",ze,[l(W,{color:"primary"}),l(K,null,{default:t(()=>[l(H,{modelValue:q.value,"onUpdate:modelValue":a[8]||(a[8]=e=>q.value=e),"checked-icon":"check",color:"green","unchecked-icon":"clear",label:`${q.value?"Email Notification Enabled.":"Email Notification Disabled."}`},null,8,["modelValue","label"]),l(L)]),_:1}),l(W,{color:"primary"})])):b("",!0),l(fe,{align:"right"},{default:t(()=>[l(N,{flat:"",label:"Cancel",color:"red",onClick:ne}),l(L),u.value&&!E.value?(o(),c(N,{key:0,flat:"",label:"Add User",color:"primary",onClick:re,loading:g.value},null,8,["loading"])):b("",!0),u.value&&E.value?(o(),c(N,{key:1,flat:"",label:"Edit User",color:"primary",onClick:oe,loading:g.value},null,8,["loading"])):b("",!0)]),_:1})]),_:1})]),_:1},8,["modelValue"])]))}};export{aa as default};
