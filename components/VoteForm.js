import React, { useState } from 'react'
import PropTypes from 'prop-types'

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
    console.log(`Voting for: ${checkedValue}`)
    onSubmit(checkedValue)
  }

  return (
    <>
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
      <style jsx>{`
        .vote-form {
          user-select: none;
        
          text-align: center;
          margin-top: 2em;
          font-size: 2vh;
        }

        /* Hides the original input element from view, but not from DOM */
        input {
          position: absolute;

          /* A standard CSS approach for "accessible" visually-hidden elements,
            such as absolutely positioning elements off the page, can still cause
            inputs to be hidden from certain screen readers. This approach hides
            the input visually, but still makes it accessible. For more info:
            https://scottaohara.github.io/a11y_styled_form_controls/src/checkbox/
      
            Furthermore, absolute positioning with 'left' can cause issues when
            the document is in rtl text direction on Chrome. See also
            https://github.com/streetmix/streetmix/issues/1424 */
          opacity: 0.00001;
          appearance: none;
          z-index: 2;
        }

        label {
          height: 3em;
          border-radius: 1.5em;
          border: 3px solid white;
          display: block;
          display: flex;
          justify-content: center;
          align-items: center;
          width: 100%;
          white-space: nowrap;
          text-transform: uppercase;
          padding: 1em;
          margin-bottom: 1em;
          cursor: pointer;
        }

        input:checked + label {
          background-color: #666;
        }
        
        button {
          appearance: none;
          width: 6em;
          height: 3em;
          background-color: white;
          color: black;
          text-transform: uppercase;
          display: flex;
          justify-content: center;
          align-items: center;
          border-radius: 1.5em;
          margin: 0 auto;
          margin-top: 1em;
          font-size: 1em;
          cursor: pointer;
          margin-top: 1em;
          border: 0;
        }

        button:disabled {
          background-color: gray;
          cursor: default;
        }
      `}
      </style>
    </>
  )
}

export default VoteForm
