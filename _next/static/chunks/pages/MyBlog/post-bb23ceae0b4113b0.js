(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[380],{8012:function(t,n,e){"use strict";e.d(n,{D:function(){return l},g:function(){return o}});var r,i,c=e(168),a=e(3043),x=e.n(a),s=e(5675),l=x().div(r||(r=(0,c.Z)(["\n\txl:w-[1055px]\n\tmt-[16px]\n\trounded-[20px]\n\tpy-10\n\tsm:w-[300px]\n\tlg:w-[850px]\n\tmd:w-[350px]\n    flex\n\tflex-col\n\titems-center\n"]))),o=x()(s.default)(i||(i=(0,c.Z)(["\n\trounded-[5px]\n"])))},3983:function(t,n,e){"use strict";e.d(n,{mI:function(){return w},pN:function(){return N},Ql:function(){return m},uL:function(){return h},BL:function(){return g},Zb:function(){return v}});var r,i,c,a,x,s,l,o,u,p=e(168),d=e(3043),f=e.n(d),m=f().h1(r||(r=(0,p.Z)(["\n\ttext-[60px]\n\tfont-[700]\n\tleading-[71px]\n\ttracking-[-0.5px]\n"]))),h=f().h2(i||(i=(0,p.Z)(["\n\ttext-[48px]\n\tfont-[500]\n\tleading-[57px]\n    text-left\n\tsm:text-[40px] \n\tmb-5\n"]))),g=f().h3(c||(c=(0,p.Z)(["\n\ttext-[35px]\n\tsm:text-[25px]\n\tmd:text-[30px]\n\tfont-[500]\n\tleading-[40px]\n\ttracking-[0.25px]\n"]))),v=(f().h4(a||(a=(0,p.Z)(["\n\ttext-[24px]\n\tfont-[400]\n\tleading-[32px]\n\ttracking-[0rem]\n"]))),f().h5(x||(x=(0,p.Z)(["\n\ttext-[20px]\n\tfont-[500]\n\tleading-[24px]\n\ttracking-[0.15px]\n\ttext-left\t\n"]))),f().h2(s||(s=(0,p.Z)(["\n\ttext-[16px]\n\tfont-[500]\n\tleading-[20px]\n\ttracking-[0.15px]\n\t\t\n"])))),w=(f().h2(l||(l=(0,p.Z)(["\n\ttext-[14px]\n\tfont-[500]\n\tleading-[24px]\n\ttracking-[0.10px]\n\ttext-left\t\n"]))),f().p(o||(o=(0,p.Z)(["\n\ttext-[16px]\n\tfont-[400]\n\tleading-[28px]\n\ttracking-[0.43px]\n\ttext-left\n"])))),N=f().p(u||(u=(0,p.Z)(["\n\ttext-[14px]\n\tfont-[400]\n\tleading-[20px]\n\ttracking-[0.25px]\n\t\n"])))},1741:function(t,n,e){"use strict";e.r(n),e.d(n,{default:function(){return d}});var r=e(5861),i=e(7757),c=e.n(i),a=e(7294),x=e(3983),s=e(8012),l=e(1961),o=e(1163),u=e(6548),p=e(5893);function d(){var t=(0,o.useRouter)(),n=(0,a.useState)([]),e=n[0],i=n[1],d=t.query.slug;return(0,a.useEffect)((function(){function t(){return(t=(0,r.Z)(c().mark((function t(){var n,e,r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=(0,l.eI)(),t.next=3,n.getByUID("my-blog",String(d));case 3:t.t0=t.sent,e=[t.t0],r=e.map((function(t){return{id:t.id,title:t.data.title,description:t.data.description,content:t.data.content,image:t.data.image.url,richText:t.data.richText,date:t.last_publication_date.slice(0,10).split("-").reverse().join("/")}})),i(r),console.log(e);case 8:case"end":return t.stop()}}),t)})))).apply(this,arguments)}void 0!==d&&function(){t.apply(this,arguments)}()})),(0,p.jsx)("section",{className:"",children:e.map((function(t){return(0,p.jsxs)("div",{className:"flex flex-col items-center text-center text-white mx-5 my-5",children:[(0,p.jsx)(x.Ql,{className:"text-yellow sm:text-[30px] sm:leading-9 pb-2",children:t.title}),(0,p.jsx)("h2",{className:"pb-2",children:t.description}),(0,p.jsx)("p",{className:"text-[10px] pb-5 ",children:"Postado em ".concat(t.date)}),(0,p.jsx)("div",{className:"sm:w-[20rem] md:w-[40rem]",children:(0,p.jsx)(s.g,{src:t.image,alt:t.title,height:415,width:800,quality:100,className:"opacity-20 "})}),(0,p.jsx)("div",{className:" text-white text-left my-5 mx-20 w-[50rem] sm:w-[20rem] md:w-[40rem]",children:(0,p.jsx)(u.v,{field:t.richText,components:{heading1:function(t){var n=t.children;return(0,p.jsx)("h1",{className:"mt-4 text-yellow text-[20px]",children:n})},heading2:function(t){var n=t.children;return(0,p.jsx)("h1",{className:"my-4 font-bold text-[15px]",children:n})},heading3:function(t){var n=t.children;return(0,p.jsx)("h1",{className:"text-yellow font-bold text-[15px] mt-4",children:n})},paragraph:function(t){var n=t.children;return(0,p.jsx)("p",{className:"paragraph ",children:n})},list:function(t){var n=t.children;return(0,p.jsx)("ul",{className:" ",children:n})}}})})]},t.id)}))})}},3338:function(t,n,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/MyBlog/post",function(){return e(1741)}])},5861:function(t,n,e){"use strict";function r(t,n,e,r,i,c,a){try{var x=t[c](a),s=x.value}catch(l){return void e(l)}x.done?n(s):Promise.resolve(s).then(r,i)}function i(t){return function(){var n=this,e=arguments;return new Promise((function(i,c){var a=t.apply(n,e);function x(t){r(a,i,c,x,s,"next",t)}function s(t){r(a,i,c,x,s,"throw",t)}x(void 0)}))}}e.d(n,{Z:function(){return i}})}},function(t){t.O(0,[394,774,888,179],(function(){return n=3338,t(t.s=n);var n}));var n=t.O();_N_E=n}]);