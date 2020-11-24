// import React from 'react'
import { ChartComponent } from '../enum'
import { IYAxisOption, OptionType } from '../types'
import { useOption } from '../hooks'

function YAxis(options: IYAxisOption) {
  useOption(options, ChartComponent.YAxis)
  return null
}

export default YAxis
