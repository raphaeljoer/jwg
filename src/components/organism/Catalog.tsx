
//chakra-ui
import { Box, useBreakpointValue } from "@chakra-ui/react"

//core components
import Heading from "@/components/atoms/Heading";
import Carousel from "@/components/molecules/Carousel";
import DetailCard from "@/components/molecules/DetailCard";

//resources
import React from "react";
import Link from "next/link";

interface ICatalog {
  id: string;
  cover: string;
  name: string;
  desc: string;
  url: string;
}

export interface ICatalogProps {
  catalogs: ICatalog[];
};

export const Catalog = ({ catalogs }: ICatalogProps) => {
  return (
    <Box as="section" w="full" bgColor="oilblue.10" py={40} position="relative">

      <Heading mc tc maxW={768} color="oilblue.300" px={6} mb={catalogs ? 8 : undefined}>
        {catalogs ? "Faça o download dos últimos catálogos lançados" : "Em breve novos catálogos"}
      </Heading>

      {catalogs && (
        <Carousel spacing={8} scrollStep={384}>
          {catalogs.map(({ id, name, desc, cover, url }) => (
            <Link key={id} href={url} passHref>
              <DetailCard name={name} cover={cover} desc={desc} />
            </Link>
          ))}
        </Carousel>
      )}
    </Box>
  )
};

export default Catalog;
