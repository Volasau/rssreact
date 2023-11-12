import { test, expect } from 'vitest';
import { render, fireEvent } from '@testing-library/react';
import Modal from '../components/modal/Modal';

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

test('Close  Modal', () => {
  let setActiveCalled = false;
  const setActive = () => {
    setActiveCalled = true;
  };

  render(<Modal active={true} setActive={setActive} data={mockPlanetData} />);

  const closeButton = document.querySelector('.close');
  expect(closeButton).toBeTruthy();

  if (closeButton) {
    fireEvent.click(closeButton);

    expect(setActiveCalled).toBe(true);
  }
});
