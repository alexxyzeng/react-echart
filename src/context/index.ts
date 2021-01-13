import { createContext } from 'react'
// eslint-disable-next-line no-unused-vars
import { EChartOption } from 'echarts'
import { ChartComponent } from '../enum'
import { IEventType } from '../types'

export interface IContextType {
  setOptions: (options: EChartOption) => void
  updateOption: (
    options: Partial<EChartOption>,
    optionKey: ChartComponent
  ) => void
}

export const EchartsOptionContext = createContext<IContextType>({
  setOptions: () => {},
  updateOption: () => {}
})

export interface IEventContextType {
  onEvent: (params: IEventType) => void
  offEvent: (params: IEventType) => void
}

export const EchartsEventContext = createContext<IEventContextType>({
  onEvent: () => {},
  offEvent: () => {}
})
