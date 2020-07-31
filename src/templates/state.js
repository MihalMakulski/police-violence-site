import React , { useState } from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/Layout';
import Breadcrumbs from '../components/Breadcrumbs';
import SearchInput from '../components/SearchInput';
import VictimsList from '../components/VictimsList';

const StatePageTemplate = ({ data }) => {
  const [ searchFilter, setSearchFilter ] = useState('');
  const onSearch = (term) => {
    if (!term || term.length < 3) {
      return setSearchFilter('');
    }

    setSearchFilter(term);
  };
  const filteredVictims = data.allKillingsJson.edges.filter(
    (edge) => (
      edge.node.Victim_s_name.toLowerCase().includes(searchFilter)
    )
  ); 

  return (
    <Layout>
      <Breadcrumbs state={data.allKillingsJson.edges[0].node.State} />
      <SearchInput onSearch={(e) => onSearch(e.target.value.toLowerCase())} />
      <VictimsList 
        list={filteredVictims} 
        searchFilter={searchFilter}
      />
    </Layout>
  );
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