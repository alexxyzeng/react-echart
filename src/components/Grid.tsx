// import React from 'react'
import 'echarts/lib/component/grid'
import { ChartComponent } from '../enum'
import { IGridOption } from '../types'
import { useOption } from '../hooks'

function Grid(options: IGridOption) {
  useOption(options, ChartComponent.Grid)
  return null
}

export default Grid
