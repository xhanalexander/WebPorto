module.exports = {
   siteMetadata: {
      title: `xhanalexander`,
      author: {
         name: `Alexander Achmad Khan`,
         summary: `I am Alexander Achmad Khan an ongoing college students who lives in Jakarta and like to studies in tech and art.`,
      },
      description: `A Personal website portfolio.`,
      siteUrl: `https://xhanalexander.vercel.app/`,
      social: {
         twitter: `xhanalexander`,
      },
   },
   plugins: [
      {
         resolve: `gatsby-plugin-google-gtag`,
         options: {
            trackingIds: [
               "G-LXQ5CQ9CFT", // Google Analytics / GA
            ],
            // This object is used for configuration specific to this plugin
            pluginConfig: {
               // Puts tracking script in the head instead of the body
               head: true,
            },
         },
      },
      `gatsby-plugin-postcss`,
      `gatsby-plugin-image`,
      {
         resolve: `gatsby-plugin-scroll-reveal`,
         options: {
            threshold: 1, // Percentage of an element's area that needs to be visible to launch animation
            once: true, // Defines if animation needs to be launched once
            disable: false, // Flag for disabling animations

            // Advanced Options
            selector: "[data-sal]", // Selector of the elements to be animated
            animateClassName: "sal-animate", // Class name which triggers animation
            disabledClassName: "sal-disabled", // Class name which defines the disabled state
            rootMargin: "0% 10%", // Corresponds to root's bounding box margin
            enterEventName: "sal:in", // Enter event name
            exitEventName: "sal:out", // Exit event name
         },
      },
      {
         resolve: `gatsby-source-filesystem`,
         options: {
            path: `${__dirname}/content/blog`,
            name: `blog`,
         },
      },
      {
         resolve: `gatsby-source-filesystem`,
         options: {
            name: `images`,
            path: `${__dirname}/src/images`,
         },
      },
      {
         resolve: `gatsby-transformer-remark`,
         options: {
            plugins: [
               {
                  resolve: `gatsby-remark-images`,
                  options: {
                     maxWidth: 1080,
                  },
               },
               {
                  resolve: `gatsby-remark-responsive-iframe`,
                  options: {
                     wrapperStyle: `margin-bottom: 1.0725rem`,
                  },
               },
               `gatsby-remark-prismjs`,
               `gatsby-remark-copy-linked-files`,
               `gatsby-remark-smartypants`,
            ],
         },
      },
      `gatsby-transformer-sharp`,
      `gatsby-plugin-sharp`,
      // {
      //   resolve: `gatsby-plugin-google-analytics`,
      //   options: {
      //     trackingId: `ADD YOUR TRACKING ID HERE`,
      //   },
      // },
      {
         resolve: `gatsby-plugin-feed`,
         options: {
            query: `
          {
            site {
              siteMetadata {
                title
                description
                siteUrl
                site_url: siteUrl
              }
            }
          }
        `,
            feeds: [
               {
                  serialize: ({ query: { site, allMarkdownRemark } }) => {
                     return allMarkdownRemark.nodes.map(node => {
                        return Object.assign({}, node.frontmatter, {
                           description: node.excerpt,
                           date: node.frontmatter.date,
                           url: site.siteMetadata.siteUrl + node.fields.slug,
                           guid: site.siteMetadata.siteUrl + node.fields.slug,
                           custom_elements: [{ "content:encoded": node.html }],
                        })
                     })
                  },
                  query: `
              {
                allMarkdownRemark(
                  sort: { order: DESC, fields: [frontmatter___date] },
                ) {
                  nodes {
                    excerpt
                    html
                    fields {
                      slug
                    }
                    frontmatter {
                      title
                      date
                    }
                  }
                }
              }
            `,
                  output: "/rss.xml",
                  title: "Gatsby Starter Blog RSS Feed",
               },
            ],
         },
      },
      {
         resolve: `gatsby-plugin-manifest`,
         options: {
            name: `xhanalexander`,
            short_name: `xhanalexander`,
            start_url: `/`,
            background_color: `#121212`,
            // This will impact how browsers show your PWA/website
            // https://css-tricks.com/meta-theme-color-and-trickery/
            theme_color: `#34d399`,
            display: `minimal-ui`,
            icon: `src/images/Icon.png`, // This path is relative to the root of the site.
         },
      },
      `gatsby-plugin-react-helmet`,
      // this (optional) plugin enables Progressive Web App + Offline functionality
      // To learn more, visit: https://gatsby.dev/offline
      // `gatsby-plugin-offline`,
   ],
}
