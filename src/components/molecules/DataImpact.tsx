//chakra-ui
import { Box, Flex, Grid, ResponsiveValue, useBreakpointValue } from "@chakra-ui/react"
//core components
import Container from "./Container";
import Cta, { CtaProps } from "./Cta";
//resources
import React from "react";
import Image from 'next/image';
import * as CSS from "csstype";
import Scroll from "../atoms/Scroll";
import { milestones } from "@/data/static/milestones";
import { ui } from "@/config/app";

const milestoneProps: CtaProps = {
  upTitleProps: { color: "blue.500", fontSize: 40, fontWeight: 900, textAlign: { base: "center", lg: "left" } },
  titleProps: { color: "orange.400", fontSize: 20, fontWeight: 900, textAlign: { base: "center", lg: "left" } },
  descriptionProps: { color: "blue.100", textAlign: { base: "center", lg: "left" }, fontSize: { base: 16, xl: 18 } },
  m: { base: "0 auto", lg: "0" },
  maxW: "xs"
};

const textAlign: ResponsiveValue<CSS.Property.TextAlign> = { base: "center", lg: "left" }

const displayBadge = () => (
  <Flex position="relative" align="center" justify="center" mt={-40} mb={12}>
    <Image
      src={"/assets/ui/badge-since.svg"}
      alt={"JWD Desde 2000"}
      width={190}
      height={190}
    />
  </Flex>
);


const displayValuePurpose = () => (
  <Flex position="relative" align="center" justify="center" w="full">
    <Cta
      upTitle="Proposta de valor"
      title="Construir soluções entre fornecedores e rede de distribuição com segurança e ética."
      upTitleProps={{ color: "pink.400", textAlign: textAlign, maxW: { base: undefined, lg: 320 }, fontWeight: 400 }}
      titleProps={{ color: "blue.100", textAlign: textAlign, maxW: { base: undefined, lg: 320 }, fontWeight: 500, fontSize: { base: 24, md: 24, xl: 32 } }}
      w="full"
      zIndex="10"
      maxW="sm"
    />
  </Flex>
);

const displayMainMilestone = () => (
  <Flex position="relative" justify="center" align="center" w="full" h={96}>
    <Cta
      title="+32 mil"
      description="Entregas por todo o nordeste"
      titleProps={{
        color: "orange.400",
        textAlign: "center",
        fontSize: { base: 32, sm: 40 },
        mb: 2
      }}
      descriptionProps={{
        textAlign: "center",
        color: "blue.100",
        w: "full",
        m: "0 auto",
        mb: 0,
        maxW: { base: 144, sm: 260, md: 144, lg: 180 },
        fontSize: { base: 16, md: 18, xl: 20 }
      }}
      w="full"
      zIndex="10"
      maxW="sm"
    />
    <Image
      src="/assets/ui/shape-circle.svg"
      alt="project"
      layout="fill"
    />
  </Flex>
);

const displayDifferential = () => (
  <Flex alignItems="center" justifyItems="center" justifyContent="center" w="full">
    <Cta
      title="O que nos faz únicos?"
      description="Somos sinônimo de atendimento personalizado, logística e tradição."
      titleProps={{ color: "orange.400", fontSize: 24, textAlign: textAlign }}
      descriptionProps={{ color: "blue.100", textAlign: textAlign }}
      alignSelf="center"
      m="0 auto"
      maxW="xs"
    />
  </Flex>
);

export const DataImpact = () => {
  return (
    <Container bgColor="oilblue.500" py={24} position="relative">
      {displayBadge()}
      <Grid gap={16} rowGap={16} templateColumns={{ base: "repeat(1, 1fr)", lg: "repeat(3, 1fr)" }} mb={24}>
        {displayValuePurpose()}
        {displayMainMilestone()}
        {displayDifferential()}
      </Grid>

      <Grid gap={16} rowGap={16} templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(2, 1fr)", lg: "repeat(4, 1fr)" }}>
        {milestones.map(({ id, number, title, desc }) => (
          <Cta
            key={id}
            upTitle={number}
            title={title}
            description={desc}
            {...milestoneProps}
          />
        ))}
      </Grid>
      <Scroll file={ui.scroll.src.dark.down2} />
    </Container>
  )
};

export default DataImpact;
