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
  IconButton,
  Input,
  InputGroup,
  InputLeftElement,
  Skeleton,
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
import { AiOutlineHome, AiOutlineShoppingCart } from "react-icons/ai"
import { MdPersonOutline } from 'react-icons/md'
import { goToCartPage, goToHome, goToProfilePage } from "../../Routes/Coordinator";
import { useNavigate } from "react-router-dom";
import useForm from "../../hooks/useForm";



export default function HomePage() {
  const [listRestaurants, setListRestaurants] = useState([]);
  const [filterType, setFilterType] = useState();
  const [load, setLoad] = useState(true);
  const navigate = useNavigate();


  const getRestaurants = () => {
    setLoad(true);
    axios
      .get(`${BASE_URL}/restaurants`, {
        headers: {
          auth: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IkEwMDVtSEJmeVNrdDdPTjBITGFwIiwibmFtZSI6IkFzdHJvZGV2IiwiZW1haWwiOiJhc3Ryb2RldkBmdXR1cmU0LmNvbSIsImNwZiI6IjMzMy44ODguNjY2LTQ0IiwiaGFzQWRkcmVzcyI6dHJ1ZSwiYWRkcmVzcyI6IlJ1YSBNYWVzdHJvIEpvw6NvIFNlcHBlLCAzMDMgLSBwYXJhaXNvIiwiaWF0IjoxNjQ0OTY3NzE4fQ.T3d7RCxUUR5RxCCDi9_Vr2_MqsImWtL9jVkwhoX5w3M",
        },
      })
      .then((res) => {
        setLoad(false);
        setListRestaurants(res.data.restaurants);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const { form, onChange } = useForm({ searchRestaurant: "" })

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
          ></RestaurantCard>
        )
    })
  
  useEffect(() => {
    getRestaurants();
  }, []);

  const renderedRestaurants = listRestaurants.map((restaurant) => {
    return (
      <RestaurantCard
        key={restaurant.id}
        logoUrl={restaurant.logoUrl}
        description={restaurant.description}
        deliveryTime={restaurant.deliveryTime}
        shipping={restaurant.shipping}
        name={restaurant.name}
        category={restaurant.category}
      ></RestaurantCard>
    );
  });
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
        ></RestaurantCard>
      );
    }
  });

  return (
    <Box maxH='100vh'>
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
        >
          Rappi4
        </Heading>
      </Center>
      <Center>
        <InputGroup w="328px" h="56px">
          <InputLeftElement
            pointerEvents="none"
            children={<Search2Icon color="gray.300" />}
          />
          <Input
            type="search"
            placeholder="Restaurante"
            onChange={onChange}
            value={form.searchRestaurant}
            name={'searchRestaurant'} />
        </InputGroup>
      </Center>
      <Center h={'80vh'}>
        <Tabs>
          <Center>
            <TabList overflowX={'scroll'} overflowY={'hidden'} w='100vw'>
              <Tab _selected={{ color: '#e86e5a' }}>Todos os Restaurantes</Tab>
              <Tab _selected={{ color: '#e86e5a' }}>Árabe</Tab>
              <Tab _selected={{ color: '#e86e5a' }}>Asiática</Tab>
              <Tab _selected={{ color: '#e86e5a' }}>Hamburguer</Tab>
              <Tab _selected={{ color: '#e86e5a' }}>Italiana</Tab>
              <Tab _selected={{ color: '#e86e5a' }}>Sorvetes</Tab>
              <Tab _selected={{ color: '#e86e5a' }}>Carnes</Tab>
              <Tab _selected={{ color: '#e86e5a' }}>Baiana</Tab>
              <Tab _selected={{ color: '#e86e5a' }}>Petiscos</Tab>
              <Tab _selected={{ color: '#e86e5a' }}>Mexicana</Tab>
            </TabList>
          </Center>

          {load ? (
            <Center>
              <Spinner size="xl" marginTop="20px" />
            </Center>
          ) : (
            <TabPanels overflowY={'scroll'} h='60vh'>
              {filteredRestaurantsLists.length ? filteredRestaurantsLists:<Center><Text marginTop={"20px"}>Não Encontramos :(</Text></Center>}
              <TabPanel>
                {renderedRestaurants}
              </TabPanel>
              <TabPanel>
                {renderedArabicRestaurants}
              </TabPanel>
              <TabPanel>
                {renderedAsianRestaurants}
              </TabPanel>
              <TabPanel>
                {renderedBurgerRestaurants}
              </TabPanel>
              <TabPanel>
                {renderedItalianRestaurants}
              </TabPanel>
              <TabPanel>
                {renderedIceCreamRestaurants}
              </TabPanel>
              <TabPanel>
                {renderedMeatRestaurants}
              </TabPanel>
              <TabPanel>
                {renderedBaianoRestaurants}
              </TabPanel>
              <TabPanel>
                {renderedSnackRestaurants}
              </TabPanel>
              <TabPanel>
                {renderedMexicanRestaurants}
              </TabPanel>
            </TabPanels>
          )}
        </Tabs>
      </Center>
      <Center>
        <Grid
          templateColumns={'repeat(3, 1fr)'}
          shadow={'lg'}
          borderWidth='1px'
          w={'100vw'}
          align='center'
          position={'fixed'}
        >
          <GridItem>
            <IconButton
              as={AiOutlineHome}
              bg={'white'}
              w={'27px'}
              h={'27px'}
              color={'#e865a'}
              onClick={() => goToHome(navigate)} />
          </GridItem>
          <GridItem>
            <IconButton
              as={AiOutlineShoppingCart}
              bg={'white'}
              w={'27px'}
              h={'27px'}
              onClick={() => goToCartPage(navigate)}
            />
          </GridItem>
          <GridItem>
            <IconButton
              as={MdPersonOutline}
              bg={'white'}
              w={'27px'}
              h={'27px'}
              onClick={() => goToProfilePage(navigate)}
            />
          </GridItem>
        </Grid>
      </Center>
    </Box>
  );
}
