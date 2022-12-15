import React, { useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Carousel from '../components/Carousel'
import Footer from '../components/Footer'
import Breadcrumb from '../components/items/Breadcrumb'
import SaleText from '../components/items/SaleText'
import Navbar from '../components/Navbar'
import ProductDetails from '../components/ProductDetails'
import { ProductContext, IProductContext } from '../contexts/ProductContext'
import { useQuery, useMutation, gql } from '@apollo/client'

const GET_PRODUCT_QUERY = gql`
  query Product($id: ID!) {
    product(id:$id) {
      _id,
      name, 
      category, 
      tag,
      price, 
      rating, 
      vendor {
        name
      }
    }
  }
  `
const AllProducts_Query = gql`{products { _id, name, category, tag, price, rating, vendor {name}}}`
  
const ProductDetailsView = () => {

    const {id} = useParams()
    const {setProduct, get, getAll, product, products} = useContext(ProductContext) 
    const {loading, error, data} = useQuery(GET_PRODUCT_QUERY, {
      variables: {id:id}
    })

    const {loading: allLoading, error: allError, data: allData} = useQuery(AllProducts_Query)

    if (loading) return <option disabled>Laddar...</option>
    if (error) return <option disabled>Error fel</option>
    if (allLoading) return <option disabled>Laddar...</option>
    if (allError) return <option disabled>Error fel</option>

    // useEffect(() => {
    //     getAll()
    // }, [setProduct])

    console.log(allData)

    let carousel = allData.products.filter (x => x.category == data.product.category)
    console.log(carousel)

  return (
    <>
      <Navbar headerType="header-light"/>
      <SaleText />
      <Breadcrumb currentPage="Products"/>
      <ProductDetails products={data.product}/>
      <Carousel items={carousel}/>
      <Footer />
    </>
  )
}

export default ProductDetailsView