import React from 'react'
import PropTypes from 'prop-types'

PageDots.propTypes = {
  pages: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired
}

function PageDots ({ pages, currentPage }) {
  // Given number of pages create an array like [0, 1, 2, ...]
  const arr = [...Array(pages).keys()]

  return (
    <>
      <div className="dots">
        {arr.map((id) => {
          const classNames = ['dot']

          // Note: `currentPage` is "human-readable" (indexed at 1)
          if (currentPage - 1 === id) {
            classNames.push('dot-active')
          }

          return <div key={id} className={classNames.join(' ')} />
        })}
      </div>

      <style jsx>
        {`
          .dots {
            display: flex;
            flex-direction: row;
            width: 60px;
            justify-content: space-between;
            margin: 0 auto;
          }

          .dot {
            width: 6px;
            height: 6px;
            border-radius: 50%;
            background-color: #4a4a4a;
            transition: background-color 120ms ease;
          }

          .dot-active {
            background-color: white;
          }
        `}
      </style>
    </>
  )
}

export default PageDots
