import { BoxProps, HeadingProps, TagProps, TextProps } from "@chakra-ui/react";
import IButtonProps from "@/@types/button";

export interface ICtaProps extends BoxProps {
  icon?: any;
  tag?: string;
  tagProps?: TagProps;
  upTitle?: string;
  upTitleProps?: TextProps;
  title?: string;
  titleProps?: HeadingProps;
  description?: string | React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>;
  descriptionProps?: TextProps;
  button?: IButtonProps;
  children?: JSX.Element;
};

export default ICtaProps;
