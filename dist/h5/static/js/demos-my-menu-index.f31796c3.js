(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["demos-my-menu-index"],{4888:function(t,e,n){"use strict";n.r(e);var i=n("c931"),a=n.n(i);for(var r in i)["default"].indexOf(r)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(r);e["default"]=a.a},"4b36":function(t,e,n){"use strict";n.r(e);var i=n("8868"),a=n.n(i);for(var r in i)["default"].indexOf(r)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(r);e["default"]=a.a},5617:function(t,e,n){var i=n("24fb");e=i(!1),e.push([t.i,".demo[data-v-4ec4e0fa]{height:100vh}.demo .title[data-v-4ec4e0fa]{margin-top:%?40?%}.demo-content[data-v-4ec4e0fa]{color:rgba(0,0,0,.45);font-size:%?24?%}",""]),t.exports=e},"65a5":function(t,e,n){"use strict";n.r(e);var i=n("e017"),a=n("4888");for(var r in a)["default"].indexOf(r)<0&&function(t){n.d(e,t,(function(){return a[t]}))}(r);n("c1cd");var c,o=n("f0c5"),l=Object(o["a"])(a["default"],i["b"],i["c"],!1,null,"4ec4e0fa",null,!1,i["a"],c);e["default"]=l.exports},"794f":function(t,e,n){"use strict";var i;n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return r})),n.d(e,"a",(function(){return i}));var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{class:{"vertical-container":"vertical"===t.direction,"horizontal-container":"horizontal"===t.direction}},[n("v-uni-view",{staticClass:"menu-wrapper",style:t.styleObj},[n("v-uni-scroll-view",{class:[t.direction+"-scroll-wrapper"],attrs:{"scroll-y":"vertical"===t.direction,"scroll-x":"horizontal"===t.direction}},[n("v-uni-view",{class:t.direction+"-list"},t._l(t.menus,(function(e,i){return n("v-uni-view",{key:i,class:{"vertical-list-item":"vertical"===t.direction,"horizontal-list-item":"horizontal"===t.direction,active:i===t.currentIndex},style:{borderBottomColor:t.themeColor},on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.selectedItem(e,i)}}},[e.src?n("v-uni-image",{staticClass:"list-item-icon",attrs:{src:e.src}}):t._e(),e.class?n("i",{staticClass:"icon",class:e.class}):t._e(),n("v-uni-text",{staticClass:"list-item-title"},[t._v(t._s(e.title))])],1)})),1)],1)],1),n("v-uni-view",{staticClass:"content",style:t.contentObj},[t._t("default")],2)],1)},r=[]},"860f":function(t,e,n){"use strict";var i=n("a0e0"),a=n.n(i);a.a},8868:function(t,e,n){"use strict";var i=n("4ea4");n("c975"),n("a15b"),n("a9e3"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=i(n("5530")),r={name:"MyMenu",props:{menus:{type:Array,default:function(){return[]}},themeColor:{type:String,default:"#f70"},width:{type:Number,default:160},direction:{type:String,default:"vertical",validator:function(t){return-1!==["vertical","horizontal"].indexOf(t)}},value:{type:Number,default:0}},data:function(){return{currentIndex:0}},computed:{styleObj:function(){var t="vertical"===this.direction?"".concat(this.width,"rpx"):"100%";return"width: ".concat(t)},contentObj:function(){var t=[],e="vertical"===this.direction?"calc(100% - ".concat(this.width,"rpx)"):"100%";return t.push("width: ".concat(e)),t.push("word-break: break-all"),t.join(";")}},watch:{value:{handler:function(t){this.currentIndex=t},immediate:!0}},methods:{selectedItem:function(t,e){this.currentIndex=e,this.$emit("input",e),this.$emit("selected",(0,a.default)((0,a.default)({},t),{},{$index:e}))}}};e.default=r},"926f":function(t,e,n){"use strict";n.r(e);var i=n("794f"),a=n("4b36");for(var r in a)["default"].indexOf(r)<0&&function(t){n.d(e,t,(function(){return a[t]}))}(r);n("860f");var c,o=n("f0c5"),l=Object(o["a"])(a["default"],i["b"],i["c"],!1,null,"a2f3339c",null,!1,i["a"],c);e["default"]=l.exports},a0e0:function(t,e,n){var i=n("a858");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=n("4f06").default;a("baf65aae",i,!0,{sourceMap:!1,shadowMode:!1})},a858:function(t,e,n){var i=n("24fb");e=i(!1),e.push([t.i,".list-item-icon[data-v-a2f3339c]{width:%?32?%;height:%?32?%;margin-right:%?12?%;vertical-align:middle}.icon[data-v-a2f3339c]{margin-right:%?12?%}.vertical-container[data-v-a2f3339c]{display:-webkit-box;display:-webkit-flex;display:flex;height:100%}.vertical-container .menu-wrapper[data-v-a2f3339c]{color:rgba(0,0,0,.6);font-size:%?26?%;text-align:center;background:#f5f5f5}.vertical-container .menu-wrapper .vertical-scroll-wrapper[data-v-a2f3339c]{height:100%}.vertical-container .menu-wrapper .vertical-list[data-v-a2f3339c]{width:100%}.vertical-container .menu-wrapper .vertical-list-item[data-v-a2f3339c]{padding:%?25?% 0}.vertical-container .menu-wrapper .vertical-list .list-item-title[data-v-a2f3339c]{vertical-align:middle}.vertical-container .menu-wrapper .vertical-list .active[data-v-a2f3339c]{color:#333;font-weight:500;background:#fff}.horizontal-container .menu-wrapper[data-v-a2f3339c]{color:#333;font-size:%?26?%;white-space:nowrap}.horizontal-container .menu-wrapper .horizontal-scroll-wrapper[data-v-a2f3339c]{width:100%;height:100%}.horizontal-container .menu-wrapper .horizontal-list-item[data-v-a2f3339c]{display:inline-block;margin:0 %?10?%;padding:%?20?% %?10?%;text-align:center}.horizontal-container .menu-wrapper .horizontal-list .active[data-v-a2f3339c]{font-weight:500;border-bottom:%?6?% solid currentColor}",""]),t.exports=e},b080:function(t,e,n){var i=n("5617");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=n("4f06").default;a("53368d5e",i,!0,{sourceMap:!1,shadowMode:!1})},c1cd:function(t,e,n){"use strict";var i=n("b080"),a=n.n(i);a.a},c931:function(t,e,n){"use strict";n("4de4"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={data:function(){return{horizontalIndex:0,verticalIndex:2,selectedItem:"",menu:[{icon:"",src:"http://hh-oss-picture.miyapay.com/box/29f26710c56b781f03c0e889bd7c280d.svg",title:"热销"},{title:"优惠"},{title:"饼干糕点"},{title:"夜宵时刻"}]}},computed:{content:function(){var t=this,e=this.menu.filter((function(e,n){return n===t.verticalIndex}))[0];return"当前选择: ".concat(e.title)}},methods:{handleSelect:function(t){this.selectedItem=JSON.stringify(t)}}};e.default=i},e017:function(t,e,n){"use strict";n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return r})),n.d(e,"a",(function(){return i}));var i={myMenu:n("926f").default},a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"demo"},[n("v-uni-view",[t._v("1. 水平模式")]),n("my-menu",{attrs:{menus:t.menu,direction:"horizontal"},model:{value:t.horizontalIndex,callback:function(e){t.horizontalIndex=e},expression:"horizontalIndex"}}),n("v-uni-view",{staticClass:"title"},[t._v("2. 垂直模式")]),n("my-menu",{attrs:{menus:t.menu},on:{selected:function(e){arguments[0]=e=t.$handleEvent(e),t.handleSelect.apply(void 0,arguments)}},model:{value:t.verticalIndex,callback:function(e){t.verticalIndex=e},expression:"verticalIndex"}},[n("v-uni-view",{staticClass:"demo-content"},[n("v-uni-view",[t._v(t._s(t.content))]),n("v-uni-view",[t._v("当前选中: "+t._s(t.selectedItem))])],1)],1)],1)},r=[]}}]);