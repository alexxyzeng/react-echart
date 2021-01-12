import { memo } from 'react'

import { ChartComponent } from '../enum'
import { IGraphicOption } from '../types'
import { useOption } from '../hooks'

function Graphic(options: IGraphicOption) {
  useOption(options, ChartComponent.Graphic)
  return null
}

export default memo(Graphic)
