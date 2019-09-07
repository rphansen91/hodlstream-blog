const path = require(`path`)

exports.createPages = async (gatsbyApi) => {
  await createCoinPages(gatsbyApi)
  await createArticlePages(gatsbyApi)
  await createMarkdownPages(gatsbyApi)
}

async function createCoinPages ({ actions, graphql }) {
  const { createPage } = actions
  const coinTemplate = path.resolve(`src/templates/coin.js`)
  const coinsResult = await graphql(`
    {
      blockQl {
        all_coins {
          id
        }
      }
    }
  `)

  if (coinsResult.errors) {
    console.log(coinsResult.errors)
    throw new Error("Things broke, see console output above")
  }

  coinsResult.data.blockQl.all_coins.forEach((coin) => {
    createPage({
      path: `coin/${coin.id}`,
      component: coinTemplate,
      context: {
        id: coin.id
      },
    })
  })
}

async function createArticlePages ({ actions, graphql }) {
  const { createPage } = actions
  const articlePostTemplate = path.resolve(`src/templates/article.js`)
  const articlesResult = await graphql(`
    {
      blockQl {
        news {
          title
          description
          publishedAt
        }
      }
    }
  `)
  if (articlesResult.errors) {
    console.log(articlesResult.errors)
    throw new Error("Things broke, see console output above")
  }

  articlesResult.data.blockQl.news.forEach((article) => {
    createPage({
      path: `post/${article.publishedAt}`,
      component: articlePostTemplate,
      context: {
        id: article.publishedAt
      },
    })
  })
}

async function createMarkdownPages ({ actions, graphql }) {
  const { createPage } = actions
  const blogPostTemplate = path.resolve(`src/templates/post.js`)
  const result = await graphql(`
    {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 1000
      ) {
        edges {
          node {
            frontmatter {
              path
            }
          }
        }
      }
    }
  `)
  if (result.errors) {
    console.log(result.errors)
    throw new Error("Things broke, see console output above")
  }

  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: node.frontmatter.path,
      component: blogPostTemplate,
      context: {}, // additional data can be passed via context
    })
  })
}