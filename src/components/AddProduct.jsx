import React from "react";
import {
  Button,
  ModalBody,
  Modal,
  Input,
  Select,
  Radio,
  RadioGroup,
} from "@chakra-ui/react";
const AddProduct = () => {
  // TODO: Remove below const and instead import them from chakra
 

  return (
    <>
      <Button my={6} data-cy="add-product-button">Add Products</Button>
      <Modal>
        <ModalBody pb={6}>
          <Input data-cy="add-product-title" />
          <Select data-cy="add-product-category">
            <option data-cy="add-product-category-shirt">Shirts</option>
            <option data-cy="add-product-category-pant">Pant</option>
            <option data-cy="add-product-category-jeans">Jeans</option>
          </Select>
          <RadioGroup data-cy="add-product-gender">
            <Radio data-cy="add-product-gender-male">Male</Radio>
            <Radio data-cy="add-product-gender-female">Female</Radio>
          </RadioGroup>
          <Input data-cy="add-product-price" />
          <Button data-cy="add-product-submit-button"colorScheme="teal" size="sm">Submit</Button>
        </ModalBody>
      </Modal>
    </>
  );
};

export default AddProduct;
