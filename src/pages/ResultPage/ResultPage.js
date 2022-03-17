import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { BASE_URL } from "../../constants/BASE_URL";
import auth from "../../constants/auth";
import RestaurantDetailsCard from "../../components/RestaurantsCard/RestaurantsDetailsCard";
import {
  Box,
  Container,
  Divider,
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
import { useProtectedPage } from "../../hooks/useProtectedPage";
import ProductsCard from "../../components/ProductsCard/ProductsCard";
import ModalAddButton from "../../components/ModalAddButton/ModalAddButton";

export default function ResultPage() {
  useProtectedPage();

  const [restaurantDetails, setRestaurantDetails] = useState({});
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();
  const { id } = useParams();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [quantity, setQuantity] = useState(0)

  const getRestaurantDetails = (id) => {
    axios
      .get(`${BASE_URL}/restaurants/${id}`, auth())
      .then((res) => {
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
        <ProductsCard
          key={product.id}
          photoUrl={product.photoUrl}
          alt={product.name}
          name={product.name}
          description={product.description}
          price={product.price}
          onClick={() => onOpen(ModalAddButton)}
        />

      );
    }
  });

  const sideDishProductsMapped = products.map((product) => {
    if (product.category === "Acompanhamento") {
      return (
        <ProductsCard
          key={product.id}
          photoUrl={product.photoUrl}
          alt={product.name}
          name={product.name}
          description={product.description}
          price={product.price}
          onClick={() => onOpen(ModalAddButton)}
        />
      );
    }
  });

  const drinkProductsMapped = products.map((product) => {
    if (product.category === "Bebida") {
      return (
        <Box>
          <ProductsCard
            key={product.id}
            photoUrl={product.photoUrl}
            alt={product.name}
            name={product.name}
            description={product.description}
            price={product.price}
            onClick={() => onOpen(ModalAddButton)}
          />
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
                  onClick={onClose}
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
