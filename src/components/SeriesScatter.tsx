import { ChartComponent } from '../enum'
import { useOption } from '../hooks'
import { ISeriesScatterOption } from '../types'

// TODO: 增加转换方法
function SeriesScatter(options: ISeriesScatterOption) {
  useOption(options, ChartComponent.Series)
  return null
}

export default SeriesScatter
