import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { BASE_URL } from "../../constants/BASE_URL";
import RestaurantCard from "../../components/RestaurantsCard/RestaurantsCard";
import {
  Box,
  Center,
  Divider,
  Flex,
  Grid,
  GridItem,
  Heading,
  IconButton,
  Image,
  Input,
  InputGroup,
  InputLeftElement,
  Spinner,
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
import auth from "../../constants/auth";
import { useProtectedPage } from "../../hooks/useProtectedPage";
import homePageImage from "../../assets/homepage.svg"
import shoppingCartImage from "../../assets/shopping-cart.svg"
import selectedAvatarImage from "../../assets/selected-avatar.svg"

export default function ProfilePage() {
  useProtectedPage();

  const navigate = useNavigate();
  const [users, setUsers] = useState({});
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    getUsers();
  }, []);

  useEffect(() => {
    getOrders();
  }, []);

  const getUsers = () => {
    axios
      .get(`${BASE_URL}/profile`, auth())
      .then((res) => {
        setUsers(res.data.user);
      })
      .catch((err) => {
        window.alert(err);
      });
  };
  const getOrders = () => {
    axios
      .get(`${BASE_URL}/orders/history`, auth())
      .then((res) => {
        setOrders(res.data.orders);
      })
      .catch((err) => {
        window.alert(err);
      });
  };

  const ordersDate = orders.map((order) => {
    const date = new Date(order.createdAt);
    const options = { day: "numeric", month: "long", year: "numeric" };

    return (
      <Flex
        borderWidth="1px"
        borderColor="#b8b8b8"
        m="8px 16px"
        borderRadius="8px"
        p="16px"
        direction="column"
      >
        <Text marginBottom="9px" fontSize="16px" color="#e86e5a">
          {order.restaurantName}
        </Text>
        <Text marginBottom="7px" fontSize="12px">
          {date.toLocaleDateString("pt-br", options)}
        </Text>
        <Text fontSize="16px" fontWeight="bold">
          SUBTOTAL R${order.totalPrice.toFixed(2).replace(".", ",")}
        </Text>
      </Flex>
    );
  });

  return (
    <Grid templateRows="0fr 2fr 0fr" maxH="100vh" h="100vh">
      <GridItem h={'44px'}>
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
            Meu perfil
          </Heading>
        </Center>
      </GridItem>
      <Box overflowY={'scroll'} mb={'8px'}>
        <GridItem>
          <Grid>
            <Text fontSize="16px" m="16px 16px 8px 16px">
              {users.name}
            </Text>
            <Text fontSize="16px" m="0px 16px 8px 16px">
              {users.email}
            </Text>
            <Text fontSize="16px" m="0px 16px 16px 16px">
              {users.cpf}
            </Text>
          </Grid>
        </GridItem>
        <GridItem>
          <Grid bg={"#eeeeee"}>
            <Text m="16px 16px 8px 16px" color={"#b8b8b8"} fontSize="16px">
              Endereço Cadastrado
            </Text>
            <Text m="0px 16px 16px 16px" fontSize="16px">
              {users.address}
            </Text>
          </Grid>
        </GridItem>
        <GridItem overflowY="hidden">
          <Text
            alignSelf="center"
            textAlign="left"
            fontSize="16px"
            m={"16px 16px 8px 16px"}
            borderBottom="1px"
            borderBottomColor="#000000"
          >
            Histórico de pedidos
          </Text>
          {orders ? ordersDate : <p>Você não possui pedidos!</p>}
        </GridItem>
      </Box>
      <GridItem>
        <Center>
          <Grid
            templateColumns={"repeat(3, 1fr)"}
            shadow={"lg"}
            borderWidth="1px"
            w={"100vw"}
            align="center"
            justifyItems={'center'}
            // position={"fixed"}
            bottom={'27%'}
            h={'49px'}
            bg={'#fff'}
            boxShadow={
              "0 -1px 3px 0 rgba(0, 0, 0, 0.2), 0 -2px 1px -1px rgba(0, 0, 0, 0.12), 0 -1px 1px 0 rgba(0, 0, 0, 0.14);"
            }
          >
            <GridItem
              alignSelf={'center'}
            >
              <Image
                src={homePageImage}
                w={'27px'}
                h={'27px'}
                onClick={() => goToHome(navigate)}
              />
            </GridItem>
            <GridItem
              alignSelf={'center'}
            >
              <Image
                src={shoppingCartImage}
                w={'27px'}
                h={'29px'}
                onClick={() => goToCartPage(navigate)}
              />
            </GridItem>
            <GridItem
              alignSelf={'center'}
            >
              <Image
                src={selectedAvatarImage}
                w={'27px'}
                h={'30px'}
                onClick={() => goToProfilePage(navigate)}
              />
            </GridItem>
          </Grid>
        </Center>
      </GridItem>
    </Grid>
  );
}
