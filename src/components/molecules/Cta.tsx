import React from "react";
import { BoxProps, Flex, Heading, HeadingProps, Icon, Tag, TagProps, Text, TextProps } from "@chakra-ui/react"
import { Button } from "../atoms/Button";
import { FiMessageCircle } from "react-icons/fi";

interface ButtonProps {
  label: string;
  onClick?: () => void;
}
export interface CtaProps extends BoxProps {
  icon?: any;
  tag?: string;
  tagProps?: TagProps;
  upTitle?: string;
  upTitleProps?: TextProps;
  title?: string;
  titleProps?: HeadingProps;
  description?: string | React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>;
  descriptionProps?: TextProps;
  button?: ButtonProps;
  children?: any;
};

const displayButton = ({label, onClick}: ButtonProps) => (
  <Flex w="full" mt={10} justifyContent={{ base: "center", lg: "left" }}>
    <Button
      as="a"
      borderRadius={12}
      leftIcon={<Icon as={FiMessageCircle} />}
      color="oilblue.800"
      bgColor="orange.500"
      border="1px"
      _hover={{ bgColor: "transparent", color: "orange.500" }}
      h={{base: 14, xl: 16}}
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
  }: CtaProps
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
      <Heading as="h3" fontSize={{base: 24, sm: 32, md: 40, xl: 44}} lineHeight="120%" color="blue.600" mb={6} {...titleProps}>
        {title}
      </Heading>
      {description && (
        <Text fontSize={{base: 16, sm: 20, xl: 22}} lineHeight="150%" color="oilblue.500" {...descriptionProps}>
          {description}
        </Text>
      )}
      {button && displayButton(button)}
      {children}
    </Flex>
  )
};

export default Cta;
