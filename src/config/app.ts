export const app = {
  smtp: {
    sendgrid: {
      api: {
        host: process.env.IMH_APP_SENDGRID_API_HOST || "",
        key: process.env.IMH_APP_SENDGRID_API_KEY || ""
      }
    },
    gmail: {
      host: process.env.IMH_APP_GMAIL_SMTP_HOST || "smtp.gmail.com",
      port: Number(process.env.IMH_APP_GMAIL_SMTP_PORT) || 587,
      user: process.env.IMH_APP_GMAIL_SMTP_USER || "",
      password: process.env.IMH_APP_GMAIL_SMTP || "",
    }
  },
  next: {
    revalidate: 60
  },
  graphql: {
    GRAPHQL_HOST: process.env.IMH_GRAPHCMS_GRAPHQL_HOST || '',
    GRAPHQL_TOKEN: `Bearer ${process.env.IMH_GRAPHCMS_GRAPHQL_TOKEN || ''}`,
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
      down: "/assets/ui/scroll-down.svg",
      down2: "/assets/ui/scroll-down-2.svg",
      up: "/assets/ui/scroll-up.svg"
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
