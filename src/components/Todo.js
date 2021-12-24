import { Checkbox, Box, Text } from "@chakra-ui/react";

import { useState } from "react";

export const Todo = ({ todo }) => {
  const [checked, isChecked] = useState(false);

  return (
    <Box mb={1} bgColor="lightcoral" p={2}>
      <Checkbox colorScheme="teal" isChecked={checked}>
        <Text as={todo.completed && "del"}>{todo.content}</Text>
      </Checkbox>
    </Box>
  );
};
