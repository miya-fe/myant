(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["demos-my-avatar-index"],{"1bf9":function(a,t,e){"use strict";var r=e("dd80"),n=e.n(r);n.a},"278b":function(a,t,e){var r=e("24fb");t=r(!1),t.push([a.i,".avatar-outer[data-v-0134cca0]{display:inline-block;font-size:0}.common-avatar[data-v-0134cca0]{background:#e9e9e9;border-radius:50%}.small-avatar[data-v-0134cca0]{width:60px;height:60px}.middle-avatar[data-v-0134cca0]{width:80px;height:80px}.large-avatar[data-v-0134cca0]{width:120px;height:120px}.huge-avatar[data-v-0134cca0]{width:144px;height:144px}",""]),a.exports=t},"2b0b":function(a,t,e){var r=e("278b");"string"===typeof r&&(r=[[a.i,r,""]]),r.locals&&(a.exports=r.locals);var n=e("4f06").default;n("aa104ca4",r,!0,{sourceMap:!1,shadowMode:!1})},3097:function(a,t,e){"use strict";e("c975"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r={name:"Avatar",props:{src:{type:String,required:!0},size:{type:String,default:"middle",validator:function(a){return-1!==["huge","large","middle","small"].indexOf(a)}}},data:function(){return{}},computed:{},methods:{}};t.default=r},"37af":function(a,t,e){"use strict";e.r(t);var r=e("eeae"),n=e.n(r);for(var i in r)["default"].indexOf(i)<0&&function(a){e.d(t,a,(function(){return r[a]}))}(i);t["default"]=n.a},"5e56":function(a,t,e){"use strict";e.r(t);var r=e("3097"),n=e.n(r);for(var i in r)["default"].indexOf(i)<0&&function(a){e.d(t,a,(function(){return r[a]}))}(i);t["default"]=n.a},8491:function(a,t,e){"use strict";var r;e.d(t,"b",(function(){return n})),e.d(t,"c",(function(){return i})),e.d(t,"a",(function(){return r}));var n=function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("v-uni-view",{staticClass:"avatar-outer"},[e("v-uni-image",{class:["common-avatar",a.size+"-avatar"],attrs:{src:a.src}})],1)},i=[]},"91f4":function(a,t,e){var r=e("24fb");t=r(!1),t.push([a.i,".avatar-demo[data-v-442715c6]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between}",""]),a.exports=t},"971e":function(a,t,e){"use strict";e.r(t);var r=e("8491"),n=e("5e56");for(var i in n)["default"].indexOf(i)<0&&function(a){e.d(t,a,(function(){return n[a]}))}(i);e("e591");var c,u=e("f0c5"),o=Object(u["a"])(n["default"],r["b"],r["c"],!1,null,"0134cca0",null,!1,r["a"],c);t["default"]=o.exports},dd80:function(a,t,e){var r=e("91f4");"string"===typeof r&&(r=[[a.i,r,""]]),r.locals&&(a.exports=r.locals);var n=e("4f06").default;n("5b5d089f",r,!0,{sourceMap:!1,shadowMode:!1})},e151:function(a,t,e){"use strict";e.r(t);var r=e("f56a"),n=e("37af");for(var i in n)["default"].indexOf(i)<0&&function(a){e.d(t,a,(function(){return n[a]}))}(i);e("1bf9");var c,u=e("f0c5"),o=Object(u["a"])(n["default"],r["b"],r["c"],!1,null,"442715c6",null,!1,r["a"],c);t["default"]=o.exports},e591:function(a,t,e){"use strict";var r=e("2b0b"),n=e.n(r);n.a},eeae:function(a,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r={data:function(){return{size:"small"}},mounted:function(){console.log("avatar demo ！！2200")}};t.default=r},f56a:function(a,t,e){"use strict";e.d(t,"b",(function(){return n})),e.d(t,"c",(function(){return i})),e.d(t,"a",(function(){return r}));var r={myAvatar:e("971e").default},n=function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("v-uni-view",{staticClass:"avatar-demo"},[e("my-avatar",{attrs:{size:"huge",src:"http://hh-oss-picture.miyapay.com/box/94dc6578bb06b89a2ab95910a4966ba6.png"}}),e("my-avatar",{attrs:{size:"large",src:"http://hh-oss-picture.miyapay.com/box/94dc6578bb06b89a2ab95910a4966ba6.png"}}),e("my-avatar"),e("my-avatar",{attrs:{size:a.size,src:"http://hh-oss-picture.miyapay.com/box/94dc6578bb06b89a2ab95910a4966ba6.png"}})],1)},i=[]}}]);