import { Checkbox, Box, Text } from "@chakra-ui/react";

import React from "react";

export const Todo = ({ todo }) => {
  return (
    <Box mb={1} bgColor="lightcoral" p={2}>
      <Checkbox>
        <Text>{todo.content}</Text>
      </Checkbox>
    </Box>
  );
};
