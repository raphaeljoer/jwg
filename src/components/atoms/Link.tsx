import * as NextLink from "next/link";
import * as ChakraLink from "@chakra-ui/react";
import React, { cloneElement } from "react";
import { useRouter } from "next/router";
import { useBreakpointValue } from "@chakra-ui/react";

type LinkProps = NextLink.LinkProps & ChakraLink.LinkProps;
interface Props extends LinkProps {
  children: any;
  wait?: number;
  onClick?: () => void;
  ckLinkProps?: ChakraLink.LinkProps;
}

export const Link = ({ href, children, wait, onClick, ckLinkProps, ...props }: Props) => {
  const router = useRouter()
  const isAnchor = href.includes("#");

  const goTo = () => router.push(href);

  const handleClick = (e: Event) => {
    e.preventDefault();
    if (onClick) onClick();
    if (wait) setTimeout(goTo, wait);
    else goTo();
  };

  if (isAnchor) return cloneElement(children, { onClick: handleClick });

  return (
    <NextLink.default href={href} passHref {...props}>
      <ChakraLink.Link {...ckLinkProps} style={{ textDecoration: "none" }} >
        {cloneElement(children, { onClick })}
      </ChakraLink.Link>
    </NextLink.default>
  );
};

export default Link;
