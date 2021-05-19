//chakra-ui
import { Box, Flex, Grid, Icon, useBreakpointValue } from "@chakra-ui/react"

//core components
import Link from "@/components/atoms/Link";
import Button from "@/components/atoms/Button";
import Heading from "@/components/atoms/Heading";
import Carousel from "@/components/molecules/Carousel";
import Container from "@/components/molecules/Container";
import Card from "@/components/molecules/Card";

//resources
import React from "react";
import { FiArchive } from "react-icons/fi";
import { getFormattedDate } from "@/utils/date";

//type
import ICatalog from "@/@types/catalog";

export interface IProps {
  cards: ICatalog[];
  variant: "carousel" | "grid";
};

const cardsConfig = {
  title: "Faça o download dos últimos catálogos lançados",
  noCards: "Em breve novos catálogos",
  button: {
    label: "Baixar catálogo"
  }
}

const displayTitle = (cards: ICatalog[]) => (
  <Heading mc tc maxW={768} color="oilblue.300" px={6} mb={cards ? 8 : undefined}>
    {cards ? cardsConfig.title : cardsConfig.noCards}
  </Heading>
);

const displayCarousel = (cards: ICatalog[]) => (
  <>
    <Carousel spacing={8} scrollStep={384}>
      {cards.map(({ id, name, url, partner, releaseDate }) => (
        <Card
          key={id}
          name={name}
          releaseDate={releaseDate}
          cover={partner.logo}
          desc={`${partner.name} ${getFormattedDate({ date: releaseDate, format: "YYYY" })}`}
          variant="carousel"
          button={{
            label: cardsConfig.button.label,
            link: url
          }} />
      ))}
    </Carousel>

    <Flex align="center" justify="center">
      <Link href="/pecas" passHref>
        <Button
          borderRadius="xl"
          leftIcon={<Icon as={FiArchive} mx={2} />}
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
  </>
)

const displayGrid = (cards: ICatalog[]) => {
  const templateColumns = useBreakpointValue({
    base: "repeat(1, 1fr)",
    md: "repeat(2, 1fr)",
    xl: "repeat(3, 1fr)"
  });
  return (
    <Container>
      <Grid templateColumns={templateColumns} gap={12} rowGap={12} my={24} justifyItems="center">
        {cards.map(({ id, name, releaseDate, partner, url }) => (
          <Card
            key={id}
            name={name}
            releaseDate={releaseDate}
            cover={partner.logo}
            desc={`${partner.name} ${getFormattedDate({ date: releaseDate, format: "YYYY" })}`}
            button={{
              label: cardsConfig.button.label,
              link: url
            }}
          />
        ))}
      </Grid>
    </Container>
  );
};

export const Cards = ({ cards, variant }: IProps) => {
  const switcher = {
    "carousel": displayCarousel(cards),
    "grid": displayGrid(cards)
  }
  return (
    <Box as="section" w="full" bgColor="oilblue.10" pt={24} pb={40} position="relative">
      {displayTitle(cards)}
      {cards && switcher[variant]};
    </Box>
  );
};

export default Cards;
