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



const validate_product = (value:string) => {
    if (!value)
        return 'Field is required'
    else if (value.length < 2)
        return 'Product must contain atleast 2 characters'
    else
        return null
}
const validate_price = (value:number) => {
    if (!value)
        return 'Price cannot be 0'
    else if (value <= 0)
        return 'Price cannot be 0'
    else
        return null
}
const validate_rating = (value:number) => {
    if (!value)
        return 'You must enter a rating'
    else if (value > 5)
        return 'Rating cannot be higher than 5'
    else
        return null
}


export const validateProducts = (e:React.ChangeEvent<HTMLInputElement>, form?:any) => {
    if (e.type === 'submit') {
     const errors:any = {}
     errors.name = validate_product(form.name)
     errors.category = validate_product(form.category)
     errors.price = validate_price(form.price)
     errors.rating = validate_rating(form.rating)
     return errors
 
    } else {
        const {id, value} = e.target
        switch(id) {
            case 'name':
                return validate_product(value)
            case 'category':
                return validate_product(value)
            case 'price':
                return validate_price(Number(value))
            case 'rating':
                return validate_rating(Number(value))
        }
    }
 }




//  export const validateInput = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const id = e.target.id
//     // const value = e.target.value    
//     let x = (document.getElementById(id) as HTMLInputElement).value;
//     let y = parseInt(x)
//     let text;

//     switch(id) {
//       case 'name':
//         if (x.length < 2){
//             text = "Product name must have atleast 2 characters"
//         }
//         else{
//             text= ""
//         }
//         (document.getElementById("errorName") as HTMLElement).innerText = text;
//             break
            
//       case 'category':
//         if (x.length < 2){
//             text = "Product category must have atleast 2 characters"
//         }
//         else{
//             text= ""
//         }
//         (document.getElementById("errorCategory") as HTMLElement).innerText = text;
//             break
//       case 'price':
//         if (isNaN(y) || y <= 0 ) {
//             text = "Price can't be 0";
//           } else {
//             text = "";
//           }
//           (document.getElementById("errorPrice") as HTMLElement).innerText = text;
//             break
//       case 'rating':
//         if (isNaN(y) || y < 0 || y > 5) {
//             text = "Rating needs to be between 0-5";
//           } else {
//             text = "";
//           }
//           (document.getElementById("errorRating") as HTMLElement).innerText = text;
//             break
//     }
//   }


//   export const KeyUpValidate = (e:any) =>{
//     const id = e.target.id
//     const value = e.target.value
//     const error = {}

//     const regName = value.length > 2

//     switch(id) {
//         case 'name':
//             if (value.match(regName)){
//                 e.target.classList.remove("errorField")
//                 // setFormErrors(error)
//             }else{

//             }
            
//             break;
//         case 'category':
//             return validate_product(value)
//         case 'price':
//             return validate_product(value)
//         case 'rating':
//             return validate_rating(value)
        
//     }
//   }



  // case 'name':
        //     return validate_product(value)
        // case 'category':
        //     return validate_product(value)
        // case 'price':
        //     return validate_product(value)
        // case 'rating':
        //     return validate_rating(value)