import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './App.js';

describe('App component', () => {
  test('renders without crashing', () => {
    const { getByText } = render(<App />);
    expect(getByText(/simpledungeon/)).toBeInTheDocument(); 
  });
});
