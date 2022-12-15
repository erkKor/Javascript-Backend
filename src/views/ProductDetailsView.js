import React, { useEffect } from 'react'
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
    // const {setProduct, get, getAll, product, products} = React.useContext(ProductContext) as IProductContext;
    const {loading, error, data} = useQuery(GET_PRODUCT_QUERY, {
      variables: {id:id}
    })
    if (loading) return <option disabled>Laddar...</option>
    if (error) return <option disabled>Error fel</option>
    console.log(data.product)

    // useEffect(() => {
    //     get(String(id))
    //     getAll()
    // }, [setProduct])

    // let carousel = products.filter (x => x.category == product.category)

  return (
    <>
      <Navbar headerType="header-light"/>
      <SaleText />
      <Breadcrumb currentPage="Products"/>
      <ProductDetails products={data.product}/>
      {/* <Carousel items={carousel}/> */}
      <Footer />
    </>
  )
}

export default ProductDetailsView