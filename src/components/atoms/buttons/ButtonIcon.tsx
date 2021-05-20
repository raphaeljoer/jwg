import {Button, IButtonProps} from '@/components/atoms/buttons/Button';

interface IButtonIconProps extends IButtonProps {
  icon?: any;
  href?: string;
}

const ButtonIcon = ({children, icon, ...props}: IButtonIconProps) => {
  return (
    <Button
      mx={4}
      color="chocolate.500"
      fontWeight={500}
      variant="solid"
      borderRadius={12}
      pr={2}
      minHeight={48 / 4}
      cursor="pointer"
      m={0}
      {...props}
    >
      {children}
    </Button>
  )
};

export default ButtonIcon;
