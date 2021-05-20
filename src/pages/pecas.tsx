//core components
import Cta from "@/components/molecules/Cta";
import Hero from "@/components/molecules/Hero";
import NavBar from "@/components/molecules/NavBar";
import Testimonial from "@/components/molecules/Testimonial";
import Partners from "@/components/molecules/Partners";
import Footer from "@/components/molecules/Footer";
import Scroll from "@/components/atoms/Scroll";

//resources
import React from "react";
import SEO from "@/config/seo";
import {NextSeo} from "next-seo";
import {next, ui} from "@/config/app";
import {GetStaticProps} from "next";

//data
import {getCatalogs} from "@/data/request/catalogs";

//types
import ICatalog from "@/@types/catalog";
import Cards from "@/components/molecules/Cards";


const heroProps = {
  element: "/assets/ui/element-02.svg",
}

const ctaProps = {
  title: "Faça o download dos últimos catálogos lançados",
  description: "Entregamos confiança, credibilidade e inovação por todo nordeste",
}

interface IProps {
  catalogs: ICatalog[];
}

export default function Pecas({catalogs}: IProps) {
  return (
    <>
      <NextSeo {...SEO.page.pecas} />
      <NavBar/>
      <Hero {...heroProps}>
        <Cta {...ctaProps} />
      </Hero>
      <Cards variant="grid" cards={catalogs}/>
      <Testimonial bg="gray.50"/>
      <Partners/>
      <Footer/>
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
