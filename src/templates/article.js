import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Image from "../components/image"
import Post from "../ui/Post"

export default function Template({ data }) {
  const article = data.blockQl.article
  return (
    <Layout>
        <Post post={article} />
    </Layout>
  )
}

export const pageQuery = graphql`
  query($id: String!) {
    blockQl {
      article(id: $id) {
        id
        source {
            id
            name
        }
        author
        title
        description
        content
        htmlContent
        url
        urlToImage
        publishedAt
      }
    }
  }
`