import React from 'react';
import { useParams } from 'react-router-dom';

const RecipePage = () => {
  const { id } = useParams();
  return <div>Recipe {id}</div>;
};

export default React.memo(RecipePage);
