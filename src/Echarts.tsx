/* eslint-disable no-unused-vars */
import React, { Component, createRef, ReactNode } from 'react'
import Echarts from './lib'
import { EchartsEventContext, EchartsOptionContext, IContextType as IOptionContextType, IEventContextType } from './context'
import { IEventType, IBaseOption } from './types'

interface IProps {
  className?: string
  children: ReactNode
  notMerge?: boolean
  lazyUpdate?: boolean
  options?: IBaseOption
}

interface IState {
  optionHandler: IOptionContextType,
  eventHandler: IEventContextType
}

const ECHARTS_STYLE = { height: '100%', width: '100%' }

class EchartsReactCore extends Component<IProps, IState> {
  echartsLib: Echarts.ECharts
  echartsElementRef: React.RefObject<HTMLDivElement>
  options: Echarts.EChartOption
  constructor(props: IProps) {
    super(props)
    this.echartsElementRef = createRef()
    this.options = {
      series: [],
      ...(props.options || {})
    }
    this.state = {
      optionHandler: {
        setOptions: this.setOption,
        updateOption: this.updateOption
      },
      eventHandler: {
        onEvent: this.onEvent,
        offEvent: this.offEvent
      }
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
  
  componentDidUpdate(prevProps: IProps) {
    const { options, notMerge, lazyUpdate } = this.props
    if (prevProps.options !== options) {
      this.options = {
        ...this.options,
        ...this.props.options
      }
      this.echartsLib.setOption(this.options, notMerge, lazyUpdate)
    }
  }

  componentWillUnmount() {
    if (!this.echartsLib.isDisposed()) {
      this.echartsLib.dispose()
    }
  }

  onEvent = (params: IEventType) => {
    const { type, handler } = params
    this.echartsLib.on(type, handler)
  }

  offEvent = (params: IEventType) => {
    const { type, handler } = params
    this.echartsLib.off(type, handler)
  }
  

  render() {
    const { className = '', children } = this.props
    const { optionHandler, eventHandler } = this.state
    return (
      <EchartsOptionContext.Provider value={optionHandler}>
        <EchartsEventContext.Provider value={eventHandler}>
          <div
            style={ECHARTS_STYLE}
            ref={this.echartsElementRef}
            className={`echarts-for-react ${className}`}
          />
          {children}
        </EchartsEventContext.Provider>
      </EchartsOptionContext.Provider>
    )
  }
}

export default EchartsReactCore

