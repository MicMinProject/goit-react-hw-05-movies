"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[708],{6708:function(e,t,n){n.r(t);var r=n(885),i=n(2791),a=n(501),c=n(6871),o=n(4569),u=n.n(o),l=n(4353),s=n(1163);t.default=function(){var e=(0,i.useState)([]),t=(0,r.Z)(e,2),n=t[0],o=t[1],d=(0,a.lr)(),h=(0,r.Z)(d,2),f=h[0],g=h[1],p=(0,c.UO)();return(0,s.tZ)(l.Z,{children:void 0===p.movieId?(0,s.BX)(s.HY,{children:[(0,s.BX)("form",{css:{marginBottom:"30px"},onSubmit:function(e){e.preventDefault(),u().get("https://api.themoviedb.org/3/search/movie?api_key=".concat("68e1fd0d7aa4e116327801ed4f6bf747","&language=en-US&query=").concat(f.get("query"),"&page=1&include_adult=false")).then((function(e){o(e.data.results)})).catch((function(e){return console.log(e)})),localStorage.setItem("query",JSON.stringify(f.get("query")))},children:[(0,s.tZ)("input",{placeholder:"Enter movie name",name:"search",onChange:function(e){var t=e.target.value;g({query:t})},value:f.get("query")||"",type:"text"}),(0,s.tZ)("button",{type:"submit",children:"Search"})]}),null!==n?(0,s.tZ)("ul",{css:{listStyleType:"none"},children:n.map((function(e){return(0,s.tZ)("li",{children:(0,s.tZ)(a.OL,{to:"".concat(e.id),children:e.title})},e.id)}))}):(0,s.tZ)("p",{children:"No titles found"})]}):(0,s.tZ)(c.j3,{})})}}}]);
//# sourceMappingURL=708.a9e47556.chunk.js.map