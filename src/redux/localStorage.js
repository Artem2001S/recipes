export const saveToLocalStorage = (data) => {
  for (const key in data) {
    localStorage.setItem(key, JSON.stringify(data[key]));
  }
};

export const getFromLocalStorage = (key) => {
  if (localStorage.getItem(key)) {
    return JSON.parse(localStorage.getItem(key));
  } else {
    return undefined;
  }
};
