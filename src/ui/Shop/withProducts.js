import React from "react";
import gql from "graphql-tag";
import { Query } from "react-apollo";

const productsQuery = gql`
  query Products($q: String) {
    products(q: $q) {
      name
      amount
      description
      images
      currency
      session
    }
  }
`;

export default Cmp => props => (
  <Query query={productsQuery} variables={props.variables}>
    {result => <Cmp {...props} {...result} />}
  </Query>
);
