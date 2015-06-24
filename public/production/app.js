/*! VelocityJS.org (1.0.0). (C) 2014 Julian Shapiro. MIT @license: en.wikipedia.org/wiki/MIT_License */
/*! VelocityJS.org jQuery Shim (1.0.0-rc1). (C) 2014 The jQuery Foundation. MIT @license: en.wikipedia.org/wiki/MIT_License. */
!function(e){function t(e){var t=e.length,r=$.type(e);return"function"===r||$.isWindow(e)?!1:1===e.nodeType&&t?!0:"array"===r||0===t||"number"==typeof t&&t>0&&t-1 in e}if(!e.jQuery){var $=function(e,t){return new $.fn.init(e,t)};$.isWindow=function(e){return null!=e&&e==e.window},$.type=function(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?a[o.call(e)]||"object":typeof e},$.isArray=Array.isArray||function(e){return"array"===$.type(e)},$.isPlainObject=function(e){var t;if(!e||"object"!==$.type(e)||e.nodeType||$.isWindow(e))return!1;try{if(e.constructor&&!n.call(e,"constructor")&&!n.call(e.constructor.prototype,"isPrototypeOf"))return!1}catch(r){return!1}for(t in e);return void 0===t||n.call(e,t)},$.each=function(e,r,a){var n,o=0,i=e.length,s=t(e);if(a){if(s)for(;i>o&&(n=r.apply(e[o],a),n!==!1);o++);else for(o in e)if(n=r.apply(e[o],a),n===!1)break}else if(s)for(;i>o&&(n=r.call(e[o],o,e[o]),n!==!1);o++);else for(o in e)if(n=r.call(e[o],o,e[o]),n===!1)break;return e},$.data=function(e,t,a){if(void 0===a){var n=e[$.expando],o=n&&r[n];if(void 0===t)return o;if(o&&t in o)return o[t]}else if(void 0!==t){var n=e[$.expando]||(e[$.expando]=++$.uuid);return r[n]=r[n]||{},r[n][t]=a,a}},$.removeData=function(e,t){var a=e[$.expando],n=a&&r[a];n&&$.each(t,function(e,t){delete n[t]})},$.extend=function(){var e,t,r,a,n,o,i=arguments[0]||{},s=1,l=arguments.length,u=!1;for("boolean"==typeof i&&(u=i,i=arguments[s]||{},s++),"object"!=typeof i&&"function"!==$.type(i)&&(i={}),s===l&&(i=this,s--);l>s;s++)if(null!=(n=arguments[s]))for(a in n)e=i[a],r=n[a],i!==r&&(u&&r&&($.isPlainObject(r)||(t=$.isArray(r)))?(t?(t=!1,o=e&&$.isArray(e)?e:[]):o=e&&$.isPlainObject(e)?e:{},i[a]=$.extend(u,o,r)):void 0!==r&&(i[a]=r));return i},$.queue=function(e,r,a){function n(e,r){var a=r||[];return null!=e&&(t(Object(e))?!function(e,t){for(var r=+t.length,a=0,n=e.length;r>a;)e[n++]=t[a++];if(r!==r)for(;void 0!==t[a];)e[n++]=t[a++];return e.length=n,e}(a,"string"==typeof e?[e]:e):[].push.call(a,e)),a}if(e){r=(r||"fx")+"queue";var o=$.data(e,r);return a?(!o||$.isArray(a)?o=$.data(e,r,n(a)):o.push(a),o):o||[]}},$.dequeue=function(e,t){$.each(e.nodeType?[e]:e,function(e,r){t=t||"fx";var a=$.queue(r,t),n=a.shift();"inprogress"===n&&(n=a.shift()),n&&("fx"===t&&a.unshift("inprogress"),n.call(r,function(){$.dequeue(r,t)}))})},$.fn=$.prototype={init:function(e){if(e.nodeType)return this[0]=e,this;throw new Error("Not a DOM node.")},offset:function(){var t=this[0].getBoundingClientRect();return{top:t.top+(e.pageYOffset||document.scrollTop||0)-(document.clientTop||0),left:t.left+(e.pageXOffset||document.scrollLeft||0)-(document.clientLeft||0)}},position:function(){function e(){for(var e=this.offsetParent||document;e&&"html"===!e.nodeType.toLowerCase&&"static"===e.style.position;)e=e.offsetParent;return e||document}var t=this[0],e=e.apply(t),r=this.offset(),a=/^(?:body|html)$/i.test(e.nodeName)?{top:0,left:0}:$(e).offset();return r.top-=parseFloat(t.style.marginTop)||0,r.left-=parseFloat(t.style.marginLeft)||0,e.style&&(a.top+=parseFloat(e.style.borderTopWidth)||0,a.left+=parseFloat(e.style.borderLeftWidth)||0),{top:r.top-a.top,left:r.left-a.left}}};var r={};$.expando="velocity"+(new Date).getTime(),$.uuid=0;for(var a={},n=a.hasOwnProperty,o=a.toString,i="Boolean Number String Function Array Date RegExp Object Error".split(" "),s=0;s<i.length;s++)a["[object "+i[s]+"]"]=i[s].toLowerCase();$.fn.init.prototype=$.fn,e.Velocity={Utilities:$}}}(window),function(e){"object"==typeof module&&"object"==typeof module.exports?module.exports=e():"function"==typeof define&&define.amd?define(e):e()}(function(){return function(e,t,r,a){function n(e){for(var t=-1,r=e?e.length:0,a=[];++t<r;){var n=e[t];n&&a.push(n)}return a}function o(e){return g.isWrapped(e)?e=[].slice.call(e):g.isNode(e)&&(e=[e]),e}function i(e){var t=$.data(e,"velocity");return null===t?a:t}function s(e){return function(t){return Math.round(t*e)*(1/e)}}function l(e,r,a,n){function o(e,t){return 1-3*t+3*e}function i(e,t){return 3*t-6*e}function s(e){return 3*e}function l(e,t,r){return((o(t,r)*e+i(t,r))*e+s(t))*e}function u(e,t,r){return 3*o(t,r)*e*e+2*i(t,r)*e+s(t)}function c(t,r){for(var n=0;m>n;++n){var o=u(r,e,a);if(0===o)return r;var i=l(r,e,a)-t;r-=i/o}return r}function p(){for(var t=0;b>t;++t)w[t]=l(t*x,e,a)}function f(t,r,n){var o,i,s=0;do i=r+(n-r)/2,o=l(i,e,a)-t,o>0?n=i:r=i;while(Math.abs(o)>h&&++s<v);return i}function d(t){for(var r=0,n=1,o=b-1;n!=o&&w[n]<=t;++n)r+=x;--n;var i=(t-w[n])/(w[n+1]-w[n]),s=r+i*x,l=u(s,e,a);return l>=y?c(t,s):0==l?s:f(t,r,r+x)}function g(){V=!0,(e!=r||a!=n)&&p()}var m=4,y=.001,h=1e-7,v=10,b=11,x=1/(b-1),S="Float32Array"in t;if(4!==arguments.length)return!1;for(var P=0;4>P;++P)if("number"!=typeof arguments[P]||isNaN(arguments[P])||!isFinite(arguments[P]))return!1;e=Math.min(e,1),a=Math.min(a,1),e=Math.max(e,0),a=Math.max(a,0);var w=S?new Float32Array(b):new Array(b),V=!1,C=function(t){return V||g(),e===r&&a===n?t:0===t?0:1===t?1:l(d(t),r,n)};C.getControlPoints=function(){return[{x:e,y:r},{x:a,y:n}]};var T="generateBezier("+[e,r,a,n]+")";return C.toString=function(){return T},C}function u(e,t){var r=e;return g.isString(e)?v.Easings[e]||(r=!1):r=g.isArray(e)&&1===e.length?s.apply(null,e):g.isArray(e)&&2===e.length?b.apply(null,e.concat([t])):g.isArray(e)&&4===e.length?l.apply(null,e):!1,r===!1&&(r=v.Easings[v.defaults.easing]?v.defaults.easing:h),r}function c(e){if(e)for(var t=(new Date).getTime(),r=0,n=v.State.calls.length;n>r;r++)if(v.State.calls[r]){var o=v.State.calls[r],s=o[0],l=o[2],u=o[3];u||(u=v.State.calls[r][3]=t-16);for(var f=Math.min((t-u)/l.duration,1),d=0,m=s.length;m>d;d++){var y=s[d],h=y.element;if(i(h)){var b=!1;if(l.display!==a&&null!==l.display&&"none"!==l.display){if("flex"===l.display){var S=["-webkit-box","-moz-box","-ms-flexbox","-webkit-flex"];$.each(S,function(e,t){x.setPropertyValue(h,"display",t)})}x.setPropertyValue(h,"display",l.display)}l.visibility&&"hidden"!==l.visibility&&x.setPropertyValue(h,"visibility",l.visibility);for(var w in y)if("element"!==w){var V=y[w],C,T=g.isString(V.easing)?v.Easings[V.easing]:V.easing;if(C=1===f?V.endValue:V.startValue+(V.endValue-V.startValue)*T(f),V.currentValue=C,x.Hooks.registered[w]){var k=x.Hooks.getRoot(w),A=i(h).rootPropertyValueCache[k];A&&(V.rootPropertyValue=A)}var F=x.setPropertyValue(h,w,V.currentValue+(0===parseFloat(C)?"":V.unitType),V.rootPropertyValue,V.scrollData);x.Hooks.registered[w]&&(i(h).rootPropertyValueCache[k]=x.Normalizations.registered[k]?x.Normalizations.registered[k]("extract",null,F[1]):F[1]),"transform"===F[0]&&(b=!0)}l.mobileHA&&i(h).transformCache.translate3d===a&&(i(h).transformCache.translate3d="(0px, 0px, 0px)",b=!0),b&&x.flushTransformCache(h)}}l.display!==a&&"none"!==l.display&&(v.State.calls[r][2].display=!1),l.visibility&&"hidden"!==l.visibility&&(v.State.calls[r][2].visibility=!1),l.progress&&l.progress.call(o[1],o[1],f,Math.max(0,u+l.duration-t),u),1===f&&p(r)}v.State.isTicking&&P(c)}function p(e,t){if(!v.State.calls[e])return!1;for(var r=v.State.calls[e][0],n=v.State.calls[e][1],o=v.State.calls[e][2],s=v.State.calls[e][4],l=!1,u=0,c=r.length;c>u;u++){var p=r[u].element;if(t||o.loop||("none"===o.display&&x.setPropertyValue(p,"display",o.display),"hidden"===o.visibility&&x.setPropertyValue(p,"visibility",o.visibility)),($.queue(p)[1]===a||!/\.velocityQueueEntryFlag/i.test($.queue(p)[1]))&&i(p)){i(p).isAnimating=!1,i(p).rootPropertyValueCache={};var f=!1;$.each(x.Lists.transforms3D,function(e,t){var r=/^scale/.test(t)?1:0,n=i(p).transformCache[t];i(p).transformCache[t]!==a&&new RegExp("^\\("+r+"[^.]").test(n)&&(f=!0,delete i(p).transformCache[t])}),o.mobileHA&&(f=!0,delete i(p).transformCache.translate3d),f&&x.flushTransformCache(p),x.Values.removeClass(p,"velocity-animating")}if(!t&&o.complete&&!o.loop&&u===c-1)try{o.complete.call(n,n)}catch(d){setTimeout(function(){throw d},1)}s&&o.loop!==!0&&s(n),o.loop!==!0||t||($.each(i(p).tweensContainer,function(e,t){/^rotate/.test(e)&&360===parseFloat(t.endValue)&&(t.endValue=0,t.startValue=360)}),v(p,"reverse",{loop:!0,delay:o.delay})),o.queue!==!1&&$.dequeue(p,o.queue)}v.State.calls[e]=!1;for(var g=0,m=v.State.calls.length;m>g;g++)if(v.State.calls[g]!==!1){l=!0;break}l===!1&&(v.State.isTicking=!1,delete v.State.calls,v.State.calls=[])}var f=function(){if(r.documentMode)return r.documentMode;for(var e=7;e>4;e--){var t=r.createElement("div");if(t.innerHTML="<!--[if IE "+e+"]><span></span><![endif]-->",t.getElementsByTagName("span").length)return t=null,e}return a}(),d=function(){var e=0;return t.webkitRequestAnimationFrame||t.mozRequestAnimationFrame||function(t){var r=(new Date).getTime(),a;return a=Math.max(0,16-(r-e)),e=r+a,setTimeout(function(){t(r+a)},a)}}(),g={isString:function(e){return"string"==typeof e},isArray:Array.isArray||function(e){return"[object Array]"===Object.prototype.toString.call(e)},isFunction:function(e){return"[object Function]"===Object.prototype.toString.call(e)},isNode:function(e){return e&&e.nodeType},isNodeList:function(e){return"object"==typeof e&&/^\[object (HTMLCollection|NodeList|Object)\]$/.test(Object.prototype.toString.call(e))&&e.length!==a&&(0===e.length||"object"==typeof e[0]&&e[0].nodeType>0)},isWrapped:function(e){return e&&(e.jquery||t.Zepto&&t.Zepto.zepto.isZ(e))},isSVG:function(e){return t.SVGElement&&e instanceof SVGElement},isEmptyObject:function(e){var t;for(t in e)return!1;return!0}},$,m=!1;if(e.fn&&e.fn.jquery?($=e,m=!0):$=t.Velocity.Utilities,8>=f&&!m)throw new Error("Velocity: IE8 and below require jQuery to be loaded before Velocity.");if(7>=f)return void(jQuery.fn.velocity=jQuery.fn.animate);var y=400,h="swing",v={State:{isMobile:/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),isAndroid:/Android/i.test(navigator.userAgent),isGingerbread:/Android 2\.3\.[3-7]/i.test(navigator.userAgent),isChrome:t.chrome,isFirefox:/Firefox/i.test(navigator.userAgent),prefixElement:r.createElement("div"),prefixMatches:{},scrollAnchor:null,scrollPropertyLeft:null,scrollPropertyTop:null,isTicking:!1,calls:[]},CSS:{},Utilities:$,Sequences:{},Easings:{},Promise:t.Promise,defaults:{queue:"",duration:y,easing:h,begin:null,complete:null,progress:null,display:a,loop:!1,delay:!1,mobileHA:!0,_cacheValues:!0},init:function(e){$.data(e,"velocity",{isSVG:g.isSVG(e),isAnimating:!1,computedStyle:null,tweensContainer:null,rootPropertyValueCache:{},transformCache:{}})},animate:null,hook:null,mock:!1,version:{major:1,minor:0,patch:0},debug:!1};t.pageYOffset!==a?(v.State.scrollAnchor=t,v.State.scrollPropertyLeft="pageXOffset",v.State.scrollPropertyTop="pageYOffset"):(v.State.scrollAnchor=r.documentElement||r.body.parentNode||r.body,v.State.scrollPropertyLeft="scrollLeft",v.State.scrollPropertyTop="scrollTop");var b=function(){function e(e){return-e.tension*e.x-e.friction*e.v}function t(t,r,a){var n={x:t.x+a.dx*r,v:t.v+a.dv*r,tension:t.tension,friction:t.friction};return{dx:n.v,dv:e(n)}}function r(r,a){var n={dx:r.v,dv:e(r)},o=t(r,.5*a,n),i=t(r,.5*a,o),s=t(r,a,i),l=1/6*(n.dx+2*(o.dx+i.dx)+s.dx),u=1/6*(n.dv+2*(o.dv+i.dv)+s.dv);return r.x=r.x+l*a,r.v=r.v+u*a,r}return function a(e,t,n){var o={x:-1,v:0,tension:null,friction:null},i=[0],s=0,l=1e-4,u=.016,c,p,f;for(e=parseFloat(e)||500,t=parseFloat(t)||20,n=n||null,o.tension=e,o.friction=t,c=null!==n,c?(s=a(e,t),p=s/n*u):p=u;;)if(f=r(f||o,p),i.push(1+f.x),s+=16,!(Math.abs(f.x)>l&&Math.abs(f.v)>l))break;return c?function(e){return i[e*(i.length-1)|0]}:s}}();v.Easings={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2},spring:function(e){return 1-Math.cos(4.5*e*Math.PI)*Math.exp(6*-e)}},$.each([["ease",[.25,.1,.25,1]],["ease-in",[.42,0,1,1]],["ease-out",[0,0,.58,1]],["ease-in-out",[.42,0,.58,1]],["easeInSine",[.47,0,.745,.715]],["easeOutSine",[.39,.575,.565,1]],["easeInOutSine",[.445,.05,.55,.95]],["easeInQuad",[.55,.085,.68,.53]],["easeOutQuad",[.25,.46,.45,.94]],["easeInOutQuad",[.455,.03,.515,.955]],["easeInCubic",[.55,.055,.675,.19]],["easeOutCubic",[.215,.61,.355,1]],["easeInOutCubic",[.645,.045,.355,1]],["easeInQuart",[.895,.03,.685,.22]],["easeOutQuart",[.165,.84,.44,1]],["easeInOutQuart",[.77,0,.175,1]],["easeInQuint",[.755,.05,.855,.06]],["easeOutQuint",[.23,1,.32,1]],["easeInOutQuint",[.86,0,.07,1]],["easeInExpo",[.95,.05,.795,.035]],["easeOutExpo",[.19,1,.22,1]],["easeInOutExpo",[1,0,0,1]],["easeInCirc",[.6,.04,.98,.335]],["easeOutCirc",[.075,.82,.165,1]],["easeInOutCirc",[.785,.135,.15,.86]]],function(e,t){v.Easings[t[0]]=l.apply(null,t[1])});var x=v.CSS={RegEx:{isHex:/^#([A-f\d]{3}){1,2}$/i,valueUnwrap:/^[A-z]+\((.*)\)$/i,wrappedValueAlreadyExtracted:/[0-9.]+ [0-9.]+ [0-9.]+( [0-9.]+)?/,valueSplit:/([A-z]+\(.+\))|(([A-z0-9#-.]+?)(?=\s|$))/gi},Lists:{colors:["fill","stroke","stopColor","color","backgroundColor","borderColor","borderTopColor","borderRightColor","borderBottomColor","borderLeftColor","outlineColor"],transformsBase:["translateX","translateY","scale","scaleX","scaleY","skewX","skewY","rotateZ"],transforms3D:["transformPerspective","translateZ","scaleZ","rotateX","rotateY"]},Hooks:{templates:{textShadow:["Color X Y Blur","black 0px 0px 0px"],boxShadow:["Color X Y Blur Spread","black 0px 0px 0px 0px"],clip:["Top Right Bottom Left","0px 0px 0px 0px"],backgroundPosition:["X Y","0% 0%"],transformOrigin:["X Y Z","50% 50% 0px"],perspectiveOrigin:["X Y","50% 50%"]},registered:{},register:function(){for(var e=0;e<x.Lists.colors.length;e++)x.Hooks.templates[x.Lists.colors[e]]=["Red Green Blue Alpha","255 255 255 1"];var t,r,a;if(f)for(t in x.Hooks.templates){r=x.Hooks.templates[t],a=r[0].split(" ");var n=r[1].match(x.RegEx.valueSplit);"Color"===a[0]&&(a.push(a.shift()),n.push(n.shift()),x.Hooks.templates[t]=[a.join(" "),n.join(" ")])}for(t in x.Hooks.templates){r=x.Hooks.templates[t],a=r[0].split(" ");for(var e in a){var o=t+a[e],i=e;x.Hooks.registered[o]=[t,i]}}},getRoot:function(e){var t=x.Hooks.registered[e];return t?t[0]:e},cleanRootPropertyValue:function(e,t){return x.RegEx.valueUnwrap.test(t)&&(t=t.match(x.Hooks.RegEx.valueUnwrap)[1]),x.Values.isCSSNullValue(t)&&(t=x.Hooks.templates[e][1]),t},extractValue:function(e,t){var r=x.Hooks.registered[e];if(r){var a=r[0],n=r[1];return t=x.Hooks.cleanRootPropertyValue(a,t),t.toString().match(x.RegEx.valueSplit)[n]}return t},injectValue:function(e,t,r){var a=x.Hooks.registered[e];if(a){var n=a[0],o=a[1],i,s;return r=x.Hooks.cleanRootPropertyValue(n,r),i=r.toString().match(x.RegEx.valueSplit),i[o]=t,s=i.join(" ")}return r}},Normalizations:{registered:{clip:function(e,t,r){switch(e){case"name":return"clip";case"extract":var a;return x.RegEx.wrappedValueAlreadyExtracted.test(r)?a=r:(a=r.toString().match(x.RegEx.valueUnwrap),a=a?a[1].replace(/,(\s+)?/g," "):r),a;case"inject":return"rect("+r+")"}},opacity:function(e,t,r){if(8>=f)switch(e){case"name":return"filter";case"extract":var a=r.toString().match(/alpha\(opacity=(.*)\)/i);return r=a?a[1]/100:1;case"inject":return t.style.zoom=1,parseFloat(r)>=1?"":"alpha(opacity="+parseInt(100*parseFloat(r),10)+")"}else switch(e){case"name":return"opacity";case"extract":return r;case"inject":return r}}},register:function(){9>=f||v.State.isGingerbread||(x.Lists.transformsBase=x.Lists.transformsBase.concat(x.Lists.transforms3D));for(var e=0;e<x.Lists.transformsBase.length;e++)!function(){var t=x.Lists.transformsBase[e];x.Normalizations.registered[t]=function(e,r,n){switch(e){case"name":return"transform";case"extract":return i(r)===a||i(r).transformCache[t]===a?/^scale/i.test(t)?1:0:i(r).transformCache[t].replace(/[()]/g,"");case"inject":var o=!1;switch(t.substr(0,t.length-1)){case"translate":o=!/(%|px|em|rem|vw|vh|\d)$/i.test(n);break;case"scal":case"scale":v.State.isAndroid&&i(r).transformCache[t]===a&&1>n&&(n=1),o=!/(\d)$/i.test(n);break;case"skew":o=!/(deg|\d)$/i.test(n);break;case"rotate":o=!/(deg|\d)$/i.test(n)}return o||(i(r).transformCache[t]="("+n+")"),i(r).transformCache[t]}}}();for(var e=0;e<x.Lists.colors.length;e++)!function(){var t=x.Lists.colors[e];x.Normalizations.registered[t]=function(e,r,n){switch(e){case"name":return t;case"extract":var o;if(x.RegEx.wrappedValueAlreadyExtracted.test(n))o=n;else{var i,s={black:"rgb(0, 0, 0)",blue:"rgb(0, 0, 255)",gray:"rgb(128, 128, 128)",green:"rgb(0, 128, 0)",red:"rgb(255, 0, 0)",white:"rgb(255, 255, 255)"};/^[A-z]+$/i.test(n)?i=s[n]!==a?s[n]:s.black:x.RegEx.isHex.test(n)?i="rgb("+x.Values.hexToRgb(n).join(" ")+")":/^rgba?\(/i.test(n)||(i=s.black),o=(i||n).toString().match(x.RegEx.valueUnwrap)[1].replace(/,(\s+)?/g," ")}return 8>=f||3!==o.split(" ").length||(o+=" 1"),o;case"inject":return 8>=f?4===n.split(" ").length&&(n=n.split(/\s+/).slice(0,3).join(" ")):3===n.split(" ").length&&(n+=" 1"),(8>=f?"rgb":"rgba")+"("+n.replace(/\s+/g,",").replace(/\.(\d)+(?=,)/g,"")+")"}}}()}},Names:{camelCase:function(e){return e.replace(/-(\w)/g,function(e,t){return t.toUpperCase()})},SVGAttribute:function(e){var t="width|height|x|y|cx|cy|r|rx|ry|x1|x2|y1|y2";return(f||v.State.isAndroid&&!v.State.isChrome)&&(t+="|transform"),new RegExp("^("+t+")$","i").test(e)},prefixCheck:function(e){if(v.State.prefixMatches[e])return[v.State.prefixMatches[e],!0];for(var t=["","Webkit","Moz","ms","O"],r=0,a=t.length;a>r;r++){var n;if(n=0===r?e:t[r]+e.replace(/^\w/,function(e){return e.toUpperCase()}),g.isString(v.State.prefixElement.style[n]))return v.State.prefixMatches[e]=n,[n,!0]}return[e,!1]}},Values:{hexToRgb:function(e){var t=/^#?([a-f\d])([a-f\d])([a-f\d])$/i,r=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i,a;return e=e.replace(t,function(e,t,r,a){return t+t+r+r+a+a}),a=r.exec(e),a?[parseInt(a[1],16),parseInt(a[2],16),parseInt(a[3],16)]:[0,0,0]},isCSSNullValue:function(e){return 0==e||/^(none|auto|transparent|(rgba\(0, ?0, ?0, ?0\)))$/i.test(e)},getUnitType:function(e){return/^(rotate|skew)/i.test(e)?"deg":/(^(scale|scaleX|scaleY|scaleZ|alpha|flexGrow|flexHeight|zIndex|fontWeight)$)|((opacity|red|green|blue|alpha)$)/i.test(e)?"":"px"},getDisplayType:function(e){var t=e.tagName.toString().toLowerCase();return/^(b|big|i|small|tt|abbr|acronym|cite|code|dfn|em|kbd|strong|samp|var|a|bdo|br|img|map|object|q|script|span|sub|sup|button|input|label|select|textarea)$/i.test(t)?"inline":/^(li)$/i.test(t)?"list-item":/^(tr)$/i.test(t)?"table-row":"block"},addClass:function(e,t){e.classList?e.classList.add(t):e.className+=(e.className.length?" ":"")+t},removeClass:function(e,t){e.classList?e.classList.remove(t):e.className=e.className.toString().replace(new RegExp("(^|\\s)"+t.split(" ").join("|")+"(\\s|$)","gi")," ")}},getPropertyValue:function(e,r,n,o){function s(e,r){function n(){u&&x.setPropertyValue(e,"display","none")}var l=0;if(8>=f)l=$.css(e,r);else{var u=!1;if(/^(width|height)$/.test(r)&&0===x.getPropertyValue(e,"display")&&(u=!0,x.setPropertyValue(e,"display",x.Values.getDisplayType(e))),!o){if("height"===r&&"border-box"!==x.getPropertyValue(e,"boxSizing").toString().toLowerCase()){var c=e.offsetHeight-(parseFloat(x.getPropertyValue(e,"borderTopWidth"))||0)-(parseFloat(x.getPropertyValue(e,"borderBottomWidth"))||0)-(parseFloat(x.getPropertyValue(e,"paddingTop"))||0)-(parseFloat(x.getPropertyValue(e,"paddingBottom"))||0);return n(),c}if("width"===r&&"border-box"!==x.getPropertyValue(e,"boxSizing").toString().toLowerCase()){var p=e.offsetWidth-(parseFloat(x.getPropertyValue(e,"borderLeftWidth"))||0)-(parseFloat(x.getPropertyValue(e,"borderRightWidth"))||0)-(parseFloat(x.getPropertyValue(e,"paddingLeft"))||0)-(parseFloat(x.getPropertyValue(e,"paddingRight"))||0);return n(),p}}var d;d=i(e)===a?t.getComputedStyle(e,null):i(e).computedStyle?i(e).computedStyle:i(e).computedStyle=t.getComputedStyle(e,null),(f||v.State.isFirefox)&&"borderColor"===r&&(r="borderTopColor"),l=9===f&&"filter"===r?d.getPropertyValue(r):d[r],(""===l||null===l)&&(l=e.style[r]),n()}if("auto"===l&&/^(top|right|bottom|left)$/i.test(r)){var g=s(e,"position");("fixed"===g||"absolute"===g&&/top|left/i.test(r))&&(l=$(e).position()[r]+"px")}return l}var l;if(x.Hooks.registered[r]){var u=r,c=x.Hooks.getRoot(u);n===a&&(n=x.getPropertyValue(e,x.Names.prefixCheck(c)[0])),x.Normalizations.registered[c]&&(n=x.Normalizations.registered[c]("extract",e,n)),l=x.Hooks.extractValue(u,n)}else if(x.Normalizations.registered[r]){var p,d;p=x.Normalizations.registered[r]("name",e),"transform"!==p&&(d=s(e,x.Names.prefixCheck(p)[0]),x.Values.isCSSNullValue(d)&&x.Hooks.templates[r]&&(d=x.Hooks.templates[r][1])),l=x.Normalizations.registered[r]("extract",e,d)}return/^[\d-]/.test(l)||(l=i(e)&&i(e).isSVG&&x.Names.SVGAttribute(r)?/^(height|width)$/i.test(r)?e.getBBox()[r]:e.getAttribute(r):s(e,x.Names.prefixCheck(r)[0])),x.Values.isCSSNullValue(l)&&(l=0),v.debug>=2&&console.log("Get "+r+": "+l),l},setPropertyValue:function(e,r,a,n,o){var s=r;if("scroll"===r)o.container?o.container["scroll"+o.direction]=a:"Left"===o.direction?t.scrollTo(a,o.alternateValue):t.scrollTo(o.alternateValue,a);else if(x.Normalizations.registered[r]&&"transform"===x.Normalizations.registered[r]("name",e))x.Normalizations.registered[r]("inject",e,a),s="transform",a=i(e).transformCache[r];else{if(x.Hooks.registered[r]){var l=r,u=x.Hooks.getRoot(r);n=n||x.getPropertyValue(e,u),a=x.Hooks.injectValue(l,a,n),r=u}if(x.Normalizations.registered[r]&&(a=x.Normalizations.registered[r]("inject",e,a),r=x.Normalizations.registered[r]("name",e)),s=x.Names.prefixCheck(r)[0],8>=f)try{e.style[s]=a}catch(c){v.debug&&console.log("Browser does not support ["+a+"] for ["+s+"]")}else i(e)&&i(e).isSVG&&x.Names.SVGAttribute(r)?e.setAttribute(r,a):e.style[s]=a;v.debug>=2&&console.log("Set "+r+" ("+s+"): "+a)}return[s,a]},flushTransformCache:function(e){function t(t){return parseFloat(x.getPropertyValue(e,t))}var r="";if((f||v.State.isAndroid&&!v.State.isChrome)&&i(e).isSVG){var a={translate:[t("translateX"),t("translateY")],skewX:[t("skewX")],skewY:[t("skewY")],scale:1!==t("scale")?[t("scale"),t("scale")]:[t("scaleX"),t("scaleY")],rotate:[t("rotateZ"),0,0]};$.each(i(e).transformCache,function(e){/^translate/i.test(e)?e="translate":/^scale/i.test(e)?e="scale":/^rotate/i.test(e)&&(e="rotate"),a[e]&&(r+=e+"("+a[e].join(" ")+") ",delete a[e])})}else{var n,o;$.each(i(e).transformCache,function(t){return n=i(e).transformCache[t],"transformPerspective"===t?(o=n,!0):(9===f&&"rotateZ"===t&&(t="rotate"),void(r+=t+n+" "))}),o&&(r="perspective"+o+" "+r)}x.setPropertyValue(e,"transform",r)}};x.Hooks.register(),x.Normalizations.register(),v.hook=function(e,t,r){var n=a;return e=o(e),$.each(e,function(e,o){if(i(o)===a&&v.init(o),r===a)n===a&&(n=v.CSS.getPropertyValue(o,t));else{var s=v.CSS.setPropertyValue(o,t,r);"transform"===s[0]&&v.CSS.flushTransformCache(o),n=s}}),n};var S=function(){function e(){return f?k.promise||null:d}function s(){function e(e){function f(e,t){var r=a,n=a,i=a;return g.isArray(e)?(r=e[0],!g.isArray(e[1])&&/^[\d-]/.test(e[1])||g.isFunction(e[1])||x.RegEx.isHex.test(e[1])?i=e[1]:(g.isString(e[1])&&!x.RegEx.isHex.test(e[1])||g.isArray(e[1]))&&(n=t?e[1]:u(e[1],s.duration),e[2]!==a&&(i=e[2]))):r=e,t||(n=n||s.easing),g.isFunction(r)&&(r=r.call(o,V,w)),g.isFunction(i)&&(i=i.call(o,V,w)),[r||0,n,i]}function d(e,t){var r,a;return a=(t||0).toString().toLowerCase().replace(/[%A-z]+$/,function(e){return r=e,""}),r||(r=x.Values.getUnitType(e)),[a,r]}function m(){var e={myParent:o.parentNode||r.body,position:x.getPropertyValue(o,"position"),fontSize:x.getPropertyValue(o,"fontSize")},a=e.position===L.lastPosition&&e.myParent===L.lastParent,n=e.fontSize===L.lastFontSize;L.lastParent=e.myParent,L.lastPosition=e.position,L.lastFontSize=e.fontSize;var s=100,l={};if(n&&a)l.emToPx=L.lastEmToPx,l.percentToPxWidth=L.lastPercentToPxWidth,l.percentToPxHeight=L.lastPercentToPxHeight;else{var u=i(o).isSVG?r.createElementNS("http://www.w3.org/2000/svg","rect"):r.createElement("div");v.init(u),e.myParent.appendChild(u),$.each(["overflow","overflowX","overflowY"],function(e,t){v.CSS.setPropertyValue(u,t,"hidden")}),v.CSS.setPropertyValue(u,"position",e.position),v.CSS.setPropertyValue(u,"fontSize",e.fontSize),v.CSS.setPropertyValue(u,"boxSizing","content-box"),$.each(["minWidth","maxWidth","width","minHeight","maxHeight","height"],function(e,t){v.CSS.setPropertyValue(u,t,s+"%")}),v.CSS.setPropertyValue(u,"paddingLeft",s+"em"),l.percentToPxWidth=L.lastPercentToPxWidth=(parseFloat(x.getPropertyValue(u,"width",null,!0))||1)/s,l.percentToPxHeight=L.lastPercentToPxHeight=(parseFloat(x.getPropertyValue(u,"height",null,!0))||1)/s,l.emToPx=L.lastEmToPx=(parseFloat(x.getPropertyValue(u,"paddingLeft"))||1)/s,e.myParent.removeChild(u)}return null===L.remToPx&&(L.remToPx=parseFloat(x.getPropertyValue(r.body,"fontSize"))||16),null===L.vwToPx&&(L.vwToPx=parseFloat(t.innerWidth)/100,L.vhToPx=parseFloat(t.innerHeight)/100),l.remToPx=L.remToPx,l.vwToPx=L.vwToPx,l.vhToPx=L.vhToPx,v.debug>=1&&console.log("Unit ratios: "+JSON.stringify(l),o),l}if(s.begin&&0===V)try{s.begin.call(h,h)}catch(y){setTimeout(function(){throw y},1)}if("scroll"===A){var S=/^x$/i.test(s.axis)?"Left":"Top",C=parseFloat(s.offset)||0,T,F,E;s.container?g.isWrapped(s.container)||g.isNode(s.container)?(s.container=s.container[0]||s.container,T=s.container["scroll"+S],E=T+$(o).position()[S.toLowerCase()]+C):s.container=null:(T=v.State.scrollAnchor[v.State["scrollProperty"+S]],F=v.State.scrollAnchor[v.State["scrollProperty"+("Left"===S?"Top":"Left")]],E=$(o).offset()[S.toLowerCase()]+C),l={scroll:{rootPropertyValue:!1,startValue:T,currentValue:T,endValue:E,unitType:"",easing:s.easing,scrollData:{container:s.container,direction:S,alternateValue:F}},element:o},v.debug&&console.log("tweensContainer (scroll): ",l.scroll,o)}else if("reverse"===A){if(!i(o).tweensContainer)return void $.dequeue(o,s.queue);"none"===i(o).opts.display&&(i(o).opts.display="auto"),"hidden"===i(o).opts.visibility&&(i(o).opts.visibility="visible"),i(o).opts.loop=!1,i(o).opts.begin=null,i(o).opts.complete=null,P.easing||delete s.easing,P.duration||delete s.duration,s=$.extend({},i(o).opts,s);var j=$.extend(!0,{},i(o).tweensContainer);for(var H in j)if("element"!==H){var N=j[H].startValue;j[H].startValue=j[H].currentValue=j[H].endValue,j[H].endValue=N,g.isEmptyObject(P)||(j[H].easing=s.easing),v.debug&&console.log("reverse tweensContainer ("+H+"): "+JSON.stringify(j[H]),o)}l=j}else if("start"===A){var j;i(o).tweensContainer&&i(o).isAnimating===!0&&(j=i(o).tweensContainer),$.each(b,function(e,t){if(RegExp("^"+x.Lists.colors.join("$|^")+"$").test(e)){var r=f(t,!0),n=r[0],o=r[1],i=r[2];if(x.RegEx.isHex.test(n)){for(var s=["Red","Green","Blue"],l=x.Values.hexToRgb(n),u=i?x.Values.hexToRgb(i):a,c=0;c<s.length;c++)b[e+s[c]]=[l[c],o,u?u[c]:u];delete b[e]}}});for(var z in b){var q=f(b[z]),R=q[0],M=q[1],I=q[2];z=x.Names.camelCase(z);var W=x.Hooks.getRoot(z),B=!1;if(i(o).isSVG||x.Names.prefixCheck(W)[1]!==!1||x.Normalizations.registered[W]!==a){(s.display!==a&&null!==s.display&&"none"!==s.display||s.visibility&&"hidden"!==s.visibility)&&/opacity|filter/.test(z)&&!I&&0!==R&&(I=0),s._cacheValues&&j&&j[z]?(I===a&&(I=j[z].endValue+j[z].unitType),B=i(o).rootPropertyValueCache[W]):x.Hooks.registered[z]?I===a?(B=x.getPropertyValue(o,W),I=x.getPropertyValue(o,z,B)):B=x.Hooks.templates[W][1]:I===a&&(I=x.getPropertyValue(o,z));var G,D,X,Y=!1;if(G=d(z,I),I=G[0],X=G[1],G=d(z,R),R=G[0].replace(/^([+-\/*])=/,function(e,t){return Y=t,""}),D=G[1],I=parseFloat(I)||0,R=parseFloat(R)||0,"%"===D&&(/^(fontSize|lineHeight)$/.test(z)?(R/=100,D="em"):/^scale/.test(z)?(R/=100,D=""):/(Red|Green|Blue)$/i.test(z)&&(R=R/100*255,D="")),/[\/*]/.test(Y))D=X;else if(X!==D&&0!==I)if(0===R)D=X;else{p=p||m();var Q=/margin|padding|left|right|width|text|word|letter/i.test(z)||/X$/.test(z)||"x"===z?"x":"y";switch(X){case"%":I*="x"===Q?p.percentToPxWidth:p.percentToPxHeight;break;case"px":break;default:I*=p[X+"ToPx"]}switch(D){case"%":I*=1/("x"===Q?p.percentToPxWidth:p.percentToPxHeight);break;case"px":break;default:I*=1/p[D+"ToPx"]}}switch(Y){case"+":R=I+R;break;case"-":R=I-R;break;case"*":R=I*R;break;case"/":R=I/R}l[z]={rootPropertyValue:B,startValue:I,currentValue:I,endValue:R,unitType:D,easing:M},v.debug&&console.log("tweensContainer ("+z+"): "+JSON.stringify(l[z]),o)}else v.debug&&console.log("Skipping ["+W+"] due to a lack of browser support.")}l.element=o}l.element&&(x.Values.addClass(o,"velocity-animating"),O.push(l),""===s.queue&&(i(o).tweensContainer=l,i(o).opts=s),i(o).isAnimating=!0,V===w-1?(v.State.calls.length>1e4&&(v.State.calls=n(v.State.calls)),v.State.calls.push([O,h,s,null,k.resolver]),v.State.isTicking===!1&&(v.State.isTicking=!0,c())):V++)}var o=this,s=$.extend({},v.defaults,P),l={},p;if(i(o)===a&&v.init(o),parseFloat(s.delay)&&s.queue!==!1&&$.queue(o,s.queue,function(e){v.velocityQueueEntryFlag=!0,i(o).delayTimer={setTimeout:setTimeout(e,parseFloat(s.delay)),next:e}}),v.mock===!0)s.duration=1;else switch(s.duration.toString().toLowerCase()){case"fast":s.duration=200;break;case"normal":s.duration=y;break;case"slow":s.duration=600;break;default:s.duration=parseFloat(s.duration)||1}s.easing=u(s.easing,s.duration),s.begin&&!g.isFunction(s.begin)&&(s.begin=null),s.progress&&!g.isFunction(s.progress)&&(s.progress=null),s.complete&&!g.isFunction(s.complete)&&(s.complete=null),s.display!==a&&null!==s.display&&(s.display=s.display.toString().toLowerCase(),"auto"===s.display&&(s.display=v.CSS.Values.getDisplayType(o))),s.visibility&&(s.visibility=s.visibility.toString().toLowerCase()),s.mobileHA=s.mobileHA&&v.State.isMobile&&!v.State.isGingerbread,s.queue===!1?s.delay?setTimeout(e,s.delay):e():$.queue(o,s.queue,function(t,r){return r===!0?(k.promise&&k.resolver(h),!0):(v.velocityQueueEntryFlag=!0,void e(t))}),""!==s.queue&&"fx"!==s.queue||"inprogress"===$.queue(o)[0]||$.dequeue(o)}var l=arguments[0]&&($.isPlainObject(arguments[0].properties)&&!arguments[0].properties.names||g.isString(arguments[0].properties)),f,d,m,h,b,P;if(g.isWrapped(this)?(f=!1,m=0,h=this,d=this):(f=!0,m=1,h=l?arguments[0].elements:arguments[0]),h=o(h)){l?(b=arguments[0].properties,P=arguments[0].options):(b=arguments[m],P=arguments[m+1]);var w=h.length,V=0;if("stop"!==b&&!$.isPlainObject(P)){var C=m+1;P={};for(var T=C;T<arguments.length;T++)g.isArray(arguments[T])||!/fast|normal|slow/i.test(arguments[T].toString())&&!/^\d/.test(arguments[T])?g.isString(arguments[T])||g.isArray(arguments[T])?P.easing=arguments[T]:g.isFunction(arguments[T])&&(P.complete=arguments[T]):P.duration=arguments[T]}var k={promise:null,resolver:null,rejecter:null};f&&v.Promise&&(k.promise=new v.Promise(function(e,t){k.resolver=e,k.rejecter=t}));var A;switch(b){case"scroll":A="scroll";break;case"reverse":A="reverse";break;case"stop":$.each(h,function(e,t){i(t)&&i(t).delayTimer&&(clearTimeout(i(t).delayTimer.setTimeout),i(t).delayTimer.next&&i(t).delayTimer.next(),delete i(t).delayTimer)});var F=[];return $.each(v.State.calls,function(e,t){t&&$.each(t[1],function(r,n){var o=g.isString(P)?P:"";return P!==a&&t[2].queue!==o?!0:void $.each(h,function(t,r){r===n&&(P!==a&&($.each($.queue(r,o),function(e,t){g.isFunction(t)&&t(null,!0)}),$.queue(r,o,[])),i(r)&&""===o&&$.each(i(r).tweensContainer,function(e,t){t.endValue=t.currentValue}),F.push(e))})})}),$.each(F,function(e,t){p(t,!0)}),k.promise&&k.resolver(h),e();default:if(!$.isPlainObject(b)||g.isEmptyObject(b)){if(g.isString(b)&&v.Sequences[b]){var E=$.extend({},P),j=E.duration,H=E.delay||0;return E.backwards===!0&&(h=h.reverse()),$.each(h,function(e,t){parseFloat(E.stagger)?E.delay=H+parseFloat(E.stagger)*e:g.isFunction(E.stagger)&&(E.delay=H+E.stagger.call(t,e,w)),E.drag&&(E.duration=parseFloat(j)||(/^(callout|transition)/.test(b)?1e3:y),E.duration=Math.max(E.duration*(E.backwards?1-e/w:(e+1)/w),.75*E.duration,200)),v.Sequences[b].call(t,t,E||{},e,w,h,k.promise?k:a)}),e()}var N="Velocity: First argument ("+b+") was not a property map, a known action, or a registered sequence. Aborting.";return k.promise?k.rejecter(new Error(N)):console.log(N),e()}A="start"}var L={lastParent:null,lastPosition:null,lastFontSize:null,lastPercentToPxWidth:null,lastPercentToPxHeight:null,lastEmToPx:null,remToPx:null,vwToPx:null,vhToPx:null},O=[];
$.each(h,function(e,t){g.isNode(t)&&s.call(t)});var E=$.extend({},v.defaults,P),z;if(E.loop=parseInt(E.loop),z=2*E.loop-1,E.loop)for(var q=0;z>q;q++){var R={delay:E.delay};q===z-1&&(R.display=E.display,R.visibility=E.visibility,R.complete=E.complete),S(h,"reverse",R)}return e()}};v=$.extend(S,v),v.animate=S;var P=t.requestAnimationFrame||d;return v.State.isMobile||r.hidden===a||r.addEventListener("visibilitychange",function(){r.hidden?(P=function(e){return setTimeout(function(){e(!0)},16)},c()):P=t.requestAnimationFrame||d}),e.Velocity=v,e!==t&&(e.fn.velocity=S,e.fn.velocity.defaults=v.defaults),$.each(["Down","Up"],function(e,t){v.Sequences["slide"+t]=function(e,r,n,o,i,s){var l=$.extend({},r),u=l.begin,c=l.complete,p={height:"",marginTop:"",marginBottom:"",paddingTop:"",paddingBottom:""},f={};l.display===a&&(l.display="Down"===t?"inline"===v.CSS.Values.getDisplayType(e)?"inline-block":"block":"none"),l.begin=function(){u&&u.call(i,i),f.overflow=e.style.overflow,e.style.overflow="hidden";for(var r in p){f[r]=e.style[r];var a=v.CSS.getPropertyValue(e,r);p[r]="Down"===t?[a,0]:[0,a]}},l.complete=function(){for(var t in f)e.style[t]=f[t];c&&c.call(i,i),s&&s.resolver(i)},v(e,p,l)}}),$.each(["In","Out"],function(e,t){v.Sequences["fade"+t]=function(e,r,n,o,i,s){var l=$.extend({},r),u={opacity:"In"===t?1:0},c=l.complete;l.complete=n!==o-1?l.begin=null:function(){c&&c.call(i,i),s&&s.resolver(i)},l.display===a&&(l.display="In"===t?"auto":"none"),v(this,u,l)}}),v}(window.jQuery||window.Zepto||window,window,document)});
// Avoid `console` errors in browsers that lack a console.
(function() {
    var method;
    var noop = function () {};
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});

    while (length--) {
        method = methods[length];

        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }
}());

