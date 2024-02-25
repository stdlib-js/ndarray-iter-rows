// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import e from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@v0.2.1-esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-plain-object@v0.2.1-esm/index.mjs";import{isPrimitive as s}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-boolean@v0.2.1-esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-ndarray-like@v0.2.1-esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-base-assert-is-read-only@v0.2.1-esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-has-own-property@v0.2.1-esm/index.mjs";import d from"https://cdn.jsdelivr.net/gh/stdlib-js/symbol-iterator@v0.2.1-esm/index.mjs";import o from"https://cdn.jsdelivr.net/gh/stdlib-js/array-base-zeros@v0.2.1-esm/index.mjs";import m from"https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-shape@v0.2.1-esm/index.mjs";import l from"https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-base-numel@v0.2.1-esm/index.mjs";import a from"https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-base-slice@v0.2.0-esm/index.mjs";import{assign as j}from"https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-base-next-cartesian-index@v0.2.1-esm/index.mjs";import p from"https://cdn.jsdelivr.net/gh/stdlib-js/slice-base-args2multislice@v0.2.1-esm/index.mjs";import h from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@v0.2.1-esm/index.mjs";function v(f){var b,c,x,y,g,u,w,E,T,F,k;if(!t(f))throw new TypeError(h("1jx4f",f));if(y={writable:!1},arguments.length>1){if(!r(b=arguments[1]))throw new TypeError(h("1jx2V",b));if(i(b,"readonly")){if(!s(b.readonly))throw new TypeError(h("1jx2o","readonly",b.readonly));if(y.writable=!b.readonly,y.writable&&n(f))throw new Error(h("1jxF4"))}}if((x=(c=m(f)).length)<2)throw new TypeError(h("1jxF2"));return 0===(F=l(c))&&(u=!0),F/=c[x-1],T=c[E=x-2],k=-1,(w=o(x))[x-1]=null,e(g={},"next",(function(){var e,r;if(k+=1,u||k>=F)return{done:!0};e=p(w),r=(w[E]+1)%T,w[E]=r,0===r&&(w=j(c,"row-major",w,E-1,w));return{value:a(f,e,!0,y.writable),done:!1}})),e(g,"return",(function(e){if(u=!0,arguments.length)return{value:e,done:!0};return{done:!0}})),d&&e(g,d,(function(){return v(f,y)})),g}export{v as default};
//# sourceMappingURL=index.mjs.map
