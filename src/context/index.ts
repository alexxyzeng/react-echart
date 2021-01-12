import { createContext } from 'react'
// eslint-disable-next-line no-unused-vars
import { EChartOption } from 'echarts'
import { ChartComponent } from '../enum'

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
  onEvent: (type: string, handler: (...args: any[]) => void) => void
  offEvent: (type: string, handler: (...args: any[]) => void) => void
}

export const EchartsEventContext = createContext<IEventContextType>({
  onEvent: () => {},
  offEvent: () => {}
})
