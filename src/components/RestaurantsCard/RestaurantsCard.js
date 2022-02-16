import { Box, Center, Flex, Image } from "@chakra-ui/react"
import * as React from 'react'


export default function RestaurantCard(property) {

    return (
      <Center>
        <Box 
          maxW='sm' 
          borderWidth='1px'
          borderRadius='lg' 
          overflow='hidden' 
          w={['328px']} 
          h='200px' 
          marginBottom={'8px'}>
          <Image 
            src={property.logoUrl} 
            alt={property.description} 
            w='328px' 
            h='120px'
            />
          <Box p='6'>
            <Box
              mt='1'
              fontWeight='semibold'
              as='h4'
              lineHeight='tight'
              color='#e86e5a'
              isTruncated
            >
              {property.name}
            </Box>  
            <Flex justify='space-between' alignItems='baseline'>
              <Box
                color='#b8b8b8'
                fontWeight='semibold'
                letterSpacing='wide'
                fontSize='xs'
                textTransform='uppercase'
                fontSize='16px'
                ml='2'
              >
                {property.deliveryTime} min
              </Box>
              <Box
                color='#b8b8b8'
                fontWeight='semibold'
                letterSpacing='wide'
                fontSize='16px'
                ml='2'
              >
                Frete R${property.shipping}
              </Box>
            </Flex>
          
          </Box>
        </Box>
      </Center>
    )
  }