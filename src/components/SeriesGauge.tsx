import 'echarts/lib/chart/gauge'
import { ChartComponent } from '../enum'
import { useOption } from '../hooks'
import { ISeriesGaugeOption } from '../types'

// TODO: 增加转换方法
function SeriesGauge(options: ISeriesGaugeOption) {
  useOption(options, ChartComponent.Series)
  return null
}

export default SeriesGauge
