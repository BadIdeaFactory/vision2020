import React, { useRef, useEffect } from 'react'

function SwipePrompt (props) {
  const el = useRef(null)

  useEffect(() => {
    const timer = window.setTimeout(() => {
      if (el.current && el.current.style) {
        el.current.style.opacity = 1
      }
    }, 1000)

    return () => {
      window.clearTimeout(timer)
    }
  })

  return (
    <>
      <div className="swipe-prompt" ref={el}>
        Swipe for more
      </div>
      <style jsx>
        {`
          .swipe-prompt {
            position: fixed;
            width: 100%;
            /* Place below chevron on attract mode */
            bottom: 1.5em;
            pointer-events: none;
            font-style: italic;
            text-align: center;
            opacity: 0;
            transition: opacity 500ms;
          }
        `}
      </style>
    </>
  )
}

export default SwipePrompt
