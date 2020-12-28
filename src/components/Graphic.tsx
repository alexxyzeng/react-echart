// import React from 'react'
import 'echarts/lib/component/grid'
import { ChartComponent } from '../enum'
import { IGraphicOption } from '../types'
import { useOption } from '../hooks'

function Graphic(options: IGraphicOption) {
  useOption(options, ChartComponent.Grid)
  return null
}

export default Graphic
