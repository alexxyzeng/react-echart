import 'echarts/lib/chart/line'
import { ChartComponent } from '../enum'
import { useOption } from '../hooks'
import { ISeriesLineOption } from '../types'

// TODO: 增加转换方法
function SeriesLine(options: ISeriesLineOption) {
  useOption(options, ChartComponent.Series)
  return null
}

export default SeriesLine
