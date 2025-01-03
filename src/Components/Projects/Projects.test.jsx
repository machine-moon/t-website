import { test, expect } from '@jest/globals';
import { render } from '@testing-library/react';
import Projects from './Projects';

test('renders Projects component correctly', () => {
  const { asFragment } = render(<Projects />);
  expect(asFragment()).toMatchSnapshot();
});
