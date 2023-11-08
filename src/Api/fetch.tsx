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

export interface Planet {
  name: string;
  climate: string;
  terrain: string;
  population: string;
  url: string;
}

export async function getAllPlanets(searchQuery: string | null) {
  let allPlanets: Planet[] = [];
  let url = `https://swapi.dev/api/planets/`;

  if (searchQuery) {
    url = `https://swapi.dev/api/planets/?search=${searchQuery}`;
  }

  while (url) {
    const response = await fetch(url);
    const data = await response.json();

    if (data && data.results) {
      allPlanets = allPlanets.concat(data.results);
    } else {
      throw new Error('Отсутствуют данные "results"');
    }

    url = data.next;
  }
  return allPlanets;
}

export async function getPlanet(id: number) {
  const url = `https://swapi.dev/api/planets/${id}`;

  const response = await fetch(url);
  const data = await response.json();

  if (data) {
    return data;
  } else {
    throw new Error('No "results" in data');
  }
}
