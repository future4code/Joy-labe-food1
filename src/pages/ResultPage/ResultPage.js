import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { BASE_URL } from "../../constants/BASE_URL";
import { auth } from "../../constants/auth";
import RestaurantDetailsCard from "../../components/RestaurantsCard/RestaurantsDetailsCard";
import {
  Box,
  Button,
  Center,
  Container,
  Divider,
  Flex,
  Grid,
  GridItem,
  Image,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Select,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import back from "../../assets/back.svg";
import { goToHome } from "../../Routes/Coordinator";

export default function ResultPage() {
  const [restaurantDetails, setRestaurantDetails] = useState({});
  const [products, setProducts] = useState([]);
  const [load, setLoad] = useState(true);
  const navigate = useNavigate();
  const { id } = useParams();
  const { isOpen, onOpen, onClose } = useDisclosure()

  const getRestaurantDetails = (id) => {
    setLoad(true);
    axios
      .get(`${BASE_URL}/restaurants/${id}`, auth)
      .then((res) => {
        console.log(res.data.restaurant);
        setRestaurantDetails(res.data.restaurant);
        setProducts(res.data.restaurant.products);
      })
      .catch((err) => {
        window.alert(err.response.data.message);
      });
  };

  useEffect(() => {
    getRestaurantDetails(id);
  }, []);

  const currency = function (number) {
    return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL', minimumFractionDigits: 2 }).format(number);
    //adriano rei do pt-br
  };

  const mainProductsMapped = products.map((product) => {
    if (
      product.category !== "Bebida" &&
      product.category !== "Acompanhamento"
    ) {
      return (
        <Center>
          <Flex
            border="solid 1px #b8b8b8"
            borderRadius="8px"
            m="16px"
            w="328px"
            h="112px"
            key={product.id}
          >
            <Image
              w="97px"
              maxW="97px"
              h="112.6px"
              maxH={'112.6px'}
              borderTopLeftRadius="8px"
              borderBottomLeftRadius="8px"
              src={product.photoUrl}
              alt={product.name}
            />
            <Box ml="3">
              <Text
                fontWeight="bold"
                fontSize="16px"
                color="#e86e5a"
                margin={'18px 16px 6px 0'}
                maxW={'166px'}
                isTruncated
                textOverflow={'ellipsis'}
              >
                {product.name}
              </Text>
              <Text
                fontSize="14px"
                color="#b8b8b8"
                h={'30px'}
                w={'198px'}
                m={'6px 17px 6px 0'}
              >
                {product.description}
              </Text>
              <Text
                fontWeight="bold"
                fontSize="16px"
                color="000000"
                w={'108px'}
                isTruncated
              >
                {currency(product.price)}
              </Text>
            </Box>
            <Button
              variant={'outline'}
              borderColor={'black'}
              borderTopLeftRadius={'8px'}
              borderTopRightRadius={'0px'}
              borderBottomRightRadius={'8px'}
              onClick={onOpen}
              borderBottomLeftRadius={'0px'}
              alignSelf={'flex-end'}
              fontSize={'12px'}
              maxW={'90px'}
              minW='90px'
              h={'31px'}
              m={'9px 0 0 17px'}
              padding={'0'}
              margin={'0 0 -1px -87px'}
              color={'black'}
            >adicionar
            </Button>
            <Modal
              blockScrollOnMount={true}
              isOpen={isOpen}
              onClose={onClose}
              bg={'rgba(0, 0, 0, 0.5);'}

            >
              <ModalOverlay
                bg={'rgba(0, 0, 0, 0.5);'}
              />
              <ModalContent
                maxW={'328px'}
                maxH={'216px'}
                borderRadius={'0'}
              >
                <ModalHeader
                  w={'296px'}
                  h={'18px'}
                  m={' 6px 0 0 16px'}
                  fontSize={'16px'}
                  letterSpacing={'-0.39'}
                  textAlign={'center'}
                >Selecione a quantidade desejada
                </ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                  <Select
                    w={'296px'}
                    h={'56px'}
                    m={'9px 16px 0'}
                    p={'16px'}
                    borderRadius={'4px'}
                    border={'solid 1px #b8b8b8'}
                  >
                    <option value='0'>0</option>
                    <option value='1'>1</option>
                    <option value='2'>2</option>
                    <option value='3'>3</option>
                    <option value='4'>4</option>
                    <option value='5'>5</option>
                  </Select>
                </ModalBody>
                <ModalFooter>
                  <Text
                    color='#4a90e2'
                    onClick={onClose}
                    textTransform={'uppercase'}
                    w={'183px'}
                    h={'19px'}
                    margin={'7px 16px 16px'}
                    fontSize={'16px'}
                    letterSpacing={'0.39px'}
                    textAlign={'right'}
                    isTruncated
                  >
                    Adicionar ao carrinho
                  </Text>
                </ModalFooter>
              </ModalContent>
            </Modal>
          </Flex>
        </Center>
      );
    }
  });

  const sideDishProductsMapped = products.map((product) => {
    if (product.category === "Acompanhamento") {
      return (
        <Flex
          border="solid 1px #b8b8b8"
          borderRadius="8px"
          margin={'0 0 -1px 43.5px'}
          w="328px"
          h="112px"
          key={product.id}
        >
          <Image
            w="97px"
            h="112.6px"
            borderTopLeftRadius="8px"
            borderBottomLeftRadius="8px"
            src={product.photoUrl}
            alt={product.name}
          />
          <Box ml="3">
            <Text
              fontWeight="bold"
              fontSize="16px"
              color="#e86e5a"
              margin={'18px 16px 6px 0'}
              maxW={'30ch'}
              isTruncated
              textOverflow={'clip'}
            >
              {product.name}
            </Text>
            <Text
              fontSize="14px"
              color="#b8b8b8"
              h={'30px'}
              w={'198px'}
              m={'6px 17px 6px 0'}
            >
              {product.description}
            </Text>
            <Text
              fontWeight="bold"
              fontSize="16px"
              color="000000"
              w={'108px'}
              isTruncated
            >
              {currency(product.price)}
            </Text>
          </Box>
          <Button
            variant={'outline'}
            borderColor={'black'}
            borderTopLeftRadius={'8px'}
            borderTopRightRadius={'0px'}
            borderBottomRightRadius={'8px'}
            onClick={onOpen}
            borderBottomLeftRadius={'0px'}
            alignSelf={'flex-end'}
            fontSize={'12px'}
            maxW={'90px'}
            minW='90px'
            h={'31px'}
            m={'9px 0 0 17px'}
            padding={'0'}
            margin={'0 0 -1px -87px'}
            color={'black'}
          >adicionar
          </Button>
          <Modal
            blockScrollOnMount={true}
            isOpen={isOpen}
            onClose={onClose}
            bg={'rgba(0, 0, 0, 0.5);'}
          >
            <ModalOverlay
              bg={'rgba(0, 0, 0, 0.5);'}
            />
            <ModalContent
              maxW={'328px'}
              maxH={'216px'}
              borderRadius={'0'}
            >
              <ModalHeader
                w={'296px'}
                h={'18px'}
                m={' 6px 0 0 16px'}
                fontSize={'16px'}
                letterSpacing={'-0.39'}
                textAlign={'center'}
              >Selecione a quantidade desejada</ModalHeader>
              <ModalCloseButton />
              <ModalBody>
                <Select
                  w={'296px'}
                  h={'56px'}
                  m={'9px 16px 0'}
                  p={'16px'}
                  borderRadius={'4px'}
                  border={'solid 1px #b8b8b8'}
                >
                  <option value='0'>0</option>
                  <option value='1'>1</option>
                  <option value='2'>2</option>
                  <option value='3'>3</option>
                  <option value='4'>4</option>
                  <option value='5'>5</option>
                </Select>
              </ModalBody>
              <ModalFooter>
                <Text
                  color='#4a90e2'
                  onClick={onClose}
                  textTransform={'uppercase'}
                  w={'183px'}
                  h={'19px'}
                  margin={'7px 16px 16px'}
                  fontSize={'16px'}
                  letterSpacing={'0.39px'}
                  textAlign={'right'}
                  isTruncated
                >
                  Adicionar ao carrinho
                </Text>
              </ModalFooter>
            </ModalContent>
          </Modal>
        </Flex>
      );
    }
  });

  const drinkProductsMapped = products.map((product) => {
    if (product.category === "Bebida") {
      return (
        <Flex
          border="solid 1px #b8b8b8"
          borderRadius="8px"
          margin={'0 0 -1px 43.5px'}
          maxW={'328px'}
          maxH={'216px'}
          key={product.id}
        >
          <Image
            w="97px"
            h="112.6px"
            borderTopLeftRadius="8px"
            borderBottomLeftRadius="8px"
            src={product.photoUrl}
            alt={product.name}
          />
          <Box ml="3">
            <Text
              fontWeight="bold"
              fontSize="16px"
              color="#e86e5a"
              margin={'18px 16px 6px 0'}
              isTruncated
            >
              {product.name}
            </Text>
            <Text
              fontSize="14px"
              color="#b8b8b8"
              h={'30px'}
              w={'198px'}
              m={'6px 17px 6px 0'}
            >
              {product.description}
            </Text>
            <Text
              fontWeight="bold"
              fontSize="16px"
              color="000000"
              w={'108px'}
              isTruncated
            >
              {currency(product.price)}
            </Text>
          </Box>
          <Button
            variant={'outline'}
            borderColor={'black'}
            borderTopLeftRadius={'8px'}
            borderTopRightRadius={'0px'}
            borderBottomRightRadius={'8px'}
            onClick={onOpen}
            borderBottomLeftRadius={'0px'}
            alignSelf={'flex-end'}
            fontSize={'12px'}
            maxW={'90px'}
            minW='90px'
            h={'31px'}
            m={'9px 0 0 17px'}
            padding={'0'}
            margin={'0 0 -1px -87px'}
            color={'black'}
          >adicionar
          </Button>
          <Modal
            blockScrollOnMount={true}
            isOpen={isOpen}
            onClose={onClose}
            bg={'rgba(0, 0, 0, 0.5);'}

          >
            <ModalOverlay
              bg={'rgba(0, 0, 0, 0.5);'}
            />
            <ModalContent
              maxW={'328px'}
              maxH={'216px'}
              borderRadius={'0'}>
              <ModalHeader
                w={'296px'}
                h={'18px'}
                m={' 6px 0 0 16px'}
                fontSize={'16px'}
                letterSpacing={'-0.39'}
                textAlign={'center'}
              >Selecione a quantidade desejada</ModalHeader>
              <ModalCloseButton />
              <ModalBody>
                <Select
                  w={'296px'}
                  h={'56px'}
                  m={'9px 16px 0'}
                  p={'16px'}
                  borderRadius={'4px'}
                  border={'solid 1px #b8b8b8'}
                >
                  <option value='0'>0</option>
                  <option value='1'>1</option>
                  <option value='2'>2</option>
                  <option value='3'>3</option>
                  <option value='4'>4</option>
                  <option value='5'>5</option>
                </Select>
              </ModalBody>
              <ModalFooter>
                <Text
                  color='#4a90e2'
                  onClick={onClose}
                  textTransform={'uppercase'}
                  w={'183px'}
                  h={'19px'}
                  margin={'7px 16px 16px'}
                  fontSize={'16px'}
                  letterSpacing={'0.39px'}
                  textAlign={'right'}
                  isTruncated
                >
                  Adicionar ao carrinho
                </Text>
              </ModalFooter>
            </ModalContent>
          </Modal>
        </Flex>
      );
    }
  });

  return (
    <Container padding={0}>
      <Grid templateColumns="1fr 1fr 1fr" gap={0}>
        <GridItem>
          <Image
            src={back}
            margin={"10px 16px "}
            onClick={() => goToHome(navigate)}
          />
        </GridItem>
        <Text alignSelf="center" textAlign="center" fontSize="16px">
          Restaurante
        </Text>
      </Grid>

      <Divider />

      <RestaurantDetailsCard
        key={restaurantDetails.id}
        logoUrl={restaurantDetails.logoUrl}
        deliveryTime={restaurantDetails.deliveryTime}
        shipping={restaurantDetails.shipping}
        name={restaurantDetails.name}
        category={restaurantDetails.category}
        address={restaurantDetails.address}
      />

      <Text
        marginLeft="16px"
        alignSelf="center"
        textAlign="left"
        fontSize="16px"
      >
        Principais
      </Text>
      <Divider />
      {mainProductsMapped}

      <Text
        marginLeft="16px"
        alignSelf="center"
        textAlign="left"
        fontSize="16px"
      >
        Acompanhamentos
      </Text>
      <Divider />
      {sideDishProductsMapped}
      <Text
        marginLeft="16px"
        alignSelf="center"
        textAlign="left"
        fontSize="16px"
      >
        Bebidas
      </Text>
      <Divider />
      {drinkProductsMapped}
    </Container>
  );
}
