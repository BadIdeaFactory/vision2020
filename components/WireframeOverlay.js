import React from 'react'

export default function WireframeOverlay (props) {
  return (
    <>
      <div className="wireframe-overlay">
        <div className="wireframe-overlay-eye">EYE 60”</div>
        <div className="wireframe-overlay-ada">ADA 48”</div>
        <div className="wireframe-overlay-field">
          <span>FIELD OF VISION</span>
        </div>
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
          }
          .wireframe-overlay-eye {
            position: absolute;
            bottom: 1134px;
            width: 100%;
            color: cyan;
            border-bottom: 1px solid cyan;
            padding: 6px 18px;
          }
          .wireframe-overlay-ada {
            position: absolute;
            bottom: 632px;
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
        `}
      </style>
    </>
  )
}
