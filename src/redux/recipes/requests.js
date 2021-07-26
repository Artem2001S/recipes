const url = 'https://recipes-api-json-server.herokuapp.com/recipes';

export const fetchRecipesRequest = () => fetch(url);
export const createRecipeRequest = (data) =>
  fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      ...data,
    }),
  });
export const deleteRecipeRequest = (id) =>
  fetch(`${url}/${id}`, { method: 'DELETE' });
