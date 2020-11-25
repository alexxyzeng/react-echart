import React, { useState } from 'react'

import {
  Echart,
  Title,
  Legend,
  YAxis,
  SeriesLine,
  Grid,
  XAxis,
  Tooltip,
  IGrid,
  ISeriesLine,
  ITooltip,
  IYAxis,
  IXAxis,
  ITitle
} from 'react-echart'

const gridOption: IGrid = {
  left: '3%',
  right: '4%',
  bottom: '3%',
  containLabel: true
}
const seriesOption: Array<ISeriesLine> = [
  {
    name: '邮件营销',
    type: 'line',
    stack: '总量',
    areaStyle: {},
    data: [120, 132, 101, 134, 90, 230, 210]
  },
  {
    name: '联盟广告',
    type: 'line',
    stack: '总量',
    areaStyle: {},
    data: [220, 182, 191, 234, 290, 330, 310]
  },
  {
    name: '视频广告',
    type: 'line',
    stack: '总量',
    areaStyle: {},
    data: [150, 232, 201, 154, 190, 330, 410]
  },
  {
    name: '直接访问',
    type: 'line',
    stack: '总量',
    areaStyle: {},
    data: [320, 332, 301, 334, 390, 330, 320]
  },
  {
    name: '搜索引擎',
    type: 'line',
    stack: '总量',
    label: {
      show: true,
      position: 'top'
    },
    areaStyle: {},
    data: [820, 932, 901, 934, 1290, 1330, 1320]
  }
]
const tooltipOption: ITooltip = {
  trigger: 'axis',
  axisPointer: {
    type: 'cross',
    label: {
      backgroundColor: '#6a7985'
    }
  }
}
const YAxisOption: Array<IYAxis> = [
  {
    type: 'value',
    name: 'aaa'
  }
]
const XAxisOption: IXAxis = {
  type: 'category',
  boundaryGap: false,
  data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
}

const titleOption: ITitle = {
  text: '堆叠区域图'
}
const App = () => {
  const [showLegend, setShowLegend] = useState(false)

  return (
    <div style={{ width: 600, height: 500 }}>
      <Echart className='test'>
        <Grid options={gridOption} />
        <Title options={titleOption} />
        <SeriesLine options={seriesOption} />
        <YAxis options={YAxisOption} />
        <XAxis options={XAxisOption} />
        <Legend
          options={{
            show: showLegend,
            data: ['邮件营销', '联盟广告', '视频广告', '直接访问', '搜索引擎']
          }}
        />
        <Tooltip options={tooltipOption} />
      </Echart>
      <button onClick={() => setShowLegend((showStatus) => !showStatus)}>
        Toggle
      </button>
    </div>
  )
}

export default App
