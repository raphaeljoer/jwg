//core components
import Cta from "@/components/molecules/Cta";
import Hero from "@/components/organism/Hero";
import NavBar from "@/components/molecules/NavBar";
import Cards from "@/components/organism/Cards";
import DataImpact from "@/components/molecules/DataImpact";
import Testimonial from "@/components/organism/Testimonial";
import Footer from "@/components/molecules/Footer";
import Partners from "@/components/organism/Partners";

//resources
import React from "react";
import SEO from "@/config/seo";
import { NextSeo } from "next-seo";
import { GetStaticProps } from "next";
import { next, whatsapp } from "@/config/app";

//data
import { getCatalogs } from "@/data/request/catalogs";

//types
import ICatalog from "@/@types/catalog";
import ICtaProps from "@/@types/cta";

const heroProps = {
  image: "/assets/img/picture/hero-man-2.png",
  element: "/assets/ui/element-01.svg",
};

const ctaProps: ICtaProps = {
  title: "Entregando confiança, credibilidade e inovação por todo nordeste",
  description: "Somos o elo entre fornecedores e redes de distribuição",
  button: {
    label: "Fale com o especialista",
    onClick: () => location.href = whatsapp.link
  }
};
interface IHomeProps {
  catalogs: ICatalog[];
};

export default function Home({ catalogs }: IHomeProps) {
  return (
    <>
      <NextSeo {...SEO.page.home} />
      <NavBar />
      <Hero {...heroProps}>
        <Cta {...ctaProps} />
      </Hero>
      <Cards cards={catalogs} />
      <DataImpact />
      <Partners />
      <Testimonial />
      <Footer />
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      catalogs: await getCatalogs()
    },
    revalidate: next.revalidate.oneMinute
  };
};
