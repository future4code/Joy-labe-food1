import { Box, Button, Center, Flex, Image, Text, useDisclosure, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Select } from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import auth from "../../constants/auth";
import { BASE_URL } from "../../constants/BASE_URL";

export default function ProductsCard(property) {

  const [productsAmount, setProductsAmount] = useState(0)
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [quantity, setQuantity] = useState(0)
  const { id } = useParams();


  const currency = function (number) {
    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
      minimumFractionDigits: 2,
    }).format(number);
    //adriano rei do pt-br
  };

  const handleChange = (event) => {
    setQuantity(event.target.value)
  }

  const changeProductsAmount = (id) => {
    axios
    .post(`${BASE_URL}/restaurants/${id}/order`, auth)
    .then((res) =>{
      console.log(res)
    })
    .catch((err) => {
      console.log(err)
    })
  }

  useEffect(() => {
    changeProductsAmount(0);
  }, [])

  const removeItems = () => {
    setProductsAmount(0)
  }

  return (
    <Box>
      {
        !productsAmount.length ? (
          <Box>
            <Center>
              <Flex
                border="solid 1px #b8b8b8"
                borderRadius="8px"
                mb={'4px'}
                mt={'4px'}
                maxW={"328px"}
                maxH={"216px"}
                key={property.id}
              >
                <Image
                  w="97px"
                  h="112.6px"
                  borderTopLeftRadius="8px"
                  borderBottomLeftRadius="8px"
                  src={property.photoUrl}
                  alt={property.name}
                />
                <Box ml="3">
                  <Text
                    fontWeight="bold"
                    fontSize="16px"
                    color="#e86e5a"
                    margin={"18px 16px 6px 0"}
                    maxW={"15ch"}
                    isTruncated
                    textOverflow={'ellipsis'}
                  >
                    {property.name}
                  </Text>
                  <Text
                    fontSize="14px"
                    color="#b8b8b8"
                    h={"30px"}
                    w={"198px"}
                    m={"6px 17px 6px 0"}
                  >
                    {property.description}
                  </Text>
                  <Text
                    fontWeight="bold"
                    fontSize="16px"
                    color="000000"
                    w={"108px"}
                    isTruncated
                  >
                    {currency(property.price)}
                  </Text>
                </Box>
                <Button
                  variant={"outline"}
                  borderColor={"black"}
                  borderTopLeftRadius={"8px"}
                  borderTopRightRadius={"0px"}
                  borderBottomRightRadius={"8px"}
                  onClick={property.onClick}
                  borderBottomLeftRadius={"0px"}
                  alignSelf={"flex-end"}
                  fontSize={"12px"}
                  maxW={"90px"}
                  minW="90px"
                  h={"31px"}
                  m={"9px 0 0 17px"}
                  padding={"0"}
                  margin={"0 0 -1px -87px"}
                  color={"black"}
                >
                  adicionar
                </Button>
              </Flex>
            </Center >

            <Modal
              blockScrollOnMount={true}
              isOpen={isOpen}
              onClose={onClose}
              bg={"rgba(0, 0, 0, 0.5);"}
            >
              <ModalOverlay bg={"rgba(0, 0, 0, 0.5);"} />
              <ModalContent maxW={"328px"} maxH={"216px"} borderRadius={"0"}>
                <ModalHeader
                  w={"296px"}
                  h={"18px"}
                  m={" 6px 0 0 16px"}
                  fontSize={"16px"}
                  letterSpacing={"-0.39"}
                  textAlign={"center"}
                >
                  Selecione a quantidade desejada
                </ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                  <Select
                    w={"296px"}
                    h={"56px"}
                    m={"9px 16px 0"}
                    p={"16px"}
                    borderRadius={"4px"}
                    border={"solid 1px #b8b8b8"}
                    value={quantity}
                    onChange={handleChange}
                  >
                    <option value="0">0</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                  </Select>
                </ModalBody>
                <ModalFooter>
                  <Text
                    color="#4a90e2"
                    onClick={() => {changeProductsAmount()}}
                    textTransform={"uppercase"}
                    w={"183px"}
                    h={"19px"}
                    margin={"7px 16px 16px"}
                    fontSize={"16px"}
                    letterSpacing={"0.39px"}
                    textAlign={"right"}
                    isTruncated
                  >
                    Adicionar ao carrinho
                  </Text>
                </ModalFooter>
              </ModalContent>
            </Modal>
          </Box>

        ) : (
          <Center>
            <Flex
              border="solid 1px #b8b8b8"
              borderRadius="8px"
              mb={'4px'}
              mt={'4px'}
              maxW={"328px"}
              maxH={"216px"}
              key={property.id}
            >
              <Image
                w="97px"
                h="112.6px"
                borderTopLeftRadius="8px"
                borderBottomLeftRadius="8px"
                src={property.photoUrl}
                alt={property.name}
              />
              <Box ml="3">
                <Flex
                  justify={'space-between'}>
                  <Text
                    fontWeight="bold"
                    fontSize="16px"
                    color="#e86e5a"
                    margin={"18px 16px 6px 0"}
                    maxW={"15ch"}
                    isTruncated
                    textOverflow={'ellipsis'}
                  >
                    {property.name}
                  </Text>
                  <Box
                    p={'5px 12px'}
                    border={'solid 1px #e86e5a'}
                    h={'33px'}
                    w={'33px'}
                    maxW={'33px'}
                    minW={'33px'}
                    mr={'-4px'}
                    mt={'-1px'}
                    align={'center'}
                    borderTopLeftRadius={"0px"}
                    borderTopRightRadius={"8px"}
                    borderBottomRightRadius={"0px"}
                    borderBottomLeftRadius={"8px"}
                  >
                    <Text
                      fontSize="16px"
                      color={'#e86e5a'}
                    >
                      1
                    </Text>
                  </Box>
                </Flex>
                <Text
                  fontSize="14px"
                  color="#b8b8b8"
                  h={"30px"}
                  w={"198px"}
                  m={"6px 17px 6px 0"}
                >
                  {property.description}
                </Text>
                <Text
                  fontWeight="bold"
                  fontSize="16px"
                  color="000000"
                  w={"108px"}
                  isTruncated
                >
                  {currency(property.price)}
                </Text>
              </Box>
              <Button
                variant={"outline"}
                borderColor={"#e02020"}
                borderTopLeftRadius={"8px"}
                borderTopRightRadius={"0px"}
                borderBottomRightRadius={"8px"}
                onClick={() => removeItems(0)}
                borderBottomLeftRadius={"0px"}
                alignSelf={"flex-end"}
                fontSize={"12px"}
                maxW={"90px"}
                minW="90px"
                h={"31px"}
                m={"9px 0 0 17px"}
                padding={"0"}
                margin={"0 0 -1px -87px"}
                color={"#e02020"}
              >
                remover
              </Button>
            </Flex>
          </Center>
        )

      }
    </Box>
  );
}
