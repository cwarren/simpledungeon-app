import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

function renderWithRouter(ui, { route = '/' } = {}) {
  window.history.pushState({}, 'Test page', route);
  return render(<BrowserRouter>{ui}</BrowserRouter>);
}

describe('App component routing', () => {
  test('renders Welcome page by default', () => {
    renderWithRouter(<App />);
    expect(screen.getByText(/simpledungeon/i)).toBeInTheDocument();
  });

  test('renders Status page', () => {
    renderWithRouter(<App />, { route: '/status' });
    const statusElements = screen.getAllByText(/Status/i);
    expect(statusElements.length).toBeGreaterThan(0);
  });

  test('renders Game page for a specific game ID', () => {
    renderWithRouter(<App />, { route: '/game/123' });
    expect(screen.getByText(/Loading game.../i)).toBeInTheDocument();
  });

  test('renders Login page', () => {
    renderWithRouter(<App />, { route: '/login' });
    expect(screen.getByText(/Login/i)).toBeInTheDocument();
  });

  test('renders Logout page', () => {
    renderWithRouter(<App />, { route: '/logout' });
    expect(screen.getByText(/Logout/i)).toBeInTheDocument();
  });

});


