import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { BASE_URL } from "../../constants/BASE_URL";
import RestaurantCard from "../../components/RestaurantsCard/RestaurantsCard";
import {
  Box,
  Button,
  Center,
  Flex,
  Grid,
  GridItem,
  Heading,
  IconButton,
  Image,
  Input,
  InputGroup,
  InputLeftElement,
  Radio,
  RadioGroup,
  Spinner,
  Stack,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from "@chakra-ui/react";
import { Search2Icon } from "@chakra-ui/icons";
import { AiOutlineHome, AiOutlineShoppingCart } from "react-icons/ai";
import { MdPersonOutline } from "react-icons/md";
import {
  goToCartPage,
  goToHome,
  goToProfilePage,
  goToResultPage,
} from "../../Routes/Coordinator";
import { useNavigate } from "react-router-dom";
import { auth } from "../../constants/auth";
import { useProtectedPage } from "../../hooks/useProtectedPage";

export default function CartPage() {
  useProtectedPage();

  const [address, setAddress] = useState({});
  const [payment, setPayment] = useState("1");

  const navigate = useNavigate();

  useEffect(() => {
    getUserAddress();
  }, []);

  const getUserAddress = () => {
    axios
      .get(`${BASE_URL}/profile`, auth)
      .then((res) => {
        setAddress(res.data.user);
        console.log(res.data.user);
      })
      .catch((err) => {
        window.alert(err);
      });
  };

  return (
    <Box maxH="100vh">
      <Center>
        <Heading
          as="h3"
          size={"16px"}
          borderBottom="1px"
          borderColor="gray.200"
          w="328px"
          h="44px"
          textAlign={"center"}
          marginBottom="8px"
          mt="13px"
        >
          Meu carrinho
        </Heading>
      </Center>
      <Grid>
        <GridItem>
          <Grid bg={"#eeeeee"}>
            <Text m="16px 16px 8px 16px" color={"#b8b8b8"} fontSize="16px">
              Endereço de entrega
            </Text>
            <Text m="0px 16px 16px 16px" fontSize="16px">
              {address.address}
            </Text>
          </Grid>
        </GridItem>

        {/* TODO cards dos produtos com os produtos adicionados no carrinho (provavelmente usando global state) */}

        {/* <Flex
        border="solid 1px #b8b8b8"
        borderRadius="8px"
        margin={"0 0 -1px 43.5px"}
        maxW={"328px"}
        maxH={"216px"}
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
            margin={"18px 16px 6px 0"}
            isTruncated
          >
            {product.name}
          </Text>
          <Text
            fontSize="14px"
            color="#b8b8b8"
            h={"30px"}
            w={"198px"}
            m={"6px 17px 6px 0"}
          >
            {product.description}
          </Text>
          <Text
            fontWeight="bold"
            fontSize="16px"
            color="000000"
            w={"108px"}
            isTruncated
          >
            {currency(product.price)}
          </Text>
        </Box>
        <Button
          variant={"outline"}
          borderColor={"black"}
          borderTopLeftRadius={"8px"}
          borderTopRightRadius={"0px"}
          borderBottomRightRadius={"8px"}
          onClick={onOpen}
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
      </Flex> */}
        <Text m={"16px 16px 8px 16px"} fontSize="16px">
          SUBTOTAL
          {/* SUBTOTAL R${order.totalPrice.toFixed(2).replace(".", ",")} */}
        </Text>

        <GridItem overflowY="hidden">
          <Text
            alignSelf="center"
            textAlign="left"
            fontSize="16px"
            m={"16px 16px 8px 16px"}
            borderBottom="1px"
            borderBottomColor="#000000"
          >
            Forma de pagamento
          </Text>
          <RadioGroup
            m={"16px 16px 8px 16px"}
            onChange={setPayment}
            value={payment}
          >
            <Stack direction="row">
              <Radio value="1">Dinheiro</Radio>
              <Radio value="2">Cartão</Radio>
            </Stack>
          </RadioGroup>
        </GridItem>
        <GridItem>
          <Button
            m={"16px 16px 16px 16px"}
            bg="#e86e5a"
            w="328px"
            h="42px"
            type={"submit"}
          >
            Confirmar
          </Button>
        </GridItem>
      </Grid>

      <Center>
        <Grid
          templateColumns={"repeat(3, 1fr)"}
          shadow={"lg"}
          borderWidth="1px"
          w={"100vw"}
          align="center"
          position={"fixed"}
        >
          <GridItem>
            <IconButton
              as={AiOutlineHome}
              bg={"white"}
              w={"27px"}
              h={"27px"}
              color={"#e865a"}
              onClick={() => goToHome(navigate)}
            />
          </GridItem>
          <GridItem>
            <IconButton
              as={AiOutlineShoppingCart}
              bg={"white"}
              w={"27px"}
              h={"27px"}
              onClick={() => goToCartPage(navigate)}
            />
          </GridItem>
          <GridItem>
            <IconButton
              as={MdPersonOutline}
              bg={"white"}
              w={"27px"}
              h={"27px"}
              onClick={() => goToProfilePage(navigate)}
            />
          </GridItem>
        </Grid>
      </Center>
    </Box>
  );
}
