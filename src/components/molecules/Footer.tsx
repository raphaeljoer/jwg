
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
import Logo from "./Logo";
import Scroll from "../atoms/Scroll";
import { ui } from "@/config/app";

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
      <Container bgColor="oilblue.600" pos="relative">

        <Scroll file={ui.scroll.src.dark.down2} direction="up"/>

        <Grid templateColumns={templateColumns} gap={8} py={12} alignItems="center" justifyContent="center">

          <Logo />

          <Text color="oilblue.50" mc={isDesktop ? true : false} maxW="md" lineHeight="150%">
            @2021 JWG Representações | Av Sargento Hermínio, 3100 | RioMar Kennedy Empresarial - Sala 411 - Fortaleza, CE
          </Text>

          <Flex>

            <CkLink href="#" target="blank">
              <Icon size="lg" aria-label="Facebook" icon={FiFacebook} color="oilblue.50" colorScheme="transparent" />
            </CkLink>

            <CkLink href="#" target="blank">
              <Icon size="lg" aria-label="Instagram" icon={FiInstagram} color="oilblue.50" colorScheme="transparent" />
            </CkLink>

          </Flex>

        </Grid>

      </Container>

      <Container bgColor="oilblue.700" py={12}>
        <Text color="oilblue.50">
          @2021 Todos os direitos reservados - JWG Representações
        </Text>
      </Container>
    </>
  );
};

export default Footer;
