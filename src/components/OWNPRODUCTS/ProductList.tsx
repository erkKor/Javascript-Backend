import React, { useEffect } from 'react'
import { IProductContext, ProductContext } from '../../contexts/ProductContext'
import { Product } from '../../models/ProductModel'

const ProductList = () => {
  const {products, getAll, removeItem} = React.useContext(ProductContext) as IProductContext
  
  useEffect(() => {
    getAll()
    
  }, [])

  // const removeUser = (id:number) => {
  //   remove(id)
  // }

  return (
    <>
    <h3>List of Products</h3>
    {
      
      // users.map((user: User) => (<div onClick={() => remove(user.id)} key={user.id} className="mb-3">{user.firstName} {user.lastName}</div>))
      products.map((product: Product) => (<div  onClick={() => removeItem(product.articleNumber)} key={product.articleNumber} className="mb-3">{product.name} {product.category}</div>))
    }
    </>
  )
}

export default ProductList