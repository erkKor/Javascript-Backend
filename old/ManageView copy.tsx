// import React, { useEffect } from 'react'
// import Navbar from '../components/Navbar'
// import AddProducts from '../components/OWNPRODUCTS/AddProducts'
// import AddedProducts from '../components/OWNPRODUCTS/AddedProducts'
// import { ProductContext, IProductContext } from '../contexts/ProductContext'
// import Breadcrumb from '../components/items/Breadcrumb'
// import Footer from '../components/Footer'
// import AddProductsNEW from '../components/OWNPRODUCTS/AddProductsNEW'

// const CreateProductView = () => {
//   const {products, getAll} = React.useContext(ProductContext) as IProductContext

//   useEffect(() => {
//     getAll()
//   }, [])

//   // let addedProducts = products

//   return (
//     <>
//     <Navbar headerType='header-light'/>
//     <Breadcrumb currentPage="Manage"/>
//     <div className="_container manage-choices">
//       <h3>Manage products</h3>
//     </div>
//     {/* <AddProducts /> */}
//     <AddProductsNEW />
//     <AddedProducts title="Added Products" items={products}/> 
//     <Footer />
//     </>
//   )
// }

// export default CreateProductView