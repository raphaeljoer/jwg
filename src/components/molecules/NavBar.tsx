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
  LinkBox,
  LinkOverlay,
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
import Link from "next/link";
import React from "react";
import { FiSend } from "react-icons/fi";
import { HiMenuAlt3 } from 'react-icons/hi';
//data
import social from "@/data/static/social";
import mainMenu from '@/data/static/menu';
import { zIndex } from "@/config/app";


const displayMenu = () => (
  <Flex gridArea="menu" px={6}>
    <ButtonGroup spacing={2}>
      {mainMenu.map(({ label, link, icon }, index) => (
        <LinkBox key={`${label}-${index}`}>
          <Link href={link} passHref>
            <LinkOverlay>
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
            </LinkOverlay>
          </Link>
        </LinkBox>
      ))}
    </ButtonGroup>
  </Flex>
);

const displaySocial = () => (
  <Flex gridArea="social">
    <Stack direction="row" spacing={6} m="0 auto">
      {social.map(({ label, link, icon }, index) => (
        <LinkBox key={`${label}-${index}`}>
          <Link href={link} passHref>
            <LinkOverlay>
              <Icon as={icon} color="oilblue.50" fontSize={20} />
            </LinkOverlay>
          </Link>
        </LinkBox>
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
        mx={4}
        borderRadius={12}
        leftIcon={<FiSend />}
        color="orange.500"
        border="1px"
        _hover={{ bgColor: "orange.500", color: "oilblue.800" }}
        h={12}
        fontWeight={500}
        variant="outline"
        cursor="pointer"
        onClick={onContactModalOpen}
      >
        Contato
      </Button>
    </Flex>
  )
};

const displayDrawer = (isDrawerOpen: boolean, onDrawerClose: () => void) => (
  <Drawer placement="right" onClose={onDrawerClose} isOpen={isDrawerOpen}>
    <DrawerOverlay>
      <DrawerContent>
        <DrawerCloseButton />
        <DrawerHeader borderBottomWidth="1px">Menu</DrawerHeader>
        <DrawerBody>
          <Stack spacing={2} flexDirection={'column'} alignItems={'flex-start'}>
            {mainMenu.map(({ label, link, icon }, index) => (
              <Link key={`${label}-${index}`} href={link}>
                <Button
                  as="a"
                  leftIcon={<Icon as={icon} color="orange.500" />}
                  borderRadius={12}
                  fontWeight={400}
                  cursor="pointer"
                >
                  {label}
                </Button>
              </Link>
            ))}
          </Stack>
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
