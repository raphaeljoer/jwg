//chakra-ui
import {
  ButtonGroup,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  Grid,
  Icon,
  IconButton,
  Stack,
  useBreakpointValue,
  useDisclosure
}
  from "@chakra-ui/react";
//core components
import Container from "@/components/molecules/Container"
import Button from "@/components/atoms/Button";
import Tooltip from "@/components/atoms/Tooltip";
import Logo from "@/components/molecules/Logo";
//resources
import React from "react";
import { FiSend } from "react-icons/fi";
import { HiMenuAlt3 } from 'react-icons/hi';
//data
import social from "@/data/static/social";
import mainMenu from '@/data/static/menu';
import { whatsapp, zIndex } from "@/config/app";
import Footer from "./Footer";
import Link from "../atoms/Link";


const displayMenu = () => (
  <Flex gridArea="menu" px={6}>
    <ButtonGroup spacing={2}>
      {mainMenu.map(({ label, link, icon }, index) => (
        <Link key={`${label}-${index}`} href={link} passHref>
          <Button
            leftIcon={<Icon as={icon} color="orange.500" />}
            borderRadius={12}
            fontWeight={400}
            colorScheme="transparent"
            color="oilblue.10"
            _hover={{ bgColor: "oilblue.600" }}
            cursor="pointer"
            variant="ghost"
          >
            {label}
          </Button>
        </Link>
      ))}
    </ButtonGroup>
  </Flex>
);

const displaySocial = () => (
  <Flex gridArea="social">
    <Stack direction="row" spacing={6} m="0 auto">
      {social.map(({ label, link, icon }, index) => (
        <Link key={`${label}-${index}`} href={link} passHref>
          <Icon as={icon} color="oilblue.50" fontSize={20} />
        </Link>
      ))}
    </Stack>
  </Flex>
);

const displayContactButton = () => {
  const {
    isOpen: isContactModalOpen,
    onOpen: onContactModalOpen,
    onClose: onContactModalClose
  } = useDisclosure();

  return (
    <Flex gridArea="rightMenu" align="flex-end">
      <Button
        as="a"
        ml={4}
        borderRadius={12}
        leftIcon={<FiSend />}
        color="orange.500"
        border="1px"
        _hover={{ bgColor: "orange.500", color: "oilblue.800" }}
        h={12}
        fontWeight={500}
        variant="outline"
        cursor="pointer"
        onClick={() => location.href = whatsapp.link}
      >
        Contato
      </Button>
    </Flex>
  )
};

const displayDrawer = (isDrawerOpen: boolean, onDrawerClose: () => void) => (
  <Drawer placement="right" onClose={onDrawerClose} isOpen={isDrawerOpen} size="full">
    <DrawerOverlay>
      <DrawerContent bgColor="oilblue.800">
        <DrawerCloseButton color="blue.500" m={4} size="full" p={4} />
        <DrawerHeader>
          <Logo my={4} />
        </DrawerHeader>
        <DrawerBody p={0} alignItems="space-between">
          <Stack spacing={6} mx={4} mb={24} flexDirection={'column'} alignItems={'flex-start'}>
            {mainMenu.map(({ label, link, icon }, index) => {
              const isAnchor = link.includes("#");
              return (
                <Link
                  key={`${label}-${index}`}
                  href={link}
                  anchor={isAnchor}
                  scroll={!isAnchor}
                  onClick={onDrawerClose}
                  ckLinkProps={{w: "full", style: { textDecoration: "none" }}}
                >
                  <Button
                    leftIcon={<Icon as={icon} color="orange.500" mr={4} />}
                    borderRadius="xl"
                    color="oilblue.50"
                    fontSize={28}
                    py={8}
                    justifyContent="flex-start"
                    w="full"
                    fontWeight={500}
                    cursor="pointer"
                    bgColor="transparent"
                  >
                    {label}
                  </Button>
                </Link>
              );
            })}
          </Stack>
          <Footer hideLogo />
        </DrawerBody>
      </DrawerContent>
    </DrawerOverlay>
  </Drawer>
);

const displayMobileMenu = () => {
  const {
    isOpen: isDrawerOpen,
    onToggle: onDrawerToggle,
    onClose: onDrawerClose
  } = useDisclosure();

  return (
    <>
      <Tooltip label="Menu" placement="left-start">
        <IconButton
          onClick={onDrawerToggle}
          bg="transparent"
          colorScheme="orange"
          color="oilblue.10"
          aria-label="Menu"
          fontSize="32px"
          size="lg"
          icon={<HiMenuAlt3 />}
          cursor="pointer"
        />
      </Tooltip>
      {displayDrawer(isDrawerOpen, onDrawerClose)}
    </>
  )
};

const displayLogo = () => (
  <Flex gridArea="logo" alignItems="center" h="full">
    <Logo />
  </Flex>
);

const displayRightMenu = (isDesktop: boolean | undefined) => (
  <Flex gridArea="rightMenu" align="flex-end">
    {isDesktop ? displayContactButton() : displayMobileMenu()}
  </Flex>
);

export const NavBar = () => {
  const isDesktop = useBreakpointValue({ base: false, lg: true });
  return (
    <Container
      as="nav"
      zIndex={zIndex.low}
      position="absolute"
      subContainerProps={{ h: 24, pt: 2 }}
    >
      <Grid
        templateRows="1fr"
        templateColumns={{ base: "1fr auto", lg: "auto 1fr 1fr auto" }}
        templateAreas={{ base: "'logo rightMenu'", lg: "'logo menu social rightMenu'" }}
        alignItems="center"
        h="full"
      >
        {displayLogo()}
        {isDesktop && displayMenu()}
        {isDesktop && displaySocial()}
        {displayRightMenu(isDesktop)}
      </Grid>
    </Container >
  )
};

export default NavBar;
