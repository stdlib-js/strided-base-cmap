// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e="undefined"!=typeof globalThis?globalThis:e||self).cmap=t()}(this,(function(){"use strict";var e="function"==typeof Object.defineProperty?Object.defineProperty:null;var t=function(){try{return e({},"x",{}),!0}catch(e){return!1}},r=Object.defineProperty,n=Object.prototype,o=n.toString,a=n.__defineGetter__,i=n.__defineSetter__,u=n.__lookupGetter__,l=n.__lookupSetter__;var c=r,f=function(e,t,r){var c,f,p,_;if("object"!=typeof e||null===e||"[object Array]"===o.call(e))throw new TypeError("invalid argument. First argument must be an object. Value: `"+e+"`.");if("object"!=typeof r||null===r||"[object Array]"===o.call(r))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+r+"`.");if((f="value"in r)&&(u.call(e,t)||l.call(e,t)?(c=e.__proto__,e.__proto__=n,delete e[t],e[t]=r.value,e.__proto__=c):e[t]=r.value),p="get"in r,_="set"in r,f&&(p||_))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return p&&a&&a.call(e,t,r.get),_&&i&&i.call(e,t,r.set),e},p=t()?c:f;var _=function(e,t,r,n,o,a){var i,u,l;if(e<=0)return n;for(i=r<0?(1-e)*r:0,u=o<0?(1-e)*o:0,l=0;l<e;l++)n.set(a(t.get(i)),u),i+=r,u+=o;return n};return function(e,t,r){p(e,t,{configurable:!1,enumerable:!1,writable:!1,value:r})}(_,"ndarray",(function(e,t,r,n,o,a,i,u){var l,c,f;if(e<=0)return o;for(l=n,c=i,f=0;f<e;f++)o.set(u(t.get(l)),c),l+=r,c+=a;return o})),_}));
//# sourceMappingURL=bundle.js.map
