!function(){var e={974:function(){var e=document.querySelector(".burger-icon"),t=document.querySelector(".burger"),r=document.querySelectorAll(".burger__list-elem");function n(){t.classList.toggle("burger_active"),document.body.classList.toggle("overflow"),e.classList.toggle("burger-icon_active")}e.addEventListener("click",n),r.forEach((function(e){return e.addEventListener("click",n)}))},247:function(){var e=document.querySelector(".range"),t=document.querySelector(".form__range-value");function r(){t.innerHTML="".concat(e.value,"%")}e.addEventListener("input",r),r()},877:function(){var e=document.querySelector(".select"),t=(document.querySelector(".select__desc"),document.querySelector(".select__current")),r=document.querySelector(".select__body"),n=document.querySelectorAll(".select__item"),c=document.querySelector(".select__icon");function o(){var e=this.innerHTML;t.innerText=e}e.addEventListener("click",(function(){e.classList.toggle("select_active"),t.classList.toggle("select__current_active"),r.classList.toggle("select__body_active"),c.classList.toggle("select__icon_active")})),n.forEach((function(e){e.addEventListener("click",o)}))},91:function(e){"use strict";e.exports=function(e,t){return t||(t={}),e?(e=String(e.__esModule?e.default:e),t.hash&&(e+=t.hash),t.maybeNeedQuotes&&/[\t\n\f\r "'=<>`]/.test(e)?'"'.concat(e,'"'):e):e}},539:function(e,t,r){"use strict";e.exports=r.p+"assets/circle.svg"},483:function(e,t,r){"use strict";e.exports=r.p+"assets/logo.svg"}},t={};function r(n){var c=t[n];if(void 0!==c)return c.exports;var o=t[n]={exports:{}};return e[n](o,o.exports,r),o.exports}r.m=e,r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,{a:t}),t},r.d=function(e,t){for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},function(){var e;r.g.importScripts&&(e=r.g.location+"");var t=r.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var n=t.getElementsByTagName("script");n.length&&(e=n[n.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),r.p=e}(),r.b=document.baseURI||self.location.href,function(){"use strict";var e=r(91),t=r.n(e),n=new URL(r(483),r.b),c=new URL(r(539),r.b);t()(n),t()(c),r(247),r(877),r(974)}()}();