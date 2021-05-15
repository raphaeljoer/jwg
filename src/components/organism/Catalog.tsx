//chakra-ui
import { Box, Flex, Icon, useBreakpointValue } from "@chakra-ui/react"

//core components
import Heading from "@/components/atoms/Heading";
import Carousel from "@/components/molecules/Carousel";
import DetailCard from "@/components/molecules/DetailCard";

//resources
import React from "react";
import Link from "next/link";
import Button from "../atoms/Button";
import { FiArchive } from "react-icons/fi";

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
    <Box as="section" w="full" bgColor="oilblue.10" pt={24} pb={40} position="relative">

      <Heading mc tc maxW={768} color="oilblue.300" px={6} mb={catalogs ? 8 : undefined}>
        {catalogs ? "Faça o download dos últimos catálogos lançados" : "Em breve novos catálogos"}
      </Heading>

      {catalogs && (
        <Carousel spacing={8} scrollStep={384}>
          {catalogs.map(({ id, name, desc, cover, url }) => (
            <DetailCard
              name={name}
              cover={cover}
              desc={desc}
              variant="carousel"
              button={{
                label: "Baixar catálogo",
                link: url
              }} />
          ))}
        </Carousel>
      )}

      {catalogs && (
        <Flex align="center" justify="center">
          <Link href="/pecas" passHref>
            <Button
              as="a"
              borderRadius="xl"
              leftIcon={<Icon as={FiArchive} />}
              color="oilblue.500"
              bgColor="transparent"
              border="2px"
              _hover={{ bgColor: "oilblue.500", color: "oilblue.10" }}
              h={{ base: 14, xl: 16 }}
              w="full"
              fontWeight={500}
              fontSize={{ base: 16, md: 20 }}
              variant="outline"
              cursor="pointer"
              maxW="xs"
              mt={16}
              alignSelf="center"
            >
              Veja todos os catálogos
          </Button>
          </Link>
        </Flex>
      )}

    </Box>
  )
};

export default Catalog;
