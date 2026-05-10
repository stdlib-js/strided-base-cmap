"use strict";var o=function(r,e){return function(){return e||r((e={exports:{}}).exports,e),e.exports}};var c=o(function(j,f){
function g(r,e,t,i,a,u,m,y){var n,s,v;if(r<=0)return a;for(n=i,s=m,v=0;v<r;v++)a.set(y(e.get(n)),s),n+=t,s+=u;return a}f.exports=g
});var x=o(function(k,q){
var p=require('@stdlib/strided-base-stride2offset/dist'),l=c();function O(r,e,t,i,a,u){return l(r,e,t,p(r,t),i,a,p(r,a),u)}q.exports=O
});var R=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),d=x(),b=c();R(d,"ndarray",b);module.exports=d;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
