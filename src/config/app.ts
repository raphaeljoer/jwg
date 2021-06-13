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
  whatsapp: {
    src: "/assets/ui/whatsapp.svg"
  }
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

export const whatsapp = {
  link: "https://api.whatsapp.com/send?phone=5585988023938&text=Ol%C3%A1%20estou%20testando%20o%20envio%20de%20mensagem%20pelo%20site%20da%20JWG'"
}
