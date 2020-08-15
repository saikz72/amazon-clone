import React from "react";
import logo from "../assets/logo.png";
import "../styles/Header.css";
import { Link } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasket from "@material-ui/icons/ShoppingBasket";
import { useStateValue } from "./StateProvider";

function Header() {
  const [{ basket }, dispatch] = useStateValue();

  console.log(basket.length);
  return (
    <nav className="header">
      {/*logo on the left */}
      <Link to="/">
        <img className="header__logo" src={logo} alt="amazon logo" />
      </Link>
      {/* Search box */}
      <div className="header__search">
        <input className="header__searchInput" type="text" />
        <SearchIcon className="header__searchIcon" />
      </div>
      {/* 3 Links */}
      <div className="header__nav">
        {/* 1st Link */}
        <Link className="header__link" to="/Login">
          <div className="header__option">
            <span className="header__optionLineOne">Hello Saikou</span>
            <span className="header__optionLineTwo">Sign In</span>
          </div>
        </Link>

        {/* 2nd Link */}
        <Link className="header__link" to="/Login">
          <div className="header__option">
            <span className="header__optionLineOne">Returns</span>
            <span className="header__optionLineTwo">& Orders</span>
          </div>
        </Link>

        {/* 3rd Link */}
        <Link className="header__link" to="/Login">
          <div className="header__option">
            <span className="header__optionLineOne">Your</span>
            <span className="header__optionLineTwo">Prime</span>
          </div>
        </Link>
      </div>
      {/* 4th Link */}
      <Link className="header__link" to="/checkout">
        <div className="header__optionBasket">
          {/* Shopping icon */}
          <ShoppingBasket />
          {/* Number of items in the basket */}
          <span className="header__optionLineTwo header__basketCount">
            {basket?.length}
          </span>
        </div>
      </Link>
    </nav>
  );
}

export default Header;
