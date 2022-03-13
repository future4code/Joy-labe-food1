import { Box, Button, Center, Flex, Image, Text, useDisclosure } from "@chakra-ui/react";
import * as React from "react";

export default function ProductsCard(property) {



  const currency = function (number) {
    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
      minimumFractionDigits: 2,
    }).format(number);
    //adriano rei do pt-br
  };

  return (
    <Center>
      <Flex
        border="solid 1px #b8b8b8"
        borderRadius="8px"
        mb={'4px'}
        mt={'4px'}
        maxW={"328px"}
        maxH={"216px"}
        key={property.id}
      >
        <Image
          w="97px"
          h="112.6px"
          borderTopLeftRadius="8px"
          borderBottomLeftRadius="8px"
          src={property.photoUrl}
          alt={property.name}
        />
        <Box ml="3">
          <Text
              fontWeight="bold"
              fontSize="16px"
              color="#e86e5a"
              margin={"18px 16px 6px 0"}
              maxW={"15ch"}
              isTruncated
              textOverflow={'ellipsis'}
            >
              {property.name}
          </Text>
          <Text
            fontSize="14px"
            color="#b8b8b8"
            h={"30px"}
            w={"198px"}
            m={"6px 17px 6px 0"}
          >
            {property.description}
          </Text>
          <Text
            fontWeight="bold"
            fontSize="16px"
            color="000000"
            w={"108px"}
            isTruncated
          >
            {currency(property.price)}
          </Text>
        </Box>
        <Button
          variant={"outline"}
          borderColor={"black"}
          borderTopLeftRadius={"8px"}
          borderTopRightRadius={"0px"}
          borderBottomRightRadius={"8px"}
          onClick={property.onClick}
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
      </Flex>
    </Center>
  );
}
