const path = require('path');
const slash = require('slash');

module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const statePageTemplate = path.resolve('./src/templates/state.js');
  const victimPageTemplate = path.resolve('./src/templates/victim.js');

  const result = await graphql(`
    {
      allKillingsJson {
        edges {
          node {
            ID
            State
          }
        }
      }
    }
  `);

  if (result.errors) {
    throw new Error(result.errors);
  }

  const { allKillingsJson: { edges: killings } } = result.data;
  const states = [...new Set(killings.map((killing) => killing.node.State))]; // remove duplicates
  const killingsFlat = killings.map((killing => killing.node));

  states.forEach((state) => {
    createPage({
      path: `/${state.toLowerCase()}`,
      component: slash(statePageTemplate),
      context: {
        state
      }
    });
  });

  killingsFlat.forEach((killing) => {
    createPage({
      path: `/${killing.State.toLowerCase()}/${killing.ID}`,
      component: slash(victimPageTemplate),
      context: {
        id: killing.ID
      }
    });
  });
};