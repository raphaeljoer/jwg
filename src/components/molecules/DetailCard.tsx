import React from "react";
import Image from 'next/image';
import {Badge, Box, BoxProps, Heading, useBreakpointValue} from "@chakra-ui/react"

export interface DetailProps {
  title: string;
  description: string;
}

export interface DetailCardProps extends BoxProps {
  name: string;
  cover: string;
  details: DetailProps;
};

export const DetailCard = ({name, cover, details, ...props}: DetailCardProps) => {

  return (
    <Box w={{base: "xs", lg: "sm"}} borderRadius="lg" overflow="hidden" {...props}>
      {cover && (
        <Box borderRadius="lg lg 0 0" position="relative" h={80} borderTopRadius="lg" overflow="hidden">
          <Image
            src={cover}
            alt="project"
            layout="fill"
            objectFit="cover"
          />
        </Box>
      )}

      <Box p={6} bgColor="whiteAlpha.900" borderBottomRadius="lg">

        <Heading as="h3" size="md" color="blue.900" isTruncated>
          {name}
        </Heading>

        <Box d="flex" alignItems="baseline" flexDirection="column">
          <Badge borderRadius="md" mt={4} colorScheme="blue" textTransform="uppercase">
            {details.title}
          </Badge>
          <Box
            color="gray.500"
            fontWeight="700"
            letterSpacing="wide"
            textTransform="uppercase"
            fontSize="xs"
            mt={2}
          >
            {details.description}
          </Box>
        </Box>
      </Box>
    </Box>
  )
};

export default DetailCard;
