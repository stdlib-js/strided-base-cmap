"use strict";var o=function(e,r){return function(){try{return r||e((r={exports:{}}).exports,r),r.exports}catch(a){throw (r=0, a)}};};var c=o(function(j,f){
function g(e,r,a,i,t,u,m,y){var n,s,v;if(e<=0)return t;for(n=i,s=m,v=0;v<e;v++)t.set(y(r.get(n)),s),n+=a,s+=u;return t}f.exports=g
});var x=o(function(k,q){
var p=require('@stdlib/strided-base-stride2offset/dist'),l=c();function O(e,r,a,i,t,u){return l(e,r,a,p(e,a),i,t,p(e,t),u)}q.exports=O
});var R=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),d=x(),b=c();R(d,"ndarray",b);module.exports=d;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
