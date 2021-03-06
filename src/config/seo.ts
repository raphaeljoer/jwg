
export const siteName = "JWG Representações";
export const description = "Entregando confiança, credibilidade e inovação por todo nordeste";
export const canonical = "https://jwgrepresentacoes.com.br";
export const locale = "pt-br";
export const type = "website";
export const defaultImage = "/assets/img/opengraph/cover-opengraph.jpg";

export const pageConfig = {
  title: siteName,
  description: description,
  canonical: canonical,
  openGraph: {
    title: siteName,
    description: description,
    url: canonical,
    type: type,
    locale: locale,
    site_name: siteName,
    images: [{
      url: defaultImage,
      width: 1280,
      height: 720,
      alt: siteName
    }]
  },
}

export const SEO = {
  default: {
    openGraph: {
      type: type,
      locale: locale,
      url: canonical,
      site_name: siteName,
    },
    twitter: {
      handle: "@jwgrepresentacoes",
      site: "@site",
      cardType: "summary_large_image",
    },
  },
  page: {
    home: {...pageConfig},
    pecas: {...pageConfig, title: `Peças | ${siteName}`,
    },
  }
}

export default SEO;
