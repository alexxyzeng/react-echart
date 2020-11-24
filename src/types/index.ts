// eslint-disable-next-line no-unused-vars
import { EChartOption, EChartTitleOption } from 'echarts'

export interface ITitleOption extends EChartTitleOption {}

export interface ILegendOption extends EChartOption.Legend {}

export interface ITooltipOption extends EChartOption.Tooltip {}

export interface IXAxisOption extends EChartOption.XAxis {}

export interface IYAxisOption extends EChartOption.YAxis {}

export interface ISeriesBarOption extends EChartOption.SeriesBar {}
export interface ISeriesLineOption extends EChartOption.SeriesLine {}
export interface ISeriesLinesOption extends EChartOption.SeriesLines {}
export interface ISeriesGaugeOption extends EChartOption.SeriesGauge {}
export interface ISeriesPieOption extends EChartOption.SeriesPie {}
export interface ISeriesRadarOption extends EChartOption.SeriesRadar {}
export interface ISeriesScatterOption extends EChartOption.SeriesScatter {}
