import React from 'react'

interface Props{
  link: string
  icon: string
}

const ExternalLinkIcon: React.FC<Props> = ({link, icon}) => {
  return (
    <a href={link} target="_blank" rel="noreferrer">
        <i className={icon}></i>
    </a>
  )
}

export default ExternalLinkIcon