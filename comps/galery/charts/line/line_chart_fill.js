import React, { Component } from "react";
import { Tabs, Tab } from "react-bootstrap";

export default class LineChartFill extends Component {
  componentDidMount = () => {
    console.log("componentDidMount:Chart");
    this.initialize();
  };

  initialize = () => {
    let datapoints = [
      {label: "January",y: 40},
      {label: "Feburary",y: 160},
      {label: "March",y: 80},
      {label: "April",y: 200},
      {label: "May",y: 140},
      {label: "June",y: 240},
      {label: "July",y: 120}
    ];

    let chartLineFill = {
      config: {
        title: "Line Chart Fill",
        chartType: "line",
        printEnable: true
      },
      data: [
        {
          chartColor: "#00d554",
          fill: true,
          dataLabel: "Data Set 1",
          datapoints: datapoints
        }
      ]
    };

    new GKChart({
      id: "chartLineFill",
      data: chartLineFill
    });
  };

  render() {
    return (
      <div className="">
        <div className="row">
          <div className="col-sm-12">
            <div className="chartDiv">
              <kakarChart
                id="chartLineFill"
                style={{ height: "350px", width: "100%" }}
              />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-12">
            <Tabs defaultActiveKey={1} id="example-code">
              <Tab eventKey={1} title="HTML">
                <pre>
                  <xmp>{`<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
  </head>
  <body>
    <kakarChart id="chartLineFill" style="height:350px; width:100%;"></kakarChart>
    <script type="text/javascript" src="gk-chart.min.js"></script>
  </body>
</html>`}</xmp>
                </pre>
              </Tab>
              <Tab eventKey={2} title="JavaScript">
                <pre>
                  <code>{`
let datapoints = [
  {
    label: "January",
    y: 40
  },
  {
    label: "Feburary",
    y: 180
  },
  {
    label: "March",
    y: 60
  },
  {
    label: "April",
    y: 300
  },
  {
    label: "May",
    y: 140
  },
  {
    label: "June",
    y: 240
  }
];

let chartLineFill = {
  config: {
    title: "Line Chart Fill",
    chartType: "line",
    printEnable: true
  },
  data: [
    {
      chartColor: "#00d554",
      fill: true,
      dataLabel: "Data Set 1",
      datapoints: datapoints
    }
  ]
};

new GKChart({
  id: "chartLineFill",
  data: chartLineFill
}) ;
`}</code>
                </pre>
              </Tab>
            </Tabs>
          </div>
        </div>
      </div>
    );
  }
}
