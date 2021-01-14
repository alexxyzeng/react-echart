import React from 'react'

import {
  Echart,
  SeriesLine,
  // ISeriesPie,
  Tooltip,
  ITooltip,
  Toolbox,
  IToolbox,
  // Graphic,
  // IGraphic,
  IBaseOption,
  YAxis,
  XAxis,
  Event,
  DataZoom
} from 'react-echart'

// const seriesOption: Array<ISeriesPie> = [
//   {
//     data: [{ name: '平均满意度', value: 3.9915 }],
//     type: 'pie',
//     radius: ['50%', '70%'],
//     avoidLabelOverlap: false,
//     label: { show: false },
//     emphasis: { label: { show: false } },
//     labelLine: { show: false }
//   }
// ]

const tooltipOption: ITooltip = {
  trigger: 'item'
}

const toolboxOption: IToolbox = {
  feature: {
    saveAsImage: {}
  }
}

export const EchartsColorEnum = [
  '#c23531',
  '#2f4554',
  '#61a0a8',
  '#d48265',
  '#91c7ae',
  '#749f83',
  '#ca8622',
  '#bda29a',
  '#6e7074',
  '#546570',
  '#c4ccd3'
]

export const FormatDataEnum = {
  年: 'YYYY',
  月: 'YYYY-MM',
  周: 'YYYY-w',
  日: 'YYYY-MM-DD'
}

const baseOptions: IBaseOption = {
  color: EchartsColorEnum
}

// const graphicOption: IGraphic = {
//   type: 'rect',
//   left: 'center',
//   top: 'center',
//   style: {
//     text: '3.9915\n\n平均满意度',
//     textAlign: 'center'
//   }
// }

const App = () => {
  return (
    <div style={{ width: 600, height: 500 }}>
      <Echart className='test' options={baseOptions} showLoading={false} loadingType="" resize={true} resizeOption={{ silent: true }}>
        <SeriesLine options={[{
        data: [120, 200, 150, 80, 70, 110, 130],
        type: 'bar'
    }]} />
        <YAxis options={{ show: true, type: 'value' }} />
        <XAxis options={{ show: true, type: 'category', data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'] }} />
        <Tooltip options={tooltipOption} />
        <Toolbox options={toolboxOption} />
        <DataZoom options={{
            id: 'dataZoomX',
            type: 'slider',
            start: 0,
            end: 4,
            zoomOnMouseWheel: false,
            minValueSpan: 10,
            maxValueSpan: 10,
            height: 20,
            bottom: 0,
            show: true
          }}
        />
        <Event type="click" handler={console.log} />
        <Event type="mouseout" handler={console.log} />
      </Echart>
    </div>
  )
}

export default App
