import Highcharts from 'highcharts'
import React from 'react'
import Chart from './Chart'

function unique (arr=[]) {
  return Object.keys(arr.reduce((acc, c) => {
    acc[c] = true
    return acc
  }, {}))
}

export default class extends Chart {
  constructor (props) {
    super(props)
  }

  chartOpts () {
    return stream(this.props)
  }
}

function logPoint (e) {
  console.log(e.point)
}

function stream ({
  title='Cryptocurrency Portfolio',
  subtitle='',
  colors=[],
  series={},
  onClick
}) {

  const highcolors = Highcharts.getOptions().colors
  const highlength = highcolors.length
  const events = { click: onClick || logPoint }

  return {
    chart: {
      type: 'streamgraph',
      marginBottom: 30,
      zoomType: 'x',
      backgroundColor: 'rgba(0,0,0,0)',
    },

    colors: colors.map((c, i) => c ? c : highcolors[i % highlength]),

    title: {
      text: title
    },

    subtitle: {
      text: subtitle
    },

    xAxis: {
      type: 'datetime'
    },

    yAxis: {
      visible: false,
      startOnTick: false,
      endOnTick: false
    },

    legend: {
      enabled: true,
      verticalAlign: 'top',
      align: 'left',
      layout: 'vertical',
      itemStyle: {
        color: '#ffffff'
      }
    },

    // annotations: [{
    //   labels: [{
    //     point: {
    //       x: 0,
    //       xAxis: 0,
    //       y: 0,
    //       yAxis: 0
    //     },
    //     text: 'Cancelled<br>during<br>World War II'
    //   }, {
    //     point: {
    //       x: 2,
    //       xAxis: 0,
    //       y: 10,
    //       yAxis: 0
    //     },
    //     text: 'Soviet Union fell,<br>Germany united'
    //   }],
    //   labelOptions: {
    //     backgroundColor: 'rgba(255,255,255,0.5)',
    //     borderColor: 'silver'
    //   }
    // }],

    plotOptions: {
      series: {
        label: {
          minFontSize: 5,
          maxFontSize: 15,
          style: {
            color: 'rgba(255,255,255,0.75)'
          }
        }
      }
    },

    points: [],

    series: Object.keys(series)
      .map(name => ({ name, events, data: series[name] })),

    exporting: {
      sourceWidth: 800,
      sourceHeight: 600,
      enabled: false
    },

    credits: {
      enabled: false
    }
  }
}

