import React from 'react'
import Hero from '../components/Hero/Hero'
import NewCollections from '../components/NewCollection/NewCollections'
import NewsLetter from '../components/NewsLetter/NewsLetter'

const Shop = () => {
  return (
    <div>
      <Hero/>
      <popular/>
      <offers/>
      <NewCollections/>
      <NewsLetter/>
    </div>
  )
}

export default Shop
