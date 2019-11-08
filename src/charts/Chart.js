import React, { Component } from 'react'
import Highcharts from 'highcharts'
import randomId from './randomId'

export default class extends Component {
  constructor (props) {
    super(props)
    this.id = 'chart-' + props.name || randomId()
    this.renderer = render(this.id)
  }

  componentDidMount () {
    this.renderChart()
  }

  componentDidUpdate (prevProps) {
    this.renderChart()
  }

  renderChart () {
    if (this.frame) cancelAnimationFrame(this.frame)
    this.frame = requestAnimationFrame(() => {
      Promise.resolve()
      .then(() => this.chartOpts())
      .then((chart) => this.renderer(chart))
    })
  }

  chartOpts () {
    throw new Error('Must supply chartOpts method')
  }

  render () {
    return <div id={this.id} style={this.props.style}></div>
  }
}

function render (id) {
  let prevChart = null
  return function (chart) {
    if (prevChart === chart) return
    console.log('Render chart', id, chart)
    Highcharts.chart(id, chart)
    prevChart = chart
  }
}
