(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{147:function(e,a,t){"use strict";t.r(a),t.d(a,"graphql",function(){return g}),t.d(a,"StaticQueryContext",function(){return p}),t.d(a,"StaticQuery",function(){return h});var n=t(0),s=t.n(n),r=t(4),l=t.n(r),i=t(144),c=t.n(i);t.d(a,"Link",function(){return c.a}),t.d(a,"withPrefix",function(){return i.withPrefix}),t.d(a,"navigate",function(){return i.navigate}),t.d(a,"push",function(){return i.push}),t.d(a,"replace",function(){return i.replace}),t.d(a,"navigateTo",function(){return i.navigateTo});var o=t(36);t.d(a,"waitForRouteChange",function(){return o.c});var u=t(154),m=t.n(u);t.d(a,"PageRenderer",function(){return m.a});var d=t(50);t.d(a,"parsePath",function(){return d.a});var p=s.a.createContext({}),h=function(e){return s.a.createElement(p.Consumer,null,function(a){return e.data||a[e.query]&&a[e.query].data?(e.render||e.children)(e.data?e.data.data:a[e.query].data):s.a.createElement("div",null,"Loading (StaticQuery)")})};function g(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}h.propTypes={data:l.a.object,query:l.a.string.isRequired,render:l.a.func,children:l.a.func}},152:function(e,a,t){"use strict";var n=t(0),s=t.n(n);a.a=function(){return s.a.createElement("footer",{id:"footer"},s.a.createElement("div",{className:"inner"},s.a.createElement("ul",{className:"icons"},s.a.createElement("li",null,s.a.createElement("a",{href:"https://www.twitter.com/originlabsorg",className:"icon alt fa-twitter"},s.a.createElement("span",{className:"label"},"Twitter"))),s.a.createElement("li",null,s.a.createElement("a",{href:"https://www.github.com/originlabsorg",className:"icon alt fa-github"},s.a.createElement("span",{className:"label"},"GitHub"))),s.a.createElement("li",null,s.a.createElement("a",{href:"https://www.linkedin.com/in/originlabsorg",className:"icon alt fa-linkedin"},s.a.createElement("span",{className:"label"},"LinkedIn")))),s.a.createElement("ul",{className:"copyright"},s.a.createElement("li",null,"© ","Origin Labs "+(new Date).getFullYear()))))}},153:function(e,a,t){"use strict";var n=t(0),s=t.n(n),r=t(4),l=t.n(r),i=t(147),c=function(e){return s.a.createElement("header",{id:"header",className:"alt"},s.a.createElement(i.Link,{to:"/",className:"logo"},s.a.createElement("strong",null,"Origin"),s.a.createElement("span",null,"Labs"),s.a.createElement("span",{className:"icon fa-flask"})),s.a.createElement("nav",null,s.a.createElement("a",{className:"menu-link",onClick:e.onToggleMenu,href:"javascript:;"},"Menu")))};c.propTypes={onToggleMenu:l.a.func},a.a=c},154:function(e,a,t){var n;e.exports=(n=t(177))&&n.default||n},155:function(e,a,t){"use strict";var n=t(0),s=t.n(n),r=t(4),l=t.n(r),i=t(147),c=function(e){return s.a.createElement("nav",{id:"menu"},s.a.createElement("div",{className:"inner"},s.a.createElement("ul",{className:"links"},s.a.createElement("li",null,s.a.createElement(i.Link,{onClick:e.onToggleMenu,to:"/"},"Home"))),s.a.createElement("ul",{className:"actions vertical"},s.a.createElement("li",null,s.a.createElement("a",{href:"#contact",onClick:e.onToggleMenu,className:"button fit"},"Get in Touch")))),s.a.createElement("a",{className:"close",onClick:e.onToggleMenu,href:"javascript:;"},"Close"))};c.propTypes={onToggleMenu:l.a.func},a.a=c},156:function(e,a,t){},158:function(e,a,t){"use strict";var n=t(0),s=t.n(n),r=(t(160),t(8)),l=t.n(r),i=t(161),c=t.n(i),o=(t(172),{apiKey:"AIzaSyB4baCZl9rfbtXbmEYoudjPrzKsBpVG3nE",authDomain:"originlabshomepage.firebaseapp.com",databaseURL:"https://originlabshomepage.firebaseio.com",projectId:"originlabshomepage",storageBucket:"originlabshomepage.appspot.com",messagingSenderId:"1054563112246"}),u="6Lc2dXkUAAAAAL6hepoPO4BYkTI_uRzQ8xR92kvy",m="https://staticman3.herokuapp.com/v2/entry/originlabsorg/originlabs.org/master/comments",d=new function(){c.a.initializeApp(o),this.database=c.a.database},p=t(173),h=t.n(p),g=t(174),f=t.n(g),E=function(e,a,t){f.a.ajax({type:"POST",url:m,data:e,contentType:"application/x-www-form-urlencoded",success:function(e){return a(e)},error:function(e){return t(e)}})},b=function(e){function a(){for(var a,t=arguments.length,n=new Array(t),s=0;s<t;s++)n[s]=arguments[s];return(a=e.call.apply(e,[this].concat(n))||this).state={name:"",email:"",message:"",reCaptchaVerified:!1,sendingButtonMessage:"Send Message",submissionResponse:""},a.resetState=function(){a.setState({name:"",email:"",message:"",reCaptchaVerified:!1,sendingButtonMessage:"Send Message",submissionResponse:""})},a.handleFieldChange=function(e){var t,n=e.target,s=n.value,r=n.getAttribute("id");a.setState(((t={})[r]=s,t))},a.onSuccess=function(){a.setState({submissionResponse:"The contact form was successfully submitted!",sendingButtonMessage:"Message sent!"}),a.resetForm()},a.onError=function(){a.setState({submissionResponse:"There was an error with the submission, please try again later!"})},a.clearSubmissionResponse=function(){return a.setState({submissionResponse:""})},a.handleFormSubmit=function(e){e.preventDefault();var t=a.state,n={name:t.name,email:t.email,message:t.message};a.setState({sendingButtonMessage:"Sending..."}),d.database().ref("/contacts").push(n).then(function(){a.setState({submissionResponse:"Processing..."})}).catch(function(e){a.setState({submissionResponse:"Something went wrong!"})});var s=f()(e.target).serialize();E(s,a.onSuccess,a.onError)},a.checkCaptcha=function(e){a.setState({reCaptchaVerified:!!e&&!0,sendingButtonMessage:"Send Message"})},a.resetForm=function(){a.reCaptcha.reset(),a.resetState()},a}return l()(a,e),a.prototype.render=function(){var e=this,a=this.state,t=a.name,n=a.email,r=a.message,l=a.reCaptchaVerified,i=a.sendingButtonMessage,c=a.submissionResponse;return s.a.createElement("section",null,s.a.createElement("form",{method:"post",onSubmit:this.handleFormSubmit,onChange:this.clearSubmissionResponse},s.a.createElement("input",{name:"options[slug]",type:"hidden",value:""}),s.a.createElement("div",{className:"field half first"},s.a.createElement("label",{htmlFor:"name"},"Name"),s.a.createElement("input",{type:"text",name:"fields[name]",id:"name",value:t,onChange:this.handleFieldChange,pattern:"[A-Za-z\\-'\\s]+",required:!0})),s.a.createElement("div",{className:"field half"},s.a.createElement("label",{htmlFor:"email"},"Email"),s.a.createElement("input",{type:"email",name:"fields[email]",id:"email",value:n,onChange:this.handleFieldChange,required:!0})),s.a.createElement("div",{className:"field"},s.a.createElement("label",{htmlFor:"message"},"Message"),s.a.createElement("textarea",{name:"fields[message]",id:"message",rows:"6",value:r,onChange:this.handleFieldChange,required:!0})),s.a.createElement("div",{className:"field"},c&&s.a.createElement("p",null,c)),s.a.createElement(h.a,{ref:function(a){return e.reCaptcha=a},sitekey:u,theme:"dark",onVerify:this.checkCaptcha}),s.a.createElement("ul",{className:"actions"},s.a.createElement("li",null,s.a.createElement("input",{type:"submit",value:i,className:"special",disabled:!l})),s.a.createElement("li",null,s.a.createElement("input",{type:"reset",value:"Clear",onClick:this.resetForm})))))},a}(n.Component);a.a=function(){return s.a.createElement("section",{id:"contact"},s.a.createElement("div",{className:"inner"},s.a.createElement(b,null),s.a.createElement("section",{className:"split"},s.a.createElement("section",null,s.a.createElement("div",{className:"contact-method"},s.a.createElement("span",{className:"icon alt fa-envelope"}),s.a.createElement("h3",null,"Email"),s.a.createElement("a",{href:"#"},"contact@originlabs.org"))),s.a.createElement("section",null,s.a.createElement("div",{className:"contact-method"},s.a.createElement("span",{className:"icon alt fa-phone"}),s.a.createElement("h3",null,"Phone"),s.a.createElement("span",null,"(415) 506-7160"))),s.a.createElement("section",null,s.a.createElement("div",{className:"contact-method"},s.a.createElement("span",{className:"icon alt fa-home"}),s.a.createElement("h3",null,"Address"),s.a.createElement("span",null,"1 Market Plaza SP6",s.a.createElement("br",null),"San Francisco, CA 94105",s.a.createElement("br",null),"United States of America"))))))}},177:function(e,a,t){"use strict";t.r(a);t(38);var n=t(0),s=t.n(n),r=t(4),l=t.n(r),i=t(73),c=t(1),o=function(e){var a=e.location,t=c.default.getResourcesForPathnameSync(a.pathname);return s.a.createElement(i.a,Object.assign({location:a,pageResources:t},t.json))};o.propTypes={location:l.a.shape({pathname:l.a.string.isRequired}).isRequired},a.default=o}}]);
//# sourceMappingURL=1-ccf72a3029ba05d07833.js.map