const fetchData = async (endpoint = 'https://swapi.co/api/') => {
  const response = await fetch(endpoint);
  return await response.json();
};

export default { fetchData };
