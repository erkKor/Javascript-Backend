import React, { useEffect } from 'react'
import {IProductContext, OwnProductContext} from '../../contexts/OwnProductContext'
import { Product } from '../../models/ProductModel'

const ProductList = () => {
  const {products, getAll, remove} = React.useContext(OwnProductContext) as IProductContext
  
  useEffect(() => {
    getAll()
    
    
  }, [getAll])

  const removeUser = (id:number) => {
    remove(id)
  }

  return (
    <>
    <h3>List of Products</h3>
    {
      
      // users.map((user: User) => (<div onClick={() => removeUser(user.id)} key={user.id} className="mb-3">{user.firstName} {user.lastName}</div>))
      products.map((product: Product) => (<div key={product.id} className="mb-3">{product.name} {product.category}</div>))
    }
    </>
  )
}

export default ProductList