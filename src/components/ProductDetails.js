import React from 'react'
import QuantityButton from './items/QuantityButton'
import SizeButton from './items/SizeButton'
import SelectList from './items/SelectList'
import Tab from './items/Tab'
import ExternalLinkIcon from './items/ExternalLinkIcon'
import { useShoppingCart } from '../contexts/ShoppingCartContext'
import { currencyFormatter } from '../utilities/CurrencyFormater'

const ProductDetails = ({products}) => {
    const {incrementQuantity} = useShoppingCart()
  return (
    <section className='product-details'>
        <div className='container'>
            <div className='top-part'>
                <div className='product-image'>
                    <div id="main-image" className='image-squares'>
                        <img src={products.imageName} alt={products.name}/>
                    </div>
                    <div className='image-squares'>
                        <img src={products.imageName} alt={products.name}/>
                    </div>
                    <div className='image-squares'>
                        <img src={products.imageName} alt={products.name}/>
                    </div>
                    <div className='image-squares'>
                        <img src={products.imageName} alt={products.name}/>
                    </div>
                </div>
                <div className='product-shop-choices'>
                    <h2>{products.name}</h2>
                    <div className="product-id-brand"> 
                        <p>SKU: 12345670</p>
                        <p>BRAND: The Northland</p>
                    </div>
                    <div className="stars">
                        <i className="fa-sharp fa-solid fa-star"></i>
                        <i className="fa-sharp fa-solid fa-star"></i>
                        <i className="fa-sharp fa-solid fa-star"></i>
                        <i className="fa-sharp fa-solid fa-star"></i>
                        <i className="fa-sharp fa-solid fa-star"></i>
                    </div>
                    <div className="product-prices"> 
                        <div className="original-price"></div>
                        <div className="discount-price">{currencyFormatter(products.price)}</div>
                    </div>
                    <div className="product-content">
                        <p>
                        Discovered had get considered projection who favourable. Necessary up knowledge it tolerably. 
                        Unwilling departure education is be dashwoods or an. 
                        Use off agreeable law unwilling sir deficient curiosity instantly. (<a href='/'>read more</a>) 
                        </p>
                    </div>
                    <div className="button-choices">
                        <div className="button-row">
                            <h3>Size:</h3>
                            <SizeButton />
                        </div>
                        <div className="button-row">
                            <h3>Color:</h3>
                            <SelectList />
                        </div>
                        <div className="button-row">
                            <h3>Qty:</h3>
                            <QuantityButton />
                            <div className="break"></div>
                            <button className="button-theme" type="submit" onClick={() => incrementQuantity({articleNumber: products.articleNumber, product: products})}>ADD TO CART</button>
                        </div>
                        <div className="button-row" id="social-media">
                            <h3>Share:</h3>
                            <span className="social-media">
                                <ExternalLinkIcon link="https://facebook.com" icon="fa-brands fa-facebook-f"/>
                                <ExternalLinkIcon link="https://instagram.com" icon="fa-brands fa-instagram"/>
                                <ExternalLinkIcon link="https://twitter.com" icon="fa-brands fa-twitter"/>
                                <ExternalLinkIcon link="https://google.com" icon="fa-brands fa-google"/>
                                <ExternalLinkIcon link="https://linkedin.com" icon="fa-brands fa-linkedin"/>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <Tab/>
        </div>
    </section>
  )
}

export default ProductDetails