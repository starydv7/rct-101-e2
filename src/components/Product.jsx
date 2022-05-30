import React from "react";
import {Stack,Image,Text,Heading,Box} from "@chakra-ui/react";
const Product = () => {
  // TODO: Remove below const and instead import them from chakra
 
  return (
    <Stack data-cy="product">
      <Image data-cy="product-image" />
      <Text data-cy="product-category">Category</Text>
      <Tag>
        <TagLabel data-cy="product-gender">gender</TagLabel>
      </Tag>
      <Heading data-cy="product-title">Title</Heading>
      <Box data-cy="product-price">Price</Box>
    </Stack>
  );
};

export default Product;
