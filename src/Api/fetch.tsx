class ApiService {
  static async getPlanets(searchQuery: string | null) {
    let url = 'https://swapi.dev/api/planets';

    if (searchQuery) {
      url = `https://swapi.dev/api/planets/?search=${searchQuery}`;
    }

    const response = await fetch(url);
    const data = await response.json();

    if (data.results) {
      return data.results;
    } else {
      throw new Error('Not data "results"');
    }
  }
}

export default ApiService;
