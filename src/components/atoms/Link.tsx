import * as NextLink from "next/link";
import * as ChakraLink from "@chakra-ui/react";
import React, { cloneElement } from "react";
import { useRouter } from "next/router";

type LinkProps = NextLink.LinkProps & ChakraLink.LinkProps;

interface Props extends LinkProps {
  children: any;
  anchor?: boolean;
  onClick?: () => void;
}

export const Link = ({ href, children, anchor, onClick, ...props }: Props) => {
  const router = useRouter()

  const handleClick = (e: Event) => {
    e.preventDefault();
    if(onClick) onClick();
    setTimeout(() => router.push(href), 300);
  };

  if (anchor) return cloneElement(children, { onClick: handleClick })

  return (
    <NextLink.default href={href} passHref {...props}>
      <ChakraLink.Link w="full" style={{textDecoration: "none"}}>
        {cloneElement(children, { onClick })}
      </ChakraLink.Link>
    </NextLink.default>
  );
};

export default Link;