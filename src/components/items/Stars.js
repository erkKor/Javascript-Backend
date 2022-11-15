import React from 'react'

const Stars = ({number}) => {

    const stars = Array.from({length: number}, (e, id) =>{

    return (
        <i className="fa-sharp fa-solid fa-star" key={id}></i>
    )
})

  return (
    <span>{stars}</span>
  )
}

export default Stars