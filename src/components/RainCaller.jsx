import React from 'react'
import RainGraph from './RainGraph'
import './css/styles.css'

const RainCaller = ({hourlyData}) => {
  return (
    <div className="rain">
        <p>Chance of Rain</p>
        {!hourlyData ? <p>Data not available</p> : (
            <RainGraph hourlyData={hourlyData} />
        )}
    </div>
  )
}

export default RainCaller