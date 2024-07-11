// Step 1: Import React
import * as React from 'react'
import { button } from './roundedButton.module.css'


// Step 2: Define your component
const RoundedButton = () => {
  return (
    <button className={ button }>Zamów projekt</button>
  )
}

// Step 3: Export your component
export default RoundedButton