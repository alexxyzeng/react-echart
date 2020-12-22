// import React from 'react'
import 'echarts/lib/component/legend'
import 'echarts/lib/component/legendScroll'
import { ChartComponent } from '../enum'
import { ILegendOption } from '../types'
import { useOption } from '../hooks'

function Legend(options: ILegendOption) {
  useOption(options, ChartComponent.Legend)
  return null
}

export default Legend
