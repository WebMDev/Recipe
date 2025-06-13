import React from 'react';
import Hero from '../components/Hero';
import Rating_FoodView from '../utility/Rating_FoodView';
import Recipes from '../components/Recipes';
import FoodTypes from '../components/FoodTypes';

const Home = () => {
  return (
    <>
      <Hero />
      <Rating_FoodView />
      <Recipes />
      <FoodTypes />
    </>
  )
}

export default Home;