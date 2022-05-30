import React from "react";
import { Button,Select,ButtonGroup } from "@chakra-ui/react";
const Pagination = () => {
  // TODO: Remove below const and instead import them from chakra
  
 

  return (
    <ButtonGroup>
      <Button data-cy="pagination-first-button">Next</Button>
      <Button data-cy="pagination-previous-button">Previous</Button>
      <Select data-cy="pagination-limit-select">
        <option data-cy="pagination-limit-3">1</option>
        <option data-cy="pagination-limit-6">4</option>
        <option data-cy="pagination-limit-9">6</option>
      </Select>
      <Button data-cy="pagination-next-button">Next</Button>
      <Button data-cy="pagination-last-button">Previous</Button>
    </ButtonGroup>
  );
};

export default Pagination;
