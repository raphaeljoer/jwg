
import { ui } from '@/config/app';
import { Box } from '@chakra-ui/react';
import Image from 'next/image';

interface ScrollProps {
  file: string;
  direction?: "up" | "down";
}

export const Scroll = ({ file, direction = "down" }: ScrollProps) => {
  const isUp = direction === "up";
  return (
    <Box
      position="absolute"
      top={isUp ? 0 : undefined}
      bottom={isUp ? undefined : 0}
      left="50%"
      zIndex={10}
      transform={`translateX(-50%) ${isUp ? "rotate(180deg)" : ""} translateY(99%)`}
    >
      <Image
        src={file}
        alt={ui.scroll.alt}
        width={ui.scroll.width}
        height={ui.scroll.height}
        priority
      />
    </Box>
  );
};

export default Scroll;
