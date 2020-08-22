import React from "react";
import logo from "../assets/logo.png";
import "../styles/Header.css";
import { Link } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasket from "@material-ui/icons/ShoppingBasket";
import { useStateValue } from "./StateProvider";
import { auth } from "../firebaseConfig";

function Header() {
  const [{ basket, user }, dispatch] = useStateValue();

  const login = () => {
    if (user) {
      auth.signOut();
    }
  };
  return (
    <nav className="header">
      {/*logo on the left */}
      <Link to="/">
        <img className="header__logo" src={logo} alt="amazon logo" />
      </Link>
      {/* Search box */}
      <div className="header__search">
        <inpsut className="header__searchInput" type="text" />
        <SearchIcon className="header__searchIcon" />
      </div>
      {/* 3 Links */}
      <div className="header__nav">
        {/* 1st Link */}
        <Link className="header__link" to={!user && "/Login"}>
          <div onClick={login} className="header__option">
            <span className="header__optionLineOne">Hello {user?.email}</span>
            <span className="header__optionLineTwo">
              {user ? "Sign Out" : "Sign In"}
            </span>
          </div>
        </Link>

        {/* 2nd Link */}
        <Link className="header__link" to="/">
          <div className="header__option">
            <span className="header__optionLineOne">Returns</span>
            <span className="header__optionLineTwo">& Orders</span>
          </div>
        </Link>

        {/* 3rd Link */}
        <Link className="header__link" to="/">
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
