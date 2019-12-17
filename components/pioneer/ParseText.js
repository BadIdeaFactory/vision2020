import React from 'react'
import PropTypes from 'prop-types'
import ReactMarkdown from 'react-markdown'

ParseText.propTypes = {
  text: PropTypes.string.isRequired
}

function ParseText ({ text }) {
  return (
    <ReactMarkdown
      source={text}
      className="context"
      unwrapDisallowed
      disallowedTypes={['link', 'linkReference']}
    />
  )
}

export default ParseText
