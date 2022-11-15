import React, { useState } from 'react'
import { submitData, validate } from '../assets/scripts/validation'

const ContactForm = () => {
  let currentPage = "Contact Us"
  // window.top.document.title = `${currentPage} || Fixxo` 
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [comments, setComments] = useState('')
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)
  const [failedSubmitted, setFailedSubmitted] = useState(false)

  const handleChange = (e) => {
    const {id, value} = e.target
    switch(id) {
      case 'name':
        setName(value)
        break
      case 'email':
        setEmail(value)
        break
      case 'comments':
        setComments(value)
        break
    }

    setErrors({...errors, [id]: validate(e)})
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setFailedSubmitted(false)
    setSubmitted(false)
    setErrors(validate(e, {name, email, comments}))
  
    if (errors.name === null && errors.email === null && errors.comments === null) {

      let json = JSON.stringify({name, email, comments})
        setName('')
        setEmail('')
        setComments('')
        setErrors({})
        
      if (await submitData('https://win22-webapi.azurewebsites.net/api/contactform', 'POST', json, )) {
        setSubmitted(true)
        setFailedSubmitted(false)
      }else{
        setSubmitted(false)
        setFailedSubmitted(true)
      }

    } else {
      setSubmitted(false)
    }
  }




  return (
    <section className="contact-form mt-5">
      <div className="_container">
        {
          submitted ? (
          <div className="submit-succes" role="alert">
            <h3>Thank you for your comments</h3> 
            <p>We will contact you as soon as possible.</p>
            </div>  ) : (<></>)
        }

        {
          failedSubmitted ? (
          <div className="submit-fail" role="alert">
            <h3>Something went wrong</h3> 
            <p>Please make sure all the fields are filled out correctly.</p>
            </div>  ) : (<></>)
        }
        
        
        <h3>Come in Contact with Us</h3>
        <form onSubmit={handleSubmit} noValidate>
            <div>
              <input id="name" className={(errors.name ? 'errorField': '')} value={name} onChange={handleChange} type="text" placeholder="Your Name" />
              <div className="errorMessage">{errors.name}</div>
            </div>
            <div>
              <input id="email" className={(errors.email ? 'errorField': '')} value={email} onChange={handleChange} type="email" placeholder="Your Mail" />
              <div className="errorMessage">{errors.email}</div>
            </div>
          <div className="textarea-container">
            <textarea id="comments" className= {(errors.comments ? 'errorField': '')} value={comments} onChange={handleChange} placeholder="Comments"></textarea>
            <div className="errorMessage">{errors.comments}</div>
          </div>
          <button className="button-theme" type="submit">Post Comments</button>
        </form>    
      </div>
    </section>
  )
}

export default ContactForm