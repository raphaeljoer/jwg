import { Button as CkButton, ButtonProps } from "@chakra-ui/react"
import { ReactElement } from "react";

export interface IButtonProps extends ButtonProps {
  children: string | ReactElement;
}

export const Button = ({ children, ...props}: IButtonProps) => {
  return (
    <CkButton {...props}>
      {children}
    </CkButton>
  );
};

export default Button;
