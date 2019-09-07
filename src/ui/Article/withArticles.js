import React from "react";
import { graphql } from "gatsby";
import { Query } from "react-apollo";

const sidebarQuery = graphql`
  query Sidebar($q: String!, $from: String) {
    news(q: $q, from: $from) {
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
`;

export default Cmp => props => (
  <Query query={sidebarQuery} variables={{ q: "cryptocurrency" }}>
    {result => <Cmp {...props} {...result} />}
  </Query>
);
