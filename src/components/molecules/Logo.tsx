//chakra-ui
import { Box, BoxProps } from "@chakra-ui/react"
//resources
import React from "react";
import Image from "next/image";
//config
import { seo, ui } from "@/config/app";

export const Logo = (props: BoxProps) => {
  return (
    <Box css={{ cursor: "pointer" }} {...props}>
      <Image
        src={ui.logo.src.light}
        width={ui.logo.width}
        height={ui.logo.height}
        alt={seo.name}
        layout="fixed"
        priority
      />
    </Box>
  )
};

export default Logo;
