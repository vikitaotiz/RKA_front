import{cd as n,cc as m}from"./index.a1880cb3.js";import{g as u,p as r}from"./module_calls.108866f1.js";const s=n(),t=s==null?void 0:s.token,d=m("measurements",{state:()=>({measurements:[]}),actions:{async fetchMeasurements(){if(t){const e=await u("measurements",t);return this.measurements=e==null?void 0:e.data,this.measurements}},async createMeasurement(e){var a;if(e.uuid=(a=s==null?void 0:s.user)==null?void 0:a.uuid,t)return await r(e,"measurements",t)},async updateMeasurement(e){if(t)return await r(e,"update_measurement",t)},async deleteMeasurement(e){if(t)return await r(e,"delete_measurement",t)}}});export{d as u};
