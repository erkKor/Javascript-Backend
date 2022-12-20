import React from 'react'
import { useParams } from 'react-router-dom'
import Carousel from '../components/Carousel'
import Footer from '../components/Footer'
import Breadcrumb from '../components/items/Breadcrumb'
import SaleText from '../components/items/SaleText'
import Navbar from '../components/Navbar'
import ProductDetails from '../components/ProductDetails'
import { useQuery} from '@apollo/client'
import { GET_PRODUCT_QUERY, GET_PRODUCTS_QUERY } from '../queries/productQueries'

  
const ProductDetailsView: React.FC = () => {
    const {id} = useParams()
    const {loading, error, data} = useQuery(GET_PRODUCT_QUERY, {
      variables: {id:id}
    })
    const {loading: allLoading, error: allError, data: allData} = useQuery(GET_PRODUCTS_QUERY)
    if (loading || allLoading){return <option disabled>Laddar...</option>}
    if (error || allError) {return <option disabled>Error fel</option>}

    let carousel = allData.products.filter ((x: any ) => x.category == data.product.category)

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