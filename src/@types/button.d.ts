import { ButtonProps } from "@chakra-ui/react";
export interface IButtonProps extends ButtonProps {
  label: string;
  link?: string;
  onClick?: () => void;
}

export default IButtonProps;
