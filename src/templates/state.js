import React from 'react';
import { graphql, Link } from 'gatsby';

const StatePageTemplate = ({ data }) => {
  return <ul>
    {data.allKillingsJson.edges.map((killing) => (
      <li key={killing.node.ID}><Link state={{modal: true}} to={`/${killing.node.State.toLowerCase()}/${killing.node.ID}`}>{killing.node.Victim_s_name}</Link></li>
    ))}
  </ul>
};

export default StatePageTemplate;

export const statePageTemplateQuery = graphql`
  query($state: String!) {
    allKillingsJson(filter: {State: {eq: $state}}) {
     edges {
       node {
        ID
        State
        Victim_s_name
       }
     }
    }
  }
`;