import React, {useState} from 'react'
import {NavLink} from 'react-router-dom';

export default function Navbar2() {
   const [click, setClick] = useState(false);
   const handleClick = () => setClick(!click);

   return (
           <nav className="navbar font-big">
               <div className="nav-container">
                   <NavLink to="/" className="nav-logo">
                       <img src="/images/content/Freshnine.png" alt="Logo" />
                   </NavLink>

                   <ul className={click ? "nav-menu active" : "nav-menu"}>
                       <li className="nav-item">
                           <NavLink
                           exact
                           to="/"
                           activeClassName="active"
                           className="nav-links"
                           onClick={handleClick}
                           >
                               Home
                           </NavLink>
                       </li>
                       <li className="nav-item">
                           <NavLink
                           to="/categories"
                           activeClassName="active"
                           className="nav-links"
                           onClick={handleClick}
                           >
                               Categories
                           </NavLink>
                       </li>
                       <li className="nav-item">
                           <NavLink
                           to="/blog"
                           activeClassName="active"
                           className="nav-links"
                           onClick={handleClick}
                           >
                               Blog
                           </NavLink>
                       </li>
                       <li className="nav-item">
                           <NavLink
                           to="/contact"
                           activeClassName="active"
                           className="nav-links"
                           onClick={handleClick}
                           >
                               Contact Us
                           </NavLink>
                       </li>
                   </ul>
                   <div className="md:hidden flex-none nav-icon pr-7" onClick={handleClick}>
                       <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
                   </div>

                   {/* <div className="md:mr-5 pr-5 md:pb-2">
                       <NavLink
                       className={["cart w-8 h-8", state.cart && Object.keys(state.cart).length > 0 ? "cart-filled" : "",
                       isCartChange ? "animate-bounce" : ""].join(" ")}
                       to="/cart"
                       >
                           <IconCart />
                       </NavLink>
                   </div> */}
               </div>
           </nav>
   )
}

