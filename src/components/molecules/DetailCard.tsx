//chakra-ui
import {
  Badge,
  Box,
  BoxProps,
  Heading,
  useBreakpointValue,
  Image as CkImage,
  Flex,
  Icon
} from "@chakra-ui/react"

//core components
import Text from '@/components/atoms/Text';
import Button from "@/components/atoms/Button";
import Tooltip from "@/components/atoms/Tooltip";

//resources
import React from "react";
import Link from "next/link";
import { FiDownload } from "react-icons/fi";
import { getFormattedDate, isSameDate } from "@/utils/date";

//types
import IButton from "@/@types/button";
export interface DetailCardProps extends BoxProps {
  name: string;
  cover: string;
  desc: string;
  releaseDate: string;
  button: IButton;
  variant?: "carousel"
};

const getCSSProps = () => {
  const margin = useBreakpointValue({ base: 24, md: 32, lg: 96 });
  return {
    scrollSnapAlign: 'center',
    '&:first-of-type': { marginLeft: margin },
    '&:last-of-type': { marginRight: margin },
  }
};

export const DetailCard = ({
  name,
  cover,
  desc,
  releaseDate,
  button,
  variant,
  ...props
}: DetailCardProps) => {
  const isCarousel = variant === "carousel";
  const isLongName = useBreakpointValue({ base: name.length > 15, lg: name.length > 22 });
  const isLaunch = isSameDate({ dateToCompare: releaseDate, range: "month" })

  return (
    <Box
      w={{ base: "xs", lg: "sm" }}
      textDecoration="none"
      borderRadius="xl"
      overflow="hidden"
      css={isCarousel && getCSSProps()}
      {...props}
    >
      {cover && (
        <Flex
          h={152}
          borderTopRadius="lg"
          bgColor="white"
          align="center"
          justify="center"
        >
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
          {isLaunch ? "LANÇAMENTO" : getFormattedDate({ date: releaseDate, format: "MMMM / YYYY" })}
        </Badge>

        <Tooltip label={name} placement="top-end" isDisabled={!isLongName}>
          <Heading as="h3" fontSize={28} color="oilblue.10" isTruncated mb={2}>
            {name}
          </Heading>
        </Tooltip>

        <Text fontSize={18} color="oilblue.50" mb={6}>
          {desc}
        </Text>

        <Link href={button.link} passHref>
          <Button
            as="a"
            target="_blank"
            borderRadius="xl"
            leftIcon={<Icon as={FiDownload} />}
            color="white"
            bgColor="orange.500"
            border="none"
            _hover={{ bgColor: "transparent", color: "orange.500", border: "2px" }}
            h={{ base: 14, xl: 16 }}
            w="full"
            fontWeight={500}
            fontSize={{ base: 16, md: 20 }}
            variant="outline"
            cursor="pointer"
          >
            {button.label}
          </Button>
        </Link>
      </Box>
    </Box>
  )
};

export default DetailCard;
