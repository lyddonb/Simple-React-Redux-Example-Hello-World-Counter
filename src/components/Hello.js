import React from 'react'

const Hello = ( {onClickPlus, onClickMinus, message} ) => {
  return(
    <div>
      <h2>{message}</h2>
        <button onClick={onClickPlus}>+</button>
        <button onClick={onClickMinus}>-</button>
    </div>
  )
}

export default Hello
