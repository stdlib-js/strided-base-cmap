// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var e,t;e=this,t=function(){"use strict";var e="function"==typeof Object.defineProperty?Object.defineProperty:null,t=function(){try{return e({},"x",{}),!0}catch(e){return!1}},r=Object.defineProperty,o=Object.prototype,n=o.toString,a=o.__defineGetter__,i=o.__defineSetter__,l=o.__lookupGetter__,u=o.__lookupSetter__,c=r,f=function(e,t,r){var c,f,p,_;if("object"!=typeof e||null===e||"[object Array]"===n.call(e))throw new TypeError("invalid argument. First argument must be an object. Value: `"+e+"`.");if("object"!=typeof r||null===r||"[object Array]"===n.call(r))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+r+"`.");if((f="value"in r)&&(l.call(e,t)||u.call(e,t)?(c=e.__proto__,e.__proto__=o,delete e[t],e[t]=r.value,e.__proto__=c):e[t]=r.value),p="get"in r,_="set"in r,f&&(p||_))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return p&&a&&a.call(e,t,r.get),_&&i&&i.call(e,t,r.set),e},p=t()?c:f;function _(e,t,r,o,n,a){var i,l,u;if(e<=0)return o;for(i=r<0?(1-e)*r:0,l=n<0?(1-e)*n:0,u=0;u<e;u++)o.set(a(t.get(i)),l),i+=r,l+=n;return o}return p(_,"ndarray",{configurable:!1,enumerable:!1,writable:!1,value:function(e,t,r,o,n,a,i,l){var u,c,f;if(e<=0)return n;for(u=o,c=i,f=0;f<e;f++)n.set(l(t.get(u)),c),u+=r,c+=a;return n}}),_},"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e="undefined"!=typeof globalThis?globalThis:e||self).cmap=t();
//# sourceMappingURL=index.js.map
