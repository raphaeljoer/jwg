
//chakra-ui
import { Box, BoxProps, Flex, useBreakpointValue } from "@chakra-ui/react";
//core components
import Cta, { CtaProps } from "./Cta";
//resources
import React, { cloneElement } from "react";
import Image from 'next/image';

export interface HeaderImageProps extends BoxProps {
  image?: string;
  children: any;
};

export const HeaderImage = ({ image, children, ...props }: HeaderImageProps) => {
  const isTablet = useBreakpointValue({ base: false, md: true });

  return (
    <Box bgColor="rgba(0, 137, 165, 1)" h={isTablet ? 600 : 500} w="full" position="relative" {...props}>

      <Flex align="center" justify="center" h="full" w={isTablet ? "50%" : "full"} px={12}>
        {cloneElement(children, {
          position: "relative",
          zIndex: 2,
          alignItems: isTablet ? "flex-start" : "center",
          titleProps: { color: "whiteAlpha.900", textAlign: isTablet ? "left" : "center", fontSize: 48 },
          upTitleProps: { color: "whiteAlpha.900", textAlign: isTablet ? "left" : "center", fontSize: 18 },
          mb: isTablet ? undefined : "-24%",
          ...children.props
        })}
      </Flex>

      <Box
        position="absolute"
        bgGradient={`linear(${isTablet ? "to-r" : "to-t"}, rgba(0, 137, 165, 1), rgba(0, 137, 165, 0))`}
        h="full"
        w={isTablet ? "50%" : "full"}
        top={0}
        left={isTablet ? "23%" : 0}
        zIndex={1} />

      {image && (
        <Box
          left={isTablet ? "24%" : 0}
          position="absolute"
          top={0}
          right={0}
          bottom={0}
          zIndex={0}
        >
          <Image
            src={image}
            layout="fill"
            objectFit="cover"
            objectPosition="center"
          />
        </Box>
      )}
    </Box>
  )
};

export default HeaderImage;
