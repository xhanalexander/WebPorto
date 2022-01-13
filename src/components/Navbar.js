import { Link } from 'gatsby';
import React, { useState } from 'react';

export default function Navbar() {
   const name = "Xhanalexander";
   const [show, setstate] = useState(false)

   return (
      <div>
         <header className="flex justify-between">
            <Link to="../work" className="md:text-3xl flex text-2xl text-white md:text-left text-center font-semibold font-title" title="home"> {name}</Link>

            <button className="md:hidden transition" type="button" onClick={()=>setstate(!show)}>
               {
                  show?
                  <nav className="md:hidden mobile block transition inset-0 backdrop-filter backdrop-blur bg-black bg-opacity-75 z-10">
                     <nav className="submenu flex flex-col text-center inset-0">
                        <Link to="../portfolio" className="transition duration-300 text-3xl text-white leading-loose hover:text-green-400 ">Portfolio </Link>
                        <Link to="../about" className="transition duration-300 text-3xl text-white leading-loose hover:text-green-400 ">About </Link>
                        <Link to="../contact" className="transition duration-300 text-3xl text-white leading-loose hover:text-green-400 ">Contact </Link>
                     </nav>
                  </nav>:null
               }
               <svg className="h-9 w-9 fill-current text-white z-20 fixed" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
               </svg>
            </button>

            <div className="md:flex hidden ">
               <Link to="../portfolio" className="md:text-base text-xl text-white font-title uppercase pr-10 text-opacity-75 hover:text-opacity-100" title="Portfolio" activeClassName='text-green-400 text-opacity-100 '>Portfolio</Link>
               <Link to="../about" className="md:text-base text-xl text-white font-title uppercase pr-10 text-opacity-75 hover:text-opacity-100" title="About" activeClassName='text-green-400 text-opacity-100 '>About</Link>
               <Link to="../contact" className="md:text-base text-xl text-white font-title uppercase text-opacity-75 hover:text-opacity-100" title="Contact" activeClassName='text-green-400 text-opacity-100 '>Contact</Link>
            </div>

         </header>


      </div>
   )
}
