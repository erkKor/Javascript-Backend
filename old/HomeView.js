import React, {useEffect} from 'react'
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
import { useProductContext } from '../contexts/ProductContext'

const HomeView = () => {
  window.top.document.title = 'Fixxo.'

  const {products, getProducts} = useProductContext()
  // const {featured, getFeaturedProducts} = useProductContext()
  // const {square, getSquareProducts} = useProductContext()
  // const {tripple, getTrippleProducts} = useProductContext()

  useEffect(() => {
    getProducts()
    // getFeaturedProducts(8)
    // getSquareProducts(4)
    // getTrippleProducts(3)
  }, [])

  let featuredP = products.slice(0,8)
  let squareP1 = products.slice(8,12)
  let squareP2 = products.slice(12,16)
  let trippleP1 = products.slice(16,19)
  let trippleP2 = products.slice(19,22)
  

  return (
    <>
      <Navbar headerType="header-gray"/>
      <Showcase />
      <ShowcaseCardBigSmall />
      <FeaturedProducts title="Featured Products" items={featuredP}/> 
      <ShowcaseCardDouble />
      <OurSpeciality />
      <BigSquareWCards items={squareP1} id="bigSquareLeft" offer="2 FOR USD $29"/> 
      <BigSquareWCards items={squareP2} id="bigSquareRight" offer="2 FOR USD $49"/> 
      <SaleBanner />
      <TrippleColumnProducts items1={trippleP1} items2={trippleP2}/>
      <InfoIcons />
      <Footer />
    </>
  )
}

export default HomeView