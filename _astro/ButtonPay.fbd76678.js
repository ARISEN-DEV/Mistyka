import{r as a}from"./index.45a47ed6.js";var i={},p={get exports(){return i},set exports(e){i=e}},n={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var c=a,_=Symbol.for("react.element"),x=Symbol.for("react.fragment"),d=Object.prototype.hasOwnProperty,m=c.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,y={key:!0,ref:!0,__self:!0,__source:!0};function l(e,r,u){var t,o={},s=null,f=null;u!==void 0&&(s=""+u),r.key!==void 0&&(s=""+r.key),r.ref!==void 0&&(f=r.ref);for(t in r)d.call(r,t)&&!y.hasOwnProperty(t)&&(o[t]=r[t]);if(e&&e.defaultProps)for(t in r=e.defaultProps,r)o[t]===void 0&&(o[t]=r[t]);return{$$typeof:_,type:e,key:s,ref:f,props:o,_owner:m.current}}n.Fragment=x;n.jsx=l;n.jsxs=l;(function(e){e.exports=n})(p);function g(){const[e,r]=a.useState(!1);return i.jsx("button",{className:`py-2 px-4 ${e?"bg-green-500 hover:bg-green-700  ":"bg-blue-500 hover:bg-blue-700"}  text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg`,onClick:()=>r(!e),children:e?"Pago exitoso":"Pagar ahora"})}export{g as default};
