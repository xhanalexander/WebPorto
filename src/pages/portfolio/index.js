import React from 'react'
import Footer from '../../components/footer'
import Navbar from "../../components/Navbar"
import Wave from "../../components/wave"
import Seo from '../../components/seo'

export default function index() {
   return (
      <div className='md:m-0 mx-10'>
         <Wave />
         <div className="md:max-w-3xl max-w-lg m-auto">
            <nav className="mt-32 mb-16">
               <Seo title='Portfolio'/>
               <Navbar />
               <p className="text-base text-green-400 font-sm font-title leading-loose">Ordinary boy with full imaginary idea.</p>
               <p className="text-base text-white font-sm font-title">Motion & Graphic Design.</p>
            </nav>

            <div className="">
               <h1 className="text-white text-4xl text-center">this is portfolio </h1>
               
            </div>
         </div>
         <Footer/>
      </div>
   )
}
