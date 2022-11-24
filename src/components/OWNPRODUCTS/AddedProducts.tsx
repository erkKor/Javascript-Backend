import React, { useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { OwnProductContext, IProductContext } from '../../contexts/OwnProductContext'
import Card from '../items/Card'


const AddedProducts = ({title,items}:any) => {
  const {getAll, remove} = React.useContext(OwnProductContext) as IProductContext

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
                  items.map((product:any) => 
                  <div key={product.articleNumber}>
                    <Card  product={product} />
                    <div className="edit-buttons">
                      <button className="edit-button" onClick={() => remove(product.articleNumber)}><i className="fa-light fa-trash"></i></button>
                      <button className="edit-button">
                        <NavLink to={`/Manage/${product.articleNumber}`} end className="manage-links"><i className="fa-light fa-gear"></i></NavLink>
                      </button>
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