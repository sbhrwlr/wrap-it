(this.webpackJsonpshrink=this.webpackJsonpshrink||[]).push([[0],{37:function(t,e,a){},38:function(t,e,a){},39:function(t,e,a){},56:function(t,e,a){},74:function(t,e,a){},75:function(t,e,a){},78:function(t,e,a){"use strict";a.r(e);var c=a(1),n=a.n(c),s=a(8),r=a.n(s),i=(a(37),a(6)),o=(a(38),a.p+"static/media/logo.96fdadec.svg"),l=(a(39),a(2));var d=function(){return Object(l.jsxs)("div",{"data-testid":"header",className:"root",children:[Object(l.jsx)("div",{className:"head__starter"}),Object(l.jsxs)("div",{className:"head",children:[Object(l.jsxs)("div",{className:"head__content",children:[Object(l.jsx)("img",{className:"head__logo",src:o,alt:"Logo Icon"}),Object(l.jsx)("h1",{className:"head__brand",children:" Wrap-it"})]}),Object(l.jsx)("p",{className:"head__description",children:"Make your complex long URL short in one click"})]}),Object(l.jsx)("a",{href:"https://github.com/r-sabharwal/wrap-it",className:"github-corner",target:"_blank","aria-label":"View source on GitHub",children:Object(l.jsxs)("svg",{width:"110",height:"110",viewBox:"0 0 250 250",style:{fill:"#151513",color:"#fff",position:"absolute",top:0,border:0,right:0},"aria-hidden":"true",children:[Object(l.jsx)("path",{d:"M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z"}),Object(l.jsx)("path",{d:"M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2",fill:"currentColor",styles:{transformOrigin:"130px 106px"},className:"octo-arm"}),Object(l.jsx)("path",{d:"M115.0,115.0 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6 C136.9,99.2 139.9,98.4 142.2,98.6 C133.8,88.0 127.5,74.4 143.8,58.0 C148.5,53.4 154.0,51.2 159.7,51.0 C160.3,49.4 163.2,43.6 171.4,40.1 C171.4,40.1 176.1,42.5 178.8,56.2 C183.1,58.6 187.2,61.8 190.9,65.4 C194.5,69.0 197.7,73.2 200.1,77.6 C213.8,80.2 216.3,84.9 216.3,84.9 C212.7,93.1 206.9,96.0 205.4,96.6 C205.1,102.4 203.0,107.8 198.3,112.5 C181.9,128.9 168.3,122.5 157.7,114.1 C157.9,116.9 156.7,120.9 152.7,124.9 L141.0,136.5 C139.8,137.7 141.6,141.9 141.8,141.8 Z",fill:"currentColor",className:"octo-body"})]})})]})},j=a(5),u=(a(56),a(30)),h=a.n(u);a(74);var b=function(t){return Object(l.jsx)("div",{"data-testid":"ResultURL",className:"result__root",children:Object(l.jsx)("div",{className:"result",children:Object(l.jsxs)("div",{className:"result__link",children:[Object(l.jsx)("p",{className:"link",children:t.wrapUrl}),Object(l.jsx)(j.b,{className:"copy__btn",onClick:function(){navigator.clipboard.writeText(t.wrapUrl)},children:"Copy"})]})})})};var p=function(t){var e=Object(c.useState)("Result Url"),a=Object(i.a)(e,2),n=a[0],s=a[1];return Object(l.jsxs)("div",{"data-testid":"InputField",className:"input__root",children:[Object(l.jsx)(j.a,{className:"input_field",children:Object(l.jsx)(j.c,{className:"input",name:"fullUrl",placeholder:"Wrap Your URL !!!",onChange:function(e){t.onChange(e.target.value)}})}),Object(l.jsx)(j.b,{className:"input__btn",brand:"primary",onClick:function(){t.urlValid?h.a.post("https://wrapit.herokuapp.com/",{full:t.longUrl}).then((function(t){s(t.data.wrap)})).catch((function(t){return console.log(t)})):console.log("Not Valid")},children:"Wrap!"}),Object(l.jsx)(b,{wrapUrl:n})]})},f=(a(75),a(31)),O=a(32);var x=function(){return Object(l.jsx)("div",{"data-testid":"footer",className:"footer__root",children:Object(l.jsxs)("p",{"data-testid":"footer__cr",children:["Made With ",Object(l.jsx)(f.a,{icon:O.faHeart})," By Rahul"]})})};var m=function(){var t=Object(c.useState)(""),e=Object(i.a)(t,2),a=e[0],n=e[1],s=Object(c.useState)(!1),r=Object(i.a)(s,2),o=r[0],j=r[1];return console.log(o),Object(l.jsxs)("div",{className:"App",children:[Object(l.jsx)(d,{}),Object(l.jsx)(p,{urlValid:o,longUrl:a,onChange:function(t){n(t),function(t){var e=new RegExp("^(https?:\\/\\/)?((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|((\\d{1,3}\\.){3}\\d{1,3}))(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*(\\?[;&a-z\\d%_.~+=-]*)?(\\#[-a-z\\d_]*)?$","i");j(!!e.test(t))}(t)},onClick:function(){}}),Object(l.jsx)(x,{})]})},C=function(t){t&&t instanceof Function&&a.e(3).then(a.bind(null,79)).then((function(e){var a=e.getCLS,c=e.getFID,n=e.getFCP,s=e.getLCP,r=e.getTTFB;a(t),c(t),n(t),s(t),r(t)}))};r.a.render(Object(l.jsx)(n.a.StrictMode,{children:Object(l.jsx)(m,{})}),document.getElementById("root")),C()}},[[78,1,2]]]);
//# sourceMappingURL=main.6e22e040.chunk.js.map