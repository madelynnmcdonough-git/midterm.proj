import {products,brands,templates} from './catalog.mjs';
import {mensProducts,mensBrands,mensTemplates} from './mens-catalog.mjs';
import {sanitizeLook} from './model.mjs';
export function departmentCatalog(department){return department==='men'?{products:mensProducts,brands:mensBrands,templates:mensTemplates,storagePrefix:'outfit-edit-men'}:{products,brands,templates,storagePrefix:'outfit-edit'}}
export function departmentLook(input,department){const look=sanitizeLook(input);if(!look)return null;const ids=new Set(departmentCatalog(department).products.map(p=>p.id));return {...look,items:look.items.filter(i=>ids.has(i.id))}}
