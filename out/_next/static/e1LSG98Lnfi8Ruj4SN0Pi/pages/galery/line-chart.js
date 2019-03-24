(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{259:function(e,t,a){__NEXT_REGISTER_PAGE("/galery/line-chart",function(){return e.exports=a(260),{page:e.exports.default}})},260:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=(a(2),a(3)),o=a.n(i),c=a(4),l=a(5),h=a(54);t.default=function(){return r.a.createElement("div",null,r.a.createElement(o.a,null,r.a.createElement("title",null,"Open Source Chart Library : Gk-Chart - Line Chart"),r.a.createElement("meta",{name:"keywords",content:"Gk-Chart, gkchart, gk-chart, chart library, charts, javascript chart library, javascript chart, javascript library, line chart, bar cahrt, pie chart, meter cahrt, doughnut chart, bar cahrt comparision, line chart comparision"}),r.a.createElement("meta",{name:"author",content:"Ganpat Kakar"}),r.a.createElement("meta",{name:"og:Open Source Chart Library : Gk-Chart - Line Chart",property:"og:Open Source Chart Library : Gk-Chart - Line Chart",content:"Open Source Chart Library : Gk-Chart - Line Chart"}),r.a.createElement("meta",{name:"description",content:"Gk-Chart is an open source chart library provides charts as line chart, bar chart , pie chart, doughnut chart, meter chart, line chart comparison, bar chart comparison, bar and line chart comparison and 20 plus more charts with the business data presentation in chart view, integrate is easy with javascript"})),r.a.createElement(c.a,null,r.a.createElement(l.a,null,r.a.createElement("h1",null,"JavaScript Line Chart & Graph"),r.a.createElement("p",null,"Line Chart is consrtucted by the two or more points connecting. For example with Line chart, it is easy to compare year's, month wise progress and income. Below is an example of Line chart with HTML and JavaScript source code for intergration. Download our chart library and and use the provided source code. Print the generated chart functionality is provide for the user to print the chart for any hard copy presentation."),r.a.createElement(h.a,null))))}},54:function(e,t,a){"use strict";a.d(t,"a",function(){return m});var n=a(0),r=a.n(n),i=a(302),o=a(303);function c(e){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function l(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function h(e){return(h=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function u(e,t){return(u=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function p(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function s(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}var m=function(e){function t(){var e,a,n,r;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var i=arguments.length,o=new Array(i),l=0;l<i;l++)o[l]=arguments[l];return n=this,r=(e=h(t)).call.apply(e,[this].concat(o)),a=!r||"object"!==c(r)&&"function"!=typeof r?p(n):r,s(p(p(a)),"componentDidMount",function(){console.log("componentDidMount:Chart"),a.initialize()}),s(p(p(a)),"initialize",function(){new GKChart({id:"chartline",data:{config:{title:"Line Chart",chartType:"line",printEnable:!0},data:[{chartColor:"#00d554",fill:!1,dataLabel:"Data Set 1",datapoints:[{label:"January",y:40},{label:"Feburary",y:160},{label:"March",y:80},{label:"April",y:200},{label:"May",y:140},{label:"June",y:240},{label:"July",y:120}]}]}})}),a}var a,n,m;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&u(e,t)}(t,r.a.Component),a=t,(n=[{key:"render",value:function(){return r.a.createElement("div",{className:""},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-sm-12"},r.a.createElement("div",{className:"chartDiv"},r.a.createElement("div",{id:"chartline",style:{height:"350px",width:"100%"}})))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-sm-12"},r.a.createElement(i.a,{defaultActiveKey:1,id:"example-code"},r.a.createElement(o.a,{eventKey:1,title:"HTML"},r.a.createElement("pre",null,r.a.createElement("xmp",null,'<!DOCTYPE html>\n<html lang="en">\n  <head>\n    <meta charset="UTF-8">\n    <meta name="viewport" content="width=device-width, initial-scale=1.0">\n    <meta http-equiv="X-UA-Compatible" content="ie=edge">\n    <title>Document</title>\n  </head>\n  <body>\n    <kakarChart id="chartline" style="height:350px; width:100%;"></kakarChart>\n    <script type="text/javascript" src="gk-chart.min.js"><\/script>\n  </body>\n</html>'))),r.a.createElement(o.a,{eventKey:2,title:"JavaScript"},r.a.createElement("pre",null,r.a.createElement("code",null,'\nlet datapoints = [\n  { label: "January", y: 40 },\n  { label: "Feburary", y: 180 },\n  { label: "March", y: 60 },\n  { label: "April", y: 300 },\n  { label: "May", y: 140 },\n  { label: "June", y: 240 }\n];\n\nvar chartline = {\n  config: {\n    title: "Line Chart",\n    chartType: "line",\n    printEnable: true\n  },\n  data: [\n    {\n      chartColor: "#00d554",\n      fill: false,\n      dataLabel: "Data Set 1",\n      datapoints: datapoints\n    }\n  ]\n};\n\nnew GKChart({\n  id: "chartline",\n  data: chartline\n}) ;\n\n')))))))}}])&&l(a.prototype,n),m&&l(a,m),t}()}},[[259,1,0]]]);