import 'echarts/lib/chart/radar'
import { ChartComponent } from '../enum'
import { useOption } from '../hooks'
import { ISeriesRadarOption } from '../types'

// TODO: 增加转换方法
function SeriesRadar(options: ISeriesRadarOption) {
  useOption(options, ChartComponent.Series)
  return null
}

export default SeriesRadar