// Place any jQuery/helper plugins in here.


var requestAnimationFrame = window.requestAnimationFrame || 
                            window.mozRequestAnimationFrame || 
                            window.webkitRequestAnimationFrame ||
                            window.msRequestAnimationFrame;


function mobile() {
	if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
		return true;
	} else {
		return false;
	}
}


var Squares = {

	init : function() {
		var _ = this;
		_.gridContainerWidth = $(".grid-container").width();
		_.largeHolderWidth = Math.floor(_.gridContainerWidth / 3.001);

		_.larges();
		_.squarify();
		

	},

	larges : function() {
		var _ = this;

		$(".large-holder").each(function() {
			$(this).outerWidth(_.largeHolderWidth, true);
		});
	},

	squarify : function() {
		$('.square').each(function() {
			$(this).height($(this).width());
		});
	}
}

var ShareIcons = {

	init : function() {
		var _ = this;

		_.setHover();
	},

	setHover : function() {
		var _ = this;

		$(".share-icon").hover(function() {

			_.shareAnimation($(this), 'in');
		}, function() {
			_.shareAnimation($(this), 'out');
		});

	},

	shareAnimation : function(element, direction) {
		// NOTE : changed $elem.closest('.square') to $elem.closest('.share-fill-container')
		// to deal with pinterest sharing specific to v 1.2. Will need to figure out solution
		// for original grid use when the time comes.


		var $elem = element;
	
		if(direction == 'in') {


			if ($elem.attr('data-share-to') == 'twitter') {

				var fill = $elem.parent().find('.share-fill-twitter');
				$elem.siblings('.tweet-share-title').stop().fadeIn('fast');

			} else
			if ($elem.attr('data-share-to') == 'pinterest') {

				var fill = $elem.parent().find('.share-fill-pinterest');
				$elem.siblings('.pin-share-title').stop().fadeIn('fast');

			}
				
			fill.stop().addClass('share-fill-enlarge');
			// $elem.siblings('.share-title').stop().fadeIn('fast');
			
		} else 
		if (direction == 'out') {

			if ($elem.attr('data-share-to') == 'twitter') {
				var fill = $elem.parent().find('.share-fill-twitter');
				$elem.siblings('.tweet-share-title').stop().fadeOut('fast');
			} else
			if ($elem.attr('data-share-to') == 'pinterest') {
				var fill = $elem.parent().find('.share-fill-pinterest');
				$elem.siblings('.pin-share-title').stop().fadeOut('fast');
			}

			fill.stop().removeClass('share-fill-enlarge');
			// $elem.siblings('.share-title').stop().fadeOut('fast');
		}

	}

}

