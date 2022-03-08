import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { BASE_URL } from "../../constants/BASE_URL";
import { auth } from "../../constants/auth";
import RestaurantDetailsCard from "../../components/RestaurantsCard/RestaurantsDetailsCard";
import {
  Box,
  Button,
  Container,
  Divider,
  Flex,
  Grid,
  GridItem,
  Image,
  Text,
} from "@chakra-ui/react";
import back from "../../assets/back.svg";
import { goToHome } from "../../Routes/Coordinator";
import ProductsCard from "../../components/ProductsCard/ProductsCard";

export default function ResultPage() {
  const [restaurantDetails, setRestaurantDetails] = useState({});
  const [products, setProducts] = useState([]);
  const [load, setLoad] = useState(true);
  const navigate = useNavigate();
  const { id } = useParams();

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

  const currency = function(number){
    return new Intl.NumberFormat('pt-BR', {style: 'currency',currency: 'BRL', minimumFractionDigits: 2}).format(number);
    //adriano rei do pt-br
  };

  const mainProductsMapped = products.map((product) => {
   

    if (
      product.category !== "Bebida" &&
      product.category !== "Acompanhamento"
    ) {
      return (
        <Grid
          border="solid 1px #b8b8b8"
          borderRadius="8px"
          margin="16px"
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
              marginTop={'18px'}>
              {product.name}
            </Text>
            <Text 
              fontSize="14px" 
              color="#b8b8b8"
              >
              {product.description}
            </Text>
            <Text 
              fontWeight="bold"
              fontSize="16px" 
              color="000000">
              {currency(product.price)}
            </Text>
          </Box>
          <Button 
          variant={'outline'}
          borderColor={'black'}
          borderTopLeftRadius={'8px'}
          borderTopRightRadius={'0px'}
          borderBottomRightRadius={'8px'}
          borderBottomLeftRadius={'0px'}
          alignSelf={'flex-end'}
          fontSize={'12px'}
          maxW={'90px'}
          minW='90px'
          h={'31px'}
          padding={'0'}
          margin={'0'}
          color={'black'}
          >adicionar
          </Button>
        </Grid>
      );
    }
  });

  const sideDishProductsMapped = products.map((product) => {
    if (product.category === "Acompanhamento") {
      return (
        <Flex
          border="solid 1px #b8b8b8"
          borderRadius="8px"
          margin="16px"
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
              color="#e86e5a">
              {product.name}
            </Text>
            <Text 
              fontSize="14px" 
              color="#b8b8b8">
              {product.description}
            </Text>
            <Text 
              fontWeight="bold" 
              fontSize="16px" 
              color="000000">
              {currency(product.price)}
            </Text>
          </Box>
          <Button 
          variant={'outline'}
          borderColor={'black'}
          borderTopLeftRadius={'8px'}
          borderTopRightRadius={'0px'}
          borderBottomRightRadius={'8px'}
          borderBottomLeftRadius={'0px'}
          alignSelf={'flex-end'}
          fontSize={'12px'}
          maxW={'90px'}
          minW='90px'
          h={'31px'}
          padding={'0'}
          margin={'0'}
          color={'black'}
          >adicionar
          </Button>
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
          margin="16px"
          w="328px"
          h="112px"
          key={product.id}
        >
          <Image
            borderTopLeftRadius="8px"
            borderBottomLeftRadius="8px"
            src={product.photoUrl}
            alt={product.name}
            maxW="97px"
          />
          <Box ml="3">
            <Text 
              fontWeight="bold"
              fontSize="16px" 
              color="#e86e5a">
              {product.name}
            </Text>
            <Text 
              fontSize="14px" 
              color="#b8b8b8">
              {product.description}
            </Text>
            <Text 
              fontWeight="bold" 
              fontSize="16px" 
              color="000000">
              {currency(product.price)}
            </Text>
          </Box>
          <Button 
          variant={'outline'}
          borderColor={'black'}
          borderTopLeftRadius={'8px'}
          borderTopRightRadius={'0px'}
          borderBottomRightRadius={'8px'}
          borderBottomLeftRadius={'0px'}
          alignSelf={'flex-end'}
          fontSize={'12px'}
          maxW={'90px'}
          minW='90px'
          h={'31px'}
          padding={'0'}
          margin={'0'}
          color={'black'}
          >adicionar
          </Button>
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
