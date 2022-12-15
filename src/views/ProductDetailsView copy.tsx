import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Carousel from '../components/Carousel'
import Footer from '../components/Footer'
import Breadcrumb from '../components/items/Breadcrumb'
import SaleText from '../components/items/SaleText'
import Navbar from '../components/Navbar'
import ProductDetails from '../components/ProductDetails'
import { ProductContext, IProductContext } from '../contexts/ProductContext'

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
    const {setProduct, get, getAll, product, products} = React.useContext(ProductContext) as IProductContext;

    useEffect(() => {
        get(String(id))
        getAll()
    }, [setProduct])

    let carousel = products.filter (x => x.category == product.category)

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