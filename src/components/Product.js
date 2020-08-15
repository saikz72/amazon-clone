import React from "react";
import "../styles/Product.css";
import star_wars from "../assets/star_wars.jpg";

function Product({ title, id, rating, price, image }) {
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
              <p>⭐️</p>
            ))}
        </div>
      </div>
      <img src={star_wars} alt="product image" />
      <button>Add to basket</button>
    </div>
  );
}

export default Product;
