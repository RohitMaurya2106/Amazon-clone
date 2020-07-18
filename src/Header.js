import React from 'react';
import "./Header.css";
import { Link } from 'react-router-dom';
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket"
import { useStateValue } from "./StateProvider";

function Header() 
{

    const [{ basket }] = useStateValue();

    return <nav className="header">
                <Link to="/">
                    <img className="header_logo" src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="" /> 
                </Link>

             {/* Search bar */}
                <input type="text" className="header_searchInput" />
                <SearchIcon className="header_searchIcon" />       
     
             {/* 3 links */}
                <div className="header_nav">
                    {/* 1st link */}
                            <Link to="/login" className="header_link">
                                <div className="header_option">
                                    <span className="header_optionLineOne">Hello Qazi</span>
                                    <span className="header_optionLineTwo">Sign In</span>
                                </div>
                            </Link>
                    {/* 2nd link */}
                            <Link to="/" className="header_link">
                                <div className="header_option">
                                    <span className="header_optionLineOne">Return</span>
                                    <span className="header_optionLineTwo">& Order</span>
                                </div>
                            </Link>
                    {/* 3rd link */}
                            <Link to="/" className="header_link">
                                <div className="header_option">
                                    <span className="header_optionLineOne">Your</span>
                                    <span className="header_optionLineTwo">Prime</span>
                                </div>
                            </Link>
                    {/* 4th link */}
                            <Link to="/checkout" className="header_link">
                                <div className="header_optionBasket">
                                    <ShoppingBasketIcon/>
<span className="header_optionLineTwo header_basketCount">{basket.length}</span>
                                </div>
                            </Link> 
                </div>       
            
            
            </nav>
    
}

export default Header;



