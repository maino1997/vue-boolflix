(function(e){function t(t){for(var n,l,o=t[0],c=t[1],u=t[2],I=0,g=[];I<o.length;I++)l=o[I],Object.prototype.hasOwnProperty.call(r,l)&&r[l]&&g.push(r[l][0]),r[l]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);s&&s(t);while(g.length)g.shift()();return a.push.apply(a,u||[]),i()}function i(){for(var e,t=0;t<a.length;t++){for(var i=a[t],n=!0,o=1;o<i.length;o++){var c=i[o];0!==r[c]&&(n=!1)}n&&(a.splice(t--,1),e=l(l.s=i[0]))}return e}var n={},r={app:0},a=[];function l(t){if(n[t])return n[t].exports;var i=n[t]={i:t,l:!1,exports:{}};return e[t].call(i.exports,i,i.exports,l),i.l=!0,i.exports}l.m=e,l.c=n,l.d=function(e,t,i){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(l.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)l.d(i,n,function(t){return e[t]}.bind(null,n));return i},l.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=t,o=o.slice();for(var u=0;u<o.length;u++)t(o[u]);var s=c;a.push([0,"chunk-vendors"]),i()})({0:function(e,t,i){e.exports=i("56d7")},"17b5":function(e,t){e.exports="data:image/png;base64,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"},2685:function(e,t,i){"use strict";i("3a3d")},3589:function(e,t,i){},"3a3d":function(e,t,i){},"538c":function(e,t,i){"use strict";i("edde")},"56d7":function(e,t,i){"use strict";i.r(t);i("e260"),i("e6cf"),i("cca6"),i("a79d");var n=i("2b0e"),r=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[i("Header",{attrs:{genreList:e.genreList},on:{getEmitValue:e.getModelValue,getSelectValue:e.getSelectValue}}),i("main",{staticClass:"text-center text-white"},[i("div",{staticClass:"container"},[0===e.tvList.length?i("h2",{attrs:{id:"loader-title"}},[e._v(" CERCA UN FILM O UNA SERIE TV ")]):e._e(),e.filmList.length?i("Film",{attrs:{List:e.filmList,compTitle:"FILM",selectValue:e.selectValue},on:{getId:e.getId}}):e._e(),e.tvList.length>0?i("Film",{attrs:{List:e.tvList,compTitle:"SERIE TV",selectValue:e.selectValue}}):e._e()],1)])],1)},a=[],l=(i("99af"),function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("header",[i("div",{staticClass:"container"},[i("img",{attrs:{src:"https://www.edigitalagency.com.au/wp-content/uploads/Netflix-logo-red-black-png.png",alt:"logo-netflix"}}),i("select",{directives:[{name:"model",rawName:"v-model",value:e.genreValue,expression:"genreValue"}],on:{change:[function(t){var i=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.genreValue=t.target.multiple?i:i[0]},e.getSelectValue]}},[i("option",{attrs:{value:""}},[e._v("FILTRA PER GENERE")]),e._l(e.genreList,(function(t){return i("option",{key:t.id,domProps:{value:t.id}},[e._v(" "+e._s(t.name)+" ")])}))],2),i("Search",{on:{getEmitValue:e.getValue}})],1)])}),o=[],c=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"input-block"},[i("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.value,expression:"value",modifiers:{trim:!0}}],attrs:{type:"text",placeholder:"Cerca..."},domProps:{value:e.value},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.getValue.apply(null,arguments)},input:function(t){t.target.composing||(e.value=t.target.value.trim())},blur:function(t){return e.$forceUpdate()}}}),i("button",{on:{click:e.getValue}},[e._v("CERCA")])])},u=[],s={name:"Search",data:function(){return{value:""}},methods:{getValue:function(){this.$emit("getEmitValue",this.value)}}},I=s,g=(i("2685"),i("2877")),f=Object(g["a"])(I,c,u,!1,null,"7cb2572e",null),v=f.exports,d={name:"Header",components:{Search:v},props:["genreList"],data:function(){return{genreValue:""}},methods:{getValue:function(e){this.$emit("getEmitValue",e)},getSelectValue:function(){this.$emit("getSelectValue",this.genreValue)}}},A=d,p=(i("5831"),Object(g["a"])(A,l,o,!1,null,"560d8eba",null)),m=p.exports,h=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("section",[i("h2",[e._v(e._s(e.compTitle))]),i("ul",{staticClass:"row g-4"},e._l(e.NewArray,(function(t){return i("Card",{key:t.id,attrs:{List:e.List,film:t},on:{click:function(i){return e.getId(t.id)}}})})),1)])},w=[],E=(i("4de4"),i("d3b7"),i("caad"),i("2532"),function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("li",{staticClass:"col-6 col-md-4 col-lg-3 col-xl-2 cards overflow",on:{click:function(t){return e.getFilmId(e.film.id)}}},[i("div",{staticClass:"content",style:{backgroundImage:e.getBackgroundPicture(e.film.poster_path)}},[i("div",{staticClass:"description"},[i("ul",[i("li",[e._v(" TITOLO: "+e._s(e.getTitle(e.film))+" ")]),i("li",[e._v(" TITOLO ORIGINALE: "+e._s(e.film.original_title)+" ")]),i("li",[e._v(" LINGUA ORIGINALE: "),i("img",{attrs:{src:e.getFlagUrl(e.film.original_language),alt:e.film.original_language}})]),i("li",[e._v(" VOTO: "),e._l(5,(function(t){return i("i",{key:t,staticClass:"fa-star",class:e.starClass(e.film.vote_average,t)})}))],2),i("li",[e._v(" TRAMA: "+e._s(e.film.overview)+" ")])])])])])}),C=[],b=(i("b0c0"),{name:"Card",props:["List","film"],data:function(){return{visible:!1,filmIds:[]}},computed:{},methods:{getTitle:function(e){return e.title?e.title:e.name},getFilmId:function(e){console.log(e),this.$emit("getId",e)},getFlagUrl:function(e){return"en"===e?i("17b5"):"it"===e?i("e33f"):"https://developers.google.com/maps/documentation/streetview/images/error-image-generic.png"},getOrigTitle:function(e){return e.title?e.original_title:e.original_name},starClass:function(e,t){return t<=Math.ceil(e/2)?"fas":"far"},getBackgroundPicture:function(e){return e&&!1===this.visible?"url(https://image.tmdb.org/t/p/w342".concat(e,")"):"url(https://www.mobileworld.it/wp-content/uploads/2016/06/netflix-nuova-icona-800x534.png)"}}}),O=b,y=(i("8358"),Object(g["a"])(O,E,C,!1,null,"5a1e6e46",null)),L=y.exports,V={name:"Film",props:["List","compTitle","selectValue"],components:{Card:L},data:function(){return{filmIds:[]}},computed:{NewArray:function(){var e=this,t=this.List.filter((function(t){return!!t.genre_ids.includes(e.selectValue)}));return t}},methods:{getId:function(e){this.$emit("getId",e),console.log(e)}}},j=V,x=(i("538c"),Object(g["a"])(j,h,w,!1,null,"bc291264",null)),M=x.exports,P=i("bc3a"),F=i.n(P),B={name:"App",components:{Header:m,Film:M},data:function(){return{modelValue:"",selectValue:"",tvList:[],filmList:[],idList:[],genreList:[],movieId:void 0,api:{language:"it-IT",baseUri:"https://api.themoviedb.org/3/",key:"e99307154c6dfb0b4750f6603256716d"}}},methods:{getProduct:function(e,t,i){var n=this;F.a.get("".concat(this.api.baseUri).concat(e),t).then((function(e){n[i]=e.data.results}))},getModelValue:function(e){if(this.modelValue=e,!e)return this.tvList=[],void(this.filmList=[]);var t=this.api,i=t.key,n=t.language,r={params:{language:n,api_key:i,query:e}};this.getProduct("search/tv",r,"tvList"),this.getProduct("search/movie",r,"filmList")},getId:function(e){this.movieId=e,console.log(e)},getSelectValue:function(e){this.selectValue=e}},mounted:function(){var e=this;F.a.get("https://api.themoviedb.org/3/genre/movie/list?api_key=e99307154c6dfb0b4750f6603256716d&language=it-IT").then((function(t){e["genreList"]=t.data.genres}))}},S=B,U=(i("5c0b"),Object(g["a"])(S,r,a,!1,null,null,null)),N=U.exports;n["a"].config.productionTip=!1,new n["a"]({render:function(e){return e(N)}}).$mount("#app")},5831:function(e,t,i){"use strict";i("9192")},"5c0b":function(e,t,i){"use strict";i("9c0c")},8358:function(e,t,i){"use strict";i("3589")},9192:function(e,t,i){},"9c0c":function(e,t,i){},e33f:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAZAAAAELBAMAAAAFMM1/AAAAFVBMVEX///8AkkbOKzf10tWY07QAjT7NJTJXwIMQAAAA8UlEQVR42u3PwQAAAAgEsBRSCCKS/FmCuO9msOrYVWwnJiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIikniFNUdjvhgMbwAAAABJRU5ErkJggg=="},edde:function(e,t,i){}});
//# sourceMappingURL=app.708876fb.js.map