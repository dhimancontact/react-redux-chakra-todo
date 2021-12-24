import { Button, Flex, FormControl, Input } from "@chakra-ui/react";
import React, { useState } from "react";

export const AddTodo = () => {
  const [value, setValue] = useState("");

  const handleInput = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setValue("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <Flex>
        <FormControl>
          <Input
            type="text"
            value={value}
            onChange={handleInput}
            borderTopRightRadius={0}
            borderBottomRightRadius={0}
          />
        </FormControl>
        <Button
          colorScheme="teal"
          type="submit"
          disabled={!value}
          borderTopLeftRadius={0}
          borderBottomLeftRadius={0}
        >
          Add ToDo
        </Button>
      </Flex>
    </form>
  );
};
