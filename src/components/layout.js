import React from 'react'
import Navbar from './Navbar'
import Wave from './wave'
import Footer from './footer'

export default function Layout({ children }) {
   return (
      <article className="lg:mx-8 mx-10">
         <Wave />
         <main className="lg:max-w-3xl max-w-lg m-auto">
            <nav 
               className="mt-32 mb-16"
               data-sal="slide-up"
               data-sal-duration="700"
               data-sal-easing="ease"
            >
               <Navbar />
               <p className="text-base text-green-400 font-sm font-title leading-loose">The Dreamer, Visioner and Creator.</p>
               <p className="text-base text-white font-sm font-title">Motion & Graphic Design.</p>
            </nav>
            { children }
         </main>
         <Footer />
      </article>
   )
}
