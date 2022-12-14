import React, {useEffect, useState} from 'react'
import Navbar from '../components/Navbar'
import Showcase from '../components/sections/Showcase'
import ShowcaseCardBigSmall from '../components/sections/ShowcaseCardBigSmall'
import FeaturedProducts from '../components/sections/FeaturedProducts'
import ShowcaseCardDouble from '../components/sections/ShowcaseCardDouble'
import OurSpeciality from '../components/sections/OurSpeciality'
import BigSquareWCards from '../components/sections/BigSquareWCards'
import SaleBanner from '../components/sections/SaleBanner'
import TrippleColumnProducts from '../components/TrippleColumnProducts'
import InfoIcons from '../components/InfoIcons'
import Footer from '../components/Footer'
import { ProductContext, IProductContext } from '../contexts/ProductContext'

const HomeView = () => {
  // window.top.document.title = 'Fixxo.'
  const {products, getAll, getTagFeatured, getTag} = React.useContext(ProductContext) as IProductContext

  useEffect(() => {
    getAll()
    
  }, [])
  
  let featuredTag = products.filter(x => x.tag == "featured")
  let square1Tag = products.filter(x => x.tag == "square1")
  let square2Tag = products.filter(x => x.tag == "square2")
  let latestTag = products.filter(x => x.tag == "latest")
  let bestSellerTag = products.filter(x => x.tag == "bestSeller")
  let reactedProductsTag = products.filter(x => x.tag == "candy")
  
  // console.log(localStorage.getItem('name'))

  const [loggedIn, setLoggedIn] = useState(false)

  if(localStorage.getItem('name')){
    if (loggedIn == false){
      setLoggedIn(true)
      console.log(loggedIn)
    }

  }

  return (
    <>
      <Navbar headerType="header-gray"/>
      <Showcase />
      <ShowcaseCardBigSmall />
      <FeaturedProducts title="Featured Products" items={featuredTag}/> 
      <ShowcaseCardDouble />
      <OurSpeciality />
      <BigSquareWCards items={square1Tag} id="bigSquareLeft" offer="2 FOR USD $29"/> 
      <BigSquareWCards items={square2Tag} id="bigSquareRight" offer="2 FOR USD $49"/> 
      <SaleBanner />
      <TrippleColumnProducts items1={latestTag} items2={bestSellerTag} items3={reactedProductsTag}/>
      <InfoIcons />
      <Footer />
    </>
  )
}

export default HomeView