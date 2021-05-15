import { Button as CkButton, ButtonProps, LinkProps } from "@chakra-ui/react"
export interface IButtonProps extends ButtonProps {
  children: any;
  radiusFull?: boolean;
  fontWeight?: string | number;
  target?: string;
}

export const Button = ({
  colorScheme = 'oilblue',
  size = "1rem",
  children,
  ...props
}: IButtonProps) => {
  return (
    <CkButton
      colorScheme={colorScheme}
      {...props}
    >
      {children}
    </CkButton>
  );
};

export default Button;
