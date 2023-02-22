import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const appDiv = screen.getByTestId(/App/i);
  expect(appDiv).toBeInTheDocument();
});
