(this.webpackJsonpphonebook=this.webpackJsonpphonebook||[]).push([[0],{16:function(e,t,n){},26:function(e,t,n){"use strict";n.r(t);var c=n(2),r=n.n(c),a=n(9),o=n.n(a),i=(n(16),n(5)),u=n(8),j=n(1),s=n(11),b=n(10),l=n.n(b),d=n(0),O=function(e){var t=e.onAddContact,n=e.onChangeNumber,c=e.onChangeName,r=e.name,a=e.number;return Object(d.jsx)("div",{children:Object(d.jsxs)("form",{action:"submit",onSubmit:t,children:[Object(d.jsxs)("label",{htmlFor:"",children:[Object(d.jsx)("p",{children:"enter name"}),Object(d.jsx)("input",{onInput:function(e){return c(e.target.value)},type:"text",name:"name",value:r,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0})]}),Object(d.jsxs)("label",{children:[Object(d.jsx)("p",{children:"enter phone number"}),Object(d.jsx)("input",{onInput:function(e){return n(e.target.value)},type:"tel",name:"number",value:a,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0})]}),Object(d.jsx)("br",{}),Object(d.jsx)("button",{children:"Add Contact"})]})})},m=function(e){var t=e.contacts,n=e.onDeleteContacts;return Object(d.jsx)("ul",{children:t.map((function(e){var t=e.name,c=e.number,r=e.id;return Object(d.jsxs)("li",{children:[Object(d.jsx)("p",{children:t}),Object(d.jsx)("p",{children:c}),Object(d.jsx)("button",{onClick:function(){return n(r)},children:"Delete"})]},r)}))})},h=function(e,t){return e.filter((function(e){return e.name.toLowerCase().includes(t.toLowerCase().trim())}))},f=function(e){var t=e.filterName,n=e.onChangeFilter;return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("div",{className:"PhonebookFilter",children:Object(d.jsxs)("label",{children:[Object(d.jsx)("p",{children:"filter contacts"}),Object(d.jsx)("input",{type:"text",name:"filter",id:"",value:t,onInput:n})]})}),Object(d.jsx)("h3",{children:"Contacts"})]})},x={name:"",number:"",filter:"",contacts:[]};var p=function(){var e=Object(c.useState)(x),t=Object(s.a)(e,2),n=t[0],r=t[1],a=h(n.contacts,n.filter);return Object(d.jsxs)("div",{children:[Object(d.jsx)("h1",{children:"Phonebook"}),Object(d.jsx)(O,{onAddContact:function(e){e.preventDefault();var t={name:n.name,number:n.number,id:l.a.generate()};r((function(e){return Object(j.a)(Object(j.a)({},e),{},{contacts:[].concat(Object(u.a)(e.contacts),[t])})}));var c=JSON.parse(localStorage.getItem("contacts"));null!==c?localStorage.setItem("contacts",JSON.stringify([].concat(Object(u.a)(c),[t]))):localStorage.setItem("contacts",JSON.stringify([t])),r((function(e){return Object(j.a)(Object(j.a)({},e),{},{name:"",number:""})}))},onChangeNumber:function(e){r((function(t){return Object(j.a)(Object(j.a)({},t),{},{number:e})}))},onChangeName:function(e){r((function(t){return Object(j.a)(Object(j.a)({},t),{},{name:e})}))},name:n.name,number:n.number}),Object(d.jsx)(f,{filterName:n.filter,onChangeFilter:function(e){var t=e.target,n=t.name,c=t.value;r((function(e){return Object(j.a)(Object(j.a)({},e),{},Object(i.a)({},n,c))}))}}),Object(d.jsx)(m,{onDeleteContacts:function(e){r((function(t){return Object(j.a)(Object(j.a)({},t),{},{contacts:t.contacts.filter((function(t){return t.id!==e}))})}))},contacts:a})]})};var v=function(){return Object(d.jsx)("div",{children:Object(d.jsx)(p,{})})};o.a.render(Object(d.jsx)(r.a.StrictMode,{children:Object(d.jsx)(v,{})}),document.getElementById("root"))}},[[26,1,2]]]);
//# sourceMappingURL=main.8d02b1bc.chunk.js.map