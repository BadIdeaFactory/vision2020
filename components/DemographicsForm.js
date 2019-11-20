import React, { useState } from 'react'
import PropTypes from 'prop-types'
import VoteButton from './VoteButton'
import UIButton from './UIButton'
import { UI_COLOR_SECONDARY } from '../main/const'

DemographicsForm.propTypes = {
  onSubmit: PropTypes.func
}

function DemographicsForm (props) {
  const { onSubmit = () => {} } = props
  const [formState, setFormState] = useState({})

  function handleOptionChange (event) {
    console.log(
      `Demographics form: ${event.target.name} = ${event.target.value}`
    )
    setFormState({
      ...formState,
      [event.target.name]: event.target.value
    })
  }

  function handleSubmit (event) {
    event.preventDefault()
    onSubmit(formState)
  }

  return (
    <>
      <form className="demo-form" onSubmit={handleSubmit}>
        <div className="form-section">
          <h3>Your Age</h3>
          <div className="selection age-selection">
            <VoteButton
              name="age"
              value="age-under18"
              checked={formState.age === 'age-under18'}
              onChange={handleOptionChange}
              label="Under 18"
            />
            <VoteButton
              name="age"
              value="age-18-34"
              checked={formState.age === 'age-18-34'}
              onChange={handleOptionChange}
              label="18 – 34"
            />
            <VoteButton
              name="age"
              value="age-35-64"
              checked={formState.age === 'age-35-64'}
              onChange={handleOptionChange}
              label="35 – 64"
            />
            <VoteButton
              name="age"
              value="age-65plus"
              checked={formState.age === 'age-65plus'}
              onChange={handleOptionChange}
              label="65+"
            />
          </div>
        </div>
        {/* <div className="form-section">
          <h3>Gender</h3>
          <div className="selection">
            <span>
              <input
                type="radio"
                id="gender1"
                name="gender"
                onChange={handleOptionChange}
                checked={formState.gender === 'female'}
                value="female"
              />
              <label htmlFor="gender1">Female</label>
            </span>
            <span>
              <input
                type="radio"
                id="gender2"
                name="gender"
                onChange={handleOptionChange}
                checked={formState.gender === 'male'}
                value="male"
              />
              <label htmlFor="gender2">Male</label>
            </span>
            <span>
              <input
                type="radio"
                id="gender3"
                name="gender"
                onChange={handleOptionChange}
                checked={formState.gender === 'nonbinary'}
                value="nonbinary"
              />
              <label htmlFor="gender3">Non-binary</label>
            </span>
          </div>
        </div>
        <div className="form-section">
          <h3>Ethnicity</h3>
          <div className="selection">
            <div className="column">
              <div>
                <input
                  type="radio"
                  id="ethnicity1"
                  name="ethnicity"
                  onChange={handleOptionChange}
                  checked={formState.ethnicity === 'white'}
                  value="white"
                />
                <label htmlFor="ethnicity1">White</label>
              </div>
              <div>
                <input
                  type="radio"
                  id="ethnicity2"
                  name="ethnicity"
                  onChange={handleOptionChange}
                  checked={formState.ethnicity === 'asian'}
                  value="asian"
                />
                <label htmlFor="ethnicity2">Asian</label>
              </div>
              <div>
                <input
                  type="radio"
                  id="ethnicity3"
                  name="ethnicity"
                  onChange={handleOptionChange}
                  checked={formState.ethnicity === 'mixed'}
                  value="mixed"
                />
                <label htmlFor="ethnicity3">Mixed</label>
              </div>
              <div>
                <input
                  type="radio"
                  id="ethnicity4"
                  name="ethnicity"
                  onChange={handleOptionChange}
                  checked={formState.ethnicity === 'other'}
                  value="other"
                />
                <label htmlFor="ethnicity4">Other</label>
              </div>
            </div>
            <div className="column">
              <div>
                <input
                  type="radio"
                  id="ethnicity5"
                  name="ethnicity"
                  onChange={handleOptionChange}
                  checked={formState.ethnicity === 'black'}
                  value="black"
                />
                <label htmlFor="ethnicity5">Black / African American</label>
              </div>
              <div>
                <input
                  type="radio"
                  id="ethnicity6"
                  name="ethnicity"
                  onChange={handleOptionChange}
                  checked={formState.ethnicity === 'hispanic'}
                  value="hispanic"
                />
                <label htmlFor="ethnicity6">Hispanic / Latino</label>
              </div>
              <div>
                <input
                  type="radio"
                  id="ethnicity7"
                  name="ethnicity"
                  onChange={handleOptionChange}
                  checked={formState.ethnicity === 'native'}
                  value="native"
                />
                <label htmlFor="ethnicity7">American Indian / Alaska Native</label>
              </div>
              <div>
                <input
                  type="radio"
                  id="ethnicity8"
                  name="ethnicity"
                  onChange={handleOptionChange}
                  checked={formState.ethnicity === 'pacific'}
                  value="pacific"
                />
                <label htmlFor="ethnicity8">Native Hawaiian / Pacific Islander</label>
              </div>
            </div>
          </div>
        </div>
        <div className="form-section">
          <h3>Location</h3>
          <div className="selection">
            <span>
              <input
                type="radio"
                id="location1"
                name="location"
                onChange={handleOptionChange}
                checked={formState.location === 'philadelphia'}
                value="philadelphia"
              />
              <label htmlFor="location1">Philadelphia</label>
            </span>
            <span>
              <input
                type="radio"
                id="location2"
                name="location"
                onChange={handleOptionChange}
                checked={formState.location === 'us'}
                value="us"
              />
              <label htmlFor="location2">U.S.</label>
            </span>
            <span>
              <input
                type="radio"
                id="location3"
                name="location"
                onChange={handleOptionChange}
                checked={formState.location === 'international'}
                value="international"
              />
              <label htmlFor="location3">International</label>
            </span>
          </div>
        </div> */}
        <div className="buttons">
          <UIButton>Skip</UIButton>
        </div>
      </form>
      <style jsx>
        {`
          .demo-form {
            user-select: none;
            font-size: 2vh;
            width: 90%;
            margin: 3em auto 0;
          }

          h3 {
            font-size: 60px;
            color: ${UI_COLOR_SECONDARY};
          }

          .selection {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
          }

          .age-selection {
            width: 300px;
            margin: 0 auto;
          }

          .buttons {
            margin-top: 2em;
            text-align: center;
          }
        `}
      </style>
    </>
  )
}

export default DemographicsForm
