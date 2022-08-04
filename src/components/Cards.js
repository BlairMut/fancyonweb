import React from 'react'
import CardItem from './CardItem'
import './Cards.css'

function Cards() {
  return (
    <div className='cards'>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/arrival.jpg'
              text='Check out the latest styles.'
              label='New Arrival'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/men.jpg'
              text="Men's fashion "
              label='Men'
              path='/men'
            />
            <CardItem
              src='images/women.jpg'
              text="Women's fashion"
              label='Women'
              path='/women'
            />
            {/* 
            <CardItem
              src='images/img-3.jpg'
              text='Set Sail in the Atlantic Ocean visiting Uncharted Waters'
              label='Mystery'
              path='/services'
            />
            <CardItem
              src='images/img-4.jpg'
              text='Experience Football on Top of the Himilayan Mountains'
              label='Adventure'
              path='/products'
            />
            <CardItem
              src='images/img-8.jpg'
              text='Ride through the Sahara Desert on a guided camel tour'
              label='Adrenaline'
              path='/sign-up'
            />*/}
          </ul> 
        </div>
      </div>
    </div>
  )
}

export default Cards