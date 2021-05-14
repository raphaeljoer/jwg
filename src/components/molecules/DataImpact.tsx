//chakra-ui
import {Flex, Grid, ResponsiveValue, useBreakpointValue} from "@chakra-ui/react"
//core components
import ButtonIcon from "../molecules/ButtonIcon";
import Container from "./Container";
import Cta from "./Cta";
//resources
import React from "react";
import Image from 'next/image';
import * as CSS from "csstype";

export interface DataImpactProps {
};

export const DataImpact = ({}: DataImpactProps) => {

  const isDesktop = useBreakpointValue({base: false, lg: true});
  const alignBreakPoint: ResponsiveValue<CSS.Property.TextAlign> = {base: "center", lg: "left"}

  return (
    <Container bgColor="ice.100" py={24}>
      <Grid gap={16} rowGap={16} templateColumns={{base: "repeat(1, 1fr)", lg: "repeat(3, 1fr)"}} mb={24}>
        <Flex position="relative" align="center" justify="center" w="full">
          <Cta
            upTitle="Proposta de valor"
            title="Transformamos a realidade de vidas em situação de vunerabilidade."
            upTitleProps={{color: "pink.400", textAlign: alignBreakPoint, maxW: {base: undefined, lg: 320}, fontWeight: 500}}
            titleProps={{color: "oilblue.500", textAlign: alignBreakPoint, maxW: {base: undefined, lg: 320}}}
            w="full"
            zIndex="10"
            maxW="sm"
          />
        </Flex>
        <Flex position="relative" justify="center" align="center" w="full" h={96}>
          <Cta
            title="2972 vidas"
            description="já foram impactadas com nossos projetos sociais"
            titleProps={{color: "blue.500", textAlign: "center"}}
            descriptionProps={{
              textAlign: "center",
              color: "oilblue.400",
              w: "full",
              m: "0 auto",
              mb: 0,
              maxW: 200
            }}
            w="full"
            zIndex="10"
            maxW="sm"
          />
          <Image
            src="/img/ui-elements/ellipse-heart.svg"
            alt="project"
            layout="fill"
          />
        </Flex>
        <Flex alignItems="center" justifyItems="center" justifyContent="center" w="full">
          <Cta
            title="O que nos faz únicos?"
            description="Somos autênticos, simples, transparêntes, confiáveis e ajudamos pessoas a reencontrarem o caminho."
            titleProps={{color: "oilblue.500", fontSize: 24, textAlign: alignBreakPoint}}
            descriptionProps={{color: "oilblue.400", textAlign: alignBreakPoint}}
            alignSelf="center"
            m="0 auto"
            maxW="xs"
          >
            <Flex w="full" justifyItems={alignBreakPoint}>
              <ButtonIcon m={isDesktop ? "0" : "0 auto"}>
                Faça parte
              </ButtonIcon>
            </Flex>
          </Cta>
        </Flex>
      </Grid>

      <Grid gap={16} rowGap={16} templateColumns={{base: "repeat(1, 1fr)", md: "repeat(2, 1fr)", lg: "repeat(4, 1fr)"}}>
        <Cta
          upTitle="1200+"
          title="Crianças e adolescentes"
          description="Estamos mudando o jogo para milhares de crianças e jovens."
          upTitleProps={{color: "green.500", fontSize: 32, fontWeight: 900, textAlign: alignBreakPoint}}
          titleProps={{color: "oilblue.500", fontSize: 20, fontWeight: 900, textAlign: alignBreakPoint}}
          descriptionProps={{color: "oilblue.400", textAlign: alignBreakPoint}}
          m={isDesktop ? "0" : "0 auto"}
          maxW="xs"
        />
        <Cta
          upTitle="700+"
          title="Idosos"
          description="Levamos mais qualidade de vida para quem mais precisa."
          upTitleProps={{color: "yellow.500", fontSize: 32, fontWeight: 900, textAlign: alignBreakPoint}}
          titleProps={{color: "oilblue.500", fontSize: 20, fontWeight: 900, textAlign: alignBreakPoint}}
          descriptionProps={{color: "oilblue.400", textAlign: alignBreakPoint}}
          m={isDesktop ? "0" : "0 auto"}
          maxW="xs"
        />
        <Cta
          upTitle="200+"
          title="Famílias"
          description="Acompanhamos centenas de famílias todos os dias."
          upTitleProps={{color: "pink.400", fontSize: 32, fontWeight: 900, textAlign: alignBreakPoint}}
          titleProps={{color: "oilblue.500", fontSize: 20, fontWeight: 900, textAlign: alignBreakPoint}}
          descriptionProps={{color: "oilblue.400", textAlign: alignBreakPoint}}
          m={isDesktop ? "0" : "0 auto"}
          maxW="xs"
        />
        <Cta
          upTitle="16"
          title="Projetos simultâneos"
          description="Impactamos realidades espalhadas por todo o estado."
          upTitleProps={{color: "blue.500", fontSize: 32, fontWeight: 900, textAlign: alignBreakPoint}}
          titleProps={{color: "oilblue.500", fontSize: 20, fontWeight: 900, textAlign: alignBreakPoint}}
          descriptionProps={{color: "oilblue.400", textAlign: alignBreakPoint}}
          m={isDesktop ? "0" : "0 auto"}
          maxW="xs"
        />
      </Grid>
    </Container>
  )
};

export default DataImpact;
