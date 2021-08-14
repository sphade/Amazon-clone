import React from "react";
import "./product.css";
import {useStateValue} from './StateProvider'
function Product({ title, image, rating, id, price }) {
  const [{ }, dispatch] = useStateValue();
  const addToBasket = () => {
    dispatch({
      type: 'ADD_TO_BASKET',
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating:rating
      }
    })
  }
  return (
    <div className="product">
      <div className="product__info">
        <h1 className="product__title">{title}</h1>
        <p className="product__price">
          <small>$</small> <strong>{price}</strong>
        </p>
        <div className="product__rating">{
          Array(rating).fill().map((_) => {
            return <p>⭐</p>
          })
          
        }</div>
      </div>
      <img src={image} alt="" className="product__image" />
      <button onClick={addToBasket}>Add To cart</button>
    </div>
  );
}

export default Product;