var Posters = {

	init : function() {
		var _ = this;

		$(".active").each(function() {
			_.setClickListener($(this));
			_.setBackground($(this));
		});

	},

	setClickListener : function($element) {
		var _ = this;

		$element.click(function() {

			if ($(".grid-container").hasClass('shifted')) {
				_.hide($(this));
			} else {
				_.show($(this));
			}

		});

	},

	setBackground : function($element) {

		if ($element.attr('data-poster-path')) {

			var imagePath = $element.attr('data-poster-path');

			$element.attr('style', 'background-image:url(' + imagePath + ')')

		}

	},

	show : function($element) {

		var photo = $element.attr('data-poster-path');

		$(".grid-container").velocity({right: '90%'}, 1500, 'easeOutExpo').addClass('shifted');
		$("#full-poster-image").attr('src', photo);

	},

	hide : function($element) {

		$(".grid-container").velocity({right: '0%'}, 1500, 'easeOutExpo').removeClass('shifted');

	}

}

var Svg = {

	init : function() {
		var _ = this;

		_.animate();
	},

	animate : function() {

		var $paths = $(".st2");

		$paths.each(function() {

			var element = $(this).get(0);

			var length = element.getTotalLength();

			element.style.transition = element.style.WebkitTransition ='none';
			
			element.style.strokeDasharray = length + ' ' + length;
			element.style.strokeDashoffset = length;

			element.getBoundingClientRect();
			//element.style.transition = element.style.WebkitTransition = 'all .1s linear';
			//element.style.strokeDashoffset = '0';

			$(window).scroll(function() {

				if( parseInt(element.style.strokeDashoffset, 10) > 0 ) {

					element.style.strokeDashoffset = length - $(window).scrollTop();

				}
					
			});

		});
	
	}

}

