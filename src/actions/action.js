import { PLUS, MINUS } from './../constants/constants.js'

export const increment = () => {
  console.log('+ action created')
  return {
    type: PLUS,
  }
}
export const decrement = () => {
  console.log('- action created')
  return {
    type: MINUS,
  }
}
