// eslint-disable-next-line no-unused-vars
import React, { useEffect } from 'react'
import { EchartsOptionContext } from '../context'
import { ChartComponent } from '../enum'
// eslint-disable-next-line no-unused-vars
import { ILegendOption } from '../types'

function Legend(options: ILegendOption) {
  const { updateOption } = React.useContext(EchartsOptionContext)
  useEffect(() => {
    console.log(options, '--- options')
    updateOption(options, ChartComponent.Legend)
  }, [options])
  return null
}

export default Legend
