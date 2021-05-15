//core components
import Cta from "@/components/molecules/Cta";
import Hero from "@/components/organism/Hero";
import NavBar from "@/components/molecules/NavBar";
import Catalog from "@/components/organism/Catalog";
import DataImpact from "@/components/molecules/DataImpact";
import Testimonial from "@/components/organism/Testimonial";
//resources
import React from "react";
//data
import { Partners } from "@/components/organism/Partners";
import Footer from "@/components/molecules/Footer";
import { GetStaticProps } from "next";
import { getCatalogs } from "@/data/request/catalogs";
import { next } from "@/config/app";
import ICatalog from "@/@types/catalog";


const heroProps = {
  image: "/assets/img/picture/hero-man-2.png",
  element: "/assets/ui/element-01.svg",
}

const ctaProps = {
  title: "Entregando confiança, credibilidade e inovação por todo nordeste",
  description: "Somos o elo entre fornecedores e redes de distribuição",
  button: {
    label: "Fale com o especialista",
    onClick: () => location.href = "https://api.whatsapp.com/send?phone=5585988023938&text=Ol%C3%A1%20estou%20testando%20o%20envio%20de%20mensagem%20pelo%20site%20da%20JWG'"
  }
}
interface IHomeProps {
  catalogs: ICatalog[];
};

export default function Home({ catalogs }: IHomeProps) {
  return (
    <>
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
