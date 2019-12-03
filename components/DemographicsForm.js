import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import PageDots from './PageDots'
import UIButton from './UIButton'
import DemographicsSection from './DemographicsSection'

DemographicsForm.propTypes = {
  onSubmit: PropTypes.func
}

function DemographicsForm (props) {
  const { onSubmit = () => {} } = props
  const [formState, setFormState] = useState({})
  const [page, setPage] = useState(1)

  function handleOptionChange (event) {
    setFormState({
      ...formState,
      [event.target.name]: event.target.value
    })
    setPage((page) => page + 1)
  }

  function handleSubmit (event) {
    event.preventDefault()
    onSubmit(formState)
  }

  function handleSkip (event) {
    event.preventDefault()
    setPage((page) => page + 1)
  }

  useEffect(() => {
    if (page === 5) {
      onSubmit(formState)
    }
  }, [formState, page, onSubmit])

  return (
    <>
      <form className="demo-form" onSubmit={handleSubmit}>
        <PageDots pages={4} currentPage={page} />
        {page === 1 && (
          <DemographicsSection
            heading="Your Age"
            formName="age"
            options={[
              { value: 'under-18', label: 'Under 18' },
              { value: '18-34', label: '18 – 34' },
              { value: '35-64', label: '35 – 64' },
              { value: '65plus', label: '65+' }
            ]}
            handleChange={handleOptionChange}
          />
        )}
        {page === 2 && (
          <DemographicsSection
            heading="Gender"
            formName="gender"
            options={[
              { value: 'female', label: 'Female' },
              { value: 'male', label: 'Male' },
              { value: 'nonbinary', label: 'Non-binary' }
            ]}
            handleChange={handleOptionChange}
          />
        )}
        {page === 3 && (
          <DemographicsSection
            heading="Ethnicity"
            formName="ethnicity"
            options={[
              { value: 'white', label: 'White' },
              { value: 'asian', label: 'Asian' },
              { value: 'mixed', label: 'Mixed' },
              { value: 'other', label: 'Other' },
              { value: 'black', label: 'Black / African American' },
              { value: 'hispanic', label: 'Hispanic / Latino' },
              { value: 'native', label: 'American Indian / Alaska Native' },
              { value: 'pacific', label: 'Native Hawaiian / Pacific Islander' }
            ]}
            handleChange={handleOptionChange}
          />
        )}
        {page === 4 && (
          <DemographicsSection
            heading="Location"
            formName="location"
            options={[
              { value: 'philadelphia', label: 'Philadelphia' },
              { value: 'us', label: 'U.S.' },
              { value: 'international', label: 'International' }
            ]}
            handleChange={handleOptionChange}
          />
        )}
        <div className="buttons">
          <UIButton onClick={handleSkip}>Skip</UIButton>
        </div>
      </form>
      <style jsx>
        {`
          .demo-form {
            user-select: none;
            width: 90%;
            margin: 2em auto 0;
          }

          .buttons {
            text-align: center;
          }
        `}
      </style>
    </>
  )
}

export default DemographicsForm
