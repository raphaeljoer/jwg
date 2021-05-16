//chakra-ui
import { Box, Link } from "@chakra-ui/react";

//core components
import Tooltip from "@/components/atoms/Tooltip";
import Carousel from "@/components/molecules/Carousel";
import Container from "@/components/molecules/Container";

//resources
import React from "react";
import Image from 'next/image';

//data
import partners from "@/data/static/partners";

export const Partners = () => {
  return (
    <Container id="parceiros" py={24}>
      <Carousel spacing={24} scrollStep={128} fade title="Parceiros">
        {partners.map(({ imageUrl, name, link }, index) => (
          <Tooltip key={`${name}-${index}`} label={name} placement="top">
            <Link href={link} target="_blank">
              <Box position="relative" h={32} w={40} css={{
                cursor: "pointer",
                scrollSnapAlign: 'center',
                '&:first-of-type': { marginLeft: 12 },
                '&:last-of-type': { marginRight: 12 },
              }}>
                <Image src={imageUrl} layout="fill" objectFit="contain" />
              </Box>
            </Link>
          </Tooltip>
        ))}
      </Carousel>
    </Container>
  )
}

export default Partners;
