import React from 'react'
import Navbar from "../../components/Navbar"
import Wave from "../../components/wave"

export default function index() {
   return (
      <div>
         <Wave />
         <div className="md:max-w-3xl max-w-lg m-auto">
            <nav className="mt-32 mb-16">
               <Navbar />
               <p className="text-base text-green-400 font-sm font-title leading-loose">Ordinary boy with full imaginary idea.</p>
               <p className="text-base text-white font-sm font-title">Motion & Graphic Design.</p>
            </nav>
            <h1 className="text-white text-4xl text-center">About </h1>
         </div>
         
      </div>
   )
}
