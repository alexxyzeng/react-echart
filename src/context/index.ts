import { createContext } from 'react'
// eslint-disable-next-line no-unused-vars
import Echarts from 'echarts'

export interface IContextType {
  setOptions: (options: Echarts.EChartOption) => void
  updateOption: (
    options: Partial<Echarts.EChartOption>,
    optionKey: string
  ) => void
}

export const EchartsOptionContext = createContext<IContextType>({
  setOptions: () => {},
  updateOption: () => {}
})
