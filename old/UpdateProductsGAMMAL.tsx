// import React, { useState } from 'react'
// import { NavLink } from 'react-router-dom'
// import { validateProducts } from '../../assets/scripts/validation'
// import { ProductContext, IProductContext } from '../../contexts/ProductContext'

// const UpdateProducts: React.FC = () => {
//   const {product, setProduct, update } = React.useContext(ProductContext) as IProductContext

//   const [name, setName] = useState('')
//   const [category, setCategory] = useState('')
//   const [tag, setTag] = useState('')
//   const [price, setPrice] = useState('')
//   const [rating, setRating] = useState('')
//   const [errors, setErrors] = useState({
//     name,
//     category,
//     tag,
//     price,
//     rating
//   })


//   const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {

//     if (product.name.length >= 2 && product.category.length >= 2 && product.price >= 0 && product.rating <= 5){ 
//       {
//        setTesterr('')
//        }
//      }else{
//        setTesterr('Fields cannot be empty')
//      } 
//     // const {id, value} = e.target
//     // switch(id) {
//     //   case 'name':
//     //     setName(value)
//     //     break
//     //   case 'category':
//     //     setCategory(value)
//     //     break
//     //   case 'tag':
//     //     setTag(value)
//     //     break
//     //   case 'price':
//     //     setPrice(value)
//     //     break
//     //   case 'rating':
//     //     setRating(value)
//     //     break
//     // }

//     // setErrors({...errors, [id]: validateProducts(e)})
//   }

//   const handleUpdate = (e: any) => {
//     e.preventDefault()

//     if (product.name.length >= 2 && product.category.length >= 2 && product.price >= 0 && product.rating <= 5){ 
//      {
//       setTesterr('')
//       update(e)
//       console.log('worked')
//       }
//     }else{
//       console.log("didnt work")
//       setTesterr('Fields cannot be empty')
//     } 
//   }
  
//   const [testerr, setTesterr] = useState('')

 

//   return (
//     <form onSubmit={handleUpdate} className="d-grid mb-5 create update-products">
//       <div className="top-bar">
//         <NavLink to="/Manage" className="back-arrow"><i className="fa-solid fa-arrow-left"></i></NavLink>
//         <h3>Update Product Info</h3>
//       </div>
//       <input type="hidden" value={product.articleNumber}/> 
//         <label>Product Name</label>
//           <input value={product.name || ''} onChange={(e) => setProduct({...product, name: e.target.value})} type="text" className="form-control py-2 mb-2" placeholder="Enter name..."/>
//         <label>Product Category</label>
//           <input value={product.category || ''} onChange={(e) => setProduct({...product, category: e.target.value})} type="text" className="form-control py-2 mb-2" placeholder="Enter category..."/>
//         <label>Product Tag</label>
//           <input value={product.tag || ''} onChange={(e) => setProduct({...product, tag: e.target.value})} type="text" className="form-control py-2 mb-2" placeholder="Enter tag..."/>
//         <label>Product Price</label>
//           <input value={product.price || ''} onChange={(e) => setProduct({...product, price: +e.target.value})} type="number" className="form-control py-2 mb-2" placeholder="Enter price..."/>
//         <label>Product Rating</label>
//           <input value={product.rating || ''} onChange={(e) => setProduct({...product, rating: +e.target.value})} type="number" max="5" className="form-control py-2 mb-2" placeholder="Enter rating..."/>
//         <label>Product Image</label>
//           <input value={product.imageName || ''} onChange={(e) => setProduct({...product, imageName: e.target.value})} type="text" className="form-control py-2 mb-2" placeholder="Url Link (optional)"/>
//         <button type="submit" className="button-theme">Update Info</button>
//         <div className="errorMessage">{testerr}</div>
//     </form>

    
//   )
// }

// export default UpdateProducts