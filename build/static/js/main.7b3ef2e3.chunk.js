(this.webpackJsonpchatty=this.webpackJsonpchatty||[]).push([[0],{106:function(e,t,a){},107:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(34),l=a.n(c),i=a(20),o=a(21),s=a(23),u=a(22),h=a(60),m=a(25),p=a(17),g=a(115),d=a(54),b=a.n(d);a(95),a(96);b.a.initializeApp({apiKey:"AIzaSyAczHspPTJd7BEjHdc6w26CaN5rUYF5wpc",authDomain:"chatty-8a759.firebaseapp.com",databaseURL:"https://chatty-8a759.firebaseio.com"});var E=b.a.auth,v=b.a.database(),f=a(67),y=a(74),S=a(116),w=a(69),C=a(118),j=a(112),k=a(119),O=a(73),x=a(50),I=a(41),L=a(32);var D=function(){return r.a.createElement("header",null,r.a.createElement(S.a,{bg:"light",expand:"lg"},r.a.createElement(w.a,{href:"/"},"Chatty"),r.a.createElement(C.a,{as:j.a},r.a.createElement(x.a,{as:k.a},"Menu \xa0 ",r.a.createElement(f.a,{icon:y.a})),E().currentUser?r.a.createElement(I.a,null,r.a.createElement(L.a,null,r.a.createElement(p.b,{to:"/chat"},"Chat")),r.a.createElement(L.a,null,r.a.createElement(O.a,{variant:"primary",onClick:function(){return E().signOut()}},"Log out"))):r.a.createElement(I.a,null,r.a.createElement(L.a,null,r.a.createElement(p.b,{to:"/login"},"Log in")),r.a.createElement(L.a,null,r.a.createElement(p.b,{to:"/signup"},"Sign up"))))))},P=a(113);var A=function(){return r.a.createElement("footer",null,r.a.createElement(P.a,null,r.a.createElement("p",null,"\xa9 Chatty Demo 2020.")))},N=a(114),W=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"home"},r.a.createElement(D,null),r.a.createElement("section",null,r.a.createElement(N.a,null,r.a.createElement(P.a,null,r.a.createElement("h1",null,"Welcome to Chatty"),r.a.createElement("p",{className:"lead"},"A great place to share your thoughts with friends "),r.a.createElement(O.a,{onClick:function(){e.props.history.replace("/signup")},variant:"primary"},"Sign up"),r.a.createElement(O.a,{onClick:function(){e.props.history.replace("/login")},variant:"secondary"},"Log in")))),r.a.createElement(A,null))}}]),a}(n.Component),G=a(9),H=a.n(G),R=a(19),B=a(13),U=a(117),M=a(78),T=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).state={user:E().currentUser,chats:[],content:"",readError:null,writeError:null,loadingChats:!1},n.handleChange=n.handleChange.bind(Object(B.a)(n)),n.handleSubmit=n.handleSubmit.bind(Object(B.a)(n)),n.myRef=r.a.createRef(),n}return Object(o.a)(a,[{key:"componentDidMount",value:function(){var e=Object(R.a)(H.a.mark((function e(){var t,a=this;return H.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.setState({readError:null,loadingChats:!0}),t=this.myRef.current;try{v.ref("chats").on("value",(function(e){var n=[];e.forEach((function(e){n.push(e.val())})),n.sort((function(e,t){return e.timestamp-t.timestamp})),a.setState({chats:n}),t.scrollBy(0,t.scrollHeight),a.setState({loadingChats:!1})}))}catch(n){this.setState({readError:n.message,loadingChats:!1})}case 3:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"handleChange",value:function(e){this.setState({content:e.target.value})}},{key:"handleSubmit",value:function(){var e=Object(R.a)(H.a.mark((function e(t){var a;return H.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),this.setState({writeError:null}),a=this.myRef.current,e.prev=3,e.next=6,v.ref("chats").push({content:this.state.content,timestamp:Date.now(),uid:this.state.user.uid});case 6:this.setState({content:""}),a.scrollBy(0,a.scrollHeight),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(3),this.setState({writeError:e.t0.message});case 13:case"end":return e.stop()}}),e,this,[[3,10]])})));return function(t){return e.apply(this,arguments)}}()},{key:"formatTime",value:function(e){var t=new Date(e);return"".concat(t.toLocaleDateString()," ").concat(t.toLocaleTimeString())}},{key:"render",value:function(){var e=this;return r.a.createElement(P.a,null,r.a.createElement(D,null),r.a.createElement("div",{className:"login-info"},r.a.createElement("p",null,"Logged in as: ",r.a.createElement("strong",{variant:"info"},this.state.user.email))),r.a.createElement("div",{className:"chat-area",ref:this.myRef},this.state.loadingChats?r.a.createElement(g.a,{animation:"border",role:"status"},r.a.createElement("span",{className:"sr-only"},"Loading...")):"",this.state.chats.map((function(t){return r.a.createElement("p",{key:t.timestamp,className:"chat-bubble "+(e.state.user.uid===t.uid?"current-user":"")},t.content,r.a.createElement("br",null),r.a.createElement("span",{className:"chat-time float-right"},e.formatTime(t.timestamp)))}))),r.a.createElement(U.a,{onSubmit:this.handleSubmit},r.a.createElement(M.a,{as:"textarea",name:"content",onChange:this.handleChange,value:this.state.content}),this.state.error?r.a.createElement("p",{variant:"danger"},this.state.error):null,r.a.createElement(O.a,{type:"submit",variant:"primary"},"Send")))}}]),a}(n.Component),z=a(53),F=a(77),J=a(81);function Y(){var e=new E.GoogleAuthProvider;return E().signInWithPopup(e)}function K(){var e=new E.GithubAuthProvider;return E().signInWithPopup(e)}var $=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).state={error:null,email:"",password:""},n.handleChange=n.handleChange.bind(Object(B.a)(n)),n.handleSubmit=n.handleSubmit.bind(Object(B.a)(n)),n.googleSignIn=n.googleSignIn.bind(Object(B.a)(n)),n.githubSignIn=n.githubSignIn.bind(Object(B.a)(n)),n}return Object(o.a)(a,[{key:"handleChange",value:function(e){this.setState(Object(z.a)({},e.target.name,e.target.value))}},{key:"handleSubmit",value:function(){var e=Object(R.a)(H.a.mark((function e(t){return H.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),this.setState({error:" "}),e.prev=2,e.next=5,a=this.state.email,n=this.state.password,E().createUserWithEmailAndPassword(a,n);case 5:e.next=10;break;case 7:e.prev=7,e.t0=e.catch(2),this.setState({error:e.t0.message});case 10:case"end":return e.stop()}var a,n}),e,this,[[2,7]])})));return function(t){return e.apply(this,arguments)}}()},{key:"googleSignIn",value:function(){var e=Object(R.a)(H.a.mark((function e(){return H.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Y();case 3:e.next=8;break;case 5:e.prev=5,e.t0=e.catch(0),this.setState({error:e.t0.message});case 8:case"end":return e.stop()}}),e,this,[[0,5]])})));return function(){return e.apply(this,arguments)}}()},{key:"githubSignIn",value:function(){var e=Object(R.a)(H.a.mark((function e(){return H.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,K();case 3:e.next=8;break;case 5:e.prev=5,e.t0=e.catch(0),this.setState({error:e.t0.message});case 8:case"end":return e.stop()}}),e,this,[[0,5]])})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return r.a.createElement(P.a,null,r.a.createElement(U.a,{autoComplete:"off",onSubmit:this.handleSubmit},r.a.createElement("h1",null,"Sign up to ",r.a.createElement(p.b,{to:"/"},"Chatty")),r.a.createElement("p",null,"Fill in the form below to create an account."),r.a.createElement(F.a,null,r.a.createElement(J.a,null,"Email:"),r.a.createElement(M.a,{placeholder:"Email",name:"email",type:"email",onChange:this.handleChange,value:this.state.email})),r.a.createElement(F.a,null,r.a.createElement(J.a,null,"Password:"),r.a.createElement(M.a,{placeholder:"Password",name:"password",onChange:this.handleChange,value:this.state.password,type:"password"})),r.a.createElement(F.a,null,this.state.error?r.a.createElement("p",null,this.state.error):null,r.a.createElement(O.a,{type:"submit",variant:"primary"},"Sign up"),r.a.createElement("p",null,"or "),r.a.createElement(O.a,{onClick:this.googleSignIn,type:"button",variant:"danger"},"Sign up with Google"),r.a.createElement(O.a,{type:"button",variant:"secondary",onClick:this.githubSignIn},"Sign up with GitHub")),r.a.createElement("hr",null),r.a.createElement("p",null,"Already have an account? ",r.a.createElement(p.b,{to:"/login"},"Log in"))))}}]),a}(n.Component),q=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).state={error:null,email:"",password:""},n.handleChange=n.handleChange.bind(Object(B.a)(n)),n.handleSubmit=n.handleSubmit.bind(Object(B.a)(n)),n.googleSignIn=n.googleSignIn.bind(Object(B.a)(n)),n.githubSignIn=n.githubSignIn.bind(Object(B.a)(n)),n}return Object(o.a)(a,[{key:"handleChange",value:function(e){this.setState(Object(z.a)({},e.target.name,e.target.value))}},{key:"handleSubmit",value:function(){var e=Object(R.a)(H.a.mark((function e(t){return H.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),this.setState({error:""}),e.prev=2,e.next=5,a=this.state.email,n=this.state.password,E().signInWithEmailAndPassword(a,n);case 5:e.next=10;break;case 7:e.prev=7,e.t0=e.catch(2),this.setState({error:e.t0.message});case 10:case"end":return e.stop()}var a,n}),e,this,[[2,7]])})));return function(t){return e.apply(this,arguments)}}()},{key:"googleSignIn",value:function(){var e=Object(R.a)(H.a.mark((function e(){return H.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Y();case 3:e.next=8;break;case 5:e.prev=5,e.t0=e.catch(0),this.setState({error:e.t0.message});case 8:case"end":return e.stop()}}),e,this,[[0,5]])})));return function(){return e.apply(this,arguments)}}()},{key:"githubSignIn",value:function(){var e=Object(R.a)(H.a.mark((function e(){return H.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,K();case 3:e.next=8;break;case 5:e.prev=5,e.t0=e.catch(0),this.setState({error:e.t0.message});case 8:case"end":return e.stop()}}),e,this,[[0,5]])})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return r.a.createElement(P.a,null,r.a.createElement(U.a,{autoComplete:"off",onSubmit:this.handleSubmit},r.a.createElement("h1",null,"Log in to ",r.a.createElement(p.b,{to:"/"},"Chatty")),r.a.createElement("p",null,"Fill in the form below to log in to your account."),r.a.createElement(F.a,null,r.a.createElement(J.a,null,"Email:"),r.a.createElement(M.a,{placeholder:"Email",name:"email",type:"email",onChange:this.handleChange,value:this.state.email})),r.a.createElement(F.a,null,r.a.createElement(J.a,null,"Password:"),r.a.createElement(M.a,{placeholder:"Password",name:"password",onChange:this.handleChange,value:this.state.password,type:"password"}),r.a.createElement("br",null),r.a.createElement("br",null),this.state.error?r.a.createElement("p",null,this.state.error):null,r.a.createElement("button",{variant:"primary",type:"submit"},"Login")),r.a.createElement(F.a,null,r.a.createElement("p",null,"\xa0"),r.a.createElement("p",null,"You can also login with any of these services:"),r.a.createElement(O.a,{variant:"danger",type:"button",onClick:this.googleSignIn},"Login with Google"),r.a.createElement(O.a,{variant:"secondary",type:"button",onClick:this.githubSignIn},"Login with GitHub")),r.a.createElement("hr",null),r.a.createElement("p",null,"Don't have an account? ",r.a.createElement(p.b,{to:"/signup"},"Sign up!"))))}}]),a}(n.Component);a(106);function Q(e){var t=e.component,a=e.authenticated,n=Object(h.a)(e,["component","authenticated"]);return r.a.createElement(m.b,Object.assign({},n,{render:function(e){return!0===a?r.a.createElement(t,e):r.a.createElement(m.a,{to:{pathname:"/login",state:{from:e.location}}})}}))}function V(e){var t=e.component,a=e.authenticated,n=Object(h.a)(e,["component","authenticated"]);return r.a.createElement(m.b,Object.assign({},n,{render:function(e){return!1===a?r.a.createElement(t,e):r.a.createElement(m.a,{to:"/chat"})}}))}var X=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){var e;return Object(i.a)(this,a),(e=t.call(this)).state={authenticated:!1,loading:!0},e}return Object(o.a)(a,[{key:"componentDidMount",value:function(){var e=this;E().onAuthStateChanged((function(t){t?e.setState({authenticated:!0,loading:!1}):e.setState({authenticated:!1,loading:!1})}))}},{key:"render",value:function(){return!0===this.state.loading?r.a.createElement(g.a,{animation:"border",role:"status"},r.a.createElement("span",{className:"sr-only"},"Loading...")):r.a.createElement(p.a,null,r.a.createElement(m.d,null,r.a.createElement(m.b,{exact:!0,path:"/",component:W}),r.a.createElement(Q,{path:"/chat",authenticated:this.state.authenticated,component:T}),r.a.createElement(V,{path:"/signup",authenticated:this.state.authenticated,component:$}),r.a.createElement(V,{path:"/login",authenticated:this.state.authenticated,component:q})))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(X,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},82:function(e,t,a){e.exports=a(107)}},[[82,1,2]]]);
//# sourceMappingURL=main.7b3ef2e3.chunk.js.map