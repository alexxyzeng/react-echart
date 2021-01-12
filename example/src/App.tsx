import React from 'react'

import {
  Echart,
  SeriesPie,
  ISeriesPie,
  Tooltip,
  ITooltip,
  Toolbox,
  IToolbox,
  // Graphic,
  // IGraphic,
  IBaseOption,
  YAxis,
  XAxis,
  Legend
} from 'react-echart'

const seriesOption: Array<ISeriesPie> = [
  {
    name: '访问来源',
    type: 'pie',
    radius: ['50%', '70%'],
    avoidLabelOverlap: false,
    label: {
      show: false,
      position: 'center'
    },
    emphasis: {
      label: {
        show: true,
        fontSize: 30,
        fontWeight: 'bold'
      }
    },
    labelLine: {
      show: false
    },
    data: [
      { value: 335, name: '直接访问' },
      { value: 310, name: '邮件营销' },
      { value: 234, name: '联盟广告' },
      { value: 135, name: '视频广告' },
      { value: 1548, name: '搜索引擎' }
    ]
  }
]

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
      <Echart className='test' options={baseOptions}>
        <SeriesPie options={seriesOption} />
        <YAxis options={{ show: false }} />
        <XAxis options={{ show: false }} />
        <Tooltip options={tooltipOption} />
        <Toolbox options={toolboxOption} />
        {/* <Graphic options={graphicOption} /> */}
        <Legend
          options={{
            orient: 'vertical',
            left: 10,
            data: ['直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎']
          }}
        />
      </Echart>
    </div>
  )
}

export default App
