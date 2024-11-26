import { render, screen } from '@testing-library/react';
import App from './App';
import React from 'react';

test('renders the main header', () => {
  render(<App />);
  const headerElement = screen.getByText(/Portfolio pipeline assignment/i);
  expect(headerElement).toBeInTheDocument();
});

test('renders author section', () => {
  render(<App />);
  const authorElement = screen.getByText(/Authored by/i);
  expect(authorElement).toBeInTheDocument();
});
