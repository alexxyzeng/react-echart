// import React from 'react'
import { ChartComponent } from '../enum'
import { ITooltipOption } from '../types'
import { useOption } from '../hooks'

function Tooltip(options: ITooltipOption) {
  useOption(options, ChartComponent.Legend)
  return null
}

export default Tooltip
