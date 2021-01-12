// import React from 'react'
import { memo } from 'react'
import { ChartComponent } from '../enum'
import { IToolboxOption } from '../types'
import { useOption } from '../hooks'

function Toolbox(options: IToolboxOption) {
  useOption(options, ChartComponent.Toolbox)
  return null
}

export default memo(Toolbox)
