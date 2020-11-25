import React, { useState } from 'react'

import { Echart, Title, Legend, YAxis } from 'react-echart'

const App = () => {
  // return <ExampleComponent text="Create React Library Example 😄" />
  const [showLegend, setShowLegend] = useState(false)

  return (
    <div style={{ width: 600, height: 500 }}>
      <Echart className='test'>
        <YAxis
          options={[
            { type: 'value', name: 'Y轴' },
            { type: 'category', name: 'aa' }
          ]}
        />
        <Title
          options={{
            text: 'Hello Echart',
            subtext: 'test',
            textAlign: 'center',
            show: true
          }}
        />
        <Legend
          options={{
            type: 'plain',
            show: showLegend
          }}
        />
      </Echart>
      <button onClick={() => setShowLegend((showStatus) => !showStatus)}>
        Toggle
      </button>
    </div>
  )
}

export default App
