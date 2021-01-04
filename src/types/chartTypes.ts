import { EChartOption, EChartTitleOption } from 'echarts'

export type ITitle = EChartTitleOption
export type IGrid = EChartOption.Grid
export type ILegend = EChartOption.Legend
export type ITooltip = EChartOption.Tooltip
export type IXAxis = EChartOption.XAxis
export type IYAxis = EChartOption.YAxis
export type IAxisPointer = EChartOption.AxisPointer
export type ISeriesBar = EChartOption.SeriesBar
export type ISeriesLine = EChartOption.SeriesLine
export type ISeriesLineOrBar = ISeriesBar | ISeriesLine
export type ISeriesLines = EChartOption.SeriesLines
export type ISeriesPie = EChartOption.SeriesPie
export type ISeriesGauge = EChartOption.SeriesGauge
export type ISeriesRadar = EChartOption.SeriesRadar
export type ISeriesScatter = EChartOption.SeriesScatter
export type IToolbox = EchartOption.toolbox
export type IGraphic = any
export type IDataZoom = EChartOption.DataZoom

export interface IToolboxOption {}

declare namespace EchartOption {
  export interface toolbox {
    id?: string
    show?: boolean
    orient?: 'horizontal' | 'vertical'
    itemSize?: number
    itemGap?: number
    showTitle?: boolean
    feature?: object
    iconStyle?: object
    emphasis?: object
    zlevel?: number
    z?: number
    left?: string | number
    top?: string | number
    right?: string | number
    bottom?: string | number
    width?: string | number
    height?: string | number
    tooltip?: ITooltip
  }
}
