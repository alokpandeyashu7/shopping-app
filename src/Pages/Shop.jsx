import React from 'react'
import Hero from '../components/Hero/Hero'
import Popular from '../components/Popular.jsx/Popular'
import Offers from '../components/Offers/Offers'
import NewCollections from '../components/NewCollections/NewCollections'
import NewsLater from '../components/NewsLater/NewsLater'
const Shop = () => {
  return (
    <div>
      <Hero/>
      <Popular/>
   <Offers/>
   <NewCollections/>
   <NewsLater/>
   
    </div>
  )
}

export default Shop