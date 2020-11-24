// import React from 'react'
import { ChartComponent } from '../enum'
import { ITitleOption } from '../types'
import { useOption } from '../hooks'

function Tooltip(options: ITitleOption) {
  useOption(options, ChartComponent.Title)
  return null
}

export default Tooltip
