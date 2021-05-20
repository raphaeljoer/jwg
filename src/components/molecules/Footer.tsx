//chakra-ui
import { Link as CkLink, Grid, Flex, useBreakpointValue } from "@chakra-ui/react"
//core components
import Icon from "@/components/atoms/Icon";
import Text from "@/components/atoms/Text";
import Container from "@/components/molecules/Container";
import Logo from "@/components/molecules/Logo";
import Scroll from "@/components/atoms/Scroll";
//resources
import React from "react";
import { ui } from "@/config/app";
import { FiFacebook, FiInstagram } from "react-icons/fi";

export interface Footer {
  hideLogo?: boolean;
};

const iconProps = {
  size: "lg",
  color: "oilblue.50",
  colorScheme: "transparent"
}

export const Footer = ({ hideLogo, ...props }: Footer) => {

  const isDesktop = useBreakpointValue({ base: false, lg: true });

  const templateColumns = useBreakpointValue({
    base: '1fr',
    lg: 'auto 1fr auto'
  })

  return (
    <>
      <Container bgColor="oilblue.600" pos="relative">
        <Scroll file={ui.scroll.src.dark.down2} direction="up" />
        <Grid templateColumns={templateColumns} gap={8} py={12} alignItems="center" justifyContent="center">
          {!hideLogo && <Logo />}
          <Text color="oilblue.50" mc={isDesktop} maxW="md" lineHeight="150%">
            @2021 JWG Representações | Av Sargento Hermínio, 3100 | RioMar Kennedy Empresarial - Sala 411 - Fortaleza, CE
          </Text>
          <Flex>
            <CkLink href="#" target="blank">
              <Icon aria-label="Facebook" icon={FiFacebook} {...iconProps} />
            </CkLink>
            <CkLink href="#" target="blank">
              <Icon aria-label="Instagram" icon={FiInstagram} {...iconProps} />
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
