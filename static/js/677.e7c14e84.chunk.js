"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[677],{902:function(e,n,t){t.d(n,{Bd:function(){return a},Fi:function(){return c},IQ:function(){return u},Jh:function(){return s},eh:function(){return i}});var r=t(294).Z.create({baseURL:"https://api.themoviedb.org/3",headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4NTdkOWMxMDk0Yjc4NDM2NzQyMmMyMWM4ZWYxY2ZkNyIsInN1YiI6IjYyMmI0NDU2YTU3OWY5MDA2ZjFkODdlZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.N4TfXVz9yGcHwKklWeQ0SwZYEdTmBnPAQrHKEZjuBRE"}}),a=function(){return r.get("trending/movie/day",{params:{language:"en-US"}})},i=function(e){return r.get("search/movie",{params:{query:"".concat(e),include_adult:!1,language:"en-US",page:1}})},c=function(e){return r.get("/movie/".concat(e),{params:{language:"en-US"}})},u=function(e){return r.get("/movie/".concat(e,"/credits"),{params:{language:"en-US"}})},s=function(e){return r.get("/movie/".concat(e,"/reviews"),{params:{language:"en-US"}})}},487:function(e,n,t){t.d(n,{Z:function(){return u}});var r=t(689),a=t(87),i="ListMovies_item__lLotJ",c=t(184),u=function(e){var n=e.movies,t=(0,r.TH)(),u=n.map((function(e){var n=e.id,r=e.title;return(0,c.jsx)("li",{className:i,children:(0,c.jsxs)(a.OL,{state:{from:t},to:"/movies/".concat(n),children:[" ",r]})},n)}));return(0,c.jsx)(c.Fragment,{children:(0,c.jsx)("ol",{children:u})})}},677:function(e,n,t){t.r(n);var r=t(861),a=t(439),i=t(757),c=t.n(i),u=t(791),s=t(902),o=t(487),l=t(898),f=t(184);n.default=function(){var e=(0,u.useState)([]),n=(0,a.Z)(e,2),t=n[0],i=n[1],d=(0,u.useState)(!1),m=(0,a.Z)(d,2),h=m[0],p=m[1],v=(0,u.useState)(null),g=(0,a.Z)(v,2),j=g[0],x=g[1];return(0,u.useEffect)((function(){var e=function(){var e=(0,r.Z)(c().mark((function e(){var n,t,r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,p(!0),e.next=4,(0,s.Bd)();case 4:t=e.sent,r=t.data,i(null!==r&&void 0!==r&&null!==(n=r.results)&&void 0!==n&&n.length?r.results:[]),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),x(e.t0.message);case 12:return e.prev=12,p(!1),e.finish(12);case 15:case"end":return e.stop()}}),e,null,[[0,9,12,15]])})));return function(){return e.apply(this,arguments)}}();e()}),[]),(0,f.jsxs)("div",{children:[(0,f.jsx)("h1",{children:"Home page"}),j&&(0,f.jsx)("p",{children:j}),h&&(0,f.jsx)(l.a,{}),(0,f.jsx)(o.Z,{movies:t})]})}}}]);
//# sourceMappingURL=677.e7c14e84.chunk.js.map