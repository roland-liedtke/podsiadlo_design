// Step 1: Import React
import * as React from 'react'

// Step 2: Define your component
const SingleOffer = ({children}) => {
  return (
    <div>
        <p>OFERTA</p>
        {children}
    </div>
  )
}

// Step 3: Export your component
export default SingleOffer