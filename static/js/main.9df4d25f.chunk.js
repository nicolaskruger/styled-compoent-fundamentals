(this["webpackJsonpstyled-component-fundamentals"]=this["webpackJsonpstyled-component-fundamentals"]||[]).push([[0],{28:function(e,n,t){},29:function(e,n,t){},37:function(e,n,t){"use strict";t.r(n);var c,r,o,i,a,s,d,l,b,j,h,u,m,p,O,x,g=t(1),f=t.n(g),v=t(19),T=t.n(v),E=(t(28),t(29),t(9)),y=t(4),N={HOME:"/",GET_STARTED:"/get-started",ADAPT_BASED_ON_PROPS:"/adapt-base-on-props",EXTEND_STYLES:"/extends-styles",STYLE_ANY_COMPONENT:"/style-any-compnent",PASSED_PROPS:"/passed-props",PSEUDO:"/pseudo",GLOBAL_STYLE:"/global-style",ATTACHING_ADDITIONAL_PROPS:"/attaching_additional_props",ANIMATIONS:"/animation",THEME:"/theme",THEME_FUNCTION:"/theme-function",REFERING_TO_OTHER_COMPONENT:"/refering-to-other-component",STYLE_OBJECTS:"/style-objects"},S=t(3),_=t(2),w=t(0),C=_.c.h1(c||(c=Object(S.a)(["\n  font-size: 1.5em;\n  text-align: center;\n  color: palevioletred;\n"]))),R=_.c.section(r||(r=Object(S.a)(["\n  padding: 4em;\n  background: papayawhip;\n"]))),A=function(){return Object(w.jsx)(R,{children:Object(w.jsx)(C,{children:"Hello word!"})})},P=_.c.button(o||(o=Object(S.a)(["\n  background: ",";\n  color: ",";\n  font-size: 1em;\n  margin: 1em;\n  padding: 0.25em 1em;\n  border: 2px solid palevioletred;\n  border-radius: 3px;\n"])),(function(e){return e.primary?"palevioletred":"white"}),(function(e){return e.primary?"white":"palevioletred"})),k=function(){return Object(w.jsxs)("div",{children:[Object(w.jsx)(P,{children:"Normal"}),Object(w.jsx)(P,{primary:!0,children:"Primary"})]})},L=t(14),H=_.c.button(i||(i=Object(S.a)(["\n  color: palevioletred;\n  font-size: 1em;\n  margin: 1em;\n  padding: 0.25em 1em;\n  border: 2px solid palevioletred;\n  border-radius: 3px;\n"]))),M=Object(_.c)(H)(a||(a=Object(S.a)(["\n  color: tomato;\n  border-color: tomato;\n"]))),z=function(e){return Object(w.jsx)(H,Object(L.a)(Object(L.a)({},e),{},{children:e.children.split("").reverse()}))},I=function(){return Object(w.jsxs)("div",{children:[Object(w.jsx)(H,{children:"Normal"}),Object(w.jsx)(M,{children:"Tomato"}),Object(w.jsx)(H,{as:"a",href:"#",children:"Link with Button styles"}),Object(w.jsx)(M,{as:"a",href:"#",children:"Link with Tomato Button styles"}),Object(w.jsx)(H,{as:z,children:"Custom Button with Normal Button styles"})]})},D=function(e){var n=e.className,t=e.children;return Object(w.jsx)("a",{className:n,children:t})},B=Object(_.c)(D)(s||(s=Object(S.a)(["\n    color: palevioletred;\n    font-weight: bold;\n"]))),Y=function(){return Object(w.jsxs)("div",{children:[Object(w.jsx)(D,{children:"Unstyled, boring Link"}),Object(w.jsx)("br",{}),Object(w.jsx)(B,{children:" Styled, exciting Link"})]})},V=_.c.input(d||(d=Object(S.a)(["\n    padding: 0.5em;\n    margin: 0.5em;\n    color: ",";\n    background: papayawhip;\n    border: none;\n    border-radius: 3px;\n"])),(function(e){return e.inputColor||"palevioletred"})),F=function(){return Object(w.jsxs)("div",{children:[Object(w.jsx)(V,{defaultValue:"@probablyup",type:"text"}),Object(w.jsx)(V,{defaultValue:"@geelen",type:"text",inputColor:"rebeccapurple"})]})},G=_.c.div.attrs((function(){return{tabIndex:0}}))(l||(l=Object(S.a)(['\n  color: blue;\n\n  &:hover {\n    color: red; // <Thing> when hovered\n  };\n\n  & ~ & {\n    background: tomato; // <Thing> as a sibling of <Thing>, but maybe not directly next to it\n  }\n\n  & + & {\n    background: lime; // <Thing> next to <Thing>\n  }\n\n  &.something {\n    background: orange; // <Thing> tagged with an additional CSS class ".something"\n  }\n\n  .something-else & {\n    border: 1px solid; // <Thing> inside another element labeled ".something-else"\n  }\n']))),U=_.c.div(b||(b=Object(S.a)(['\n  color: blue;\n\n  .something {\n    border: 1px solid; // an element labeled ".something" inside <Thing>\n    display: block;\n  }\n']))),J=function(){return Object(w.jsxs)(w.Fragment,{children:[Object(w.jsx)(G,{children:"Hello world!"}),Object(w.jsx)(G,{children:"How ya doing?"}),Object(w.jsx)(G,{className:"something",children:"The sun is shining..."}),Object(w.jsx)("div",{children:"Pretty nice day today."}),Object(w.jsx)(G,{children:"Don't you think?"}),Object(w.jsx)("div",{className:"something-else",children:Object(w.jsx)(G,{children:"Splendid."})}),Object(w.jsxs)(U,{children:[Object(w.jsx)("label",{htmlFor:"foo-button",className:"something",children:"Mystery button"}),Object(w.jsx)("button",{id:"foo-button",children:"What do I do?"})]})]})},X=_.c.div(j||(j=Object(S.a)(["\n    && {\n        color: blue;\n    }\n"]))),q=Object(_.b)(h||(h=Object(S.a)(["\n  div"," {\n    color: red;\n  }\n"])),X),W=function(){return Object(w.jsx)(w.Fragment,{children:Object(w.jsx)(q,{children:Object(w.jsx)(X,{children:"I'm blue, da ba dee da ba daa"})})})},K=_.c.input.attrs((function(e){return{type:"text",size:e.size||"1em"}}))(u||(u=Object(S.a)(["\n    color: palevioletred;\n  font-size: 1em;\n  border: 2px solid palevioletred;\n  border-radius: 3px;\n  /* here we use the dynamically computed prop */\n  margin: ",";\n  padding: ",";\n"])),(function(e){return e.size}),(function(e){return e.size})),Q=Object(_.c)(K).attrs({type:"password"})(m||(m=Object(S.a)(["\n    border: 2px solid aqua;\n"]))),Z=function(){return Object(w.jsxs)("div",{children:[Object(w.jsx)(K,{placeholder:"A small text input"}),Object(w.jsx)("br",{}),Object(w.jsx)(K,{placeholder:"A bigger text input",size:"2em"}),Object(w.jsx)("br",{}),Object(w.jsx)(Q,{placeholder:"password"})]})},$=Object(_.d)(p||(p=Object(S.a)(["\n    from {\n        transform: rotate(0deg);\n    }\n    to {\n        transform: rotate(360deg);\n    }\n"]))),ee=_.c.div(O||(O=Object(S.a)(["\n    display: inline-block;\n    animation: "," 2s linear infinite;\n    padding: 2rem 1rem;\n    font-size: 1.2rem;\n"])),$),ne=function(){return Object(w.jsx)(ee,{children:"< \ud83d\udc85\ud83c\udffe >"})},te=_.c.button(x||(x=Object(S.a)(["\n  font-size: 1em;\n  margin: 1em;\n  padding: 0.25em 1em;\n  border-radius: 3px;\n\n  /* Color the border and text with theme.main */\n  color: ",";\n  border: 2px solid ",";\n"])),(function(e){return e.theme.main}),(function(e){return e.theme.main}));te.defaultProps={theme:{main:"palevioletred",bg:"",fg:"fg"}};var ce,re,oe,ie,ae,se,de,le={main:"mediumseagreen",bg:"",fg:"fg"},be=function(){return Object(w.jsxs)("div",{children:[Object(w.jsx)(te,{children:"Normal"}),Object(w.jsx)(_.a,{theme:le,children:Object(w.jsx)(te,{children:"Themed"})})]})},je=_.c.button(ce||(ce=Object(S.a)(["\n  color: ",";\n  border: 2px solid ",";\n  background: ",";\n\n  font-size: 1em;\n  margin: 1em;\n  padding: 0.25em 1em;\n  border-radius: 3px;\n"])),(function(e){return e.theme.fg}),(function(e){return e.theme.fg}),(function(e){return e.theme.bg})),he={fg:"palevioletred",bg:"white",main:"main"},ue=function(e){return{fg:e.bg,bg:e.fg,main:e.main}},me=function(){return Object(w.jsx)(_.a,{theme:he,children:Object(w.jsxs)("div",{children:[Object(w.jsx)(je,{children:"Default Theme"}),Object(w.jsx)(_.a,{theme:ue,children:Object(w.jsx)(je,{children:"Inverted Theme"})})]})})},pe=_.c.a(re||(re=Object(S.a)(["\n  display: flex;\n  align-items: center;\n  padding: 5px 10px;\n  background: papayawhip;\n  color: palevioletred;\n"]))),Oe=_.c.svg(oe||(oe=Object(S.a)(["\n  flex: none;\n  transition: fill 0.25s;\n  width: 48px;\n  height: 48px;\n\n  ",":hover & {\n    fill: rebeccapurple;\n  }\n"])),pe),xe=_.c.span(ie||(ie=Object(S.a)(["\n  display: flex;\n  align-items: center;\n  line-height: 1.2;\n\n  &::before {\n    content: '\u25c0';\n    margin: 0 10px;\n  }\n"]))),ge=function(){return Object(w.jsxs)(pe,{href:"#",children:[Object(w.jsx)(Oe,{viewBox:"0 0 20 20",children:Object(w.jsx)("path",{d:"M10 15h8c1 0 2-1 2-2V3c0-1-1-2-2-2H2C1 1 0 2 0 3v10c0 1 1 2 2 2h4v4l4-4zM5 7h2v2H5V7zm4 0h2v2H9V7zm4 0h2v2h-2V7z"})}),Object(w.jsx)(xe,{children:"Hovering my parent changes my style!"})]})},fe=_.c.div({background:"palevioletred",height:"50px",width:"50px"}),ve=_.c.div((function(e){return{background:e.background,height:"50px",width:"50px"}})),Te=function(){return Object(w.jsxs)("div",{children:[Object(w.jsx)(fe,{}),Object(w.jsx)(ve,{background:"blue"})]})},Ee=_.c.ul(ae||(ae=Object(S.a)([""]))),ye=_.c.li(se||(se=Object(S.a)([""]))),Ne=function(){return Object(w.jsx)(Ee,{children:Object.keys(N).map((function(e){return N[e]})).map((function(e){return Object(w.jsx)(ye,{children:Object(w.jsx)(E.b,{to:e,children:e})})}))})},Se=function(e){return Object(w.jsx)(y.a,Object(L.a)({},e))},_e=N.HOME,we=N.GET_STARTED,Ce=N.ADAPT_BASED_ON_PROPS,Re=N.EXTEND_STYLES,Ae=N.STYLE_ANY_COMPONENT,Pe=N.PASSED_PROPS,ke=N.PSEUDO,Le=N.GLOBAL_STYLE,He=N.ATTACHING_ADDITIONAL_PROPS,Me=N.ANIMATIONS,ze=N.THEME,Ie=N.THEME_FUNCTION,De=N.REFERING_TO_OTHER_COMPONENT,Be=N.STYLE_OBJECTS,Ye=function(e){var n=e.children,t=[{CustomRoute:Se,component:Te,exact:!0,path:Be},{CustomRoute:Se,component:ge,exact:!0,path:De},{CustomRoute:Se,component:me,exact:!0,path:Ie},{CustomRoute:Se,component:be,exact:!0,path:ze},{CustomRoute:Se,component:ne,exact:!0,path:Me},{CustomRoute:Se,component:Z,exact:!0,path:He},{CustomRoute:Se,component:W,exact:!0,path:Le},{CustomRoute:Se,component:J,exact:!1,path:ke},{CustomRoute:Se,component:F,exact:!1,path:Pe},{CustomRoute:Se,component:Y,exact:!1,path:Ae},{CustomRoute:Se,component:I,exact:!1,path:Re},{CustomRoute:Se,component:k,exact:!1,path:Ce},{CustomRoute:Se,component:A,exact:!1,path:we},{CustomRoute:Se,component:Ne,exact:!1,path:_e}];return Object(w.jsxs)(E.a,{children:[Object(w.jsx)(y.c,{children:t.map((function(e,n){var t=e.component,c=e.exact,r=e.path,o=e.CustomRoute;return Object(w.jsx)(o,{component:t,exact:c,path:r},n)}))}),n]})},Ve=_.c.div(de||(de=Object(S.a)(["\n     position: fixed;\n    top: 10px;\n    right: 10px;\n"]))),Fe=function(){return Object(w.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg","enable-background":"new 0 0 24 24",height:"24px",viewBox:"0 0 24 24",width:"24px",fill:"#000000",children:[Object(w.jsx)("rect",{fill:"none",height:"24",width:"24"}),Object(w.jsx)("path",{d:"M12,3L6,7.58V6H4v3.11L1,11.4l1.21,1.59L4,11.62V21h16v-9.38l1.79,1.36L23,11.4L12,3z M18,19h-5v-4h-2v4H6v-8.9l6-4.58 l6,4.58V19z M10,1c0,1.66-1.34,3-3,3C6.45,4,6,4.45,6,5H4c0-1.66,1.34-3,3-3c0.55,0,1-0.45,1-1H10z"})]})},Ge=function(){return Object(w.jsx)(Ve,{children:Object(w.jsx)(E.b,{to:N.HOME,children:Object(w.jsx)(Fe,{})})})};var Ue=function(){return Object(w.jsx)(w.Fragment,{children:Object(w.jsx)(Ye,{children:Object(w.jsx)(Ge,{})})})};T.a.render(Object(w.jsx)(f.a.StrictMode,{children:Object(w.jsx)(Ue,{})}),document.getElementById("root"))}},[[37,1,2]]]);
//# sourceMappingURL=main.9df4d25f.chunk.js.map