var Nav = {

	// Called in main.blade.php
	init : function() {
		var _ = this;

		_.listeners($(".hamburger"));
		_.positionTracking();
		_.smoothScroll();

	},

	smoothScroll : function() {
		var _ = this;

		$('a[href*=#]').bind('click', function() {
		    
			_.hide();

		    var target = $(this).attr("href");

		    var distance = $(target).offset().top - $(target).parent().offset().top + $(target).parent().scrollTop();
		    	
		    $('.container').stop().animate({ scrollTop: distance }, 400, function() {
		        location.hash = target; 
		    });



		    return false;

		});

	},

	listeners : function(element) {
		var _ = this;

		element.click(function() {

			if ($(".container").hasClass('shifted')) {
				_.hide();
			} else {
				_.show();
			}

		});

		$('.container').scroll(function() {
			var windowHeight = $(window).height();

			if ($(this).scrollTop() > (windowHeight - 20)) {
				$(".patty").addClass('dark');
			} else if(!$(".container").hasClass('shifted')){
				$(".patty").removeClass('dark');
			}
		})

	},

	contrastCheck : function() {
		var windowHeight = $(window).height();
		
		console.log($('.container').scrollTop());

		if ($(".container").scrollTop() > (windowHeight - 20)) {
			$(".patty").addClass('dark');
		} else {
			$(".patty").removeClass('dark');
		}

	},

	show : function() {
		var _ = this;

		$(".container").velocity({left: '220px'}, 600, 'easeOutExpo').addClass('shifted');
		$(".video-container").velocity({left: '220px'}, 600, 'easeOutExpo').addClass('shifted');
		$(".patty").addClass('dark');
		_.morph('show');
		$(".container").on('click', function(event) {
			_.hide();
			$(this).off(event);
		});
	},

	hide : function() {
		var _ = this;

		$(".container").velocity({left: '0px'}, 600, 'easeOutExpo').removeClass('shifted');
		$(".video-container").velocity({left: '0px'}, 600, 'easeOutExpo').removeClass('shifted');
		_.contrastCheck();
		_.morph('hide');
	},

	morph : function(action) {

		if(action == 'show') {
			$(".patty:first-child").addClass('tilt-up');
			$(".patty:nth-child(2)").hide();
			$(".patty:last-child").addClass('tilt-down');
		} else if(action == 'hide') {
			$(".patty:first-child").removeClass('tilt-up');
			$(".patty:nth-child(2)").show();
			$(".patty:last-child").removeClass('tilt-down');
		}

	},

	

	positionTracking : function() {
		
		var _ = this;

		var sectionOne = $(".hero");
		var sectionTwo = $(".paragraphs-background");
		var sectionThree = $(".footer-container");
		var sectionOneStart = sectionOne.position().top;
		var sectionOneEnd = sectionOneStart + sectionOne.height();
		var sectionTwoStart = sectionTwo.position().top;
		var sectionTwoEnd = sectionTwoStart + sectionTwo.height();
		var sectionThreeStart = sectionThree.position().top;
		var sectionThreeEnd = sectionThreeStart + sectionThree.height();

		// Retrieve the scope from the angular controller NavController,
		// it is currently controlling the nav link styles.
		var element = document.querySelector('[ng-controller=NavController]');
		var $scope = angular.element(element).scope();

		if (mobile()) {
			var bottomMargin = sectionThreeStart;
		} else {
			var bottomMargin = $('.container').get(0).scrollHeight - $(window).height();
		}

		_.scrollPosition($('.container'),bottomMargin, $scope, sectionOneStart, sectionOneEnd, sectionTwoStart);

		$(".container").scroll(function() {

			_.scrollPosition($(this),bottomMargin, $scope, sectionOneStart, sectionOneEnd, sectionTwoStart);

		});

	},

	scrollPosition : function($container, bottomMargin, $scope, sectionOneStart, sectionOneEnd, sectionTwoStart) {

		var scrolled = $container.scrollTop();
		var offset = 100;
		
		if(scrolled >= (sectionOneStart) && scrolled <= (sectionOneEnd - offset)) {

		    $scope.$apply(function() {
		        $scope.atHero = true;
		        $scope.atParagraphs = false;
		        $scope.atFooter = false;
		    });

		} else 
		if (scrolled >= (sectionTwoStart - offset) && scrolled < bottomMargin ) {

			$scope.$apply(function() {
			    $scope.atHero = false;
			    $scope.atParagraphs = true;
			    $scope.atFooter = false;
			});

		} else
		if (scrolled >= bottomMargin) {

			$scope.$apply(function() {
			    $scope.atHero = false;
			    $scope.atParagraphs = false;
			    $scope.atFooter = true;
			});

		}

	}
}

