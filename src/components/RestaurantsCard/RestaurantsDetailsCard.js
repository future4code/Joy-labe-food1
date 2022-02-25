import { Box, Center, Flex, Image } from "@chakra-ui/react"
import * as React from 'react'


export default function RestaurantDetailsCard(property) {

    return (
      <Center>
        <Box 
          maxW='sm' 
          overflow='hidden' 
          w='328px' 
          h='fit-content' 
          marginBottom={'8px'}
          marginTop={'8px'}
          onClick={property.onClick}>
          <Image 
            src={property.logoUrl} 
            alt={property.name} 
            w='328px' 
            h='120px'
            borderTopRadius='lg' 

            />
          <Box p='2'>
            <Box
              mt='1'
              as='h4'
              lineHeight='tight'
              color='#e86e5a'
              isTruncated
            >
              {property.name}
            </Box>  
            <Box
              mt='1'
              as='h4'
              lineHeight='tight'
              color='#b8b8b8'
              isTruncated
            >
              {property.category}
            </Box>  

            <Flex justify='space-between' alignItems='baseline'>

              <Box
                color='#b8b8b8'
                letterSpacing='wide'
                fontSize='16px'
              >
                {property.deliveryTime} min
              </Box>
              <Box
                color='#b8b8b8'
                letterSpacing='wide'
                fontSize='16px'
                ml='2'
              >
                Frete R${property.shipping},00
              </Box>
            </Flex>
            <Box
              mt='1'
              as='h4'
              lineHeight='tight'
              color='#b8b8b8'
              isTruncated
            >
              {property.address}
            </Box>  

          
          </Box>
        </Box>
      </Center>
    )
  }