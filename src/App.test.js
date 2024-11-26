import { render, screen } from '@testing-library/react';
import App from './App';
import React from 'react';

test('renders portfolio assignment w.m', () => {
  render(<App />);
  const welcomeElement = screen.getByText(/Portfolio pipeline assigment/i);
  expect(welcomeElement).toBeInTheDocument();
});
