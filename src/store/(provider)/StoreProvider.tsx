'use client';

import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { makeStore } from '../store';
import { persistStore } from 'redux-persist';

export const StoreProvider = ({ children }: { children: React.ReactNode }) => {
  const store = makeStore()
  const persistor = persistStore(store)
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>{children}</PersistGate>
    </Provider>
  );
};
