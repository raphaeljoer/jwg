import { Box, BoxProps, Img, Text } from '@chakra-ui/react'
import * as React from 'react'

interface IProps extends BoxProps {
  name: string
  jobTitle: string
  imageSrc: string
}

export const Quotee = ({ name, jobTitle, imageSrc, ...props }: IProps) => {
  return (
    <Box {...props}>
      <Img src={imageSrc} mx="auto" objectFit="cover" w="16" h="16" rounded="full" />
      <Box mt="3">
        <Text as="cite" fontStyle="normal" fontWeight="bold" color="oilblue.400">
          {name}
        </Text>
        <Text fontSize="sm" color="gray.500">
          {jobTitle}
        </Text>
      </Box>
    </Box>
  )
}
