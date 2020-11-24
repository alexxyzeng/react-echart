import React, { useState } from 'react'

import { Echart, Legend } from 'react-echart'
import 'react-echart/dist/index.css'

const App = () => {
  // return <ExampleComponent text="Create React Library Example 😄" />
  const [showLegend, setShowLegend] = useState(false)
  return (
    <div style={{ width: 300, height: 160 }}>
      <Echart className='test'>
        <Legend type='plain' align='left' show={showLegend} />
      </Echart>
      <button onClick={() => setShowLegend((showStatus) => !showStatus)}>
        Toggle
      </button>
    </div>
  )
}

export default App
