import React from 'react'

const SelectList: React.FC = () => {

  return (
    <div className="color-select-container">
      <select name="format" id="format">
          <option >Choose an Option</option>
          <option value="red">Red</option>
          <option value="blue">Blue</option>
          <option value="green">Green</option>
      </select>
    </div>
  )
}

export default SelectList