(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,function(e){e.exports=[{id:1,image:"/images/andy.jpg",clicked:!1},{id:2,image:"/images/angela.jpg",clicked:!1},{id:3,image:"/images/Darryl.jpg",clicked:!1},{id:4,image:"/images/dwight.jpg",clicked:!1},{id:5,image:"/images/holly.jpg",clicked:!1},{id:6,image:"/images/jim.jpg",clicked:!1},{id:7,image:"/images/kelly.jpg",clicked:!1},{id:8,image:"/images/michael.jpg",clicked:!1},{id:9,image:"/images/pam.jpg",clicked:!1},{id:10,image:"/images/Phyllis.jpg",clicked:!1},{id:11,image:"/images/ryan.jpg",clicked:!1},{id:12,image:"/images/stanley.jpg",clicked:!1}]},,,,,,,,function(e,t,a){e.exports=a(27)},,,,,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),i=a(4),r=a.n(i),l=a(5),o=a(6),d=a(8),m=a(7),s=a(9),u=(a(15),function(e){return c.a.createElement("div",{className:"card",value:e.id,onClick:function(){return e.handleClick(e.id)}},c.a.createElement("div",{className:"img-container"},c.a.createElement("img",{alt:e.name,src:e.image})))}),g=(a(17),function(e){return c.a.createElement("nav",null,c.a.createElement("ul",null,c.a.createElement("li",{className:"brand animated lightSpeedIn"},c.a.createElement("a",{href:"/clicky-game/"},e.title)),c.a.createElement("li",{id:"rw"},e.rightWrong),c.a.createElement("li",{id:"cur-sco"},"Current Score: ",e.score),c.a.createElement("li",{id:"top-sco"},"Top Score: ",e.topScore)))}),h=(a(19),function(e){return c.a.createElement("div",{className:"wrapper"},e.children)}),f=(a(21),function(e){return c.a.createElement("h1",{className:"title"},e.children)}),p=function(e){return c.a.createElement("div",{className:"container".concat(e.fluid?"-fluid":"")},e.children)},k=function(e){return c.a.createElement("div",{className:"row".concat(e.fluid?"-fluid":"")},e.children)},S=function(e){var t=e.size.split(" ").map(function(e){return"col-"+e}).join(" ");return c.a.createElement("div",{className:t},e.children)},E=a(2);a(23);var v=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,c=new Array(n),i=0;i<n;i++)c[i]=arguments[i];return(a=Object(d.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(c)))).state={friends:E,currentScore:0,topScore:0,rightWrong:"",clicked:[]},a.handleClick=function(e){-1===a.state.clicked.indexOf(e)?(a.handleIncrement(),a.setState({clicked:a.state.clicked.concat(e)})):a.handleReset()},a.handleIncrement=function(){var e=a.state.currentScore+1;a.setState({currentScore:e,rightWrong:""}),e>=a.state.topScore?a.setState({topScore:e}):12===e&&a.setState({rightWrong:"You Win..That's What She Said"}),a.handleShuffle()},a.handleReset=function(){a.setState({currentScore:0,topScore:a.state.topScore,rightWrong:"Start Over!",clicked:[]}),a.handleShuffle()},a.handleShuffle=function(){var e=function(e){for(var t=e.length-1;t>0;t--){var a=Math.floor(Math.random()*(t+1)),n=[e[a],e[t]];e[t]=n[0],e[a]=n[1]}return e}(E);a.setState({friends:e})},a}return Object(s.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this;return c.a.createElement(h,null,c.a.createElement(g,{title:"the office",score:this.state.currentScore,topScore:this.state.topScore,rightWrong:this.state.rightWrong}),c.a.createElement(f,null,"Clicky Game ",c.a.createElement("br",null),"If you click on the same character twice, you lose!"),c.a.createElement(p,null,c.a.createElement(k,null,this.state.friends.map(function(t){return c.a.createElement(S,{size:"md-3 sm-6"},c.a.createElement(u,{key:t.id,handleClick:e.handleClick,handleIncrement:e.handleIncrement,handleReset:e.handleReset,handleShuffle:e.handleShuffle,id:t.id,image:t.image}))}))))}}]),t}(n.Component);a(25);r.a.render(c.a.createElement(v,null),document.getElementById("root"))}],[[10,2,1]]]);
//# sourceMappingURL=main.a2f78213.chunk.js.map