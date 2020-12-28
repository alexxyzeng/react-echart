/* eslint-disable no-unused-vars */
import React, { Component, createRef, ReactNode } from 'react'
import Echarts from 'echarts/lib/echarts'
import { EchartsOptionContext, IContextType } from './context'
import { IBaseOption } from './types'

interface IProps {
  className: string
  children: ReactNode
  notMerge?: boolean
  lazyUpdate?: boolean
  options?: IBaseOption
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
      xAxis: { show: false },
      yAxis: { show: false },
      series: [],
      ...(this.options || {})
    }
    this.state = {
      setOptions: this.setOption,
      updateOption: this.updateOption
    }
  }

  setOption = (options: Echarts.EChartOption) => {
    console.log(options)
  }

  updateOption = (options: Partial<Echarts.EChartOption>) => {
    this.options = { ...this.options, ...options }
    console.log('====================================')
    console.log(this.options, '--- options')
    console.log('====================================')
    const { notMerge, lazyUpdate } = this.props
    this.echartsLib.setOption(this.options, notMerge, lazyUpdate)
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
