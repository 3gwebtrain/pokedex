import type { AppProps } from "next/app";
import { wrapper } from "pokedex@/store/app.store";
import "pokedex@/styles/globals.css";
import { Provider } from "react-redux";

export default function App({ Component, pageProps }: AppProps): React.ReactNode {
  const { store } = wrapper.useWrappedStore(pageProps);
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}
