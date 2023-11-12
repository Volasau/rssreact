import { test, expect } from 'vitest';
import { render } from '@testing-library/react';
import Pagination from '../components/pagination/Pagination';

test('Pagination component renders', () => {
  const page = 1;
  const totalPages = 5;
  const selectedLimit = 10;
  const handlePreviousPage = () => {};
  const handleNextPage = () => {};

  const { container } = render(
    <Pagination
      page={page}
      totalPages={totalPages}
      selectedLimit={selectedLimit}
      handlePreviousPage={handlePreviousPage}
      handleNextPage={handleNextPage}
    />
  );

  const prevButton = container.querySelector('.btn__pagin');
  const nextButton = container.querySelector('.btn__pagin');
  const pageIndicator = container.querySelector('.btn__page');

  expect(prevButton).not.toBeNull();
  expect(nextButton).not.toBeNull();
  if (pageIndicator) {
    expect(pageIndicator.textContent).toBe('1');
  }
});
