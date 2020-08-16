import React from "react";
import "../styles/Home.css";
import Product from "./Product";
import star_wars from "../assets/star_wars.jpg";
import banner from "../assets/Amazon-Prime-Day-2018-Featured-Banner.jpg";

function Home() {
  return (
    <div className="home">
      <img className="home_image" src={banner} alt="banner" />
      {/* Product id, titile. price, rating, image */}
      <div className="home_row">
        <Product
          id="123123123"
          title="The Lean Startup: How to cope with post depression"
          price={110.99}
          rating={5}
          image={star_wars}
        />
        <Product
          id="123123123"
          title="The Lean Startup: How to cope with post depression"
          price={11.99}
          rating={2}
          image={star_wars}
        />
      </div>
      <div className="home_row">
        <Product
          id="123123123"
          title="The Lean Startup: How to cope with post depression"
          price={11.99}
          rating={1}
          image={star_wars}
        />
        <Product
          id="123123123"
          title="The Lean Startup: How to cope with post depression"
          price={11.99}
          rating={5}
          image={banner}
        />
        <Product
          id="123123123"
          title="The Lean Startup: How to cope with post depression"
          price={11.99}
          rating={5}
          image={star_wars}
        />
      </div>
      <div className="home_row">
        <Product
          id="123123123"
          title="The Lean Startup: How to cope with post depression"
          price={11.99}
          rating={4}
          image={star_wars}
        />
      </div>
      {/*TODO --> change image */}
      {/* Product */}
    </div>
  );
}

export default Home;
