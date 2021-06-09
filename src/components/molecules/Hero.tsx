//chakra-ui
import { useBreakpointValue, Flex, Box, ContainerProps } from '@chakra-ui/react';

//core components
import Scroll from '@/components/atoms/Scroll';
import Container from '@/components/molecules/Container';

//resources
import React, { cloneElement } from 'react';
import Image from 'next/image';
import { ui } from '@/config/app';

//types
import ICtaProps from '@/@types/cta';
import IHeroProps from '@/@types/hero';

const childrenProps: ICtaProps = {
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
};

const subContainerProps: ContainerProps = {
  pt: 12,
  h: { base: 540, sm: 600, md: 680 },
  position: "relative",
  display: "flex",
  alignContent: "space-between"
};

const displayHeroPicture = (element: IHeroProps["element"], image: IHeroProps["image"]) => (
  <Box position="relative" w="40%" h="100%" ml="auto" mr={16}>
    {element && (
      <Image
        src={element}
        alt="JWG tool"
        layout="fill"
        objectFit="contain"
        objectPosition="100% 70%"
      />
    )}

    {image && (
      <Image
        src={image}
        alt="JWG"
        layout="fill"
        objectFit="contain"
        objectPosition="100% 100%"
      />
    )}
  </Box>
);

const Hero = ({ element, image, children, ...props }: IHeroProps): JSX.Element => {
  if(!children) throw new Error("Children is mandatory");
  const isDesktop = useBreakpointValue({ base: false, lg: true });
  return (
    <Container
      overflow="visible"
      bgColor="oilblue.800"
      subContainerProps={subContainerProps}
      {...props}
    >
      {cloneElement(children, { ...childrenProps, ...children.props })}
      {isDesktop && displayHeroPicture(element, image)}
      <Scroll file={ui.scroll.src.dark.down} />
    </Container>
  );
};

export default Hero;
