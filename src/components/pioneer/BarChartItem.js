import React from 'react'
import PropTypes from 'prop-types'
import { useSpring, animated } from 'react-spring'
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
