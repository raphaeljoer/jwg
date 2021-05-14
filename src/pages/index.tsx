//core components
import Cta from "@/components/molecules/Cta";
import Hero from "@/components/organism/Hero";
import NavBar from "@/components/molecules/NavBar";
//resources
import React from "react";
//data
import catalog from '@/data/static/catalog';
import Heading from "@/components/atoms/Heading";
import Carousel from "@/components/molecules/Carousel";
import Link from "next/link";
import DetailCard from "@/components/molecules/DetailCard";
import { Box, Center } from "@chakra-ui/react";
import ButtonIcon from "@/components/molecules/ButtonIcon";

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

      <Box as="section" w="full" bgColor="oilblue.10" py={32} position="relative">

        <Heading mc tc maxW={768} color="oilblue.300" px={6} mb={catalog ? 8 : undefined}>
          {catalog ? "Faça o download dos últimos catálogos lançados" : "Em breve novos projetos"}
        </Heading>

        {catalog && (
          <Carousel spacing={12} scrollStep={384} tooltipProps={{ bg: "orange.500", color: "oilblue.800", p: 2 }}>
            {catalog.map(({ id, name, desc, cover, url }) => (
              <Link key={id} href={url} passHref>
                <DetailCard
                  name={name}
                  cover={cover}
                  desc={desc}
                  css={{
                    cursor: "pointer",
                    scrollSnapAlign: 'center',
                    '&:first-of-type': { marginLeft: 128 },
                    '&:last-of-type': { marginRight: 128 },
                  }}
                />
              </Link>
            ))}
          </Carousel>
        )}
      </Box>
    </>
  );
};
