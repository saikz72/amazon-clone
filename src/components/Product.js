import React from "react";
import "../styles/Product.css";
import { useStateValue } from "./StateProvider";

function Product({ title, id, rating, price, image }) {
  const [{}, dispatch] = useStateValue();

  //add item to basket function
  const addToBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        rating: rating,
        price: price,
      },
    });
  };
  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_) => (
              <span>⭐️</span>
            ))}
        </div>
      </div>
      <img src={image} alt="product image" />
      <button onClick={addToBasket}>Add to basket</button>
    </div>
  );
}

export default Product;
