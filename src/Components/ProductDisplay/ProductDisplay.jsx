import React, { useContext } from 'react'
import './ProductDisplay.css'
import { FaStar } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";
import { ShopContext } from '../../Context/ShopContext';

const ProductDisplay = (props) => {
    const {product} = props;
    const {addToCart} = useContext(ShopContext);
  return (
    <div className='productdisplay'>
        <div className="productdisplay-left">
            <div className="productdisplay-img-list">
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
            </div>
            <div className="productdisplay-img">
                <img className='productdisplay-main-img' src={product.image} alt="" />
            </div>
        </div>
        <div className="productdisplay-right">
            <h1>{product.name}</h1>
            <div className="productdisplay-right-stars">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaRegStar />
                <p>(122)</p>
            </div>
            <div className="productdisplay-right-prices">
                <div className="productdisplay-right-price-old">₹{product.old_price}</div>
                <div className="productdisplay-right-price-new">₹{product.new_price}</div>
            </div>
            <div className="productdisplay-right-description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam aliquam tempore modi alias veritatisz 
                incidunt, consequatur optio corporis facilis, at inventore vero corrupti eos. Odit officia enim harum nisi blanditiis!
            </div>
            <div className="productdisplay-right-size">
                <h1>Select Size</h1>
                <div className="productdisplay-right-sizes">
                    <div>S</div>
                    <div>M</div>
                    <div>L</div>
                    <div>XL</div>
                    <div>XXL</div>
                </div>
            </div>
            <button onClick={()=>{addToCart(product.id)}}>Add To Cart</button>
            <p className="productdisplay-right-category">
                <span>Category: </span>
                Women, T-Shirt, Crop Top
            </p>
            <p className="productdisplay-right-category">
                <span>Tags:</span>
                Modern, Latest
            </p>
        </div>
    </div>
  )
}

export default ProductDisplay