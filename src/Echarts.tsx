/* eslint-disable no-unused-vars */
import React, { Component, createRef, ReactNode } from 'react'
import Echarts from 'echarts/lib/echarts'
import { EchartsOptionContext, IOptionContextType, IEventContextType, EchartsEventContext } from './context'
import { IBaseOption, IEventType, ILoadingOption, IResizeOption, IYAxis } from './types'
import { ChartComponent } from './enum'
import { XAxis } from './components'

interface IProps {
  className?: string
  children: ReactNode
  notMerge?: boolean
  lazyUpdate?: boolean
  options?: IBaseOption,
  resize?: boolean
  resizeOption?: IResizeOption
  showLoading?: boolean
  loadingType?: string
  loadingOption?: ILoadingOption
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
      xAxis: { show: false },
      yAxis: { show: false },
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

  updateOption = (options: Partial<Echarts.EChartOption>, componentKey: ChartComponent) => {
    if (this.options[componentKey] === options) {
      console.log(`Component ${componentKey} not changed`)
      return 
    }
    if (componentKey === ChartComponent.XAxis || componentKey === ChartComponent.YAxis) {
      
      let optionValue = options[componentKey]
      if (Array.isArray(optionValue)) {
        // @ts-ignore
        options[componentKey] = optionValue.map(option => {
          return {
            ...option,
            show: option.show !== false
          }
        })
      } else {
        // @ts-ignore
        options[componentKey] = {
          ...optionValue,
          // @ts-ignore
          show: options.show !== false
        }
      }
    }
    console.log('====================================');
    console.log(options);
    console.log('====================================');
    this.options = { ...this.options, ...options }
    if (componentKey === ChartComponent.Series) {
      
    }
    const { notMerge, lazyUpdate } = this.props
    this.echartsLib.setOption(this.options, notMerge, lazyUpdate)
  }

  onEvent = (params: IEventType) => {
    const { type, handler } = params
    this.echartsLib.on(type, handler)
  }

  offEvent = (params: IEventType) => {
    const { type, handler } = params
    this.echartsLib.off(type, handler)
  }

  componentDidMount() {
    // TODO: 获取options
    this.echartsLib = Echarts.init(
      this.echartsElementRef.current as HTMLDivElement,
      this.options
    )
    const { lazyUpdate, notMerge, showLoading, loadingType, loadingOption, resize, resizeOption } = this.props
    this.echartsLib.setOption(this.options, notMerge, lazyUpdate)
    if (showLoading) {
      this.echartsLib.showLoading(loadingType, loadingOption)
    }
    if (resize) {
      window.onresize = () => {
        this.echartsLib.resize(resizeOption)
      }
    }
  }
  
  componentDidUpdate(prevProps: IProps) {
    const { options, notMerge, lazyUpdate, showLoading, loadingType, loadingOption } = this.props
    if (prevProps.options !== options) {
      this.options = {
        ...this.options,
        ...this.props.options
      }
      this.echartsLib.setOption(this.options, notMerge, lazyUpdate)
    }
    if (prevProps.showLoading === showLoading) {
      return
    }
    if (showLoading) {
      this.echartsLib.showLoading(loadingType, loadingOption)
    } else {
      this.echartsLib.hideLoading()
    }
  }

  componentWillUnmount() {
    if (!this.echartsLib.isDisposed()) {
      this.echartsLib.dispose()
    }
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

