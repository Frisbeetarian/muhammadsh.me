import 'styles/global.css';
import 'highlight.js/styles/github.css';
import 'highlight.js/styles/default.css';

import { ThemeProvider } from 'next-themes';
import { Inter } from '@next/font/google';

const interVariable = Inter();

export default function App({
  Component,
  pageProps: { session, ...pageProps }
}) {
  return (
    <ThemeProvider>
      <main className={interVariable.className}>
        <Component {...pageProps} />
      </main>
    </ThemeProvider>
  );
}
