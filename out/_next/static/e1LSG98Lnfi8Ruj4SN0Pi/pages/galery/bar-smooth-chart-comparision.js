(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{252:function(a,e,t){__NEXT_REGISTER_PAGE("/galery/bar-smooth-chart-comparision",function(){return a.exports=t(293),{page:a.exports.default}})},293:function(a,e,t){"use strict";t.r(e);var n=t(0),r=t.n(n),o=t(3),l=t.n(o),i=t(4),c=t(5),h=t(302),p=t(303);function s(a){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(a){return typeof a}:function(a){return a&&"function"==typeof Symbol&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a})(a)}function u(a,e){for(var t=0;t<e.length;t++){var n=e[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(a,n.key,n)}}function m(a){return(m=Object.setPrototypeOf?Object.getPrototypeOf:function(a){return a.__proto__||Object.getPrototypeOf(a)})(a)}function y(a,e){return(y=Object.setPrototypeOf||function(a,e){return a.__proto__=e,a})(a,e)}function d(a){if(void 0===a)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return a}function b(a,e,t){return e in a?Object.defineProperty(a,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):a[e]=t,a}var f=function(a){function e(){var a,t,n,r;!function(a,e){if(!(a instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e);for(var o=arguments.length,l=new Array(o),i=0;i<o;i++)l[i]=arguments[i];return n=this,r=(a=m(e)).call.apply(a,[this].concat(l)),t=!r||"object"!==s(r)&&"function"!=typeof r?d(n):r,b(d(d(t)),"componentDidMount",function(){console.log("componentDidMount:StepChart"),t.initialize()}),b(d(d(t)),"initialize",function(){var a=[{label:"January",y:40},{label:"Feburary",y:160},{label:"March",y:80},{label:"April",y:200},{label:"May",y:140},{label:"June",y:240},{label:"July",y:120},{label:"Aug",y:80}];new GKChart({id:"chartbar",data:{config:{title:"Bar Chart and Smooth Line Comparision",chartType:"column",printEnable:!0},data:[{chartColor:"#00d554",type:"bar",dataLabel:"Data set 1",datapoints:[{label:"January",y:20},{label:"Feb",y:120},{label:"Mar",y:210},{label:"Apr",y:246},{label:"May",y:96},{label:"Jun",y:15},{label:"July",y:70},{label:"Aug",y:50}]},{chartColor:"teal",type:"bar",dataLabel:"Data set 2",datapoints:a},{chartColor:"red",type:"spline",fill:!0,dataLabel:"Data set 3",datapoints:a}]}})}),t}var t,o,l;return function(a,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");a.prototype=Object.create(e&&e.prototype,{constructor:{value:a,writable:!0,configurable:!0}}),e&&y(a,e)}(e,n["Component"]),t=e,(o=[{key:"render",value:function(){return r.a.createElement("div",{className:""},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-sm-12"},r.a.createElement("div",{className:"chartDiv"},r.a.createElement("kakarChart",{id:"chartbar",style:{height:"350px",width:"100%"}})))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-sm-12"},r.a.createElement(h.a,{defaultActiveKey:1,id:"example-code"},r.a.createElement(p.a,{eventKey:1,title:"HTML"},r.a.createElement("pre",null,r.a.createElement("xmp",null,'<!DOCTYPE html>\n<html lang="en">\n  <head>\n    <meta charset="UTF-8">\n    <meta name="viewport" content="width=device-width, initial-scale=1.0">\n    <meta http-equiv="X-UA-Compatible" content="ie=edge">\n    <title>Document</title>\n  </head>\n  <body>\n    <kakarChart id="chartbar" style="height:350px; width:100%;"></kakarChart>\n    <script type="text/javascript" src="gk-chart.min.js"><\/script>\n  </body>\n</html>'))),r.a.createElement(p.a,{eventKey:2,title:"JavaScript"},r.a.createElement("pre",null,r.a.createElement("code",null,'\n    let datapoints = [\n      {label: "January",y: 40},\n      {label: "Feburary",y: 160},\n      {label: "March",y: 80},\n      {label: "April",y: 200},\n      {label: "May",y: 140},\n      {label: "June",y: 240},\n      {label: "July",y: 120},\n      {label: "Aug",y: 80}\n    ];\n    let datapoints1 = [\n        {label: "January",y: 20},\n        {label: "Feb",y: 120},\n        {label: "Mar",y: 210},\n        {label: "Apr",y: 246},\n        {label: "May",y: 96},\n        {label: "Jun",y: 15},\n        {label: "July",y: 70},\n        {label: "Aug",y: 50}\n      ];\n\n    var chartbar = {\n      "config": {\n        "title": "Bar Chart and Smooth Line Comparision",\n        "chartType": \'column\',\n        "printEnable" : true\n      },\n      "data": [{\n        "chartColor": "#00d554",\n        "type": \'bar\',\n        "dataLabel" : "Data set 1",\n        "datapoints": datapoints1\n      },\n      {\n        "chartColor": "teal",\n        "type": \'bar\',\n        "dataLabel" : "Data set 2",\n        "datapoints": datapoints\n      },\n      {\n        "chartColor": "red",\n        "type": \'spline\',\n        "fill": true,\n        "dataLabel" : "Data set 3",\n        "datapoints": datapoints\n      },\n    ]\n    };\n\n    new GKChart({id: "chartbar", data: chartbar}) ;\n')))))))}}])&&u(t.prototype,o),l&&u(t,l),e}();e.default=function(){return r.a.createElement("div",null,r.a.createElement(l.a,null,r.a.createElement("title",null,"Open Source Chart Library : Gk-Chart - Bar and Smooth Line Comparision Chart"),r.a.createElement("meta",{name:"keywords",content:"Gk-Chart, gkchart, gk-chart, chart library, charts, javascript chart library, javascript chart, javascript library, line chart, bar cahrt, pie chart, meter cahrt, doughnut chart, bar cahrt comparision, line chart comparision"}),r.a.createElement("meta",{name:"author",content:"Ganpat Kakar"}),r.a.createElement("meta",{name:"og:Open Source Chart Library : Gk-Chart - Bar and Smooth Line Comparision Chart",property:"og:Open Source Chart Library : Gk-Chart - Bar and Smooth Line Comparision Chart",content:"Open Source Chart Library : Gk-Chart - Bar and Smooth Line Comparision Chart"}),r.a.createElement("meta",{name:"description",content:"Bar Chart and smooth line chart comparison provided an easy way of comparing data set in visual view. With GKCharts it is easy to setup Bar chart and smooth line chart comparison cahrt view."})),r.a.createElement(i.a,null,r.a.createElement(c.a,null,r.a.createElement("h1",null,"JavaScript Bar Chart and Smooth Line Chart Comparison Chart & Graph"),r.a.createElement("p",null,"Bar cahrt and Smooth Line chart can be used in one chart presentation to provide a better comparison view of data. Bar Chart and Smooth Line Chart Comparison Chart is created by providing minimum one data set for each chart type. Bar chart and Smooth Line Chart comparison chart provide a compared view of business data. For example with Bar chart and smooth line chart comparison chart, it is easy to compare multiple year's, month wise progress and income. Below is an example of simple bar chart and smooth line chart comparison chart with HTML and JavaScript source code for intergration. Download our chart library and and use the provided source code. Print the generated chart functionality is provide for the user to print the chart for any hard copy presentation."),r.a.createElement(f,null))))}}},[[252,1,0]]]);