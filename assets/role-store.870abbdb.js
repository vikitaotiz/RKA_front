import{cd as a,cc as l}from"./index.fae37851.js";import{g as c,p as r}from"./module_calls.108866f1.js";const s=a(),t=s==null?void 0:s.token,d=l("roles",{state:()=>({roles:[]}),actions:{async fetchRoles(){if(t){const e=await c("roles",t);return this.roles=e==null?void 0:e.data,this.roles}},async createRole(e){var o;if(e.uuid=(o=s==null?void 0:s.user)==null?void 0:o.uuid,t)return await r(e,"roles",t)},async updateRole(e){if(t)return await r(e,"update_role",t)},async deleteRole(e){if(t)return await r(e,"delete_role",t)}}});export{d as u};
