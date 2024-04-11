"use strict";var o=function(r,e){return function(){return e||r((e={exports:{}}).exports,e),e.exports}};var x=o(function(h,p){
function g(r,e,u,s,a,v){var i,n,t;if(r<=0)return s;for(u<0?i=(1-r)*u:i=0,a<0?n=(1-r)*a:n=0,t=0;t<r;t++)s.set(v(e.get(i)),n),i+=u,n+=a;return s}p.exports=g
});var m=o(function(j,l){
function y(r,e,u,s,a,v,i,n){var t,f,c;if(r<=0)return a;for(t=s,f=i,c=0;c<r;c++)a.set(n(e.get(t)),f),t+=u,f+=v;return a}l.exports=y
});var O=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),q=x(),R=m();O(q,"ndarray",R);module.exports=q;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
