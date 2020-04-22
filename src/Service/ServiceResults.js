const ENDPOINT = 'https://rickandmortyapi.com/api/character/';

const fetchResults = () =>
  fetch(ENDPOINT)
    .then((response) => response.json())
    .then((data) => {
      const results = [];
      data.results.map((result) => {
        const characterData = {
          id: result.id,
          name: result.name,
          image: result.image,
          species: result.species,
          origin: result.origin,
          episode: result.episode,
          status: result.status,
        };
        results.push(characterData);
      });
      return results;
    });

export { fetchResults };
