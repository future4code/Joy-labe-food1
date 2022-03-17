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
import {
  goToCartPage,
  goToHome,
  goToProfilePage,
  goToResultPage,
} from "../../Routes/Coordinator";
import { useNavigate } from "react-router-dom";
import auth from "../../constants/auth";
import { useProtectedPage } from "../../hooks/useProtectedPage";
import homePageImage from "../../assets/homepage.svg";
import selectedShoppingCartImage from "../../assets/selected-shopping-cart.svg";
import avatarImage from "../../assets/avatar.svg";

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
      .get(`${BASE_URL}/profile`, auth())
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
      <Grid templateRows="0fr 0fr 1fr 0fr" maxH="100vh" h="100vh">
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

          {/* <ProductsCard
          key={product.id}
          photoUrl={product.photoUrl}
          alt={product.name}
          name={product.name}
          description={product.description}
          price={product.price}
          // onClick={() => onOpen(ModalAddButton)}
        /> */}
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
      </Grid>

      <Center>
        <Grid
          templateColumns={"repeat(3, 1fr)"}
          shadow={"lg"}
          borderWidth="1px"
          w={"100vw"}
          align="center"
          justifyItems={"center"}
          // position={"fixed"}
          bottom={"27%"}
          h={"49px"}
          bg={"#fff"}
        >
          <GridItem alignSelf={"center"}>
            <Image
              src={homePageImage}
              w={"27px"}
              h={"27px"}
              onClick={() => goToHome(navigate)}
            />
          </GridItem>
          <GridItem alignSelf={"center"}>
            <Image
              src={selectedShoppingCartImage}
              w={"27px"}
              h={"29px"}
              onClick={() => goToCartPage(navigate)}
            />
          </GridItem>
          <GridItem alignSelf={"center"}>
            <Image
              src={avatarImage}
              w={"27px"}
              h={"30px"}
              onClick={() => goToProfilePage(navigate)}
            />
          </GridItem>
        </Grid>
      </Center>
    </Box>
  );
}
