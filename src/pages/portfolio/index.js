import { graphql, Link } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import React from 'react'
import Layout from '../../components/layout'
import Seo from '../../components/seo'

export default function index({ data }) {
   const project = data.allMarkdownRemark.nodes

   return (
      <Layout>
         <div>
            <Seo title='Portfolio' />
            <div>
               {project.map(project => (
                  <Link to={project.fields.slug}>
                     <div className='flex flex-col'>
                        <GatsbyImage 
                           image={getImage(project.frontmatter.thumbnail)} 
                           alt={project.frontmatter.title}
                           title={project.frontmatter.title}
                           className='rounded-lg my-2 hover:'
                           />
                        <p className='text-white text-2xl font-semibold'>{project.frontmatter.title}</p>
                        <p className='text-gray-400 text-lg'>{project.frontmatter.description}</p>
                        <br /><br />
                     </div>
                  </Link>
               ))}
            </div>
         </div>
      </Layout>
   )
}

// export page querry
export const pageQuery = graphql`
query PortfolioQuery {
   allMarkdownRemark(sort: {order: ASC, fields: frontmatter___date}) {
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
