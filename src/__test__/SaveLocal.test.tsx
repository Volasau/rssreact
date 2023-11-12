import { test, expect } from 'vitest';
import { render, fireEvent } from '@testing-library/react';
import Search from '../components/form/Form';

test('Clicking "Search" button save  value to localStorage', async () => {
  const { getByPlaceholderText, getByText } = render(<Search />);

  const searchInput = getByPlaceholderText('Search...');
  const searchButton = getByText('Search');

  fireEvent.change(searchInput, { target: { value: 'TestQuery' } });
  fireEvent.click(searchButton);

  const savedQuery = localStorage.getItem('savedSearchQuery');
  expect(savedQuery).toBe('TestQuery');
});