var InfoNav = {

	init : function() {
		//called seperately in info-template view file
		var _ = this;

		_.listeners($(".info-hamburger"));

	},

	listeners : function(element) {
		var _ = this;

		element.click(function() {

			if ($(".info-container").hasClass('shifted')) {
				_.hide();
			} else {
				_.show();
			}

		});

	},

	show : function() {
		var _ = this;

		$(".info-container").velocity({left: '220px'}, 600, 'easeOutExpo').addClass('shifted');
		_.morph('show');
	},

	hide : function() {
		var _ = this;

		$(".info-container").velocity({left: '0px'}, 600, 'easeOutExpo').removeClass('shifted');
		_.morph('hide');
	},

	morph : function(action) {

		if(action == 'show') {
			$(".patty:first-child").addClass('tilt-up');
			$(".patty:nth-child(2)").hide();
			$(".patty:last-child").addClass('tilt-down');
		} else if(action == 'hide') {
			$(".patty:first-child").removeClass('tilt-up');
			$(".patty:nth-child(2)").show();
			$(".patty:last-child").removeClass('tilt-down');
		}

	}
}

var Walkthrough = {

	init : function() {
		var _ = this;

		//_.smartPause();
		if(!mobile()) {
			_.parallaxActivate();
			_.smartPause();	
		}

		_.twitter();
		
	},

	video : document.getElementById('walkthrough-video'),

	smartPause : function() {
		var _ = this;
		var heroHeight = $(".hero").height();

		$(".container").scroll(function() {

			if($(this).scrollTop() > heroHeight && !_.video.paused) {
				
				_.video.pause();

			} else if($(this).scrollTop() < heroHeight && _.video.paused ) {
				
				_.video.play();

			}

		});
	},

	parallax : function() {
		var _ = this;
		var heroHeight = $(".hero").height();
		var block = $(".hero-content-container");
		var bottomValue = parseInt(block.css('bottom'),10);
		
			if($(".container").scrollTop() < heroHeight) {
				var distance = $('.container').scrollTop() * 0.5;

				block.css('transform', 'translateY(' + distance + 'px)');
				
			}

		requestAnimationFrame(Walkthrough.parallax);
		
	},

	parallaxActivate : function() {
		var _ = this;
		
        requestAnimationFrame(Walkthrough.parallax);

	},

	twitter : function() {

		$(".twitter-share-video").hover(function() {
			$(".twitter-share-video-text").fadeIn('fast');
			$(".twitter-share-video-overlay").addClass('twitter-share-video-overlay-enlarge');

		}, function() {
			$(".twitter-share-video-text").fadeOut('fast');
			$(".twitter-share-video-overlay").removeClass('twitter-share-video-overlay-enlarge');
		});

	}

}

