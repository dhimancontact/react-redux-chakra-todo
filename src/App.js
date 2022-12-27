import React from "react";
import { Container, Heading } from "@chakra-ui/react";
import { AddTodo } from "./components/AddTodo";
import { TodoList } from "./components/TodoList";
import { VisibiltyFilter } from "./components/VisibiltyFilter";
function App() {
  return (
    <Container maxWidth="container.sm">
      <Heading my="4">Todo List</Heading>
      <AddTodo></AddTodo>
      <TodoList></TodoList>
      <VisibiltyFilter></VisibiltyFilter>
    </Container>
  );
}

export default App;
