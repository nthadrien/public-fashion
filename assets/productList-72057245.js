import{e as d,c as h,a as l,t as _,g as $,i as u,L as b,h as p}from"./index-581ea178.js";import{P as C}from"./pagination-dbe2bebf.js";const f="_tables_1mrep_1",g="_table1_1mrep_53",c={tables:f,table1:g},m=_("<section><table><thead><tr><th>#</th><th>head 1</th></tr></thead><tbody><tr><td>1</td><td>yeash</td></tr><tr><td>1</td><td>yeash</td></tr></tbody></table><table><thead><tr><th>head2</th><th>head3</th><th>head4</th><th>head5</th><th>head6</th><th>head7</th></tr></thead><tbody><tr><td>Cell 2</td><td>Cell 3</td><td>Cell 4</td><td>Cell 5</td><td>Cell 6</td><td>Cell 7</td></tr><tr><td>Cell 2</td><td>Cell 3</td><td>Cell 4</td><td>Cell 5</td><td>Cell 6</td><td>Cell 7"),y=e=>(()=>{const n=m(),o=n.firstChild,a=o.nextSibling;return h(t=>{const s=c.tables,r=c.table1,i=c.table2;return s!==t._v$&&l(n,t._v$=s),r!==t._v$2&&l(o,t._v$2=r),i!==t._v$3&&l(a,t._v$3=i),t},{_v$:void 0,_v$2:void 0,_v$3:void 0}),n})(),L=e=>(console.log(e.list),[d(y,{}),d(C,{})]),S=L,j="_inpContainer_11lyp_1",x={inpContainer:j},P=_('<div><input type=search name=find id=""><input type=button value=s>'),T=()=>(()=>{const e=P();return h(()=>l(e,x.inpContainer)),e})(),k="_page_vi7jg_3",A="_inpts_vi7jg_21",v={page:k,inpts:A},D=_("<div><h2>List des produits</h2><div><button class=btn>+ Ajouter");function R(){const{products:e}=$();return console.log(e),(()=>{const n=D(),o=n.firstChild,a=o.nextSibling,t=a.firstChild;return u(a,d(T,{}),t),u(n,d(p,{get fallback(){return d(b,{})},get children(){return d(S,{get list(){return e()}})}}),null),h(s=>{const r=v.page,i=v.inpts;return r!==s._v$&&l(n,s._v$=r),i!==s._v$2&&l(a,s._v$2=i),s},{_v$:void 0,_v$2:void 0}),n})()}export{R as default};
