import React from "react";
import Layout from "../components/layout"
import Post from "../ui/Post";
import { graphql } from "gatsby"

export default function Template({ data }) {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html: htmlContent } = markdownRemark
  console.log({ frontmatter })
  return (
    <Layout>
      <Post post={{ ...frontmatter, htmlContent }} />
    </Layout>
  )
}

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        publishedAt(formatString: "MMMM DD, YYYY")
        title
        description
        author
        urlToImage
        sourceName
        path
      }
    }
  }
`
