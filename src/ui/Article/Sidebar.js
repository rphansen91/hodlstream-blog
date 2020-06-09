import React from "react";
// import { compose } from "redux";
import Typography from "@material-ui/core/Typography";
import { NewsDisplayAd } from "../../ads/slots";
import Article from "../Article";
// import { withPost } from "../../store/reducers/post";
// import withArticles from "./withArticles";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import { Link, graphql, useStaticQuery } from "gatsby";
import CircularProgress from "@material-ui/core/CircularProgress";
import orderBy from 'lodash/orderBy'

export const query = graphql`
query Sidebar {
  blockQl {
    news {
      url
      title
      author
      source {
        name
      }
      publishedAt
      urlToImage
      content
      htmlContent
    }
  }
}
`

export default ({ q, activePost, loading, error, filter = v => v }) => {
  const data = useStaticQuery(query)
  return (
  <div className="article-sidebar">
    <section />
    <Typography variant="h4" color="textPrimary" className="my-2 text-center">
      Articles {error ? `- ${error}` : ""}
    </Typography>

    {loading && <CircularProgress style={{ margin: "auto" }} />}
    {orderBy(data.blockQl && (data.blockQl.news || []), 'publishedAt', 'desc').filter(filter).slice(0, 6).reduce((acc, a, i) => {
          if (i && i % 2 === 0) {
            acc.push(
              <NewsDisplayAd
                style={{
                  display: "block",
                  maxWidth: "100%",
                  margin: "auto",
                  width: 350
                }}
                key={i + "ad"}
              />
            );
          }
          const isActive =
            activePost &&
            activePost.publishedAt === a.publishedAt &&
            activePost.title === a.title;
          acc.push(
            <Link
              aria-label="Read More"
              style={{ padding: '12px 24px', display: 'block' }}
              to={`/post/${a.publishedAt}/`}
              key={i}
            >
              <Article
                isActive={isActive}
                title={a.title}
                image={i < 4 && a.urlToImage}
                actions={
                  <CardActions>
                    <Button color="primary" aria-label="Read More" variant="contained" color="secondary">
                      {isActive ? "Currently Reading" : "Read More"}
                    </Button>
                  </CardActions>
                }
              />
            </Link>
          );
          return acc;
        }, [])}
  </div>
);
      }