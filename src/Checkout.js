import React from "react";
import { useStateValue } from "./StateProvider";
import "./checkout.css";
import banner3 from "./banner3.jpg";
import CheckoutProduct from "./CheckoutProduct";

function Checkout() {
  const [{ basket }] = useStateValue();
  return (
    <div className="checkout">
      <img src={banner3} alt="ad" className="checkout__ad" />
      {basket.length === 0 ? (
        <div>
          <h2>Your shopping Bag is empty</h2>
          <p>
            you have no items in your basket. to buy one or more item, click on
            the "add to basket " button next to the item
          </p>
        </div>
      ) : (
        <div>
          <h2 className="checkout__title">your shopping Basket</h2>
          {basket.map((item) => {
            return (
              <CheckoutProduct
                id={item.id}
                title={item.title}
                price={item.price}
                rating={item.rating}
                image={item.image}
              />
            );
          })}
        </div>
      )}
    </div>
  );
}

export default Checkout;
