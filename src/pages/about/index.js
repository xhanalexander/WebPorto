import React from 'react'
import { graphql } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import Layout from '../../components/layout'
import myResume from "../about/resume.pdf"
import Seo from '../../components/seo'

export default function index({ data }) {
   const myPic = getImage(data.file.childImageSharp)
   const names = data.site.siteMetadata.author.name

   return (
      <Layout>
         <Seo title="About" 
            description="Alexander Achmad Khan as known as xhanalexander some 
            freelance and ongoing college students major in computer science, currently live in Jakarta, Indonesia.
            passionate at Digital Design, UI Design, and Motion Graphic. 
            "
         />
         <div className="pattern-dots-lg transform translate-y-8 translate-x-8">
            <GatsbyImage
               image={myPic}
               alt="Me chilling in the beach"
               className='transform -translate-y-8 -translate-x-8 rounded-lg'
               title="Wassup"
            />
         </div>

         <section 
            className="flex flex-col justify-between mt-20"
            data-sal="slide-up"
            data-sal-duration="500"
            data-sal-easing="ease"
         >
            <article className="content-about text-white pattern-checks-sm bg-blue white">
               <h1 className="md:text-4xl text-2xl text-white font-semibold pb-5 leading-10">Hi my name is<span className="text-green-400 space-x-1">&nbsp;{names}</span>.</h1>
               <p className="block md:text-xl text-base text-justify leading-6">
                  Some freelance and ongoing college students major in computer science, currently live in
                  <a href='https://en.wikipedia.org/wiki/Jakarta'> Jakarta</a>, passionate at Digital Design, UI Design, and Motion Graphic.
                  Since junior highschool I'm interested digital sketch so I often take part in poster competition. Currently this period
                  I'm freelance on wedding videography to help of my friends works. I spend time period reading and create some visual through code with
                  <a href="https://p5js.org/" target="_blank" rel="noreferrer" className="text-green-400 hover:text-white" title="Info">&nbsp;p5Js</a> a javascript framework and
                  <a href='https://openframeworks.cc/about/' target="_blank" rel="noreferrer" className="text-green-400  hover:text-white" title="Info"> Openframeworks&nbsp;</a>
                  a C++ for creative coding.
               </p>
            </article>
         </section>

         <section 
            className="resume flex justify-center mt-10"
            data-sal="slide-up"
            data-sal-duration="500"
            data-sal-easing="ease"
         >
            <a href={myResume}>
               <button
                  className="flex w-48 justify-center text-xl transition-all ease-out text-green-400 bg-transparent hover:bg-green-400 font-semibold hover:text-white py-2 px-4 border border-green-400 hover:border-transparent rounded-full m-auto tracking-wider"
                  data-sal="slide-up"
                  data-sal-duration="500"
                  data-sal-easing="ease"
                  title="CV">
                  RESUME PDF
               </button>
            </a>
         </section>
      </Layout>
   )
}

export const pageQuery = graphql`
   query MyQuery {
      file(relativePath: {eq: "me.jpg"}) {
         childImageSharp {
            gatsbyImageData(placeholder: DOMINANT_COLOR)
         }
      }
      site {
         siteMetadata {
            author {
               name
            }
         }
      }
   } 
`
