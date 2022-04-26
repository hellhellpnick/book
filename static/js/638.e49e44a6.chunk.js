"use strict";(self.webpackChunkfront=self.webpackChunkfront||[]).push([[638],{6638:function(t,n,e){e.r(n),e.d(n,{default:function(){return B}});var i=e(1971),o=e(2791),a=e(6871),r=e(885),s=e(8302),c=e(2067),l=e(7462),u=e(5987),d=e(8182),h=e(8317),p=e(1122),m=o.forwardRef((function(t,n){var e=t.classes,i=t.className,a=t.color,r=void 0===a?"default":a,s=t.component,c=void 0===s?"li":s,h=t.disableGutters,m=void 0!==h&&h,f=t.disableSticky,v=void 0!==f&&f,x=t.inset,y=void 0!==x&&x,g=(0,u.Z)(t,["classes","className","color","component","disableGutters","disableSticky","inset"]);return o.createElement(c,(0,l.Z)({className:(0,d.Z)(e.root,i,"default"!==r&&e["color".concat((0,p.Z)(r))],y&&e.inset,!v&&e.sticky,!m&&e.gutters),ref:n},g))})),f=(0,h.Z)((function(t){return{root:{boxSizing:"border-box",lineHeight:"48px",listStyle:"none",color:t.palette.text.secondary,fontFamily:t.typography.fontFamily,fontWeight:t.typography.fontWeightMedium,fontSize:t.typography.pxToRem(14)},colorPrimary:{color:t.palette.primary.main},colorInherit:{color:"inherit"},gutters:{paddingLeft:16,paddingRight:16},inset:{paddingLeft:72},sticky:{position:"sticky",top:0,zIndex:1,backgroundColor:"inherit"}}}),{name:"MuiListSubheader"})(m),v=e(4496),x=o.forwardRef((function(t,n){var e=t.classes,i=t.className,a=(0,u.Z)(t,["classes","className"]),r=o.useContext(v.Z);return o.createElement("div",(0,l.Z)({className:(0,d.Z)(e.root,i,"flex-start"===r.alignItems&&e.alignItemsFlexStart),ref:n},a))})),y=(0,h.Z)((function(t){return{root:{minWidth:56,color:t.palette.action.active,flexShrink:0,display:"inline-flex"},alignItemsFlexStart:{marginTop:8}}}),{name:"MuiListItemIcon"})(x),g=o.forwardRef((function(t,n){var e=t.children,i=t.classes,a=t.className,r=t.disableTypography,c=void 0!==r&&r,h=t.inset,p=void 0!==h&&h,m=t.primary,f=t.primaryTypographyProps,x=t.secondary,y=t.secondaryTypographyProps,g=(0,u.Z)(t,["children","classes","className","disableTypography","inset","primary","primaryTypographyProps","secondary","secondaryTypographyProps"]),E=o.useContext(v.Z).dense,Z=null!=m?m:e;null==Z||Z.type===s.Z||c||(Z=o.createElement(s.Z,(0,l.Z)({variant:E?"body2":"body1",className:i.primary,component:"span",display:"block"},f),Z));var b=x;return null==b||b.type===s.Z||c||(b=o.createElement(s.Z,(0,l.Z)({variant:"body2",className:i.secondary,color:"textSecondary",display:"block"},y),b)),o.createElement("div",(0,l.Z)({className:(0,d.Z)(i.root,a,E&&i.dense,p&&i.inset,Z&&b&&i.multiline),ref:n},g),Z,b)})),E=(0,h.Z)({root:{flex:"1 1 auto",minWidth:0,marginTop:4,marginBottom:4},multiline:{marginTop:6,marginBottom:6},dense:{},inset:{paddingLeft:56},primary:{},secondary:{}},{name:"MuiListItemText"})(g),Z=e(8875),b=e(812),j=e(6043),N=e(3364),k=e(9806),S=o.forwardRef((function(t,n){var e=t.children,i=t.classes,a=t.className,s=t.collapsedHeight,c=t.collapsedSize,h=void 0===c?"0px":c,p=t.component,m=void 0===p?"div":p,f=t.disableStrictModeCompat,v=void 0!==f&&f,x=t.in,y=t.onEnter,g=t.onEntered,E=t.onEntering,S=t.onExit,C=t.onExited,T=t.onExiting,H=t.style,w=t.timeout,L=void 0===w?b.x9.standard:w,I=t.TransitionComponent,z=void 0===I?Z.ZP:I,M=(0,u.Z)(t,["children","classes","className","collapsedHeight","collapsedSize","component","disableStrictModeCompat","in","onEnter","onEntered","onEntering","onExit","onExited","onExiting","style","timeout","TransitionComponent"]),O=(0,N.Z)(),R=o.useRef(),D=o.useRef(null),V=o.useRef(),P="number"===typeof(s||h)?"".concat(s||h,"px"):s||h;o.useEffect((function(){return function(){clearTimeout(R.current)}}),[]);var W=O.unstable_strictMode&&!v,_=o.useRef(null),A=(0,k.Z)(n,W?_:void 0),F=function(t){return function(n,e){if(t){var i=W?[_.current,n]:[n,e],o=(0,r.Z)(i,2),a=o[0],s=o[1];void 0===s?t(a):t(a,s)}}},B=F((function(t,n){t.style.height=P,y&&y(t,n)})),U=F((function(t,n){var e=D.current?D.current.clientHeight:0,i=(0,j.C)({style:H,timeout:L},{mode:"enter"}).duration;if("auto"===L){var o=O.transitions.getAutoHeightDuration(e);t.style.transitionDuration="".concat(o,"ms"),V.current=o}else t.style.transitionDuration="string"===typeof i?i:"".concat(i,"ms");t.style.height="".concat(e,"px"),E&&E(t,n)})),G=F((function(t,n){t.style.height="auto",g&&g(t,n)})),X=F((function(t){var n=D.current?D.current.clientHeight:0;t.style.height="".concat(n,"px"),S&&S(t)})),J=F(C),K=F((function(t){var n=D.current?D.current.clientHeight:0,e=(0,j.C)({style:H,timeout:L},{mode:"exit"}).duration;if("auto"===L){var i=O.transitions.getAutoHeightDuration(n);t.style.transitionDuration="".concat(i,"ms"),V.current=i}else t.style.transitionDuration="string"===typeof e?e:"".concat(e,"ms");t.style.height=P,T&&T(t)}));return o.createElement(z,(0,l.Z)({in:x,onEnter:B,onEntered:G,onEntering:U,onExit:X,onExited:J,onExiting:K,addEndListener:function(t,n){var e=W?t:n;"auto"===L&&(R.current=setTimeout(e,V.current||0))},nodeRef:W?_:void 0,timeout:"auto"===L?null:L},M),(function(t,n){return o.createElement(m,(0,l.Z)({className:(0,d.Z)(i.root,i.container,a,{entered:i.entered,exited:!x&&"0px"===P&&i.hidden}[t]),style:(0,l.Z)({minHeight:P},H),ref:A},n),o.createElement("div",{className:i.wrapper,ref:D},o.createElement("div",{className:i.wrapperInner},e)))}))}));S.muiSupportAuto=!0;var C=(0,h.Z)((function(t){return{root:{height:0,overflow:"hidden",transition:t.transitions.create("height")},entered:{height:"auto",overflow:"visible"},hidden:{visibility:"hidden"},wrapper:{display:"flex"},wrapperInner:{width:"100%"}}}),{name:"MuiCollapse"})(S),T=e(6387),H=e(3928),w=e(5374),L=e(3607),I=e(8475),z=e(5678),M=e(5172),O=e(1292),R=e(5686),D=e(3504),V=e(8596),P=(0,V.Z)((function(t){return{navWrapper:{position:"fixed",left:0,top:0,bottom:0,display:"flex",flexDirection:"column",justifyContent:"flex-start",alignItems:"flex-start",minHeight:"100vh",height:"100%",overflowX:"hidden",overflowY:"visible",maxWidth:"250px",width:"100%",padding:"20px 0",backgroundColor:t.colors.background.main,transition:"all 0.2s ease",zIndex:10,"&::-webkit-scrollbar":{width:10,borderRadius:10},"&::-webkit-scrollbar-track":{backgroundColor:"rgba(255, 255, 255, 0.01)"},"& ::-webkit-scrollbar-thumb":{backgroundColor:"rgba(255, 255, 255, 0.11)",borderRadius:10},"&::-webkit-scrollbar-thumb:hover":{backgroundColor:"rgba(255, 255, 255, 0.1)"}},navTitle:{fontSize:"24px",color:t.colors.text.main,fontWeight:500,width:"100%",textAlign:"center",marginBottom:20},nav:{width:"100%"},navSubtitle:{fontSize:16,color:t.colors.text.primary},navIcon:{color:t.colors.iconColor.main,transition:"all 0.2s ease"},navText:{paddingLeft:15,width:"100%",display:"flex",flexDirection:"row",alignItems:"center",textDecoration:"none",fontSize:14,color:t.colors.text.main}}})),W=e(1305),_=e(184);var A=function(){var t=P(),n=(0,o.useState)(!1),e=(0,r.Z)(n,2),a=e[0],l=e[1],u=(0,o.useState)(!1),d=(0,r.Z)(u,2),h=d[0],p=d[1];return(0,_.jsxs)(i.Z,{component:"div",className:t.navWrapper,children:[(0,_.jsx)(s.Z,{component:"h1",className:t.navTitle,children:"Programer Book"}),(0,_.jsxs)(c.Z,{component:"nav","aria-labelledby":"nested-list-subheader",subheader:(0,_.jsx)(f,{component:"div",id:"nested-list-subheader",className:t.navSubtitle,children:"Menu"}),className:t.nav,children:[(0,_.jsxs)(R.Z,{onClick:function(){return l(!a)},children:[(0,_.jsx)(y,{className:t.navIcon,children:(0,_.jsx)(O.Z,{})}),(0,_.jsx)(E,{className:t.navText,primary:"Front"}),a?(0,_.jsx)(M.Z,{className:t.navIcon}):(0,_.jsx)(z.Z,{className:t.navIcon})]}),(0,_.jsx)(C,{in:a,timeout:"auto",unmountOnExit:!0,children:(0,_.jsxs)(c.Z,{disablePadding:!0,children:[(0,_.jsx)(R.Z,{children:(0,_.jsxs)(D.OL,{to:W._.front.html.main,className:t.navText,children:[(0,_.jsx)(y,{className:t.navIcon,children:(0,_.jsx)(I.Z,{})}),(0,_.jsx)(E,{primary:"HTML"})]})}),(0,_.jsx)(R.Z,{children:(0,_.jsxs)(D.OL,{to:W._.front.css.main,className:t.navText,children:[(0,_.jsx)(y,{className:t.navIcon,children:(0,_.jsx)(L.Z,{})}),(0,_.jsx)(E,{primary:"CSS"})]})}),(0,_.jsx)(R.Z,{children:(0,_.jsxs)(D.OL,{to:W._.front.js.main,className:t.navText,children:[(0,_.jsx)(y,{className:t.navIcon,children:(0,_.jsx)(w.Z,{})}),(0,_.jsx)(E,{primary:"JS"})]})}),(0,_.jsx)(R.Z,{children:(0,_.jsxs)(D.OL,{to:W._.front.react.main,className:t.navText,children:[(0,_.jsx)(y,{className:t.navIcon,children:(0,_.jsx)("i",{className:"fa-brands fa-react"})}),(0,_.jsx)(E,{primary:"React"})]})}),(0,_.jsx)(R.Z,{children:(0,_.jsxs)(D.OL,{to:W._.front.lessons.main,className:t.navText,children:[(0,_.jsx)(y,{className:t.navIcon,children:(0,_.jsx)("i",{className:"fa-solid fa-person-chalkboard"})}),(0,_.jsx)(E,{primary:"Lessons"})]})})]})}),(0,_.jsxs)(R.Z,{onClick:function(){return p(!h)},children:[(0,_.jsx)(y,{className:t.navIcon,children:(0,_.jsx)(T.Z,{})}),(0,_.jsx)(E,{className:t.navText,primary:"Back"}),h?(0,_.jsx)(M.Z,{className:t.navIcon}):(0,_.jsx)(z.Z,{className:t.navIcon})]}),(0,_.jsx)(C,{in:h,timeout:"auto",unmountOnExit:!0,children:(0,_.jsxs)(c.Z,{disablePadding:!0,children:[(0,_.jsx)(R.Z,{children:(0,_.jsxs)(D.OL,{to:W._.back.php.main,className:t.navText,children:[(0,_.jsx)(y,{className:t.navIcon,children:(0,_.jsx)(H.Z,{})}),(0,_.jsx)(E,{primary:"PHP"})]})}),(0,_.jsx)(R.Z,{children:(0,_.jsxs)(D.OL,{to:W._.back.lessons.main,className:t.navText,children:[(0,_.jsx)(y,{className:t.navIcon,children:(0,_.jsx)("i",{className:"fa-solid fa-person-chalkboard"})}),(0,_.jsx)(E,{primary:"Lessons"})]})})]})})]})]})},F=(0,V.Z)((function(t){return{row:{display:"flex",flexDirection:"row",flexWrap:"nowrap",width:"100%",overflow:"hidden"},content:{overflowX:"hidden",overflowY:"visible",padding:"20px 10px",minHeight:"100vh",marginLeft:250,backgroundColor:t.colors.background.primary,width:"100%"}}}));var B=function(){var t=F();return(0,_.jsxs)(i.Z,{component:"div",className:t.row,children:[(0,_.jsx)(A,{}),(0,_.jsx)(i.Z,{component:"div",className:t.content,children:(0,_.jsx)(a.j3,{})})]})}},3364:function(t,n,e){e.d(n,{Z:function(){return a}});var i=e(8444),o=(e(2791),e(663));function a(){return(0,i.Z)()||o.Z}},6043:function(t,n,e){e.d(n,{C:function(){return o},n:function(){return i}});var i=function(t){return t.scrollTop};function o(t,n){var e=t.timeout,i=t.style,o=void 0===i?{}:i;return{duration:o.transitionDuration||"number"===typeof e?e:e[n.mode]||0,delay:o.transitionDelay}}},1565:function(t,n,e){function i(t,n){"function"===typeof t?t(n):t&&(t.current=n)}e.d(n,{Z:function(){return i}})},9806:function(t,n,e){e.d(n,{Z:function(){return a}});var i=e(2791),o=e(1565);function a(t,n){return i.useMemo((function(){return null==t&&null==n?null:function(e){(0,o.Z)(t,e),(0,o.Z)(n,e)}}),[t,n])}},1292:function(t,n,e){var i=e(5318);n.Z=void 0;var o=i(e(5649)),a=e(184),r=(0,o.default)((0,a.jsx)("path",{d:"M9.4 16.6 4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0 4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"}),"Code");n.Z=r},6387:function(t,n,e){var i=e(5318);n.Z=void 0;var o=i(e(5649)),a=e(184),r=(0,o.default)((0,a.jsx)("path",{d:"m19.17 12-4.58-4.59L16 6l6 6-3.59 3.59L17 14.17 19.17 12zM1.39 4.22l4.19 4.19L2 12l6 6 1.41-1.41L4.83 12 7 9.83l12.78 12.78 1.41-1.41L2.81 2.81 1.39 4.22z"}),"CodeOff");n.Z=r},3607:function(t,n,e){var i=e(5318);n.Z=void 0;var o=i(e(5649)),a=e(184),r=(0,o.default)((0,a.jsx)("path",{d:"M9.5 14v-1H11v.5h2v-1h-2.5c-.55 0-1-.45-1-1V10c0-.55.45-1 1-1h3c.55 0 1 .45 1 1v1H13v-.5h-2v1h2.5c.55 0 1 .45 1 1V14c0 .55-.45 1-1 1h-3c-.55 0-1-.45-1-1zm7.5 1h3c.55 0 1-.45 1-1v-1.5c0-.55-.45-1-1-1h-2.5v-1h2v.5H21v-1c0-.55-.45-1-1-1h-3c-.55 0-1 .45-1 1v1.5c0 .55.45 1 1 1h2.5v1h-2V13H16v1c0 .55.45 1 1 1zm-9-5c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-1H6.5v.5h-2v-3h2v.5H8v-1z"}),"Css");n.Z=r},8475:function(t,n,e){var i=e(5318);n.Z=void 0;var o=i(e(5649)),a=e(184),r=(0,o.default)((0,a.jsx)("path",{d:"M3.5 9H5v6H3.5v-2.5h-2V15H0V9h1.5v2h2V9zm14 0H13c-.55 0-1 .45-1 1v5h1.5v-4.5h1V14H16v-3.51h1V15h1.5v-5c0-.55-.45-1-1-1zM11 9H6v1.5h1.75V15h1.5v-4.5H11V9zm13 6v-1.5h-2.5V9H20v6h4z"}),"Html");n.Z=r},5374:function(t,n,e){var i=e(5318);n.Z=void 0;var o=i(e(5649)),a=e(184),r=(0,o.default)((0,a.jsx)("path",{d:"M12 14v-1h1.5v.5h2v-1H13c-.55 0-1-.45-1-1V10c0-.55.45-1 1-1h3c.55 0 1 .45 1 1v1h-1.5v-.5h-2v1H16c.55 0 1 .45 1 1V14c0 .55-.45 1-1 1h-3c-.55 0-1-.45-1-1zM9 9v4.5H7.5v-1H6v1c0 .83.67 1.5 1.5 1.5H9c.83 0 1.5-.67 1.5-1.5V9H9z"}),"Javascript");n.Z=r},5172:function(t,n,e){var i=e(5318);n.Z=void 0;var o=i(e(5649)),a=e(184),r=(0,o.default)((0,a.jsx)("path",{d:"M7.41 8.59 12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"}),"KeyboardArrowDown");n.Z=r},5678:function(t,n,e){var i=e(5318);n.Z=void 0;var o=i(e(5649)),a=e(184),r=(0,o.default)((0,a.jsx)("path",{d:"M7.41 15.41 12 10.83l4.59 4.58L18 14l-6-6-6 6z"}),"KeyboardArrowUp");n.Z=r},3928:function(t,n,e){var i=e(5318);n.Z=void 0;var o=i(e(5649)),a=e(184),r=(0,o.default)((0,a.jsx)("path",{d:"M13 9h1.5v6H13v-2.5h-2V15H9.5V9H11v2h2V9zm-5 1.5v1c0 .8-.7 1.5-1.5 1.5h-2v2H3V9h3.5c.8 0 1.5.7 1.5 1.5zm-1.5 0h-2v1h2v-1zm15 0v1c0 .8-.7 1.5-1.5 1.5h-2v2h-1.5V9H20c.8 0 1.5.7 1.5 1.5zm-1.5 0h-2v1h2v-1z"}),"Php");n.Z=r},8875:function(t,n,e){e.d(n,{ZP:function(){return v}});var i=e(3366),o=e(1721),a=e(2791),r=e(4164),s=!1,c=e(5545),l="unmounted",u="exited",d="entering",h="entered",p="exiting",m=function(t){function n(n,e){var i;i=t.call(this,n,e)||this;var o,a=e&&!e.isMounting?n.enter:n.appear;return i.appearStatus=null,n.in?a?(o=u,i.appearStatus=d):o=h:o=n.unmountOnExit||n.mountOnEnter?l:u,i.state={status:o},i.nextCallback=null,i}(0,o.Z)(n,t),n.getDerivedStateFromProps=function(t,n){return t.in&&n.status===l?{status:u}:null};var e=n.prototype;return e.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},e.componentDidUpdate=function(t){var n=null;if(t!==this.props){var e=this.state.status;this.props.in?e!==d&&e!==h&&(n=d):e!==d&&e!==h||(n=p)}this.updateStatus(!1,n)},e.componentWillUnmount=function(){this.cancelNextCallback()},e.getTimeouts=function(){var t,n,e,i=this.props.timeout;return t=n=e=i,null!=i&&"number"!==typeof i&&(t=i.exit,n=i.enter,e=void 0!==i.appear?i.appear:n),{exit:t,enter:n,appear:e}},e.updateStatus=function(t,n){void 0===t&&(t=!1),null!==n?(this.cancelNextCallback(),n===d?this.performEnter(t):this.performExit()):this.props.unmountOnExit&&this.state.status===u&&this.setState({status:l})},e.performEnter=function(t){var n=this,e=this.props.enter,i=this.context?this.context.isMounting:t,o=this.props.nodeRef?[i]:[r.findDOMNode(this),i],a=o[0],c=o[1],l=this.getTimeouts(),u=i?l.appear:l.enter;!t&&!e||s?this.safeSetState({status:h},(function(){n.props.onEntered(a)})):(this.props.onEnter(a,c),this.safeSetState({status:d},(function(){n.props.onEntering(a,c),n.onTransitionEnd(u,(function(){n.safeSetState({status:h},(function(){n.props.onEntered(a,c)}))}))})))},e.performExit=function(){var t=this,n=this.props.exit,e=this.getTimeouts(),i=this.props.nodeRef?void 0:r.findDOMNode(this);n&&!s?(this.props.onExit(i),this.safeSetState({status:p},(function(){t.props.onExiting(i),t.onTransitionEnd(e.exit,(function(){t.safeSetState({status:u},(function(){t.props.onExited(i)}))}))}))):this.safeSetState({status:u},(function(){t.props.onExited(i)}))},e.cancelNextCallback=function(){null!==this.nextCallback&&(this.nextCallback.cancel(),this.nextCallback=null)},e.safeSetState=function(t,n){n=this.setNextCallback(n),this.setState(t,n)},e.setNextCallback=function(t){var n=this,e=!0;return this.nextCallback=function(i){e&&(e=!1,n.nextCallback=null,t(i))},this.nextCallback.cancel=function(){e=!1},this.nextCallback},e.onTransitionEnd=function(t,n){this.setNextCallback(n);var e=this.props.nodeRef?this.props.nodeRef.current:r.findDOMNode(this),i=null==t&&!this.props.addEndListener;if(e&&!i){if(this.props.addEndListener){var o=this.props.nodeRef?[this.nextCallback]:[e,this.nextCallback],a=o[0],s=o[1];this.props.addEndListener(a,s)}null!=t&&setTimeout(this.nextCallback,t)}else setTimeout(this.nextCallback,0)},e.render=function(){var t=this.state.status;if(t===l)return null;var n=this.props,e=n.children,o=(n.in,n.mountOnEnter,n.unmountOnExit,n.appear,n.enter,n.exit,n.timeout,n.addEndListener,n.onEnter,n.onEntering,n.onEntered,n.onExit,n.onExiting,n.onExited,n.nodeRef,(0,i.Z)(n,["children","in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","addEndListener","onEnter","onEntering","onEntered","onExit","onExiting","onExited","nodeRef"]));return a.createElement(c.Z.Provider,{value:null},"function"===typeof e?e(t,o):a.cloneElement(a.Children.only(e),o))},n}(a.Component);function f(){}m.contextType=c.Z,m.propTypes={},m.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:f,onEntering:f,onEntered:f,onExit:f,onExiting:f,onExited:f},m.UNMOUNTED=l,m.EXITED=u,m.ENTERING=d,m.ENTERED=h,m.EXITING=p;var v=m}}]);
//# sourceMappingURL=638.e49e44a6.chunk.js.map