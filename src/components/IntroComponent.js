import React from 'react'
import './IntroComponent.css';
import { useEffect, useState } from 'react';
import useContentful from '../useContentful';
import Cards from './Cards'
import NewArrivalCards from '../NewArrivalCards';

function IntroComponent() {
  const [arrival, setArrival] = useState([]);
  const { getMen } = useContentful();

  useEffect(() => {
    getMen().then(response => setArrival(response))
  });
  return (


    <div className='intro-container'>
      <h1>Fancyon</h1>
      <p>Want the latest styles?...We got them!</p>
      <Cards/>
      {/* {
        arrival.map((arrival, index) => (
          <NewArrivalCards key={index} arrival={arrival} />))
      } */}
    </div>
  )
}

export default IntroComponent