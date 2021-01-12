// import React from 'react'
import { memo } from 'react'
import { ChartComponent } from '../enum'
import { ITitleOption } from '../types'
import { useOption } from '../hooks'

function Title(options: ITitleOption) {
  useOption(options, ChartComponent.Title)
  return null
}

export default memo(Title)
