import React from "react";
// import { compose } from "redux";
// import { connect } from "react-redux";
import { TopBannerDisplayAd, BottomBannerDisplayAd } from "../../ads/slots";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import CircularProgress from "@material-ui/core/CircularProgress";
import PersonIcon from "@material-ui/icons/Person";
import TimelapseIcon from "@material-ui/icons/Timelapse";
import ArticleSidebar from "../Article/Sidebar";
import AddThis from "../AddThis";
// import withArticles from "../Article/withArticles";
import Layout from "../Layout";
import SEO from "../SEO";
import Container from "@material-ui/core/Container";
import Divider from "@material-ui/core/Divider";

const first = a => a && a[0];

const Post = ({ loading, post = {}, path }) => {
  return (
    <Layout
      content={
        <div>
          <SEO
            schema="Article"
            title={`Hodl Stream | ${post.title || ""}`}
            description={post.content}
            path={path}
            images={post.urlToImage}
          />
          <TopBannerDisplayAd />
          {loading && <CircularProgress />}
          {post.urlToImage && (
            <img
              alt={post.title}
              src={post.urlToImage}
              style={{ width: '100%' }}
            />
          )}
          <Container>
          <section style={{ padding: '0.3em' }}>
            <Typography paragraph variant="h1" color="textPrimary">
              {post.title}
            </Typography>

            <div style={{ display: 'flex', paddingBottom: '0.2em', marginBottom: '0.4em' }}>
              <div style={{ textAlign: 'left' }}>
                <Typography
                  variant="caption"
                  color="textSecondary"
                  style={{ display: 'block' }}
                >
                  <PersonIcon style={{ marginRight: '0.1em' }} />
                  {post.author}
                  {post.source && post.source.name ? " - " : ""}
                  {post.source && post.source.name ? post.source.name : ""}
                </Typography>
                <Typography
                  variant="caption"
                  color="textSecondary"
                  style={{ display: 'block' }}
                >
                  <TimelapseIcon style={{ marginRight: '0.1em' }} />
                  {post.publishedAt
                    ? new Date(post.publishedAt).toLocaleString()
                    : ""}
                </Typography>
              </div>
              <div style={{ flexGrow: 1 }} />
              <div className="addthis_inline_share_toolbox" />
              <Divider />
            </div>

            <Typography variant="subtitle1" color="textSecondary">
              {post.content}
            </Typography>
            <div dangerouslySetInnerHTML={{ __html: post.htmlContent }} />
          </section>
          <section className="text-center">
            {post.url && (
              <a href={post.url} target="_blank">
                <Button aria-label="Read More">Read More</Button>
              </a>
            )}
          </section>
          <BottomBannerDisplayAd />
          <AddThis />
          </Container>
        </div>
      }
      sidebar={<ArticleSidebar activePost={post} />}
    />
  );
};

const activePost = Cmp => props => {
  const {
    match: { params },
    data: { news },
    post
  } = props;

  const selected =
    (post && post.data) ||
    (news || []).find(({ publishedAt }) => publishedAt === params.from) ||
    first(news);

  return <Cmp {...props} post={selected} />;
};

export default Post

// export default compose(
//   connect(({ post, coins, pair }) => ({ coins, pair, post })),
//   withArticles,
//   withRouter,
//   activePost
// )(({ match: { params }, location, post, loading, error }) => (
//   <Post
//     loading={loading}
//     error={error}
//     post={post}
//     {...params}
//     path={location.pathname}
//   />
// ));
