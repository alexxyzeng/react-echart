import { useContext, useEffect } from 'react'
import { EChartOption } from 'echarts'
import { EchartsOptionContext } from '../context'
import { ChartComponent } from '../enum'
import { IComponentType } from '../types'

function useOption(options: IComponentType, componentType: ChartComponent) {
  const { updateOption } = useContext(EchartsOptionContext)
  useEffect(() => {
    const partialOption = { [componentType]: options } as Partial<EChartOption>
    updateOption(partialOption, componentType)
  }, [options])
}

export { useOption }
