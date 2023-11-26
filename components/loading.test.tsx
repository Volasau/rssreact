import { test, expect } from 'vitest';
import { render } from '@testing-library/react';
import Loading from './loading';
import React from 'react';

test('Loading component renders "Loading..."', () => {
  const { getByText } = render(<Loading />);

  expect(getByText('Loading...')).not.toBeNull();
});
