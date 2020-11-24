import React, { useState } from 'react'

import { Echart, Title, Legend } from 'react-echart'

const App = () => {
  // return <ExampleComponent text="Create React Library Example 😄" />
  const [showLegend, setShowLegend] = useState(false)
  return (
    <div style={{ width: 600, height: 500 }}>
      <Echart className='test'>
        <Title text='Hello Echart' subtext='test' left='center' show={true} />
        <Legend
          type='plain'
          align='left'
          show={showLegend}
          right={10}
          data={['流量', '降雨量']}
        />
      </Echart>
      <button onClick={() => setShowLegend((showStatus) => !showStatus)}>
        Toggle
      </button>
    </div>
  )
}

export default App
