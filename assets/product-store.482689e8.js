import{cd as d,cc as a}from"./index.66bc2642.js";import{g as o,p as e}from"./module_calls.108866f1.js";const r=d(),s=r==null?void 0:r.token,p=a("products",{state:()=>({products:[]}),actions:{async fetchProducts(){if(s){const t=await o("today_products",s);return this.products=t==null?void 0:t.data,this.products}},async fetchAllProducts(){if(s){const t=await o("products",s);return this.products=t==null?void 0:t.data,this.products}},async createProduct(t){var c;if(t.user_uuid=(c=r==null?void 0:r.user)==null?void 0:c.uuid,s)return await e(t,"products",s)},async updateProduct(t){var c;if(t.user_uuid=(c=r==null?void 0:r.user)==null?void 0:c.uuid,s)return await e(t,"update_product",s)},async deleteProduct(t){if(s)return await e(t,"delete_product",s)},async fetchProductsInDateRange(t){if(s)return await e(t,"get_older_products",s)}}});export{p as u};
