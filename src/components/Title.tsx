// import React from 'react'
import 'echarts/lib/component/title'
import { ChartComponent } from '../enum'
import { ITitleOption } from '../types'
import { useOption } from '../hooks'

function Title(options: ITitleOption) {
  useOption(options, ChartComponent.Title)
  return null
}

export default Title
