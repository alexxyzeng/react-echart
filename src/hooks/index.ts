import { useContext, useEffect } from 'react'
import { EChartOption } from 'echarts'
import { EchartsOptionContext } from '../context'
import { ChartComponent } from '../enum'

function useOption(
  options: Partial<EChartOption>,
  componentType: ChartComponent
) {
  const { updateOption } = useContext(EchartsOptionContext)
  useEffect(() => {
    updateOption(options, componentType)
  }, [options])
}

export { useOption }
