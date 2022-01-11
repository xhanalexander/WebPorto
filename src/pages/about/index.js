import React from 'react'
import Navbar from "../../components/Navbar"
import Wave from "../../components/wave"
import Footer from "../../components/footer"
import { StaticImage } from 'gatsby-plugin-image'

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
            <StaticImage src="../../images/me.jpg" alt='profile picture'/>

            <section className="flex flex-col justify-between mt-20">

               <article className="content-about text-white">
                  <h1 className="text-4xl text-white font-semibold pb-5 leading-10">Hi I'm Alexander</h1>
                  <p className="block text-xl text-justify leading-6">
                     Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                     Assumenda impedit officia aliquam nulla voluptatum, sint,
                     tempora culpa voluptatem ipsa nemo aliquid illo amet unde
                     recusandae tempore magnam itaque dicta. Quos?
                  </p>
                  <br />
                  <p className="block text-xl text-justify leading-6">
                     Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                     Assumenda impedit officia aliquam nulla voluptatum, sint,
                     tempora culpa voluptatem ipsa nemo aliquid illo amet unde
                     recusandae tempore magnam itaque dicta. Quos?
                  </p>
               </article>
            </section>
         </div>
         <Footer/>
         
      </div>
   )
}
