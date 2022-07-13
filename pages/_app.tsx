import "../styles/globals.scss";
import type { AppProps } from "next/app";
import Layout from "../layouts/Layout";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Your app name</title>
        <meta
          name="App description goes here"
          content="This is boilerplate content - fill it with yours as needed"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
