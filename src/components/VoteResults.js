import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { useSpring, useTransition, animated } from 'react-spring'
import { UI_COLOR_SECONDARY } from '../const'

BarChartItem.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired
}

function BarChartItem ({ label, value }) {
  // Sets animation style of counting up number and bar
  const spring = useSpring({
    width: `${value}%`,
    number: value,
    from: {
      width: '0%',
      number: 0
    },
    config: { mass: 50, tension: 300, friction: 220, clamp: true }
  })

  return (
    <>
      <div className="chart-item">
        <div className="chart-label">{label}</div>
        <div className="chart-bar-outside">
          <animated.div className="chart-bar-inside" style={spring} />
        </div>
        <div className="chart-data-label">
          <animated.span>
            {spring.number.interpolate((x) => `${x.toFixed(0)}%`)}
          </animated.span>
        </div>
      </div>

      <style jsx>
        {`
          .chart-item {
            position: relative;
            display: flex;
            flex-direction: row;
            height: 110px;
            margin-bottom: 40px;
          }

          .chart-label {
            font-family: 'Anton', sans-serif;
            font-size: 24px;
            line-height: 1.2;
            text-transform: uppercase;
            text-align: left;
            width: 140px;
            margin-right: 20px;
          }

          .chart-bar-outside {
            position: relative;
            background-color: #4a4a4a;
            flex-grow: 1;
          }

          /* <animated.div> required global style */
          :global(.chart-bar-inside) {
            position: absolute;
            left: 0;
            width: 0%;
            height: 100%;
            background-color: ${UI_COLOR_SECONDARY};
          }

          .chart-data-label {
            font-family: 'Anton', sans-serif;
            font-size: 72px;
            color: ${UI_COLOR_SECONDARY};
            margin-left: 20px;
            width: 140px;
            text-align: left;
          }
        `}
      </style>
    </>
  )
}

function generateRandomTestPercentages () {
  const num1 = Math.random()
  const num2 = Math.random()
  const num3 = Math.random()
  const num4 = Math.random()
  const sum = num1 + num2 + num3 + num4

  return [
    Math.round((num1 / sum) * 100),
    Math.round((num2 / sum) * 100),
    Math.round((num3 / sum) * 100),
    Math.round((num4 / sum) * 100)
  ].sort((a, b) => b - a) // Sorts results so winner is first
}

function VoteResults (props) {
  const [items] = useState([
    'Women & Men Sharing Leadership 50-50',
    'Equal Pay for Equal Work',
    'More Women Voting & Running for Office',
    'Inclusive Education of Women’s History'
  ])
  const [values, setValues] = useState([0, 0, 0, 0])

  // Generate random values inside a useEffect to ensure values
  // on server and client sides match
  useEffect(() => {
    setValues(generateRandomTestPercentages())
  }, [])

  // Sets transition of each result item
  const transitions = useTransition(items, (item) => item, {
    from: { transform: 'translate3d(0, 3vh, 0)', opacity: 0 },
    enter: { transform: 'translate3d(0, 0px, 0)', opacity: 1 },
    leave: { transform: 'translate3d(0, -3vh, 0)', opacity: 0 },
    // Note: this is an unchained animation, so the BarChartItem
    // transitions begin before all the items have transitioned in
    trail: 300
  })

  return transitions.map(({ item, props, key }, index) => (
    <animated.div key={key} style={props}>
      <BarChartItem label={item} value={values[index]} />
    </animated.div>
  ))
}

export default VoteResults
