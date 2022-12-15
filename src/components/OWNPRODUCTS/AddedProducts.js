import React, { useContext} from 'react'
import { NavLink } from 'react-router-dom'
import { ProductContext, IProductContext } from '../../contexts/ProductContext'
import Card from '../items/Card'


const AddedProducts = ({title,items}) => {
  const {removeItem} = useContext(ProductContext) 
 
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
                  items.map(product => 
                  <div key={product._id}>
                    <Card  product={product} />
                    <div className="edit-buttons">
                      <button className="edit-button" onClick={() => removeItem(product._id)}><i className="fa-light fa-trash"></i></button>
                      <NavLink to={`/Manage/${product._id}`} end className="edit-button"><i className="fa-light fa-gear"></i></NavLink>
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

// <NavLink to={`/products/${product._id}`}>
//                 <Button theme='button-theme' themeBorder='button-theme-border'/>
//             </NavLink>









{/* <div>
                    <Card key={product._id} product={product} />
                    
                    <button type="submit" className="button-theme">Test</button>
                    <button ><i className="fa-light fa-trash"></i></button>
                  </div> */}