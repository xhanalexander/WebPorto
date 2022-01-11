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
            <div className="pattern-dots-lg transform translate-y-8 translate-x-8">
               <StaticImage 
                  src="../../images/me.jpg" 
                  alt="profile picture"
                  placeholder="dominantColor"
                  className='transform -translate-y-8 -translate-x-8'
                  title="wassup"
               />
            </div>
            

            <section className="flex flex-col justify-between mt-20">

               <article className="content-about text-white pattern-checks-sm bg-blue white">
                  <h1 className="text-4xl text-white font-semibold pb-5 leading-10 flex flex-row">Hi I'm Alexander</h1>
                  <p className="block text-xl text-justify leading-6">
                     Some freelance ongoing college students major in computer science, currently live in
                     <a href='https://en.wikipedia.org/wiki/Jakarta'> Jakarta</a>, passionate at Digital Design, UI, and Video Editor.
                     since junior highschool I'm interested designing so I often take part in poster competition and win
                  </p>
                  <br />
                  <p className="block text-xl text-justify leading-6">
                     Past project I have worked create Music Videos artist from my brothers. We 
                  </p>
               </article>
            </section>
         </div>
         <Footer/>
         
      </div>
   )
}
