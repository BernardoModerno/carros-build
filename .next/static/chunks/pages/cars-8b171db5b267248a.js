(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[936],{9943:function(e,n,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/cars",function(){return r(5938)}])},797:function(e,n,r){"use strict";r.d(n,{i:function(){return l}});var t=r(5893),s=r(911),a=r(682),i=r(325),c=r(1664);function o(){return(0,t.jsx)(s.Z,{bg:"dark",expand:"lg",variant:"dark",children:(0,t.jsxs)(a.Z,{children:[(0,t.jsx)(s.Z.Brand,{as:c.default,href:"/",className:"nav-link text-light",children:(0,t.jsx)("a",{className:"text-white-50 px-2 text-decoration-none",children:"Tela Inicial"})}),(0,t.jsx)(s.Z.Toggle,{"aria-controls":"basic-navbar-nav"}),(0,t.jsx)(s.Z.Collapse,{id:"basic-navbar-nav",children:(0,t.jsx)(i.Z,{className:"me-auto",children:(0,t.jsx)(i.Z.Link,{className:"nav-link",as:c.default,href:"/cars",children:(0,t.jsx)("a",{className:"nav-link",children:"Carros"})})})})]})})}function l(e){return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(o,{}),(0,t.jsx)("div",{className:"container-fluid",children:(0,t.jsx)("div",{className:"row",children:(0,t.jsx)("main",{className:"col-md-12 ms-sm-auto col-lg-12 px-md-2",children:e.children})})})]})}},5938:function(e,n,r){"use strict";r.r(n),r.d(n,{default:function(){return y}});var t=r(4051),s=r.n(t),a=r(5893),i=r(7294),c=r(1163),o=r(1664),l=r(9008),u=r(2920),d=r(4184),h=r.n(d),x=r(6611),f=r(6792),p=r(6558);const j=i.createContext(null);j.displayName="InputGroupContext";var m=j;const v=(0,x.Z)("input-group-text",{Component:"span"}),b=i.forwardRef((({bsPrefix:e,size:n,hasValidation:r,className:t,as:s="div",...c},o)=>{e=(0,f.vE)(e,"input-group");const l=(0,i.useMemo)((()=>({})),[]);return(0,a.jsx)(m.Provider,{value:l,children:(0,a.jsx)(s,{ref:o,...c,className:h()(t,e,n&&`${e}-${n}`,r&&"has-validation")})})}));b.displayName="InputGroup";var N=Object.assign(b,{Text:v,Radio:e=>(0,a.jsx)(v,{children:(0,a.jsx)(p.Z,{type:"radio",...e})}),Checkbox:e=>(0,a.jsx)(v,{children:(0,a.jsx)(p.Z,{type:"checkbox",...e})})}),w=r(5005),k=r(4716),C=r(797),g=r(8113);function _(e,n,r,t,s,a,i){try{var c=e[a](i),o=c.value}catch(l){return void r(l)}c.done?n(o):Promise.resolve(o).then(t,s)}function Z(e){return function(){var n=this,r=arguments;return new Promise((function(t,s){var a=e.apply(n,r);function i(e){_(a,t,s,i,c,"next",e)}function c(e){_(a,t,s,i,c,"throw",e)}i(void 0)}))}}function y(){var e=(0,c.useRouter)(),n=(0,i.useState)(""),r=n[0],t=n[1],d=(0,i.useState)([]),h=d[0],x=d[1];function f(){return(f=Z(s().mark((function e(n){var r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!window.confirm("Voc\xea realmente deseja excluir esse carro?")){e.next=6;break}return r=(0,g.R)(),e.next=4,r.delete("/".concat(n));case 4:u.Am.success("Carro exclu\xeddo!"),x(h.filter((function(e){return e._id!==n})));case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return(0,i.useEffect)((function(){function e(){return(e=Z(s().mark((function e(){var n,r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=(0,g.R)(),e.next=3,n.get("/");case 3:r=e.sent,x(r.data);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(l.default,{children:(0,a.jsx)("title",{children:"Carros Dispon\xedveis"})}),(0,a.jsxs)(C.i,{children:[(0,a.jsx)(o.default,{href:"/cars/createCar",children:(0,a.jsx)(w.Z,{variant:"outline-success mt-4",children:"Novo Carro"})}),(0,a.jsxs)(N,{className:"mt-3 mb-3",children:[(0,a.jsx)(N.Text,{children:"Buscar:"}),(0,a.jsx)(k.Z,{onChange:function(e){t(e.target.value)},placeholder:"Buscar por nome do carro"})]}),(0,a.jsxs)("table",{className:"table table-striped table-hover",children:[(0,a.jsx)("thead",{className:"table-dark mt-3",children:(0,a.jsxs)("tr",{children:[(0,a.jsx)("th",{scope:"col",children:"T\xedtulo"}),(0,a.jsx)("th",{scope:"col",children:"Brand"}),(0,a.jsx)("th",{scope:"col",children:"Pre\xe7o"}),(0,a.jsx)("th",{scope:"col",children:"Ano"}),(0,a.jsx)("th",{scope:"col",children:"Op\xe7\xf5es"})]})}),(0,a.jsx)("tbody",{children:h.filter((function(e){return""==r||e.title.toLowerCase().includes(r.toLowerCase())?e:void 0})).map((function(n){return(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:n.title}),(0,a.jsx)("td",{children:n.brand}),(0,a.jsx)("td",{children:n.price}),(0,a.jsx)("td",{children:n.age}),(0,a.jsx)("td",{children:(0,a.jsxs)("div",{children:[(0,a.jsx)(w.Z,{variant:"btn btn-sm btn-outline-primary me-2",onClick:function(){return e.push("cars/editCar/"+n._id)},children:"Editar"}),(0,a.jsx)(w.Z,{variant:"btn btn-sm btn-outline-danger me-2",onClick:function(){return function(e){return f.apply(this,arguments)}(n._id)},children:"Excluir"})]})})]},n._id)}))})]})]})]})}},8113:function(e,n,r){"use strict";r.d(n,{R:function(){return a}});var t=r(9669),s=r.n(t);function a(){var e=s().create({baseURL:"http://api-test.bhut.com.br:3000/api/cars"});return e}}},function(e){e.O(0,[393,565,774,888,179],(function(){return n=9943,e(e.s=n);var n}));var n=e.O();_N_E=n}]);