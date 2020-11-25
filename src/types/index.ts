// eslint-disable-next-line no-unused-vars
import { EChartOption, EChartTitleOption } from 'echarts'

// export interface ITitleOption extends EChartTitleOption {}

// export interface IGridOption extends EChartOption.Grid {}
export type ITitleOption = ArrayMaybeOptionType<EChartTitleOption>
export type IGridOption = ArrayMaybeOptionType<EChartOption.Grid>

export type ILegendOption = OptionType<EChartOption.Legend>

export type ITooltipOption = OptionType<EChartOption.Tooltip>

// export interface IXAxisOption extends EChartOption.XAxis {}
export type IXAxisOption = ArrayMaybeOptionType<EChartOption.XAxis>
// export interface IYAxisOption extends EChartOption.YAxis {}
export type IYAxisOption = ArrayMaybeOptionType<EChartOption.YAxis>

export type IAxisPointerOption = OptionType<EChartOption.AxisPointer>

export type ISeriesBarOption = ArrayOptionType<EChartOption.SeriesBar>
export type ISeriesLineOption = ArrayOptionType<EChartOption.SeriesLine>
export type ISeriesLinesOption = ArrayOptionType<EChartOption.SeriesLines>
export type ISeriesGaugeOption = ArrayOptionType<EChartOption.SeriesGauge>
export type ISeriesPieOption = ArrayOptionType<EChartOption.SeriesPie>
export type ISeriesRadarOption = ArrayOptionType<EChartOption.SeriesRadar>
export type ISeriesScatterOption = ArrayOptionType<EChartOption.SeriesScatter>

export type ISeriesLineOrBarOption = ArrayOptionType<
  EChartOption.SeriesBar | EChartOption.SeriesLine
>

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
>

export type IAttachmentType =
  | ITitleOption
  | IGridOption
  | ILegendOption
  | ITooltipOption
  | IXAxisOption
  | IYAxisOption
  | IAxisPointerOption

export type ISeriesType =
  | ISeriesBarOption
  | ISeriesLineOption
  | ISeriesLineOption
  | ISeriesLineOption
  | ISeriesGaugeOption
  | ISeriesRadarOption
  | ISeriesScatterOption

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
