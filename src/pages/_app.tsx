import NextNprogress from 'nextjs-progressbar';
import ThemeContainer from "@/context/theme/ThemeContainer";
import { nextNprogress } from '@/config/app';

interface MyAppProps {
  Component: any;
  pageProps: any;
}

function MyApp({ Component, pageProps }: MyAppProps) {
  return (
    <ThemeContainer>
      <Component {...pageProps} />
      <NextNprogress {...nextNprogress} />
    </ThemeContainer>
  )
}

export default MyApp
