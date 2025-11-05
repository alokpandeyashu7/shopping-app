import React, { useContext } from 'react'
import './ProductDisplay.css'
import star_icon from '../Assets/star_icon.png'
import star_dull_icon from '../Assets/star_dull_icon.png'
import { ShopContext } from '../../Context/ShopContext'
const ProductDisplay = (props) => {
    const {product} = props;
    const{addToCart} =  useContext(ShopContext)
  return (
    <div className='productdisplay'>
      <div className="productdisplay-left">
        <div className="productdisplay-img-list">
            <img src={product.image} alt="" />
            <img src={product.image}  alt="" />
            <img src={product.image}  alt="" />
            <img src={product.image}  alt="" />
        </div>
        <div className="productdisplay-img">
            <img className='productdisplay-main-img' src={product.image} alt="" />
        </div>
      </div>
      <div className="productdisplay-right">
        <h1>{product.name}</h1>
        <div className="productdisplay-right-star">
            <img src={star_icon}alt="" />
            <img src={star_icon} alt="" />
            <img src={star_icon} alt="" />
            <img src={star_icon} alt="" />
            <img src={star_dull_icon} alt="" />
            <p>122</p>
        </div>
        <div className="productdisplay-right-prices">
          <div className="productdisplay-right-price-old">
            ${product.old_price}
          </div>
          <div className="productdisplay-right-price-new">
            ${product.new_price}
          </div>
        </div>
        <div className="productdisplay-right-description">
          Very comfortable to wear & light weight: These apron coat are specially designed for ESD Works & Very Comfortable to wear for Long Hours.
100% Static Dissipative : As these coat are made up of Polyester , so these are 100 % Safe for ESD works & also Resistive to Static Charge.
Surface resistance: 106?~1011? : ESD Aprons are Safe & have the resistance against charge.
Best for ESD area, assembly lab, scientific lab : These Apron are highly suitable for Assembly work like SMD, Robotics or any type of semiconductor based Work.
Image may vary due to photographic effect
        </div>
        <div className="productdisplay-right-size">
          <h1>Select Size</h1>
          <div className="productdisplay-right-size">
            <div>S</div>
            <div>M</div>
            <div>L</div>
            <div>XL</div>
            <div>XXL</div>
          </div>
        </div>
        <button onClick={()=>addToCart(product.id)}>Add to cart</button>
        <p className="productdisplay-right-category">
          <span>Category</span> Women- Tshirt crop top
        </p>
        <p className="productdisplay-right-category">
          <span>Tags</span> Modern latest 
        </p>
      </div>
    </div>
  )
}

export default ProductDisplay
