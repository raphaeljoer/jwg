
import React from "react";
import { Box, Heading, Text } from "@chakra-ui/react"
import ButtonIcon from "../molecules/ButtonIcon";

export interface IDefaultBaseComponent {};

export const DefaultBaseComponent = ({}: IDefaultBaseComponent) => {

  return (
    <Box>
    <Heading>
      O que nos faz únicos?
    </Heading>
    <Text>
      Somos autênticos, simples, transparêntes e confiáveis, ajudando as pessoas a reencontrarem o caminho.
    </Text>
    <ButtonIcon>
      Faça parte
    </ButtonIcon>
  </Box>
  )
};

export default DefaultBaseComponent;
