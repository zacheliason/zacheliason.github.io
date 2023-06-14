(function(){var t={4522:function(t,e,s){"use strict";var a=s(7195),i=function(){var t=this,e=t._self._c;return e("div",{attrs:{id:"app"}},[e("div",{attrs:{id:"bar"}},[e("div",{attrs:{id:"bar-container"}},[e("div",[e("router-link",{staticClass:"bar-h3",attrs:{to:t.backpath}},[e("h3",[t._v("zacheliason"+t._s(t.pathname))])])],1),e("div",{attrs:{id:"right-box"}},[e("div",{on:{mouseover:function(e){return t.emoji("projects")},mouseleave:function(e){return t.leaveemoji("projects")}}},[e("router-link",{staticClass:"emoji",attrs:{to:"/projects",id:"emoji-projects"}},[t._v("🤖")])],1),e("div",{on:{mouseover:function(e){return t.emoji("design")},mouseleave:function(e){return t.leaveemoji("design")}}},[e("router-link",{staticClass:"emoji",attrs:{to:"/design",id:"emoji-design"}},[t._v("💿")])],1),e("div",{on:{mouseover:function(e){return t.emoji("about")},mouseleave:function(e){return t.leaveemoji("about")}}},[e("router-link",{staticClass:"emoji",attrs:{to:"/about",id:"emoji-about"}},[t._v("🙇‍♂️")])],1),e("div",{on:{mouseover:function(e){return t.emoji("blog")},mouseleave:function(e){return t.leaveemoji("blog")}}},[e("router-link",{staticClass:"emoji",attrs:{to:"/blog",id:"emoji-blog"}},[t._v("✍️")])],1)])])]),e("div",{attrs:{id:"mobile-bar"}},[e("router-link",{staticClass:"mono",attrs:{to:"/"}},[t._v("🏠")]),t._v(" | "),e("router-link",{staticClass:"mono",attrs:{to:"/projects"}},[t._v("🤖 "),e("span",{staticClass:"show-on-active"},[t._v("projects")])]),t._v(" | "),e("router-link",{staticClass:"mono",attrs:{to:"/design"}},[t._v("💿 "),e("span",{staticClass:"show-on-active"},[t._v("design")])]),t._v(" | "),e("router-link",{staticClass:"mono",attrs:{to:"/about"}},[t._v("🙇‍♂️ "),e("span",{staticClass:"show-on-active"},[t._v("about")])]),t._v(" | "),e("router-link",{staticClass:"mono",attrs:{to:"/blog"}},[t._v("✍️ "),e("span",{staticClass:"show-on-active"},[t._v("blog")])])],1),e("div",{attrs:{id:"router-view"}},[e("router-view")],1),t._m(0),t._m(1)])},o=[function(){var t=this,e=t._self._c;return e("footer",{staticClass:"not-on-mobile"},[e("div",[e("a",{attrs:{target:"_blank",href:"https://www.instagram.com/zacheliason_/"}},[t._v("instagram")])]),e("div",[e("a",{attrs:{target:"_blank",href:"https://github.com/zacheliason/"}},[t._v("github")])]),e("div",[e("a",{attrs:{target:"_blank",href:"https://github.com/zacheliason/website"}},[t._v("[site code]")])])])},function(){var t=this,e=t._self._c;return e("footer",{staticClass:"on-mobile"},[e("div",[e("a",{attrs:{target:"_blank",href:"https://www.instagram.com/zacheliason_/"}},[t._v("instagram")])]),e("div",[e("a",{attrs:{target:"_blank",href:"https://github.com/zacheliason/"}},[t._v("github")])]),e("div",[e("a",{attrs:{target:"_blank",href:"https://github.com/zacheliason/website"}},[t._v("[site code]")])])])}],r={name:"App",computed:{backpath(){let t=this.$route.path;return t=t.split("/"),t=t.slice(0,t.length-1).join("/"),0==t.length&&(t="/"),t=t.replace("/categories",""),t=t.replace("/authors",""),t},pathname(){let t=this.$route.path;return t=t.replace("projects","🤖"),t=t.replace("design","💿"),t=t.replace("blog","✍️"),t=t.replace("about","🙇‍♂️"),t=t.replace("HIDE_",""),t=t.replaceAll(" ","_"),t.length>28&&(t=t.slice(0,28)+"..."),t}},methods:{async emoji(t){var e=document.getElementById("emoji-"+t),s=e.innerHTML;-1==s.indexOf(t)&&(e.innerHTML=e.innerHTML+" "+t)},leaveemoji(t){var e=document.getElementById("emoji-"+t);-1!=e.innerHTML.indexOf(t)&&(e.innerHTML=e.innerHTML.split(" "+t)[0])}}},n=r,l=s(1001),c=(0,l.Z)(n,i,o,!1,null,null,null),d=c.exports,p=s(2241),u=function(){var t=this,e=t._self._c;return e("div",{staticClass:"home"},[e("div",{staticClass:"top-spacer"}),e("h1",[t._v("Hi! My name is Zach and I just finished an undergrad in Bioinformatics. I enjoy coding solutions to real-world problems—particularly in "),e("router-link",{attrs:{to:"/"}},[t._v("cancer immunology")]),t._v(" and "),e("router-link",{attrs:{to:"/"}},[t._v("genomics")]),t._v(" research. "+t._s(t.earth))],1),e("h1",[t._v("See more "),e("router-link",{attrs:{to:"/about"}},[t._v("here »")])],1),e("div",{staticClass:"bottom-spacer"})])},m=[],h={name:"Home",data(){return{emojis:["🌍","🌎","🌏"],currentIndex:0}},computed:{earth(){return this.emojis[this.currentIndex]},currentSeason(){const t=new Date,e=t.getMonth()+1;return e>=3&&e<=5?"Spring":e>=6&&e<=8?"Summer":e>=9&&e<=11?"Autumn":"Winter"}},mounted(){setInterval((()=>{this.currentIndex=(this.currentIndex+1)%this.emojis.length}),1e3)}},g=h,f=(0,l.Z)(g,u,m,!1,null,"f753fcfe",null),_=f.exports,v=function(){var t=this,e=t._self._c;return e("div",[e("div",{staticClass:"top-spacer"}),e("ul",{staticStyle:{"list-style-type":"none",padding:"0"}},[t._l(t.projects,(function(s,a){return e("li",{key:s.id,staticClass:"project-li",attrs:{"data-emoji":t.generateRandomEmoji(a)}},[e("div",[e("router-link",{staticClass:"project",attrs:{to:"/projects/"+s.name}},[e("h1",[t._v(t._s(s.name.replaceAll("_"," ").replace(/(^\w{1})|(\s+\w{1})/g,(t=>t.toUpperCase())))),e("br",{staticClass:"on-mobile"}),e("span",{staticClass:"normal date"},[t._v(t._s(t.format_date(s.date)))])])]),e("br",{staticClass:"on-mobile"}),e("div",{staticClass:"tag-container-container",class:{hide_tags:!t.projectHasTags(s.tags)}},[e("div",{staticClass:"tag-container"},t._l(s.tags,(function(s){return e("div",{key:s,staticClass:"tag",class:{active:t.isActive(s)},on:{click:function(e){return t.toggleTag(s)}}},[t._v(t._s(s))])})),0)])],1)])})),e("li",{class:{spotify_off:t.SpotifyOff()},attrs:{"data-emoji":t.generateRandomEmoji(19285)}},[e("router-link",{staticClass:"project",attrs:{to:"/projects/spotify_streamgraph"}},[e("h1",[t._v("Spotify Streamgraph Generator"),e("br",{staticClass:"on-mobile"}),e("span",{staticClass:"date"},[t._v("1/30/2021")])])])],1)],2),e("div",{staticClass:"top-spacer"})])},j=[],y={name:"Projects",data(){return{filter_by:"",emojis:["🔥","👍","🙌","🎉","🎶","🌟","🙏","💃","🔴","🎊","✨","🚀","💙","😃","🎁","🌈","🌞","👑","💥","😀","💜","🎈","💛","🌺","🎵","🌹","🌷","💚","💐","🌸","🌼","🌻","🍀","🌴","☀️","💫","🌍","💨","🌊","🌙","⭐","🌠","🍂","🍁","🌬️","🌫️","🌧️","🌦️","☁️","⛅","🌥️","🌪️","🌡️","🔆","🔅","❄️","🌨️","☃️","⛄","🌌","🪐","🌎","🌏","🌕","🌖","🌗","🌘","🌑","🌒","🌓","🌔","🌚","🌝","🌛","🌜","🌄","🌅","🌞","☄️","🎆","🎇","🌇","🌆","🌃","🌉","🌁","🎎","🎏","🎐","🧧","🎀","🎗️","🏮","🎑","🎋","🎍","🎄","🎅","🤶","🧑‍🎄","⛪"]}},methods:{generateRandomEmoji(t){let e=new Date,s=e.getSeconds(),a=Math.floor(31*Math.random());t+=1;let i=31*s*(31*t)*a%this.emojis.length;return this.emojis[i]},format_date(t){let e=t.split("T")[0],s=e.split("-");return s[1]+"/"+s[2]+"/"+s[0]},toggleTag(t){this.filter_by===t?this.filter_by="":this.filter_by=t},isActive(t){return this.filter_by==t},projectHasTags(t){return t.length>0},SpotifyOff(){let t=["coding"];return console.log(this.filter_by),""==this.filter_by?(console.log(2),!1):this.filter_by in t?(console.log(3),!1):(console.log(1),!0)}},computed:{projects(){if(!this.filter_by)return this.$root.$data.projects;const t=this.filter_by.toLowerCase();let e=this.$root.$data.projects;return e.filter((e=>e.tags.some((e=>e.toLowerCase().includes(t)))))}}},b=y,k=(0,l.Z)(b,v,j,!1,null,"e888c8b4",null),w=k.exports,C=function(){var t=this,e=t._self._c;return e("div",[e("div",{staticClass:"top-spacer"}),e("div",{staticClass:"mosaic-gallery"},[e("div",{staticClass:"mosaic-container"},t._l(t.designs,(function(s){return e("router-link",{key:s.name,staticClass:"design-item",style:"background-image: url(/images/"+s.images[0]+")",attrs:{to:"/design/"+s.name}},[e("div",{staticClass:"design-info"},[e("h3",{staticClass:"design-name"},[t._v(t._s(s.name))]),e("p",{staticClass:"date"},[t._v(t._s(t.format_date(s.date)))])])])})),1)]),e("div",{staticClass:"bottom-spacer"})])},$=[],x={name:"Design",methods:{format_date(t){return t}},computed:{designs(){return this.$root.$data.designs.filter((t=>!t.name.startsWith("HIDE")))}}},S=x,I=(0,l.Z)(S,C,$,!1,null,null,null),z=I.exports,H=function(){var t=this,e=t._self._c;return e("div",[e("div",{staticClass:"top-spacer"}),e("ul",{staticStyle:{"list-style-type":"none",padding:"0"}},t._l(t.posts,(function(s,a){return e("li",{key:s.id,staticClass:"post-li",attrs:{"data-emoji":t.generateRandomEmoji(a)}},[e("div",[e("router-link",{staticClass:"post",attrs:{to:"/blog/"+s.name}},[e("h1",[t._v(t._s(s.name.replaceAll("_"," ").replace(/(^\w{1})|(\s+\w{1})/g,(t=>t.toUpperCase())))),e("br",{staticClass:"on-mobile"}),e("span",{staticClass:"normal date"},[t._v(t._s(t.format_date(s.date)))])])]),e("br",{staticClass:"on-mobile"}),e("div",{staticClass:"tag-container-container",class:{hide_tags:!t.postHasTags(s.tags)}},[e("div",{staticClass:"tag-container"},t._l(s.tags,(function(s){return e("div",{key:s,staticClass:"tag",class:{active:t.isActive(s)},on:{click:function(e){return t.toggleTag(s)}}},[t._v(t._s(s))])})),0)])],1)])})),0),e("div",{staticClass:"top-spacer"})])},O=[],D={name:"Blog",data(){return{filter_by:"",emojis:["🔥","👍","🙌","🎉","🎶","🌟","🙏","💃","🔴","🎊","✨","🚀","💙","😃","🎁","🌈","🌞","👑","💥","😀","💜","🎈","💛","🌺","🎵","🌹","🌷","💚","💐","🌸","🌼","🌻","🍀","🌴","☀️","💫","🌍","💨","🌊","🌙","⭐","🌠","🍂","🍁","🌬️","🌫️","🌧️","🌦️","☁️","⛅","🌥️","🌪️","🌡️","🔆","🔅","❄️","🌨️","☃️","⛄","🌌","🪐","🌎","🌏","🌕","🌖","🌗","🌘","🌑","🌒","🌓","🌔","🌚","🌝","🌛","🌜","🌄","🌅","🌞","☄️","🎆","🎇","🌇","🌆","🌃","🌉","🌁","🎎","🎏","🎐","🧧","🎀","🎗️","🏮","🎑","🎋","🎍","🎄","🎅","🤶","🧑‍🎄","⛪"]}},methods:{generateRandomEmoji(t){let e=new Date,s=e.getSeconds(),a=Math.floor(31*Math.random());t+=1;let i=31*s*(31*t)*a%this.emojis.length;return this.emojis[i]},format_date(t){let e=t.split("T")[0],s=e.split("-");return s[1]+"/"+s[2]+"/"+s[0]},toggleTag(t){this.filter_by===t?this.filter_by="":this.filter_by=t},isActive(t){return this.filter_by==t},postHasTags(t){return t.length>0},SpotifyOff(){let t=["coding"];return console.log(this.filter_by),""==this.filter_by?(console.log(2),!1):this.filter_by in t?(console.log(3),!1):(console.log(1),!0)}},computed:{posts(){if(!this.filter_by)return this.$root.$data.posts;const t=this.filter_by.toLowerCase();let e=this.$root.$data.posts;return e.filter((e=>e.tags.some((e=>e.toLowerCase().includes(t)))))}}},T=D,N=(0,l.Z)(T,H,O,!1,null,"08ceab16",null),A=N.exports,B=function(){var t=this,e=t._self._c;return e("div",[e("div",{staticClass:"top-spacer"}),e("h1",[t._v("Hi! My name is Zach and I just finished an undergrad in Bioinformatics. I enjoy coding solutions to real-world problems—particularly in "),e("router-link",{attrs:{to:"/"}},[t._v("cancer immunology")]),t._v(" and "),e("router-link",{attrs:{to:"/"}},[t._v("genomics")]),t._v(" research, although I have experience in ecology and statistics research as well. "+t._s(t.earth))],1),e("h1",[t._v("I have significant experience in a variety of coding tools and languages (Python, PyTorch, R, C++, scripting/automation, database management, version control, web programming) and am proficient in design software (Adobe Illustrator, Photoshop, InDesign).")]),e("h1",[t._v("I also enjoy finding time to be outside, making things with my hands, and (lately) writing.")]),t._m(0),e("h1",[t._v("Friends and family, I look forward to your emails too 💌")]),e("div",{staticClass:"bottom-spacer"})])},E=[function(){var t=this,e=t._self._c;return e("h1",[t._v("If you're an employer, feel free to look at my "),e("a",{attrs:{href:"resume.pdf",target:"_blank"}},[t._v("resume")]),t._v(" or "),e("a",{attrs:{href:"mailto: eliasonzach@gmail.com"}},[t._v("reach out")]),t._v("!")])}],M={name:"About",data(){return{emojis:["🌍","🌎","🌏"],currentIndex:0}},computed:{earth(){return this.emojis[this.currentIndex]},currentSeason(){const t=new Date,e=t.getMonth()+1;return e>=3&&e<=5?"Spring":e>=6&&e<=8?"Summer":e>=9&&e<=11?"Autumn":"Winter"}},mounted(){setInterval((()=>{this.currentIndex=(this.currentIndex+1)%this.emojis.length}),1e3)}},P=M,L=(0,l.Z)(P,B,E,!1,null,null,null),Z=L.exports,W=function(){var t=this,e=t._self._c;return e("div",[e("div",{staticClass:"top-spacer"}),e("div",{domProps:{innerHTML:t._s(t.quarto_content)}}),e("div",{staticClass:"bottom-spacer"})])},J=[],F={name:"QuartoViewer",computed:{projects(){let t=this.$root.$data.projects,e=this.$root.$data.posts,s=t.concat(e);return s},quarto_content(){let t=this.projects.find((t=>t.name==this.$route.params.id));return t.content}}},Y=F,R=(0,l.Z)(Y,W,J,!1,null,null,null),q=R.exports,V=function(){var t=this,e=t._self._c;return e("div",[e("div",{staticClass:"top-spacer"}),e("h1",{staticClass:"design-name"},[t._v(" "+t._s(t.design.name)+" ")]),e("p",{staticClass:"single-date"},[t._v(" "+t._s(t.format_date(t.design.date))+" ")]),e("hr"),e("div",{ref:"container",staticClass:"parent container"},[e("div",{staticClass:"image-box"},[t._l(t.design.images,(function(t){return e("img",{attrs:{src:"/images/"+t}})})),e("div",{staticClass:"bottom-spacer not-on-mobile"})],2),e("div",{staticClass:"description"},[e("p",[t._v(" "+t._s(t.design.description)+" ")])])])])},U=[],G={name:"DesignViewer",computed:{designs(){return this.$root.$data.designs},design(){let t=this.designs.find((t=>t.name==this.$route.params.id));return t}},mounted(){this.adjustContainerHeight(),window.addEventListener("resize",this.adjustContainerHeight)},updated(){setTimeout(this.adjustContainerHeight,200)},destroyed(){window.removeEventListener("resize",this.adjustContainerHeight)},methods:{adjustContainerHeight(){const t=this.$refs.container;window.matchMedia("(max-width: 767px)").matches||t&&(t.style.height=t.scrollHeight+"px")},format_date(t){return t}}},K=G,X=(0,l.Z)(K,V,U,!1,null,null,null),Q=X.exports,tt=function(){var t=this,e=t._self._c;return e("div",{staticClass:"spotify"},[e("div",{staticClass:"top-spacer"}),e("FileImport")],1)},et=[],st=function(){var t=this,e=t._self._c;return e("div",[e("div",{staticClass:"mobile"},[e("div",{},[e("h1",[t._v("This app doesn't work on mobile!")]),e("router-link",{staticClass:"next-button",attrs:{to:"/projects"}},[e("h2",[t._v("« Back")])])],1)]),t.front_page?e("div",{staticClass:"frontpage"},[e("h1",[t._v("Request Spotify Data")]),t._m(0),e("h2",{staticClass:"next-button",on:{click:t.change_page}},[t._v("Next »")]),e("p")]):t._e(),t.front_page?t._e():e("div",{staticClass:"backpage"},[t.import_pending?e("div",{staticClass:"import_data"},[e("h1",[t._v("Import Data")]),t._m(1),e("p"),e("h2",{staticClass:"next-button",on:{click:t.change_page}},[t._v("« Request Spotify Data")]),e("p"),e("hr"),e("div",{staticClass:"left"},[e("div",{staticClass:"box"},[e("input",{attrs:{type:"file",id:"selectFiles",value:"Import"},on:{change:t.change_file}}),e("br"),e("label",{attrs:{for:"selectFiles"},on:{change:t.change_file}},[t._v("select file")]),e("button",{style:t.hover_style(t.file_selected),attrs:{disabled:"",id:"import"},on:{click:function(e){t.import_file(),t.change_file(),t.change_file_added()}}},[t._v(" "+t._s(t.import_text)+" ")]),e("button",{style:t.hover_style(t.file_added),attrs:{id:"gogogo"},on:{click:t.group_by_artist}},[t._v(" create ")]),e("h2",[t._v("files imported:")]),t._l(t.files,(function(s){return e("div",[e("p",{staticClass:"mono"},[t._v(t._s(s))])])}))],2)])]):t._e(),e("div",{staticClass:"vizpage",staticStyle:{width:"100%",position:"relative"},style:t.import_pending?"display: none;":"display: unset;",attrs:{id:"vizpage"}},[e("h2",[t._v("top artists")]),e("div",{staticClass:"top-artists"},t._l(20,(function(s){return e("div",{staticClass:"top-artist"},[t._v(" "+t._s(s)+". "),e("span",{staticClass:"bold mono"},[t._v(t._s(t.top_artists[s-1])+":")]),t._v(" "+t._s(t.minutes_to_hours(t.top_artists[s-1]))+" ")])})),0),e("div",{staticClass:"top-spacer"}),e("div",{staticStyle:{display:"flex","justify-content":"space-between",width:"100%"}},[e("h2",[t._v("streamgraph")]),e("h2",{staticClass:"revert_button",on:{click:t.revert}},[t._v("reset")])]),e("div",{style:t.cardinal_switch1?"display: unset;":"display: none;",attrs:{id:"streamgraph"}}),e("div",{style:t.step_switch1?"display: unset;":"display: none;",attrs:{id:"streamgraph2"}}),e("div",{style:t.point_switch1?"display: unset;":"display: none;",attrs:{id:"streamgraph3"}})])]),e("div",{staticClass:"bottom-spacer"})])},at=[function(){var t=this,e=t._self._c;return e("p",[t._v("As of the time of writing this you can request your data at the bottom of your account's "),e("a",{attrs:{target:"_blank",href:"https://www.spotify.com/us/account/privacy/"}},[t._v("Privacy Settings")]),t._v(" page (gathering streaming history can take up to 5 days). After you get the download email, click next.")])},function(){var t=this,e=t._self._c;return e("p",[t._v("Your zipped data file should include some "),e("span",{staticClass:"mono"},[t._v("StreamingHistoryJSON")]),t._v(" files starting from "),e("span",{staticClass:"mono"},[t._v("0")]),t._v(". Add each of them in order, then press "),e("span",{staticClass:"mono"},[t._v("create")]),t._v(" to view your streamgraph."),e("br")])}],it=(s(7658),s(1579)),ot=s.n(it),rt=s(1602),nt=s.n(rt),lt=s(4656),ct={name:"HelloWorld",props:{msg:String},data(){return{import_pending:!0,demo_page:!0,file_selected:!1,front_page:!0,cardinal_switch:!0,step_switch:!1,point_switch:!1,import_text:"add file",file_added:!1,fileNum:0,temp_array:[],buttonHov:{color:"white",backgroundcolor:"var(--bright)"}}},methods:{minutes_to_hours(t){let e=this.$root.$data.top_artists_keys[t];var s=Math.floor(parseInt(e)/60),a=parseInt(e)%60;return s+" hrs, "+a+" min"},revert(){this.file_added=!1,this.demo_page=!1,this.front_page=!1,this.fileNum=0,this.import_text="add file",this.import_pending=!0,this.$root.$data.importedJSON=[],this.$root.$data.artist_list=[],this.$root.$data.csv="",this.$root.$data.top_artists=[],this.$root.$data.top_artists_keys={},this.$root.$data.week_max=0,this.$root.$data.new_width=0,this.$root.$data.files_imported=[];let t=document.getElementById("streamgraph");t.remove();let e=document.createElement("div");e.id="streamgraph",e.style.marginTop="100px",e.style.position="absolute",e.style.left="7.5%",document.getElementById("vizpage").appendChild(e)},changeDemo(){this.demo_page=!this.demo_page,this.front_page=!this.front_page},downloadWithCSS(){let t=document.getElementById("all");var e={margin:1,filename:"myfile.pdf",image:{type:"jpeg",quality:.98},html2canvas:{scale:2},jsPDF:{unit:"in",format:"letter",orientation:"portrait"}};html2pdf().set(e).from(t).save()},hover_style(t){return t?{"--button-opacity":1,"--button-color--hover":this.buttonHov.backgroundcolor,"--button-background-color--hover":this.buttonHov.color,"--button-transition--hover":this.buttonHov.transition}:{"--button-opacity":.3,"--button-color--hover":this.buttonHov.backgroundcolor,"--button-background-color--hover":this.buttonHov.color,"--button-transition--hover":this.buttonHov.transition}},change_file(){this.file_selected=!this.file_selected,document.getElementById("import").disabled=!document.getElementById("import").disabled},change_page(){this.front_page=!this.front_page},change_file_added(){this.file_added=!0,this.fileNum+=1,this.import_text=(this.file_added,"add another")},changeCardinal(){this.cardinal_switch=!0,this.step_switch=!1,this.point_switch=!1},changeStep(){this.cardinal_switch=!1,this.step_switch=!0,this.point_switch=!1},changePoint(){this.cardinal_switch=!1,this.step_switch=!1,this.point_switch=!0},import_file(){var t=document.getElementById("selectFiles").files;if(t.length<=0)return!1;var e=new FileReader;e.fileName=t[0].name,e.onload=t=>{var e=JSON.parse(t.target.result);0==this.file_added?this.$root.$data.importedJSON=e:this.file_added&&(this.$root.$data.importedJSON=this.$root.$data.importedJSON.concat(e)),this.$root.$data.files_imported.push(t.target.fileName)},e.readAsText(t.item(0))},group_by_artist(){this.$root.$data.jsonSuccess=!0;let t=this.$root.$data.importedJSON;this.$root.$data.artist_list=ot().mapValues(ot().groupBy(t,"artistName"),(t=>t.map((t=>ot().omit(t,"artistName"))))),this.sumPlayTime()},sumPlayTime(){let t=this.$root.$data.artist_list,e=[];for(var s in t){var a=0;for(var i in t[s])a+=parseInt(t[s][i].msPlayed,10);a/=6e4;let o={artistName:s,minutesListened:a};e.push(o)}e.sort(((t,e)=>e.minutesListened-t.minutesListened));let o={};for(let r=0;r<20;r++)this.$root.$data.top_artists.push(e[r].artistName),o[e[r].artistName]=e[r].minutesListened.toFixed(2),this.$root.$data.top_artists_keys=o;this.jsonToCSV()},jsonToCSV(){let t=this.$root.$data.importedJSON,e=[],s=this.$root.$data.top_artists;for(let c in t)s.includes(t[c].artistName)&&e.push(t[c]);let a=this.groupByWeek(e),i=[];for(let c in a){let t=0,e=a[c];for(let s in e){let a=s;"week"!=a&&(t+=e[a])}i.push(t)}let o=0;for(let c in i)i[c]>o&&(o=i[c]);this.$root.$data.week_max=o;const r=(t,e)=>null===e?"":e,n=Object.keys(a[0]),l=[n.join(","),...a.map((t=>n.map((e=>JSON.stringify(t[e],r))).join(",")))].join("\r\n");this.$root.$data.csv=l,this.createStreamgraph()},groupByWeek(t){let e=ot().groupBy(t,(t=>nt()(t["endTime"],"YYYY-MM-DD HH:mm").startOf("isoWeek"))),s=[],a=[],i=[];for(let d in e)for(var o in a=e[d],i=ot().mapValues(ot().groupBy(a,"artistName"),(t=>t.map((t=>ot().omit(t,"artistName"))))),i){var r=0;for(var n in i[o])r+=parseInt(i[o][n].msPlayed,10);r/=6e4;let t={};t[o]=r,t["week"]=d,s.push(t)}let l=ot().mapValues(ot().groupBy(s,"week"),(t=>t.map((t=>ot().omit(t,"week"))))),c=this.parseWeek(l);return c},parseWeek(t){let e=[],s=[],a=this.$root.$data.top_artists,i=t;for(let r in i){let t=i[r];for(let e in a){let s=a[e];var o=t.some((t=>s in t));if(!o){let e={};e[s]=0,t.push(e)}}}for(let r in i){s={};let t=i[r];for(let e in t){let a=t[e],i=Object.keys(a)[0];s[i]=a[i]}s["week"]=r,e.push(s)}return e},createStreamgraph(){let t=.7*this.$root.$data.week_max,e=this.$root.$data.csv,s=this.$root.$data.top_artists_keys,a=window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth;var i={top:20,right:a/10,bottom:30,left:a/10},o=a-i.left-i.right,r=500-i.top-i.bottom;this.$root.$data.new_width=o;var n=lt.Ys("#streamgraph").append("svg").attr("width",o+i.left+i.right).attr("height",r+i.top+i.bottom+100).append("g").attr("transform","translate("+i.left+","+i.top+")");let l=lt.ueB(e);var c=l.columns;c.pop();var d=lt.Xf().domain([new Date(l[0].week),new Date(l[l.length-1].week)]).range([0,o]);n.append("g").attr("transform","translate(0,"+r+")").call(lt.LLu(d).ticks(l.length-1)).call((t=>t.select(".domain").style("stroke","black"))).call((t=>t.selectAll(".tick line").style("stroke","black"))).call((t=>t.selectAll(".tick text").style("fill","black").style("font-family","ibm-plex-mono"))).call((t=>t.selectAll("text").attr("transform",(function(t){return"rotate(45 -15 14)"}))));n.append("text").attr("text-anchor","end").attr("x",o).attr("y",r-30);var p=lt.BYU().domain([-t,t]).range([r,0]),u=lt.PKp().domain(c).range(["#aadedd","#dc523f","#de8735","#4886af","#92a488","#4d5860","#662d91","#00a99d","#ff7bac","#d4145a","#236a87","#9e005d","#29abe2","#99815f","#8cc63f","#ffd3a0","#bdc6bc","#d9e021","#c2a089","#fdfdb8"]),m=lt.knu().offset(lt.KuJ).keys(c)(l),h=n.append("text").attr("class","tooltip").attr("x",0).attr("y",0).style("opacity",0).style("font-size",17).style("color","#000000").style("fill","#000000").style("font-weight","bolder").style("z-index",1e4).style("mix-blend-mode","difference"),g=n.append("text").attr("class","tooltip").attr("x",0).attr("y",20).style("opacity",0).style("font-size",17).style("color","#000000").style("fill","#000000").style("z-index",1e4),f=function(){h.style("opacity",1),g.style("opacity",1),lt.td_(".myArea").transition().duration(250).style("opacity",.2),lt.Ys(this).transition().duration(151).style("opacity",1)},_="",v=0,j=function(t){_=t.srcElement.__data__.key,h.text(_),v=s[_];var e=Math.floor(parseInt(v)/60),a=parseInt(v)%60;g.text(e+" hours and "+a+" minutes listened")},y=function(){h.style("opacity",0),g.style("opacity",0),lt.td_(".myArea").transition().duration(151).style("opacity",1).style("stroke","none")},b=lt.SOn().x((function(t){return d(new Date(t.data.week))})).y0((function(t){return p(t[0])})).y1((function(t){return p(t[1])})).curve(lt.YY7);function k(){n.selectAll("mylayers").data(m).transition().duration(1e3).append("path")}n.selectAll("mylayers").data(m).enter().append("path").attr("class","myArea").style("fill",(function(t){return u(t.key)})).attr("d",b).on("mouseover",f).on("mousemove",j).on("mouseleave",y),lt.Ys("#buttonXlim").on("click",k),this.import_pending=!1}},computed:{top_artists_keys(){return this.$root.$data.top_artists_keys},top_artists(){return this.$root.$data.top_artists},files(){return this.$root.$data.files_imported},cardinal_switch1(){return this.cardinal_switch},step_switch1(){return this.step_switch},point_switch1(){return this.point_switch}}},dt=ct,pt=(0,l.Z)(dt,st,at,!1,null,"6c5fac13",null),ut=pt.exports,mt={name:"SpotifyStreamgraph",components:{FileImport:ut}},ht=mt,gt=(0,l.Z)(ht,tt,et,!1,null,null,null),ft=gt.exports;a.ZP.use(p.Z);const _t=[{path:"/",name:"Home",component:_},{path:"/blog",name:"Blog",component:A},{path:"/projects",name:"Projects",component:w},{path:"/about",name:"About",component:Z},{path:"/design",name:"Design",component:z},{path:"*",redirect:"/"},{path:"/projects/spotify_streamgraph",name:"SpotifyStreamgraph",component:ft},{path:"/projects/:id",component:q},{path:"/blog/:id",component:q},{path:"/design/:id",component:Q}],vt=new p.Z({mode:"hash",base:"/",scrollBehavior(t,e,s){return{x:0,y:0}},routes:_t});var jt=vt,yt=[],bt=JSON.parse('[{"name":"Collages from DSGN110","description":"","images":["collage_blue.jpg","collage_yellow.jpg","collage_orange.jpg"],"date":"10/01/2019"},{"name":"Kiev Photos 2020-2021","description":"Color and B&W film mostly from the summer of 2020.","images":["kiev4_1.jpg","kiev4_3.jpg","kiev4_2.jpg","kiev4_5.jpg","kiev4_4.jpg","kiev3115.jpg","kiev3112.jpg","kiev3110.jpg","kiev3122.jpg","kiev3125.jpg"],"date":"08/19/2021"},{"name":"Color Assignments from DSGN110","description":"","images":["color2.jpg","color1.jpg"],"date":"11/01/2019"},{"name":"Parents Linocut","description":"Christmas present Jacob and I made for our parents. I drew the design and then we both carved and printed it.","images":["lino_parents.jpg"],"date":"12/25/2020"},{"name":"Final for DSGN110","description":"","images":["dsgn_final.jpg"],"date":"12/15/2019"},{"name":"Highschool Art","description":"","images":["blue_man.jpg","print1.jpg","print2.jpg"],"date":"07/01/2017"},{"name":"Highschool Photos","description":"","images":["photo1.jpg","photo2.jpg"],"date":"01/01/2017"}]'),kt=[];a.ZP.config.productionTip=!1;let wt={projects:yt.sort((function(t,e){return new Date(e.date)-new Date(t.date)})),designs:bt.sort((function(t,e){return new Date(e.date)-new Date(t.date)})),posts:kt.sort((function(t,e){return new Date(e.date)-new Date(t.date)})),importedJSON:[],artist_list:[],csv:"",top_artists:[],top_artists_keys:{},week_max:0,new_width:0,files_imported:[]};new a.ZP({router:jt,data:wt,render:t=>t(d)}).$mount("#app")},6700:function(t,e,s){var a={"./af":2496,"./af.js":2496,"./ar":186,"./ar-dz":6881,"./ar-dz.js":6881,"./ar-kw":6265,"./ar-kw.js":6265,"./ar-ly":451,"./ar-ly.js":451,"./ar-ma":8625,"./ar-ma.js":8625,"./ar-sa":8819,"./ar-sa.js":8819,"./ar-tn":7092,"./ar-tn.js":7092,"./ar.js":186,"./az":4421,"./az.js":4421,"./be":7067,"./be.js":7067,"./bg":3871,"./bg.js":3871,"./bm":4242,"./bm.js":4242,"./bn":8189,"./bn-bd":2507,"./bn-bd.js":2507,"./bn.js":8189,"./bo":5799,"./bo.js":5799,"./br":7803,"./br.js":7803,"./bs":8434,"./bs.js":8434,"./ca":4581,"./ca.js":4581,"./cs":8004,"./cs.js":8004,"./cv":4464,"./cv.js":4464,"./cy":163,"./cy.js":163,"./da":803,"./da.js":803,"./de":233,"./de-at":7607,"./de-at.js":7607,"./de-ch":6777,"./de-ch.js":6777,"./de.js":233,"./dv":6969,"./dv.js":6969,"./el":9618,"./el.js":9618,"./en-au":9245,"./en-au.js":9245,"./en-ca":5036,"./en-ca.js":5036,"./en-gb":1438,"./en-gb.js":1438,"./en-ie":6053,"./en-ie.js":6053,"./en-il":134,"./en-il.js":134,"./en-in":847,"./en-in.js":847,"./en-nz":1363,"./en-nz.js":1363,"./en-sg":9022,"./en-sg.js":9022,"./eo":8990,"./eo.js":8990,"./es":9817,"./es-do":8155,"./es-do.js":8155,"./es-mx":952,"./es-mx.js":952,"./es-us":9358,"./es-us.js":9358,"./es.js":9817,"./et":5396,"./et.js":5396,"./eu":4338,"./eu.js":4338,"./fa":7030,"./fa.js":7030,"./fi":2292,"./fi.js":2292,"./fil":3578,"./fil.js":3578,"./fo":8900,"./fo.js":8900,"./fr":6067,"./fr-ca":8362,"./fr-ca.js":8362,"./fr-ch":9404,"./fr-ch.js":9404,"./fr.js":6067,"./fy":6742,"./fy.js":6742,"./ga":8152,"./ga.js":8152,"./gd":6920,"./gd.js":6920,"./gl":7234,"./gl.js":7234,"./gom-deva":2759,"./gom-deva.js":2759,"./gom-latn":7054,"./gom-latn.js":7054,"./gu":8166,"./gu.js":8166,"./he":8927,"./he.js":8927,"./hi":2153,"./hi.js":2153,"./hr":9329,"./hr.js":9329,"./hu":2782,"./hu.js":2782,"./hy-am":5023,"./hy-am.js":5023,"./id":6655,"./id.js":6655,"./is":0,"./is.js":0,"./it":5107,"./it-ch":3045,"./it-ch.js":3045,"./it.js":5107,"./ja":9175,"./ja.js":9175,"./jv":4853,"./jv.js":4853,"./ka":8684,"./ka.js":8684,"./kk":312,"./kk.js":312,"./km":1271,"./km.js":1271,"./kn":7256,"./kn.js":7256,"./ko":4833,"./ko.js":4833,"./ku":5258,"./ku.js":5258,"./ky":3430,"./ky.js":3430,"./lb":7665,"./lb.js":7665,"./lo":2238,"./lo.js":2238,"./lt":920,"./lt.js":920,"./lv":8769,"./lv.js":8769,"./me":818,"./me.js":818,"./mi":5722,"./mi.js":5722,"./mk":7117,"./mk.js":7117,"./ml":9904,"./ml.js":9904,"./mn":8590,"./mn.js":8590,"./mr":9544,"./mr.js":9544,"./ms":176,"./ms-my":8850,"./ms-my.js":8850,"./ms.js":176,"./mt":291,"./mt.js":291,"./my":4830,"./my.js":4830,"./nb":4893,"./nb.js":4893,"./ne":8782,"./ne.js":8782,"./nl":8337,"./nl-be":2297,"./nl-be.js":2297,"./nl.js":8337,"./nn":8272,"./nn.js":8272,"./oc-lnc":277,"./oc-lnc.js":277,"./pa-in":6198,"./pa-in.js":6198,"./pl":5231,"./pl.js":5231,"./pt":3141,"./pt-br":9626,"./pt-br.js":9626,"./pt.js":3141,"./ro":2797,"./ro.js":2797,"./ru":48,"./ru.js":48,"./sd":23,"./sd.js":23,"./se":7339,"./se.js":7339,"./si":2851,"./si.js":2851,"./sk":9764,"./sk.js":9764,"./sl":646,"./sl.js":646,"./sq":1751,"./sq.js":1751,"./sr":9016,"./sr-cyrl":1368,"./sr-cyrl.js":1368,"./sr.js":9016,"./ss":1943,"./ss.js":1943,"./sv":5095,"./sv.js":5095,"./sw":6014,"./sw.js":6014,"./ta":1571,"./ta.js":1571,"./te":4819,"./te.js":4819,"./tet":8646,"./tet.js":8646,"./tg":8641,"./tg.js":8641,"./th":5714,"./th.js":5714,"./tk":7082,"./tk.js":7082,"./tl-ph":9830,"./tl-ph.js":9830,"./tlh":8757,"./tlh.js":8757,"./tr":3571,"./tr.js":3571,"./tzl":6785,"./tzl.js":6785,"./tzm":4924,"./tzm-latn":9126,"./tzm-latn.js":9126,"./tzm.js":4924,"./ug-cn":2134,"./ug-cn.js":2134,"./uk":3350,"./uk.js":3350,"./ur":3397,"./ur.js":3397,"./uz":8556,"./uz-latn":3562,"./uz-latn.js":3562,"./uz.js":8556,"./vi":7751,"./vi.js":7751,"./x-pseudo":1505,"./x-pseudo.js":1505,"./yo":5943,"./yo.js":5943,"./zh-cn":4186,"./zh-cn.js":4186,"./zh-hk":2243,"./zh-hk.js":2243,"./zh-mo":5437,"./zh-mo.js":5437,"./zh-tw":3843,"./zh-tw.js":3843};function i(t){var e=o(t);return s(e)}function o(t){if(!s.o(a,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return a[t]}i.keys=function(){return Object.keys(a)},i.resolve=o,t.exports=i,i.id=6700}},e={};function s(a){var i=e[a];if(void 0!==i)return i.exports;var o=e[a]={id:a,loaded:!1,exports:{}};return t[a].call(o.exports,o,o.exports,s),o.loaded=!0,o.exports}s.m=t,function(){var t=[];s.O=function(e,a,i,o){if(!a){var r=1/0;for(d=0;d<t.length;d++){a=t[d][0],i=t[d][1],o=t[d][2];for(var n=!0,l=0;l<a.length;l++)(!1&o||r>=o)&&Object.keys(s.O).every((function(t){return s.O[t](a[l])}))?a.splice(l--,1):(n=!1,o<r&&(r=o));if(n){t.splice(d--,1);var c=i();void 0!==c&&(e=c)}}return e}o=o||0;for(var d=t.length;d>0&&t[d-1][2]>o;d--)t[d]=t[d-1];t[d]=[a,i,o]}}(),function(){s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,{a:e}),e}}(),function(){s.d=function(t,e){for(var a in e)s.o(e,a)&&!s.o(t,a)&&Object.defineProperty(t,a,{enumerable:!0,get:e[a]})}}(),function(){s.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){s.nmd=function(t){return t.paths=[],t.children||(t.children=[]),t}}(),function(){var t={143:0};s.O.j=function(e){return 0===t[e]};var e=function(e,a){var i,o,r=a[0],n=a[1],l=a[2],c=0;if(r.some((function(e){return 0!==t[e]}))){for(i in n)s.o(n,i)&&(s.m[i]=n[i]);if(l)var d=l(s)}for(e&&e(a);c<r.length;c++)o=r[c],s.o(t,o)&&t[o]&&t[o][0](),t[o]=0;return s.O(d)},a=self["webpackChunknewweb"]=self["webpackChunknewweb"]||[];a.forEach(e.bind(null,0)),a.push=e.bind(null,a.push.bind(a))}();var a=s.O(void 0,[998],(function(){return s(4522)}));a=s.O(a)})();
//# sourceMappingURL=app.61a775bd.js.map