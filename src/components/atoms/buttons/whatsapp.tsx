
import { ui, whatsapp, zIndex } from "@/config/app";
import { Button, Flex, Text, Image } from "@chakra-ui/react";
import React from "react";
import Link from "../Link";

export const Whatsapp = () => {

  return (
    <Flex
      p={4}
      w="100vw"
      justify="flex-end"
      pos="fixed"
      bottom={0}
      zIndex={zIndex.high}
    >
      <Link href={whatsapp.link} passHref>
        <Button
          p={2}
          h={16}
          color="oilblue.500"
          alignItems="center"
          bgColor="ice.500"
          rounded="full"
          boxShadow="xl"
          _hover={{ bgColor: "ice.600", transform: "scale(0.99)" }}
          opacity={0.95}
        >
          <Text mx={4}>Fale agora com o especialista</Text>
          <Image src={ui.whatsapp.src} boxSize={12} ml="auto" mr={1} />
        </Button>
      </Link>
    </Flex>
  )
};

export default Whatsapp;
