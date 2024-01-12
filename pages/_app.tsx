import "@mantine/core/styles.css";
import '@mantine/dates/styles.css';
import 'mantine-react-table/styles.css';

import Head from "next/head";
import { MantineProvider } from "@mantine/core";

export default function App({ Component, pageProps }: any) {
  return (
    <MantineProvider>
      <Head>
        <title>Mantine Template</title>
      </Head>
      <Component {...pageProps} />
    </MantineProvider>
  );
}
