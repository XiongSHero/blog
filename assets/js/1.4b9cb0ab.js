(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{167:function(e,t,i){},210:function(e,t,i){"use strict";var n=i(167);i.n(n).a},288:function(e,t,i){"use strict";i.r(t);var n=[{excerpt:' 上传预览   来源   >上传图片时，需要展示上传的图片。    实现方式   >笔者才疏学浅，只知道2种实现方式。一种是FileReader，另一种是URL。   ```vue  <template>   <div class="audio_box">     <input type="file" @change="uploadFile" accept="image/gif,imag......',tags:["js","uploadPreview"],id:0,title:"uploadPreview",lastUpdated:"2019-11-14 11:39:17",path:"/posts/uploadPreview.html"},{excerpt:" jQuery简介   jQuery整体架构   >$就是jQuery的别称   ```js   (function (root) {      var jQuery = function() {        // return new jQuery(); 不可取，循环递归。        return new jQuery.prototype.init();      }      jQ......",tags:["js","js源码"],id:1,title:"jQuery",lastUpdated:"2019-11-14 11:39:17",path:"/posts/jQuery.html"},{excerpt:" node启动多个服务   来源  >基于自己做了个项目，前端和后台都有自己来做，前端使用Vue，后台使用了KOA。开发中每次，都要开启2个监听服务。并且在开发中要不断地切换项目。  很是麻烦。后来找了度娘，便把前端和后台放在了一个项目中，通过npm包concurrently来启动项目。   使用  >首先要安装依赖  ```js  npm install concurrently --......",tags:["npm","node"],id:2,title:"npmCurrently",lastUpdated:"2019-11-14 11:39:17",path:"/posts/npmCurrently.html"}],s={name:"Layout",data:function(){return{isHide:!1,needOverlay:!1,content:n}},methods:{clickMenu:function(){this.isHide=!this.isHide,"undefined"!=typeof window&&window.innerWidth<=1190&&(this.needOverlay=!this.needOverlay)},close:function(){this.needOverlay=!this.needOverlay,this.isHide=!this.isHide}}},a=(i(210),i(17)),r=Object(a.a)(s,(function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticStyle:{height:"100%"}},[i("el-container",{staticClass:"main-container"},[i("my-aside",{attrs:{isHide:e.isHide}}),e._v(" "),i("el-container",{staticClass:"container-warp"},[i("my-header",{attrs:{showIcon:e.isHide},on:{clickMenu:e.clickMenu}},[e._v("\n        >")]),e._v(" "),i("my-main",{attrs:{isHide:e.isHide,content:e.content}})],1),e._v(" "),i("go-top")],1),e._v(" "),i("my-footer",{attrs:{content:e.content,isHide:e.isHide}}),e._v(" "),i("div",{staticClass:"overlay",class:{"overlay--active":e.needOverlay},on:{click:e.close}})],1)}),[],!1,null,"80d5f2bc",null);t.default=r.exports}}]);