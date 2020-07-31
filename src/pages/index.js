import React from 'react';
import { graphql, Link } from 'gatsby';

import Layout from '../components/Layout';
import BrickList from '../components/styles/BrickList';

import { getStateName } from '../utils/states';

export default function Home({ data }) {
  const { allKillingsJson: { edges: killings } } = data;
  const states = [...new Set(killings.map((killing) => killing.node.State))]; // remove duplicates

  return (
    <Layout>
      <div>
        <BrickList>
          {states.map((state, idx) => (
            <li key={idx}>
              <Link to={`/${state.toLowerCase()}`}>
                {getStateName(state)}
              </Link>
            </li>
          ))}
        </BrickList>
      </div>
    </Layout>
  );
}

export const homeQuery = graphql`
  query {
    allKillingsJson {
        edges {
          node {
            State
          }
        }
      }
  }
`;