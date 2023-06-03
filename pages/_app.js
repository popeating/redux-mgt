import '../styles/globals.css';
import { wrapper } from '../lib/store';
import { PersistGate } from 'redux-persist/integration/react';
import { useStore } from 'react-redux';

function MyApp({ Component, pageProps }) {
  const store = useStore();

  return (
    <PersistGate persistor={store.__persistor} loading={<div>Loading...</div>}>
      <Component {...pageProps} />
    </PersistGate>
  );
}

export default wrapper.withRedux(MyApp);
