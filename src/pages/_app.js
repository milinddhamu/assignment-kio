import '@/styles/globals.css'
import { ThemeProvider } from '@mui/material/styles';
import customTheme from '@/utils/customTheme';
export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider theme={customTheme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
