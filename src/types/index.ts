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

export type ISeriesBarOption = OptionType<EChartOption.SeriesBar>
export type ISeriesLineOption = OptionType<EChartOption.SeriesLine>
export type ISeriesLinesOption = OptionType<EChartOption.SeriesLines>
export type ISeriesGaugeOption = OptionType<EChartOption.SeriesGauge>
export type ISeriesPieOption = OptionType<EChartOption.SeriesPie>
export type ISeriesRadarOption = OptionType<EChartOption.SeriesRadar>
export type ISeriesScatterOption = OptionType<EChartOption.SeriesScatter>

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
