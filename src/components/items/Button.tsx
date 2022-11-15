
import React from 'react'

interface Props{
  theme: string
  themeBorder: string
}

const Button: React.FC<Props> = ({theme, themeBorder}) => {
  return (
    <button className={theme}>SHOP NOW
        <div className={themeBorder}></div>
    </button>
  )
}

export default Button