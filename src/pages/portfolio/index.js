import { graphql, Link } from 'gatsby'
import React from 'react'
import Layout from '../../components/layout'
import Seo from '../../components/seo'

export default function index({ data }) {
   console.log(data)
   const project = data.allMarkdownRemark.nodes

   return (
      <Layout>
         <div>
            <Seo title='Portfolio'/>
            <div>
               {project.map(project => (
                  <Link to={"\content\blog" + project.fields}>
                     <div className='flex flex-col my-5'>
                        <h2 className='text-white text-3xl font-semibold'>{project.frontmatter.title}</h2>
                        <p className='text-white text-lg'>{project.frontmatter.description}</p>
                     </div>
                  </Link>
               )
               )}
            </div>
         </div>
      </Layout>
   )
}

// export page querry
export const pageQuery = graphql`
query MyQuery {
   allMarkdownRemark {
     nodes {
       frontmatter {
         title
         description
       }
     }
   }
 }
`
