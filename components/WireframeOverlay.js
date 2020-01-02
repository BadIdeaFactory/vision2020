import React, { useState } from 'react'

/**
 * I've set up a full scale mockup with a projector and tested the wireframes.
 * One thing to note is that all active hit areas must stay 48"H and below to
 * stay ADA compliant. This will change the layout of the menu, poll, and
 * survey to accommodate a lower third hit area.
 *
 * Also marked is an average eye level height of 60" and comfortable field of
 * vision to orient the most important information for myself at 5'6".
 *
 * - Lynn
 */
// Wireframe can be enabled by setting DEV_ADA_WIREFRAME=true in env vars
export default function WireframeOverlay (props) {
  const [isActive, setActive] = useState(false)

  function handleToggle () {
    setActive(!isActive)
  }

  if (process.env.DEV_ADA_WIREFRAME === true) {
    return (
      <>
        <div className="wireframe-overlay">
          <button onClick={handleToggle}>{isActive ? '🔶' : '🔷'}</button>
          {isActive && (
            <>
              <div className="wireframe-overlay-eye">EYE 60”</div>
              <div className="wireframe-overlay-ada">ADA 48”</div>
              <div className="wireframe-overlay-field">
                <span>FIELD OF VISION</span>
              </div>
            </>
          )}
        </div>
        <style jsx>
          {`
            .wireframe-overlay {
              position: fixed;
              top: 0;
              left: 0;
              width: 1080px;
              height: 1920px;
              user-select: none;
              pointer-events: none;
              z-index: 1000;
              font-family: Courier, monospace;
              font-size: 36px;
              display: none; /* Usually hidden unless we're on the exhibit displays */
            }

            @media screen and (min-width: 1080px) and (min-height: 1920px) {
              .wireframe-overlay {
                display: block;
              }
            }

            .wireframe-overlay-eye {
              position: absolute;
              bottom: 1216px;
              width: 100%;
              color: cyan;
              border-bottom: 1px solid cyan;
              padding: 6px 18px;
            }

            .wireframe-overlay-ada {
              position: absolute;
              bottom: 712px;
              width: 100%;
              color: red;
              border-bottom: 1px solid red;
              padding: 6px 18px;
            }

            .wireframe-overlay-field {
              position: absolute;
              left: 303px;
              top: 465px;
              width: 507px;
              height: 820px;
              background-color: rgba(220, 249, 0, 0.25);
            }

            .wireframe-overlay-field span {
              margin-top: -40px;
              width: 100%;
              text-align: center;
              display: block;
              color: green;
            }

            button {
              pointer-events: auto;
              appearance: none;
              font-size: 36px;
              background-color: transparent;
              position: absolute;
              top: 30px;
              left: 30px;
              border: 0;
            }
          `}
        </style>
      </>
    )
  }

  return null
}