var Paragraphs = {

	init : function() {
		var _ = this;

		_.progressIndicator();
		_.highlightsActivate();

	},

	progressIndicator : function() {
		var section = $(".paragraph-section");
		var position = section.position();
		var height = section.height() - ($(window).height() / 2);
		var counter = $(".paragraphs-section-progress");

		$(".container").scroll(function() {
			var fromTop = $(this).scrollTop();
			
			var percentage = (fromTop - (position.top / 2)) / height;
			var parsedPercentage = Math.round(percentage.toFixed(2) * 100);

			if(parsedPercentage < 0) {
				var insert = 0;
				counter.fadeOut('fast');
			} else if(parsedPercentage > 100) {
				var insert = 100;
				counter.fadeOut('fast');
			} else {
				var insert = parsedPercentage;
				counter.fadeIn('fast');
			}

			$("#percentage").html(insert);
			
		});

	},

	highlightedSections : $(".highlight"),

	windowHeight : $(window).height(),

	highlights : function() {

		var _ = this;

		Paragraphs.highlightedSections.each(function() {


			if ($(this).offset().top < Paragraphs.windowHeight / 6.667 && $(this).offset().top > -20 ) {

				$(this).css('background-color', 'yellow');

			} else {

				$(this).css('background-color', 'transparent');

			}

		});

		requestAnimationFrame(Paragraphs.highlights);

	},	

	highlightsActivate : function() {

		requestAnimationFrame(Paragraphs.highlights);

	}

}

