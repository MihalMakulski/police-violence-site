import React from 'react';
import { Link } from 'gatsby';

const KillingInfo = ({ killing }) => (
  <>
    <h2>{killing.Victim_s_name}</h2>
    <p>{killing.Victim_s_gender}, {killing.Victim_s_race}</p>
    <p><span style={{fontWeight: "bold"}}>Date of the incident:</span> {killing.Date_of_Incident__month_day_year_}</p>
    <div style={{marginBottom: "2em"}}>
      <label style={{fontWeight: "bold"}}>Place of the incident:</label>
      <address>
        {killing.City}, {killing.County}, {killing.State}<br/>
        {killing.Street_Address_of_Incident}
      </address>
    </div>
    <p>{killing.A_brief_description_of_the_circumstances_surrounding_the_death}</p>
    <div style={{textAlign: "center", marginTop: "2em"}}>
      <Link to="/">Go back to the homepage</Link>
    </div>
  </>
);

export default KillingInfo;