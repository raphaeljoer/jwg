import { AspectRatio, Button, ButtonProps, useDisclosure } from "@chakra-ui/react";
//core components
import Cta from "@/components/molecules/Cta";
import Hero from "@/components/molecules/Hero";
import NavBar from "@/components/molecules/NavBar";
import Cards from "@/components/molecules/Cards";
import DataImpact from "@/components/molecules/DataImpact";
import Testimonial from "@/components/molecules/Testimonial";
import Footer from "@/components/molecules/Footer";
import Partners from "@/components/molecules/Partners";
//resources
import React from "react";
import SEO from "@/config/seo";
import { NextSeo } from "next-seo";
import { GetStaticProps } from "next";
import { next, whatsapp } from "@/config/app";
import { FiPlayCircle } from "react-icons/fi";
//data
import { getCatalogs } from "@/data/request/catalogs";
import testimonials from "@/data/static/testimonials"
//types
import ICatalog from "@/@types/catalog";
import ICtaProps from "@/@types/cta";
import ITestimonial from "@/@types/testimonial";
import Modal from "@/components/molecules/Modal";

const heroProps = {
  image: "/assets/img/picture/hero-man-2.png",
  element: "/assets/ui/element-01.svg",
};

const ctaProps: ICtaProps = {
  color: "whiteAlpha.800",
  upTitle: "Desde 2000",
  title: "Entregando confiança, credibilidade e inovação por todo nordeste",
  description: "Somos o elo entre fornecedores e redes de distribuição.",
  button: {
    label: "Fale com o especialista agora",
    onClick: () => location.href = whatsapp.link
  }
};

const buttonProps: ButtonProps = {
  variant: "ghost",
  leftIcon: <FiPlayCircle />,
  justifyContent: "flex-start",
  color: "blue.500",
  w: "fit-content",
  _hover: { color: "blue.800", bgColor: "transparent" },
  colorScheme: "blue",
  _active: {
    bg: "transparent",
    transform: "scale(0.96)",
  }
}

interface IProps {
  catalogs: ICatalog[];
  testimonials?: ITestimonial[];
};

export default function Home({ catalogs }: IProps) {

  return (
    <>
      <NextSeo {...SEO.page.home} />
      <NavBar />
      <Hero {...heroProps}>
        <Cta {...ctaProps}/>
      </Hero>
      <Cards variant="carousel" cards={catalogs} />
      <DataImpact />
      <Testimonial testimonials={testimonials} />
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
