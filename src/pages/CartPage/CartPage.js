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
  Spinner,
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
import { goToCartPage, goToHome, goToProfilePage, goToResultPage } from "../../Routes/Coordinator";
import { useNavigate } from "react-router-dom";
import { auth } from "../../constants/auth";


export default function CartPage(){

    const navigate = useNavigate();


    return(
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
          mt="13px"
        >
          Meu carrinho
        </Heading>
      </Center>
      <Center h={"85vh"}>
        
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
    )

}