import React, { useState } from 'react'
import PropTypes from 'prop-types'
import VoteButton from './VoteButton'
import { UI_COLOR_SECONDARY } from '../main/const'

// Each page of the demographics form
DemographicsSection.propTypes = {
  heading: PropTypes.string.isRequired,
  formName: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired
    })
  ).isRequired,
  handleChange: PropTypes.func
}

function DemographicsSection (props) {
  const { heading, formName, options, handleChange = () => {} } = props
  const [pickedValue, setPickedValue] = useState(null)

  function handleOptionChange (event) {
    setPickedValue(event.target.value)

    console.log(
      `Demographics form: ${event.target.name} = ${event.target.value}`
    )

    event.persist()
    window.setTimeout(() => {
      handleChange(event)
    }, 500)
  }

  function makeSelectionItem (item) {
    const key = `${formName}-${item.value}`

    return (
      <VoteButton
        key={key}
        name={formName}
        value={key}
        checked={pickedValue === key}
        onChange={handleOptionChange}
        label={item.label}
      />
    )
  }

  return (
    <>
      <div className="form-section">
        <h3>{heading}</h3>
        {/* If options length > 4, make a two column layout. This is basically
        a special case for the Ethnicity selection */}
        {options.length <= 4 ? (
          <div className="demographic-selection">
            {options.map(makeSelectionItem)}
          </div>
        ) : (
          <div className="row">
            <div className="column" style={{ marginRight: '16px' }}>
              {options.slice(0, 4).map(makeSelectionItem)}
            </div>
            <div className="column">
              {options.slice(4, 8).map(makeSelectionItem)}
            </div>
          </div>
        )}
      </div>
      <style jsx>
        {`
          h3 {
            font-size: 60px;
            font-size: 3.125vh;
            color: ${UI_COLOR_SECONDARY};
            white-space: nowrap;
          }

          .demographic-selection {
            height: 400px; /* Position elements in the same place on screen */
            width: 300px;
            margin: 0 auto;
          }

          .form-section {
            margin-bottom: 5vh;
          }

          .row {
            height: 400px; /* Position elements in the same place on screen */
            display: flex;
            justify-content: center;
          }
        `}
      </style>
    </>
  )
}

export default DemographicsSection
