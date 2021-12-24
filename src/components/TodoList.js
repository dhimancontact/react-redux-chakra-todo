import { Box } from "@chakra-ui/react";
import React from "react";
import { useSelector } from "react-redux";
import { Todo } from "./Todo";
export const TodoList = () => {
  const { todos } = useSelector((state) => state.todos);

  console.log(todos);
  return (
    <Box my="4">
      {todos.length ? (
        todos.map((todo) => <Todo key={`todo-${todo.id}`} todo={todo}></Todo>)
      ) : (
        <Box textAlign="center" my="4">
          No Todo Yay!{" "}
        </Box>
      )}
    </Box>
  );
};
