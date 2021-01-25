import React, { useState } from 'react'
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
      const vote = event.target.value
      setCheckedValue(vote)

      // Submit immediately on click.
      window.setTimeout(() => {
        console.log(`Voting for: ${vote}`)
        onSubmit(vote)
      }, 500)
    }
  }

  return (
    <>
      <form className="vote-form">
        <VoteButton
          name="vote1"
          value="1"
          checked={checkedValue === '1'}
          onChange={handleOptionChange}
          label="Women and Men Sharing Leadership 50-50"
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
          label="More Women Voting and Running for Office"
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
            max-width: 680px;
            margin: 0 auto;
            margin-bottom: 10vh;
          }
        `}
      </style>
    </>
  )
}

export default VoteForm
