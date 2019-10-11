import React, { useState, useEffect } from 'react'

function VoteResults (props) {
  function generateRandomTestPercentages () {
    const num1 = Math.random()
    const num2 = Math.random()
    const num3 = Math.random()
    const num4 = Math.random()
    const sum = num1 + num2 + num3 + num4

    return [
      Math.round(num1 / sum * 100),
      Math.round(num2 / sum * 100),
      Math.round(num3 / sum * 100),
      Math.round(num4 / sum * 100)
    ]
  }

  const [values, setValues] = useState([])

  useEffect(() => {
    setValues(generateRandomTestPercentages())
  }, [])

  return (
    <>
      <div className="barchart">
        <div className="column">
          <div className="bar-container">
            <div className="bar bar1" style={{ height: `${values[0]}%` }} />
            <div className="barlabel">{values[0]}%</div>
          </div>
          <div className="label">Women & Men Sharing Leadership 50-50</div>
        </div>
        <div className="column">
          <div className="bar-container">
            <div className="bar bar2" style={{ height: `${values[1]}%` }} />
            <div className="barlabel">{values[1]}%</div>
          </div>
          <div className="label">Equal Pay for Equal Work</div>
        </div>
        <div className="column">
          <div className="bar-container">
            <div className="bar bar3" style={{ height: `${values[2]}%` }} />
            <div className="barlabel">{values[2]}%</div>
          </div>
          <div className="label">More Women Voting & Running for Office</div>
        </div>
        <div className="column">
          <div className="bar-container">
            <div className="bar bar4" style={{ height: `${values[3]}%` }} />
            <div className="barlabel">{values[3]}%</div>
          </div>
          <div className="label">Inclusive Education of Women's History</div>
        </div>
      </div>
      <style jsx>{`
        .barchart {
          display: grid;
          grid-template-columns: 1fr 1fr 1fr 1fr;
          grid-gap: 3%;
          max-width: 40vh;
          font-size: 1.5vh
        }
        .column {
          display: flex;
          flex-direction: column;
        }
        .bar-container {
          flex-basis: 40vh;
          margin-bottom: 1vh;
          position: relative;
        }
        .bar {
          background-color: #969696;
          /* min-height: 15%; */
          width: 100%;
          position: absolute;
          bottom: 0;
          left: 0;
        }
        .barlabel {
          position: absolute;
          bottom: 3%;
          text-align: center;
          width: 100%;
          font-size: 200%;
          font-weight: bold;
        }
      `}
      </style>
    </>
  )
}

export default VoteResults
