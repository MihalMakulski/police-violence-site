import React from 'react';
import { graphql, Link } from 'gatsby';
import { ModalRoutingContext } from 'gatsby-plugin-modal-routing';

const VictimPageTemplate = ({ data }) => {
  const { killingsJson: killing } = data;

  return <ModalRoutingContext.Consumer>
    {({ modal, closeTo }) => (
      <div>
        <Link to={closeTo}>
          Close
        </Link>
        <h2>{killing.Victim_s_name}</h2>
        <p>{killing.Victim_s_gender}, {killing.Victim_s_race}</p>
        <p>Date of the incident: {killing.Date_of_Incident__month_day_year_}</p>
        <address>
          {killing.City}, {killing.County}, {killing.State}<br/>
          {killing.Street_Address_of_Incident}
        </address>
        <p>{killing.A_brief_description_of_the_circumstances_surrounding_the_death}</p>
        <Link to="/">Go back to the homepage</Link>
      </div>
    )}
  </ModalRoutingContext.Consumer>
};

export default VictimPageTemplate;

export const VictimPageQuery = graphql`
  fragment killingData on KillingsJson {
    A_brief_description_of_the_circumstances_surrounding_the_death
    Cause_of_death
    City
    County
    Criminal_Charges_
    Date_of_Incident__month_day_year_
    Link_to_news_article_or_photo_of_official_document
    Off_Duty_Killing_
    State
    Street_Address_of_Incident
    Symptoms_of_mental_illness_
    Unarmed_Did_Not_Have_an_Actual_Weapon
    Victim_s_gender
    Victim_s_name
    Victim_s_race
    Agency_responsible_for_death
    Alleged_Threat_Level__Source__WaPo_
    Alleged_Weapon__Source__WaPo_and_Review_of_Cases_Not_Included_in_WaPo_Database_
    Body_Camera__Source__WaPo_
    Official_disposition_of_death__justified_or_other_
    ID
  }

  query($id: Int!) {
    killingsJson(ID: { eq: $id }) {
      ...killingData
    }
  }
`;