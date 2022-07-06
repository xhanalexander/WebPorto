import { graphql, Link } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import React from 'react'
import Layout from '../../components/layout'
import Seo from '../../components/seo'

export default function index({ data }) {
   const project = data.allMarkdownRemark.nodes

   return (
      <Layout>
         <Seo title='Portfolio' 
         description='All of xhanalexander portofolio'
         />
            <div>
               {project.map(project => (
                  <Link to={project.fields.slug}>
                     <div 
                        className='flex flex-col my-7'
                        data-sal="slide-up"
                        data-sal-duration="750"
                        data-sal-easing="ease"
                     >
                        <GatsbyImage 
                           image={getImage(project.frontmatter.thumbnail)} 
                           alt={project.frontmatter.title}
                           title={project.frontmatter.title}
                           className='rounded-lg my-2 hover:'
                           />
                        <p className='text-white text-3xl mt-4 font-semibold text-center'>{project.frontmatter.title}</p>
                        <p className='text-gray-400 text-lg mt-4'>{project.frontmatter.description}</p>
                        <br />
                     </div>
                  </Link>
               ))}
            </div>
      </Layout>
   )
}

// export page querry
export const pageQuery = graphql`
query PortfolioQuery {
   allMarkdownRemark(sort: {order: DESC, fields: frontmatter___date}) {
     nodes {
       fields {
         slug
       }
       frontmatter {
         title
         description
         date
         thumbnail {
           childImageSharp {
             gatsbyImageData(blurredOptions: {})
           }
         }
       }
     }
   }
 }
`
