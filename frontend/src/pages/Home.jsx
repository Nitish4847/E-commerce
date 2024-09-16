import React from 'react'
import Shop from './Shop'
import Popular from '../components/Popular/Popular'
import Offers from '../components/Offers/Offers'

function Home() {
  return (
    <div>
      <Shop/>
      <Popular/>
      <Offers/>
    </div>
  )
}

export default Home
