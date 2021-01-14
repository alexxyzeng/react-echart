import 'echarts/lib/chart/bar'
import { ChartComponent } from '../enum'
import { useOption } from '../hooks'
import { ISeriesBarOption } from '../types'

// TODO: 增加转换方法
function SeriesBar(options: ISeriesBarOption) {
  useOption(options, ChartComponent.Series, ChartComponent.Bar)
  return null
}

export default SeriesBar
