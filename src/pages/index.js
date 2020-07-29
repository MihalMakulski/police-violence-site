import React from "react"
import { graphql, Link } from "gatsby"

export default function Home({ data }) {
  const { allKillingsJson: { edges: killings } } = data;
  const states = [...new Set(killings.map((killing) => killing.node.State))]; // remove duplicates

  return <div>
    {states.map((state, idx) => <li key={idx}><Link to={`/${state.toLowerCase()}`}>{state}</Link></li>)}
  </div>
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