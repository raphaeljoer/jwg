export const graphql = {
  GRAPHQL_HOST: process.env.JWG_GRAPHQL_HOST || '',
  GRAPHQL_TOKEN: `Bearer ${process.env.JWG_GRAPHQL_TOKEN || ''}`,
};

export const next = {
  revalidate: {
   oneMinute: 60
  }
};

export const ui = {
  logo: {
    src: {
      light: "/assets/img/logo/logo-jwg-light.svg"
    },
    width: 162,
    height: 36,
  },
  scroll: {
    src: {
      light: {
        down: "/assets/ui/scroll-down-light.svg",
      },
      dark: {
        down: "/assets/ui/scroll-down.svg",
        down2: "/assets/ui/scroll-down-2.svg",
      }
    },
    width: "145",
    height: "37",
    alt: "scroll"
  },
  noImage: "/img/ui-elements/no-image.svg"
};

export const seo = {
  name: "JWG"
}

export const nextNprogress = {
  color: "#FF6700",
  startPosition: 0.4,
  stopDelayMs: 200,
  height: 4
}

export const zIndex = {
  lowest: 1,
  lower: 10,
  low: 100,
  medium: 1000,
  high: 10000,
  higher: 100000,
  highest: 1000000
};
