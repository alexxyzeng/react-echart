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
  IGraphic
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
  IGraphic
}
