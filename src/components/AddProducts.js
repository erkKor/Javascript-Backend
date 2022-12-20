import React, { useState } from 'react'
import { useQuery, useMutation} from '@apollo/client'
import { GET_VENDORS_QUERY, POST_PRODUCT_QUERY, GET_PRODUCTS_QUERY } from '../queries/productQueries'
import { validateProducts } from '../assets/scripts/validation'

const AddProductsNEW = () => {
  const default_value = {name: '', category: '', tag: '', price: '', rating: '', imageName: '', vendorId: '0' }
  const [product, setProduct] = useState(default_value)
  const [succesMessage, setSuccesMessage] = useState()
  const [errorMessage, setErrorMessage] = useState()
  const {loading, error, data} = useQuery(GET_VENDORS_QUERY)
  const [addProduct] = useMutation(POST_PRODUCT_QUERY, {refetchQueries: [{query: GET_PRODUCTS_QUERY}]})

  // Validation
  const [name, setName] = useState('')
  const [category, setCategory] = useState('')
  const [tag, setTag] = useState('')
  const [price, setPrice] = useState('')
  const [rating, setRating] = useState('')
  const [imageName, setImageName] = useState('')
  const [vendorId, setVendorId] = useState('')
  const [errors, setErrors] = useState({
    name,
    category,
    tag,
    price,
    rating,
    imageName,
    vendorId
  })

  const populateVendors = () => {
    if (loading) return <option disabled>Laddar...</option>
    if (error) return <option disabled>Error fel</option>
    return data.vendors.map(vendor => <option key={vendor._id} value={vendor._id}>{vendor.name}</option>)
    
  }

  const handleChange = (e) => {
    const {id, value} = e.target
    switch(id) {
      case 'name':
        setName(value)
        break
      case 'category':
        setCategory(value)
        break
      case 'tag':
        setTag(value)
        break
      case 'price':
        setPrice(value)
        break
      case 'rating':
        setRating(value)
        break
      case 'imageName':
        setImageName(value)
        break
      case 'vendorId':
        setVendorId(value)
        break
    }

    setErrors({...errors, [id]: validateProducts(e)})
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setErrors(validateProducts(e, {name, category, tag, price, rating, imageName, vendorId}))
    localStorage.getItem('accesToken')

    if(localStorage.accesToken != undefined){
      if ( product.name.length >= 2 && product.category.length >= 2 && product.tag.length >= 2 && product.price >= 0 && product.price.length >= 1 && product.rating <= 5 && product.rating.length >= 1 && product.imageName.length >= 2 && product.vendorId.length > 1){
        if (errors.name === null && errors.category === null && errors.price === null && errors.rating === null && errors.imageName === null && errors.vendorId === null){
          addProduct({variables: product})
          setSuccesMessage('Product was succesfully added!')
          setProduct(default_value)}
     
      } else{
        setErrorMessage('Fields cannot be empty')
      }
    }else{
      setErrorMessage('You need to be logged in to add products')
    }
  }
      

  return (
    <form onSubmit={handleSubmit} className="d-grid mb-5 mt-5 create">
      <h5>Add New Product</h5>
        <div className="errorMessage">{errors.name}</div>
      <input id="name" value={product.name} onChange={(e) => {setProduct({...product, name: e.target.value}); handleChange(e)}} className={` form-control mb-3 ${errors.name ? 'errorField': ''}`} type="text" placeholder="Enter product namn"></input>
        <div className="errorMessage">{errors.category}</div>
      <input id="category" value={product.category} onChange={(e) => {setProduct({...product, category: e.target.value}); handleChange(e)}} className={`form-control mb-3 ${errors.category ? 'errorField': ''}`} type="text" placeholder="Enter product kategori"></input>
        <div className="errorMessage">{errors.tag}</div>
      <input id="tag" value={product.tag} onChange={(e) => {setProduct({...product, tag: e.target.value}); handleChange(e)}} className={`form-control mb-3 ${errors.tag ? 'errorField': ''}`} type="text" placeholder="Enter product tag"></input>
        <div className="errorMessage">{errors.price}</div>
      <input id="price" value={product.price} onChange={(e) => {setProduct({...product, price: e.target.value}); handleChange(e)}} className={`form-control mb-3 ${errors.price ? 'errorField': ''}`} type="text" placeholder="Enter product price"></input>
        <div className="errorMessage">{errors.rating}</div>
      <input id="rating" value={product.rating} onChange={(e) => {setProduct({...product, rating: e.target.value}); handleChange(e)}} className={`form-control mb-3 ${errors.rating ? 'errorField': ''}`} type="text" placeholder="Enter product rating"></input>
        <div className="errorMessage">{errors.imageName}</div>
      <input id="imageName" value={product.imageName} onChange={(e) => {setProduct({...product, imageName: e.target.value}); handleChange(e)}} className={`form-control mb-3 ${errors.imageName ? 'errorField': ''}`} type="text" placeholder="Enter image URL or atleast 2 characters"></input>
       
       <div className="errorMessage">{errors.vendorId}</div>
      <select id="vendorId" value={product.vendorId} onChange={(e) => {setProduct({...product, vendorId: e.target.value}); handleChange(e)}} className={`form-select mb-3 ${errors.vendorId ? 'errorField': ''}`} type="text">
        <option value="0" disabled>Choose brand</option>
        {populateVendors()}
      </select>
        
      <button className="button-theme" type="submit">Add Product</button>
      <h5 className='succesMessage mt-2'>{succesMessage}</h5>
      <h5 className='faultyMessage mt-2'>{errorMessage}</h5>
    </form>
  )
}

export default AddProductsNEW