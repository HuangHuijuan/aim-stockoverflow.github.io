webpackJsonp([0],{0:function(e,t,n){try{(function(){"use strict";function e(e){return e&&e.__esModule?e:{"default":e}}var t=n(1),r=e(t),o=n(30),u=n(163),i=n(226),l=e(i),a=n(676),c=e(a),f=n(679),s=e(f),p=n(680),y=e(p),d=[{path:"/",component:l["default"],childRoutes:[{path:"/home",component:c["default"]},{path:"/test1",component:s["default"]},{path:"/test2",component:c["default"]},{path:"/about",component:s["default"]}]},{path:"*",component:y["default"]}];(0,o.render)(r["default"].createElement(u.Router,{history:u.browserHistory,routes:d}),document.getElementById("root"))}).call(this)}finally{}},226:function(e,t,n){try{(function(){"use strict";function e(e){return e&&e.__esModule?e:{"default":e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),l=n(1),a=e(l),c=n(227),f=n(163),s=n(676),p=e(s),y=n(678),d=c.Menu.Item,b=function(e){function t(){return r(this,t),o(this,Object.getPrototypeOf(t).apply(this,arguments))}return u(t,e),i(t,[{key:"render",value:function(){return a["default"].createElement(c.Menu,{mode:"horizontal"},y.map(function(e,t){return a["default"].createElement(d,{key:t},a["default"].createElement(f.Link,{to:e.link},e.text))}))}}]),t}(l.Component),h=function(e){function t(){return r(this,t),o(this,Object.getPrototypeOf(t).apply(this,arguments))}return u(t,e),i(t,[{key:"render",value:function(){return a["default"].createElement("section",null,a["default"].createElement(b,null),this.props.children||a["default"].createElement(p["default"],null))}}]),t}(l.Component);t["default"]=h}).call(this)}finally{}},676:function(e,t,n){try{(function(){"use strict";function e(e){return e&&e.__esModule?e:{"default":e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),l=n(1),a=e(l),c=n(227),f=n(677),s=function(e){function t(){return r(this,t),o(this,Object.getPrototypeOf(t).apply(this,arguments))}return u(t,e),i(t,[{key:"render",value:function(){return a["default"].createElement("section",null,a["default"].createElement("div",{className:"g-home-content"},a["default"].createElement("div",{className:"m-home-slide"},a["default"].createElement(c.Carousel,{autoplay:!0},f.map(function(e,t){return a["default"].createElement("div",{key:t},a["default"].createElement("img",{src:e.src,alt:e.alt,style:{width:"400px"}}))})))))}}]),t}(l.Component);t["default"]=s}).call(this)}finally{}},677:function(e,t){e.exports=[{title:"首页轮播图1",alt:"eg-1",id:1,src:"/static/images/slide_1.png"},{title:"首页轮播图2",alt:"eg-2",id:2,src:"/static/images/slide_2.png"}]},678:function(e,t){e.exports=[{text:"首页",id:1,link:"/home"},{text:"测试1",id:2,link:"/test1"},{text:"测试2",id:3,link:"/test2"},{text:"关于我们",id:4,link:"/about"}]},679:function(e,t,n){try{(function(){"use strict";function e(e){return e&&e.__esModule?e:{"default":e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),l=n(1),a=e(l),c=(n(163),function(e){function t(){return r(this,t),o(this,Object.getPrototypeOf(t).apply(this,arguments))}return u(t,e),i(t,[{key:"render",value:function(){return a["default"].createElement("section",null,"about")}}]),t}(l.Component));t["default"]=c}).call(this)}finally{}},680:function(e,t,n){try{(function(){"use strict"}).call(this)}finally{}}});