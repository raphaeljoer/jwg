//chakra-ui
import {Flex, Heading, Icon, Tag, Text} from "@chakra-ui/react"
//core components
import {Button} from "@/components/atoms/buttons/Button";
//resources
import React from "react";
import {FiSend} from "react-icons/fi";
//types
import ICtaProps from "@/@types/cta";
import IButtonProps from "@/@types/button";

const displayButton = ({label, onClick}: IButtonProps) => (
  <Flex w="full" mt={10} justifyContent={{base: "center", lg: "left"}}>
    <Button
      as="a"
      borderRadius={12}
      rightIcon={<Icon as={FiSend} ml={2} fontSize={22}/>}
      color="oilblue.700"
      bgColor="orange.500"
      border="1px"
      _hover={{bgColor: "transparent", color: "orange.500"}}
      h={16}
      px={6}
      fontWeight={500}
      fontSize={{base: 16, md: 20}}
      variant="outline"
      cursor="pointer"
      onClick={onClick}
    >
      {label}
    </Button>
  </Flex>
);

export const Cta = (
  {
    icon,
    tag,
    upTitle,
    title,
    description,
    tagProps,
    upTitleProps,
    titleProps,
    descriptionProps,
    button,
    children,
    ...props
  }: ICtaProps
) => {
  return (
    <Flex flexDirection="column" {...props}>
      {icon && icon}
      {tag && (
        <Tag bgColor="pink.400" color="whiteAlpha.900" mb={4} {...tagProps}>
          {tag}
        </Tag>
      )}
      {upTitle && (
        <Text lineHeight="150%" mb={4} {...upTitleProps}>
          {upTitle}
        </Text>
      )}
      <Heading as="h3" fontSize={{base: 28, sm: 32, md: 40, xl: 44}} lineHeight="120%" color="blue.600" mb={6} {...titleProps}>
        {title}
      </Heading>
      {description && (
        <Text fontSize={{base: 18, sm: 20, xl: 22}} lineHeight="150%" color="oilblue.500" {...descriptionProps}>
          {description}
        </Text>
      )}
      {button && displayButton(button)}
      {children}
    </Flex>
  )
};

export default Cta;
