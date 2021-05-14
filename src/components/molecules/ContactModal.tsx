//chakra-ui
import {
  Button,
  FormControl, FormErrorMessage,
  Input,
  InputGroup,
  InputLeftElement,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Stack,
  Textarea
} from "@chakra-ui/react"
//core-components
import Text from "@/components/atoms/Text";
//resource
import React, {useCallback, useEffect} from "react";
import * as yup from 'yup';
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import {Heading} from "../atoms/Heading";
import {FiMail, FiPhone, FiUser} from 'react-icons/fi';
import axios from "axios";

export interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export interface FormDataProps {
  name: string;
  email: string;
  phone: string;
  message: string;
}

const formDataSchema = yup.object().shape({
  name: yup.string().required("O nome é obrigatório"),
  email: yup.string().required("O email é obrigatório").email("Digite um email válido"),
  phone: yup.string(),
  message: yup.string().required("A mensagem é obrigatória")
});

export const ContactModal = ({isOpen, onClose}: ContactModalProps) => {
  const {register, handleSubmit, formState: {errors}} = useForm<FormDataProps>({resolver: yupResolver(formDataSchema)});
  const onSubmit = useCallback(async (data: FormDataProps) => {
    console.log(data);
    await axios.post('/api/mail', {
      name: data.name,
      email: data.email,
      phone: data.phone,
      message: data.message
    }).catch(err => {
      console.log(err);
    });
  }, []);
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay/>
      <ModalContent>
        <ModalHeader>
          <Heading size="lg" color="oilblue.500">Mande sua mensagem</Heading>
        </ModalHeader>
        <ModalCloseButton size="lg" color="oilblue.500"/>
        <form onSubmit={handleSubmit(onSubmit)}>
          <ModalBody>
            <Stack spacing={4}>
              <FormControl id="name" isInvalid={!!errors.name}>
                <InputGroup>
                  <InputLeftElement pointerEvents="none" color="gray.300" fontSize="1.2em" children={<FiUser/>}/>
                  <Input type="text" variant="filled" size="lg" placeholder="Nome" {...register("name")}/>
                </InputGroup>
                <FormErrorMessage>{errors.name?.message}</FormErrorMessage>
              </FormControl>

              <FormControl id="email" isInvalid={!!errors.email}>
                <InputGroup>
                  <InputLeftElement pointerEvents="none" color="gray.300" fontSize="1.2em" children={<FiMail/>}/>
                  <Input type="email" variant="filled" size="lg" placeholder="Email" {...register("email")}/>
                </InputGroup>
                <FormErrorMessage>{errors.email?.message}</FormErrorMessage>
              </FormControl>

              <FormControl id="phone" isInvalid={!!errors.phone}>
                <InputGroup>
                  <InputLeftElement pointerEvents="none" color="gray.300" fontSize="1.2em" children={<FiPhone/>}/>
                  <Input type="tel" variant="filled" size="lg" placeholder="Telefone" {...register("phone")}/>
                </InputGroup>
                <FormErrorMessage>{errors.phone?.message}</FormErrorMessage>
              </FormControl>

              <FormControl id="message" isInvalid={!!errors.message}>
                <InputGroup>
                  <Textarea variant="filled" size="lg" placeholder="Escreva sua mensagem" {...register("message")}/>
                </InputGroup>
                <FormErrorMessage>{errors.message?.message}</FormErrorMessage>
              </FormControl>
            </Stack>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="gray" color="oilblue.500" mr={3} onClick={onClose}>
              Cancelar
            </Button>
            <Button type="submit" colorScheme="yellow" color="chocolate.500">Enviar</Button>
          </ModalFooter>
        </form>
      </ModalContent>
    </Modal>
  )
};

export default ContactModal;
