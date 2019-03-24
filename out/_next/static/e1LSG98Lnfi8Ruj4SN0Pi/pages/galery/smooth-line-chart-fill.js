(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{265:function(e,t,a){__NEXT_REGISTER_PAGE("/galery/smooth-line-chart-fill",function(){return e.exports=a(292),{page:e.exports.default}})},292:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(3),i=a.n(o),l=a(4),c=a(5),h=a(302),s=a(303);function p(e){return(p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function u(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function m(e){return(m=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function y(e,t){return(y=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function f(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function d(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}var b=function(e){function t(){var e,a,n,r;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var o=arguments.length,i=new Array(o),l=0;l<o;l++)i[l]=arguments[l];return n=this,r=(e=m(t)).call.apply(e,[this].concat(i)),a=!r||"object"!==p(r)&&"function"!=typeof r?f(n):r,d(f(f(a)),"componentDidMount",function(){console.log("componentDidMount:StepChart"),a.initialize()}),d(f(f(a)),"initialize",function(){new GKChart({id:"chartsmoothlinefill",data:{config:{title:"Smooth Line Chart",chartType:"spline",printEnable:!0},data:[{chartColor:"#00d554",fill:!0,dataLabel:"Data Set 1",datapoints:[{label:"January",y:40},{label:"Feburary",y:160},{label:"March",y:80},{label:"April",y:200},{label:"May",y:140},{label:"June",y:240},{label:"July",y:120}]}]}})}),a}var a,o,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&y(e,t)}(t,n["Component"]),a=t,(o=[{key:"render",value:function(){return r.a.createElement("div",{className:""},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-sm-12"},r.a.createElement("div",{className:"chartDiv"},r.a.createElement("kakarChart",{id:"chartsmoothlinefill",style:{height:"350px",width:"100%"}})))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-sm-12"},r.a.createElement(h.a,{defaultActiveKey:1,id:"example-code"},r.a.createElement(s.a,{eventKey:1,title:"HTML"},r.a.createElement("pre",null,r.a.createElement("xmp",null,'<!DOCTYPE html>\n<html lang="en">\n  <head>\n    <meta charset="UTF-8">\n    <meta name="viewport" content="width=device-width, initial-scale=1.0">\n    <meta http-equiv="X-UA-Compatible" content="ie=edge">\n    <title>Document</title>\n  </head>\n  <body>\n    <kakarChart id="chartsmoothlinefill" style="height:350px; width:100%;"></kakarChart>\n    <script type="text/javascript" src="gk_chart.js"><\/script>\n  </body>\n</html>'))),r.a.createElement(s.a,{eventKey:2,title:"JavaScript"},r.a.createElement("pre",null,r.a.createElement("code",null,'\n    let datapoints = [\n      {\n        label: "January",\n        y: 40\n      },\n      {\n        label: "Feburary",\n        y: 180\n      },\n      {\n        label: "March",\n        y: 60\n      },\n      {\n        label: "April",\n        y: 300\n      },\n      {\n        label: "May",\n        y: 140\n      },\n      {\n        label: "June",\n        y: 240\n      }\n    ];\n\n    var chartsmoothlinefill = {\n      "config": {\n        "title": "Smooth Line Chart",\n        "chartType": "spline"\n      },\n      "data": [{\n        "chartColor": "#00d554",\n        "fill": true,\n        "dataLabel" : "Data Set 1",\n        "datapoints": datapoints\n      }]\n    };\n\n    new GKChart({id: "chartsmoothlinefill", data: chartsmoothlinefill}) ;\n\n')))))))}}])&&u(a.prototype,o),i&&u(a,i),t}();t.default=function(){return r.a.createElement("div",null,r.a.createElement(i.a,null,r.a.createElement("title",null,"Smooth Line Area Chart, Smooth Line Chart Fill, Spline Area Chart, Spline Chart Fill - GkCharts"),r.a.createElement("meta",{name:"keywords",content:"Gk-Chart, gkchart, gk-chart, chart library, charts, javascript chart library, javascript chart, javascript library, line chart, bar cahrt, pie chart, meter cahrt, doughnut chart, bar cahrt comparision, line chart comparision"}),r.a.createElement("meta",{name:"author",content:"Ganpat Kakar"}),r.a.createElement("meta",{name:"og:Open Source Chart Library : Gk-Chart - Line Area Chart, Line Chart Fill",property:"og:Open Source Chart Library : Gk-Chart - Line Area Chart, Line Chart Fill",content:"Open Source Chart Library : Gk-Chart - Line Area Chart, Line Chart Fill"}),r.a.createElement("meta",{name:"description",content:"Gk-Chart is an open source chart library provides charts as smooth line chart fill, smooth line area chart line area chart, bar chart , pie chart, line chart comparison, smooth line chart comparison and 20 plus more charts with the business data presentation in chart view, integrate is easy with javascript"})),r.a.createElement(l.a,null,r.a.createElement(c.a,null,r.a.createElement("h1",null,"JavaScript Smooth Line Fill and Smooth Line Area Chart & Graph"),r.a.createElement("p",null,"Smooth Line Area Chart is consrtucted by the two or more points connecting and providing a fill property in chart config data. For example with Smooth Line fill chart, it is easy to compare year's, month wise progress and income with and area of coverage. Below is an example of Smooth Line Area chart with HTML and JavaScript source code for intergration. Download our chart library and and use the provided source code. Print the generated chart functionality is provide for the user to print the chart for any hard copy presentation."),r.a.createElement(b,null))))}}},[[265,1,0]]]);