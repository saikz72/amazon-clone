import React from "react";
import banner from "../assets/Amazon-Prime-Day-2018-Featured-Banner.jpg";
import "../styles/Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <img className="home_image" src={banner} alt="banner" />
      {/* Product id, titile. price, rating, image */}
      <div className="home_row">
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
          image={banner}
        />
      </div>
      <div className="home_row">
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
          image={banner}
        />
        <Product
          id="123123123"
          title="The Lean Startup: How to cope with post depression"
          price={11.99}
          rating={5}
          image={banner}
        />
      </div>
      <div className="home_row">
        <Product
          id="123123123"
          title="The Lean Startup: How to cope with post depression"
          price={11.99}
          rating={5}
          image={banner}
        />
      </div>
      {/*TODO --> change image */}
      {/* Product */}
    </div>
  );
}

export default Home;