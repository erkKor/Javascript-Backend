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








const validate_product = (value:string) => {
    if (!value)
        return '*'
    else if (value.length < 2)
        return 'Product must contain atleast 2 characters'
    else
        return null

}
const validate_rating = (value:string) => {
    if (!value)
        return '*'
    else if (value.length <= 5)
        return 'Rating cannot be higher than 5'
    else
        return null
}


export const validateProducts = (e:any, form?:any) => {
    if (e.type === 'submit') {
     const errors:any = {}
     errors.name = validate_product(form.name)
     errors.category = validate_product(form.email)
     errors.price = validate_product(form.comments)
     errors.rating = validate_rating(form.comments)
     return errors
 
    } else {
         const {id, value} = e.target
         switch(id) {
             case 'name':
                 return validate_product(value)
             case 'category':
                 return validate_product(value)
             case 'price':
                 return validate_product(value)
             case 'rating':
                 return validate_rating(value)
         }
    }
 }




 export const validateInput = () => {
    // Get the value of the input field with id="numb"
    // let x = document.getElementById("numb").value;
    
    let x = (document.getElementById("price") as HTMLInputElement).value;
    let y = parseInt(x)
    
    // If x is Not a Number or less than one or greater than 10
    let text;
    if (isNaN(y) || y < 1 || y > 10) {
      text = "Input not valid";
    } else {
      text = "Input OK";
    }
    (document.getElementById("demo") as HTMLElement).innerText = text;
  }