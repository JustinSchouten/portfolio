import React from 'react';
import '../../App.css';
import Footer from "../Base/Build/Footer";
import CardItem from "../Base/Cards/CardItem";
import HeroSectionProjects from "../Base/HeroSections/HeroSectionProjects";

export default function Projecten() {
  return (
      <>
        <HeroSectionProjects />
          <div className='cards'>
              <h1>Check my projects!</h1>
              <div className='cards__container'>
                  <div className='cards__wrapper'>
                      <ul className='cards__items'>
                          <CardItem
                              src='images/img-9.jpg'
                              text='Connect Four'
                              label='Adventure'
                              path='/services'
                          />
                          <CardItem
                              src='images/img-2.jpg'
                              text='Tic Tac Toe'
                              label='Luxury'
                              path='/services'
                          />
                      </ul>
                      <ul className='cards__items'>
                          <CardItem
                              src='images/img-3.jpg'
                              text='Symfony Website (HealthOne)'
                              label='Mystery'
                              path='/services'
                          />
                          <CardItem
                              src='images/img-4.jpg'
                              text='Java Game (Platform 2D)'
                              label='Adventure'
                              path='/products'
                          />
                      </ul>
                      <ul className='cards__items'>
                          <CardItem
                              src='images/img-9.jpg'
                              text='coming soon!'
                              label='Adventure'
                              path='/services'
                          />
                          <CardItem
                              src='images/img-2.jpg'
                              text='coming soon!'
                              label='Luxury'
                              path='/services'
                          />
                      </ul>
                  </div>
              </div>
          </div>
        <Footer />
      </>
  );
}
