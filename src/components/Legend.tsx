// import React from 'react'
import { memo } from 'react'
import { ChartComponent } from '../enum'
import { ILegendOption } from '../types'
import { useOption } from '../hooks'


function Legend(options: ILegendOption) {
  useOption(options, ChartComponent.Legend)
  return null
}

export default memo(Legend)
