import React, { useState } from 'react'
import PropTypes from 'prop-types'
import './VoteForm.scss'

VoteForm.propTypes = {
  onSubmit: PropTypes.func
}

function VoteForm (props) {
  const { onSubmit = () => {} } = props
  const [checkedValue, setCheckedValue] = useState(null)

  function handleOptionChange (event) {
    if (event.target.value === checkedValue) {
      setCheckedValue(null)
    } else {
      setCheckedValue(event.target.value)
    }
  }

  function handleSubmit (event) {
    event.preventDefault()
    onSubmit(checkedValue)
  }

  return (
    <form className="vote-form" onSubmit={handleSubmit}>
      <div>
        <input type="checkbox" id="vote1" name="vote1" value="1" checked={checkedValue === '1'} onChange={handleOptionChange} />
        <label htmlFor="vote1">Women & Men Sharing Leadership 50-50</label>
      </div>
      <div>
        <input type="checkbox" id="vote2" name="vote1" value="2" checked={checkedValue === '2'} onChange={handleOptionChange} />
        <label htmlFor="vote2">Equal Pay for Equal Work</label>
      </div>
      <div>
        <input type="checkbox" id="vote3" name="vote1" value="3" checked={checkedValue === '3'} onChange={handleOptionChange} />
        <label htmlFor="vote3">More Women Voting & Running for Office</label>
      </div>
      <div>
        <input type="checkbox" id="vote4" name="vote1" value="4" checked={checkedValue === '4'} onChange={handleOptionChange} />
        <label htmlFor="vote4">Inclusive Education of Women's History</label>
      </div>
      <p>
        <button type="submit" disabled={checkedValue === null}>Vote</button>
      </p>
    </form>
  )
}

export default VoteForm
