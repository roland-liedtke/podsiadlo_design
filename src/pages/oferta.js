// Step 1: Import React
import * as React from 'react';
import RoundedButton from '../components/roundedButton';
import SingleOffer from '../components/singleOffer';

// Step 2: Define your component
const OfferPage = () => {
  return (
    <main>
      <h1>Oferta</h1>
      <SingleOffer>
        <RoundedButton></RoundedButton>
      </SingleOffer>
    </main>
  )
}

// Step 3: Export your component
export default OfferPage
