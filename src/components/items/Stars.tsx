import React from 'react'

const Stars = ({ratingNumber}:any) => {

    const stars = Array.from({length: ratingNumber}, (_e, id) =>{

    return (
        <i className="fa-sharp fa-solid fa-star" key={id}></i>
    )
})

  return (
    <span>{stars}</span>
  )
}

export default Stars