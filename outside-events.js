!function(n,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports["v-outside-events"]=e():n["v-outside-events"]=e()}(this,(function(){return function(n){var e={};function t(o){if(e[o])return e[o].exports;var r=e[o]={i:o,l:!1,exports:{}};return n[o].call(r.exports,r,r.exports,t),r.l=!0,r.exports}return t.m=n,t.c=e,t.d=function(n,e,o){t.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:o})},t.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},t.t=function(n,e){if(1&e&&(n=t(n)),8&e)return n;if(4&e&&"object"==typeof n&&n&&n.__esModule)return n;var o=Object.create(null);if(t.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var r in n)t.d(o,r,function(e){return n[e]}.bind(null,r));return o},t.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return t.d(e,"a",e),e},t.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},t.p="",t(t.s=0)}([function(n,e,t){n.exports=t(1)},function(n,e,t){"use strict";function o(n){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n})(n)}t.r(e);var r=function(){return"undefined"!==("undefined"==typeof window?"undefined":o(window))},u=function(n,e,t,o,u){if(function(n){return!!n&&!(!n.value||"function"!=typeof n.value)}(t)){var i,f=t.value,a=(i=n,function(n){r()&&window.removeEventListener(i,n)}),l=function(n){return function(e){r()&&window.addEventListener(n,e)}}(n),d=function(n,e){return function t(o){var r=n;if(r&&0!==r.length){for(var u=o.path,i=!1,f=0;f<u.length;f++){var a=u[f];if(r===a){i=!0;break}if(r instanceof Array)for(var l=0;l<r.length;l++){var d=r[l];if(d===a){i=!0;break}if(d.$el===a){i=!0;break}}if(i)break}i||c(n)}else e(t)}}(e,a),p=!1,s={evtname:n,el:e,cancel:function(){a(d),p=!1},get working(){return p},cb:f};return e&&f?(a(d),l(d),p=!0,s):s}},i=[],f=function(n){var e=i.findIndex((function(e){return e.el===n}));return{index:e,temp:i[e]}},c=function(n){var e=f(n).temp;e&&e.cb&&"function"==typeof e.cb&&e.cb()},a=function(n,e,t,o){var r=l(e);if(r){var f=u(r,n,e);console.info("instart",f),i.push(f)}},l=function(n){if(n){var e=n.name.split("-").pop();return["click","mousedown","mouseup","mouseenter","mouseover","mousemove","touchstart","touchend"].filter((function(n){return n===e}))?e:void 0}},d={bind:function(n,e,t,o){console.info(this,arguments),a(n,e)},inserted:function(n,e,t,o){},update:function(n,e,t,o){!function(n,e){if(e&&"function"==typeof e){var t=f(n).temp;t&&(t.cb=e)}}(n,e.value)},componentUpdated:function(n,e,t,o){},unbind:function(n,e,t,o){!function(n){var e=f(n),t=e.temp,o=e.index,r=t.cancel;"function"==typeof r&&r(),i.splice(o,1)}(n)}};e.default=d}]).default}));