//chakra-ui
import { Box, BoxProps, Link } from "@chakra-ui/react"
//resources
import React from "react";
import Image from "next/image";
//config
import { ui } from "@/config/app";
import NextLink from "next/link";
import SEO from "@/config/seo";

export const Logo = (props: BoxProps) => {
  return (
    <Box css={{ cursor: "pointer" }} {...props}>
      <NextLink href="/" passHref>
        <Link>
          <Image
            src={ui.logo.src.light}
            width={ui.logo.width}
            height={ui.logo.height}
            alt={"JWG Representações"}
            layout="fixed"
            priority
          />
        </Link>
      </NextLink>
    </Box>
  )
};

export default Logo;
