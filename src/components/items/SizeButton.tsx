import React from 'react'

const SizeButton = () => {
  return (
    <div className="size-btn-container">
      <label className="radio-sizebtn">
        <input type="radio" name="radio" />
        <span className="overlay">
          <p>S</p>
        </span>
      </label>
      <label className="radio-sizebtn">
        <input type="radio" name="radio" />
        <span className="overlay">
          <p>M</p>
        </span>
      </label>
      <label className="radio-sizebtn">
        <input type="radio" name="radio" />
        <span className="overlay">
          <p>L</p>
        </span>
      </label>
      <label className="radio-sizebtn">
        <input type="radio" name="radio" />
        <span className="overlay">
          <p>XL</p>
        </span>
      </label>
    </div>
  )
}

export default SizeButton