(this["webpackJsonpfront-end"]=this["webpackJsonpfront-end"]||[]).push([[0],{23:function(e,t,n){},35:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(17),s=n.n(r),i=(n(23),n(11)),o=n(2),l=n(1),u=function(){return Object(l.jsxs)("div",{children:[Object(l.jsx)("h1",{children:"About"}),Object(l.jsx)("p",{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione praesentium expedita doloribus quo quia ab nisi beatae nemo, iure cumque corporis consectetur ut, dicta veniam nam. Sed impedit repellendus corrupti."}),Object(l.jsx)("p",{children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore possimus, deserunt ut cumque ratione iure blanditiis delectus vel magnam est, quo, distinctio illo nemo! Corrupti, repellendus non. Mollitia, totam similique!"})]})},b=n(7),d=n.n(b),j=n(12),m=n(9),p="http://flaskbasicapi.herokuapp.com",h=function(){Object(a.useEffect)((function(){q()}),[]);var e=Object(a.useState)(""),t=Object(m.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)(""),s=Object(m.a)(r,2),i=s[0],o=s[1],u=Object(a.useState)(""),b=Object(m.a)(u,2),h=b[0],x=b[1],O=Object(a.useState)(""),f=Object(m.a)(O,2),v=f[0],g=f[1],N=Object(a.useState)([]),w=Object(m.a)(N,2),y=w[0],k=w[1],C=Object(a.useState)(!1),S=Object(m.a)(C,2),E=S[0],T=S[1],q=function(){var e=Object(j.a)(d.a.mark((function e(){var t,n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(p,"/users"));case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,k(n);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),F=function(){var e=Object(j.a)(d.a.mark((function e(t){var a,r,s;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=E?"".concat(p,"/user/").concat(v):"".concat(p,"/users"),t.preventDefault(),e.next=4,fetch(a,{method:E?"PUT":"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:n,email:i,password:h})});case 4:return r=e.sent,E&&(T(!1),g("")),e.next=8,r.json();case 8:return s=e.sent,console.log(s),e.next=12,q();case 12:x(""),c(""),o("");case 15:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),L=function(){var e=Object(j.a)(d.a.mark((function e(t){var n,a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!window.confirm("Are tou sure you want to delet it?")){e.next=11;break}return e.next=4,fetch("".concat(p,"/user/").concat(t),{method:"DELETE"});case 4:return n=e.sent,e.next=7,n.json();case 7:return a=e.sent,console.log(a),e.next=11,q();case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),P=function(){var e=Object(j.a)(d.a.mark((function e(t){var n,a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(p,"/user/").concat(t));case 2:return n=e.sent,e.next=5,n.json();case 5:a=e.sent,T(!0),c(a.name),o(a.email),x(a.password),g(t);case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(l.jsxs)("div",{className:"row",children:[Object(l.jsx)("div",{className:"col-md-4",children:Object(l.jsxs)("form",{onSubmit:F,className:"card card-body",children:[Object(l.jsx)("div",{className:"form-group",children:Object(l.jsx)("input",{type:"text",onChange:function(e){return c(e.target.value)},value:n,className:"form-control",placeholder:"Name",autoFocus:!0})}),Object(l.jsx)("div",{className:"form-group",children:Object(l.jsx)("input",{type:"text",onChange:function(e){return o(e.target.value)},value:i,className:"form-control",placeholder:"email"})}),Object(l.jsx)("div",{className:"form-group",children:Object(l.jsx)("input",{type:"text",onChange:function(e){return x(e.target.value)},value:h,className:"form-control",placeholder:"Password"})}),Object(l.jsx)("button",{className:"btn btn-primary btn-block",children:E?"Edit":"Create"})]})}),Object(l.jsx)("div",{className:"col-md-8",children:Object(l.jsxs)("table",{className:"table table-striped",children:[Object(l.jsx)("thead",{children:Object(l.jsxs)("tr",{children:[Object(l.jsx)("th",{children:"Name"}),Object(l.jsx)("th",{children:"Email"}),Object(l.jsx)("th",{children:"Password"}),Object(l.jsx)("th",{children:"Operations"})]})}),Object(l.jsx)("tbody",{children:y.map((function(e){return Object(l.jsxs)("tr",{children:[Object(l.jsx)("td",{children:e.name}),Object(l.jsx)("td",{children:e.email}),Object(l.jsx)("td",{children:e.password}),Object(l.jsxs)("td",{children:[Object(l.jsx)("button",{className:"btn btn-secondary btn-sm btn-block",onClick:function(t){return P(e._id)},children:"Edit"}),Object(l.jsx)("button",{className:"btn btn-danger btn-sm btn-block",onClick:function(t){return L(e._id)},children:"Delete"})]})]},e._id)}))})]})})]})},x=function(){return Object(l.jsx)("nav",{className:"navbar navbar-expand-lg navbar-light bg-light",children:Object(l.jsxs)("div",{className:"container-fluid",children:[Object(l.jsx)(i.b,{className:"navbar-brand",to:"/",children:"Flask React CRUD"}),Object(l.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(l.jsx)("span",{className:"navbar-toggler-icon"})}),Object(l.jsx)("div",{className:"collapse navbar-collapse",id:"navbarNav",children:Object(l.jsx)("ul",{className:"navbar-nav",children:Object(l.jsx)("li",{className:"nav-item",children:Object(l.jsx)(i.b,{className:"nav-link active","aria-current":"page",to:"/about",children:"Home"})})})})]})})};var O=function(){return Object(l.jsxs)(i.a,{children:[Object(l.jsx)(x,{}),Object(l.jsx)("div",{className:"container p-2",children:Object(l.jsxs)(o.c,{children:[Object(l.jsx)(o.a,{path:"/about",component:u}),Object(l.jsx)(o.a,{path:"/",component:h})]})})]})},f=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,36)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),a(e),c(e),r(e),s(e)}))};n(34);s.a.render(Object(l.jsx)(c.a.StrictMode,{children:Object(l.jsx)(O,{})}),document.getElementById("root")),f()}},[[35,1,2]]]);
//# sourceMappingURL=main.0a8e71dc.chunk.js.map