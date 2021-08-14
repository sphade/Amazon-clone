import React from "react";
import real from "./real.png";
import "./header.css";
import { Search, ShoppingCart, SportsBasketball } from "@material-ui/icons";
import { Link } from "react-router-dom";
import {useStateValue} from './StateProvider'
function Header() {
  const [{basket}] = useStateValue()
  return (
    <nav className="header">
      <Link to="/">
        <img src={real} alt="logo" className="header__logo" />
      </Link>
      <div className="header__search">
        <input type="text" className="header__searchInput" />
        <Search className="header__searchIcon" />
      </div>

      <div className="header__nav">
        <Link to="/checkout" className="header__link">
          <div className="header__option">
            <span className="header__optionOne">hello lawal</span>
            <span className="header__optionTwo">sign in</span>
          </div>
        </Link>
        <Link to="/checkout" className="header__link">
          <div className="header__option">
            <span className="header__optionOne">returns</span>
            <span className="header__optionTwo">& orders</span>
          </div>
        </Link>
        <Link to="/checkout" className="header__link">
          <div className="header__option">
            <span className="header__optionOne"> your</span>
            <span className="header__optionTwo">prime</span>
          </div>
        </Link>
        <Link to="/checkout" className="header__link">
          <div className="header__shoppingBasket">
            <ShoppingCart />
            <span>{
              basket.length
            }</span>
          </div>{" "}
        </Link>
      </div>
    </nav>
  );
}

export default Header;
