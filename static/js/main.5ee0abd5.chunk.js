(this["webpackJsonpreact-mesto-auth"]=this["webpackJsonpreact-mesto-auth"]||[]).push([[0],{17:function(e,t,n){},19:function(e,t,n){"use strict";n.r(t);var a=n(1),s=n.n(a),o=n(9),c=n.n(o),i=n(5),r=(n(17),n(12)),l=n(3),u=n(2),p=n(10),j=n(11),d=new(function(){function e(t){Object(p.a)(this,e),this._token=t.token,this._id=t.id,this._adress=t.adress}return Object(j.a)(e,[{key:"_verifyResolve",value:function(e){return e.ok?e.json():Promise.reject(e.status)}},{key:"getUserInfo",value:function(){return fetch("".concat(this._adress,"/v1/").concat(this._id,"/users/me"),{headers:{authorization:this._token}}).then(this._verifyResolve)}},{key:"getPosts",value:function(){return fetch("".concat(this._adress,"/v1/").concat(this._id,"/cards"),{headers:{authorization:this._token}}).then(this._verifyResolve)}},{key:"setUserInfo",value:function(e){return fetch("".concat(this._adress,"/v1/").concat(this._id,"/users/me"),{method:"PATCH",headers:{authorization:this._token,"Content-Type":"application/json"},body:JSON.stringify({name:e.name,about:e.about})}).then(this._verifyResolve)}},{key:"setUserAvatar",value:function(e){return fetch("".concat(this._adress,"/v1/").concat(this._id,"/users/me/avatar"),{method:"PATCH",headers:{authorization:this._token,"Content-Type":"application/json"},body:JSON.stringify({avatar:e.avatar})}).then(this._verifyResolve)}},{key:"addPost",value:function(e){return fetch("".concat(this._adress,"/v1/").concat(this._id,"/cards"),{method:"POST",headers:{authorization:this._token,"Content-Type":"application/json"},body:JSON.stringify({name:e.mesto,link:e.link})}).then(this._verifyResolve)}},{key:"deletePost",value:function(e){return fetch("".concat(this._adress,"/v1/").concat(this._id,"/cards/").concat(e),{method:"DELETE",headers:{authorization:this._token}}).then(this._verifyResolve)}},{key:"changeLikePostStatus",value:function(e,t){return fetch("".concat(this._adress,"/v1/").concat(this._id,"/cards/likes/").concat(e),{method:t?"DELETE":"PUT",headers:{authorization:this._token}}).then(this._verifyResolve)}}]),e}())({token:"036b7b31-eb11-4936-b88e-e4dfd598930e",id:"cohort-28",adress:"https://mesto.nomoreparties.co"}),h="https://auth.nomoreparties.co",b=s.a.createContext(),m=s.a.createContext(),_=n.p+"static/media/logo.bbe2a6ea.svg",f=n(0);function O(e){var t=e.currentEmail,n=e.signOut,a=s.a.useContext(m),o=Object(u.f)(),c="/sign-up"===o.pathname?"\u0412\u043e\u0439\u0442\u0438":"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f",r="/sign-up"===o.pathname?"/sign-in":"/sign-up";return Object(f.jsxs)("header",{className:"header",children:[Object(f.jsx)("a",{href:"/",children:Object(f.jsx)("img",{src:_,alt:"\u043b\u043e\u0433\u043e\u0442\u0438\u043f",className:"header__logo link-hover"})}),Object(f.jsx)("nav",{className:"menu",children:a?Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)(i.b,{to:"/",className:"menu__link",children:t}),Object(f.jsx)(i.b,{to:"/sign-in",className:"menu__link",onClick:n,children:"\u0412\u044b\u0439\u0442\u0438"})]}):Object(f.jsx)(i.b,{to:r,className:"menu__link",children:c})})]})}function x(e){var t=e.card,n=e.onCardClick,a=e.onCardLike,o=e.onCardDeleteClick,c=t.owner,i=t.link,r=t.name,l=t.likes,u=s.a.useContext(b),p=c._id===u._id,j="post__del-button ".concat(p&&"post__del-button_visible"),d=l.some((function(e){return e._id===u._id})),h="post__like-button ".concat(d&&"post__like-button_active");return Object(f.jsxs)("article",{className:"post",children:[Object(f.jsx)("img",{src:i,alt:r,className:"post__photo",onClick:function(){n(t)}}),Object(f.jsx)("p",{className:"post__caption",children:r}),Object(f.jsxs)("div",{className:"post__likes",children:[Object(f.jsx)("button",{type:"button",className:h,onClick:function(){a(t)}}),Object(f.jsx)("p",{className:"post__likes-number",children:l.length})]}),Object(f.jsx)("button",{type:"button",className:j,onClick:function(){o(t)}})]})}function g(e){var t=e.onEditAvatar,n=e.onEditProfile,a=e.onAddPost,o=e.onCardClick,c=e.onCardLike,i=e.onCardDeleteClick,r=e.posts,l=s.a.useContext(b);return Object(f.jsxs)("main",{className:"content",children:[Object(f.jsxs)("section",{className:"profile",children:[Object(f.jsx)("img",{src:l.avatar||"",alt:"\u0430\u0432\u0430\u0442\u0430\u0440",className:"profile__avatar"}),Object(f.jsx)("div",{className:"profile__edit-avatar",onClick:t}),Object(f.jsxs)("div",{className:"profile__info",children:[Object(f.jsx)("h1",{className:"profile__name",children:l.name||"\u041f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d"}),Object(f.jsx)("p",{className:"profile__about-me",children:l.about||"\u041f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d"}),Object(f.jsx)("button",{className:"profile__edit-button",type:"button",onClick:n})]}),Object(f.jsx)("button",{className:"profile__add-button",type:"button",onClick:a})]}),Object(f.jsx)("section",{className:"posts",children:r.map((function(e){return Object(f.jsx)(x,{card:e,onCardClick:o,onCardLike:c,onCardDeleteClick:i},e._id)}))})]})}function v(){return Object(f.jsx)("footer",{className:"footer",children:Object(f.jsx)("p",{className:"footer__author",children:"\xa9\xa02021 Daria Ivanova"})})}function N(e){var t=e.isOpen,n=e.card,a=e.onClose;return Object(f.jsx)("div",{className:"popup popup_content_photo ".concat(t&&"popup_opened"),id:"popup-open-photo",children:Object(f.jsxs)("div",{className:"popup__photo-box",children:[Object(f.jsx)("img",{src:n?n.link:"#",alt:n?n.name:"",className:"popup__photo"}),Object(f.jsx)("p",{className:"popup__caption-photo",children:n?n.name:""}),Object(f.jsx)("button",{type:"button",className:"popup__reset-button",onClick:a})]})})}function C(e){var t=e.name,n=e.title,a=e.buttonSubmit,s=e.children,o=e.isOpen,c=e.onClose,i=e.onSubmit,r="popup ".concat(o&&"popup_opened"),l="popup__form popup__form_contain_".concat(t);return Object(f.jsx)("div",{className:r,children:Object(f.jsxs)("div",{className:"popup__container",children:[Object(f.jsx)("h2",{className:"popup__title",children:n}),Object(f.jsxs)("form",{name:t,className:l,onSubmit:i,children:[s,Object(f.jsx)("button",{type:"submit",className:"popup__submit-button",children:a||"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c"}),Object(f.jsx)("button",{type:"reset",className:"popup__reset-button",onClick:c})]})]})})}function k(e){var t=e.isOpen,n=e.onClose,a=e.onUpdateUser,o=s.a.useContext(b),c=s.a.useState(""),i=Object(l.a)(c,2),r=i[0],u=i[1],p=s.a.useState(""),j=Object(l.a)(p,2),d=j[0],h=j[1];return s.a.useEffect((function(){u(o.name||""),h(o.about||"")}),[o]),Object(f.jsx)(C,{name:"edit-profile",title:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043f\u0440\u043e\u0444\u0438\u043b\u044c",isOpen:t,onClose:n,onSubmit:function(e){e.preventDefault(),a({name:r,about:d})},children:Object(f.jsxs)("fieldset",{className:"popup__fieldset",children:[Object(f.jsxs)("label",{className:"popup__field",children:[Object(f.jsx)("input",{type:"text",className:"popup__input popup__input_content_name",placeholder:"\u0418\u043c\u044f",name:"name",required:!0,minLength:"2",maxLength:"40",id:"name-input",value:r,onChange:function(e){u(e.target.value)}}),Object(f.jsx)("span",{className:"popup__error name-input-error"})]}),Object(f.jsxs)("label",{className:"popup__field",children:[Object(f.jsx)("input",{type:"text",className:"popup__input",placeholder:"\u041f\u0440\u043e\u0444\u0435\u0441\u0441\u0438\u043e\u043d\u0430\u043b\u044c\u043d\u0430\u044f \u0434\u0435\u044f\u0442\u0435\u043b\u044c\u043d\u043e\u0441\u0442\u044c",id:"about-me-input",name:"about",required:!0,minLength:"2",maxLength:"200",value:d,onChange:function(e){h(e.target.value)}}),Object(f.jsx)("span",{className:"popup__error about-me-input-error"})]})]})})}function y(e){var t=e.isOpen,n=e.onClose,a=e.onUpdateAvatar,o=s.a.useRef();return Object(f.jsx)(C,{name:"edit-avatar",title:"\u041e\u0431\u043d\u043e\u0432\u0438\u0442\u044c \u0430\u0432\u0430\u0442\u0430\u0440",isOpen:t,onClose:n,onSubmit:function(e){e.preventDefault(),a({avatar:o.current.value}),o.current.value=""},children:Object(f.jsx)("fieldset",{className:"popup__fieldset",children:Object(f.jsxs)("label",{className:"popup__field",children:[Object(f.jsx)("input",{type:"url",className:"popup__input",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u0430\u0432\u0430\u0442\u0430\u0440",id:"avatar-input",name:"avatar",required:!0,ref:o}),Object(f.jsx)("span",{className:"popup__error avatar-input-error"})]})})})}function S(e){var t=e.isOpen,n=e.onClose,a=e.onAddPost,o=s.a.useState(""),c=Object(l.a)(o,2),i=c[0],r=c[1],u=s.a.useState(""),p=Object(l.a)(u,2),j=p[0],d=p[1];return Object(f.jsx)(C,{name:"add-post",title:"\u041d\u043e\u0432\u043e\u0435 \u043c\u0435\u0441\u0442\u043e",buttonSubmit:"\u0421\u043e\u0437\u0434\u0430\u0442\u044c",isOpen:t,onClose:n,onSubmit:function(e){e.preventDefault(),a({mesto:i,link:j}),r(""),d("")},children:Object(f.jsxs)("fieldset",{className:"popup__fieldset",children:[Object(f.jsxs)("label",{className:"popup__field",children:[Object(f.jsx)("input",{type:"text",className:"popup__input",placeholder:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435",id:"place-input",name:"mesto",required:!0,minLength:"2",maxLength:"30",value:i,onChange:function(e){r(e.target.value)}}),Object(f.jsx)("span",{className:"popup__error place-input-error"})]}),Object(f.jsxs)("label",{className:"popup__field",children:[Object(f.jsx)("input",{type:"url",className:"popup__input",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443",id:"link-input",name:"link",required:!0,value:j,onChange:function(e){d(e.target.value)}}),Object(f.jsx)("span",{className:"popup__error link-input-error"})]})]})})}function P(e){var t=e.isOpen,n=e.onClose,a=e.card,s=e.onDeletePost;return Object(f.jsx)(C,{name:"delete-post",title:"\u0412\u044b \u0443\u0432\u0435\u0440\u0435\u043d\u044b?",buttonSubmit:"\u0414\u0430",isOpen:t,onClose:n,onSubmit:function(e){e.preventDefault(),s(a)}})}var L=n.p+"static/media/successRegist.1b6082f8.svg",E=n.p+"static/media/errorRegist.df8eddf6.svg";function w(e){var t=e.isOpen,n=e.onClose,a=e.statusRegist,s=a?"\u0412\u044b \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043b\u0438\u0441\u044c!":"\u0427\u0442\u043e-\u0442\u043e \u043f\u043e\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a! \u041f\u043e\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u0435\u0449\u0451 \u0440\u0430\u0437.";return Object(f.jsx)("div",{className:"popup ".concat(t&&"popup_opened"),children:Object(f.jsxs)("div",{className:"popup__container",children:[Object(f.jsx)("img",{src:a?L:E,alt:a?"\u0423\u0441\u043f\u0435\u0448\u043d\u0430\u044f \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f":"\u041e\u0448\u0438\u0431\u043a\u0430 \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u0438",className:"popup__img-status-regist"}),Object(f.jsx)("p",{className:"popup__caption-status-regist",children:s}),Object(f.jsx)("button",{type:"button",className:"popup__reset-button",onClick:n})]})})}function T(e){var t=e.handleLogin,n=s.a.useState(""),a=Object(l.a)(n,2),o=a[0],c=a[1],i=s.a.useState(""),r=Object(l.a)(i,2),u=r[0],p=r[1];return Object(f.jsxs)("div",{className:"login",children:[Object(f.jsx)("h2",{className:"login__title",children:"\u0412\u0445\u043e\u0434"}),Object(f.jsxs)("form",{name:"login",className:"login__form",onSubmit:function(e){e.preventDefault(),t(o,u),c(""),p("")},children:[Object(f.jsxs)("label",{className:"login__field",children:[Object(f.jsx)("input",{type:"email",className:"login__input",placeholder:"Email",name:"email",required:!0,minLength:"7",maxLength:"20",value:o,onChange:function(e){c(e.target.value)}}),Object(f.jsx)("span",{className:"popup__error email-input-error"})]}),Object(f.jsxs)("label",{className:"login__field",children:[Object(f.jsx)("input",{type:"password",className:"login__input",placeholder:"\u041f\u0430\u0440\u043e\u043b\u044c",name:"password",required:!0,minLength:"6",maxLength:"20",value:u,onChange:function(e){p(e.target.value)}}),Object(f.jsx)("span",{className:"popup__error password-input-error"})]}),Object(f.jsx)("button",{type:"submit",className:"login__submit-button",children:"\u0412\u043e\u0439\u0442\u0438"})]})]})}function A(e){var t=e.handleRegister,n=s.a.useState(""),a=Object(l.a)(n,2),o=a[0],c=a[1],r=s.a.useState(""),u=Object(l.a)(r,2),p=u[0],j=u[1];return Object(f.jsxs)("div",{className:"login",children:[Object(f.jsx)("h2",{className:"login__title",children:"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f"}),Object(f.jsxs)("form",{name:"login",className:"login__form",onSubmit:function(e){e.preventDefault(),t(p,o),c(""),j("")},children:[Object(f.jsxs)("label",{className:"login__field",children:[Object(f.jsx)("input",{type:"email",className:"login__input",placeholder:"Email",name:"email",required:!0,minLength:"7",maxLength:"20",value:o,onChange:function(e){c(e.target.value)}}),Object(f.jsx)("span",{className:"popup__error email-input-error"})]}),Object(f.jsxs)("label",{className:"login__field",children:[Object(f.jsx)("input",{type:"password",className:"login__input",placeholder:"\u041f\u0430\u0440\u043e\u043b\u044c",name:"password",required:!0,minLength:"6",maxLength:"20",value:p,onChange:function(e){j(e.target.value)}}),Object(f.jsx)("span",{className:"popup__error password-input-error"})]}),Object(f.jsx)("button",{type:"submit",className:"login__submit-button",children:"\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c\u0441\u044f"})]}),Object(f.jsx)("p",{className:"login__text",children:"\u0423\u0436\u0435 \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043d\u044b?"}),Object(f.jsx)(i.b,{className:"login__text login__link",to:"/sign-in",children:"\u0412\u043e\u0439\u0442\u0438"})]})}function D(e){var t=e.children;return s.a.useContext(m)?t:Object(f.jsx)(u.a,{to:"/sign-in"})}function R(){var e=Object(u.g)(),t=s.a.useState({}),n=Object(l.a)(t,2),a=n[0],o=n[1],c=s.a.useState({}),i=Object(l.a)(c,2),p=i[0],j=i[1],_=s.a.useState(!1),x=Object(l.a)(_,2),C=x[0],L=x[1],E=s.a.useState(!1),R=Object(l.a)(E,2),U=R[0],I=R[1],q=s.a.useState(!1),z=Object(l.a)(q,2),J=z[0],F=z[1],B=s.a.useState(!1),H=Object(l.a)(B,2),G=H[0],M=H[1],K=s.a.useState(!1),Q=Object(l.a)(K,2),V=Q[0],W=Q[1],X=s.a.useState(!1),Y=Object(l.a)(X,2),Z=Y[0],$=Y[1],ee=s.a.useState(!1),te=Object(l.a)(ee,2),ne=te[0],ae=te[1],se=s.a.useState(!1),oe=Object(l.a)(se,2),ce=oe[0],ie=oe[1],re=s.a.useState(null),le=Object(l.a)(re,2),ue=le[0],pe=le[1],je=s.a.useState([]),de=Object(l.a)(je,2),he=de[0],be=de[1];function me(){W(!1),F(!1),M(!1),$(!1),ae(!1),pe(null),ie(!1)}return s.a.useEffect((function(){d.getUserInfo().then((function(e){o(e)})).catch((function(e){return console.log(e)}))}),[]),s.a.useEffect((function(){d.getPosts().then((function(e){be(e)})).catch((function(e){return console.log(e)}))}),[]),s.a.useEffect((function(){!function(){if(localStorage.getItem("jwt")){var t=localStorage.getItem("jwt");(n=t,fetch("".concat(h,"/users/me"),{method:"GET",headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer ".concat(n)}}).then((function(e){return e.json()})).then((function(e){return e}))).then((function(t){t&&(j(t.data.email),L(!0),e("/"))})).catch((function(e){return console.log(e)}))}var n}()}),[]),Object(f.jsx)(b.Provider,{value:a,children:Object(f.jsx)(m.Provider,{value:C,children:Object(f.jsxs)("div",{className:"page",children:[Object(f.jsx)(O,{currentEmail:p,signOut:function(){localStorage.removeItem("jwt"),L(!1)}}),Object(f.jsxs)(u.d,{children:[Object(f.jsx)(u.b,{path:"/",element:Object(f.jsx)(D,{children:Object(f.jsx)(g,{onEditAvatar:function(){W(!0)},onEditProfile:function(){F(!0)},onAddPost:function(){M(!0)},onCardClick:function(e){pe(e),ae(!0)},onCardLike:function(e){var t=e.likes.some((function(e){return e._id===a._id}));d.changeLikePostStatus(e._id,t).then((function(t){be((function(n){return n.map((function(n){return n._id===e._id?t:n}))}))})).catch((function(e){return console.log(e)}))},onCardDeleteClick:function(e){$(!0),pe(e)},posts:he})})}),Object(f.jsx)(u.b,{exact:!0,path:"/sign-up",element:Object(f.jsx)(A,{handleRegister:function(t,n){(function(e,t){return fetch("".concat(h,"/signup"),{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({password:e,email:t})}).then((function(e){return e.json()})).then((function(e){return e})).catch((function(e){return console.log(e)}))})(t,n).then((function(t){400!==t.statusCode&&(I(!0),ie(!0),e("/sign-in"))})).catch((function(e){return I(!1),ie(!0),console.log(e)}))}})}),Object(f.jsx)(u.b,{exact:!0,path:"/sign-in",element:Object(f.jsx)(T,{handleLogin:function(t,n){(function(e,t){return fetch("".concat(h,"/signin"),{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({email:e,password:t})}).then((function(e){return e.json()})).then((function(e){return localStorage.setItem("jwt",e.token),e})).catch((function(e){return console.log(e)}))})(t,n).then((function(t){t.jwt&&(L(!0),e("/"))})).catch((function(e){return console.log(e)}))}})})]}),Object(f.jsx)(v,{}),Object(f.jsx)(k,{isOpen:J,onClose:me,onUpdateUser:function(e){d.setUserInfo(e).then((function(e){o(e),me()})).catch((function(e){return console.log(e)}))}}),Object(f.jsx)(S,{isOpen:G,onClose:me,onAddPost:function(e){d.addPost(e).then((function(e){be([e].concat(Object(r.a)(he))),me()})).catch((function(e){return console.log(e)}))}}),Object(f.jsx)(P,{isOpen:Z,onClose:me,card:ue,onDeletePost:function(e){d.deletePost(e._id).then((function(){be((function(t){return t.filter((function(t){return t._id!==e._id}))})),me()})).catch((function(e){return console.log(e)}))}}),Object(f.jsx)(y,{isOpen:V,onClose:me,onUpdateAvatar:function(e){d.setUserAvatar(e).then((function(e){o(e),me()})).catch((function(e){return console.log(e)}))}}),Object(f.jsx)(N,{isOpen:ne,card:ue,onClose:me}),Object(f.jsx)(w,{isOpen:ce,onClose:me,statusRegist:U})]})})})}var U=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,20)).then((function(t){var n=t.getCLS,a=t.getFID,s=t.getFCP,o=t.getLCP,c=t.getTTFB;n(e),a(e),s(e),o(e),c(e)}))};c.a.render(Object(f.jsx)(s.a.StrictMode,{children:Object(f.jsx)(i.a,{children:Object(f.jsx)(R,{})})}),document.getElementById("root")),U()}},[[19,1,2]]]);
//# sourceMappingURL=main.5ee0abd5.chunk.js.map