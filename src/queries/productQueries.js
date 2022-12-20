import { gql } from '@apollo/client'

// Hämtar alla produkter
export const GET_PRODUCTS_QUERY = gql`{products { _id, name, category, tag, price, rating, imageName, vendor {name}}}`

// Hämtar EN produkt
export const GET_PRODUCT_QUERY = gql`
query Product($id: ID!) {
  product(id:$id) {
    _id,
    name, 
    category, 
    tag,
    price, 
    rating, 
    imageName,
    vendor {
      name
    }
  }
}
`
// Hämtar produkter via Tag
export const GETBYTAG_QUERY = gql`
query tag($tag: String!) {
  getByTag(tag:$tag) {
    _id,
    name, 
    category, 
    tag,
    price, 
    rating, 
    imageName,
    vendor {
      name
    }
  }
}
`

// Hämtar alla vendors
export const GET_VENDORS_QUERY = gql`{vendors { _id, name}}`

// Postar till databasen
export const POST_PRODUCT_QUERY = gql`
mutation AddProduct($name: String!, $category: String!, $tag: String!, $price: String!, $rating: String!, $imageName: String, $vendorId: ID!) {
  addProduct(name: $name, category: $category, tag: $tag, price: $price, rating: $rating, imageName: $imageName, vendorId: $vendorId) {
    name
  }
}`

// Update produkt
export const UPDATE_MUTATION = gql`
mutation my_UpdateProduct($id: ID!, $name: String!, $category: String!, $tag: String!, $price: String!, $rating: String!, $imageName: String!) {
  updateProduct(id: $id, name: $name, category: $category, tag: $tag, price: $price, rating: $rating, imageName: $imageName) {
    name
  }
}`

// Tar bort en produkt från databasen
export const DELETE_PRODUCT = gql`
mutation RemoveProduct($id: ID!){
  deleteProduct(id:$id){
    name
  }
}
`

// Lägger till en vendor/brand
export const POST_VENDOR_QUERY = gql
`
mutation AddVendor($name: String!) {
  addVendor(name: $name) {
    _id,
    name
  }
}
`