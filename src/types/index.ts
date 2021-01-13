// eslint-disable-next-line no-unused-vars
import { EChartOption } from 'echarts'
import {
  ITitle,
  ILegend,
  IGrid,
  ITooltip,
  IXAxis,
  IYAxis,
  IAxisPointer,
  ISeriesBar,
  ISeriesLine,
  ISeriesLineOrBar,
  ISeriesLines,
  ISeriesPie,
  ISeriesGauge,
  ISeriesRadar,
  ISeriesScatter,
  IToolbox,
  IGraphic,
  IDataZoom
} from './chartTypes'

// export interface ITitleOption extends EChartTitleOption {}

// export interface IGridOption extends EChartOption.Grid {}

export type ITitleOption = ArrayMaybeOptionType<ITitle>
export type IGridOption = ArrayMaybeOptionType<IGrid>

export type ILegendOption = OptionType<ILegend>

export type ITooltipOption = OptionType<ITooltip>

// export interface IXAxisOption extends XAxis {}
export type IXAxisOption = ArrayMaybeOptionType<IXAxis>
// export interface IYAxisOption extends YAxis {}
export type IYAxisOption = ArrayMaybeOptionType<IYAxis>

export type IAxisPointerOption = OptionType<IAxisPointer>

export type IToolboxOption = OptionType<IToolbox>

export type ISeriesBarOption = ArrayOptionType<ISeriesBar>
export type ISeriesLineOption = ArrayOptionType<ISeriesLine>
export type ISeriesLinesOption = ArrayOptionType<ISeriesLines>
export type ISeriesGaugeOption = ArrayOptionType<ISeriesGauge>
export type ISeriesPieOption = ArrayOptionType<ISeriesPie>
export type ISeriesRadarOption = ArrayOptionType<ISeriesRadar>
export type ISeriesScatterOption = ArrayOptionType<ISeriesScatter>

export type ISeriesLineOrBarOption = ArrayOptionType<ISeriesLineOrBar>

export type IGraphicOption = OptionType<IGraphic>
export type IDataZoomOption = OptionType<IDataZoom>

export type IBaseOption = Pick<
  EChartOption,
  | 'color'
  | 'backgroundColor'
  | 'textStyle'
  | 'animation'
  | 'animationThreshold'
  | 'animationEasing'
  | 'animationDuration'
  | 'animationDurationUpdate'
  | 'animationDelay'
  | 'animationDelayUpdate'
  | 'blendMode'
  | 'hoverLayerThreshold'
  | 'useUTC'
  // TODO: 是否要引入对应的模块
  // | 'brush'
  // | 'geo'
  // | 'parallel'
  // | 'parallelAxis'
  // | 'singleAxis'
  // | 'timeline'
  // | 'graphic'
  // | 'aria'
>

export type IAttachmentType =
  | ITitleOption
  | IGridOption
  | ILegendOption
  | ITooltipOption
  | IXAxisOption
  | IYAxisOption
  | IAxisPointerOption
  | IToolboxOption
  | IGraphicOption
  | IDataZoomOption

export type ISeriesType =
  | ISeriesBarOption
  | ISeriesLineOption
  | ISeriesLineOption
  | ISeriesLineOption
  | ISeriesGaugeOption
  | ISeriesRadarOption
  | ISeriesScatterOption
  | ISeriesPieOption

export type IComponentType = IAttachmentType | ISeriesType

export type ArrayMaybeOptionType<T> = {
  options: T | Array<T>
}

export type OptionType<T> = {
  options: T
}

export type ArrayOptionType<T> = {
  options: Array<T>
}

export {
  ITitle,
  ILegend,
  IGrid,
  ITooltip,
  IXAxis,
  IYAxis,
  IAxisPointer,
  ISeriesBar,
  ISeriesLine,
  ISeriesLines,
  ISeriesPie,
  ISeriesGauge,
  ISeriesRadar,
  ISeriesScatter,
  ISeriesLineOrBar,
  IToolbox,
  IGraphic,
  IDataZoom
}

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
  color?: string
  /**
   * 用户自定义的数据。只在 graphic component 和自定义系列（custom series）中生效，如果节点定义上设置了如：{type: 'circle', info: {some: 123}}。
   */
  info: any
  [propName: string]: any
}

export interface IMouseEvent {
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
export interface ILegendEvent {
  type:
    | 'legendselectchanged'
    | 'legendselected'
    | 'legendunselected'
    | 'legendselectall'
    | 'legendinverseselect'
    | 'legendscroll'
  handler: Function
}
export interface IOtherEvent {
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
  handler: Function
}

export type IEventType = IMouseEvent | ILegendEvent | IOtherEvent
