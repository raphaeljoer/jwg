import React from "react";
import {Center, ContainerProps, Grid, useBreakpointValue} from "@chakra-ui/react";
import Container from "../molecules/Container";
import {Heading} from '../atoms/Heading';
import {DetailCard, DetailCardProps} from '../molecules/DetailCard';
import ButtonIcon from '../molecules/ButtonIcon';

export interface CardsPreview extends ContainerProps {
  name: string;
  data: DetailCardProps[];
}

export const CardsPreview = ({name, data, ...props}: CardsPreview) => {

  const templateColumns = useBreakpointValue({
    base: "repeat(1, 1fr)",
    md: "repeat(2, 1fr)",
    lg: "repeat(3, 1fr)"
  });

  return (
    <Container as="section" bgGradient="linear(to-r, blue.500, #00C7C7)" py={32} position="relative" {...props}>

      <Heading mc tc maxW={640} color="whiteAlpha.900">
        {name}
      </Heading>

      <Grid templateColumns={templateColumns} gap={8} rowGap={8} my={24} justifyItems="center">
        {data ? (
          data.map(({name, cover, details}, index) => (
            <DetailCard
              key={`${name}-${index}`}
              name={name}
              cover={cover}
              details={{
                title: details.title,
                description: details.description
              }}
            />
          ))
        ) : (
          <Heading as="h3" size="xl" mc tc maxW={640} color="whiteAlpha.900">
            Em breve novos projetos
          </Heading>
        )}
      </Grid>

      <Center>
        <ButtonIcon minHeight={56 / 4} fontSize={18}>
          Conheça nossos projetos
        </ButtonIcon>
      </Center>

    </Container>
  )

};

export default CardsPreview;
