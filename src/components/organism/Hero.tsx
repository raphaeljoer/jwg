//chakra-ui
import { useBreakpointValue, Flex, Box } from '@chakra-ui/react';
//core components
import Scroll from '@/components/atoms/Scroll';
import Container from '@/components/molecules/Container';
//resources
import React, { cloneElement } from 'react';
import Image from 'next/image';
interface HeroProps {
  image: string;
  element: string;
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

const displayHeroPicture = (element: string, image: string) => (
  <Box position="relative" w="40%" h="100%" ml="auto" mr={16}>
    <Image
      src={element}
      alt="JWG tool"
      layout="fill"
      objectFit="contain"
      objectPosition="100% 100%"
    />
    <Image
      src={image}
      alt="JWG"
      layout="fill"
      objectFit="contain"
      objectPosition="100% 100%"
      priority
    />
  </Box>
);

const Hero = ({ image, element, children, ...props }: HeroProps) => {
  const isDesktop = useBreakpointValue({ base: false, lg: true });
  return (
    <Container
      overflow="visible"
      bgColor="oilblue.800"
      subContainerProps={{
        h: {base: 480, md: 680},
        position: "relative",
        display: "flex",
        alignContent: "space-between"
      }}
    >

      {cloneElement(children, { ...childrenProps, ...children.props })}

      {isDesktop && displayHeroPicture(element, image)}

      <Scroll direction="down" />
    </Container>

  )
};

export default Hero;
