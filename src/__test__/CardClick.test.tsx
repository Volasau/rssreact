import { render, fireEvent } from '@testing-library/react';
import { test, expect } from 'vitest';

import Card from '../components/card/Card';

const mockCardData = {
  name: 'Tatooine',
  climate: 'Arid',
  terrain: 'Desert',
  population: '200000',
  url: 'www.google.com',
};

test('Clicking on the card opens the Modal component', async () => {
  const { container } = render(<Card {...mockCardData} />);

  expect(container.querySelector('.modal.active')).toBeFalsy();
  expect(container.querySelector('.modal')).toBeTruthy();

  const cards = container.querySelectorAll('.card__container');
  fireEvent.click(cards[0]);

  await new Promise((resolve) => setTimeout(resolve, 3000));

  expect(container.querySelector('.modal.active')).toBeTruthy();
});
