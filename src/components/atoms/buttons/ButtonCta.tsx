import Button, { IButtonProps } from "@/components/atoms/buttons/Button";
import { ButtonProps } from '@chakra-ui/react';
import React, { ReactElement } from 'react';

interface IButtonCtaProps extends IButtonProps {
  variant: "orange" | "oilblue" | "mainMenu" | "rightMenu";
  children: string | ReactElement;
}

const defaultProps: ButtonProps = {
  h: 16,
  px: 6,
  borderRadius: "xl",
  fontWeight: 400,
  border: "1px",
  fontSize: { base: 16, md: 20 },
  variant: "outline",
  cursor: "pointer",
};

const orange: ButtonProps = {
  fontWeight: 500,
  color: "oilblue.700",
  bgColor: "orange.500",
  borderColor: "orange.500",
  _hover: { bgColor: "transparent", color: "orange.500" }
}

const rightMenu: ButtonProps = {
  fontSize: 16,
  h: 12,
  px: 4,
  color:"orange.500",
  border: "1px",
  borderColor: "orange.500",
  fontWeight: 500,
  _hover: { bgColor: "orange.500", color: "oilblue.800" },
  variant:"outline",
}

const oilblue: ButtonProps = {
  fontWeight: 500,
  color: "oilblue.700",
  colorScheme: "transparent",
  borderColor: "oilblue.500",
  _hover: { bgColor: "oilblue.500", color: "oilblue.10" }
}

const mainMenu: ButtonProps = {
  fontSize: 16,
  h: 12,
  px: 4,
  variant: "ghost",
  colorScheme: "transparent",
  border: "none",
  color: "oilblue.10",
  _hover: { bgColor: "oilblue.600" },
}

const ButtonCta = ({ variant, children, ...props }: IButtonCtaProps) => {

  const switcher = {
    "orange": orange,
    "oilblue": oilblue,
    "mainMenu": mainMenu,
    "rightMenu": rightMenu,
  }

  return (
    <Button
      {...defaultProps}
      {...switcher[variant]}
      {...props}
    >
      {children}
    </Button>
  )
};

export default ButtonCta;
