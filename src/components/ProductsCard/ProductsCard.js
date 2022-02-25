import { Box, Flex, Image, Text } from "@chakra-ui/react";
import * as React from "react";

export default function ProductsCard(property) {
  return (
    <Flex>
      <Image src={property.photo} alt={property.name} />
      <Box ml="3">
        <Text fontWeight="bold">{property.name}</Text>
        <Text fontSize="sm">{property.description}</Text>
      </Box>
    </Flex>
  );
}
