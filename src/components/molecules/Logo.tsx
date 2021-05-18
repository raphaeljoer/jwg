//chakra-ui
import { Box, BoxProps } from "@chakra-ui/react"
//resources
import React from "react";
import Image from "next/image";
//config
import { ui } from "@/config/app";
import Link from "@/components/atoms/Link";


export const Logo = (props: BoxProps) => {
  return (
    <Box css={{ cursor: "pointer" }} {...props}>
      <Link href="/" passHref>
        <Image
          src={ui.logo.src.light}
          width={ui.logo.width}
          height={ui.logo.height}
          alt={"JWG Representações"}
          layout="fixed"
          priority
        />
      </Link>
    </Box>
  )
};

export default Logo;
