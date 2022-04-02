import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import myResume from "../../../public/Resume.pdf"
import Seo from '../../components/seo'
import Layout from '../../components/layout'

export default function index() {
   return (
      <Layout>
         <Seo title="About" />
         <div className="pattern-dots-lg transform translate-y-8 translate-x-8">
               <StaticImage 
                  src="../../images/me.jpg" 
                  alt="profile picture"
                  placeholder="dominantColor"
                  className='transform -translate-y-8 -translate-x-8 rounded-lg'
                  title="wassup"
               />
            </div>

            <section className="flex flex-col justify-between mt-20">
               <article className="content-about text-white pattern-checks-sm bg-blue white">
                  <h1 className="md:text-4xl text-2xl text-white font-semibold pb-5 leading-10 flex flex-row">Hi my name is<span className="text-green-400 space-x-1">&nbsp;Alexander</span>.</h1>
                  <p className="block md:text-xl text-base text-justify leading-6">
                     Some freelance and ongoing college students major in computer science, currently live in
                     <a href='https://en.wikipedia.org/wiki/Jakarta'> Jakarta</a>, passionate at Digital Design, UI Design, and Motion Graphic.
                     Since junior highschool I'm interested digital sketch so I often take part in poster competition. Currently this period
                     I'm freelance on wedding videography to help of my friends works. I spend time reading and create some visual through code with
                     <a href="https://p5js.org/" target="_blank"  rel="noreferrer" className="text-green-400 hover:text-white" title="Info">&nbsp;p5Js</a> a javascript framework and 
                     <a href='https://openframeworks.cc/about/' target="_blank"  rel="noreferrer" className="text-green-400  hover:text-white" title="Info"> Openframeworks&nbsp;</a> 
                     a C++ for creative coding.
                  </p>
                  <br />
                  <p className="block md:text-xl text-base text-justify leading-6">
                     Past project me and my brother worked on Music Videos artist
                     <a href="https://youtu.be/i0VDVqzVVEQ" target="_blank" className="text-green-400 hover:text-white" title="Youtube Link"  rel="noreferrer">&nbsp;Bangkutaman</a>.
                     Then I worked digital advertising for SevenFest SMAN 7 Jakarta festival (Senior Highschool 7 Jakarta) feature graffiti Artist. Also the recent work from MRT 
                     <a href="https://www.jaklingkoindonesia.co.id/en/about-us" target="_blank" className="text-green-400 hover:text-white" title="Info"  rel="noreferrer">&nbsp;(Jak Lingko)</a>, 
                     featured Jakarta Mayor, and Intiland Industries create <a href="https://youtu.be/P7JJ1ZDumFM" target="_blank" rel="noreferrer" className="text-green-400 hover:text-white" title='Youtube Link'>Digital Banner</a>.
                  </p>
               </article>
            </section>

            <section className="resume flex justify-center mt-10">
               <a href={myResume}>
                  <button 
                     className="flex w-48 justify-center text-xl transition-all ease-out text-green-400 bg-transparent hover:bg-green-400 font-semibold hover:text-white py-2 px-4 border border-green-400 hover:border-transparent rounded-full m-auto tracking-wider" 
                     title="CV">
                        RESUME PDF
                  </button>
               </a>
            </section>
      </Layout>
   )
}
