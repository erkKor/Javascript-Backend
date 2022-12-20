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
import { useQuery } from '@apollo/client'
import { GETBYTAG_QUERY } from '../queries/productQueries'

const HomeView = () => {
  const {loading: loadingFeatured, error: errorFeatured, data: dataFeatured} = useQuery(GETBYTAG_QUERY, {
    variables: {tag:"featured"}
  })
  const {loading: loadingSquare1, error: errorSquare1, data: dataSquare1} = useQuery(GETBYTAG_QUERY, {
    variables: {tag:"square1"}
  })
  const {loading: loadingSquare2, error: errorSquare2, data: dataSquare2} = useQuery(GETBYTAG_QUERY, {
    variables: {tag:"square2"}
  })
  const {loading: loadingLatest, error: errorLatest, data: dataLatest} = useQuery(GETBYTAG_QUERY, {
    variables: {tag:"latest"}
  })
  const {loading: loadingBestSeller, error: errorBestSeller, data: dataBestSeller} = useQuery(GETBYTAG_QUERY, {
    variables: {tag:"bestSeller"}
  })
  const {loading: loadingTopReacted, error: errorTopReacted, data: dataTopReacted} = useQuery(GETBYTAG_QUERY, {
    variables: {tag:"candy"}
  })

    if (loadingFeatured || loadingSquare1 || loadingSquare2 || loadingLatest || loadingBestSeller || loadingTopReacted) {return <p>Laddar...</p>}
    if (errorFeatured || errorSquare1 || errorSquare2 || errorLatest || errorBestSeller || errorTopReacted) {return <p>Error... :</p>}
  
  // const {products, getAll, getTagFeatured, getTag} = React.useContext(ProductContext) as IProductContext

  // useEffect(() => {
  //   getAll()
    
  // }, [])
  
  // let featuredTag = products.filter(x => x.tag == "featured")
  // let square1Tag = products.filter(x => x.tag == "square1")
  // let square2Tag = products.filter(x => x.tag == "square2")
  // let latestTag = products.filter(x => x.tag == "latest")
  // let bestSellerTag = products.filter(x => x.tag == "bestSeller")
  // let reactedProductsTag = products.filter(x => x.tag == "candy")
  
  // console.log(localStorage.getItem('name'))

  // const [loggedIn, setLoggedIn] = useState(false)

  // if(localStorage.getItem('name')){
  //   if (loggedIn == false){
  //     setLoggedIn(true)
  //     console.log(loggedIn)
  //   }
  // }

  

  return (
    <>
      <Navbar headerType="header-gray"/>
      <Showcase />
      <ShowcaseCardBigSmall />
      <FeaturedProducts title="Featured Products" items={dataFeatured.getByTag}/> 
      <ShowcaseCardDouble />
      <OurSpeciality />
      <BigSquareWCards items={dataSquare1.getByTag} id="bigSquareLeft" offer="2 FOR USD $29"/> 
      <BigSquareWCards items={dataSquare2.getByTag} id="bigSquareRight" offer="2 FOR USD $49"/> 
      <SaleBanner />
      <TrippleColumnProducts items1={dataLatest.getByTag} items2={dataBestSeller.getByTag} items3={dataTopReacted.getByTag}/>
      <InfoIcons />
      <Footer />
    </>
  )
}

export default HomeView