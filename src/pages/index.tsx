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
import catalogs from '@/data/static/catalogs';
import { Partners } from "@/components/organism/Partners";


const heroProps = {
  image: "/assets/img/picture/hero-man-2.png",
  element: "/assets/ui/element-01.svg",
  cta: {
    title: "Entregando confiança, credibilidade e inovação por todo nordeste",
    description: "Somos o elo entre fornecedores e redes de distribuição",
    button: {
      label: "Fale com o especialista",
      onClick: () => location.href = "https://api.whatsapp.com/send?phone=5585988023938&text=Ol%C3%A1%20estou%20testando%20o%20envio%20de%20mensagem%20pelo%20site%20da%20JWG'"
    }
  }
}

export default function Home() {
  return (
    <>
      <NavBar />
      <Hero {...heroProps}>
        <Cta {...heroProps.cta} />
      </Hero>
      <Catalog catalogs={catalogs} />
      <DataImpact/>
      <Testimonial />
      <Partners />
    </>
  );
};
