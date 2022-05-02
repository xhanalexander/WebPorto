import * as React from "react"
/* import { StaticImage } from "gatsby-plugin-image" */
import Seo from "../components/seo"
import Layout from "../components/layout"

export default function home() {
   return (
      <Layout>
         <div className="md:m-0 mx-10">
            <Seo 
            title="Home"
            />
         </div>
         <section 
            className="flex md:flex-row flex-col justify-between"
            data-sal="slide-up"
            data-sal-duration="700"
            data-sal-easing="easeOutCubic"
         >
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
      </Layout>
   )
}

