import { render } from '@testing-library/react';
import { test, expect } from 'vitest';
import Card from '../components/card/Card';

test('Card display info'),
  () => {
    const moxkData = {
      name: `Mars`,
      climate: 'Climate',
      terrain: 'Terrain',
      population: 'Population',
      url: 'www.by',
    };
    const { container } = render(<Card {...moxkData} />);
    const name = container.querySelector('.card__name');
    const climate = container.querySelector('.card__climate');
    const terrain = container.querySelector('.card__terrain');
    const population = container.querySelector('.card__population');
    expect(name?.textContent).toBe('Mars');
    expect(climate?.textContent).toBe('Climate');
    expect(terrain?.textContent).toBe('Terrain');
    expect(population?.textContent).toBe('Population');
  };
