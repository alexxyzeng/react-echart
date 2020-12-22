// import React from 'react'
import 'echarts/lib/component/toolbox'
import { ChartComponent } from '../enum'
import { IToolboxOption } from '../types'
import { useOption } from '../hooks'

function Toolbox(options: IToolboxOption) {
  useOption(options, ChartComponent.Toolbox)
  return null
}

export default Toolbox
