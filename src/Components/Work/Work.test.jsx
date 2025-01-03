import { test, expect } from '@jest/globals';
import { render } from '@testing-library/react';
import Work from './Work';

test('renders Work component correctly', () => {
  const { asFragment } = render(<Work />);
  expect(asFragment()).toMatchSnapshot();
});
