(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["demos-my-layout-index~demos-my-tabbar-index"],{"05d1":function(t,e,a){"use strict";a("a15b"),a("a9e3"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={name:"MyBadge",props:{text:{type:String},color:{type:String},fontSize:{type:[Number]}},data:function(){return{}},computed:{showBadge:function(){return"undefined"!==this.text&&""!==this.text},dynamicStyle:function(){var t=[];return this.color&&t.push("background-color: ".concat(this.color)),this.fontSize&&t.push("font-size: ".concat(this.fontSize,"rpx")),t.join(";")}}};e.default=n},"10ea":function(t,e,a){var n=a("5487");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var i=a("4f06").default;i("7a2581ae",n,!0,{sourceMap:!1,shadowMode:!1})},"111a":function(t,e,a){"use strict";a.r(e);var n=a("e9c5"),i=a("f86b");for(var r in i)["default"].indexOf(r)<0&&function(t){a.d(e,t,(function(){return i[t]}))}(r);a("bc9d");var o,c=a("f0c5"),s=Object(c["a"])(i["default"],n["b"],n["c"],!1,null,"68beddb2",null,!1,n["a"],o);e["default"]=s.exports},"1f35":function(t,e,a){"use strict";var n=a("10ea"),i=a.n(n);i.a},"252e":function(t,e,a){"use strict";var n;a.d(e,"b",(function(){return i})),a.d(e,"c",(function(){return r})),a.d(e,"a",(function(){return n}));var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{staticClass:"badge",class:{"badge-without-text":!t.showBadge},style:t.dynamicStyle},[t.showBadge?a("v-uni-text",{staticClass:"badge-text"},[t._v(t._s(t.text))]):t._e(),t._t("content")],2)},r=[]},"2df4":function(t,e,a){"use strict";var n=a("98d9"),i=a.n(n);i.a},"39c7":function(t,e,a){"use strict";var n;a.d(e,"b",(function(){return i})),a.d(e,"c",(function(){return r})),a.d(e,"a",(function(){return n}));var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{staticClass:"icon-wrapper",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.handleClick.apply(void 0,arguments)}}},[t.isImage?a("v-uni-image",{staticClass:"icon",class:t.dynamicClass,style:t.dynamicStyle,attrs:{mode:"widthFix",src:t.src}}):a("v-uni-text",{staticClass:"icon",class:t.dynamicClass,style:t.dynamicStyle},[t._t("default")],2),t.showBadge?a("v-uni-view",{staticClass:"badge"},[t._t("badge")],2):t._e()],1)},r=[]},"3a41":function(t,e,a){var n=a("24fb");e=n(!1),e.push([t.i,'@font-face{font-family:my-icon-font;\n  /* project id 1926676 */src:url(//at.alicdn.com/t/font_2089828_e5rupvivytp.eot);src:url(//at.alicdn.com/t/font_2089828_e5rupvivytp.eot#iefix) format("embedded-opentype"),url(//at.alicdn.com/t/font_2089828_e5rupvivytp.woff2) format("woff2"),url(//at.alicdn.com/t/font_2089828_e5rupvivytp.woff) format("woff"),url(//at.alicdn.com/t/font_2089828_e5rupvivytp.ttf) format("truetype"),url(//at.alicdn.com/t/font_2089828_e5rupvivytp.svg#iconfont) format("svg")}.icon-wrapper[data-v-63617e3c]{position:relative;display:inline-block}.icon-wrapper[data-v-63617e3c]:active{opacity:.8}.icon[data-v-63617e3c]{font-family:my-icon-font;font-style:normal}.icon-badge[data-v-63617e3c]{padding:%?2?% %?8?%;font-size:%?22?%;background-color:red;border:%?2?% solid #fff}.icon-dot[data-v-63617e3c]{padding:%?4?%;background-color:red;border:%?2?% solid #fff}.icon-large[data-v-63617e3c]{width:%?48?%;font-size:%?48?%}.icon-default[data-v-63617e3c]{width:%?36?%;font-size:%?36?%}.icon-small[data-v-63617e3c]{width:%?24?%;font-size:%?24?%}.badge[data-v-63617e3c]{position:absolute;top:%?-12?%;right:%?-12?%}',""]),t.exports=e},"44ec":function(t,e,a){"use strict";a.r(e);var n=a("252e"),i=a("ee7d");for(var r in i)["default"].indexOf(r)<0&&function(t){a.d(e,t,(function(){return i[t]}))}(r);a("1f35");var o,c=a("f0c5"),s=Object(c["a"])(i["default"],n["b"],n["c"],!1,null,"77f13738",null,!1,n["a"],o);e["default"]=s.exports},"48e2":function(t,e,a){"use strict";var n=a("617f"),i=a.n(n);i.a},5487:function(t,e,a){var n=a("24fb");e=n(!1),e.push([t.i,".badge[data-v-77f13738]{position:relative;display:inline-block;padding:%?2?% %?10?%;font-size:%?20?%;background-color:red;border:%?2?% solid #fff;border-radius:100%}.badge-text[data-v-77f13738]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;color:#fff;font-weight:700;min-height:%?16?%}.badge-without-text[data-v-77f13738]{padding:%?6?%}",""]),t.exports=e},"5fea":function(t,e,a){var n=a("ecc0");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var i=a("4f06").default;i("5b2bd807",n,!0,{sourceMap:!1,shadowMode:!1})},"606c":function(t,e,a){"use strict";var n;a.d(e,"b",(function(){return i})),a.d(e,"c",(function(){return r})),a.d(e,"a",(function(){return n}));var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{staticClass:"tabbar"},[t._t("default")],2)},r=[]},"617f":function(t,e,a){var n=a("ca8a");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var i=a("4f06").default;i("5e43794d",n,!0,{sourceMap:!1,shadowMode:!1})},"662f":function(t,e,a){"use strict";a.r(e);var n=a("606c"),i=a("a167");for(var r in i)["default"].indexOf(r)<0&&function(t){a.d(e,t,(function(){return i[t]}))}(r);a("48e2");var o,c=a("f0c5"),s=Object(c["a"])(i["default"],n["b"],n["c"],!1,null,"2fd4da11",null,!1,n["a"],o);e["default"]=s.exports},"85e2":function(t,e,a){"use strict";a.r(e);var n=a("39c7"),i=a("c69f");for(var r in i)["default"].indexOf(r)<0&&function(t){a.d(e,t,(function(){return i[t]}))}(r);a("2df4");var o,c=a("f0c5"),s=Object(c["a"])(i["default"],n["b"],n["c"],!1,null,"63617e3c",null,!1,n["a"],o);e["default"]=s.exports},"98d9":function(t,e,a){var n=a("3a41");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var i=a("4f06").default;i("cb2e3b6e",n,!0,{sourceMap:!1,shadowMode:!1})},a167:function(t,e,a){"use strict";a.r(e);var n=a("dc04"),i=a.n(n);for(var r in n)["default"].indexOf(r)<0&&function(t){a.d(e,t,(function(){return n[t]}))}(r);e["default"]=i.a},bc9d:function(t,e,a){"use strict";var n=a("5fea"),i=a.n(n);i.a},c69f:function(t,e,a){"use strict";a.r(e);var n=a("d230"),i=a.n(n);for(var r in n)["default"].indexOf(r)<0&&function(t){a.d(e,t,(function(){return n[t]}))}(r);e["default"]=i.a},ca8a:function(t,e,a){var n=a("24fb");e=n(!1),e.push([t.i,".tabbar[data-v-2fd4da11]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-justify-content:space-around;justify-content:space-around;width:100%;height:%?100?%}",""]),t.exports=e},cec0:function(t,e,a){"use strict";a("a15b"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={name:"MyTabbarItem",props:{tab:{type:String,default:""}},data:function(){return{active:null}},computed:{dynamicStyle:function(){var t=[],e=this.getTabBarParent();return this.active===this.tab?t.push("color: ".concat(e.activeColor)):t.push("color: ".concat(e.inactiveColor)),t.join(";")}},beforeMount:function(){var t=this;this.getTabBarParent().onTabChange((function(e){t.active=e}))},methods:{getTabBarParent:function(){if(this._tabBarParent)return this._tabBarParent;var t=this.$parent;while(t){if(t.$data._tabbar_)break;t=t.$parent?t.$parent:null}return this._tabBarParent=t,t},handleTabBarClick:function(){this.getTabBarParent().emitTabChange({tab:this.tab})}}};e.default=n},d230:function(t,e,a){"use strict";a("c975"),a("a15b"),a("a9e3"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={name:"MyIcon",props:{src:{type:String},color:{type:String},size:{type:[String,Number],default:"default",validator:function(t){return"number"===typeof t||["default","small","large"].indexOf(t)>-1}},classPrefix:{type:String}},data:function(){return{showBadge:!1}},computed:{isImage:function(){return!!this.src},dynamicClass:function(){var t=[];return["default","small","large"].indexOf(this.size)>-1&&t.push("icon-".concat(this.size)),this.classPrefix&&t.push("".concat(this.classPrefix,"icon")),t.join(" ")},dynamicStyle:function(){var t=[];return this.color&&t.push("color: ".concat(this.color)),"number"===typeof this.size&&(this.isImage?t.push("width: ".concat(this.size,"rpx")):t.push("font-size: ".concat(this.size,"rpx"))),t.join(";")}},mounted:function(){this.showBadge=this.$children.length>0},methods:{handleClick:function(t){this.$emit("click",t)}}};e.default=n},dc04:function(t,e,a){"use strict";a("4de4"),a("4160"),a("159b"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={name:"MyTabbar",props:{activeColor:{type:String,default:"#222"},inactiveColor:{type:String,default:"#999"},defaultTab:{type:String,default:""}},data:function(){return{_tabbar_:!0,active:null,tabList:[]}},mounted:function(){this.active=this.defaultTab,this.triggerBroadCast()},methods:{onTabChange:function(t){var e=this;return this.tabList.push(t),function(){e.tabList=e.tabList.filter((function(e){return t!==e}))}},emitTabChange:function(t){var e=t.tab;this.$emit("change",{tab:this.active,active:e}),this.active=e,this.triggerBroadCast()},triggerBroadCast:function(){var t=this;this.tabList.forEach((function(e){e(t.active)}))}}};e.default=n},e9c5:function(t,e,a){"use strict";var n;a.d(e,"b",(function(){return i})),a.d(e,"c",(function(){return r})),a.d(e,"a",(function(){return n}));var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{staticClass:"tabbar-item-wrapper",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.handleTabBarClick.apply(void 0,arguments)}}},[a("v-uni-view",{staticClass:"tabbar-item",style:t.dynamicStyle},[t._t("icon"),a("v-uni-view",[t._t("default")],2)],2)],1)},r=[]},ecc0:function(t,e,a){var n=a("24fb");e=n(!1),e.push([t.i,".tabbar-item-wrapper[data-v-68beddb2]{position:relative;display:inline-block}.tabbar-item-wrapper .tabbar-item[data-v-68beddb2]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;color:#333;font-weight:700;font-size:%?24?%}.tabbar-item-wrapper .tabbar-item[data-v-68beddb2] :active{opacity:.8}",""]),t.exports=e},ee7d:function(t,e,a){"use strict";a.r(e);var n=a("05d1"),i=a.n(n);for(var r in n)["default"].indexOf(r)<0&&function(t){a.d(e,t,(function(){return n[t]}))}(r);e["default"]=i.a},f86b:function(t,e,a){"use strict";a.r(e);var n=a("cec0"),i=a.n(n);for(var r in n)["default"].indexOf(r)<0&&function(t){a.d(e,t,(function(){return n[t]}))}(r);e["default"]=i.a}}]);