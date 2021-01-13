// import React from 'react'
import 'echarts/lib/component/dataZoom'
import { ChartComponent } from '../enum'
import { IDataZoomOption } from '../types'
import { useOption } from '../hooks'

function DataZoom(options: IDataZoomOption) {
  useOption(options, ChartComponent.DataZoom)
  return null
}

export default DataZoom
