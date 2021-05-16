import NextNprogress from 'nextjs-progressbar';
import ThemeContainer from "@/context/theme/ThemeContainer";
import { nextNprogress } from '@/config/app';
import { DefaultSeo } from "next-seo";
import SEO from "../../next-seo.config";

interface MyAppProps {
  Component: any;
  pageProps: any;
}

function MyApp({ Component, pageProps }: MyAppProps) {
  return (
    <ThemeContainer>
      <DefaultSeo {...SEO} />
      <NextNprogress {...nextNprogress} />
      <Component {...pageProps} />
    </ThemeContainer>
  )
}

export default MyApp
