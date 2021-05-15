//chakra-ui
import { Box, Flex, FlexProps, IconButton, Stack, useBreakpointValue } from '@chakra-ui/react';
//core components
import Heading from '@/components/atoms/Heading';
import Tooltip from '@/components/atoms/Tooltip';
import Container from '@/components/molecules/Container';
//resources
import React, { useCallback, useRef } from 'react';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

interface ButtonProps {
  labelRight: string;
  labelLeft: string;
}

interface CarouselProps extends FlexProps {
  scrollStep: number;
  buttonProps?: ButtonProps;
  tooltipProps?: object;
  children: any;
  spacing: number;
  fade?: boolean;
  title?: string;
}

const displayFade = () => {
  <>
    <Box
      position="absolute"
      top={0}
      right={0}
      w={12}
      h="full"
      zIndex={10}
      bgGradient="linear(to-r, rgba(255,255,255,0), rgba(255,255,255,1))"
    />

    <Box
      position="absolute"
      top={0}
      left={0}
      w={12}
      h="full"
      zIndex={10}
      bgGradient="linear(to-r, rgba(255,255,255,1), rgba(255,255,255,0))"
    />
  </>
};

export const Carousel = ({ scrollStep, spacing, title, fade, tooltipProps, buttonProps, children, ...props }: CarouselProps) => {

  const partnersRef = useRef<HTMLDivElement>(null);
  const isTablet = useBreakpointValue({ base: false, md: true });

  const handleScrollNext = useCallback(() => {
    partnersRef.current?.scrollBy(scrollStep, 0);
  }, []);

  const handleScrollBack = useCallback(() => {
    partnersRef.current?.scrollBy(-scrollStep, 0);
  }, []);

  return (
    <>
      <Container>
        <Flex justifyContent={isTablet ? 'space-between' : 'center'} zIndex={20} mb={12}>
          <Heading fontSize={32} fontWeight="700" color="oilblue.500">{title}</Heading>
          {isTablet && (
            <Box>
              <Tooltip label={buttonProps ? buttonProps.labelLeft : "Voltar"} placement="top" {...tooltipProps}>
                <IconButton colorScheme="oilblue" aria-label="Scroll Back" mr={2} icon={<IoIosArrowBack />} onClick={handleScrollBack} />
              </Tooltip>
              <Tooltip label={buttonProps ? buttonProps.labelRight : "Próximo"} placement="top" {...tooltipProps}>
                <IconButton colorScheme="oilblue" aria-label="Scroll Forward" icon={<IoIosArrowForward />} onClick={handleScrollNext} />
              </Tooltip>
            </Box>
          )}
        </Flex>
      </Container>

      <Flex position="relative">

        <Flex
          ref={partnersRef}
          maxW="100vw"
          overflowX="scroll"
          css={{
            scrollSnapType: 'x mandatory',
            scrollBehavior: 'smooth',
            WebkitOverflowScrolling: 'touch',
            msOverflowStyle: 'none', /* IE and Edge */
            scrollbarWidth: 'none', /* Firefox */
            '&::-webkit-scrollbar': { display: 'none' },
          }}
          {...props}
        >

          {fade && displayFade()}

          <Stack as="div" spacing={spacing} direction="row">
            {children}
          </Stack>
        </Flex>
      </Flex>
    </>
  )
};

export default Carousel;
