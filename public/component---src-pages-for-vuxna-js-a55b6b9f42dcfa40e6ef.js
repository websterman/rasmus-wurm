(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{150:function(e,t,a){"use strict";a.r(t);var n=a(167),r=a(9),i=a(0),s=a.n(i),o=(a(163),a(175)),c=a(355),l=a.n(c),u=a(356),b=a.n(u),p=(a(4),a(82),a(64),a(49),a(357),a(227),a(59),a(359)),d=a.n(p),m=a(7),f=a.n(m),h=(a(30),a(221)),g=a.n(h),j=a(192),y=a.n(j),v={name:"jcsxd6",styles:"::placeholder{color:#93278f;}"},O=function(e){function t(){return e.apply(this,arguments)||this}return f()(t,e),t.prototype.render=function(){switch(this.props.type){case"textarea":return Object(r.b)("div",{className:"input-field input-"+this.props.type+" input-"+this.props.name},Object(r.b)(y.a,{label:this.props.label,multiline:!0,required:!0,id:this.props.name,name:this.props.name,value:this.props.value,onChange:this.props.changeHandler}));case"submit":return Object(r.b)("div",{className:"input-field input-"+this.props.type},Object(r.b)(g.a,{type:"submit"},this.props.label));default:return Object(r.b)("div",{className:"input-field input-"+this.props.type+" input-"+this.props.name},Object(r.b)(y.a,{css:v,label:this.props.label,required:!0,type:this.props.type,id:this.props.name,name:this.props.name,value:this.props.value,onChange:this.props.changeHandler}))}},t}(s.a.Component),w=a(473),x=a.n(w),k=function(e){d()(e);var t=Object(i.useState)({name:"",email:"",message:""}),a=t[0],n=t[1],s=Object(i.useState)("Skicka"),o=s[0],c=s[1],l=function(e){var t;n(Object.assign({},a,((t={})[e.target.name]=e.target.value,t)))},u=function(e){n({name:"",email:"",message:""}),c("Formulär Skickat")};return Object(r.b)("form",{name:"Kontakt",method:"post",action:"https://hooks.zapier.com/hooks/catch/4776849/7mizyj/",onSubmit:function(e){e.preventDefault(),console.log(a),x()({method:"post",url:"http://rasmuswurm.dev.websterman.se/mailhandler/",headers:{"content-type":"application/json"},data:a}).then(function(e){console.log(e),u()}).catch(function(e){return console.log(e)})}},Object(r.b)("input",{type:"hidden",name:"form-name",value:"Kontakt"}),Object(r.b)(O,{required:!0,label:"Namn",name:"name",type:"text",value:a.name,changeHandler:l}),Object(r.b)(O,{required:!0,label:"E-post",name:"email",type:"email",value:a.email,changeHandler:l}),Object(r.b)(O,{required:!0,label:"Meddelande",name:"message",type:"textarea",value:a.message,changeHandler:l}),Object(r.b)(O,{type:"submit",label:o}))},q=a(225),S=a.n(q),_=(a(493),a(494),a(265)),M=a.n(_),T=function(e){var t;function a(){(!t||t.length<1)&&(t=document.querySelectorAll("[data-speed]"));var e=t,a=Array.isArray(e),n=0;for(e=a?e:e[Symbol.iterator]();;){var r;if(a){if(n>=e.length)break;r=e[n++]}else{if((n=e.next()).done)break;r=n.value}var i=r,s="up"==i.dataset.direction?"-":"",o=this.pageYOffset*i.dataset.speed,c=15*Math.cos(this.pageYOffset/200)*i.dataset.seed,l=1+c/130,u=1.2-Math.cos(2*c)/120;console.log(i.dataset.seed),i.classList.contains("banner-title")?i.style.transform="translate3d(0,"+s+o+"px,0) rotate(-6deg)":i.classList.contains("banner-subtitle")?i.style.transform="translate3d(0,"+s+o+"px,0) rotate(-3deg)":i.style.transform="translate3d("+c+"%,"+s+o+"px,0) scale("+l+", "+u+")"}}Object(i.useEffect)(function(){for(var t=[],n=0;n<e.amount;n++)t.push(n);return u(t),window.addEventListener("scroll",a),function(){}},[]);var o=Object(n.a)("img",{target:"e1tr52yg0"})({name:"zzyf50",styles:"opacity:.15;position:absolute;top:-60px;"}),c=Object(i.useState)([]),l=c[0],u=c[1];return console.log(l),Object(r.b)(s.a.Fragment,null,l.map(function(e){return Object(r.b)(o,{src:M.a,key:e,className:"bubbl",style:{width:3+6*Math.random()+"%",left:91*Math.random()+"%",top:100*Math.random()+"%"},"data-seed":.3+Math.random()/3,"data-speed":.1+.5*Math.random().toFixed(1),"data-direction":"up"})}))},L=Object(n.a)("div",{target:"e1r50yii0"})({name:"11c7uqw",styles:"display:flex;position:relative;padding:27px 60px;background:white;> div,> form{color:#93278f;flex:50%;}> div > *,> form  button,> form label{color:#93278f;font-family:'roboto',sans;}> form button{margin:10px 0 0;border:1px solid #93278f;}> form div{width:100%;}> div > p{margin:20px 0;}"}),N=function(e){e.siteTitle;return Object(r.b)(L,null,Object(r.b)("div",null,Object(r.b)(S.a,{variant:"h4"},"Rasmus Wurm"),Object(r.b)(S.a,{variant:"body1"},"+46 70 398 09 82"),Object(r.b)("a",{href:"mailto:info@rasmuswurm.se"},Object(r.b)(S.a,{variant:"body1"},"info@rasmuswurm.se")),Object(r.b)("h3",null)),Object(r.b)(k,null),Object(r.b)(T,{amount:"6"}))};a(189);a.d(t,"adults",function(){return E});var H=Object(n.a)("div",{target:"eiwyp890"})("color:white;background-image:url(",l.a,");display:flex;justify-content:center;align-items:center;"),z=Object(n.a)("div",{target:"eiwyp891"})("background-image:url(",b.a,");height:0;position:relative;padding-top:34%;background-size:cover;background-position:center center;> div{color:white;text-align:center;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);}"),R=Object(n.a)("div",{target:"eiwyp892"})({name:"1i2h2b",styles:"position:relative;display:flex;align-items:stretch;"}),C={name:"1cd9f91",styles:"order:1;width:50%;"},F={name:"tzgvs3",styles:"order:2;width:50%;"},P=Object(n.a)("img",{target:"eiwyp893"})({name:"s1revi",styles:"width:100%;margin:0;display:block;"}),E=(t.default=function(e){var t=e.data;return Object(r.b)("div",null,Object(r.b)(o.a,null),Object(r.b)(z,{className:"intro-container"},Object(r.b)("div",{className:"IntroText"},Object(r.b)("h2",null,t.wordpressPage.acf.intro.intro_titel),Object(r.b)("p",{dangerouslySetInnerHTML:{__html:t.wordpressPage.acf.intro.intro_content}}))),t.wordpressPage.acf.row.map(function(e,t){var a=C,n=F;return console.log(e),t%2==1&&(a=F,n=C),Object(r.b)(R,{key:t,className:"adult-box"},Object(r.b)(T,{amount:"5"}),Object(r.b)("div",{css:a,className:"image-container"},Object(r.b)(P,{src:e.row_image.localFile.childImageSharp.original.src})),Object(r.b)(H,{css:n},Object(r.b)("div",null,Object(r.b)("h1",null,console.log(e)," ",e.row_text.row_title),Object(r.b)("p",{dangerouslySetInnerHTML:{__html:e.row_text.row_content}}))))}),Object(r.b)(N,null))},"2704954192")},163:function(e,t,a){"use strict";a.d(t,"b",function(){return b});var n=a(9),r=a(0),i=a.n(r),s=a(4),o=a.n(s),c=a(39),l=a.n(c);a.d(t,"a",function(){return l.a});a(165);var u=i.a.createContext({}),b=function(e){return Object(n.b)(u.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):Object(n.b)("div",null,"Loading (StaticQuery)")})};b.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},165:function(e,t,a){var n;e.exports=(n=a(174))&&n.default||n},174:function(e,t,a){"use strict";a.r(t);a(59);var n=a(0),r=a.n(n),i=a(4),s=a.n(i),o=a(62),c=a(2),l=function(e){var t=e.location,a=c.default.getResourcesForPathnameSync(t.pathname);return a?r.a.createElement(o.a,Object.assign({location:t,pageResources:a},a.json)):null};l.propTypes={location:s.a.shape({pathname:s.a.string.isRequired}).isRequired},t.default=l},175:function(e,t,a){"use strict";var n=a(167),r=a(9),i=a(4),s=a.n(i),o=(a(0),a(176)),c=a.n(o),l=a(163),u=Object(n.a)("div",{target:"eal8s4w0"})({name:"14w3aj0",styles:"background:white;text-align:center;padding:27px 0;"}),b=Object(n.a)("img",{target:"eal8s4w1"})({name:"oipr6a",styles:"max-height:116px;margin:0;"}),p=function(e){e.siteTitle;return Object(r.b)("header",null,console.log({HeaderLogo:c.a}),Object(r.b)(u,null,Object(r.b)(l.a,{to:"/"},Object(r.b)(b,{src:c.a,height:"100%"}))))};p.propTypes={siteTitle:s.a.string},p.defaultProps={siteTitle:""},t.a=p},176:function(e,t,a){e.exports=a.p+"static/Logo_Lila-6305652c91e27d5c0a26308bdc6b5939.svg"},265:function(e,t,a){e.exports=a.p+"static/bubble-7e8e1e838f469c19e7a926f6d323c0bf.png"},355:function(e,t,a){e.exports=a.p+"static/Bokeh_vuxen-4a7223f996afb7246cb84dfc15bfb87a.jpg"},356:function(e,t,a){e.exports=a.p+"static/curtains-0e74191a1083065cbf5186b4c77d5bd6.jpg"}}]);
//# sourceMappingURL=component---src-pages-for-vuxna-js-a55b6b9f42dcfa40e6ef.js.map