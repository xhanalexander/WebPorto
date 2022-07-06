import * as React from "react"
/* import { StaticImage } from "gatsby-plugin-image" */
import Seo from "../components/seo"
import Layout from "../components/layout"
import TouchNSlide from "../images/tns.gif"
import amaze from "../images/amazon.gif"
import TouchNSlides from "../images/tns2.gif"
import gyro from "../images/gyro.gif"
import mito from "../images/mito.gif"

export default function home() {
   return (
      <Layout>
         <div className="md:m-0 mx-10">
            <Seo 
            title="Home"
            description="xhanalexander, I am a freelance and ongoing college student majoring in computer science, currently live in Jakarta, 
            passionate at Digital Design, UI Design, and Motion Graphic."
            />
         </div>
         <section  className="flex md:flex-row flex-col justify-between">
            <article 
               className="left text-white md:w-2/5 w-none"
            >
               <a href="https://xhanalexander.github.io/preview1/">
                  <img src={TouchNSlide} alt="TouchNSlide" title="TouchNslide" />
               </a>
               <h1 className="text-xl my-2 text-white">this project is forked from Ikeryou. </h1>
               <br />
               <a href="https://xhanalexander.github.io/preview2/">
                  <img src={amaze} alt="AmazeNFine Typograph Gyroscope" title="Typograph Gyroscope" />
               </a>
               <h1 className="text-xl my-2 text-white">Play it on mobile phone to configure the slant and bold text using Gyroscope from phone</h1>
               <br />
            </article>
            <article 
               className="right block text-white md:w-2/5 w-none"
            >
               <a href="https://xhanalexander.github.io/preview3/">
                  <img src={TouchNSlides} alt="Touch N Slides" title="TouchNSlide - 2" />
               </a>
               <h1 className="text-xl my-2 text-white">this project also is forked from Ikeryou. </h1>
               <br />
               <a href="https://xhanalexander.github.io/preview5/">
                  <img src={gyro} alt="Gyroscope" title="Gyroscope Gif" />
               </a>
               <h1 className="text-xl my-2 text-white">simple gif configuration with gif image to play with</h1>
               <br />
               <a href="https://xhanalexander.github.io/preview6/">
                  <img src={mito} alt="Differential growth" title="Differential growth" />
               </a>
               <h1 className="text-xl my-2 text-white">make differential growth from single line</h1>
               <br />
            </article>
         </section>
      </Layout>
   )
}

