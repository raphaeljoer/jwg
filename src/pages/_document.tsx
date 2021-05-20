import {ColorModeScript} from "@chakra-ui/react"
import NextDocument, {Head, Html, Main, NextScript} from "next/document"
import theme from "@/context/theme/theme";

export default class Document extends NextDocument {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="icon" type="image/png" href="/assets/img/fav/favicon.svg"/>
          <link rel="shortcut icon" href="/assets/img/fav/favicon.svg"/>
        </Head>
        <body>
        <ColorModeScript initialColorMode={theme.config.initialColorMode}/>
        <Main/>
        <NextScript/>
        <link rel="preconnect" href="https://fonts.gstatic.com"/>
        <link
          href="https://fonts.googleapis.com/css2?family=Ubuntu:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
        </body>
      </Html>
    )
  }
}
