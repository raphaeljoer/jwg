import {AppProps} from "next/app";
import NextNprogress from 'nextjs-progressbar';
import ThemeContainer from "@/context/theme/ThemeContainer";
import {nextNprogress} from '@/config/app';
import {DefaultSeo} from "next-seo";
import SEO from "../../next-seo.config";

function MyApp({Component, pageProps}: AppProps) {
  return (
    <ThemeContainer>
      <DefaultSeo {...SEO} />
      <NextNprogress {...nextNprogress} />
      <Component {...pageProps} />
    </ThemeContainer>
  )
}

export default MyApp
