import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { BASE_URL } from "../../constants/BASE_URL";
import { auth } from "../../constants/auth";
import RestaurantDetailsCard from "../../components/RestaurantsCard/RestaurantsDetailsCard";
import {
  Box,
  Center,
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

  const mainProductsMapped = products.map((product) => {
    if (
      product.category !== "Bebida" &&
      product.category !== "Acompanhamento"
    ) {
      return (
        <Flex key={product.id}>
          <Image src={product.photoUrl} alt={product.name} />
          <Box ml="3">
            <Text fontWeight="bold">{product.name}</Text>
            <Text fontSize="sm">{product.description}</Text>
          </Box>
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
    </Container>
  );
}
