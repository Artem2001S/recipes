const url = 'https://recipes-api-json-server.herokuapp.com/recipes';

export const fetchRecipesRequest = () => fetch(url);
export const deleteRecipeRequest = (id) =>
  fetch(`${url}/${id}`, { method: 'DELETE' });
