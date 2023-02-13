"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[843],{843:function(n,e,t){t.r(e),t.d(e,{default:function(){return E}});var r,a,i,o=t(439),s=t(791),c=t(984),l=t(434),u=t(316),d=t(168),p=t(402),x=p.Z.form(r||(r=(0,d.Z)(["\ndisplay: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  width: 400px;\n  padding: 10px;\n  gap: 20px;\n  border: 1px solid black;\n  \n"]))),f=p.Z.label(a||(a=(0,d.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  gap: 10px;\n  font-size: 20px;\n"]))),m=p.Z.button(i||(i=(0,d.Z)(["\nwidth: 120px;\n  font-size: 15px;\n  border-radius: 5px;\n"]))),g=t(184);function h(){var n=(0,s.useState)(""),e=(0,o.Z)(n,2),t=e[0],r=e[1],a=(0,s.useState)(""),i=(0,o.Z)(a,2),d=i[0],p=i[1],h=(0,l.I0)(),b=(0,l.v9)((function(n){return n.contacts.contacts})),Z=function(){r(""),p("")};return(0,g.jsxs)(x,{onSubmit:function(n){n.preventDefault();var e={id:(0,c.x0)(),name:t,number:d};b.map((function(n){return n.name})).includes(e.name)?alert("".concat(e.name," is already in contacts ")):h((0,u.uK)(e)),Z()},children:[(0,g.jsxs)(f,{children:["Name",(0,g.jsx)("input",{type:"text",name:"name",value:t,onChange:function(n){return r(n.currentTarget.value)},pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0})]}),(0,g.jsxs)(f,{children:["Number",(0,g.jsx)("input",{type:"tel",name:"number",value:d,onChange:function(n){return p(n.currentTarget.value)},pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0})]}),(0,g.jsx)(m,{type:"submit",children:"Add contact"})]})}var b,Z,j,v,y,w,C,z,k,_=t(981),A=p.Z.label(b||(b=(0,d.Z)(["\ndisplay: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  gap: 10px;\n  margin-bottom: 30px;\n  font-size: 20px;\n  font-weight: 500;\n"]))),L=function(){var n=(0,l.I0)();return(0,g.jsxs)(A,{children:["Find contacts by name",(0,g.jsx)("input",{type:"text",onChange:function(e){return t=e.currentTarget.value,void n((0,_._L)(t));var t}})]})},S=t(49),q=function(n){return n.contacts.contacts.filter((function(e){return e.name.toLowerCase().includes(n.contacts.query.toLowerCase())}))},F=t(88),G=t(789).ZP.div(Z||(Z=(0,d.Z)(["\ndisplay: flex;\njustify-content: center;\n"]))),I=function(){return(0,g.jsx)(G,{children:(0,g.jsx)(F.Yt,{visible:!0,height:"80",width:"80",ariaLabel:"MagnifyingGlass-loading",wrapperStyle:{},wrapperClass:"MagnifyingGlass-wrapper",glassColor:"#c0efff",color:"#e15b64"})})},M=p.Z.ul(j||(j=(0,d.Z)(["\n  padding-left: 0;\n  margin-top: 0;\n"]))),N=p.Z.li(v||(v=(0,d.Z)(["\n  display: flex;\n  gap: 15px;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 15px;\n"]))),P=p.Z.p(y||(y=(0,d.Z)(["\n  font-size: 20px;\n  margin: 0;\n"]))),Q=p.Z.button(w||(w=(0,d.Z)(["\n  width: 100px;\n  font-size: 15px;\n  border-radius: 5px;\n"]))),T=function(){var n=(0,l.v9)(q),e=(0,l.I0)(),t=(0,l.v9)((function(n){return n.contacts})).status;(0,s.useEffect)((function(){e((0,u.yF)())}),[e]);return(0,g.jsxs)(M,{children:[(t===S.Q.idle||t===S.Q.loading)&&(0,g.jsx)(I,{}),t===S.Q.error&&(0,g.jsx)("p",{children:"\u0412\u0438\u0431\u0430\u0447\u0442\u0435, \u0441\u0442\u0430\u043b\u0430\u0441\u044f \u043f\u043e\u043c\u0438\u043b\u043a\u0430"}),null===n||void 0===n?void 0:n.map((function(n){var t=n.id,r=n.name,a=n.phone;return(0,g.jsxs)(N,{children:[(0,g.jsxs)(P,{children:[r,": ",a]}),(0,g.jsx)(Q,{onClick:function(){return function(n){e((0,u.GK)(n))}(t)},children:"Delete"})]},t)}))]})},D=p.Z.div(C||(C=(0,d.Z)(["\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    padding-top: 50px;\n    padding-bottom: 50px;\n    font-size: 30px;\n    color: #010101;\n    background-color: rgba(237, 233, 233, 0.5);\n"]))),K=p.Z.h1(z||(z=(0,d.Z)(["\nmargin-top: 0;\nmargin-bottom: 30px;\n"]))),B=p.Z.h2(k||(k=(0,d.Z)(["\nmargin-top: 30px;\nmargin-bottom: 30px;\nfont-size: 30px;\n"]))),E=function(){return(0,g.jsxs)(D,{children:[(0,g.jsx)(K,{children:"Phonebook"}),(0,g.jsx)(h,{}),(0,g.jsx)(B,{children:"Contacs"}),(0,g.jsx)(L,{}),(0,g.jsx)(T,{})]})}}}]);
//# sourceMappingURL=843.78932e5d.chunk.js.map