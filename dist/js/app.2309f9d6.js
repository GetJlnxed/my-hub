(function(t){function e(e){for(var n,r,c=e[0],o=e[1],l=e[2],d=0,p=[];d<c.length;d++)r=c[d],Object.prototype.hasOwnProperty.call(i,r)&&i[r]&&p.push(i[r][0]),i[r]=0;for(n in o)Object.prototype.hasOwnProperty.call(o,n)&&(t[n]=o[n]);u&&u(e);while(p.length)p.shift()();return s.push.apply(s,l||[]),a()}function a(){for(var t,e=0;e<s.length;e++){for(var a=s[e],n=!0,c=1;c<a.length;c++){var o=a[c];0!==i[o]&&(n=!1)}n&&(s.splice(e--,1),t=r(r.s=a[0]))}return t}var n={},i={app:0},s=[];function r(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,r),a.l=!0,a.exports}r.m=t,r.c=n,r.d=function(t,e,a){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(r.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)r.d(a,n,function(e){return t[e]}.bind(null,n));return a},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/my-hub/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],o=c.push.bind(c);c.push=e,c=c.slice();for(var l=0;l<c.length;l++)e(c[l]);var u=o;s.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"17f0":function(t,e,a){"use strict";a("355d")},"1c18":function(t,e,a){"use strict";a("c700")},"1dfd":function(t,e,a){},"355d":function(t,e,a){},"455e":function(t,e,a){"use strict";a("9818")},5307:function(t,e,a){"use strict";a("ecba")},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container fluid container--column nowrap",attrs:{id:"app"}},["/"!==t.route.fullPath?a("header",{staticClass:"app-header container",class:{"app-header--starred":"/sky"===t.route.path}},[a("p",{staticClass:"app-header__title text text--h4",on:{click:function(e){return t.$router.push({name:"Home"})}}},[t._v("HUB")]),a("div",{staticClass:"links container"},[a("button",{staticClass:"links__button button",on:{click:function(e){return t.$router.push({name:"Board"})}}},[t._v("Board")]),a("button",{staticClass:"links__button button",on:{click:function(e){return t.$router.push({name:"Sky"})}}},[t._v("Sky")]),a("a",{staticClass:"links__button button",attrs:{href:"https://getjlnxed.github.io/my-page/",target:"_blank"}},[t._v("About")])])]):t._e(),a("router-view")],1)},s=[],r={name:"App",computed:{route:function(){return this.$route}}},c=r,o=(a("7faf"),a("2877")),l=Object(o["a"])(c,i,s,!1,null,null,null),u=l.exports,d=a("8c4f"),p=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("transition",{attrs:{name:"fade",appear:""}},[a("div",{directives:[{name:"show",rawName:"v-show",value:t.pageVisible,expression:"pageVisible"}],staticClass:"home container container--column fluid align-center justify-center"},[a("transition",{attrs:{name:"fade",appear:""},on:{"after-appear":t.titleAppeared}},[a("p",{staticClass:"home__title text text--h4"},[t._v("Welcome to my hub")])]),t.isTitleAppeared?a("transition",{attrs:{name:"fade",appear:""}},[a("div",{staticClass:"links container container--row align-center justify-center"},[a("button",{staticClass:"links__button button",on:{click:function(e){return t.$router.push({name:"Board"})}}},[t._v("Board")]),a("button",{staticClass:"links__button button",on:{click:function(e){return t.$router.push({name:"Sky"})}}},[t._v("Sky")]),a("a",{staticClass:"links__button button",attrs:{href:"https://getjlnxed.github.io/my-page/",target:"_blank"}},[t._v("About")])])]):t._e()],1)])},f=[],h={data:function(){return{pageVisible:!0}}},b={name:"Home",mixins:[h],data:function(){return{isTitleAppeared:!1}},methods:{titleAppeared:function(){var t=this;setTimeout((function(){t.isTitleAppeared=!0}),600)}}},m=b,_=(a("1c18"),Object(o["a"])(m,p,f,!1,null,"0db9c010",null)),v=_.exports,k=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("transition",{attrs:{name:"fade",appear:""}},[a("div",{directives:[{name:"show",rawName:"v-show",value:t.pageVisible,expression:"pageVisible"}],staticClass:"board container nowrap container--column"},[a("v-row",[a("v-col",[a("Card")],1),a("v-col",[a("Menu")],1),a("v-col",[a("div",{staticClass:"case container container--column"},t._l(t.inputs,(function(e){return a("div",{key:e.id,staticClass:"container align-center"},[a("p",{staticClass:"input-value text"},[t._v(t._s(e.value))]),a("Slider",{attrs:{minValue:e.min,maxValue:e.max,disabled:e.disabled,bold:e.bold},model:{value:e.value,callback:function(a){t.$set(e,"value",a)},expression:"input.value"}})],1)})),0)])],1),a("v-row",[a("v-col",{attrs:{cols:"8"}},[a("Search")],1)],1)],1)])},x=[],y=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"app-menu container container--column justify-space-around"},[a("button",{staticClass:"button app-menu__button"},[t._v("Add new")]),a("MenuRow",{attrs:{icon:["fas","file-upload"],title:"Upload files"}}),a("MenuRow",{attrs:{icon:["fas","upload"],title:"Upload files"}}),a("MenuRow",{attrs:{icon:["fas","folder"],title:"New folder"}}),a("MenuRow",{attrs:{title:"Exit"}})],1)},C=[],g=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"app-row container align-center"},[t.icon?a("font-awesome-icon",{staticClass:"app-row__icon",attrs:{icon:t.icon}}):t._e(),a("p",{staticClass:"app-row__link text text--bold"},[t._v(t._s(t.title))])],1)},w=[],V={name:"AppRow",props:{icon:{type:Array,required:!1},title:{type:String,default:"No title",require:!1}}},j=V,S=(a("b0bc"),Object(o["a"])(j,g,w,!1,null,"b6caffb8",null)),$=S.exports,O={name:"AppMenu",components:{MenuRow:$}},E=O,A=(a("455e"),Object(o["a"])(E,y,C,!1,null,"a9bea7f4",null)),M=A.exports,P=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"card container container--fluid container--column",class:{dark:t.isDark,light:!t.isDark}},[t._m(0),t._m(1),t._m(2),a("div",{staticClass:"button card__button",on:{click:t.changeTheme}},[t._v("Accept")])])},H=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"card__header container container--column"},[a("div",{staticClass:"card__title text text--h5 text--bold"},[t._v("Free")]),a("div",{staticClass:"card__subtitle text"},[t._v("for freelancers")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container"},[a("p",{staticClass:"text text--h3 text--bold card__price"},[t._v("$0")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container container--column card__checks"},[a("label",{staticClass:"check text card__check"},[a("input",{staticClass:"check__checkbox card__checkbox",attrs:{type:"checkbox",name:"check",checked:"",disabled:""}}),a("span",{staticClass:"check__label text"},[t._v("Perfomance")])]),a("label",{staticClass:"check text card__check"},[a("input",{staticClass:"check__checkbox card__checkbox",attrs:{type:"checkbox",name:"check",checked:"",disabled:""}}),a("span",{staticClass:"check__label text"},[t._v("Perfomance")])]),a("label",{staticClass:"check text card__check"},[a("input",{staticClass:"check__checkbox card__checkbox",attrs:{type:"checkbox",name:"check",checked:"",disabled:""}}),a("span",{staticClass:"check__label text"},[t._v("Perfomance")])])])}],N={name:"AppCard",data:function(){return{isDark:!1}},props:{dark:{type:Boolean,default:!1,required:!1}},created:function(){this.isDark=this.dark},methods:{changeTheme:function(){this.isDark=!this.isDark}}},B=N,q=(a("9db8"),Object(o["a"])(B,P,H,!1,null,"712b92ec",null)),T=q.exports,D=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"search container",class:{"search--focused":t.focused}},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.inputValue,expression:"inputValue"}],staticClass:"search__input",attrs:{name:"input"},domProps:{value:t.inputValue},on:{focus:t.focusHandler,blur:t.blurHandler,input:function(e){e.target.composing||(t.inputValue=e.target.value)}}}),a("label",{staticClass:"search__label text text--bold",class:{"search__label--hidden":t.isLabelInvisible},attrs:{for:"input"}},[t._v("Search")]),a("button",{staticClass:"search__button button"},[t._v("Search")])])},R=[],W={name:"Search",data:function(){return{focused:!1,isLabelInvisible:!1,inputValue:""}},methods:{focusHandler:function(){this.focused=!0,this.isLabelInvisible=!0},blurHandler:function(){console.log(this.inputValue),0==this.inputValue.length&&(this.isLabelInvisible=!1),this.focused=!1}}},I=W,L=(a("e544"),Object(o["a"])(I,D,R,!1,null,"86166052",null)),U=L.exports,J=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("input",{directives:[{name:"model",rawName:"v-model",value:t.currentValue,expression:"currentValue"}],staticClass:"slider",class:{bold:t.bold},style:{background:t.background},attrs:{type:"range",min:t.minValue,max:t.maxValue,disabled:t.disabled},domProps:{value:t.currentValue},on:{input:t.inputHandler,__r:function(e){t.currentValue=e.target.value}}})},F=[],z=(a("a9e3"),{name:"AppSlider",data:function(){return{currentValue:0}},created:function(){this.value&&(this.currentValue=this.value)},props:{value:{type:[Number,String],default:0,required:!1},minValue:{type:Number,default:0,required:!1},maxValue:{type:Number,default:100,required:!1},disabled:{type:Boolean,default:!1,required:!1},bold:{type:Boolean,default:!1,required:!1}},methods:{inputHandler:function(t){this.$emit("input",t.target.value)}},computed:{background:function(){var t=(this.currentValue-this.minValue)/(this.maxValue-this.minValue)*100;return"linear-gradient(to right, #979EE8 0%, #979EE8 "+t+"%, #fff "+t+"%, white 100%)"}}}),G=z,K=(a("5307"),Object(o["a"])(G,J,F,!1,null,"5061dde4",null)),Q=K.exports,X={name:"nBoard",mixins:[h],components:{Menu:M,Card:T,Search:U,Slider:Q},data:function(){return{inputs:[{id:0,min:0,max:100,value:30,disabled:!1,bold:!1},{id:1,min:30,max:100,value:60,disabled:!1,bold:!1},{id:2,min:60,max:100,value:90,disabled:!1,bold:!1},{id:3,min:0,max:100,value:50,disabled:!1,bold:!0},{id:4,min:0,max:100,value:100,disabled:!0,bold:!0}]}}},Y=X,Z=(a("dcfa"),Object(o["a"])(Y,k,x,!1,null,"e22cefa4",null)),tt=Z.exports,et=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("transition",{attrs:{name:"fade",appear:""}},[a("div",{directives:[{name:"show",rawName:"v-show",value:t.pageVisible,expression:"pageVisible"}],ref:"sky",staticClass:"sky container fluid"},t._l(t.sky.stars,(function(t){return a("div",{key:t,staticClass:"star",style:{left:t.left+"px",top:t.top+"px",width:t.width+"px",height:t.width+"px"}})})),0)])},at=[];function nt(t,e){return Math.random()*(e-t)+t}var it={name:"Sky",mixins:[h],data:function(){return{sky:{star_count:330,minWidth:1,maxWidth:5,stars:[]}}},mounted:function(){this.createStars()},methods:{createStars:function(){var t=this.$refs.sky,e=t.clientWidth-10,a=t.clientHeight-10,n=0;while(n<this.sky.star_count){var i={width:nt(this.sky.minWidth,this.sky.maxWidth),left:nt(1,e),top:nt(1,a)};this.sky.stars.push(i),n++}}}},st=it,rt=(a("decf"),Object(o["a"])(st,et,at,!1,null,"0c989cf2",null)),ct=rt.exports;n["a"].use(d["a"]);var ot=[{path:"/",name:"Home",component:v},{path:"/board",name:"Board",component:tt},{path:"/sky",name:"Sky",component:ct}],lt=new d["a"]({base:"/my-hub/",routes:ot}),ut=lt,dt=a("2f62");n["a"].use(dt["a"]);var pt=new dt["a"].Store({state:{},mutations:{},actions:{},modules:{}}),ft=(a("fe46"),a("ecee")),ht=a("c074"),bt=a("ad3d"),mt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"row"},[t._t("default")],2)},_t=[],vt=(a("e776"),{}),kt=Object(o["a"])(vt,mt,_t,!1,null,"583de28b",null),xt=kt.exports,yt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"col",class:t.colsClass},[t._t("default")],2)},Ct=[],gt={name:"VCol",props:{cols:{type:[String,Number],required:!1,validator:function(t){return t>0&&t<=12}}},computed:{colsClass:function(){return this.cols&&this.cols>0&&this.cols<=12?"col-".concat(this.cols):null}}},wt=gt,Vt=(a("17f0"),Object(o["a"])(wt,yt,Ct,!1,null,"3dac1bd4",null)),jt=Vt.exports;n["a"].component("v-col",jt),n["a"].component("v-row",xt),ft["c"].add(ht["b"],ht["c"],ht["a"]),n["a"].component("font-awesome-icon",bt["a"]),n["a"].config.productionTip=!1,new n["a"]({router:ut,store:pt,render:function(t){return t(u)}}).$mount("#app")},"5f4b":function(t,e,a){},"656f":function(t,e,a){},"7b7f":function(t,e,a){},"7faf":function(t,e,a){"use strict";a("8e59")},"8e59":function(t,e,a){},"95df":function(t,e,a){},9818:function(t,e,a){},"9db8":function(t,e,a){"use strict";a("1dfd")},b0bc:function(t,e,a){"use strict";a("7b7f")},c14d:function(t,e,a){},c700:function(t,e,a){},dcfa:function(t,e,a){"use strict";a("656f")},decf:function(t,e,a){"use strict";a("c14d")},e544:function(t,e,a){"use strict";a("95df")},e776:function(t,e,a){"use strict";a("5f4b")},ecba:function(t,e,a){},fe46:function(t,e,a){}});
//# sourceMappingURL=app.2309f9d6.js.map