/* eslint-disable testing-library/no-render-in-setup */
import { render, screen } from '@testing-library/react';
import Header from '../../Header';
import userEvent from '@testing-library/user-event';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';

describe('test component show', () => {
  beforeEach(() => {
    render(<Header isTransparent={false} showBackBtn={true} />);
  });

  it('should render header component', () => {
    const image = screen.getByTestId('header-img');
    const dropdown = screen.getByTestId('header-dropdown');
    expect(image).toBeInTheDocument();
    expect(dropdown).toBeInTheDocument();
  });

  it('should show back button if props showBackBtn is true', () => {
    const backBtn = screen.getByTestId('back-btn');
    expect(backBtn).toBeInTheDocument();
  });
});

describe('test dropdown filter category action', () => {
  const history = createMemoryHistory();
  beforeEach(async () => {
    render(
      <Router history={history}>
        <Header isTransparent={false} showBackBtn={true} />
      </Router>
    );
    const btnDropdown = await screen.findByText(/Filter Movies/i);
    userEvent.click(btnDropdown);
  });

  it('should routing to /movies/popular', async () => {
    const dropdown = await screen.findByTestId('dropdown-popular');
    userEvent.click(dropdown);
    expect(history.location.pathname).toBe('/movies/popular');
  });

  it('should routing to /movies/now-playing', async () => {
    const dropdown = await screen.findByTestId('dropdown-now-playing');
    userEvent.click(dropdown);
    expect(history.location.pathname).toBe('/movies/now-playing');
  });

  it('should routing to /movies/now-upcoming', async () => {
    const dropdown = await screen.findByTestId('dropdown-upcoming');
    userEvent.click(dropdown);
    expect(history.location.pathname).toBe('/movies/upcoming');
  });

  it('should routing to /movies/top-rated', async () => {
    const dropdown = await screen.findByTestId('dropdown-top-rated');
    userEvent.click(dropdown);
    expect(history.location.pathname).toBe('/movies/top-rated');
  });
});

describe('test routing action', () => {
  const history = createMemoryHistory();
  beforeEach(() => {
    render(
      <Router history={history}>
        <Header isTransparent={false} showBackBtn={true} />
      </Router>
    );
  });

  it('should back to the home page where button home clicked', () => {
    const homeBtn = screen.getByTestId('home-btn');
    userEvent.click(homeBtn);
    expect(history.location.pathname).toBe('/');
  });

  it('should back to the home page where header image clicked', () => {
    const headerImg = screen.getByTestId('header-img');
    userEvent.click(headerImg);
    expect(history.location.pathname).toBe('/');
  });
});
