(this.webpackJsonpreact=this.webpackJsonpreact||[]).push([[0],{27:function(e,t,a){},49:function(e,t,a){"use strict";a.r(t);var c=a(0),n=a(2),r=a.n(n),s=a(20),i=a.n(s),o=a(3),l=a.n(o),d=a(10),u=a(4),m=a(5),h=a(7),v=a(6),j=(a(27),function(e){Object(h.a)(a,e);var t=Object(v.a)(a);function a(){var e;Object(u.a)(this,a);for(var c=arguments.length,n=new Array(c),r=0;r<c;r++)n[r]=arguments[r];return(e=t.call.apply(t,[this].concat(n))).handleFormSubmit=function(e){e.preventDefault()},e}return Object(m.a)(a,[{key:"render",value:function(){return Object(c.jsx)("form",{onSubmit:this.handleFormSubmit,children:Object(c.jsx)("div",{className:"form-row my-5",children:Object(c.jsx)("div",{className:"col-lg-12",children:Object(c.jsx)("input",{typle:"text",className:"form-control",placeholder:"Search a movie",onChange:this.props.searchMovieProp})})})})}}]),a}(r.a.Component)),b=function(e){return Object(c.jsx)("div",{className:"row",children:e.movies.map((function(t){return Object(c.jsx)("div",{className:"col-sm-6 col-md-4 col-lg-3",children:Object(c.jsxs)("div",{className:"card mb-4 shadow-sm",children:[Object(c.jsx)("img",{className:"card-img-top",src:"https://image.tmdb.org/t/p/w185_and_h278_multi_faces"+t.backdrop_path,alt:"Sample Movie"}),Object(c.jsxs)("div",{className:"card-body",children:[Object(c.jsx)("h5",{className:"card-title",children:t.original_title}),Object(c.jsx)("p",{className:"card-text",children:t.overview}),Object(c.jsxs)("div",{className:"d-flex justify-content-between align-items-center",children:[Object(c.jsx)("button",{onClick:function(a){return e.deleteMovieProp(t)},type:"button",className:"btn btn-md btn-outline-danger",children:"Delete"}),Object(c.jsx)("h2",{className:"m-0",children:Object(c.jsx)("span",{className:"badge bg-secondary",children:t.vote_average})})]})]})]})},t.id)}))})},f=a(11),p=a.n(f);Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_API_KEY:"a31f5c65ca60ed6c9818a95ef8987081",REACT_APP_SESSION_ID:"f3fe3de12c802d617a0316b07c7fd447d864c9a7"}).PORT;a(45).config();var O=function(e){Object(h.a)(a,e);var t=Object(v.a)(a);function a(){var e;Object(u.a)(this,a);for(var c=arguments.length,n=new Array(c),r=0;r<c;r++)n[r]=arguments[r];return(e=t.call.apply(t,[this].concat(n))).state={movies:[],searchQuery:""},e.deleteMovie=function(){var t=Object(d.a)(l.a.mark((function t(a){var c;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:p.a.post("https://api.themoviedb.org/3/list/7069679/remove_item?media_id=".concat(a.id,"&api_key=").concat("a31f5c65ca60ed6c9818a95ef8987081","&session_id=").concat("f3fe3de12c802d617a0316b07c7fd447d864c9a7")),c=e.state.movies.filter((function(e){return e.id!==a.id})),e.setState((function(e){return{movies:c}}));case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.searchMovie=function(t){e.setState({searchQuery:t.target.value})},e}return Object(m.a)(a,[{key:"componentDidMount",value:function(){var e=Object(d.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.a.get("https://api.themoviedb.org/3/list/7069679?api_key=".concat("a31f5c65ca60ed6c9818a95ef8987081","&language=en-US"));case 2:t=e.sent,console.log(t.data.items),this.setState({movies:t.data.items});case 5:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this,t=this.state.movies.filter((function(t){return-1!==t.original_title.toLocaleLowerCase().indexOf(e.state.searchQuery.toLocaleLowerCase())}));return Object(c.jsxs)("div",{className:"container",children:[Object(c.jsx)("div",{className:"row",children:Object(c.jsx)("div",{className:"col-lg-12",children:Object(c.jsx)(j,{searchMovieProp:this.searchMovie})})}),Object(c.jsx)(b,{movies:t,deleteMovieProp:this.deleteMovie})]})}}]),a}(r.a.Component);a(48);i.a.render(Object(c.jsx)(O,{}),document.getElementById("root"))}},[[49,1,2]]]);
//# sourceMappingURL=main.f9bb5bb8.chunk.js.map