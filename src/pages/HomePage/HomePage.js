import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { BASE_URL } from "../../constants/BASE_URL";
import RestaurantCard from "../../components/RestaurantsCard/RestaurantsCard";
import {
  Center,
  Heading,
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
} from "@chakra-ui/react";
import { Search2Icon } from "@chakra-ui/icons";
import loadimage from "../../assets/Spinner-1s-200px.gif";

export default function HomePage() {
  const [listRestaurants, setListRestaurants] = useState([]);
  const [filterType, setFilterType] = useState();
  const [load, setLoad] = useState(true);

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
        console.log(res.data.restaurants);
        setListRestaurants(res.data.restaurants);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getRestaurants();
  }, []);

  // const arabicRestaurants = listRestaurants.filter((restaurant) => {

  //     if (restaurant.category === "Árabe") {
  //     return (
  //         <RestaurantCard
  //             key={restaurant.id}
  //             logoUrl={restaurant.logoUrl}
  //             description={restaurant.description}
  //             deliveryTime={restaurant.deliveryTime}
  //             shipping={restaurant.shipping}
  //             name={restaurant.name}
  //         >
  //         </RestaurantCard>
  //     )}
  // })

  const renderedRestaurants = listRestaurants.map((restaurant) => {
    return load ? (
      <Stack>
        <Skeleton w="328px" h="120px" />
        <Skeleton height="20px" w="20%" />
        <Skeleton height="20px" w="328px" />
      </Stack>
    ) : (
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
  return (
    <div>
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
          <Input type="search" placeholder="Restaurante" />
        </InputGroup>
      </Center>
      <Center>
        <Tabs>
          <TabList>
            <Tab>Categoria 1</Tab>
            <Tab>Categoria 2</Tab>
            <Tab>Categoria 3</Tab>
          </TabList>

          {load ? (
            <Center>
              <Spinner size="xl" marginTop="20px" />
            </Center>
          ) : (
            <TabPanels>
              
              <TabPanel>{renderedRestaurants}</TabPanel>
              <TabPanel>
                <p>Catg!</p>
              </TabPanel>
              <TabPanel>
                <p>Catigoria!</p>
              </TabPanel>
            </TabPanels>
          )}
        </Tabs>
      </Center>
      {/* {renderedRestaurants} */}
    </div>
  );
}
