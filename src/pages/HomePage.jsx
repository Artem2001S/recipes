import React from 'react';
import RecipesListContainer from 'containers/RecipesListContainer';

const HomePage = () => {
  return (
    <>
      <RecipesListContainer />
    </>
  );
};

export default React.memo(HomePage);
