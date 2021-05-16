//chakra-ui
import { Box, Grid, useBreakpointValue } from "@chakra-ui/react";

//core components
import Cta from "@/components/molecules/Cta";
import Hero from "@/components/organism/Hero";
import NavBar from "@/components/molecules/NavBar";
import Testimonial from "@/components/organism/Testimonial";
import Partners from "@/components/organism/Partners";
import Heading from "@/components/atoms/Heading";
import DetailCard from "@/components/molecules/DetailCard";
import Container from "@/components/molecules/Container";
import Footer from "@/components/molecules/Footer";
import Scroll from "@/components/atoms/Scroll";

//resources
import React from "react";
import SEO from "@/config/seo";
import { NextSeo } from "next-seo";
import { next, ui } from "@/config/app";
import { GetStaticProps } from "next";
import { getFormattedDate } from "@/utils/date";

//data
import { getCatalogs } from "@/data/request/catalogs";

//types
import ICatalog from "@/@types/catalog";


const heroProps = {
  element: "/assets/ui/element-02.svg",
}

const ctaProps = {
  title: "Faça o download dos últimos catálogos lançados",
  description: "Entregamos confiança, credibilidade e inovação por todo nordeste",
}

interface IPecasProps {
  catalogs: ICatalog[];
}

export default function Pecas({ catalogs }: IPecasProps) {

  const templateColumns = useBreakpointValue({
    base: "repeat(1, 1fr)",
    md: "repeat(2, 1fr)",
    xl: "repeat(3, 1fr)"
  });

  return (
    <>
      <NextSeo {...SEO.page.pecas} />
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
              {catalogs.map(({ id, name, releaseDate, partner, url }) => (
                <DetailCard
                  key={id}
                  name={name}
                  releaseDate={releaseDate}
                  cover={partner.logo}
                  desc={`${partner.name} ${getFormattedDate({ date: releaseDate, format: "YYYY" })}`}
                  button={{
                    label: "Baixar catálogo",
                    link: url
                  }}
                />
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

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      catalogs: await getCatalogs()
    },
    revalidate: next.revalidate.oneMinute
  };
};
