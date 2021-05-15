//chakra-ui
import { Box, Grid, Link, useBreakpointValue } from "@chakra-ui/react";
//core components
import Cta from "@/components/molecules/Cta";
import Hero from "@/components/organism/Hero";
import NavBar from "@/components/molecules/NavBar";
import Catalog from "@/components/organism/Catalog";
import DataImpact from "@/components/molecules/DataImpact";
import Testimonial from "@/components/organism/Testimonial";
import { Partners } from "@/components/organism/Partners";
import Heading from "@/components/atoms/Heading";
import Footer from "@/components/molecules/Footer";
//resources
import React from "react";
//data
import catalogs from '@/data/static/catalogs';
import DetailCard from "@/components/molecules/DetailCard";
import Container from "@/components/molecules/Container";
import Scroll from "@/components/atoms/Scroll";
import { ui } from "@/config/app";


const heroProps = {
  element: "/assets/ui/element-02.svg",
}

const ctaProps = {
  title: "Faça o download dos últimos catálogos lançados",
  description: "Entregamos confiança, credibilidade e inovação por todo nordeste",
}

export default function Home() {

  const templateColumns = useBreakpointValue({
    base: "repeat(1, 1fr)",
    md: "repeat(2, 1fr)",
    xl: "repeat(3, 1fr)"
  });

  return (
    <>
      <NavBar />
      <Hero {...heroProps}>
        <Cta {...ctaProps} />
      </Hero>

      <Box as="section" w="full" bgColor="oilblue.10" py={24} position="relative">


        <Heading mc tc maxW={768} color="oilblue.300" px={6} mb={catalogs ? 8 : undefined}>
          {catalogs ? "Faça o download dos últimos catálogos lançados" : "Em breve novos catálogos"}
        </Heading>

        {catalogs && (
          <Container>
            <Grid templateColumns={templateColumns} gap={12} rowGap={12} my={24} justifyItems="center">
              {catalogs.map(({ id, name, desc, cover, url }) => (

                <DetailCard
                  key={id}
                  name={name}
                  cover={cover}
                  desc={desc}
                  button={{
                    label: "Baixar catálogo",
                    link: url
                  }} />

              ))}
            </Grid>
          </Container>
        )}
        <Scroll file={ui.scroll.src.light.down} />
      </Box>
      <Testimonial bg="gray.50" />
      <Partners />
      <Footer />
    </>
  );
};
