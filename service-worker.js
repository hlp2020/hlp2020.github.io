if(!self.define){let e,i={};const a=(a,c)=>(a=new URL(a+".js",c).href,i[a]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=i,document.head.appendChild(e)}else e=a,importScripts(a),i()})).then((()=>{let e=i[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(c,r)=>{const d=e||("document"in self?document.currentScript.src:"")||location.href;if(i[d])return;let f={};const s=e=>a(e,d),g={module:{uri:d},exports:f,require:s};i[d]=Promise.all(c.map((e=>g[e]||s(e)))).then((e=>(r(...e),f)))}}define(["./workbox-b77dd8d1"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"2022/06/15/hello-world/index.html",revision:"df3ecded3fd5c0dba7890d988b152952"},{url:"2022/06/15/pagetags/index.html",revision:"36ae7719f810979e0c6f00ed007f241e"},{url:"404.html",revision:"ffdcdb96b74b1c5cd232f0741995bc97"},{url:"about/index.html",revision:"667895bb79ac8f2f33f9692308a48177"},{url:"archives/2022/06/index.html",revision:"604964c2dbb1de30132ef26410631233"},{url:"archives/2022/index.html",revision:"88febe03f9c1af2a7cf9d91cfca5ed36"},{url:"archives/index.html",revision:"80c99383a215b7dcccfc9c5ee2923d77"},{url:"assets/css/APlayer.min.css",revision:"fbe994054426fadb2dff69d824c5c67a"},{url:"assets/js/APlayer.min.js",revision:"8f1017e7a73737e631ff95fa51e4e7d7"},{url:"assets/js/Meting.min.js",revision:"bfac0368480fd344282ec018d28f173d"},{url:"categories/index.html",revision:"9cf5442788e5f82cfeed6fdc4eb631d6"},{url:"css/index.css",revision:"db409206480a02b388b9c4b202c864b1"},{url:"css/mycss.css",revision:"862fbd0ac9d0595b696b67d767f756c5"},{url:"css/var.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"img/404.jpg",revision:"4ef3cfb882b6dd4128da4c8745e9a507"},{url:"img/404/hen.png",revision:"ae825c57ece8d7316dfa4959907baaa5"},{url:"img/404/super.png",revision:"1ca6ebfcbb35102f6c59ce0952567af2"},{url:"img/alipay.png",revision:"b4950b53981b68723554e8997d113deb"},{url:"img/avatar.gif",revision:"e1315f7967779b7033ba789db9cc388f"},{url:"img/favicon.png",revision:"7a8c47cb5a2149c1a1af21e90ecd9ca7"},{url:"img/friend_404.gif",revision:"68af0be9d22722e74665ef44dd532ba8"},{url:"img/icons8-shark-color/favicon-16x16.png",revision:"e165ada9d4af8ad3e6274f6d3a2b7351"},{url:"img/icons8-shark-color/favicon-32x32.png",revision:"ca08dabb7330df9183f3b8821dad2bd2"},{url:"img/overflow.png",revision:"801d393c77227a8660935212b7b04653"},{url:"img/tag/1.jpg",revision:"dd1ff300514307122ebb48ca6f7385c8"},{url:"img/tag/10.jpg",revision:"6797549291da7327fab55157084f171b"},{url:"img/tag/11.jpg",revision:"d14a6f64dfdf189dc97175b5d70f4fa0"},{url:"img/tag/12.jpg",revision:"ee1861212d159f0f5bde97c90fa763e1"},{url:"img/tag/13.jpg",revision:"c016d6d46c32a7a40035e6d7251c8ceb"},{url:"img/tag/14.jpg",revision:"44b200f161a1cb43d73f123128bf56d7"},{url:"img/tag/15.jpg",revision:"2b7a7e42b9e8a3e9f44b7f5cd3d9ed1f"},{url:"img/tag/16.jpg",revision:"bf73d4853ce65281330135a3a89241ac"},{url:"img/tag/17.jpg",revision:"b8f3c0cd6b6aae488d22d7a8a380d6db"},{url:"img/tag/18.jpg",revision:"040935a8a5966c979af60bc35877f15b"},{url:"img/tag/19.jpg",revision:"996e62f7357491e9658b8717c42b32f0"},{url:"img/tag/2.jpg",revision:"d7ffacc3781414e09a51fdfc9a85ad18"},{url:"img/tag/20.jpg",revision:"faad9d3177c46c070c51b879a26bb618"},{url:"img/tag/21.jpg",revision:"1c982eb7b1c4bf017aa6432ebb1e110b"},{url:"img/tag/22.jpg",revision:"7bb7b139596d83615022729a0522fe8a"},{url:"img/tag/23.jpg",revision:"7e623249caf90af8ca6decce63a12e88"},{url:"img/tag/24.jpg",revision:"9b8e429255ee5bc2e9c733c2e873ea2e"},{url:"img/tag/25.jpg",revision:"1c07ec3a0dbe2585d0a6251c3e526498"},{url:"img/tag/3.jpg",revision:"c9450b6b823ef19018bec11ef387aa4e"},{url:"img/tag/4.jpg",revision:"8a6e32e3b4351bf8e9df8ec3d107e20f"},{url:"img/tag/5.jpg",revision:"20f9a9f0752a68806b92a690970e4e41"},{url:"img/tag/6.jpg",revision:"30b3fc498afcec9ae5542f4a38cd37bc"},{url:"img/tag/7.jpg",revision:"0206fef8a6c4d1d551b64299e607a1cd"},{url:"img/tag/8.jpg",revision:"6183b6ccfb65dbcd8d372fe58db8f5cd"},{url:"img/tag/9.jpg",revision:"7693e73f8e9834a532245f630c065705"},{url:"img/top/1.jpg",revision:"8284ea1915b2851428ec1d8c7c1245be"},{url:"img/top/10.jpg",revision:"df6c7b751ec3cf7c4c8391c0978cd64a"},{url:"img/top/11.jpg",revision:"1b2c2f99eb62e4850670d7bc1c68f87e"},{url:"img/top/12.jpg",revision:"a26b130b9999849f000aa783aeb9df97"},{url:"img/top/13.jpg",revision:"4e55bcbfe3caa8614d813520b645ba79"},{url:"img/top/14.jpg",revision:"d5834ab91cf428452cab8c403e3904f4"},{url:"img/top/15.jpg",revision:"1e347ae2be47281027d99cfaa8e82f7e"},{url:"img/top/16.jpg",revision:"205b2d33820a0c52f0cdd92fb30513ad"},{url:"img/top/17.jpg",revision:"8ca991ee715df5b5e83ed8f3f17d4543"},{url:"img/top/18.jpg",revision:"8f16aea14068134c95561746a55f66b2"},{url:"img/top/19.jpg",revision:"733502dddd4177f3c166cdb238f92b9b"},{url:"img/top/2.jpg",revision:"e2a329999f069ff3b301f9fcc7230751"},{url:"img/top/20.jpg",revision:"903e0bd36caafc336411e1649412b023"},{url:"img/top/21.jpg",revision:"a8963f6c42fbc018e8d8cfd0ef9c19fc"},{url:"img/top/22.jpg",revision:"1f8d748b0a5b7ed1895092ac5cf177eb"},{url:"img/top/23.jpg",revision:"c76a61f0b85c8f799884436591113273"},{url:"img/top/24.jpg",revision:"8748a523692a8ad178bbb97da3a1c1a3"},{url:"img/top/25.jpg",revision:"1261fe78c09871b7ca40cec9aa13ee1d"},{url:"img/top/26.jpg",revision:"38a54cd2da9b5d6333d57d11e9eb6753"},{url:"img/top/27.jpg",revision:"f7634a75f7a96d9ce06560dba1fdc828"},{url:"img/top/28.jpg",revision:"e7ac0adde51366e8dcfc38a472a90c95"},{url:"img/top/29.jpg",revision:"ec6245efd7f56f5b431cf5a16aa445de"},{url:"img/top/3.jpg",revision:"bea9d1b196906ea67bcc56a82e355247"},{url:"img/top/4.jpg",revision:"a184678230d25a706e24662e818cd731"},{url:"img/top/5.jpg",revision:"f3251b46c612fca51f9c33ac5d45d2cd"},{url:"img/top/6.jpg",revision:"fce7c0a363dd7e32488bc3ef79b6e6a9"},{url:"img/top/7.jpg",revision:"01a97a55c788c6ed2f84da7ee1ec8dba"},{url:"img/top/8.jpg",revision:"71474d5dd0a74ca8c44048d7f338f6c3"},{url:"img/top/9.jpg",revision:"b4f06217763c68e617d682f2202f5141"},{url:"img/wechat.png",revision:"e678c667fa51a05fddd4b9f726acc2f1"},{url:"index.html",revision:"0e3224156e783ea7dac23aef83292821"},{url:"js/main.js",revision:"c2d6628801fd2dc0ea1739901cf5d99b"},{url:"js/search/algolia.js",revision:"af567f93a5504310fe16fe368a4ee89e"},{url:"js/search/local-search.js",revision:"149fcc60c1de0a818e111978d01cbd87"},{url:"js/tw_cn.js",revision:"b3810513e04b13b2d18c6b779c883f85"},{url:"js/utils.js",revision:"24971090b8b1bd5d3f538d414e270fd3"},{url:"link/index.html",revision:"39a8f5c0eee9177f73f3242b28536474"},{url:"schedule/index.html",revision:"5a5c4fa650ef286ae4a55603aa9f5855"},{url:"tags/index.html",revision:"9790e79a54e58516f12b88ca5633c343"}],{}),e.registerRoute(/^https:\/\/cdn\.example\.com\/.*/,new e.CacheFirst,"GET")}));
//# sourceMappingURL=service-worker.js.map
