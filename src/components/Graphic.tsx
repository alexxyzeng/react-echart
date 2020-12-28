// import React from 'react'
import 'echarts/lib/component/graphic'
import { ChartComponent } from '../enum'
import { IGraphicOption } from '../types'
import { useOption } from '../hooks'

function Graphic(options: IGraphicOption) {
  useOption(options, ChartComponent.Graphic)
  return null
}

export default Graphic
