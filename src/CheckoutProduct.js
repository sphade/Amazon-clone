import React from "react";
import './checkoutProduct.css'
function CheckoutProduct({ id, title, price, rating, image }) {
  return (
    <div className="checkoutProduct">
      <img src={image} alt=""  className='checkoutProduct__image'/>
      <div className="checkoutProduct__info">
        <p className="checkoutProduct__title">{title}</p>

        <p className="checkoutProduct__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="checkoutProduct__rating">
          {Array(rating)
            .fill()
            .map((_) => {
              return <p >⭐</p>;
            })}
              </div>
              {
                //   <button onClick={addToBasket}>Remove from basket</button>
              }
              
      </div>
    </div>
  );
}

export default CheckoutProduct;
