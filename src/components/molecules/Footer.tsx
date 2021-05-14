
import React from "react";
import Image from 'next/image';
import Container from "./Container";
import { Box, IconButton, IconButtonProps, SimpleGrid, Stack, Link as CkLink, Grid, Flex, useBreakpointValue } from "@chakra-ui/react"
import Heading from "../atoms/Heading";
import Link from "next/link";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import Icon from "../atoms/Icon";
import Text from "../atoms/Text";
import { FiFacebook, FiInstagram } from "react-icons/fi";

export interface Footer {

};

export const Footer = ({ ...props }: Footer) => {

  const isDesktop = useBreakpointValue({ base: false, lg: true });

  const templateColumns = useBreakpointValue({
    base: '1fr',
    lg: 'auto 1fr auto'
  })

  return (
    <>
      <Container bgColor="ice.100" position="relative">

        <Box
          position="absolute"
          top={2}
          left="50%"
          zIndex={10}
          transform={"translateX(-50%) translateY(-100%)"}
        >
          <Image
            src="/img/ui-elements/scroll-up.svg"
            alt="shape"
            width={145}
            height={37}
            priority
          />
        </Box>

        <SimpleGrid columns={[1, 2, null, 4]} spacing={12} py={24}>

          <Stack>
            <Heading fontSize={16} fontWeight={700} color="oilblue.500" mb={2}>Instituto Maria da Hora</Heading>
            <Link href="/about" passHref>
              <CkLink as="a" color="oilblue.500">O instituto</CkLink>
            </Link>
            <Link href="/about" passHref>
              <CkLink as="a" color="oilblue.500">A fundadora</CkLink>
            </Link>
            <Link href="/about" passHref>
              <CkLink as="a" color="oilblue.500">Contato</CkLink>
            </Link>
          </Stack>

          <Stack>
            <Heading fontSize={16} fontWeight={700} color="oilblue.500" mb={2}>Projetos</Heading>
            <Link href="/about" passHref>
              <CkLink as="a" color="oilblue.500">Projeto Acolhimento Institucional de Crianças e Adolescentes</CkLink>
            </Link>
            <Link href="/about" passHref>
              <CkLink as="a" color="oilblue.500">Qualificação de Serviços para População em Situação de Rua</CkLink>
            </Link>
            <Link href="/about" passHref>
              <CkLink as="a" color="oilblue.500">Todos os projetos</CkLink>
            </Link>
          </Stack>

          <Stack>
            <Heading fontSize={16} fontWeight={700} color="oilblue.500" mb={2}>Transparência</Heading>
            <Link href="/about" passHref>
              <CkLink as="a" color="oilblue.500">Política de compliance</CkLink>
            </Link>
            <Link href="/about" passHref>
              <CkLink as="a" color="oilblue.500">Acordos de cooperação técnica</CkLink>
            </Link>
            <Link href="/about" passHref>
              <CkLink as="a" color="oilblue.500">Código de ética</CkLink>
            </Link>
          </Stack>

          <Stack>
            <Heading fontSize={16} fontWeight={700} color="oilblue.500" mb={2}>Veja também</Heading>
            <Link href="https://google.com" passHref>
              <CkLink as="a" color="oilblue.500" isExternal>Newsletter <ExternalLinkIcon mx="2px" /></CkLink>
            </Link>
          </Stack>

        </SimpleGrid>

      </Container>

      <Container bgColor="ice.300">

        <Grid templateColumns={templateColumns} gap={8} py={12} alignItems="center" justifyContent="center">

          <Image
            src="/img/logo/logo-dark.png"
            width={52}
            height={28}
            alt="Instituto Maria da Hora"
            layout="fixed"
          />

          <Text color="oilblue.500" mc={isDesktop ? true : false} maxW="md">
            @2021 Instituto Maria da Hora 06.750.547/0001-63 - Rua Cel. Matos Dourado, 397 - Fortaleza, CE - 60.521-063
          </Text>

          <Flex>

            <CkLink href="https://www.facebook.com/institutomariadahora/" target="blank">
              <Icon size="lg" aria-label="Facebook" icon={FiFacebook} color="oilblue.500" colorScheme="transparent" />
            </CkLink>

            <CkLink href="https://www.instagram.com/instituto.mariadahora/" target="blank">
              <Icon size="lg" aria-label="Facebook" icon={FiInstagram} color="oilblue.500" colorScheme="transparent" />
            </CkLink>

          </Flex>

        </Grid>

      </Container>

      <Container bgColor="ice.100" py={12}>
        <Text color="oilblue.500">
          @2021 Todos os direitos reservados - Instituto Maria da Hora
    </Text>
      </Container>
    </>
  );
};

export default Footer;
