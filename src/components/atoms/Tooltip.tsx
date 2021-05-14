
import React from 'react';
import { Tooltip as CkTooltip, TooltipProps } from "@chakra-ui/react"

export const Tooltip = ({ label, children, ...props }: TooltipProps) => {

  return (
    <CkTooltip
      hasArrow
      label={label}
      color="oilblue.10"
      bg="orange.400"
      p={2}
      borderRadius="lg"
      {...props}
    >
      {children}
    </CkTooltip>
  )
};

export default Tooltip;
