import React from 'react';
import { Input, Icon } from "atomize";

const SearchBar = () => {
  return (
    <Input
      placeholder="Search"
      suffix={
        <Icon
          name="Search"
          size="20px"
          cursor="pointer"
          onClick={() => console.log("clicked")}
          pos="absolute"
          top="50%"
          right="1rem"
          transform="translateY(-50%)"
        />
      }
    />
  );
}

export default SearchBar;