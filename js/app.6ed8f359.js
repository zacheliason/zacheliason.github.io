(function(t){function e(e){for(var i,n,r=e[0],c=e[1],d=e[2],p=0,h=[];p<r.length;p++)n=r[p],Object.prototype.hasOwnProperty.call(o,n)&&o[n]&&h.push(o[n][0]),o[n]=0;for(i in c)Object.prototype.hasOwnProperty.call(c,i)&&(t[i]=c[i]);l&&l(e);while(h.length)h.shift()();return s.push.apply(s,d||[]),a()}function a(){for(var t,e=0;e<s.length;e++){for(var a=s[e],i=!0,r=1;r<a.length;r++){var c=a[r];0!==o[c]&&(i=!1)}i&&(s.splice(e--,1),t=n(n.s=a[0]))}return t}var i={},o={app:0},s=[];function n(e){if(i[e])return i[e].exports;var a=i[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=t,n.c=i,n.d=function(t,e,a){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)n.d(a,i,function(e){return t[e]}.bind(null,i));return a},n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],c=r.push.bind(r);r.push=e,r=r.slice();for(var d=0;d<r.length;d++)e(r[d]);var l=c;s.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"034f":function(t,e,a){"use strict";var i=a("85ec"),o=a.n(i);o.a},"1e67":function(t,e,a){},3362:function(t,e,a){"use strict";var i=a("1e67"),o=a.n(i);o.a},"3a3e":function(t,e,a){},"44e6":function(t,e,a){"use strict";var i=a("8611"),o=a.n(i);o.a},4678:function(t,e,a){var i={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn-bd":"9686","./bn-bd.js":"9686","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-in":"ec2e","./en-in.js":"ec2e","./en-nz":"6f50","./en-nz.js":"6f50","./en-sg":"b7e9","./en-sg.js":"b7e9","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-mx":"b5b7","./es-mx.js":"b5b7","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fil":"d69a","./fil.js":"d69a","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-deva":"aaf2","./gom-deva.js":"aaf2","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./oc-lnc":"167b","./oc-lnc.js":"167b","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tk":"5aff","./tk.js":"5aff","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-mo":"3a6c","./zh-mo.js":"3a6c","./zh-tw":"90ea","./zh-tw.js":"90ea"};function o(t){var e=s(t);return a(e)}function s(t){if(!a.o(i,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return i[t]}o.keys=function(){return Object.keys(i)},o.resolve=s,t.exports=o,o.id="4678"},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d"),a("4e82");var i=a("2b0e"),o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("div",{attrs:{id:"bar"}},[a("div",{attrs:{id:"bar-container"}},[a("div",[a("router-link",{attrs:{to:"/"}},[a("h3",[t._v("zacheliason"+t._s(t.pathname))])])],1),a("div",{attrs:{id:"right-box"}},[a("div",{},[a("router-link",{attrs:{to:"/projects"}},[t._v("🤖 projects")])],1),a("div",{},[a("router-link",{attrs:{to:"/design"}},[t._v("💿 design")])],1),a("div",{},[a("router-link",{attrs:{to:"/about"}},[t._v("🙇‍♂️ about")])],1)])])]),a("div",{staticStyle:{height:"calc(100vh - 3em)",width:"85%",margin:"0 auto"}},[a("router-view")],1),t._m(0)])},s=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("footer",[a("div",[a("a",{attrs:{target:"_blank",href:"https://www.instagram.com/z.eliason/"}},[t._v("instagram")])]),a("div",[a("a",{attrs:{target:"_blank",href:"https://twitter.com/zachs_not_here"}},[t._v("twitter")])]),a("div",[a("a",{attrs:{target:"_blank",href:"https://github.com/zacheliason/"}},[t._v("github")])]),a("div",{attrs:{id:"sitecode"}},[a("a",{attrs:{target:"_blank",href:"https://github.com/zacheliason/z_portfolio"}},[t._v("[site code]")])])])}],n=(a("ac1f"),a("5319"),{name:"App",computed:{pathname:function(){var t=window.location.pathname;return t=t.replace("projects","🤖"),t=t.replace("design","💿"),t=t.replace("about","🙇‍♂️"),t}}}),r=n,c=(a("034f"),a("2877")),d=Object(c["a"])(r,o,s,!1,null,null,null),l=d.exports,p=a("8c4f"),h=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},u=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticStyle:{height:"100%",width:"100%"}},[a("div",{staticClass:"top-spacer"}),a("div",{staticClass:"left"},[a("div",{staticClass:"left-box"},[a("img",{attrs:{src:"/images/zach_homepage_2.png",alt:""}})])]),a("div",{staticClass:"right"},[a("div",{staticClass:"right-box"},[a("div",[a("h2",[t._v("Hi, I'm Zach!")]),a("p",[t._v("I'm an enthusiastic bioinformatics student studying at "),a("span",{staticClass:"smallcaps"},[t._v("BYU")]),t._v(" (2023) with interests in genetics, epidemiology, and quantitative ecology.")]),a("h1",[t._v("🌱 🏔 👨‍🔬 🤖 🦠 🧬 ‍❤️‍🔥")])])])]),a("div",{staticClass:"bottom-spacer"})])}],f={name:"Home",components:{}},m=f,g=(a("aecc"),Object(c["a"])(m,h,u,!1,null,"285a280a",null)),v=g.exports,b=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"top-spacer"}),a("h2",[t._v("projects")]),a("div",{staticClass:"left"},t._l(t.projects,(function(e){return a("div",{key:e.id},[a("li",[a("router-link",{attrs:{to:"/projects/"+e.name}},[t._v(t._s(e.name.replaceAll("_"," ").replace(/(^\w{1})|(\s+\w{1})/g,(function(t){return t.toUpperCase()})))),a("span",{staticClass:"date"},[t._v(" "+t._s(t.format_date(e.date)))])])],1)])})),0),a("div",{staticClass:"right"}),a("div",{staticClass:"top-spacer"})])},_=[],j=(a("1276"),{name:"Projects",components:{},methods:{format_date:function(t){var e=t.split("T")[0],a=e.split("-");return a[1]+"/"+a[2]+"/"+a[0]}},computed:{projects:function(){return this.$root.$data.projects}}}),y=j,k=(a("3362"),Object(c["a"])(y,b,_,!1,null,"ec8bf03c",null)),w=k.exports,$=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"top-spacer"}),a("h2",{staticStyle:{display:"inline-block","margin-bottom":"0","padding-right":".3em"}},[t._v(t._s(t.remove_underscores(t.$route.params.id)))]),t._v(" | "),a("div",{staticClass:"date"},[t._v(" posted "+t._s(this.date)+" ")]),a("hr"),a("vue-markdown",{attrs:{id:"markdown",source:t.md}}),a("hr"),a("div",{staticClass:"flexbox"},[t.if_previous_project?a("div",{staticClass:"v-flex"},[a("p",{staticClass:"no-padding sans"},[t._v("newer projects")]),a("div",{staticClass:"break"}),a("h6",{staticClass:"no-padding"},[a("router-link",{attrs:{to:"/projects/"+t.previous_project.name}},[t._v("<- "+t._s(t.remove_underscores(t.previous_project.name)))])],1)]):a("div"),t.if_next_project?a("div",{staticClass:"v-flex",staticStyle:{"justify-content":"right"}},[a("p",{staticClass:"no-padding sans"},[t._v("older projects")]),a("div",{staticClass:"break"}),a("h6",{staticClass:"no-padding"},[a("router-link",{attrs:{to:"/projects/"+t.next_project.name}},[t._v(t._s(t.remove_underscores(t.next_project.name))+" ->")])],1)]):t._e()]),a("div",{staticClass:"top-spacer bottom-spacer"})],1)},C=[],S=(a("ad9d"),a("c740"),a("b0c0"),a("c197")),x=a.n(S),A=(a("3a3e"),a("8009"),a("416b"),a("3d21"),a("49cc"),{name:"ProjectViewer",props:{},mounted:function(){x.a.highlightAll()},methods:{remove_underscores:function(t){return t.replaceAll("_"," ").replace(/(^\w{1})|(\s+\w{1})/g,(function(t){return t.toUpperCase()}))}},computed:{if_previous_project:function(){this.$root.$data.projects;var t=this.project_index-1;return t>=0},if_both:function(){return this.if_next_project&&this.if_previous_project},if_next_project:function(){var t=this.$root.$data.projects,e=this.project_index+1;return e<t.length},previous_project:function(){var t=this.$root.$data.projects,e=this.project_index-1;return t[e]},next_project:function(){var t=this.$root.$data.projects,e=this.project_index+1;return t[e]},project_index:function(){var t=this.$root.$data.projects,e=this.$route.params.id,a=t.findIndex((function(t,a){if(t.name==e)return!0}));return a},project:function(){var t=this.$root.$data.projects;return t[this.project_index]},date:function(){var t=this.project.date.split("T")[0],e=t.split("-");return e[1]+"/"+e[2]+"/"+e[0]},md:function(){var t=this.project,e=t.contents;return e=e.replace(/!\[(.*?)\]\((.+?)\)/,'![]($2)<p class="alt">$1</p>'),e}},data:function(){return{}}}),F=A,I=(a("ef41"),Object(c["a"])(F,$,C,!1,null,"05e8faa4",null)),P=I.exports,z=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"top-spacer"}),a("div",{staticClass:"h-flex"},[a("h2",{staticClass:"toggle",class:{active:t.show_photos},on:{click:function(e){return t.toggle_photos()}}},[t._v("🎞 photos")]),a("h2",{staticClass:"toggle",class:{active:t.show_design},on:{click:function(e){return t.toggle_design()}}},[t._v("💻 design")]),a("h2",{staticClass:"toggle",class:{active:t.show_art},on:{click:function(e){return t.toggle_art()}}},[t._v("🖼 art")])]),a("hr"),a("div",{staticClass:"relative"},[a("div",{staticClass:"square_overlays"},[a("div",{staticClass:"items"},t._l(t.items,(function(t){return a("div",{key:t.id},[a("div",{staticClass:"square_overlay"})])})),0)]),a("div",{staticClass:"items"},[t.show_items?a("div",{staticClass:"items"},t._l(t.items,(function(t){return a("div",{key:t.id},[a("router-link",{attrs:{to:"/design/"+t.name}},[a("div",{staticClass:"item",style:"background: url(/images/"+t.image[0]+") no-repeat center top;"})])],1)})),0):a("div",{staticStyle:{width:"100%"}},[a("p",[t._v("Toggle a category to view items.")])])])]),a("div",{staticClass:"bottom-spacer top-spacer"})])},O=[],T=(a("99af"),a("4de4"),a("d3b7"),a("6062"),a("3ca3"),a("ddb0"),a("a630"),{name:"Design",methods:{toggle_art:function(){this.$root.$data.show_art=!this.$root.$data.show_art},toggle_photos:function(){this.$root.$data.show_photos=!this.$root.$data.show_photos},toggle_design:function(){this.$root.$data.show_design=!this.$root.$data.show_design},contains_object:function(t,e){var a;for(a=0;a<e.length;a++)if(e[a]===t)return!0;return!1}},computed:{show_items:function(){return this.items.length>0},items:function(){var t=this,e=[];this.$root.$data.show_art&&(e=e.concat(this.$root.$data.items.filter((function(e){return t.contains_object("art",e.category)})))),this.$root.$data.show_photos&&(e=e.concat(this.$root.$data.items.filter((function(e){return t.contains_object("photo",e.category)})))),this.$root.$data.show_design&&(e=e.concat(this.$root.$data.items.filter((function(e){return t.contains_object("design",e.category)}))));var a=new Set(e);return e=Array.from(a).sort((function(t,e){return new Date(e.date)-new Date(t.date)})),e},show_photos:function(){return this.$root.$data.show_photos},show_art:function(){return this.$root.$data.show_art},show_design:function(){return this.$root.$data.show_design}}}),B=T,N=(a("aaf6"),Object(c["a"])(B,z,O,!1,null,"162d5684",null)),E=N.exports,D=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticStyle:{height:"100%"}},[a("div",{staticClass:"top-spacer"}),a("div",{staticClass:"right"},[a("div",{staticClass:"top-spacer"}),t._l(t.images,(function(t){return a("div",{key:t},[a("img",{attrs:{src:"/images/"+t,alt:""}})])})),a("div",{staticClass:"top-spacer"})],2),a("div",{staticClass:"left",attrs:{id:"left-box"}},[a("h2",{staticStyle:{display:"inline-block","margin-bottom":"0","padding-right":".3em"}},[t._v(t._s(t.item_name))]),a("div",{staticClass:"date"},[t._v(" "+t._s(t.item_date)+" ")]),a("hr"),a("p",[t._v(t._s(t.item_description))]),a("div",{staticClass:"top-spacer"})])])},L=[],H=(a("a4d3"),a("e01a"),{name:"DesignViewer",props:{},computed:{item_index:function(){var t=this.$root.$data.items,e=this.$route.params.id,a=t.findIndex((function(t,a){if(t.name==e)return!0}));return a},item:function(){var t=this.$root.$data.items;return t[this.item_index]},images:function(){var t=this.item;return t.image},item_name:function(){return this.item.name},item_description:function(){return this.item.description},item_date:function(){return this.item.date}},data:function(){return{}},methods:{}}),M=H,J=(a("d4da"),Object(c["a"])(M,D,L,!1,null,"5a4178a2",null)),W=J.exports,V=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"page"},[a("div",{staticClass:"top-spacer"}),a("div",{staticClass:"left"},[a("div",{staticClass:"left-box"},[a("div",{},[a("h2",[t._v("about")]),a("p",[t._v("I'm currently a student at Brigham Young University studying bioinformatics. While my research experience at BYU has been largely been in ecology and hydrology, I have recently become more interested in pursuing biomedical and genetic research.")]),t._m(0),a("p",[t._v("I enjoy hiking, art, music, photography, climbing, gardening, reading, ice skating, book-binding, & cooking.")]),a("p",[t._v("View my full resume "),a("router-link",{attrs:{to:"/about/cv"}},[t._v("here")]),t._v(" here.")],1)])])]),a("div",{staticClass:"right"}),a("img",{attrs:{src:"/images/mountain_about.png",alt:""}}),a("div",{staticClass:"top-spacer bottom-spacer"})])},U=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("p",[t._v("I'm proficient in "),a("span",{staticClass:"data"},[t._v(" Python, R, Bash, C++, SQL, MongoDB/NoSQL, Git version control, Javascript, Vue.js, Node.js, HTML/CSS, data visualization, ")]),a("span",{staticClass:"design"},[t._v(" Adobe Illustrator, InDesign, Photoshop, Aftereffects, ")]),t._v(" &"),a("span",{staticClass:"misc"},[t._v(" Russian.")])])}],Y={name:"About",components:{}},q=Y,R=(a("44e6"),Object(c["a"])(q,V,U,!1,null,"ffa8b804",null)),G=R.exports,K=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"spotify"},[a("FileImport")],1)},Q=[],X=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"all"}},[a("router-link",{attrs:{id:"exit",to:"/coding"},on:{click:t.revert}},[t._v(" ✕")]),t._m(0),t.frontPage?a("div",{staticClass:"frontpage"},[a("p",[t._v("First, request your data from Spotify at the bottom of your account's "),a("a",{attrs:{target:"_blank",href:"https://www.spotify.com/us/account/privacy/"}},[t._v("Privacy Settings")]),t._v(" page. (it may take up to 30 days to gather your streaming history) You will receive an email once it is ready to download. Then, "),a("span",{staticClass:"bold",on:{click:t.changePage}},[t._v("click here.")])])]):t._e(),t.frontPage?t._e():a("div",{staticClass:"backpage"},[t.importPending?a("div",{staticClass:"importStuff"},[a("div",{staticClass:"left"},[a("div",{staticClass:"box"},[a("input",{attrs:{type:"file",id:"selectFiles",value:"Import"},on:{change:t.changeFile}}),a("br"),a("label",{attrs:{for:"selectFiles"},on:{change:t.changeFile}},[t._v("Select File")]),a("button",{style:t.hoverStyle(t.fileSelected),attrs:{disabled:"",id:"import"},on:{click:function(e){t.importFile(),t.changeFile(),t.changeFileAdded()}}},[t._v(t._s(t.importText))]),a("button",{style:t.hoverStyle(t.fileAdded),attrs:{id:"gogogo"},on:{click:t.groupByArtist}},[t._v("Create")]),a("h1",[t._v("Files added: "+t._s(t.fileNum))]),a("div",{staticClass:"dot-windmill"})])]),a("div",{staticClass:"right"},[a("div",{staticClass:"box"},[a("p",[t._v("After you've unzipped your data file, you should see a number of "),a("b",[t._v(" StreamingHistory ")]),t._v(" JSONs starting from 0 and counting up, depending on how much music you listened to. Add each of these files in order, then create your streamgraph."),a("br"),a("br"),t._v(" "),a("span",{staticClass:"bold",on:{click:t.changePage}},[t._v("Forgot how to get your Spotify data?")])])])])]):t._e(),a("div",{staticClass:"vizpage",style:t.importPending?"display: none;":"display: unset;",attrs:{id:"vizpage"}},[a("button",{staticClass:"revertButton",attrs:{type:"button",name:"button"},on:{click:t.revert}},[t._v("Reset")]),a("div",{style:t.cardinalSwitch1?"display: unset;":"display: none;",attrs:{id:"my_dataviz"}})])])],1)},Z=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"mobile"},[a("p",[t._v("This app does not work on mobile. Please try a computer!")])])}],tt=a("2909"),et=(a("d81d"),a("b680"),a("caad"),a("2532"),a("b64b"),a("a15b"),a("e9c4"),a("2ef0")),at=a.n(et),it=a("c1df"),ot=a.n(it),st=a("5698"),nt={name:"HelloWorld",props:{msg:String},data:function(){return{demoPage:!0,fileSelected:!1,frontPage:!0,cardinalSwitch:!0,stepSwitch:!1,pointSwitch:!1,importText:"Add File",fileAdded:!1,fileNum:0,tempArray:[],buttonHov:{backgroundcolor:"white",color:"black",transition:".3s"}}},methods:{revert:function(){this.fileAdded=!1,this.demoPage=!1,this.frontPage=!1,this.fileNum=0,this.importText="Add File",this.$root.$data.importPending=!0,this.$root.$data.importedJSON=[],this.$root.$data.artistList=[],this.$root.$data.csv="",this.$root.$data.topArtists=[],this.$root.$data.topArtistsKeys={},this.$root.$data.weekMax=0,this.$root.$data.newWidth=0;var t=document.getElementById("my_dataviz");t.remove();var e=document.createElement("div");e.id="my_dataviz",e.style.marginTop="100px",document.getElementById("vizpage").appendChild(e)},changeDemo:function(){this.demoPage=!this.demoPage,this.frontPage=!this.frontPage},downloadWithCSS:function(){var t=document.getElementById("all"),e={margin:1,filename:"myfile.pdf",image:{type:"jpeg",quality:.98},html2canvas:{scale:2},jsPDF:{unit:"in",format:"letter",orientation:"portrait"}};html2pdf().set(e).from(t).save()},hoverStyle:function(t){return t?{"--button-opacity":1,"--button-color--hover":this.buttonHov.color,"--button-background-color--hover":this.buttonHov.backgroundcolor,"--button-transition--hover":this.buttonHov.transition}:{"--button-opacity":.3,"--button-color--hover":this.buttonHov.backgroundcolor,"--button-background-color--hover":this.buttonHov.color,"--button-transition--hover":this.buttonHov.transition}},changeFile:function(){this.fileSelected=!this.fileSelected,document.getElementById("import").disabled=!document.getElementById("import").disabled},changePage:function(){this.frontPage=!this.frontPage},changeFileAdded:function(){this.fileAdded=!0,this.fileNum+=1,this.importText=(this.fileAdded,"Add Another")},changeCardinal:function(){this.cardinalSwitch=!0,this.stepSwitch=!1,this.pointSwitch=!1},changeStep:function(){this.cardinalSwitch=!1,this.stepSwitch=!0,this.pointSwitch=!1},changePoint:function(){this.cardinalSwitch=!1,this.stepSwitch=!1,this.pointSwitch=!0},importFile:function(){var t=this,e=document.getElementById("selectFiles").files;if(e.length<=0)return!1;var a=new FileReader;a.onload=function(e){var a=JSON.parse(e.target.result);0==t.fileAdded?t.$root.$data.importedJSON=a:t.fileAdded&&(t.$root.$data.importedJSON=t.$root.$data.importedJSON.concat(a))},a.readAsText(e.item(0))},groupByArtist:function(){this.$root.$data.jsonSuccess=!0;var t=this.$root.$data.importedJSON;this.$root.$data.artistList=at.a.mapValues(at.a.groupBy(t,"artistName"),(function(t){return t.map((function(t){return at.a.omit(t,"artistName")}))})),this.sumPlayTime()},sumPlayTime:function(){var t=this.$root.$data.artistList,e=[];for(var a in t){var i=0;for(var o in t[a])i+=parseInt(t[a][o].msPlayed,10);i/=6e4;var s={artistName:a,minutesListened:i};e.push(s)}e.sort((function(t,e){return e.minutesListened-t.minutesListened})),console.log("Top 50 Artists");e.map((function(t){return t.artistName+" "+t.minutesListened+" minutes listened"}));for(var n=1;n<51;n++);for(var r={},c=0;c<20;c++)this.$root.$data.topArtists.push(e[c].artistName),r[e[c].artistName]=e[c].minutesListened.toFixed(2),this.$root.$data.topArtistsKeys=r;this.jsonToCSV()},jsonToCSV:function(){var t=this.$root.$data.importedJSON,e=[],a=this.$root.$data.topArtists;for(var i in t)a.includes(t[i].artistName)&&e.push(t[i]);var o=this.groupByWeek(e),s=[];for(var n in o){var r=0,c=o[n];for(var d in c){var l=d;"week"!=l&&(r+=c[l])}s.push(r)}var p=0;for(var h in s)s[h]>p&&(p=s[h]);this.$root.$data.weekMax=p;var u=function(t,e){return null===e?"":e},f=Object.keys(o[0]),m=[f.join(",")].concat(Object(tt["a"])(o.map((function(t){return f.map((function(e){return JSON.stringify(t[e],u)})).join(",")})))).join("\r\n");this.$root.$data.csv=m,this.createStreamgraph()},groupByWeek:function(t){var e=at.a.groupBy(t,(function(t){return ot()(t["endTime"],"YYYY-MM-DD HH:mm").startOf("isoWeek")})),a=[],i=[],o=[];for(var s in e)for(var n in i=e[s],o=at.a.mapValues(at.a.groupBy(i,"artistName"),(function(t){return t.map((function(t){return at.a.omit(t,"artistName")}))})),o){var r=0;for(var c in o[n])r+=parseInt(o[n][c].msPlayed,10);r/=6e4;var d={};d[n]=r,d["week"]=s,a.push(d)}var l=at.a.mapValues(at.a.groupBy(a,"week"),(function(t){return t.map((function(t){return at.a.omit(t,"week")}))})),p=this.parseWeek(l);return p},parseWeek:function(t){var e=[],a=[],i=this.$root.$data.topArtists,o=t;for(var s in o){var n=o[s],r=function(t){var e=i[t];if(d=n.some((function(t){return e in t})),d)return"continue";var a={};a[e]=0,n.push(a)};for(var c in i){var d;r(c)}}for(var l in o){a={};var p=o[l];for(var h in p){var u=p[h],f=Object.keys(u)[0];a[f]=u[f]}a["week"]=l,e.push(a)}return e},createStreamgraph:function(){var t=.7*this.$root.$data.weekMax,e=this.$root.$data.csv,a=this.$root.$data.topArtistsKeys,i={top:20,right:30,bottom:30,left:30},o=920-i.left-i.right,s=500-i.top-i.bottom;this.$root.$data.newWidth=o;var n=st["h"]("#my_dataviz").append("svg").attr("width",o+i.left+i.right).attr("height",s+i.top+i.bottom).append("g").attr("transform","translate("+i.left+","+i.top+")"),r=st["c"](e),c=r.columns;c.pop();var d=st["g"]().domain([new Date(r[0].week),new Date(r[r.length-1].week)]).range([0,o]);n.append("g").attr("transform","translate(0,"+s+")").call(st["b"](d).ticks(r.length-1)).call((function(t){return t.select(".domain").style("stroke","white")})).call((function(t){return t.selectAll(".tick line").style("stroke","white")})).call((function(t){return t.selectAll(".tick text").style("fill","white").style("font-family","space mono")}));n.append("text").attr("text-anchor","end").attr("x",o).attr("y",s-30);var l=st["e"]().domain([-t,t]).range([s,0]),p=st["f"]().domain(c).range(["#aadedd","#dc523f","#de8735","#4886af","#92a488","#4d5860","#662d91","#00a99d","#ff7bac","#d4145a","#236a87","#9e005d","#29abe2","#99815f","#8cc63f","#ffd3a0","#bdc6bc","#d9e021","#c2a089","#fdfdb8"]),h=st["j"]().offset(st["k"]).keys(c)(r),u=n.append("text").attr("class","tooltip").attr("x",0).attr("y",0).style("opacity",0).style("font-size",17).style("color","#FFFFFF").style("fill","#FFFFFF").style("font-weight","bolder").style("z-index",1e4).style("mix-blend-mode","difference"),f=n.append("text").attr("class","tooltip").attr("x",0).attr("y",20).style("opacity",0).style("font-size",17).style("color","#FFFFFF").style("fill","#FFFFFF").style("z-index",1e4),m=function(){u.style("opacity",1),f.style("opacity",1),st["i"](".myArea").transition().duration(250).style("opacity",.2),st["h"](this).transition().duration(151).style("stroke","black").style("opacity",1)},g="",v=0,b=function(t){g=t.srcElement.__data__.key,u.text(g),v=a[g];var e=Math.floor(parseInt(v)/60),i=parseInt(v)%60;f.text(e+" hours and "+i+" minutes listened")},_=function(){u.style("opacity",0),f.style("opacity",0),st["i"](".myArea").transition().duration(151).style("opacity",1).style("stroke","none")},j=st["a"]().x((function(t){return d(new Date(t.data.week))})).y0((function(t){return l(t[0])})).y1((function(t){return l(t[1])})).curve(st["d"]);function y(){n.selectAll("mylayers").data(h).transition().duration(1e3).append("path")}n.selectAll("mylayers").data(h).enter().append("path").attr("class","myArea").style("fill",(function(t){return p(t.key)})).attr("d",j).on("mouseover",m).on("mousemove",b).on("mouseleave",_),console.log("SVG: "),console.log(n),console.log("AREA:"),console.log(j),st["h"]("#buttonXlim").on("click",y),this.$root.$data.importPending=!1}},computed:{importPending:function(){return this.$root.$data.importPending},cardinalSwitch1:function(){return this.cardinalSwitch},stepSwitch1:function(){return this.stepSwitch},pointSwitch1:function(){return this.pointSwitch}},mounted:function(){document.getElementById("all").classList.add("fade")}},rt=nt,ct=(a("a9a6"),Object(c["a"])(rt,X,Z,!1,null,"48930e36",null)),dt=ct.exports,lt={name:"SpotifyStreamgraph",components:{FileImport:dt}},pt=lt,ht=(a("e574"),Object(c["a"])(pt,K,Q,!1,null,null,null)),ut=ht.exports;i["a"].use(p["a"]);var ft=[{path:"/",name:"Home",component:v},{path:"/projects",name:"Projects",component:w},{path:"/about",name:"About",component:G},{path:"/design",name:"Design",component:E},{path:"*",redirect:"/"},{path:"/projects/spotify_streamgraph",name:"SpotifyStreamgraph",component:ut},{path:"/projects/:id",component:P},{path:"/design/:id",component:W}],mt=new p["a"]({mode:"hash",base:"/",routes:ft}),gt=mt,vt=a("9f1d"),bt=a("832e"),_t=a("9ce6"),jt=a.n(_t);i["a"].config.productionTip=!1;var yt={projects:vt.sort((function(t,e){return new Date(e.date)-new Date(t.date)})),show_art:!1,show_photos:!1,show_design:!1,items:bt};i["a"].component("vue-markdown",jt.a),new i["a"]({router:gt,data:yt,components:{VueMarkdown:jt.a},render:function(t){return t(l)}}).$mount("#app")},"581b":function(t,e,a){},7783:function(t,e,a){},"832e":function(t){t.exports=JSON.parse('[{"id":1,"name":"iceberg","category":["design","2020","digital"],"image":["iceberg.jpg"],"date":"2/1/2020","description":"Promo imagery I designed for the Ballard Brief Summit at the Ballard Center.","dithered":"dithered_iceberg.png"},{"id":2,"name":"bambina_poster","category":["art","digital","2019"],"image":["jacob_elise.jpg"],"date":"1/1/2020","description":"Personal project I made for my brother last Christmas.","dithered":"dithered_jacob_elise.png"},{"id":3,"name":"kiev88_black_&_white_roll_1","category":["photo","film","b&w","kiev88","2020"],"image":["kiev079.jpg","kiev080.jpg","kiev081.jpg","kiev084.jpg","kiev085.jpg","kiev088.jpg"],"date":"6/1/2020","description":"The first roll I shot on my Kiev88. There were some pretty bad light leaks and a sticky focus ring but I still think they were fun.","dithered":"dithered_kiev079.png"},{"id":4,"name":"kiev88_black_&_white_roll_2","category":["photo","film","b&w","kiev88","2020"],"image":["kiev3110.jpg","kiev3112.jpg","kiev3115.jpg","kiev3119.jpg"],"date":"6/1/2020","description":"I was able to seal the light leaks I\'d seen in previous rolls so we thankfully saw fewer of those in these pictures.","dithered":"dithered_kiev3110.png"},{"id":5,"name":"kiev88_color_roll_1","category":["photo","film","color","kiev88","2020"],"image":["kiev3122.jpg","kiev3121.jpg","kiev3123.jpg","kiev3125.jpg","kiev3127.jpg","kiev3128.jpg","kiev3129.jpg"],"date":"7/1/2020","description":"Pictures from trips I took in summer of 2020.","dithered":"dithered_kiev3122.png"},{"id":6,"name":"linocut_tree","category":["art","printmaking","2017"],"image":["print2.jpg"],"date":"8/1/2017","description":"This was the last piece of art I made before leaving for Ukraine in 2017.","dithered":"dithered_print2.png"},{"id":7,"name":"isolation_illo","category":["design","digital","illustration","2020"],"image":["isolation101.jpg"],"date":"7/1/2020","description":"This was an illustration I did for a Ballard Center brief on the effects of isolation on mental health.","dithered":"dithered_isolation101.png"},{"id":8,"name":"lincoln_center","category":["photo","film","b&w","2015"],"image":["photo1.jpg"],"date":"8/1/2015","description":"Taken in DC.","dithered":"dithered_photo1.png"},{"id":9,"name":"postal_office","category":["photo","film","color","2015"],"image":["photo2.jpg"],"date":"8/1/2015","description":"Postal Office in DC.","dithered":"dithered_photo2.png"},{"id":10,"name":"linocut_peasant","category":["art","printmaking","2016"],"image":["print1.jpg"],"date":"2/20/2016","description":"Linocut from high school.","dithered":"dithered_print1.png"},{"id":11,"name":"music_journal","category":["design","data vis","2020"],"image":["jan_may_music04.jpg","jan_may_music02.jpg"],"date":"6/4/2020","description":"Streamgraph showing my top 20 artists I listened to on Spotify during the first half of 2020, interpolated with some life events that happened along the way.","dithered":"dithered_jan_may_music04.png"},{"id":13,"name":"fashion_gif","category":["design","digital","animated","2020"],"image":["final_animation.gif"],"date":"6/1/2020","description":"Small animation made for the Ballard Center\'s social media. They wanted to depict certain coping mechanisms during quarantine. This one was \'taking fashion shots of my sister\'s outfits every day.\'","dithered":"dithered_final_animation.png"},{"id":14,"name":"creative_exercise","category":["design","2020"],"image":["creative_exercises1.jpg"],"date":"5/1/2020","description":"This was my creative exercise for entrance into the BYU graphic design pre-program. We were given a sheet of abstract shapes (outlined in cyan dots) and free reign for how we chose to use them in our design. I went with a theme of dancers.","dithered":"dithered_creative_exercises1.png"},{"id":15,"name":"color_studies","category":["art","2020"],"image":["color1.jpg","color2.jpg"],"date":"3/1/2020","description":"Color studies done for my DSGN class.","dithered":"dithered_color1.png"},{"id":16,"name":"collages","category":["art","2020"],"image":["collage_yellow.jpg","collage_orange.jpg","b&w.jpg","collage_blue.jpg"],"date":"3/1/2020","description":"Collage pieces done for my DSGN class.","dithered":"dithered_collage_yellow.png"},{"id":17,"name":"overalls_illo","category":["design","digital","illustration","2020"],"image":["butterfly01.jpg"],"date":"6/1/2020","description":"Small illustration I did for the Ballard Center\'s Social Media. This was to depict a quote about happiness.","dithered":"dithered_butterfly01.png"},{"id":18,"name":"battle_of_the_bands","category":["design","2020"],"image":["botb202001.jpg","all_star_botb101.jpg","all_star_botb.jpg"],"date":"2/1/2020","description":"Various designs I did for Battle of the Bands at The Wall.","dithered":"dithered_botb202001.png"},{"id":19,"name":"law_report_timeline","category":["design","2015"],"image":["1.jpg"],"date":"7/1/2015","description":"This is a page I worked on for the BYU 2015 Annual Law Report while I was interning at BYU Publications & Graphics.","dithered":"dithered_1.png"},{"id":20,"name":"holy_trinity_pattern_copy","category":["art","2020"],"image":["3.jpg"],"date":"4/1/2020","description":"This is a copy of the icon \'Holy Trinity\' I did for my DSGN class, subbing in my own colors and patterns.","dithered":"dithered_3.png"},{"id":21,"name":"revolution_1905,_1917","category":["design","2020"],"image":["21.jpg"],"date":"4/1/2020","description":"This is a paper cutout I designed depicting the events of the Russian Revolutions of 1905 and 1917 in silhouette.","dithered":"dithered_21.png"},{"id":22,"name":"blue_man","category":["art","2016","painting"],"image":["blue_man.jpg"],"date":"5/16/2016","description":"Inexplicably blue man I painted in my high school art class.","dithered":"dithered_blue_man.png"},{"id":23,"name":"memory_collage","category":["art","2020","painting","collage"],"image":["dsgn_final.jpeg"],"date":"5/1/2020","description":"This was one of the projects I did for my DSGN class. The theme of this collage was memory crossed with time, combining details from the home I grew up in, such as the outline of a chair, the curve of a music stand, or an old family photo, with elements from watches and other timepieces.","dithered":"dithered_dsgn_final.png"},{"id":24,"name":"sketchbook_process","category":["art","2020","sketchbook"],"image":["sketchbook2.jpg","sketchbook3.jpg","sketchbook4.jpg","sketchbook5.jpg","sketchbook6.jpg","sketchbook7.jpg","sketchbook8.jpg"],"date":"5/1/2020","description":"These are some sketches from my latest sketchbook to show process.","dithered":"dithered_sketchbook2.png"},{"id":25,"name":"kiev88_color_roll_2","category":["photo","film","color","kiev88","2020"],"image":["kiev4_1.jpg","kiev4_2.jpg","kiev4_3.jpg","kiev4_4.jpg","kiev4_5.jpg"],"date":"10/6/2020","description":"Photos from a roadtrip to Leavenworth, WA I took last fall.","dithered":"dithered_kiev4_1.png"},{"id":26,"name":"tiny_linocuts","category":["art","printmaking","2021"],"image":["lino_tiny.jpg"],"date":"3/11/2021","description":"Couple of tiny linocuts! Western tanager on the right.","dithered":"dithered_lino_tiny.png"},{"id":27,"name":"parents_linocut","category":["art","printmaking","2020"],"image":["lino_parents.jpg"],"date":"1/25/2021","description":"Linocut of my parents that I designed for a joint Christmas gift with my brother.","dithered":"dithered_lino_parents.png"}]')},"85ec":function(t,e,a){},8611:function(t,e,a){},"91ac":function(t,e,a){},"9f1d":function(t){t.exports=JSON.parse("[]")},a0a7:function(t,e,a){},a9a6:function(t,e,a){"use strict";var i=a("7783"),o=a.n(i);o.a},aaf6:function(t,e,a){"use strict";var i=a("a0a7"),o=a.n(i);o.a},aecc:function(t,e,a){"use strict";var i=a("e01c"),o=a.n(i);o.a},cd1d:function(t,e,a){},d4da:function(t,e,a){"use strict";var i=a("91ac"),o=a.n(i);o.a},e01c:function(t,e,a){},e574:function(t,e,a){"use strict";var i=a("cd1d"),o=a.n(i);o.a},ef41:function(t,e,a){"use strict";var i=a("581b"),o=a.n(i);o.a}});
//# sourceMappingURL=app.6ed8f359.js.map