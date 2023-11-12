import { test, expect } from 'vitest';
import { render } from '@testing-library/react';
import Modal from '../components/modal/Modal';

test('Modal show detailes', () => {
  const mockPlanetData = {
    name: 'Tatooine',
    climate: 'Arid',
    terrain: 'Desert',
    population: '200000',
    gravity: '1',
    diameter: '1',
    orbital_period: '1',
    url: 'https://swapi.dev/api/planets/1/',
  };

  const { container } = render(
    <Modal active={true} setActive={() => {}} data={mockPlanetData} />
  );

  expect(container.querySelector('.modal.active')).toBeTruthy();

  expect(container.querySelector('.window__span-title')?.textContent).toBe(
    mockPlanetData.name
  );
  expect(container.querySelector('.window__climate')?.textContent).toBe(
    `climate: ${mockPlanetData.climate}`
  );
  expect(container.querySelector('.window__terrain')?.textContent).toBe(
    `terrain: ${mockPlanetData.terrain}`
  );
  expect(container.querySelector('.window__population')?.textContent).toBe(
    `population: ${mockPlanetData.population}`
  );
  expect(container.querySelector('.window__gravity')?.textContent).toBe(
    `gravity: ${mockPlanetData.gravity}`
  );
  expect(container.querySelector('.window__diameter')?.textContent).toBe(
    `diameter: ${mockPlanetData.diameter}`
  );
  expect(container.querySelector('.window__orbital-period')?.textContent).toBe(
    `orbital period: ${mockPlanetData.orbital_period}`
  );
});
