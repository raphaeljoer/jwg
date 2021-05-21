import { Box, BoxProps, Circle, Flex, HStack, Text, useColorModeValue } from '@chakra-ui/react'
import React, { useState } from 'react'
import { Quotee } from '@/components/molecules/Quotee';
import Scroll from '@/components/atoms/Scroll';
import { ui } from '@/config/app';
//type
import ITestimonial from '@/@types/testimonial';
import Carousel from './Carousel';

interface IProps extends BoxProps {
  testimonials: ITestimonial[];
}

export const Testimonial = ({ testimonials, ...props }: IProps) => {
  const [active, setActive] = useState();
  return (
    <Box as="section" bg={useColorModeValue('oilblue.10', 'gray.800')} pt={24} pb={24} pos="relative" {...props}>

      <Carousel spacing={8} scrollStep={384}>
        {testimonials.map(({ message, author }, index) => (
          <Flex key={`${author.name}-${index}`} direction="column" align="center" textAlign="center" w="100vw" css={{ scrollSnapAlign: "center" }}>
            <Box maxW={{ base: "xs", sm: "sm", md: "lg", lg: "2xl", xl: "3xl" }} px={4}>
              <Text fontSize={{ base: 'xl', md: '2xl' }} fontWeight="medium" mb="6" color="oilblue.400">
                &rdquo;{message}&rdquo;
              </Text>
              <Quotee
                name={author.name}
                jobTitle={author.jobTitle}
                imageSrc={author.imageSrc}
                mt="8"
              />
            </Box>
          </Flex>
        ))}
      </Carousel>

      {/* <HStack justify="center" spacing="4" mt="8" color={useColorModeValue('gray.300', 'gray.600')}>
        <Circle w="3" h="3" bg="oilblue.400" />
        <Circle w="2" h="2" bg="currentColor" />
        <Circle w="2" h="2" bg="currentColor" />
      </HStack> */}

      <Scroll file={ui.scroll.src.light.down} />
    </Box>
  );
}

export default Testimonial;
