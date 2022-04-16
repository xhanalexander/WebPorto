import * as React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCalendarAlt } from "@fortawesome/free-regular-svg-icons"

const BlogPostTemplate = ({ data, location }) => {
   const post = data.markdownRemark
   const siteTitle = data.site.siteMetadata?.title || `Title`
   // const { previous, next } = data

   return (
      <Layout location={location} title={siteTitle} >
         <Seo
            title={post.frontmatter.title}
            description={post.frontmatter.description || post.excerpt}
         />
         <article
            className="blog-post text-white"
            itemScope
            itemType="http://schema.org/Article"
         >
            <header className="text-white mt-6 mb-8">
               <h1 itemProp="headline" className="text-white text-center text-4xl font-semibold">{post.frontmatter.title}</h1>
               <section className="flex flex-row justify-center">
                  <FontAwesomeIcon icon={faCalendarAlt} className="fa-2xl my-auto mr-2" />
                  <p className="text-white">{post.frontmatter.date}</p>
               </section>
            </header>
            <section
               className="text-white text-justify text-xl"
               dangerouslySetInnerHTML={{ __html: post.html }}
               itemProp="articleBody"
            />
            <hr />
         </article>
         {/* <nav className="blog-post-nav">
            <ul
               className="text-white"
               style={{
                  display: `flex`,
                  flexWrap: `wrap`,
                  justifyContent: `space-between`,
                  listStyle: `none`,
                  padding: 0,
               }}
            >
               <li className="text-green-400">
                  {previous && (
                     <Link to={previous.fields.slug} rel="prev">
                        ← {previous.frontmatter.title}
                     </Link>
                  )}
               </li>
               <li className="text-green-400">
                  {next && (
                     <Link to={next.fields.slug} rel="next">
                        {next.frontmatter.title} →
                     </Link>
                  )}
               </li>
            </ul>
         </nav> */}
      </Layout>
   )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug(
    $id: String!
    $previousPostId: String
    $nextPostId: String
  ) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(id: { eq: $id }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "DD MMMM YYYY")
        description
      }
    }
    previous: markdownRemark(id: { eq: $previousPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
    next: markdownRemark(id: { eq: $nextPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
  }
`
