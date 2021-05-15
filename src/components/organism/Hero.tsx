//chakra-ui
import { useBreakpointValue, Flex, Box } from '@chakra-ui/react';
//core components
import Scroll from '@/components/atoms/Scroll';
import Container from '@/components/molecules/Container';
//resources
import React, { cloneElement } from 'react';
import Image from 'next/image';
import { ui } from '@/config/app';
interface HeroProps {
  image?: string | undefined;
  element?: string | undefined;
  children: any;
}

const childrenProps = {
  h: "full",
  m: { base: "0 auto", lg: "0" },
  maxW: "lg",
  justifyContent: "center",
  titleProps: {
    color: "oilblue.10",
    textAlign: { base: "center", lg: "left" },
  },
  descriptionProps: {
    color: "oilblue.50",
    textAlign: { base: "center", lg: "left" },
    maxW: "xs",
    m: { base: "0 auto", lg: "0" }
  },
}

const displayHeroPicture = (element: HeroProps["element"], image: HeroProps["image"]) => (
  <Box position="relative" w="40%" h="100%" ml="auto" mr={16}>
    {element && (
      <Image
        src={element}
        alt="JWG tool"
        layout="fill"
        objectFit="contain"
        objectPosition="100% 70%"
        priority
      />
    )}

    {image && (
      <Image
        src={image}
        alt="JWG"
        layout="fill"
        objectFit="contain"
        objectPosition="100% 100%"
        priority
      />
    )}
  </Box>
);

const Hero = ({ element, image, children, ...props }: HeroProps) => {
  const isDesktop = useBreakpointValue({ base: false, lg: true });
  return (
    <Container
      overflow="visible"
      bgColor="oilblue.800"
      subContainerProps={{
        pt: 12,
        h: { base: 540, sm: 600, md: 680 },
        position: "relative",
        display: "flex",
        alignContent: "space-between"
      }}
    >

      {cloneElement(children, { ...childrenProps, ...children.props })}

      {isDesktop && displayHeroPicture(element, image)}

      <Scroll file={ui.scroll.src.dark.down} />
    </Container>

  )
};

export default Hero;
