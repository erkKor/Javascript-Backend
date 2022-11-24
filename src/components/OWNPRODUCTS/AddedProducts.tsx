import React, { useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { OwnProductContext, IProductContext } from '../../contexts/OwnProductContext'
import Card from '../items/Card'


const AddedProducts = ({title,items}:any) => {
  const {getAll, remove} = React.useContext(OwnProductContext) as IProductContext

  useEffect(() => {
    getAll()
    
  }, [])
  

  // console.log(items.map((product:any) => <Card key={product.articleNumber} product={product} />))
  return (
    <section className="featured-products added-products">
        <div className="_container">
            <div className="section-title">
                <h3>{title}</h3>
            </div>
            <div className="card-grid">
                {
                  items.map((product:any) => <div key={product.articleNumber}>
                    <Card  product={product} />
                    <button onClick={() => remove(product.articleNumber)}>Remove<i className="fa-light fa-trash"></i></button>
                    <NavLink to={`/Manage/${product.articleNumber}`} end className="manage-links">Update Product</NavLink>
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