import { test, expect } from '@jest/globals';
import { render } from '@testing-library/react';
import About from './About.jsx';

test('renders About component correctly', () => {
  const { asFragment } = render(<About />);
  expect(asFragment()).toMatchSnapshot();
});