import React from 'react'
import NavButton from './NavButton'
import { UI_COLOR_SECONDARY } from '../const'

function UIButton (props) {
  return (
    <NavButton
      {...props}
      style={{
        backgroundColor: 'black',
        borderColor: UI_COLOR_SECONDARY,
        color: UI_COLOR_SECONDARY
      }}
    />
  )
}

export default UIButton
