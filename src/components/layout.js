import React from 'react'
import Navbar from './Navbar'
import Wave from './wave'
import Footer from './footer'

export default function Layout({ children }) {
   return (
      <div className="md:mx-8 mx-10">
         <Wave />
         <div className="md:max-w-3xl max-w-lg m-auto">
            <nav className="mt-32 mb-16">
               <Navbar />
               <p className="text-base text-green-400 font-sm font-title leading-loose">Ordinary boy with full imaginary idea.</p>
               <p className="text-base text-white font-sm font-title">Motion & Graphic Design.</p>
            </nav>
            { children }
         </div>
         <Footer />
      </div>
   )
}
