import type { AppProps } from "next/app";
import { AppStore } from "pokedex@/store/app.store";
import "pokedex@/styles/globals.css";
import { Provider } from "react-redux";

export default function App({ Component, pageProps }: AppProps): React.ReactNode {
  return (
    <Provider store={AppStore}>
      <Component {...pageProps} />
    </Provider>
  );
}
