/* eslint-disable no-unused-vars */
import React, { Component, ReactChildren, ReactChild, createRef } from 'react'
import Echarts from 'echarts'
import { EchartsOptionContext, IContextType } from './context'

interface IProps {
  className: string
  children: ReactChild | ReactChildren
  notMerge?: boolean
  lazyUpdate?: boolean
}

// interface IState {
//   options: Echarts.EChartOption
// }

const ECHARTS_STYLE = { height: '100%', width: '100%' }

class EchartsReactCore extends Component<IProps, IContextType> {
  echartsLib: Echarts.ECharts
  echartsElementRef: React.RefObject<HTMLDivElement>
  options: Echarts.EChartOption
  constructor(props: IProps) {
    super(props)
    this.echartsElementRef = createRef()
    this.options = {
      xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
      },
      yAxis: {
        type: 'value'
      },
      series: [
        {
          data: [820, 932, 901, 934, 1290, 1330, 1320],
          type: 'line',
          name: 'test'
        }
      ],
      legend: {
        show: true
      }
    }
    this.state = {
      setOptions: this.setOption,
      updateOption: this.updateOption
    }
  }

  setOption = (options: Echarts.EChartOption) => {
    console.log(options)
  }

  updateOption = (options: Partial<Echarts.EChartOption>, key: string) => {
    console.log(options, '---- options')
    this.options = { ...this.options, [key]: options }
    this.echartsLib.setOption(this.options)
  }

  componentDidMount() {
    // TODO: 获取options
    this.echartsLib = Echarts.init(
      this.echartsElementRef.current as HTMLDivElement,
      this.options
    )
    const { lazyUpdate, notMerge } = this.props
    this.echartsLib.setOption(this.options, notMerge, lazyUpdate)
  }

  componentWillUnmount() {
    if (!this.echartsLib.isDisposed()) {
      this.echartsLib.dispose()
    }
  }

  render() {
    const { className = '', children } = this.props
    return (
      <EchartsOptionContext.Provider value={this.state}>
        <div
          style={ECHARTS_STYLE}
          ref={this.echartsElementRef}
          className={`echarts-for-react ${className}`}
        />
        {children}
      </EchartsOptionContext.Provider>
    )
  }
}

export default EchartsReactCore
