import React, { useEffect } from 'react'
import Navbar from '../components/Navbar'
import AddProducts from '../components/OWNPRODUCTS/AddProducts'
import FeaturedProductsOwn from '../components/OWNPRODUCTS/FeaturedProductsOwn'
import ProductList from '../components/OWNPRODUCTS/ProductList'
import { OwnProductContext, IProductContext} from '../contexts/OwnProductContext'

const CreateProductView = () => {
  const { products, getAll} = React.useContext(OwnProductContext) as IProductContext

  useEffect(() => {
    getAll()
  }, [getAll])


  let featuredP = products
  // let squareP1 = products.slice(8,12)
  // let squareP2 = products.slice(12,16)
  // let trippleP1 = products.slice(16,19)
  // let trippleP2 = products.slice(19,22)

  return (
    <>
    <Navbar headerType='header-light'/>
    <AddProducts />
    <ProductList />
    <FeaturedProductsOwn  title="Added Products" items={featuredP}/>
    </>
  )
}

export default CreateProductView