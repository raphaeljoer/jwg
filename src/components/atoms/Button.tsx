import { Button as CkButton, ButtonProps } from "@chakra-ui/react"
export interface IButtonProps extends ButtonProps {
  children: any;
  radiusFull?: boolean;
  fontWeight?: string | number;
}

export const Button = ({
  colorScheme = 'oilblue',
  radiusFull,
  fontWeight,
  size = "1rem",
  children,
  ...props
}: IButtonProps) => {
  return (
    <CkButton
      colorScheme={colorScheme}
      borderRadius={radiusFull ? 'full' : 'md'}
      fontWeight={fontWeight ? fontWeight : 'normal'}
      {...props}
    >
      {children}
    </CkButton>
  );
};

export default Button;
