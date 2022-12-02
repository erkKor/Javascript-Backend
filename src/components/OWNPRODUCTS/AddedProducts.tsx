import React, { useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { ProductContext, IProductContext } from '../../contexts/ProductContext'
import { Product } from '../../models/ProductModel'
import Card from '../items/Card'

interface AddedProductsTypes{
  items: Product[]
  title: string
}

const AddedProducts: React.FC<AddedProductsTypes> = ({title,items}) => {
  const {getAll, remove} = React.useContext(ProductContext) as IProductContext

  useEffect(() => {
    getAll()
    
  }, [])

 
  return (
    <section className="featured-products added-products">
        <div className="_container">
          {/* <div>
            <p>Here is all aded products. Press the trashcan icon to remove a product. If you want to update the product info press the gear icon.</p>
          </div> */}
            <div className="section-title">
                <h3>{title}</h3>
            </div>
            <div className="card-grid">
                {
                  items.map((product) => 
                  <div key={product.articleNumber}>
                    <Card  product={product} />
                    <div className="edit-buttons">
                      <button className="edit-button" onClick={() => remove(product.articleNumber)}><i className="fa-light fa-trash"></i></button>
                      <NavLink to={`/Manage/${product.articleNumber}`} end className="edit-button"><i className="fa-light fa-gear"></i></NavLink>
                    </div>
                </div>)
                }
            </div>
        </div>
    </section>
  )
}

export default AddedProducts



// NavLink med params till update funktionen

// <NavLink to={`/products/${product.articleNumber}`}>
//                 <Button theme='button-theme' themeBorder='button-theme-border'/>
//             </NavLink>









{/* <div>
                    <Card key={product.articleNumber} product={product} />
                    
                    <button type="submit" className="button-theme">Test</button>
                    <button ><i className="fa-light fa-trash"></i></button>
                  </div> */}