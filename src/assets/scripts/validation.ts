import React from "react"

export const submitData = async (url:any, method:any, data:any, contentType =  'application/json') =>{

    const res = await fetch(url,{
        method: method,
        headers: {
            'Content-Type': contentType
        },
        body: data
    })

    if (res.status === 200){
        return true
    }
    return false
}

export const validate = (e:any, form?:any) => {
   if (e.type === 'submit') {
    const errors:any = {}
    errors.name = validate_name(form.name)
    errors.email = validate_email(form.email)
    errors.comments = validate_comments(form.comments)
    return errors

   } else {
        const {id, value} = e.target
        switch(id) {
            case 'name':
                return validate_name(value)
            case 'email':
                return validate_email(value)
            case 'comments':
                return validate_comments(value)
        }
   }
}

const validate_name = (value:string) => {
    if (!value)
        return 'Name is required'
    else if (value.length < 2)
        return 'Your name must contain atleast 2 characters'
    else
        return null
}

const validate_email = (value:string) => {
    const regex_email = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    
    if (!value)
        return 'An email address is required'
    else if (!regex_email.test(value))
        return 'Must be a valid email address example(email@domain.com)'
    else
        return null
}

const validate_comments = (value:string) => {
    if (!value)
        return 'A comment is required'
    else if (value.length < 5)
        return 'Your comment must be at least 5 characters long'
    else
        return null
}



// ########################## EGNA GREJER #######################################################
// ########################## EGNA GREJER #######################################################
// ########################## EGNA GREJER #######################################################

export const validateProducts = (e:React.ChangeEvent<HTMLInputElement>, form?:any) => {
    if (e.type === 'submit') {
     const errors:any = {}
     errors.name = validate_Pname(form.name)
     errors.category = validate_category(form.category)
     errors.tag = validate_tag(form.tag)
     errors.price = validate_price(form.price)
     errors.rating = validate_rating(form.rating)
     errors.imageName = validate_imageName(form.imageName)
     errors.vendorId = validate_vendorId(form.vendorId)
     return errors
 
    } else {
        const {id, value} = e.target
        switch(id) {
            case 'name':
                return validate_Pname(value)
            case 'category':
                return validate_category(value)
            case 'tag':
                return validate_tag(value)
            case 'price':
                return validate_price(value)
            case 'rating':
                return validate_rating(value)
            case 'imageName':
                return validate_imageName(value)
            case 'vendorId':
                return validate_vendorId(value)
        }
    }
 }

 const validate_Pname = (value:string) => {
    if (!value)
        return 'Field is required'
    else if (value.length < 2)
        return 'Name must contain atleast 2 characters' 
    else
        return null
}
 const validate_category = (value:string) => {
    if (!value)
        return 'Field is required'
    else if (value.length < 2)
        return 'Category must contain atleast 2 characters' 
    else
        return null
}
 const validate_tag = (value:string) => {
    if (!value)
        return 'Field is required'
    else if (value.length < 2)
        return 'Tag must contain atleast 2 characters' 
    else
        return null
}

const validate_imageName = (value:string) => {
    if (!value)
        return 'Field is required'
    else if (value.length < 2)
        return 'Image needs to be URL to show up, if you have no URL enter atleast 2 characters' 
    else
        return null
}



const validate_price = (value:string) => {
    const regex_price = /^\d*\.?\d*$/
    if (!value)
        return 'You must enter a price'
    else if (!regex_price.test(value))
        return 'Price can only contain numbers'
    else
        return null
}
const validate_rating = (value:string) => {
 const regex_rating = /\b([1-5])\b/
//  const Newregex_rating = /^[0-5]+$/

    if (!value)
        return 'You must enter a rating'
    else if (!regex_rating.test(value))
        return 'Rating can only be 1-5'
    else
        return null
}


const validate_vendorId = (value:string) => {
    if (!value)
        return 'Field is required'
    else if (value.length < 2)
        return 'Not right' 
    else
        return null
}