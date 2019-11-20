import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import VoteButton from './VoteButton'

VoteForm.propTypes = {
  onSubmit: PropTypes.func
}

function VoteForm (props) {
  const { onSubmit = () => {} } = props
  const [checkedValue, setCheckedValue] = useState(null)

  function handleOptionChange (event) {
    // Only vote once
    if (checkedValue === null) {
      setCheckedValue(event.target.value)
    }
  }

  function handleSubmit (event) {
    event.preventDefault()
    console.log(`Voting for: ${checkedValue}`)
    onSubmit(checkedValue)
  }

  useEffect(() => {
    // Basically the same as handleSubmit but we handle it immediately on
    // selection. (The other function is kept for the record.) We do not
    // use the HTML DOM method .submit() because the event handler is
    // defined in React, not in HTML DOM.
    if (checkedValue !== null) {
      console.log(`Voting for: ${checkedValue}`)
      window.setTimeout(() => {
        onSubmit(checkedValue)
      }, 500)
    }
  }, [checkedValue, onSubmit])

  return (
    <>
      <form className="vote-form" onSubmit={handleSubmit}>
        <VoteButton
          name="vote1"
          value="1"
          checked={checkedValue === '1'}
          onChange={handleOptionChange}
          label="Women & Men Sharing Leadership 50-50"
        />
        <VoteButton
          name="vote1"
          value="2"
          checked={checkedValue === '2'}
          onChange={handleOptionChange}
          label="Equal Pay for Equal Work"
        />
        <VoteButton
          name="vote1"
          value="3"
          checked={checkedValue === '3'}
          onChange={handleOptionChange}
          label="More Women Voting & Running for Office"
        />
        <VoteButton
          name="vote1"
          value="4"
          checked={checkedValue === '4'}
          onChange={handleOptionChange}
          label="Inclusive Education of Women's History"
        />
      </form>
      <style jsx>
        {`
          .vote-form {
            user-select: none;

            text-align: center;
            margin-top: 2em;
            font-size: 2vh;
          }
        `}
      </style>
    </>
  )
}

export default VoteForm
