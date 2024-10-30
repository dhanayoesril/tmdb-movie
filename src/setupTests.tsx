import React, { PropsWithChildren } from 'react';
import { configureStore } from '@reduxjs/toolkit';
import reducer from './reducers';
import { Provider } from 'react-redux';
import { render } from '@testing-library/react';
import type { RenderOptions } from '@testing-library/react';
import { RootState } from './reducers';

const setupStore = (preloadedState: any) => {
  return configureStore({
    reducer,
    preloadedState,
  });
};

interface ExtendedRenderOptions extends Omit<RenderOptions, 'queries'> {
  preloadedState?: Partial<RootState>;
  store?: any;
}

export function renderWithProviders(
  ui: React.ReactElement,
  {
    preloadedState = {},
    // Automatically create a store instance if no store was passed in
    store = setupStore(preloadedState),
    ...renderOptions
  }: ExtendedRenderOptions = {}
) {
  function Wrapper({ children }: PropsWithChildren<{}>): JSX.Element {
    store.dispatch = jest.fn();

    return <Provider store={store}>{children}</Provider>;
  }
  return { store, ...render(ui, { wrapper: Wrapper, ...renderOptions }) };
}
