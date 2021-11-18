import { Link } from 'gatsby';
import React, {useState} from 'react';

export default function Navbar() {
   const name = "Betatest";
   
   const [ToggleMenu, setToggleMenu] = useState(false)

   return (
      <div>
         <header className="flex justify-between">
            <Link to="/" className="md:text-3xl flex text-2xl text-white md:text-left text-center font-semibold font-title" title="home"> {name}</Link>

            <button className="md:hidden flex" type="button" onClick={() => setToggleMenu((prev) => (!prev))}>
               <svg className="h-9 w-9 fill-current text-white" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
               </svg>
            </button>

            {/* ================= Overlay Navbar for mobile device =================  */}

            {/* <nav className="mobile">
               <nav className="submenu flex flex-col text-center">
                  <Link to="/" className="text-3xl text-white">Portfolio </Link>
                  <Link to="/" className="text-3xl text-white">About </Link>
                  <Link to="/" className="text-3xl text-white">Contact </Link>
               </nav>
            </nav> */}

            <div className="md:flex hidden ">
               <Link to="/" className="md:text-xl text-xl text-white font-base font-title pr-10 text-opacity-75 hover:text-opacity-100" title="Portfolio">Nav-1</Link>
               <Link to="/" className="md:text-xl text-xl text-white font-base font-title pr-10 text-opacity-75 hover:text-opacity-100" title="About">Nav-2</Link>
               <Link to="/" className="md:text-xl text-xl text-white font-base font-title text-opacity-75 hover:text-opacity-100" title="About">Nav-3</Link>
            </div>
            
         </header>


      </div>
   )
}
