import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Carousel from '../components/Carousel'
import Footer from '../components/Footer'
import Breadcrumb from '../components/items/Breadcrumb'
import SaleText from '../components/items/SaleText'
import Navbar from '../components/Navbar'
import ProductDetails from '../components/ProductDetails'
import { OwnProductContext, IProductContext } from '../contexts/OwnProductContext'
import { ProductContext, ProductContextType} from '../contexts/ProductContext'


const ProductDetailsView = () => {
    // const {id} = useParams()
    // const [product, setProducts] = useState({})
    // const {products, getProducts} = React.useContext(ProductContext) as ProductContextType;

    // useEffect(() => {
    //     const fetchData = async () =>{
    //       const result = await fetch(`https://win22-webapi.azurewebsites.net/api/products/${id}`)
    //       setProducts(await result.json())
    //     }
    //     fetchData()
    //     getProducts()
    // },[])


    const {id} = useParams()
    const {setProduct, get, product, products} = React.useContext(OwnProductContext) as IProductContext;
  
    useEffect(() => {
        get(Number(id))
    }, [setProduct])
    
    let carousel = products.slice(4,12)
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