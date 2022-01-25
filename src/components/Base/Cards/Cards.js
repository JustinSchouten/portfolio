import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>About me!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
                src='images/img-9.jpg'
                text='My hobby s'
                label='Adventure'
                path='/services'
            />
            <CardItem
                src='images/img-2.jpg'
                text='My Work'
                label='Luxury'
                path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
                src='images/img-3.jpg'
                text='My vacations'
                label='Mystery'
                path='/services'
            />
            <CardItem
                src='images/img-4.jpg'
                text='My reference'
                label='Adventure'
                path='/products'
            />
            <CardItem
                src='images/img-9.jpg'
                text='My CV'
                label='Adventure'
                path='/services'
            />
            <CardItem
                src='images/img-2.jpg'
                text='Travel through the Islands of Bali in a Private Cruise'
                label='Luxury'
                path='/services'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
