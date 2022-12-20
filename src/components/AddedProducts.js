import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import Card from './items/Card'
import { useMutation } from '@apollo/client'
import { GET_PRODUCTS_QUERY, DELETE_PRODUCT } from '../queries/productQueries'

const AddedProducts = ({title,items}) => {
  const [removeProduct] = useMutation(DELETE_PRODUCT, {refetchQueries: [{query: GET_PRODUCTS_QUERY}]})
  const [errorMessage, setErrorMessage] = useState()
  
  return (
    <section className="featured-products added-products">
        <div className="_container">
            <div className="section-title">
                <h3>{title}</h3>
            </div>
            <div className="card-grid">
                {
                  items.map(product => 
                  <div key={product._id}>
                    <Card  product={product} />
                    <div className="edit-buttons">
                      <button className="edit-button" onClick={() => {
                        localStorage.getItem('accesToken')
                        if(localStorage.accesToken != undefined){
                          removeProduct({variables: {id: product._id}})
                        }else{
                          console.log("You need to be logged in to delete")
                          setErrorMessage('You need to be logged in to delete products')
                        }}}><i className="fa-light fa-trash"></i></button>
                      <NavLink to={`/Manage/${product._id}`} end className="edit-button"><i className="fa-light fa-gear"></i></NavLink>
                    </div>
                    <div className='faultyMessage mt-2'>{errorMessage}</div>
                </div>)
                }
            </div>
        </div>
    </section>
  )
}

export default AddedProducts