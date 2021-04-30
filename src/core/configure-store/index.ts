import { createStore } from 'redux';
import { devToolsEnhancer } from 'redux-devtools-extension';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import reducer from 'reducers';

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, reducer);

const configureStore = () => {
  const store = createStore(persistedReducer, devToolsEnhancer({}));
  const persister = persistStore(store);
  return { store, persister };
};

export default configureStore;
