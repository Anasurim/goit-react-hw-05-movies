"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[608],{608:function(e,t,n){n.r(t),n.d(t,{default:function(){return h}});var r=n(861),c=n(439),a=n(757),s=n.n(a),o=n(791),u=n(689),i=n(87),f=n(748),p=n(691),d=n(184),l=function(e){var t=e.movie,n=t.poster_path,r=t.title,c=t.release_date,a=t.overview,s=t.vote_average,o=Math.round(s/10*100).toString()+"%";return(0,d.jsxs)("div",{children:[(0,d.jsx)("div",{children:t&&n&&(0,d.jsx)("img",{src:"".concat("https://image.tmdb.org/t/p/w400","/").concat(n),alt:t.title})}),(0,d.jsx)("h3",{children:"".concat(r," (").concat(c&&c.slice(0,4),")")}),(0,d.jsxs)("p",{children:["Userscore: ",o]}),(0,d.jsx)("p",{children:a})]})},h=function(){var e=(0,o.useState)({}),t=(0,c.Z)(e,2),n=t[0],a=t[1],h=(0,o.useState)(!1),v=(0,c.Z)(h,2),b=v[0],x=v[1],m=(0,u.UO)();return(0,o.useEffect)((function(){var e=function(){var e=(0,r.Z)(s().mark((function e(){var t;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return x(!0),e.prev=1,e.next=4,(0,f.YJ)(m);case 4:t=e.sent,console.log(t),a(t),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),console.log(e.t0);case 12:return e.prev=12,x(!1),e.finish(12);case 15:case"end":return e.stop()}}),e,null,[[1,9,12,15]])})));return function(){return e.apply(this,arguments)}}();e()}),[m]),(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(l,{movie:n}),b&&(0,d.jsx)(p.s5,{strokeColor:"grey",strokeWidth:"5",animationDuration:"0.75",width:"96",visible:!0}),(0,d.jsxs)("ul",{children:[(0,d.jsx)("li",{children:(0,d.jsx)(i.rU,{to:"cast",children:"Cast"})}),(0,d.jsx)("li",{children:(0,d.jsx)(i.rU,{to:"reviews",children:"Review"})})]}),(0,d.jsx)(o.Suspense,{fallback:(0,d.jsx)("div",{children:"Loading subpage..."}),children:(0,d.jsx)(u.j3,{})})]})}},748:function(e,t,n){n.d(t,{XT:function(){return s},YJ:function(){return u},aA:function(){return o},q5:function(){return f},yo:function(){return i}});var r=n(861),c=n(757),a=n.n(c),s=function(){var e=(0,r.Z)(a().mark((function e(){var t,n,r;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"4c6e55add2f00844e9f979bd7b0fac7c",t="https://api.themoviedb.org/3/trending/movie/day?api_key=".concat("4c6e55add2f00844e9f979bd7b0fac7c"),e.prev=2,e.next=5,fetch(t);case 5:return n=e.sent,e.next=8,n.json();case 8:return r=e.sent,e.abrupt("return",r);case 12:e.prev=12,e.t0=e.catch(2),console.log(e.t0);case 15:case"end":return e.stop()}}),e,null,[[2,12]])})));return function(){return e.apply(this,arguments)}}(),o=function(){var e=(0,r.Z)(a().mark((function e(t){var n,r,c;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"4c6e55add2f00844e9f979bd7b0fac7c",n="https://api.themoviedb.org/3/search/movie?api_key=".concat("4c6e55add2f00844e9f979bd7b0fac7c","&query=").concat(t),e.prev=2,e.next=5,fetch(n);case 5:return r=e.sent,e.next=8,r.json();case 8:return c=e.sent,e.abrupt("return",c);case 12:e.prev=12,e.t0=e.catch(2),console.log(e.t0);case 15:case"end":return e.stop()}}),e,null,[[2,12]])})));return function(t){return e.apply(this,arguments)}}(),u=function(){var e=(0,r.Z)(a().mark((function e(t){var n,r,c,s;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.id,"4c6e55add2f00844e9f979bd7b0fac7c",r="https://api.themoviedb.org/3/movie/".concat(n,"?api_key=").concat("4c6e55add2f00844e9f979bd7b0fac7c"),e.prev=3,e.next=6,fetch(r);case 6:return c=e.sent,e.next=9,c.json();case 9:return s=e.sent,e.abrupt("return",s);case 13:e.prev=13,e.t0=e.catch(3),console.log(e.t0);case 16:case"end":return e.stop()}}),e,null,[[3,13]])})));return function(t){return e.apply(this,arguments)}}(),i=function(){var e=(0,r.Z)(a().mark((function e(t){var n,r,c,s;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.id,"4c6e55add2f00844e9f979bd7b0fac7c",r="https://api.themoviedb.org/3/movie/".concat(n,"/credits?api_key=").concat("4c6e55add2f00844e9f979bd7b0fac7c"),e.prev=3,e.next=6,fetch(r);case 6:return c=e.sent,e.next=9,c.json();case 9:return s=e.sent,e.abrupt("return",s.cast);case 13:e.prev=13,e.t0=e.catch(3),console.log(e.t0);case 16:case"end":return e.stop()}}),e,null,[[3,13]])})));return function(t){return e.apply(this,arguments)}}(),f=function(){var e=(0,r.Z)(a().mark((function e(t){var n,r,c,s;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.id,"4c6e55add2f00844e9f979bd7b0fac7c",r="https://api.themoviedb.org/3/movie/".concat(n,"/reviews?api_key=").concat("4c6e55add2f00844e9f979bd7b0fac7c"),e.prev=3,e.next=6,fetch(r);case 6:return c=e.sent,e.next=9,c.json();case 9:return s=e.sent,e.abrupt("return",s.results);case 13:e.prev=13,e.t0=e.catch(3),console.log(e.t0);case 16:case"end":return e.stop()}}),e,null,[[3,13]])})));return function(t){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=608.1dbac7d8.chunk.js.map