import React, { useState } from 'react'
import PropTypes from 'prop-types'

DemographicsForm.propTypes = {
  onSubmit: PropTypes.func
}

function DemographicsForm (props) {
  const { onSubmit = () => {} } = props
  const [formState, setFormState] = useState({})

  function handleOptionChange (event) {
    console.log(event.target.name, event.target.value)
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
          <h3>Age</h3>
          <div className="selection age-selection">
            <span>
              <input
                type="radio"
                id="age1"
                name="age"
                onChange={handleOptionChange}
                checked={formState.age === 'age-under18'}
                value="age-under18"
              />
              <label htmlFor="age1">Under 18</label>
            </span>
            <span>
              <input
                type="radio"
                id="age2"
                name="age"
                onChange={handleOptionChange}
                checked={formState.age === 'age-18-34'}
                value="age-18-34"
              />
              <label htmlFor="age2">18–34</label>
            </span>
            <span>
              <input
                type="radio"
                id="age3"
                name="age"
                onChange={handleOptionChange}
                checked={formState.age === 'age-35-64'}
                value="age-35-64"
              />
              <label htmlFor="age3">35–64</label>
            </span>
            <span>
              <input
                type="radio"
                id="age4"
                name="age"
                onChange={handleOptionChange}
                checked={formState.age === 'age-65plus'}
                value="age-65plus"
              />
              <label htmlFor="age4">65+</label>
            </span>
          </div>
        </div>
        <div className="form-section">
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
        </div>
        <p className="buttons">
          <button type="submit">Submit</button>
          <button>Skip</button>
        </p>
      </form>
      <style jsx>{`
        .demo-form {
          user-select: none;
          font-size: 2vh;
          width: 90%;
          margin: 3em auto 0;

          border-top: 0.35vh solid white;
        }

        h3 {
          text-align: left;
          font-size: 2vh;
          font-style: italic;
          font-weight: normal;
        }

        .form-section {
          border-bottom: 1px solid white;
          padding-bottom: 1em;
        }

        .selection {
          display: flex;
          flex-direction: row;
          justify-content: space-between;
        }

        .column {
          text-align: left;
        }

        input {
          margin-right: 1em;
        }

        input:checked + label {
          color: yellow;
        }

        .buttons {
          display: flex;
          flex-direction: row;

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

        button:not([type="submit"]) {
          background-color: black;
          color: white;
          border: 4px solid white;
        }
      `}
      </style>
    </>
  )
}

export default DemographicsForm
