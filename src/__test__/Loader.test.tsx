import { test, expect } from 'vitest';
import Loader from '../components/loader/Loader';
import { render } from '@testing-library/react';

test('render text', () => {
  expect(true).toBe(true);
});

test('Loader component', () => {
  const { container } = render(<Loader />);
  const loaderElement = container.querySelector('.loader');
  const imgElement = container.querySelector('.loader__img');

  expect(loaderElement).not.toBeNull();
  expect(imgElement).not.toBeNull();
});
