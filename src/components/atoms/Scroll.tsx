
import { ui } from '@/config/app';
import { Box } from '@chakra-ui/react';
import Image from 'next/image';

interface ScrollProps {
  direction: "down" | "down2" | "up"
}

export const Scroll = ({ direction }: ScrollProps) => (
  <Box
    position="absolute"
    bottom={0}
    left="50%"
    zIndex={10}
    transform={"translateX(-50%) translateY(99%)"}
  >
    <Image
      src={ui.scroll.src[direction]}
      alt={ui.scroll.alt}
      width={ui.scroll.width}
      height={ui.scroll.height}
    />
  </Box>
);

export default Scroll;
