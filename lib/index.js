!function(e,t){if("object"===typeof exports&&"object"===typeof module)module.exports=t();else if("function"===typeof define&&define.amd)define([],t);else{var n=t();for(var o in n)("object"===typeof exports?exports:e)[o]=n[o]}}(self,(function(){return function(){"use strict";var e={n:function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,{a:n}),n},d:function(t,n){for(var o in n)e.o(n,o)&&!e.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:n[o]})},o:function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r:function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}},t={};e.r(t),e.d(t,{DragDirection:function(){return xe},DragDirectionCode:function(){return Xe},DragTypes:function(){return Ee},DraggableEvent:function(){return Ue},default:function(){return Je}});var n=require("@babel/runtime-corejs3/core-js/reflect/construct"),o=e.n(n),r=require("@babel/runtime-corejs3/core-js/object/keys"),i=e.n(r),a=require("@babel/runtime-corejs3/core-js/object/get-own-property-symbols"),l=e.n(a),d=require("@babel/runtime-corejs3/core-js/instance/filter"),u=e.n(d),s=require("@babel/runtime-corejs3/core-js/object/get-own-property-descriptor"),c=e.n(s),v=require("@babel/runtime-corejs3/core-js/instance/for-each"),f=e.n(v),p=require("@babel/runtime-corejs3/core-js/object/get-own-property-descriptors"),m=e.n(p),y=require("@babel/runtime-corejs3/core-js/object/define-properties"),h=e.n(y),g=require("@babel/runtime-corejs3/core-js/object/define-property"),b=e.n(g),D=require("@babel/runtime-corejs3/helpers/extends"),j=e.n(D),x=require("@babel/runtime-corejs3/helpers/objectWithoutProperties"),w=e.n(x),S=require("@babel/runtime-corejs3/helpers/defineProperty"),E=e.n(S),X=require("@babel/runtime-corejs3/helpers/classCallCheck"),Y=e.n(X),M=require("@babel/runtime-corejs3/helpers/createClass"),O=e.n(M),N=require("@babel/runtime-corejs3/helpers/inherits"),k=e.n(N),q=require("@babel/runtime-corejs3/helpers/possibleConstructorReturn"),L=e.n(q),P=require("@babel/runtime-corejs3/helpers/getPrototypeOf"),T=e.n(P),C=require("react"),H=e.n(C),R=require("classnames"),B=e.n(R),W=require("@babel/runtime-corejs3/helpers/typeof"),U=e.n(W),V=require("@babel/runtime-corejs3/core-js/instance/includes"),F=e.n(V),z=require("@babel/runtime-corejs3/core-js/parse-float"),A=e.n(z),G=require("@babel/runtime-corejs3/core-js/instance/concat"),_=e.n(G),I=["Moz","Webkit","O","ms"];function J(e,t){for(var n,o="",r=!0,i=0;i<e.length;i++)r?(o+=e[i].toUpperCase(),r=!1):"-"===e[i]?r=!0:o+=e[i];return t?_()(n="".concat(t)).call(n,o):e}function K(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"transform";if("undefined"===typeof window||"undefined"===typeof window.document)return"";var t=window.document.documentElement.style;if(e in t)return e;for(var n=0;n<I.length;n++)if(J(e,I[n])in t)return J(e,I[n]);return""}var Q=require("@babel/runtime-corejs3/core-js/array/is-array"),Z=e.n(Q),$=require("@babel/runtime-corejs3/core-js/map"),ee=e.n($),te=require("@babel/runtime-corejs3/core-js/set"),ne=e.n(te);function oe(e){return Object.prototype.toString.call(e)}function re(e){return"object"===("undefined"===typeof HTMLElement?"undefined":U()(HTMLElement))?e instanceof HTMLElement:e&&"object"===U()(e)&&1===e.nodeType&&"string"===typeof e.nodeName}function ie(e){return"[object Number]"==oe(e)}function ae(e){return"[object Object]"==oe(e)}function le(e,t){var n=i()(e);if(l()){var o=l()(e);t&&(o=u()(o).call(o,(function(t){return c()(e,t).enumerable}))),n.push.apply(n,o)}return n}function de(e){for(var t=1;t<arguments.length;t++){var n,o,r=null!=arguments[t]?arguments[t]:{};t%2?f()(n=le(Object(r),!0)).call(n,(function(t){E()(e,t,r[t])})):m()?h()(e,m()(r)):f()(o=le(Object(r))).call(o,(function(t){b()(e,t,c()(r,t))}))}return e}var ue=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:document,n=null;return"string"===typeof e?n=t.querySelector(e):re(e)&&(n=e),n};var se=function(e){var t,n=(null===e||void 0===e?void 0:e.ownerDocument)||(null===(t=document)||void 0===t?void 0:t.ownerDocument);return n&&n.defaultView||window};function ce(e,t){var n=e&&e.style,o=se(e);if(n){var r=o.getComputedStyle(e,"")||e.currentStyle;if(void 0===t)return r;if("string"===typeof t)return r[t];if("object"===U()(t))for(var i in t)n[K(i)]=t[i]}}function ve(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:document.body||document.documentElement,n=null;if("clientX"in e)n={x:(null===e||void 0===e?void 0:e.clientX)-be(t).left,y:(null===e||void 0===e?void 0:e.clientY)-be(t).top};else if("touches"in e){var o,r;if(null!==e&&void 0!==e&&e.touches[0])n={x:(null===e||void 0===e||null===(o=e.touches[0])||void 0===o?void 0:o.clientX)-be(t).left,y:(null===e||void 0===e||null===(r=e.touches[0])||void 0===r?void 0:r.clientY)-be(t).top}}return n}function fe(e){var t;if(re(e))return F()(t=[document.documentElement,document.body]).call(t,e)?{width:window.innerWidth,height:window.innerHeight}:{width:e.offsetWidth,height:e.offsetHeight}}function pe(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:document.body||document.documentElement,n=null;if(re(e)){var o,r,i=fe(e);if(!i)return null;var a=A()(null===(o=getComputedStyle(t))||void 0===o?void 0:o.borderLeftWidth)||0,l=A()(null===(r=getComputedStyle(t))||void 0===r?void 0:r.borderTopWidth)||0,d=be(e).top-be(t).top-l,u=be(e).left-be(t).left-a;return{left:u,top:d,right:u+(null===i||void 0===i?void 0:i.width),bottom:d+(null===i||void 0===i?void 0:i.height)}}return n}var me=function(e){if(e){var t,n,o=e.getElementById("react-draggable-style-el");o||((o=e.createElement("style")).type="text/css",o.id="react-draggable-style-el",o.innerHTML=".react-draggable-transparent-selection *::-moz-selection {background: red;}\n",o.innerHTML+=".react-draggable-transparent-selection *::selection {background: red;}\n",e.getElementsByTagName("head")[0].appendChild(o)),e.body&&(t=e.body,n="react-draggable-transparent-selection",t.classList?t.classList.add(n):t.className.match(new RegExp("(?:^|\\s)".concat(n,"(?!\\S)")))||(t.className+=" ".concat(n)))}};function ye(e){var t,n;if(e)try{if(e.body&&(t=e.body,n="react-draggable-transparent-selection",t.classList?t.classList.remove(n):t.className=t.className.replace(new RegExp("(?:^|\\s)".concat(n,"(?!\\S)"),"g"),"")),e.selection)e.selection.empty();else{var o=(e.defaultView||window).getSelection();o&&"Caret"!==o.type&&o.removeAllRanges()}}catch(r){}}function he(e,t,n){var o,r,i,a,l=e.x,d=e.y;"number"!=typeof l&&"number"!=typeof d||(o=_()(r=_()(i=_()(a="translate3d(".concat(l||0)).call(a,n,",")).call(i,d||0)).call(r,n,", 0)"));if(t){var u,s="".concat("string"===typeof t.x?t.x:t.x+n),c="".concat("string"===typeof t.y?t.y:t.y+n);o=_()(u="translate3d(".concat(s,",")).call(u,c,", 0)")}return o}function ge(e,t,n){if(o=n,Z()(o)||"string"===typeof o||o instanceof String?0===o.length:o instanceof ee()||o instanceof ne()?0===o.size:"[object Object]"==={}.toString.call(o)?0===i()(o).length:void 0===o||null===o)return t;var o,r=function(e,t){var n=ue(t)||ue(null===t||void 0===t?void 0:t.element);if(re(e)&&re(n)){if(r=e,!(o=n)||o===r||!o.contains(r))throw new Error("`parent` is not parentNode of the child");var o,r,i=e.offsetWidth,a=e.offsetHeight,l=n.clientWidth,d=n.clientHeight,u=l-i>0?l-i:0,s=d-a>0?d-a:0;return ue(t)?{minX:0,maxX:u+0,minY:0,maxY:s+0}:{minX:Math.max(0,(null===t||void 0===t?void 0:t.left)||0),maxX:Math.min(u,u-((null===t||void 0===t?void 0:t.right)||0)),minY:Math.max(0,(null===t||void 0===t?void 0:t.top)||0),maxY:Math.min(s,s-((null===t||void 0===t?void 0:t.bottom)||0))}}}(e,n);if(!r)return t;var a=r.minX,l=r.minY,d=r.maxX,u=r.maxY,s=t.x,c=t.y;return ie(d)&&(s=Math.min(s,d)),ie(u)&&(c=Math.min(c,u)),ie(a)&&(s=Math.max(s,a)),ie(l)&&(c=Math.max(c,l)),{x:s,y:c}}function be(e){return e.getBoundingClientRect()}function De(e,t,n,o){if(e){var r=de({capture:!1,once:!1,passive:!1},o);e.addEventListener?e.addEventListener(t,n,r):e.attachEvent?e.attachEvent("on"+t,n):e["on"+t]=n}}function je(e,t,n,o){if(e){var r=de({capture:!1,once:!1,passive:!1},o);e.removeEventListener?e.removeEventListener(t,n,r):e.detachEvent?e.detachEvent("on"+t,n):e["on"+t]=null}}var xe,we=require("@babel/runtime-corejs3/core-js/object/values"),Se=e.n(we);!function(e){e.Vertical="vertical",e.Horizontal="horizontal"}(xe||(xe={}));var Ee,Xe=Se()(xe);!function(e){e.Start="start",e.Move="move",e.End="end"}(Ee||(Ee={}));var Ye=require("@babel/runtime-corejs3/core-js/instance/some"),Me=e.n(Ye),Oe=require("@babel/runtime-corejs3/helpers/slicedToArray"),Ne=e.n(Oe),ke=require("react-dom"),qe=e.n(ke),Le=0;function Pe(e,t){var n=i()(e);if(l()){var o=l()(e);t&&(o=u()(o).call(o,(function(t){return c()(e,t).enumerable}))),n.push.apply(n,o)}return n}function Te(e){for(var t=1;t<arguments.length;t++){var n,o,r=null!=arguments[t]?arguments[t]:{};t%2?f()(n=Pe(Object(r),!0)).call(n,(function(t){E()(e,t,r[t])})):m()?h()(e,m()(r)):f()(o=Pe(Object(r))).call(o,(function(t){b()(e,t,c()(r,t))}))}return e}function Ce(e){var t=function(){if("undefined"===typeof Reflect||!o())return!1;if(o().sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(o()(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=T()(e);if(t){var i=T()(this).constructor;n=o()(r,arguments,i)}else n=r.apply(this,arguments);return L()(this,n)}}var He={touch:{start:"touchstart",move:"touchmove",stop:"touchend"},mouse:{start:"mousedown",move:"mousemove",stop:"mouseup"}},Re=function(){var e=navigator.userAgent,t=["Android","iPhone","SymbianOS","Windows Phone","iPad","iPod"];return Me()(t).call(t,(function(t){return F()(e).call(e,t)}))}()?He.touch:He.mouse,Be=function(e){k()(n,e);var t=Ce(n);function n(e){var o;return Y()(this,n),(o=t.call(this,e)).dragging=void 0,o.eventData=void 0,o.child=void 0,o.cloneLayer=void 0,o.initPos=void 0,o.moveStartFlag=void 0,o.findOwnerDocument=function(){var e=o.findDOMNode();return null===e||void 0===e?void 0:e.ownerDocument},o.findHandle=function(){var e=o.findDOMNode(),t=se(),n=null===t||void 0===t?void 0:t.getComputedStyle(e),r=o.props.handle?ue(o.props.handle,e):e;if("inline"===(null===n||void 0===n?void 0:n.display))throw new Error("the style of `props.children` cannot is `inline`, because `transform` has no effect on Element ");return r},o.findFilterNode=function(){var e=o.findDOMNode();return u()(o.props)&&ue(u()(o.props),e)},o.getEventBounds=function(){var e,t=o.findOwnerDocument();return ue(null===(e=o.props)||void 0===e?void 0:e.eventBounds)||t.body||t.documentElement},o.initLayerNode=function(){var e=o.props,t=e.showLayer,n=e.layerStyle;if(t){var r=o.findDOMNode(),i=o.findOwnerDocument(),a=r.cloneNode(!0);o.cloneLayer=a;var l=function(e){var t=null;if("clientX"in e)t={x:e.clientX,y:e.clientY};else if("touches"in e){var n,o;null!==e&&void 0!==e&&e.touches[0]&&(t={x:null===(n=e.touches[0])||void 0===n?void 0:n.clientX,y:null===(o=e.touches[0])||void 0===o?void 0:o.clientY})}else if(re(e)){var r,i;t=F()(r=[document.documentElement,document.body]).call(r,e)?{x:0,y:0}:{x:null===(i=be(e))||void 0===i?void 0:i.left,y:be(e).top}}return t}(r);a&&l&&(ce(a,Te({left:(null===l||void 0===l?void 0:l.x)+"px",top:(null===l||void 0===l?void 0:l.y)+"px",position:"fixed",zIndex:999,transition:"",opacity:.6,margin:0},n)),o.initPos={left:null===l||void 0===l?void 0:l.x,top:null===l||void 0===l?void 0:l.y}),i.body.appendChild(a)}},o.setLayerNode=function(e){var t=o.props.showLayer,n=e.deltaX,r=e.deltaY;if(t&&o.initPos){var i,a,l=(null===(i=o.initPos)||void 0===i?void 0:i.left)+n,d=(null===(a=o.initPos)||void 0===a?void 0:a.top)+r;ce(o.cloneLayer,{left:l+"px",top:d+"px"}),o.initPos={left:l,top:d}}},o.removeLayerNode=function(){o.props.showLayer&&o.findOwnerDocument().body.removeChild(o.cloneLayer)},o.handleDragStart=function(e){var t,n,r,i,a,l=o.findHandle(),d=o.findDOMNode(),u=o.findFilterNode(),s=o.findOwnerDocument(),c=se(),v=e.target;if(!s)throw new Error("<DraggableEvent> not mounted on DragStart!");if((null!==(t=o.props)&&void 0!==t&&t.allowAnyClick||function(e){return"touches"in e||"targetTouches"in e||"changedTouches"in e}(e)||"number"!==typeof e.button||e.button===Le)&&!(!l||null!==(n=o.props)&&void 0!==n&&n.disabled||!(v instanceof(null===c||void 0===c?void 0:c.Node))||l&&!function(e,t){var n=e;do{var o;if(n===t)return!0;if(F()(o=[document.documentElement,document.body]).call(o,n))return!1;n=n.parentNode}while(n);return!1}(v,l)||u&&v===u||!o.canDragX()&&!o.canDragY())){var f=ve(e,o.getEventBounds());if(f){var p=null===f||void 0===f?void 0:f.x,m=null===f||void 0===f?void 0:f.y;o.eventData={node:d,deltaX:0,deltaY:0,lastEventX:p,lastEventY:m,eventX:p,eventY:m},o.initLayerNode(),(null===(r=o.props)||void 0===r?void 0:r.onStart)&&(null===(i=o.props)||void 0===i||i.onStart(e,o.eventData)),null!==(a=o.props)&&void 0!==a&&a.enableUserSelectHack&&me(s),o.dragging=!0,De(s,Re.move,o.handleDrag),De(s,Re.stop,o.handleDragStop)}}},o.handleDrag=function(e){var t,n,r,i;if(o.dragging){var a=o.getEventBounds(),l=o.findDOMNode(),d=ve(e,a),u=o.props,s=u.scale,c=u.grid;if(d&&o.eventData&&s){var v,f,p=null===d||void 0===d?void 0:d.x,m=null===d||void 0===d?void 0:d.y,y=o.eventData,h=y.lastEventX,g=y.lastEventY;if(Z()(c)){var b=p-h,D=m-g,j=function(e,t,n){return[Math.round(t/e[0])*e[0],Math.round(n/e[1])*e[1]]}(c,b,D),x=Ne()(j,2);if(b=x[0],D=x[1],!b&&!D)return;p=h+b,m=g+D}if(o.eventData={node:l,deltaX:o.canDragX()?(p-h)/s:0,deltaY:o.canDragY()?(m-g)/s:0,lastEventX:p,lastEventY:m,eventX:p,eventY:m},o.setLayerNode({deltaX:null===(t=o.eventData)||void 0===t?void 0:t.deltaX,deltaY:null===(n=o.eventData)||void 0===n?void 0:n.deltaY}),o.moveStartFlag)(null===(v=o.props)||void 0===v?void 0:v.onMoveStart)&&(null===(f=o.props)||void 0===f||f.onMoveStart(e,o.eventData));o.moveStartFlag=!1,(null===(r=o.props)||void 0===r?void 0:r.onMove)&&(null===(i=o.props)||void 0===i||i.onMove(e,o.eventData))}}},o.handleDragStop=function(e){var t,n;if(o.dragging&&o.eventData){var r,i=o.findOwnerDocument();if(o.eventData=Te(Te({},o.eventData),{},{deltaX:0,deltaY:0}),o.removeLayerNode(),o.moveStartFlag=!0,o.dragging=!1,i)null!==(r=o.props)&&void 0!==r&&r.enableUserSelectHack&&ye(i);i&&(je(i,Re.move,o.handleDrag),je(i,Re.stop,o.handleDragStop)),(null===(t=o.props)||void 0===t?void 0:t.onEnd)&&(null===(n=o.props)||void 0===n||n.onEnd(e,o.eventData))}},o.canDragX=function(){var e=o.props.direction;return null===e||void 0===e?void 0:F()(e).call(e,xe.Horizontal)},o.canDragY=function(){var e=o.props.direction;return null===e||void 0===e?void 0:F()(e).call(e,xe.Vertical)},o.dragging=!1,o.moveStartFlag=!0,o.eventData=void 0,o.state={},o}return O()(n,[{key:"componentDidMount",value:function(){De(this.findDOMNode(),Re.start,this.handleDragStart)}},{key:"componentWillUnmount",value:function(){var e,t=this.findDOMNode(),n=this.findOwnerDocument();je(t,Re.start,this.handleDragStart),je(n,Re.move,this.handleDrag),je(n,Re.stop,this.handleDragStop),null!==(e=this.props)&&void 0!==e&&e.enableUserSelectHack&&ye(n)}},{key:"findDOMNode",value:function(){var e,t;return(null===(e=this.props)||void 0===e||null===(t=e.forwardedRef)||void 0===t?void 0:t.current)||qe().findDOMNode(this)}},{key:"render",value:function(){var e=this.props,t=e.children,n=e.className,o=e.style,r=e.forwardedRef,i=e.transform,a=e.childProps;return H().cloneElement(H().Children.only(t),Te({className:n,ref:r,style:Te(Te({},t.props.style),o),transform:i},a))}}]),n}(H().Component);Be.defaultProps={direction:Xe,scale:1,showLayer:!0,stopBubble:!0};var We,Ue=(We=Be,H().forwardRef((function(e,t){return H().createElement(We,j()({forwardedRef:t},e))}))),Ve=require("klona"),Fe=function(e,t){if(!ae(e)||!ae(t))return e;var n=(0,Ve.klona)(e);for(var o in t)void 0!==t[o]&&(n[o]=t[o],void 0===e[o]&&(n[o]=t[o]));return n},ze=["children","className","style","positionOffset","transform","forwardedRef"];function Ae(e,t){var n=i()(e);if(l()){var o=l()(e);t&&(o=u()(o).call(o,(function(t){return c()(e,t).enumerable}))),n.push.apply(n,o)}return n}function Ge(e){for(var t=1;t<arguments.length;t++){var n,o,r=null!=arguments[t]?arguments[t]:{};t%2?f()(n=Ae(Object(r),!0)).call(n,(function(t){E()(e,t,r[t])})):m()?h()(e,m()(r)):f()(o=Ae(Object(r))).call(o,(function(t){b()(e,t,c()(r,t))}))}return e}function _e(e){var t=function(){if("undefined"===typeof Reflect||!o())return!1;if(o().sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(o()(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=T()(e);if(t){var i=T()(this).constructor;n=o()(r,arguments,i)}else n=r.apply(this,arguments);return L()(this,n)}}var Ie=function(e){return H().forwardRef((function(t,n){return H().createElement(e,j()({forwardedRef:n},t))}))}(function(e){k()(n,e);var t=_e(n);function n(e){var o;return Y()(this,n),(o=t.call(this,e)).initX=void 0,o.initY=void 0,o.slackX=void 0,o.slackY=void 0,o.dragType=void 0,o.lastDragData=void 0,o.isUninstall=void 0,o.setDragdata=function(e,t,n){var r=o.findDOMNode(),i=o.initX,a=o.initY;if("number"===typeof i&&"number"===typeof a){var l,d=Fe(e,{x:t,y:n,translateX:"number"===typeof t?t-i:void 0,translateY:"number"===typeof n?n-a:void 0});return o.setState({dragData:d,isSVG:(l=r,"undefined"!==typeof window.SVGElement&&l instanceof window.SVGElement)}),o.dragType=void 0,d}},o.getBoundsParent=function(){var e=o.props.bounds;return ue(e)||ue(null===e||void 0===e?void 0:e.element)||document.body||document.documentElement},o.onStart=function(e,t){o.dragType=Ee.Start;var n=null===t||void 0===t?void 0:t.node,r=pe(n,o.getBoundsParent());if(t&&r){var i=null===r||void 0===r?void 0:r.left,a=null===r||void 0===r?void 0:r.top,l=o.state.dragData,d=o.props.onStart,u=null===l||void 0===l?void 0:l.translateX,s=null===l||void 0===l?void 0:l.translateY,c=Ge(Ge({},l),{},{translateX:u,translateY:s,x:i,y:a,deltaX:null===t||void 0===t?void 0:t.deltaX,deltaY:null===t||void 0===t?void 0:t.deltaY,node:n});o.setState({dragData:c}),o.lastDragData=c,d&&d(e,c)}},o.onMove=function(e,t){var n,r,i,a;if(o.dragType&&t){o.dragType=Ee.Move;var l=o.state.dragData,d=o.props,u=d.bounds,s=d.onMove,c=null!==(n=null===l||void 0===l?void 0:l.x)&&void 0!==n?n:0,v=null!==(r=null===l||void 0===l?void 0:l.y)&&void 0!==r?r:0,f=null!==(i=null===l||void 0===l?void 0:l.translateX)&&void 0!==i?i:0,p=null!==(a=null===l||void 0===l?void 0:l.translateY)&&void 0!==a?a:0,m={node:t.node,translateX:f+(null===t||void 0===t?void 0:t.deltaX),translateY:p+t.deltaY,deltaX:null===t||void 0===t?void 0:t.deltaX,deltaY:null===t||void 0===t?void 0:t.deltaY,x:c+(null===t||void 0===t?void 0:t.deltaX),y:v+t.deltaY};if(m){var y=null===m||void 0===m?void 0:m.x,h=null===m||void 0===m?void 0:m.y;if(u){y+=o.slackX,h+=o.slackY;var g=ge(null===t||void 0===t?void 0:t.node,{x:y,y:h},u),b=f+(y=g.x)-c,D=p+(h=g.y)-v,j=o.slackX+(m.x-y),x=o.slackY+(m.y-h);o.slackX=j,o.slackY=x,m.x=y,m.y=h,m.translateX=b,m.translateY=D}o.setState({dragData:m}),s&&s(e,m)}}},o.onEnd=function(e,t){var n=o.state.dragData,r=o.dragType,i=o.props.onEnd;if(r&&n){o.dragType=Ee.End,o.slackX=0,o.slackY=0;var a=Ge({},n);if(i&&i(e,a),!o.isUninstall){var l,d,u,s=void 0!==o.props.x&&o.props.x!==(null===a||void 0===a?void 0:a.x),c=void 0!==o.props.y&&(null===(l=o.props)||void 0===l?void 0:l.y)!==(null===a||void 0===a?void 0:a.y);if(s||c)o.setDragdata(o.lastDragData,null===(d=o.props)||void 0===d?void 0:d.x,null===(u=o.props)||void 0===u?void 0:u.y);else o.props.fixed&&o.setDragdata(o.lastDragData,void 0,void 0)}}},o.slackX=0,o.slackY=0,o.lastDragData={},o.state={dragData:{},isSVG:!1},o}return O()(n,[{key:"componentDidMount",value:function(){var e,t,n=pe(this.findDOMNode(),this.getBoundsParent()),o=n&&{x:null===n||void 0===n?void 0:n.left,y:null===n||void 0===n?void 0:n.top};this.initX=null===o||void 0===o?void 0:o.x,this.initY=null===o||void 0===o?void 0:o.y,this.setDragdata(this.state.dragData,null===(e=this.props)||void 0===e?void 0:e.x,null===(t=this.props)||void 0===t?void 0:t.y)}},{key:"componentWillUnmount",value:function(){this.isUninstall=!0}},{key:"componentDidUpdate",value:function(e,t){var n=void 0!==this.props.x&&this.props.x!==e.x,o=void 0!==this.props.y&&this.props.y!==e.y;(n||o)&&(this.dragType||this.setDragdata(null===t||void 0===t?void 0:t.dragData,this.props.x,this.props.y))}},{key:"findDOMNode",value:function(){var e,t;return(null===(e=this.props)||void 0===e||null===(t=e.forwardedRef)||void 0===t?void 0:t.current)||qe().findDOMNode(this)}},{key:"render",value:function(){var e,t,n=this.props,o=n.children,r=n.className,i=n.style,a=n.positionOffset,l=n.transform,d=n.forwardedRef,u=w()(n,ze),s=this.state,c=s.isSVG,v=s.dragData,f=B()((null===(e=o.props)||void 0===e?void 0:e.className)||"","react-draggable",r,(t={},E()(t,"react-draggable-dragging",this.dragType===Ee.Move),E()(t,"react-draggable-dragged",this.dragType),t)),p={x:null===v||void 0===v?void 0:v.translateX,y:null===v||void 0===v?void 0:v.translateY};return H().createElement(Ue,j()({ref:d},u,{style:Fe(Ge(Ge({},o.props.style),i),{transform:!c&&he(p,a,"px")}),showLayer:!1,className:f,transform:c?he(p,a,""):l,onStart:this.onStart,onMove:this.onMove,onEnd:this.onEnd}),o)}}],[{key:"getDerivedStateFromProps",value:function(e,t){var n=e.x!==t.prevX,o=e.y!==t.prevY;return n?Ge(Ge({},t),{},{prevX:e.x}):o?Ge(Ge({},t),{},{prevY:e.y}):null}}]),n}(H().Component)),Je=Ie;return t}()}));