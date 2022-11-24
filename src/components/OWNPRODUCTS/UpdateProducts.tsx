import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { OwnProductContext, IProductContext } from '../../contexts/OwnProductContext'


const UpdateProducts = () => {
  const id = useParams()
  const { product, setProduct, get, update } = React.useContext(OwnProductContext) as IProductContext

    useEffect(() => {
      get(Number(id))
  },[get])

  return (
    <form onSubmit={update} className="d-grid mb-5">
      <h3>Update User</h3>
         <input type="hidden" value={product.articleNumber}/>
        <input value={product.name} onChange={(e) => setProduct({...product, name: e.target.value})} type="text" className="form-control py-2 mb-3" placeholder="Enter name..."/>
        <input value={product.category} onChange={(e) => setProduct({...product, category: e.target.value})} type="text" className="form-control py-2 mb-3" placeholder="Enter category..."/>
        <input value={product.price} onChange={(e) => setProduct({...product, price: +e.target.value})} type="number" className="form-control py-2 mb-3" placeholder="Enter price..."/>
        <input value={product.rating} onChange={(e) => setProduct({...product, rating: +e.target.value})} type="number" max="5" className="form-control py-2 mb-3" placeholder="Enter rating..."/>
        <input value={product.imageName} onChange={(e) => setProduct({...product, imageName: e.target.value})} type="text" className="form-control py-2 mb-3" placeholder="Url Link (optional)"/>
        <button type="submit" className="btn btn-success">Update Info</button>
    </form>

    
  )
}

export default UpdateProducts