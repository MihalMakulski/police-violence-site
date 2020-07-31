import React from 'react';
import { Link } from 'gatsby';

import BrickList from '../components/styles/BrickList';

const VictimsList = ({ list, searchFilter }) => (
  list.length ? (
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
  ) : (
    <div>
      {`Victim "${searchFilter}" is not on the list.`}
    </div>
  )
);

export default VictimsList;