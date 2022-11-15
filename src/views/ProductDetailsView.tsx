import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Carousel from '../components/Carousel'
import Footer from '../components/Footer'
import Breadcrumb from '../components/items/Breadcrumb'
import SaleText from '../components/items/SaleText'
import Navbar from '../components/Navbar'
import ProductDetails from '../components/ProductDetails'
import { useProductContext } from '../contexts/ProductContext'


const ProductDetailsView = () => {
    const {id} = useParams()
    const [product, setProducts] = useState({})
    const {products, getProducts} = useProductContext()

    useEffect(() => {
        const fetchData = async () =>{
          const result = await fetch(`https://win22-webapi.azurewebsites.net/api/products/${id}`)
          setProducts(await result.json())
        }
        fetchData()
        getProducts()
    },[])

    let carousel = products.slice(9,17)

  return (
    <>
      <Navbar headerType="header-light"/>
      <SaleText />
      <Breadcrumb currentPage="Products"/>
      <ProductDetails products={product}/>
      <Carousel items={carousel}/>
      <Footer />
    </>
  )
}

export default ProductDetailsView