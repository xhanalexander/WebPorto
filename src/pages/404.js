import * as React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
// import imagegif from "../images/404.gif"

const NotFoundPage = ({ data, location }) => {
	const siteTitle = data.site.siteMetadata.title

	return (
		<Layout location={location} title={siteTitle}>
			<Seo title="404: Not Found" />
         {/* <img src={imagegif} alt="404 page" /> */}
			<h1 
            className="text-white text-7xl text-center font-bold tracking-widest leading-loose"
            data-sal="slide-up"
            data-sal-duration="500"
            data-sal-easing="ease"
         >
         404
         </h1>
			<p 
            className="text-center text-2xl text-white "
            data-sal="slide-up"
            data-sal-duration="500"
            data-sal-easing="ease"
         >Sorry this page doesn't exists :(</p>
		</Layout>
	)
}

export default NotFoundPage

export const pageQuery = graphql`
   query {
      site {
         siteMetadata {
         title
         }
      }
   }
`
