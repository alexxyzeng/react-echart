// import React from 'react'
import 'echarts/lib/component/grid'
import { ChartComponent } from '../enum'
import { IXAxisOption, OptionType } from '../types'
import { useOption } from '../hooks'

function XAxis(options: IXAxisOption) {
  useOption(options, ChartComponent.XAxis)
  return null
}

export default XAxis
