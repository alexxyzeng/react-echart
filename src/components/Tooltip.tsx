// import React from 'react'
import 'echarts/lib/component/tooltip'
import { ChartComponent } from '../enum'
import { ITooltipOption } from '../types'
import { useOption } from '../hooks'

function Tooltip(options: ITooltipOption) {
  useOption(options, ChartComponent.Tooltip)
  return null
}

export default Tooltip
