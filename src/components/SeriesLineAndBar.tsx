import { ChartComponent } from '../enum'
import { useOption } from '../hooks'
import { ISeriesLineOrBarOption } from '../types'

// TODO: 增加转换方法
function SeriesLineAndBar(options: ISeriesLineOrBarOption) {
  useOption(options, ChartComponent.Series)
  return null
}

export default SeriesLineAndBar
