import{i as s,e as r,c as e,a as o,t as a,j as u}from"./index-581ea178.js";const _="_pagination_9xi1t_3",g="_label_9xi1t_21",b="_btnContainer_9xi1t_45",i={pagination:_,label:g,btnContainer:b},d=a("<label><select name=per id=per><option value=10>10</option><option value=20>30</option><option value=40>60</option><option value=60>100</option></select>articles par page"),m=a("<div><button>1</button><button>2</button><button>3"),$=a("<section>"),f=n=>(()=>{const t=d(),l=t.firstChild,c=l.firstChild,p=c.nextSibling;return u(l,"change",n.changed),p.default=!0,e(()=>o(t,i.label)),t})(),v=()=>(()=>{const n=m();return e(()=>o(n,i.btnContainer)),n})(),P=()=>{const n=t=>{console.log(typeof t.target.value)};return(()=>{const t=$();return s(t,r(f,{changed:n}),null),s(t,r(v,{}),null),e(()=>o(t,i.pagination)),t})()};export{P};