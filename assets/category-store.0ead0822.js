import{cd as s,cc as c}from"./index.177bb256.js";import{g as i,p as a}from"./module_calls.108866f1.js";const r=s(),e=r==null?void 0:r.token,g=c("product_categories",{state:()=>({categories:[]}),actions:{async fetchCategories(){if(e){const t=await i("product_categories",e);return this.categories=t==null?void 0:t.data,this.categories}},async createCategory(t){var o;if(t.uuid=(o=r==null?void 0:r.user)==null?void 0:o.uuid,e)return await a(t,"product_categories",e)},async updateCategory(t){if(e)return await a(t,"update_product_category",e)},async deleteCategory(t){if(e)return await a(t,"delete_product_category",e)}}});export{g as u};