var Twitter = {

	init : function() {
		var _ = this;

		_.popup();
	},

	popup : function() {

		$('.share-to-twitter').click(function() {

			var url = $(this).attr('href');

			window.open(url,"", "height=500px, width=500px");

			return false;

		});

	}

}

var Pinterest = {

	init : function() {
		var _ = this;

		_.popup();

	},

	popup : function() {

		$(".share-to-pinterest").click(function() {

			var url = $(this).attr('href');

			window.open(url,"", "height=500px, width=500px");

			return false;

		});

	}

}

var Footer = {

	// Called in main.blade.php
	init : function() {
		var _ = this;

		if(!mobile()) {

			setTimeout(function(){
				requestAnimationFrame(Footer.slideUp);
			}, 500);
			

		}

	},
	footer : $(".footer"),
	footerHeight : $(".footer").height(),
	

	slideUp : function() {
		var containerHeight = $(".container").get(0).scrollHeight;
		var scrolled = $(".container").scrollTop();
		var activatePoint = containerHeight - (Footer.footerHeight / 4) - $(window).height();

		if (scrolled > activatePoint) {

			var distance = scrolled - (containerHeight - (containerHeight - activatePoint));
			var moveBy = 500 - (distance * 4);

			if (moveBy > 0) {

			}

			Footer.footer.css('transform', 'translateY(' + moveBy + 'px)');

		}

		if (scrolled < activatePoint) {

			Footer.footer.css('transform', 'translateY(500px)');

		}

		requestAnimationFrame(Footer.slideUp);

	}

}




/**
 * iOS overflow scrollToTop v0.1
 * https://github.com/prud/ios-overflow-scroll-to-top
 */

 var ScrollTop = {

 	init : function() {
 		var _ = this;

 		_.visible();
 	},

 	visible : function() {

 		$(".container").scroll(function() {

 			if($(this).scrollTop() > $(window).height()) {

 				$(".back-to-top").fadeIn();

 			} else {

 				$(".back-to-top").fadeOut();
 			}

 		});

 	}

 }

 

 var headerEl = document.querySelector('.back-to-top');

 var scrollToTop = function(el) {

   el = typeof el === 'object' ? el : document.querySelector(el);
   if (!el) { return; }

   var offset = el.scrollTop;
   if (offset === 0) { return; }

   //el.style.overflow = 'hidden'; // stops momentum scrolling
   var stepSize = offset / (offset < 1000 ?  15 : 30);

   var _animate = function() {

     el.scrollTop -= stepSize;

     if (el.scrollTop > 0) { // keep scrolling up
       setTimeout(_animate, 10);
     }
     else { // enough
       _onFinish();
     }
   };

   var _onFinish = function() {
    // el.style.overflow = 'scroll'; 
     
   };

   _animate();
 };


 headerEl.addEventListener('click', function() {
   window.scrollToTop('.container');
 });


function measureText(txt, font) {
    var id = 'text-width-tester',
        $tag = $('#' + id);
    if (!$tag.length) {
        $tag = $('<span id="' + id + '" style="display:none;font:' + font + ';">' + txt + '</span>');
        $('body').append($tag);
    } else {
        $tag.css({font:font}).html(txt);
    }
    return {
        width: $tag.width(),
        height: $tag.height()
    }
}

