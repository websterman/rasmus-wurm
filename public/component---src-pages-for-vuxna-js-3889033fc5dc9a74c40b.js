(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{149:function(e,t,a){"use strict";a.r(t);a(352),a(353),a(83);var n=a(167),r=a(9),i=a(0),s=a.n(i),o=(a(162),a(173)),c=a(358),l=a.n(c),u=a(359),b=a.n(u),p=(a(4),a(65),a(49),a(360),a(228),a(60),a(362)),d=a.n(p),m=a(7),f=a.n(m),h=(a(30),a(217)),g=a.n(h),j=a(188),y=a.n(j),v={name:"jcsxd6",styles:"::placeholder{color:#93278f;}"},O=function(e){function t(){return e.apply(this,arguments)||this}return f()(t,e),t.prototype.render=function(){switch(this.props.type){case"textarea":return Object(r.b)("div",{className:"input-field input-"+this.props.type+" input-"+this.props.name},Object(r.b)(y.a,{label:this.props.label,multiline:!0,required:!0,id:this.props.name,name:this.props.name,value:this.props.value,onChange:this.props.changeHandler}));case"submit":return Object(r.b)("div",{className:"input-field input-"+this.props.type},Object(r.b)(g.a,{type:"submit"},this.props.label));default:return Object(r.b)("div",{className:"input-field input-"+this.props.type+" input-"+this.props.name},Object(r.b)(y.a,{css:v,label:this.props.label,required:!0,type:this.props.type,id:this.props.name,name:this.props.name,value:this.props.value,onChange:this.props.changeHandler}))}},t}(s.a.Component),w=a(476),x=a.n(w),k=function(e){d()(e);var t=Object(i.useState)({name:"",email:"",message:""}),a=t[0],n=t[1],s=Object(i.useState)("Skicka"),o=s[0],c=s[1],l=function(e){var t;n(Object.assign({},a,((t={})[e.target.name]=e.target.value,t)))},u=function(e){n({name:"",email:"",message:""}),c("Formulär Skickat")};return Object(r.b)("form",{name:"Kontakt",method:"post",action:"https://hooks.zapier.com/hooks/catch/4776849/7mizyj/",onSubmit:function(e){e.preventDefault(),console.log(a),x()({method:"post",url:"http://rasmuswurm.dev.websterman.se/mailhandler/",headers:{"content-type":"application/json"},data:a}).then(function(e){console.log(e),u()}).catch(function(e){return console.log(e)})}},Object(r.b)("input",{type:"hidden",name:"form-name",value:"Kontakt"}),Object(r.b)(O,{required:!0,label:"Namn",name:"name",type:"text",value:a.name,changeHandler:l}),Object(r.b)(O,{required:!0,label:"E-post",name:"email",type:"email",value:a.email,changeHandler:l}),Object(r.b)(O,{required:!0,label:"Meddelande",name:"message",type:"textarea",value:a.message,changeHandler:l}),Object(r.b)(O,{type:"submit",label:o}))},q=a(221),_=a.n(q),S=Object(n.a)("div",{target:"e1r50yii0"})({name:"1i0hg06",styles:"display:flex;padding:27px 60px;background:white;> div,> form{color:#93278f;flex:50%;}> div > *,> form  button,> form label{color:#93278f;font-family:'roboto',sans;}> form button{margin:10px 0 0;border:1px solid #93278f;}> form div{width:100%;}> div > p{margin:20px 0;}"}),T=function(e){e.siteTitle;return Object(r.b)(S,null,Object(r.b)("div",null,Object(r.b)(_.a,{variant:"h4"},"Rasmus Wurm"),Object(r.b)(_.a,{variant:"body1"},"+46 70 398 09 82"),Object(r.b)("a",{href:"mailto:info@rasmuswurm.se"},Object(r.b)(_.a,{variant:"body1"},"info@rasmuswurm.se")),Object(r.b)("h3",null)),Object(r.b)(k,null))},L=a(497),N=a.n(L);a.d(t,"adults",function(){return E});var H=Object(n.a)("div",{target:"eiwyp890"})("color:white;background-image:url(",l.a,");display:flex;justify-content:center;align-items:center;"),M=Object(n.a)("div",{target:"eiwyp891"})("background-image:url(",b.a,");height:0;position:relative;padding-top:34%;background-size:cover;background-position:center center;> div{color:white;text-align:center;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);}"),z=Object(n.a)("div",{target:"eiwyp892"})({name:"1i2h2b",styles:"position:relative;display:flex;align-items:stretch;"}),R={name:"1cd9f91",styles:"order:1;width:50%;"},C={name:"tzgvs3",styles:"order:2;width:50%;"},P=Object(n.a)("img",{target:"eiwyp893"})({name:"s1revi",styles:"width:100%;margin:0;display:block;"}),E=(t.default=function(e){var t,a=e.data;function s(){var e=t,a=Array.isArray(e),n=0;for(e=a?e:e[Symbol.iterator]();;){var r;if(a){if(n>=e.length)break;r=e[n++]}else{if((n=e.next()).done)break;r=n.value}var i=r,s="up"==i.dataset.direction?"-":"",o=this.pageYOffset*i.dataset.speed;i.classList.contains("banner-title")?i.style.transform="translate3d(0,"+s+o+"px,0) rotate(-6deg)":i.classList.contains("banner-subtitle")?i.style.transform="translate3d(0,"+s+o+"px,0) rotate(-3deg)":i.style.transform="translate3d(0,"+s+o+"px,0)"}}Object(i.useEffect)(function(){t=document.querySelectorAll("[data-speed]"),window.addEventListener("scroll",s)},[]);var c=Object(n.a)("img",{target:"eiwyp894"})({name:"zzyf50",styles:"opacity:.15;position:absolute;top:-60px;"});return Object(r.b)("div",null,Object(r.b)(o.a,null),Object(r.b)(M,{className:"intro-container"},Object(r.b)("div",{className:"IntroText"},Object(r.b)("h2",null,a.wordpressPage.acf.intro.intro_titel),Object(r.b)("p",{dangerouslySetInnerHTML:{__html:a.wordpressPage.acf.intro.intro_content}}))),a.wordpressPage.acf.row.map(function(e,t){var a=R,n=C;return console.log(e),t%2==1&&(a=C,n=R),Object(r.b)(z,{key:t,className:"adult-box"},[0,1,2,3,4,5,6,7,8,9,10].map(function(e){return Object(r.b)(c,{key:e,className:"bubbl",style:{width:3+6*Math.random()+"%",left:100*Math.random()+"%",top:100*Math.random()+"%"},"data-speed":.6*+Math.random().toFixed(1),"data-direction":"up",src:N.a})}),Object(r.b)("div",{css:a,className:"image-container"},Object(r.b)(P,{src:e.row_image.localFile.childImageSharp.original.src})),Object(r.b)(H,{css:n},Object(r.b)("div",null,Object(r.b)("h1",null,e.row_text.row_title),Object(r.b)("p",{dangerouslySetInnerHTML:{__html:e.row_text.row_content}}))))}),Object(r.b)(T,null))},"2704954192")},162:function(e,t,a){"use strict";a.d(t,"b",function(){return b});var n=a(9),r=a(0),i=a.n(r),s=a(4),o=a.n(s),c=a(39),l=a.n(c);a.d(t,"a",function(){return l.a});a(164);var u=i.a.createContext({}),b=function(e){return Object(n.b)(u.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):Object(n.b)("div",null,"Loading (StaticQuery)")})};b.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},164:function(e,t,a){var n;e.exports=(n=a(172))&&n.default||n},172:function(e,t,a){"use strict";a.r(t);a(60);var n=a(0),r=a.n(n),i=a(4),s=a.n(i),o=a(63),c=a(2),l=function(e){var t=e.location,a=c.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(o.a,Object.assign({location:t,pageResources:a},a.json))};l.propTypes={location:s.a.shape({pathname:s.a.string.isRequired}).isRequired},t.default=l},173:function(e,t,a){"use strict";var n=a(167),r=a(9),i=a(4),s=a.n(i),o=(a(0),a(174)),c=a.n(o),l=a(162),u=Object(n.a)("div",{target:"eal8s4w0"})({name:"14w3aj0",styles:"background:white;text-align:center;padding:27px 0;"}),b=Object(n.a)("img",{target:"eal8s4w1"})({name:"oipr6a",styles:"max-height:116px;margin:0;"}),p=function(e){e.siteTitle;return Object(r.b)("header",null,console.log({HeaderLogo:c.a}),Object(r.b)(u,null,Object(r.b)(l.a,{to:"/"},Object(r.b)(b,{src:c.a,height:"100%"}))))};p.propTypes={siteTitle:s.a.string},p.defaultProps={siteTitle:""},t.a=p},174:function(e,t,a){e.exports=a.p+"static/Logo_Lila-6305652c91e27d5c0a26308bdc6b5939.svg"},358:function(e,t,a){e.exports=a.p+"static/Bokeh_vuxen-4a7223f996afb7246cb84dfc15bfb87a.jpg"},359:function(e,t,a){e.exports=a.p+"static/curtains-0e74191a1083065cbf5186b4c77d5bd6.jpg"},497:function(e,t,a){e.exports=a.p+"static/bubble-5de9daed8986333fce336ce27b937288.png"}}]);
//# sourceMappingURL=component---src-pages-for-vuxna-js-3889033fc5dc9a74c40b.js.map