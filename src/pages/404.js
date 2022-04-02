import * as React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const NotFoundPage = ({ data, location }) => {
	const siteTitle = data.site.siteMetadata.title

	return (
		<Layout location={location} title={siteTitle}>
			<Seo title="404: Not Found" />
			<h1 className="text-white text-7xl text-center font-bold tracking-widest leading-loose">404</h1>
			<p className="text-center text-2xl text-white ">Sorry this page doesn't exists :(</p>
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
