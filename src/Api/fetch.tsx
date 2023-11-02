async function getPlanets(searchQuery: string | null, page: number) {
  let url = `https://swapi.dev/api/planets/?page=${page}`;

  if (searchQuery) {
    url += `&search=${searchQuery}`;
  }

  const response = await fetch(url);
  const data = await response.json();

  if (data.results) {
    return data;
  } else {
    throw new Error('No "results" in data');
  }
}

export default getPlanets;
