import React from 'react';
import Home from '../../Home';
import { renderWithProviders } from '../../../setupTests';
import '@testing-library/jest-dom';

describe('<App/>', () => {
  let wrapper;

  it('Should render home page', async () => {
    wrapper = renderWithProviders(<Home />, {
      preloadedState: {
        trendingMovieReducers: {
          loading: false,
          data: [
            {
              backdrop_path: '/uGmYqxh8flqkudioyFtD7IJSHxK.jpg',
              id: 889737,
              title: 'Joker: Folie à Deux',
              overview:
                "While struggling with his dual identity, Arthur Fleck not only stumbles upon true love, but also finds the music that's always been inside him.",
              poster_path: '/aciP8Km0waTLXEYf5ybFK5CSUxl.jpg',
              release_date: '2024-10-01',
            },
          ],
          error: '',
          page: 0,
          total_pages: 0,
        },
      },
    });
    const { findByText } = wrapper;
    // eslint-disable-next-line testing-library/prefer-screen-queries
    const textLoading = await findByText(/Trending Nowadays/i);
    expect(textLoading).toBeInTheDocument();
  });

  it('Should render LoadingPage if loading true', async () => {
    wrapper = renderWithProviders(<Home />, {
      preloadedState: {
        trendingMovieReducers: {
          loading: true,
          data: [
            {
              backdrop_path: '/uGmYqxh8flqkudioyFtD7IJSHxK.jpg',
              id: 889737,
              title: 'Joker: Folie à Deux',
              overview:
                "While struggling with his dual identity, Arthur Fleck not only stumbles upon true love, but also finds the music that's always been inside him.",
              poster_path: '/aciP8Km0waTLXEYf5ybFK5CSUxl.jpg',
              release_date: '2024-10-01',
            },
          ],
          error: '',
          page: 0,
          total_pages: 0,
        },
      },
    });
    const { findByTestId } = wrapper;
    // eslint-disable-next-line testing-library/prefer-screen-queries
    const spinner = await findByTestId('spinner');
    expect(spinner).toBeInTheDocument();
  });
});