function shrinkToFill(input, fontSize, fontWeight, fontFamily) {
    var $input = $(input),
        txt = $input.val(),
        maxWidth = $input.width() + 5, // add some padding
        font = fontWeight + " " + fontSize + "px " + fontFamily;
    // see how big the text is at the default size
    var textWidth = measureText(txt, font).width;
    if (textWidth > maxWidth) {
        // if it's too big, calculate a new font size
        // the extra .9 here makes up for some over-measures
        fontSize = fontSize * maxWidth / textWidth * .9;
        font = fontWeight + " " + fontSize + "px " + fontFamily;
        // and set the style on the input
        $input.css({font:font});
    } else {
        // in case the font size has been set small and 
        // the text was then deleted
        $input.css({font:font});
    }
}


$(document).ready(function() {

	if (CONFIG.page === 'home') {

		ShareIcons.init();
		Squares.init();
		Posters.init();
		Nav.init();
		Walkthrough.twitter();
		Paragraphs.init();
		Twitter.init();
		Pinterest.init();
		Footer.init();
		// ScrollUp.init();
		ScrollTop.init();

	}

	
	if (CONFIG.page === 'digital-interaction') {

		$("#di-user-input").keyup(function() {
			console.log("bam");
	        shrinkToFill(this, '90', "", "Open Sans, sans-serif");
	    });

	}
	
});

$(window).resize(function() {

	//Squares.init();

});
var app = angular.module('iwantbetter', []);
app.factory('Interaction', ['$http', function($http) {

	return {

		get : function() {

			return $http.get('/interaction');

		},

		store : function(data) {

			return $http.post('/interaction', data);

		}

	}

}]);
app.directive('digitalInteraction', ['Interaction', function(Interaction) {

	return {

		restrict : 'E',

		template : '<div class="interaction-container">' +
			'<div class="interaction-inner-container">' +
				'<div class="equation-container">' +
					'<span class="equation-input">'+
						'<form ng-submit="store()">' +
						'<input type="text" id="di-user-input" autofocus maxlength="20" ng-model="text" ng-disabled="submitted">' +
						'</form>' +
					'</span>' +	
					'<div class="psa-list-container" id="psa-list-container" ng-style="{ opacity : submitted ? \'1\' : \'0\' }">' +
						'<span ap-text-resize ap-text-resize-font-size="90" class="psa" ng-repeat="submission in submissions" ng-style="{ \'transform\' : \'translate(0,\' + submission.offset + \'px )\' }" ng-class="{ \'faded\' : submission.active === false }">{{ submission.text }}</span>' +
					'</div>' +

					'<img src="../img/digital-interaction/di-logo.png">' +
					'<span class="equation-title">Abortion</span>' +
				'</div>' +
				'<h1 ng-style="{ opacity : submitted ? \'0\' : \'1\' }">Make your own PSA. <span class="yellow">How can you do better than abortion?</span> There is no wrong answer, go!</h1>' +
				'<h2 ng-style="{ opacity : submitted ? \'0\' : \'1\' }">It\'s easy! Just start typing,<br> press enter when you\'re done</h2>' +
				'<div class="di-share-container" ng-show="submitted">' +
					'<h3>Share the poster you made!</h3>' +
					'<i class="fa fa-twitter"></i><i class="fa fa-pinterest"></i><i class="fa fa-facebook"></i><i class="fa fa-link"></i>' +
					'<p>Just click/tap^ desired medium</p>' +
				'</div>' +
			'</div>' +
		'</div>',

		link : function($scope, element, attrs) {

			$scope.submitted = false;

			$scope.submissions = [];

			var threshold;
			var enabler;
			var reset;
			var baseActiveItemIndex;

			$scope.init = function() {

				getPreviousSubmissions();
				setScrollListener();
			
			}

			function getPreviousSubmissions() {

				Interaction.get().success(function(response) {

					$scope.submissions = response.data;

					baseActiveItemIndex = Math.floor($scope.submissions.length / 2);

					$scope.parseListItemDistances(baseActiveItemIndex);

				}).error(function(response) {

					console.log("there was an error");

				});

			}

			$scope.store = function() {

				var data = { text : $scope.text };
				var nanobar = new Nanobar({ bg : '#F9E400' });

				nanobar.go(60);

				Interaction.store(data).success(function(response) {

					var half = $scope.submissions.length / 2;
					$scope.submitted = true;

					$scope.text = '';

					$scope.submissions.splice(half, 0, response.data);

					baseActiveItemIndex = Math.floor($scope.submissions.length / 2);

					$scope.parseListItemDistances(baseActiveItemIndex);

					nanobar.go(100);

				}).error(function(response) {

					console.log("Sorry, there was an error");

					nanobar.go(100);

				});

			}

			$scope.parseListItemDistances = function(activeItemIndex) {

				var offsetAmount = 150;
				
				for (var i = 0; i < $scope.submissions.length; i++) {

					if (i < activeItemIndex) {

						$scope.submissions[i].offset = (activeItemIndex - i) * offsetAmount * -1;
						$scope.submissions[i].active = false;


					} else if(i > activeItemIndex) {

						$scope.submissions[i].offset = (i - activeItemIndex) * offsetAmount;
						$scope.submissions[i].active = false;

						
					} else if (i === activeItemIndex) {

						$scope.submissions[i].offset = 0;
						$scope.submissions[i].active = true;

						
					}

					
				}

			}

			function setScrollListener() {

				var listContainer = document.getElementById('psa-list-container');

				if (listContainer.addEventListener) {

					listContainer.addEventListener("mousewheel", scrollHandler, false);
					listContainer.addEventListener("DOMMouseScroll", scrollHandler, false);

				} else {

					listContainer.attachEvent("onmousewheel", scrollHandler);

				}

			}

			threshold = 30;
			enabler = false;
			reset = true;

			function scrollHandler(e) {

				var e = window.event || e; // old IE support
				var delta = Math.max(-1, Math.min(1, (e.wheelDelta || -e.detail)));

				if (Math.abs(e.wheelDelta) < threshold) {

					reset = true;

				} else if (Math.abs(e.wheelDelta) > threshold && enabler === false && reset === true) {

					enabler = true;
					reset = false;
					
					if (e.wheelDelta < 0) {

						baseActiveItemIndex++;

						$scope.parseListItemDistances(baseActiveItemIndex);

					} else {

						baseActiveItemIndex--;

						$scope.parseListItemDistances(baseActiveItemIndex);

					}


				} else if (Math.abs(e.wheelDelta) > threshold && enabler === true) {

					enabler = false;

				}

				$scope.$apply();

			}

			$scope.init();

		}

	}

}]);


app.directive('apTextResize', ['$window', function($window) {

	return {

		restrict : 'A',

		link : function($scope, element, attrs) {
						
			$scope.$watch('element.textContent', function() {

				calculateFontSize();

			});

			function calculateFontSize() {

				var width = element[0].offsetWidth;
				var maxWidth = width + 5;
				var stringLength;
				var letterSize;
				var adjustedFontSize;

				stringLength = element[0].textContent.length;
				fontSize = attrs.apTextResizeFontSize;
				letterSize = fontSize * 0.5;

				if (letterSize * stringLength > width) {

					adjustedFontSize = (width / stringLength) * 1.5;

					element[0].style.fontSize = adjustedFontSize + 'px';

					console.log(element[0].style.fontSize);

				}

				

			}


		}

	}

}]);
app.controller('FormController', function($scope, $http) {

    $scope.successPrompt = false;

    $scope.submit = function() {

        var nanobar = new Nanobar({
            bg : '#F9E400'
        });

        nanobar.go(45);

        var newStickerRequest = {

            fullName : $scope.submission.fullName,
            address : $scope.submission.address,
            address2 : $scope.submission.address2,
            email : $scope.submission.email

        }

        $http({

            method: 'POST',
            url: CONFIG.submitStickerPath,
            headers: { 'Content-Type' : 'application/x-www-form-urlencoded' },
            data: $.param(newStickerRequest)

        }).success(function() {

            nanobar.go(70);
            nanobar.go(100);
            $scope.successPrompt = true;

        }).error(function(data) {

            console.log(data.error);

        });

    };

    $scope.subscribe = function() {

        var newSubscriber = {

            fullName : $scope.submission.fullName,
            address : $scope.submission.address,
            address2 : $scope.submission.address2,
            email : $scope.submission.email

        }

        $http({

            method: 'POST',
            url: '{{ route("subscribe") }}',
            headers: { 'Content-Type' : 'application/x-www-form-urlencoded' },
            data: $.param(newSubscriber)

        }).success(function() {

            $scope.hideOverlay();

        }).error(function(data) {

            console.log(data.error);

        });

    }

    $scope.hideOverlay = function() {

        $scope.successPrompt = false;
        $scope.submission = {};

    }


});
app.controller('NavController',['$scope', function($scope) {

    $scope.atHero = false;
    $scope.atParagraphs = false;
    $scope.atFooter = false;

}]);