import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../ui/SEO"
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import CardActions from "@material-ui/core/CardActions";
import {
    TopBannerDisplayAd,
    BottomBannerDisplayAd,
} from "../ads/slots";
import Article from "../ui/Article";

export default ({ data }) => (
    <Layout>
        <SEO title={"Blog | Hodl Stream"} path={"/blog"} />
        <TopBannerDisplayAd />
        <section />
        <Typography variant="h1" color="textPrimary" className="text-center">
            Blog
        </Typography>
        <section />
        <section className="container">
            <div className="row">
                {data.blockQl.news.reduce((acc, a, i) => {
                    acc.push(
                        <div className="col-lg-4 col-md-6 mb-4" key={i}>
                            <Link
                                aria-label="Read More"
                                className="d-block"
                                to={`/post/${a.id}`}
                            >
                                <Article
                                    imageSize={160}
                                    image={a.urlToImage}
                                    title={a.title}
                                    style={{ width: "100%" }}
                                    actions={
                                        <CardActions>
                                            <Button color="primary" aria-label="Read More">
                                                Read More
                                            </Button>
                                        </CardActions>
                                    }
                                />
                            </Link>
                        </div>
                        // <div className="col-lg-4 col-md-6 mb-4" key={i + "ad"}>
                        //   <NewsDisplayAd
                        //     style={{ maxWidth: "100%", margin: "auto", width: 350 }}
                        //   />
                        // </div>
                    );
                    return acc;
                }, [])
                }
            </div>
        </section>
        <BottomBannerDisplayAd />
    </Layout>
)

export const query = graphql`
query {
    blockQl {
        news {
            id
            title
            urlToImage
        }
    }
}
`