import React from 'react';
import { Link } from 'gatsby';

import BrickList from '../components/styles/BrickList';

const VictimsList = ({ list }) => (
  <BrickList>
    {list.map((killing) => (
      <li key={killing.node.ID}>
        <Link 
          state={{modal: true}} 
          to={`/${killing.node.State.toLowerCase()}/${killing.node.ID}`}
        >
          {killing.node.Victim_s_name}
        </Link>
      </li>
    ))}
  </BrickList>
);

export default VictimsList;