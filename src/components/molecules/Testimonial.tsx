import { Box, Circle, Flex, HStack, Text, useColorModeValue } from '@chakra-ui/react'
import * as React from 'react'
import { Quotee } from '@/components/molecules/Quotee';
import Scroll from '@/components/atoms/Scroll';
import { ui } from '@/config/app';

export const Testimonial = (props: any) => (
  <Box as="section" bg={useColorModeValue('oilblue.10', 'gray.800')} pt={24} pb={12} pos="relative" {...props}>
    <Box maxW="3xl" mx="auto" px={{ base: '6', md: '8' }} pt="12" pb="16">
      <Flex direction="column" align="center" textAlign="center">
        <Text fontSize={{ base: 'xl', md: '2xl' }} fontWeight="medium" mb="6" color="oilblue.400">
          &ldquo;A JWG é a única empresa que eu confio grandes
          entregas mais complexas, são extremamente comprometidos
          com o prazo e tem a maior variedade de peças
          que eu conheço.&rdquo;
        </Text>
        <Quotee
          name="Carlos Seabra"
          jobTitle="Logística (Padre Cícero)"
          imageSrc="/assets/img/picture/testimonial-man.png"
          mt="8"
        />
      </Flex>
      <HStack justify="center" spacing="4" mt="8" color={useColorModeValue('gray.300', 'gray.600')}>
        <Circle w="3" h="3" bg="oilblue.400" />
        <Circle w="2" h="2" bg="currentColor" />
        <Circle w="2" h="2" bg="currentColor" />
      </HStack>
    </Box>
    <Scroll file={ui.scroll.src.light.down}/>
  </Box>
)

export default Testimonial;
