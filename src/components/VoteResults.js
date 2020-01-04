import React from 'react'
import PropTypes from 'prop-types'
import { useTransition, animated } from 'react-spring'
import BarChartItem from './BarChartItem'

const ITEMS = [
  'Women & Men Sharing Leadership 50-50',
  'Equal Pay for Equal Work',
  'More Women Voting & Running for Office',
  'Inclusive Education of Women’s History'
]

function calculatePercents (results) {
  const sum = results.reduce(
    (accumulator, current) => accumulator + current.count,
    0
  )
  return results
    .map((item) => {
      const calc = item.count / sum
      const value = Number.isNaN(calc) ? 0 : calc * 100
      return {
        ...item,
        value
      }
    })
    .sort((a, b) => b.value - a.value)
}

VoteResults.propTypes = {
  results: PropTypes.shape({
    vote1: PropTypes.number,
    vote2: PropTypes.number,
    vote3: PropTypes.number,
    vote4: PropTypes.number
  })
}

function VoteResults ({ results = {} }) {
  const items = calculatePercents([
    {
      label: ITEMS[0],
      count: (results && results.vote1) || 0
    },
    {
      label: ITEMS[1],
      count: (results && results.vote2) || 0
    },
    {
      label: ITEMS[2],
      count: (results && results.vote3) || 0
    },
    {
      label: ITEMS[3],
      count: (results && results.vote4) || 0
    }
  ])

  // Sets transition of each result item
  const transitions = useTransition(items, (item) => item.label, {
    from: { transform: 'translate3d(0, 3vh, 0)', opacity: 0 },
    enter: { transform: 'translate3d(0, 0px, 0)', opacity: 1 },
    leave: { transform: 'translate3d(0, -3vh, 0)', opacity: 0 },
    // Note: this is an unchained animation, so the BarChartItem
    // transitions begin before all the items have transitioned in
    trail: 300
  })

  return transitions.map(({ item, props, key }, index) => (
    <animated.div key={key} style={props}>
      <BarChartItem label={item.label} value={item.value} />
    </animated.div>
  ))
}

export default VoteResults
