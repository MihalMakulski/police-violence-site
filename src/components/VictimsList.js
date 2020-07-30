import React from 'react';
import { Link } from 'gatsby';

const VictimsList = ({ list }) => (
  <ul>
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
  </ul>
);

export default VictimsList;