import React, { useState } from 'react'

import { Echart, Title, Legend, YAxis } from 'react-echart'

const App = () => {
  // return <ExampleComponent text="Create React Library Example 😄" />
  const [showLegend, setShowLegend] = useState(false)
  return (
    <div style={{ width: 600, height: 500 }}>
      <Echart className='test'>
        <YAxis options={{ type: 'value', name: 'Y轴' }} />
        <Title
          options={{
            text: 'Hello Echart',
            subtext: 'test',
            left: 'center',
            show: true
          }}
        />
        <Legend type='plain' align='left' show={showLegend} right={10} />
      </Echart>
      <button onClick={() => setShowLegend((showStatus) => !showStatus)}>
        Toggle
      </button>
    </div>
  )
}

export default App
