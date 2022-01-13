import * as React from "react"
/* import { StaticImage } from "gatsby-plugin-image" */
import Navbar from "../components/Navbar"
import Wave from "../components/wave"
import Footer from "../components/footer"
import Seo from "../components/seo"

export default function home() {
   return (
      <div className="md:m-0 mx-10">
         <Wave />
         <div className="md:max-w-3xl max-w-lg m-auto">
            <nav className="mt-32 mb-16">
               <Seo title="Home" description="this is my web"/>
               <Navbar />
               <p className="text-base text-green-400 font-sm font-title leading-loose">Ordinary boy with full imaginary idea.</p>
               <p className="text-base text-white font-sm font-title">Motion & Graphic Design.</p>
            </nav>

            <section className="flex md:flex-row flex-col justify-between">
               <article className="left text-white md:w-2/5 w-none">
                  <p className="block text-xl text-justify max-w-prose">
                     Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                     Assumenda impedit officia aliquam nulla voluptatum, sint,
                     tempora culpa voluptatem ipsa nemo aliquid illo amet unde
                     recusandae tempore magnam itaque dicta. Quos?
                  </p>
                  <br />
                  <p className="block text-xl text-justify max-w-prose">
                     Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                     Assumenda impedit officia aliquam nulla voluptatum, sint,
                     tempora culpa voluptatem ipsa nemo aliquid illo amet unde
                     recusandae tempore magnam itaque dicta. Quos?
                  </p>
                  <br />
               </article>
               <article className="right block text-white md:w-2/5 w-none">
                  <p className="text-xl block text-justify max-w-prose">
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

