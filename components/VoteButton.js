import React from 'react'
import PropTypes from 'prop-types'
import uniqueId from 'lodash/uniqueId'
import {
  MOBILE_BREAKPOINT,
  UI_COLOR_SECONDARY,
  UI_BUTTON_BORDER_SM,
  UI_BUTTON_BORDER_LG,
  TYPE_BUTTON_SM,
  TYPE_BUTTON_LG
} from '../main/const'

VoteButton.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  checked: PropTypes.bool,
  onChange: PropTypes.func,
  label: PropTypes.string.isRequired
}

function VoteButton ({
  name,
  value,
  checked = false,
  onChange = () => {},
  label,
  ...rest
}) {
  const id = uniqueId('vote-button_')

  return (
    <div>
      <input
        type="radio"
        id={id}
        name={name}
        value={value}
        checked={checked}
        onChange={onChange}
        {...rest}
      />
      <label htmlFor={id}>{label}</label>

      <style jsx>
        {`
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
            display: flex;
            justify-content: center;
            align-items: center;
            width: 100%;

            margin-bottom: 0.5em;
            cursor: pointer;

            padding: 0.1em 0.55em;
            text-decoration: none;
            font-family: 'Anton', sans-serif;
            font-size: ${TYPE_BUTTON_LG};
            text-transform: uppercase;
            white-space: nowrap;
            pointer-events: auto;

            background-color: black;
            color: white;
            border: ${UI_BUTTON_BORDER_LG} solid ${UI_COLOR_SECONDARY};
          }

          @media screen and (max-width: ${MOBILE_BREAKPOINT}),
            screen and (orientation: landscape) {
            label {
              font-size: ${TYPE_BUTTON_SM};
              border-width: ${UI_BUTTON_BORDER_SM};
            }
          }

          input:active + label {
            background-color: ${UI_COLOR_SECONDARY};
            color: black;
          }

          input:checked + label {
            background-color: ${UI_COLOR_SECONDARY};
            color: black;

            animation-name: color-pulse;
            animation-duration: 250ms;
            animation-iteration-count: 2;
            animation-timing-function: steps(2, start);
          }

          @keyframes color-pulse {
            100% {
              background-color: rgba(237, 219, 90, 1);
            }
            0% {
              background-color: rgba(237, 219, 90, 0.2);
            }
          }
        `}
      </style>
    </div>
  )
}

export default VoteButton
