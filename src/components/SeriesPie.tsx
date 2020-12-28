import 'echarts/lib/chart/pie'
import { ChartComponent } from '../enum'
import { useOption } from '../hooks'
import { ISeriesPieOption } from '../types'

// TODO: 增加转换方法
function SeriesPie(options: ISeriesPieOption) {
  useOption(options, ChartComponent.Series)
  return null
}

export default SeriesPie
