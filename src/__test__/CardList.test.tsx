import { render } from '@testing-library/react';
import { test, expect } from 'vitest';
import CardList from '../components/cardList/CardList';

const mockPlanetData10 = Array.from({ length: 10 }, (_, index) => ({
  name: `Planet ${index + 1}`,
  climate: 'Climate',
  terrain: 'Terrain',
  population: 'Population',
  url: `https://swapi.dev/api/planets/${index + 1}/`,
}));

const mockPlanetData60 = Array.from({ length: 60 }, (_, index) => ({
  name: `Planet ${index + 1}`,
  climate: 'Climate',
  terrain: 'Terrain',
  population: 'Population',
  url: `https://swapi.dev/api/planets/${index + 1}/`,
}));

test('CardList component display (10 cards)', () => {
  const { container } = render(
    <CardList
      isLoading={false}
      noResults={false}
      planetValue={{ planetData: mockPlanetData10, setPlanetData: () => {} }}
    />
  );

  const cards = container.querySelectorAll('.card__container');
  expect(cards.length).toBe(mockPlanetData10.length);
});

test('CardList component display (60 cards)', () => {
  const { container } = render(
    <CardList
      isLoading={false}
      noResults={false}
      planetValue={{ planetData: mockPlanetData60, setPlanetData: () => {} }}
    />
  );

  const cards = container.querySelectorAll('.card__container');
  expect(cards.length).toBe(mockPlanetData60.length);
});
