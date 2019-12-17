import React from 'react'
import PropTypes from 'prop-types'
import { ParallaxLayer } from '@react-spring/parallax'
import ParseText from './ParseText'
import Image from '../Image'

ContextCenterQuote.propTypes = {
  offset: PropTypes.number,
  context: PropTypes.shape({
    page: PropTypes.number
  })
}

function ContextCenterQuote ({ offset, context = {} }) {
  return (
    <React.Fragment key={context.page}>
      {/* Images */}
      <ParallaxLayer offset={offset} speed={1}>
        <div
          className="image-container"
          style={{
            top: '10%',
            width: '50%',
            left: '25%'
          }}
        >
          {context.images.map((image, index) => {
            return (
              <Image
                key={image}
                src={`/media/images/${image}`}
                className="lightbox"
                alt=""
              />
            )
          })}
        </div>
      </ParallaxLayer>

      {/* Text */}
      <ParallaxLayer
        offset={offset}
        speed={0.5}
        style={{ pointerEvents: 'none' }}
      >
        <div
          style={{
            textAlign: 'center',
            width: '40%',
            marginLeft: '30%',
            marginTop: '20%'
          }}
          className="context-align-center"
        >
          <ParseText text={context.text} />
        </div>
      </ParallaxLayer>
    </React.Fragment>
  )
}

export default ContextCenterQuote
