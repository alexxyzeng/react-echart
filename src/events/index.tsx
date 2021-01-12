import { useEffect, memo, useContext } from 'react'
import { EchartsEventContext } from '../context'

/**
 *
 */
export interface EchartsMouseEventParams {
  /**
   *  当前点击的图形元素所属的组件名称，其值如 'series'、'markLine'、'markPoint'、'timeLine' 等。
   */
  componentType: string
  /**
   * 系列类型。值可能为：'line'、'bar'、'pie' 等。当 componentType 为 'series' 时有意义。
   */
  seriesType: string
  /**
   * 系列在传入的 option.series 中的 index。当 componentType 为 'series' 时有意义。
   */
  seriesIndex: number
  /**
   * 系列名称。当 componentType 为 'series' 时有意义。
   */
  seriesName: string
  /**
   * 数据名，类目名
   */
  name: string
  /**
   * 数据在传入的 data 数组中的 index
   */
  dataIndex: number
  /**
   * 传入的原始数据项
   */
  data: any
  /**
   * sankey、graph 等图表同时含有 nodeData 和 edgeData 两种 data，
   * dataType 的值会是 'node' 或者 'edge'，表示当前点击在 node 还是 edge 上。
   * 其他大部分图表中只有一种 data，dataType 无意义。
   */
  dataType: string
  /**
   * 传入的数据值
   */
  value: number | Array<any>
  /**
   * 数据图形的颜色。当 componentType 为 'series' 时有意义。
   */
  color: string
  /**
   * 用户自定义的数据。只在 graphic component 和自定义系列（custom series）中生效，如果节点定义上设置了如：{type: 'circle', info: {some: 123}}。
   */
  info: any
}

export interface EchartsMouseEvent {
  type:
    | 'click'
    | 'dblclick'
    | 'mousedown'
    | 'mousemove'
    | 'mouseup'
    | 'mouseover'
    | 'mouseout'
    | 'globalout'
    | 'contextmenu'
  handler: (params: EchartsMouseEventParams) => void
}

// export type EchartsLegendEvent =
export interface EchartsLegendEvent {
  type:
    | 'legendselectchanged'
    | 'legendselected'
    | 'legendunselected'
    | 'legendselectall'
    | 'legendinverseselect'
    | 'legendscroll'
  handler: (...args: any[]) => void
}

export interface EchartsOtherEvent {
  type:
    | 'datazoom'
    | 'datarangeselected'
    | 'timelineplaychanged'
    | 'restore'
    | 'dataviewchanged'
    | 'magictypechanged'
    | 'geoselectchanged'
    | 'geoselected'
    | 'geounselected'
    | 'pieselectchanged'
    | 'pieselected'
    | 'pieunselected'
    | 'mapselectchanged'
    | 'mapselected'
    | 'mapunselected'
    | 'axisareaselected'
    | 'focusnodeadjacency'
    | 'unfocusNodeAdjacency'
    | 'brush'
    | 'brushEnd'
    | 'brushselected'
    | 'globalcursortaken'
    | 'rendered'
    | 'finished'
  handler: (...args: any[]) => void
}

function EchartEvent(
  props: EchartsMouseEvent | EchartsLegendEvent | EchartsOtherEvent
) {
  const { type, handler } = props
  const { onEvent, offEvent } = useContext(EchartsEventContext)
  useEffect(() => {
    offEvent(type, handler)
    onEvent(type, handler)
    return () => {
      offEvent(type, handler)
    }
  }, [type, handler])
  return null
}

export default memo(EchartEvent)
