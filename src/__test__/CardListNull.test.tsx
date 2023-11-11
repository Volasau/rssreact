import { render } from '@testing-library/react';
import CardList from '../components/cardList/CardList';
import { test, expect } from 'vitest';
import { CardProps } from '../components/card/Card';

test('CardList 0 display Not found', () => {
  const mockData: CardProps[] = [];

  const { container } = render(
    <CardList
      isLoading={false}
      noResults={false}
      planetValue={{ planetData: mockData, setPlanetData: () => {} }}
    />
  );

  const text = container.querySelector('.body__no-results');
  if (text) {
    expect(text.textContent).toBe('Nothing found');
  }
});

test('CardList 1 display no Not found', () => {
  const mockData: CardProps[] = [];

  const { container } = render(
    <CardList
      isLoading={false}
      noResults={false}
      planetValue={{ planetData: mockData, setPlanetData: () => {} }}
    />
  );

  const text = container.querySelector('.body__no-results');
  if (text) {
    expect(text.textContent).not.toBe('Nothing found');
  }
});
