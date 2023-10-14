import{Q as ie,a as de,b as _,c as me,d as ce,e as fe,f as ve,g as pe}from"./excel.f4ee1974.js";import{Q as R}from"./QBadge.778f8908.js";import{cd as _e,cc as ye,r as n,aI as o,a5 as w,u as V,P as m,a3 as c,bb as t,d as l,ac as y,F as be,aO as ge,a4 as b,bD as F,M as ke,a6 as Q,bE as x}from"./index.fae37851.js";import{Q as N}from"./QInput.cbe838d7.js";import{Q as L}from"./QSpace.9bb116ce.js";import{Q as J}from"./QToggle.5f9346e8.js";import{Q as K}from"./QToolbar.6c749aef.js";import{a as we,Q as he}from"./QCard.7f9f5af3.js";import{Q as W}from"./QSeparator.751afa3e.js";import{a as Ue}from"./use-quasar.d6bd9522.js";import{a as Ve,u as X}from"./index.bcdac246.js";import{g as Qe,p as S}from"./module_calls.108866f1.js";import{u as Ce}from"./role-store.870abbdb.js";import"./QList.d039015e.js";import"./use-dark.69a0fc24.js";import"./rtl.17ee702b.js";import"./helpers.a81d5275.js";const Z=[{name:"name",required:!0,label:"Name",align:"left",field:r=>r.name,format:r=>`${r}`,sortable:!0},{name:"email",align:"center",label:"Email",field:"email",sortable:!0},{name:"phone",align:"center",label:"Phone",field:"phone",sortable:!0},{name:"email_notify",align:"center",label:"Email Notify",field:"email_notify",sortable:!0},{name:"roles",align:"center",label:"Roles",field:"roles",sortable:!0},{name:"active",align:"center",label:"User Status",field:"active",sortable:!0},{name:"created_at",align:"center",label:"Created On",field:"created_at",sortable:!0},{name:"actions",align:"center",label:"Actions",field:"created_at"}],C=_e(),i=C==null?void 0:C.token,Ae=ye("users",{state:()=>({users:[],access_granted:!1}),actions:{async fetchUsers(){if(i){const r=await Qe("users",i);return this.users=r==null?void 0:r.data,this.users}},async createUser(r){var d;if(r.user_uuid=(d=C==null?void 0:C.user)==null?void 0:d.uuid,i)return await S(r,"users",i)},async updateUser(r){if(i)return await S(r,"update_user",i)},async deleteUser(r){if(i)return await S(r,"delete_user",i)},async confirmAdmin(r){if(i)return await S(r,"confirm_admin",i)},async verifyAccessToken(r){if(i){const d=await S(r,"verify_access_token",i);return this.access_granted=d.access_granted,d}}}});const Ee={class:"q-pa-md"},qe={key:0},xe={key:1},Ne=Q("br",null,null,-1),Se={key:0},De=Q("small",null,"No Role Assigned",-1),$e=[De],Te={class:"text-h6"},Be={class:"text-center error_msg"},ze={key:0},aa={__name:"Users",setup(r){const d=Ue(),D=Ve(),$=Ae(),ee=Ce(),A=n(!1),E=n(!1),g=n(!1),I=n(""),T=n(""),u=n(""),f=n(""),h=n(""),U=n(!0),q=n(!1),v=n(""),k=n([]),O=n(""),B=n(""),M=n([]),{data:Y,isLoading:ae,isError:j}=X("users",()=>$.fetchUsers());X("roles",()=>ee.fetchRoles(),{onSuccess:s=>{M.value=s.map(a=>({name:a.name,uuid:a.uuid}))}});const le=async s=>{if(confirm(`Continue with the operation. Delete ${s.name} ?`)){const e=await $.deleteUser({uuid:s.uuid});e.status==="success"?(D.refetchQueries("users"),p(e.message,"green","top")):p("There was an error","red","top-right")}},se=()=>{T.value="Add New User",A.value=!0,E.value=!1},te=s=>{U.value=!!s.active,q.value=!!s.email_notify,E.value=!0,O.value=s.uuid,u.value=s.name,h.value=s.email,f.value=s.phone,v.value=s.password,k.value=s.roles.map(a=>({name:a.name,uuid:a.uuid})),T.value=`Edit ${s.name}`,A.value=!0},re=async()=>{g.value=!0;const s={name:u.value.trim(),active:U.value?1:0,email:h.value.trim(),phone:f.value.trim(),role_uuids:k.value.map(a=>a.uuid),password:v.value.trim()};if(s.name&&s.email&&s.password){const a=await $.createUser(s);console.log(a),a.status==="success"?(D.refetchQueries("users"),g.value=!1,P(),p(a.message,"green","top")):(B.value=a.message,g.value=!1,p(a.message,"red","top-right"))}else g.value=!1,B.value="All fields are required!",p("All fields are required!","red","top-right")},oe=async()=>{const s={user_uuid:O.value,name:u.value.trim(),active:U.value?1:0,email_notify:q.value?1:0,email:h.value.trim(),phone:f.value?f.value.trim():f.value,role_uuids:k.value.map(a=>a.uuid),password:v.value?v.value.trim():v.value};if(s.name&&s.email&&k.value.length>0){const a=await $.updateUser(s);a.status==="success"?(D.refetchQueries("users"),P(),p(a.message,"green","top")):p("There was an error","red","top-right")}else B.value="All fields are required!",p("All fields are required!","red","top-right")},ne=()=>P(),p=(s,a,e)=>{d.notify({message:s,color:a,position:e})},P=()=>{h.value="",u.value="",f.value="",k.value=[],v.value="",A.value=!1,E.value=!1,T.value="",g.value=!1},ue=s=>{const a=s.map(e=>({name:e.name,users:e.users.length,created_at:e.created_at}));ve(a,Z,pe,d,"UsersData")};return(s,a)=>(o(),w("div",Ee,[V(ae)?(o(),w("div",qe,"Loading users...")):V(j)?(o(),w("div",xe,"An error has occurred: "+m(V(j)),1)):(o(),c(ie,{key:2,title:"Users",rows:V(Y),columns:V(Z),separator:"cell","row-key":"name",filter:I.value,dense:""},{body:t(e=>[l(me,{props:e,class:ke(`${e.row.name=="Administrator"?"bg-admin text-white":""}`)},{default:t(()=>[l(_,{key:"name",props:e},{default:t(()=>[y(m(e.row.name),1)]),_:2},1032,["props"]),l(_,{key:"email",props:e},{default:t(()=>[y(m(e.row.email),1)]),_:2},1032,["props"]),l(_,{key:"phone",props:e},{default:t(()=>[y(m(e.row.phone?e.row.phone:"Null"),1)]),_:2},1032,["props"]),l(_,{key:"email_notify",props:e},{default:t(()=>[l(R,{color:`${e.row.email_notify?"blue":"red"}`},{default:t(()=>[y(m(e.row.email_notify?"Enabled":"Disabled"),1)]),_:2},1032,["color"])]),_:2},1032,["props"]),l(_,{key:"roles",props:e},{default:t(()=>{var z,G;return[(o(!0),w(be,null,ge(e.row.roles,H=>(o(),w("div",{key:H.uuid},[l(R,{color:"blue"},{default:t(()=>[y(m(H.name),1)]),_:2},1024),Ne]))),128)),((G=(z=e.row)==null?void 0:z.roles)==null?void 0:G.length)===0?(o(),w("div",Se,$e)):b("",!0)]}),_:2},1032,["props"]),l(_,{key:"active",props:e},{default:t(()=>[e.row.active?(o(),c(R,{key:0},{default:t(()=>[y(" Enabled ")]),_:1})):(o(),c(R,{key:1,color:"red"},{default:t(()=>[y(" Disbled ")]),_:1}))]),_:2},1032,["props"]),l(_,{key:"created_at",props:e},{default:t(()=>[y(m(e.row.created_at),1)]),_:2},1032,["props"]),l(_,{key:"actions",props:e},{default:t(()=>[l(F,{color:"blue",name:"edit",onClick:z=>te(e.row),style:{cursor:"pointer"},size:"20px",class:"q-mr-md"},null,8,["onClick"]),e.row.name!=="Administrator"?(o(),c(F,{key:0,color:"red",name:"delete",onClick:z=>le(e.row),style:{cursor:"pointer"},size:"20px"},null,8,["onClick"])):b("",!0)]),_:2},1032,["props"])]),_:2},1032,["props","class"])]),"top-right":t(()=>[l(N,{borderless:"",dense:"",outlined:"",rounded:"",debounce:"300",modelValue:I.value,"onUpdate:modelValue":a[0]||(a[0]=e=>I.value=e),placeholder:"Search Name",class:"q-mr-md",clearable:""},{append:t(()=>[l(F,{name:"search"})]),_:1},8,["modelValue"]),Q("span",null,[l(x,{onClick:se,dense:"",color:"primary",icon:"add",label:"Create New User",unelevated:"",size:"sm"}),l(x,{dense:"",outline:"",color:"primary","icon-right":"archive",label:"Export Users",class:"q-ml-sm","no-caps":"",onClick:a[1]||(a[1]=e=>ue(V(Y))),size:"sm"})])]),_:1},8,["rows","columns","filter"])),l(de,{modelValue:A.value,"onUpdate:modelValue":a[9]||(a[9]=e=>A.value=e),persistent:""},{default:t(()=>[l(we,{style:{width:"500px"}},{default:t(()=>[l(K,null,{default:t(()=>[Q("div",Te,m(T.value),1),l(L),l(J,{modelValue:U.value,"onUpdate:modelValue":a[2]||(a[2]=e=>U.value=e),"checked-icon":"check",color:"green","unchecked-icon":"clear",label:`${U.value?"User active.":"User disabled."}`},null,8,["modelValue","label"])]),_:1}),l(he,{class:"q-pt-none"},{default:t(()=>[u.value!=="Administrator"?(o(),c(N,{key:0,class:"q-mb-sm",outlined:"",dense:"",label:"Name",modelValue:u.value,"onUpdate:modelValue":a[3]||(a[3]=e=>u.value=e)},null,8,["modelValue"])):b("",!0),l(N,{class:"q-mb-sm",outlined:"",dense:"",label:"Phone (Optional)",modelValue:f.value,"onUpdate:modelValue":a[4]||(a[4]=e=>f.value=e)},null,8,["modelValue"]),l(N,{class:"q-mb-sm",outlined:"",dense:"",label:"Email",modelValue:h.value,"onUpdate:modelValue":a[5]||(a[5]=e=>h.value=e),type:"email"},null,8,["modelValue"]),u.value!=="Administrator"?(o(),c(ce,{key:1,dense:"",multiple:"","use-chips":"",hint:"You can assign a user multiple roles.",outlined:"",modelValue:k.value,"onUpdate:modelValue":a[6]||(a[6]=e=>k.value=e),options:M.value,"option-value":"uuid","option-label":"name",label:"Select Role",class:"q-mb-sm"},null,8,["modelValue","options"])):b("",!0),u.value!=="Administrator"?(o(),c(N,{key:2,class:"q-mb-sm",outlined:"",dense:"",label:"Password",modelValue:v.value,"onUpdate:modelValue":a[7]||(a[7]=e=>v.value=e),type:"password"},null,8,["modelValue"])):b("",!0)]),_:1}),Q("div",Be,[Q("small",null,m(B.value),1)]),u.value==="Administrator"?(o(),w("small",ze,[l(W,{color:"primary"}),l(K,null,{default:t(()=>[l(J,{modelValue:q.value,"onUpdate:modelValue":a[8]||(a[8]=e=>q.value=e),"checked-icon":"check",color:"green","unchecked-icon":"clear",label:`${q.value?"Email Notification Enabled.":"Email Notification Disabled."}`},null,8,["modelValue","label"]),l(L)]),_:1}),l(W,{color:"primary"})])):b("",!0),l(fe,{align:"right"},{default:t(()=>[l(x,{flat:"",label:"Cancel",color:"red",onClick:ne}),l(L),u.value&&!E.value?(o(),c(x,{key:0,flat:"",label:"Add User",color:"primary",onClick:re,loading:g.value},null,8,["loading"])):b("",!0),u.value&&E.value?(o(),c(x,{key:1,flat:"",label:"Edit User",color:"primary",onClick:oe,loading:g.value},null,8,["loading"])):b("",!0)]),_:1})]),_:1})]),_:1},8,["modelValue"])]))}};export{aa as default};
