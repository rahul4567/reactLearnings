const getAuthors = id => {
  const url = `https://jsonplaceholder.typicode.com/users/${id}/posts`;

  return fetch(url)
    .then(response => response.json())
    .then(json => json);
};

export default getAuthors;
