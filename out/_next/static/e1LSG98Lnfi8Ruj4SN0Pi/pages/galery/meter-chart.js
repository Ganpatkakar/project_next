(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{261:function(e,t,r){__NEXT_REGISTER_PAGE("/galery/meter-chart",function(){return e.exports=r(297),{page:e.exports.default}})},297:function(e,t,r){"use strict";r.r(t);var a=r(0),n=r.n(a),o=r(3),c=r.n(o),i=r(4),l=r(5),h=r(302),s=r(303);function u(e){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function p(e,t){for(var r=0;r<t.length;r++){var a=t[r];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function m(e){return(m=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function f(e,t){return(f=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function d(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function y(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var b=function(e){function t(){var e,r,a,n;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var o=arguments.length,c=new Array(o),i=0;i<o;i++)c[i]=arguments[i];return a=this,n=(e=m(t)).call.apply(e,[this].concat(c)),r=!n||"object"!==u(n)&&"function"!=typeof n?d(a):n,y(d(d(r)),"componentDidMount",function(){console.log("componentDidMount:StepChart"),r.initialize()}),y(d(d(r)),"initialize",function(){new GKChart({id:"meter",data:{config:{title:"Meter Gauge Chart",chartType:"meter",printEnable:!0},data:[{chartColor:"#ff0000",datapoints:[{label:"Poor",y:50,color:"#ff0000"},{label:"Blw Avg",y:25,color:"#ff0000"},{label:"Average",y:25,color:"#00ff00"},{label:"Abv Avg",y:35,color:"#00ff00"},{label:"Exceed",y:10,color:"#00ff00"}],dataval:77}]}})}),r}var r,o,c;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&f(e,t)}(t,a["Component"]),r=t,(o=[{key:"render",value:function(){return n.a.createElement("div",{className:""},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-sm-12"},n.a.createElement("div",{className:"chartDiv"},n.a.createElement("kakarChart",{id:"meter",style:{height:"500px",width:"100%"}})))),n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-sm-12"},n.a.createElement(h.a,{defaultActiveKey:1,id:"example-code"},n.a.createElement(s.a,{eventKey:1,title:"HTML"},n.a.createElement("pre",null,n.a.createElement("xmp",null,'<!DOCTYPE html>\n<html lang="en">\n  <head>\n    <meta charset="UTF-8">\n    <meta name="viewport" content="width=device-width, initial-scale=1.0">\n    <meta http-equiv="X-UA-Compatible" content="ie=edge">\n    <title>Document</title>\n  </head>\n  <body>\n    <kakarChart id="meter" style="height:350px; width:100%;"></kakarChart>\n    <script type="text/javascript" src="gk-chart.min.js"><\/script>\n  </body>\n</html>'))),n.a.createElement(s.a,{eventKey:2,title:"JavaScript"},n.a.createElement("pre",null,n.a.createElement("code",null,'\n    var meter = {\n      "config": {\n        "title": "Meter Gauge Chart",\n        "chartType": "meter"\n      },\n      "data": [ /*Give as required data in given formate, syntax error with json will cause of error in charts*/ {\n        "chartColor": "#ff0000",\n        "datapoints": [{\n          "label": "Poor",\n          "y": 50,\n          "color": "#ff0000"\n        }, {\n          "label": "Blw Avg",\n          "y": 25,\n          "color": "#ff0000"\n        }, {\n          "label": "Average",\n          "y": 25,\n          "color": "#00ff00"\n        }, {\n          "label": "Abv Avg",\n          "y": 35,\n          "color": "#00ff00"\n        }, {\n          "label": "Exceed",\n          "y": 10,\n          "color": "#00ff00"\n        }],\n        dataval: 77\n      }]\n    };\n\n    new GKChart({id: "meter", data: meter}) ;\n    \n')))))))}}])&&p(r.prototype,o),c&&p(r,c),t}();t.default=function(){return n.a.createElement("div",null,n.a.createElement(c.a,null,n.a.createElement("title",null,"Open Source Chart Library : Gk-Chart - Meter Chart"),n.a.createElement("meta",{name:"keywords",content:"Gk-Chart, gkchart, gk-chart, chart library, charts, javascript chart library, javascript chart, javascript library, line chart, bar cahrt, pie chart, meter cahrt, doughnut chart, bar cahrt comparision, line chart comparision"}),n.a.createElement("meta",{name:"author",content:"Ganpat Kakar"}),n.a.createElement("meta",{name:"og:Open Source Chart Library : Gk-Chart - Meter Chart",property:"og:Open Source Chart Library : Gk-Chart - Meter Chart",content:"Open Source Chart Library : Gk-Chart - Meter Chart"}),n.a.createElement("meta",{name:"description",content:"Gk-Chart is an open source chart library provides charts as Meter chart, bar chart , pie chart, doughnut chart, meter chart, line chart comparison, bar chart comparison, bar and line chart comparison and 20 plus more charts with the business data presentation in chart view, integrate is easy with javascript"})),n.a.createElement(i.a,null,n.a.createElement(l.a,null,n.a.createElement("h1",null,"JavaScript Meter Chart & Graph"),n.a.createElement("p",null,"Line Chart is consrtucted by one data set and one progress value. Meter chart is designed to show the progress of provide value in analog format. For example with Meter chart, it is easy to see the analog representation. Below is an example of Meter chart with HTML and JavaScript source code for intergration. Download our chart library and and use the provided source code. Print the generated chart functionality is provide for the user to print the chart for any hard copy presentation."),n.a.createElement(b,null))))}}},[[261,1,0]]]);