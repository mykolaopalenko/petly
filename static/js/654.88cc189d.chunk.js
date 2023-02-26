"use strict";(self.webpackChunkpet_support_front=self.webpackChunkpet_support_front||[]).push([[654],{4311:function(n,e,t){t.d(e,{t:function(){return l}});var r,o,i=t(168),a=t(6444),s=t(3271),l=(a.ZP.div(r||(r=(0,i.Z)(["\n  position: relative;\n  padding: 0;\n"]))),a.ZP.button(o||(o=(0,i.Z)(["\n  position: absolute;\n  right: 10px;\n  bottom: 8px;\n  transform: translateY(-15%);\n  border: none;\n  background: none;\n  font-size: 20px;\n  color: ",";\n  cursor: pointer;\n  z-index: 100;\n"])),s.r.colors.secondaryText))},3051:function(n,e,t){t.d(e,{AB:function(){return f},Bc:function(){return j},Vf:function(){return v},W4:function(){return y},hz:function(){return g},n5:function(){return Z},nv:function(){return w},vw:function(){return b}});var r,o,i,a,s,l,c,d,u=t(168),p=t(6444),m=t(5705),h=t(3271),x=t(1087),f=p.ZP.div(r||(r=(0,u.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 85%;\n"]))),g=p.ZP.div(o||(o=(0,u.Z)(["\n  position: relative;\n  overflow-y: auto;\n  background-color: ",";\n  border-radius: 40px;\n  padding: 60px 80px 40px 80px;\n  width: 618px;\n\n  box-shadow: ",";\n  "," {\n    margin-top: 0;\n  }\n  "," {\n    margin-top: 110px;\n  }\n  "," {\n    background-color: transparent;\n    box-shadow: none;\n    width: 100%;\n    padding: 0 0 20px 0;\n  }\n"])),h.r.colors.cardBackground,h.r.boxShadow.second,h.r.mq.desktop,h.r.mq.tabletOnly,h.r.mq.mobileOnly),b=p.ZP.h1(i||(i=(0,u.Z)(["\n  font-family: ",";\n  font-weight: ",";\n  font-size: 36px;\n  line-height: 49px;\n  text-align: center;\n  align-items: center;\n  color: ",";\n  "," {\n    font-size: ",";\n    line-height: 32px;\n  }\n"])),h.r.fontFamily.manrope,h.r.fontWeight.medium,h.r.colors.mainText,h.r.mq.mobileOnly,h.r.fontSizes.l),Z=(0,p.ZP)(m.l0)(a||(a=(0,u.Z)(["\n  display: flex;\n  flex-direction: column;\n  margin-top: 40px;\n  /* margin-bottom: 40px;  */\n  /* gap: 30px; */\n"]))),y=p.ZP.div(s||(s=(0,u.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n  margin-bottom: 50px;\n  margin-top: 40px;\n  width: 100%;\n"]))),w=p.ZP.p(l||(l=(0,u.Z)(["\n  font-family: ",";\n  font-weight: ",";\n  font-size: ",";\n  line-height: 16px;\n  align-items: center;\n  text-align: center;\n  color: ",";\n"])),h.r.fontFamily.manrope,h.r.fontWeight.normal,h.r.fontSizes.xxxs,h.r.colors.secondaryText),v=(0,p.ZP)(x.OL)(c||(c=(0,u.Z)(["\n  color: #3091eb;\n  text-decoration: none;\n"]))),j=p.ZP.div(d||(d=(0,u.Z)(["\n  position: absolute;\n  color: red;\n  font-size: 14px;\n  text-align: center;\n  width: 100%;\n  left: 50%;\n  transform: translateX(-50%);\n  top: 120px;\n  "," {\n    top: 50px;\n    font-size: 12px;\n  }\n"])),h.r.mq.mobileOnly)},3654:function(n,e,t){t.r(e),t.d(e,{default:function(){return F}});var r,o,i=t(2791),a=t(9439),s=t(5048),l=t(7689),c=t(8419),d=t(5705),u=t(8007),p={name:"",city:"",phone:"",email:"",password:"",confirmPassword:""},m=u.Ry().shape({email:u.Z_().email('Please enter a valid email address, example: "mail@mail.com"').matches(/^([a-zA-Z][\w+-]+(?:\.\w+)?)@([\w-]+(?:\.[a-zA-Z]{2,10})+)$/,'Please enter a valid email address, example: "mail@mail.com"').required("Email is required").min(12,"Email should be at least 12 characters long").max(63,"Email should be up to 63 characters long"),password:u.Z_().matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{7,}$/,"7 characters, 1 uppercase, 1 lowercase, 1 number").min(7,"Password should be at least 7 characters long").max(32,"Password should be up to 32 characters long").required("Password is required"),confirmPassword:u.Z_().oneOf([u.iH("password"),null],"Passwords must match").required("Please confirm your password")}),h=u.Ry().shape({name:u.Z_().min(3,"Name should have at least 3 characters").matches(/^[a-zA-Z\u0430-\u044f\u0410-\u042f\u0456\u0406\u0457\u0407\u0491\u0490]+(?: [a-zA-Z\u0430-\u044f\u0410-\u042f\u0456\u0406\u0457\u0407\u0491\u0490]+)*$/,"Only letters can be accepted").max(12,"Name should be up to 12 characters long").required("Name is required"),city:u.Z_().matches(/^[a-zA-Z\u0430-\u044f\u0410-\u042f\u0456\u0406\u0457\u0407\u0491\u0490]+(?:[-\s]?[a-zA-Z\u0430-\u044f\u0410-\u042f\u0456\u0406\u0457\u0407\u0491\u0490]+)*,\s*[a-zA-Z\u0430-\u044f\u0410-\u042f\u0456\u0406\u0457\u0407\u0491\u0490'\u2019\s-]+$/,'Should be "City, Region" separated by comma, only letters can be accepted').min(3,"City should have at least 3 characters").required("City is required"),phone:u.Z_().matches(/^\+380\d{9}$/,"Number should begin with +380 and contain 13 digits").min(13,"Phone number should be 13 digits").max(13,"Phone number should be 13 digits").required("Phone number is required")}),x=t(6307),f=t(4311),g=t(1213),b=t(3329),Z=function(){var n=(0,i.useState)(!1),e=(0,a.Z)(n,2),t=e[0],r=e[1],o=t?"text":"password";return(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(x.Z,{name:"email",type:"email",placeholder:"Email",autocomplete:"email"}),(0,b.jsx)(x.Z,{name:"password",type:o,placeholder:"Password",autocomplete:"new-password",children:(0,b.jsx)(f.t,{type:"button",onClick:function(){r(!t)},children:t?(0,b.jsx)(g.xs2,{}):(0,b.jsx)(g.hdl,{})})}),(0,b.jsx)(x.Z,{name:"confirmPassword",type:o,placeholder:"Confirm Password",autocomplete:"new-password"})]})},y=t(7092),w=t(168),v=t(6444),j=t(3271),P=v.ZP.ul(r||(r=(0,w.Z)(["\n  position: absolute;\n  top: 279px;\n  left: 100px;\n  margin-top: 4px;\nlist-style-type: none;\n    border: 1px solid red;\n    max-height: 120px;\n    min-height: 20px;\n    overflow-y: scroll;\n  width: 420px;\n  list-style: none;\n  background-color: #ffffff;\n  border: 1px solid #e5e5e5;\n  border-radius: 4px;\n  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);\n  z-index: 1;\n  "," {\n    top: 150px;\n    le\n  }\n"])),j.r.mq.mobileOnly),z=v.ZP.li(o||(o=(0,w.Z)(["\n  padding: 4px 8px;\n  font-size: 14px;\n  line-height: 1.5;\n  color: #333333;\n  cursor: pointer;\n\n  &:hover {\n    background-color: #f0f0f0;\n  }\n"]))),q=function(n){var e=n.value,t=n.setFieldValue,r=(0,i.useState)([]),o=(0,a.Z)(r,2),s=o[0],l=o[1];(0,i.useEffect)((function(){if(e||""){var n=y.filter((function(n){return n.city.toLowerCase().startsWith(e.toLowerCase())})).map((function(n){var e=n.city,t=n.admin_name;return"".concat(e,", ").concat(t)}));l(n)}else l([])}),[e]);return(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(x.Z,{name:"name",type:"name",placeholder:"Name"}),(0,b.jsx)(x.Z,{name:"city",type:"city",placeholder:"City, Region"}),s.length>0&&(0,b.jsx)(P,{children:s.map((function(n,e){return(0,b.jsx)(z,{onClick:function(){return function(n){t("city",n),l([])}(n)},children:n},e)}))}),(0,b.jsx)(x.Z,{name:"phone",type:"phone",placeholder:"Phone +380123456789"})]})},k=t(3051),A=t(4827),C=function(){var n=(0,i.useState)(1),e=(0,a.Z)(n,2),t=e[0],r=e[1],o=(0,c.F1)(),u=(0,a.Z)(o,2),x=u[0],f=u[1],g=f.isError,y=f.error,w=(0,l.s0)(),v=(0,s.v9)((function(n){return n.user})).isAuth,j=function(){r(t-1)};return(0,i.useEffect)((function(){v&&(console.log("Congratulations! You are successfully signed up!"),w("/user"))})),(0,b.jsx)(k.AB,{children:(0,b.jsxs)(k.hz,{children:[(0,b.jsx)(k.vw,{children:"Registration"}),(0,b.jsx)(d.J9,{initialValues:p,validationSchema:1===t?m:h,onSubmit:function(n,e){if((0,e.setSubmitting)(!1),t<2)r(t+1);else{var o={name:n.name,city:n.city,phone:n.phone,email:n.email,password:n.password};x(o)}},children:function(n){var e=n.isSubmitting,r=n.values,o=n.setFieldValue;return(0,b.jsxs)(k.n5,{children:[1===t&&(0,b.jsx)(Z,{}),2===t&&(0,b.jsx)(q,{value:r.city,setFieldValue:o}),(0,b.jsxs)(k.W4,{children:[(0,b.jsx)(A.Z,{name:"filled",type:"submit",disabled:e,children:t<2?"Next":"Register"}),t>1&&(0,b.jsx)(A.Z,{name:"transparent",onClick:j,children:"Back"})]})]})}}),(0,b.jsxs)(k.nv,{children:["Already have an account? ",(0,b.jsx)(k.Vf,{to:"/login",children:"Login"})]}),g&&(0,b.jsx)(k.Bc,{children:y.data.message})]})})},S=t(1028),_=t(5903),F=function(){return(0,b.jsx)(S.Z,{children:(0,b.jsx)(_.Z,{children:(0,b.jsx)(C,{})})})}}}]);
//# sourceMappingURL=654.88cc189d.chunk.js.map