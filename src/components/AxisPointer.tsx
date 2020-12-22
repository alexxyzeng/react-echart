// import React from 'react'
import 'echarts/lib/component/axisPointer'
import { ChartComponent } from '../enum'
import { IAxisPointerOption } from '../types'
import { useOption } from '../hooks'

function AxisPointer(options: IAxisPointerOption) {
  useOption(options, ChartComponent.AxisPointer)
  return null
}

export default AxisPointer
