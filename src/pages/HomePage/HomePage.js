import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { BASE_URL } from "../../constants/BASE_URL";
import RestaurantCard from "../../components/RestaurantsCard/RestaurantsCard";
import {
  Box,
  Center,
  Grid,
  GridItem,
  Heading,
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
import {
  goToCartPage,
  goToHome,
  goToProfilePage,
  goToResultPage,
} from "../../Routes/Coordinator";
import { useNavigate } from "react-router-dom";
import useForm from "../../hooks/useForm";
import { auth } from "../../constants/auth";
import { useProtectedPage } from "../../hooks/useProtectedPage";
import selectedHomePageImage from "../../assets/selected-homepage.svg"
import shoppingCartImage from "../../assets/shopping-cart.svg"
import avatarImage from "../../assets/avatar.svg"

export default function HomePage() {
  useProtectedPage();

  const [listRestaurants, setListRestaurants] = useState([]);
  const [load, setLoad] = useState(true);
  const navigate = useNavigate();

  const getRestaurants = () => {
    setLoad(true);
    axios
      .get(`${BASE_URL}/restaurants`, auth)
      .then((res) => {
        setLoad(false);
        setListRestaurants(res.data.restaurants);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const { form, onChange } = useForm({ searchRestaurant: "" });

  const filteredRestaurantsLists = listRestaurants
    .filter((restaurant) => {
      return restaurant.name
        .toLowerCase()
        .includes(form.searchRestaurant.toLowerCase());
    })
    .map((restaurant) => {
      return (
        <RestaurantCard
          key={restaurant.id}
          logoUrl={restaurant.logoUrl}
          description={restaurant.description}
          deliveryTime={restaurant.deliveryTime}
          shipping={restaurant.shipping}
          name={restaurant.name}
          category={restaurant.category}
          onClick={() => onClickCard(restaurant.id)}
        ></RestaurantCard>
      );
    });

  useEffect(() => {
    getRestaurants();
  }, []);

  const onClickCard = (id) => {
    goToResultPage(navigate, id);
  };

  const renderedArabicRestaurants = listRestaurants.map((restaurant) => {
    if (restaurant.category === "Árabe") {
      return (
        <RestaurantCard
          key={restaurant.id}
          logoUrl={restaurant.logoUrl}
          description={restaurant.description}
          deliveryTime={restaurant.deliveryTime}
          shipping={restaurant.shipping}
          name={restaurant.name}
          category={restaurant.category}
          onClick={() => onClickCard(restaurant.id)}
        ></RestaurantCard>
      );
    }
  });
  const renderedAsianRestaurants = listRestaurants.map((restaurant) => {
    if (restaurant.category === "Asiática") {
      return (
        <RestaurantCard
          key={restaurant.id}
          logoUrl={restaurant.logoUrl}
          description={restaurant.description}
          deliveryTime={restaurant.deliveryTime}
          shipping={restaurant.shipping}
          name={restaurant.name}
          category={restaurant.category}
          onClick={() => onClickCard(restaurant.id)}
        ></RestaurantCard>
      );
    }
  });
  const renderedBurgerRestaurants = listRestaurants.map((restaurant) => {
    if (restaurant.category === "Hamburguer") {
      return (
        <RestaurantCard
          key={restaurant.id}
          logoUrl={restaurant.logoUrl}
          description={restaurant.description}
          deliveryTime={restaurant.deliveryTime}
          shipping={restaurant.shipping}
          name={restaurant.name}
          category={restaurant.category}
          onClick={() => onClickCard(restaurant.id)}
        ></RestaurantCard>
      );
    }
  });
  const renderedItalianRestaurants = listRestaurants.map((restaurant) => {
    if (restaurant.category === "Italiana") {
      return (
        <RestaurantCard
          key={restaurant.id}
          logoUrl={restaurant.logoUrl}
          description={restaurant.description}
          deliveryTime={restaurant.deliveryTime}
          shipping={restaurant.shipping}
          name={restaurant.name}
          category={restaurant.category}
          onClick={() => onClickCard(restaurant.id)}
        ></RestaurantCard>
      );
    }
  });
  const renderedIceCreamRestaurants = listRestaurants.map((restaurant) => {
    if (restaurant.category === "Sorvetes") {
      return (
        <RestaurantCard
          key={restaurant.id}
          logoUrl={restaurant.logoUrl}
          description={restaurant.description}
          deliveryTime={restaurant.deliveryTime}
          shipping={restaurant.shipping}
          name={restaurant.name}
          category={restaurant.category}
          onClick={() => onClickCard(restaurant.id)}
        ></RestaurantCard>
      );
    }
  });
  const renderedMeatRestaurants = listRestaurants.map((restaurant) => {
    if (restaurant.category === "Carnes") {
      return (
        <RestaurantCard
          key={restaurant.id}
          logoUrl={restaurant.logoUrl}
          description={restaurant.description}
          deliveryTime={restaurant.deliveryTime}
          shipping={restaurant.shipping}
          name={restaurant.name}
          category={restaurant.category}
          onClick={() => onClickCard(restaurant.id)}
        ></RestaurantCard>
      );
    }
  });
  const renderedBaianoRestaurants = listRestaurants.map((restaurant) => {
    if (restaurant.category === "Baiana") {
      return (
        <RestaurantCard
          key={restaurant.id}
          logoUrl={restaurant.logoUrl}
          description={restaurant.description}
          deliveryTime={restaurant.deliveryTime}
          shipping={restaurant.shipping}
          name={restaurant.name}
          category={restaurant.category}
          onClick={() => onClickCard(restaurant.id)}
        ></RestaurantCard>
      );
    }
  });
  const renderedSnackRestaurants = listRestaurants.map((restaurant) => {
    if (restaurant.category === "Petiscos") {
      return (
        <RestaurantCard
          key={restaurant.id}
          logoUrl={restaurant.logoUrl}
          description={restaurant.description}
          deliveryTime={restaurant.deliveryTime}
          shipping={restaurant.shipping}
          name={restaurant.name}
          category={restaurant.category}
          onClick={() => onClickCard(restaurant.id)}
        ></RestaurantCard>
      );
    }
  });
  const renderedMexicanRestaurants = listRestaurants.map((restaurant) => {
    if (restaurant.category === "Mexicana") {
      return (
        <RestaurantCard
          key={restaurant.id}
          logoUrl={restaurant.logoUrl}
          description={restaurant.description}
          deliveryTime={restaurant.deliveryTime}
          shipping={restaurant.shipping}
          name={restaurant.name}
          category={restaurant.category}
          onClick={() => onClickCard(restaurant.id)}
        ></RestaurantCard>
      );
    }
  });

  return (
    <Grid templateRows="0fr 0fr 2fr 1fr" maxH="100vh" h="100vh">
      <GridItem h={'44px'}>
        <Center>
          <Heading
            as="h3"
            size={"16px"}
            boxShadow={'0 0.5px 0 0 rgba(0, 0, 0, 0.25);'}
            w={'100vw'}
            h="44px"
            textAlign={"center"}
            marginBottom="8px"
            mt="13px"
          >
            Rappi4
          </Heading>
        </Center>
      </GridItem>
      <GridItem>
        <Center>
          <InputGroup w="328px" h="56px" mt={'22px'}>
            <InputLeftElement
              pointerEvents="none"
              children={<Search2Icon color="gray.300" />}
            />
            <Input
              type="search"
              placeholder="Restaurante"
              onChange={onChange}
              value={form.searchRestaurant}
              name={"searchRestaurant"}
              borderRadius={'2px'}
            />
          </InputGroup>
        </Center>
      </GridItem>
      <Box overflowY={'scroll'} mb={'8px'}>
        <GridItem>
          <Center>
            <Tabs>
              <Center>
                <TabList overflowX={"scroll"} overflowY={"hidden"} w="100vw">
                  <Tab _selected={{ color: "#e86e5a" }}>Todos os Restaurantes</Tab>
                  <Tab _selected={{ color: "#e86e5a" }}>Árabe</Tab>
                  <Tab _selected={{ color: "#e86e5a" }}>Asiática</Tab>
                  <Tab _selected={{ color: "#e86e5a" }}>Hamburguer</Tab>
                  <Tab _selected={{ color: "#e86e5a" }}>Italiana</Tab>
                  <Tab _selected={{ color: "#e86e5a" }}>Sorvetes</Tab>
                  <Tab _selected={{ color: "#e86e5a" }}>Carnes</Tab>
                  <Tab _selected={{ color: "#e86e5a" }}>Baiana</Tab>
                  <Tab _selected={{ color: "#e86e5a" }}>Petiscos</Tab>
                  <Tab _selected={{ color: "#e86e5a" }}>Mexicana</Tab>
                </TabList>
              </Center>

              {load ? (
                <Center>
                  <Spinner size="xl" marginTop="20px" />
                </Center>
              ) : (
                <TabPanels overflowY={"scroll"} h="60vh">
                  <TabPanel>
                    {filteredRestaurantsLists.length ? (
                      filteredRestaurantsLists
                    ) : (
                      <Center>
                        <Text marginTop={"20px"}>Não Encontramos :(</Text>
                      </Center>
                    )}
                  </TabPanel>
                  <TabPanel>{renderedArabicRestaurants}</TabPanel>
                  <TabPanel>{renderedAsianRestaurants}</TabPanel>
                  <TabPanel>{renderedBurgerRestaurants}</TabPanel>
                  <TabPanel>{renderedItalianRestaurants}</TabPanel>
                  <TabPanel>{renderedIceCreamRestaurants}</TabPanel>
                  <TabPanel>{renderedMeatRestaurants}</TabPanel>
                  <TabPanel>{renderedBaianoRestaurants}</TabPanel>
                  <TabPanel>{renderedSnackRestaurants}</TabPanel>
                  <TabPanel>{renderedMexicanRestaurants}</TabPanel>
                </TabPanels>
              )}
            </Tabs>
          </Center>
        </GridItem>
      </Box>
      <Center>
        <Grid
          templateColumns={"repeat(3, 1fr)"}
          shadow={"lg"}
          borderWidth="1px"
          w={"100vw"}
          align="center"
          justifyItems={'center'}
          position={"fixed"}
          bottom={'27%'}
          h={'49px'}
          bg={'#fff'}
        >
          <GridItem
            alignSelf={'center'}
          >
            <Image
              src={selectedHomePageImage}
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
              src={avatarImage}
              w={'27px'}
              h={'30px'}
              onClick={() => goToProfilePage(navigate)}
            />
          </GridItem>
        </Grid>
      </Center>
    </Grid>
  );
}
