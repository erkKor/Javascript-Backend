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
import { ProductContext, ProductContextType} from '../contexts/ProductContext'
import { OwnProductContext, IProductContext } from '../contexts/OwnProductContext'

const HomeView = () => {
  // window.top.document.title = 'Fixxo.'
  // const {products, getProducts} = React.useContext(ProductContext) as ProductContextType;

  // useEffect(() => {
  //   getProducts()
  // }, [])


  const {products, getAll, getTagFeatured, getTag} = React.useContext(OwnProductContext) as IProductContext
  // const tag = "featured"

  useEffect(() => {
    getAll()
    // // getTagFeatured()
    // getTag("featured")
    // getTag("")
    
  }, [])

  let featuredTag = products.filter(x => x.tag == "featured")
  let square1Tag = products.filter(x => x.tag == "square1")
  let square2Tag = products.filter(x => x.tag == "square2")
  let latestTag = products.filter(x => x.tag == "latest")
  let bestSellerTag = products.filter(x => x.tag == "bestSeller")
  let reactedProductsTag = products.filter(x => x.tag == "candy")

  // let featuredP = products.slice(0,8)
  // let squareP1 = products.slice(8,12)
  // let squareP2 = products.slice(12,16)
  // let trippleP1 = products.slice(16,19)
  // let trippleP2 = products.slice(19,22)
  

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