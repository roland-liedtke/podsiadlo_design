// Step 1: Import React
import * as React from 'react'
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'

// Step 2: Define your component
const IndexPage = () => {
  return (
    <main>
      <h1>Welcome to my Gatsby site!</h1>
      <Link to="/kontakt">Kontakt</Link>
      <Link to="/oferta">Oferta</Link>
      <Link to="/publikacje">Publikacje</Link>
      <Link to="/onas">O nas</Link>
      <p>I'm making this by following the Gatsby Tutorial.</p>
      <StaticImage
        alt="Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera"
        src="https://pbs.twimg.com/media/E1oMV3QVgAIr1NT?format=jpg&name=large"
      />
    </main>
  )
}

// You'll learn about this in the next task, just copy it for now
export const Head = () => (
  <>
    <title>About Me</title>
    <meta name="description" content="Your description" />
  </>
)

// Step 3: Export your component
export default IndexPage