import React from 'react'
import NavButton from './NavButton'
import { UI_COLOR_SECONDARY } from '../main/const'

function MainBUtton (props) {
  return (
    <NavButton
      {...props}
      style={{
        backgroundColor: UI_COLOR_SECONDARY,
        borderColor: UI_COLOR_SECONDARY,
        color: 'black'
      }}
    />
  )
}

export default MainBUtton
