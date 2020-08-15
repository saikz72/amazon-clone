import React from "react";
import { useStateValue } from "./StateProvider";
import banner from "../assets/Amazon-Prime-Day-2018-Featured-Banner.jpg";
import "../styles/Checkout.css";
import CheckoutProduct from "./CheckoutProduct";

function Checkout() {
  const [{ basket }] = useStateValue();
  return (
    <div className="checkout">
      <img className="checkout__ad" src={banner} alt="checkout ad" />
      {basket?.length === 0 ? (
        <div>
          <h2>Your shopping basket is empty</h2>
          <p>
            You have no items in your basket. To buy one, click on "Add to
            basket" next to the item
          </p>
        </div>
      ) : (
        <div>
          <h2 Checkout__title>Your shopping basket</h2>
          {/*List out all of the checkout products */}
          {basket.map((item) => (
            <CheckoutProduct
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}
            />
          ))}
          ;
        </div>
      )}
    </div>
  );
}

export default Checkout;
