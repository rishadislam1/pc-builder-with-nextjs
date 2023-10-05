import Navbar from "@/components/Layout/Navbar";
import { store } from "@/redux/store";
import "@/styles/globals.css";
import { SessionProvider } from "next-auth/react";
import { Provider } from "react-redux";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Provider store={store}>
        <SessionProvider session={pageProps.session}>
          <Navbar />
          <Component {...pageProps} />
        </SessionProvider>
      </Provider>
      ,
    </>
  );
}
