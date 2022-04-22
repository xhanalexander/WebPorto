import { Link } from 'gatsby';
import React, { useState } from 'react';
import { useStaticQuery, graphql } from 'gatsby';

export default function Navbar() {

   const data = useStaticQuery(graphql`
      query NickName {
         site {
            siteMetadata {
               title
            }
         }
      }
  `)

   const { title } = data.site.siteMetadata
   const [show, setstate] = useState(false)

   return (
      <header className="flex justify-between">
         <Link to="/" className="md:text-3xl flex text-2xl text-white md:text-left text-center font-semibold font-title" title="Home"> {title} </Link>

         <button className="md:hidden" type="button" onClick={() => setstate(!show)}>
            {
               show ?
                  <nav className="md:hidden mobile block transition-all inset-0 backdrop-filter backdrop-blur bg-black bg-opacity-75 z-10">
                     <nav className="submenu flex flex-col text-center inset-0">
                        <Link to="/" className="transition duration-300 text-3xl text-white leading-loose hover:text-green-400 ">Home </Link>
                        <Link to="../portfolio" className="transition duration-300 text-3xl text-white leading-loose hover:text-green-400 ">Portfolio </Link>
                        <Link to="../about" className="transition duration-300 text-3xl text-white leading-loose hover:text-green-400 ">About </Link>
                     </nav>
                  </nav> : null
            }
            <svg className="h-9 w-9 fill-current text-white fixed z-20 md:right-9 inline " viewBox="0 0 24 24" stroke="currentColor">
               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
         </button>

         <nav className="md:inline-flex hidden ">
            <Link to="/" className="md:text-lg text-xl text-white font-title uppercase pr-9 text-opacity-100" title="Home" activeClassName='text-green-400 text-opacity-100'>Home</Link>
            <Link to="../portfolio" className="md:text-lg text-xl text-white font-title pr-9 uppercase text-opacity-100" title="Portfolio" activeClassName='text-green-400 text-opacity-100'>Portfolio</Link>
            <Link to="../about" className="md:text-lg text-xl text-white font-title uppercase text-opacity-100" title="About" activeClassName='text-green-400 text-opacity-100'>About</Link>
         </nav>
      </header>
   )
}
