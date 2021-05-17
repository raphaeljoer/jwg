//core components
import Cta from "@/components/molecules/Cta";
import Hero from "@/components/organism/Hero";
import NavBar from "@/components/molecules/NavBar";
import Catalog from "@/components/organism/Catalog";
import DataImpact from "@/components/molecules/DataImpact";
import Testimonial from "@/components/organism/Testimonial";
//resources
import React from "react";
import { NextSeo } from "next-seo";
//data
import Footer from "@/components/molecules/Footer";
import { GetStaticProps } from "next";
import { getCatalogs } from "@/data/request/catalogs";
import { Partners } from "@/components/organism/Partners";
import { next, whatsapp } from "@/config/app";
import ICatalog from "@/@types/catalog";
import SEO from "@/config/seo";


const heroProps = {
  image: "/assets/img/picture/hero-man-2.png",
  element: "/assets/ui/element-01.svg",
}

const ctaProps = {
  title: "Entregando confiança, credibilidade e inovação por todo nordeste",
  description: "Somos o elo entre fornecedores e redes de distribuição",
  button: {
    label: "Fale com o especialista",
    onClick: () => location.href = whatsapp.link
  }
}
interface IHomeProps {
  catalogs: ICatalog[];
};

export default function Home({ catalogs }: IHomeProps) {
  return (
    <>
      <NextSeo {...SEO.page.home}/>
      <NavBar />
      <Hero {...heroProps}>
        <Cta {...ctaProps} />
      </Hero>
      <Catalog catalogs={catalogs} />
      <DataImpact />
      <Testimonial />
      <Partners />
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
