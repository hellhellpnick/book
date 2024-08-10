"use strict";(self.webpackChunkfront=self.webpackChunkfront||[]).push([[223],{9464:function(e,t,i){i.d(t,{Z:function(){return C}});var o=i(1413),n=i(885),r=i(1971),l=i(7025),a=i(8302),s=i(2791),c=i(6871),d=i(5717),m=i(9823),u=i(3216),p=i(194),x=i(4139),h=i(8875),f=i(4897),v=i(1915),g=i(1974),w=i(3385),y=i(260),Z=(0,i(8596).Z)((function(e){return{center:{position:"relative",maxWidth:"980px",width:"100%",margin:"0 auto",display:"flex",flexDirection:"column","@media(max-width: 1024px)":{maxWidth:"100%",width:"100%"}},text:{fontSize:20,fontWeight:500,color:e.colors.text.primary,marginBottom:20,lineHeight:1.5,letterSpacing:1.2,textAlign:"justify"},textAttr:{fontSize:20,fontWeight:500,color:e.colors.text.primary,marginBottom:20,lineHeight:1.5,letterSpacing:1.2,paddingLeft:20,textAlign:"justify"},titleAttr:{fontSize:20,fontWeight:500,color:e.colors.text.main,marginBottom:30,padding:5,display:"inline-block",backgroundColor:e.colors.backgroundArticle.main,textTransform:"uppercase"},title:{fontSize:30,fontWeight:500,color:e.colors.text.main,marginBottom:30,textTransform:"uppercase"},img:{fontSize:16,fontWeight:500,lineHeight:1.2,color:e.colors.text.main,backgroundColor:e.colors.background.second,padding:20,marginBottom:15,overflow:"hidden","@media(max-width: 1024px)":{maxWidth:"100%",width:"100%"}},wrapperPre:{position:"relative"},imgSlider:{position:"relative",fontSize:16,fontWeight:500,lineHeight:1.2,color:e.colors.text.main,backgroundColor:e.colors.background.primary,padding:20,marginBottom:15,overflow:"hidden"},iconCopy:{position:"absolute",top:-40,right:-40,zIndex:2,transition:"all 0.2s ease","@media(min-width: 1024px)":{"&:hover":{transform:"scale(1.1)"}},"@media(max-width: 1024px)":{top:10,right:10}},link:{fontSize:20,color:e.colors.text.second,textDecoration:"none",transition:"all 0.2s ease"},showSlider:{display:"flex",flexDirection:"column",padding:"20px",backgroundColor:e.colors.background.second,position:"fixed",width:"100%",overflowY:"auto",overflowX:"hidden",minHeight:"100vh",top:0,left:0,right:0,bottom:0,zIndex:100,"& .slick-track":{display:"flex !important"},"&::-webkit-scrollbar":{width:10,borderRadius:10},"&::-webkit-scrollbar-track":{backgroundColor:"rgba(255, 255, 255, 0.01)"},"& ::-webkit-scrollbar-thumb":{backgroundColor:"rgba(255, 255, 255, 0.11)",borderRadius:10},"&::-webkit-scrollbar-thumb:hover":{backgroundColor:"rgba(255, 255, 255, 0.1)"},"@media(max-width: 1024px)":{padding:0}},slider:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",maxWidth:"90%",width:"100%",padding:20,"@media(max-width: 1024px)":{maxWidth:"100%"}},sliderAttr:{display:"flex",flexDirection:"column",alignItems:"flex-start",maxWidth:"90%",width:"100%","@media(max-width: 1024px)":{maxWidth:"100%"}},arrowNext:{position:"fixed",bottom:40,right:40,zIndex:2},arrowPrev:{position:"fixed",bottom:40,right:120,zIndex:2},alert:{position:"fixed",right:20,bottom:20,zIndex:100},iconClose:{position:"fixed",top:20,right:40,zIndex:2,"@media(max-width: 1024px)":{right:20}}}})),b=i(184);function j(e){var t=e.onClick,i=Z();return(0,b.jsx)(l.Z,{color:"primary","aria-label":"add an alarm",onClick:t,className:i.arrowNext,children:(0,b.jsx)(w.Z,{})})}function k(e){var t=e.onClick,i=Z();return(0,b.jsx)(l.Z,{color:"primary","aria-label":"add an alarm",onClick:t,className:i.arrowPrev,children:(0,b.jsx)(y.Z,{})})}var N=function(){return{useEventListener:function(e,t){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:window,o=(0,s.useRef)(null);(0,s.useEffect)((function(){o.current=t}),[t]),(0,s.useEffect)((function(){var t=function(e){return o.current(e)};return i.addEventListener(e,t),function(){i.removeEventListener(e,t)}}),[e,i])}}};var C=function(e){var t=e.show,i=e.html,w=void 0!==i&&i,y=e.css,C=void 0!==y&&y,S=(0,c.UO)().id,z=N().useEventListener,A=Z(),T=(0,s.useState)(!1),W=(0,n.Z)(T,2),E=W[0],I=W[1],B=(0,s.useState)(!1),H=(0,n.Z)(B,2),L=H[0],P=H[1],D=(0,s.useRef)(null),R=(0,s.useState)({id:1,title:"",url:"",elements:[]}),q=(0,n.Z)(R,2),M=q[0],_=q[1],F={transition:"opacity ".concat(300,"ms ease-in-out"),opacity:0},O={entering:{opacity:1},entered:{opacity:1},exiting:{opacity:0},exited:{opacity:0}},Q={dots:!1,infinite:!1,speed:500,slidesToShow:1,slidesToScroll:1,nextArrow:(0,b.jsx)(j,{}),prevArrow:(0,b.jsx)(k,{})},U=function(e){var t=e.key,i=document.getElementsByTagName("body")[0];"Escape"===t?(I(!1),i.style.overflow="auto"):"F9"===t&&(I(!0),i.style.overflow="hidden")},X=function(e){var t=e.currentTarget.parentNode,i=t.querySelector("pre"),o=t.querySelector(".pre");console.log(o),navigator.clipboard.writeText((null===i||void 0===i?void 0:i.textContent)||(null===o||void 0===o?void 0:o.innerHTML)),P(!0)};return z("keydown",U),(0,s.useEffect)((function(){L&&setTimeout((function(){P(!1)}),3e3)}),[L]),(0,s.useEffect)((function(){w&&f.o.find((function(e){return e.url===S&&_(e)})),C&&v.Q.find((function(e){return e.url===S&&_(e)})),g.q.find((function(e){return e.url===S&&_(e)}))}),[S,t]),(0,b.jsxs)(r.Z,{component:"div",className:A.center,children:[(0,b.jsx)(x.Transition,{items:E,from:{opacity:0},enter:{opacity:1},leave:{opacity:0},delay:200,children:function(e,t){var i=e.opacity;return t&&(0,b.jsxs)(x.animated.div,{style:{opacity:i.to({range:[0,1],output:[0,1]})},className:A.showSlider,children:[(0,b.jsx)(l.Z,{color:"primary",onClick:function(){return U({key:"Escape"})},className:A.iconClose,children:(0,b.jsx)(m.Z,{})}),(0,b.jsxs)(d.Z,(0,o.Z)((0,o.Z)({},Q),{},{children:[M.elements.map((function(e){return(0,b.jsxs)(r.Z,{component:"div",className:A.slider,children:[(0,b.jsx)(a.Z,{component:"h3",className:A.title,children:null===e||void 0===e?void 0:e.title}),(0,b.jsx)(r.Z,{component:"p",className:A.text,children:null===e||void 0===e?void 0:e.p}),(null===e||void 0===e?void 0:e.attributes)&&(null===e||void 0===e?void 0:e.attributes.length)>0&&(null===e||void 0===e?void 0:e.attributes.map((function(e){return(0,b.jsxs)(r.Z,{component:"div",className:A.slider,children:[(0,b.jsx)(a.Z,{component:"h3",className:A.titleAttr,children:e.title}),(0,b.jsx)(r.Z,{component:"p",className:A.textAttr,children:e.p})]},e.id)}))),(null===e||void 0===e?void 0:e.pre)&&(0,b.jsxs)(r.Z,{component:"div",className:A.wrapperPre,children:[(0,b.jsx)(l.Z,{color:"primary",onClick:X,className:A.iconCopy,children:(0,b.jsx)(p.Z,{})}),(0,b.jsx)(r.Z,{component:"pre",className:A.imgSlider,children:null===e||void 0===e?void 0:e.pre})]})]},null===e||void 0===e?void 0:e.id)})),(0,b.jsxs)(r.Z,{component:"div",className:A.slider,children:[(0,b.jsx)(a.Z,{component:"h3",className:A.title,children:"\u0421\u043f\u0430\u0441\u0438\u0431\u043e \u0437\u0430 \u0432\u0430\u0448\u0435 \u0432\u043d\u0438\u043c\u0430\u043d\u0438\u0435!"}),(0,b.jsx)(r.Z,{component:"p",className:A.text,children:"\u0414\u043e\u043c\u0430\u0448\u043a\u0430 \u043d\u0435 \u0431\u0443\u0434\u0435\u0442 \u0441\u043a\u0443\u0447\u043d\u043e\u0439 :)"})]})]}))]})}}),!!M.elements.length&&M.elements.map((function(e){return(0,b.jsxs)(r.Z,{component:"div",children:[(0,b.jsx)(a.Z,{component:"h3",className:A.title,children:null===e||void 0===e?void 0:e.title}),(0,b.jsx)(r.Z,{component:"p",className:A.text,children:null===e||void 0===e?void 0:e.p}),(null===e||void 0===e?void 0:e.attributes)&&(null===e||void 0===e?void 0:e.attributes.length)>0&&(null===e||void 0===e?void 0:e.attributes.map((function(e){return(0,b.jsxs)(r.Z,{component:"div",className:A.sliderAttr,children:[(0,b.jsx)(a.Z,{component:"h3",className:A.titleAttr,children:e.title}),(0,b.jsx)(r.Z,{component:"p",className:A.textAttr,children:e.p})]},e.id)}))),(null===e||void 0===e?void 0:e.html)&&(0,b.jsxs)(r.Z,{component:"div","aria-label":"pre",className:A.wrapperPre,children:[(0,b.jsx)(l.Z,{color:"primary",onClick:X,className:A.iconCopy,children:(0,b.jsx)(p.Z,{})}),(0,b.jsx)(r.Z,{component:"div",dangerouslySetInnerHTML:{__html:null===e||void 0===e?void 0:e.html},className:"".concat(A.img," pre")})]}),(null===e||void 0===e?void 0:e.pre)&&(0,b.jsxs)(r.Z,{component:"div",className:A.wrapperPre,children:[(0,b.jsx)(l.Z,{color:"primary",onClick:X,className:A.iconCopy,children:(0,b.jsx)(p.Z,{})}),(0,b.jsx)(r.Z,{component:"pre",className:"".concat(A.img," pre"),children:null===e||void 0===e?void 0:e.pre})]})]},(null===e||void 0===e?void 0:e.id)||(new Date).getTime())})),(0,b.jsx)(h.ZP,{nodeRef:D,in:L,timeout:300,children:function(e){return(0,b.jsx)(u.Z,{variant:"filled",severity:"success",ref:D,className:A.alert,style:(0,o.Z)((0,o.Z)({},F),O[e]),children:"Copy success!"})}})]})}},1223:function(e,t,i){i.r(t);i(2791);var o=i(3012),n=i(9464),r=i(184);t.default=function(e){var t=e.title,i=e.show;return(0,(0,o.Z)().ChangeTitle)(t),(0,r.jsx)(n.Z,{show:i})}}}]);
//# sourceMappingURL=223.adfcf6fb.chunk.js.map