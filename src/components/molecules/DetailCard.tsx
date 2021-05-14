import React from "react";
import Image from 'next/image';
import Text from '@/components/atoms/Text';
import { Badge, Box, BoxProps, Heading, useBreakpointValue, Image as CkImage, Flex, Icon } from "@chakra-ui/react"
import { Button } from "../atoms/Button";
import { FiDownload } from "react-icons/fi";

export interface DetailProps {
  title: string;
  description: string;
}

export interface DetailCardProps extends BoxProps {
  name: string;
  cover: string;
  desc: string;
};

const getCSSProps = () => {
  const margin = useBreakpointValue({ base: 24, md: 32, lg: 96 });
  return {
    css: {
      cursor: "pointer",
      scrollSnapAlign: 'center',
      '&:first-of-type': { marginLeft: margin },
      '&:last-of-type': { marginRight: margin },
    }
  }
};

export const DetailCard = ({ name, cover, desc, ...props }: DetailCardProps) => {

  return (
    <Box w={{ base: "xs", lg: "sm" }} borderRadius="xl" overflow="hidden" {...getCSSProps()} {...props}>
      {cover && (
        <Flex h={152} borderTopRadius="lg" bgColor="white" align="center" justify="center">
          <Box position="relative">
            <CkImage
              src={cover}
              alt="project"
              layout="fill"
              objectFit="cover"
              objectPosition="center center"
            />
          </Box>
        </Flex>
      )}

      <Box p={6} bgColor="oilblue.500" borderBottomRadius="xl">
        <Badge borderRadius="md" mt={-16} bgColor="orange.500" color="white" p={2} textTransform="uppercase">
          Lançamento
        </Badge>

        <Heading as="h3" fontSize={32} color="oilblue.10" isTruncated mb={2}>
          {name}
        </Heading>

        <Text fontSize={16} color="oilblue.50" mb={6}>
          {desc}
        </Text>

        <Button
          as="a"
          borderRadius="xl"
          leftIcon={<Icon as={FiDownload} />}
          color="white"
          bgColor="orange.500"
          border="none"
          _hover={{ bgColor: "transparent", color: "orange.500", border: "4px" }}
          h={{ base: 14, xl: 16 }}
          w="full"
          fontWeight={500}
          fontSize={{ base: 16, md: 20 }}
          variant="outline"
          cursor="pointer"
        >
          Baixar catalogo
          </Button>
      </Box>
    </Box>
  )
};

export default DetailCard;
