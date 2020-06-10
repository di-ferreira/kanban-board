import React from "react";
import { Container, TitleList, TaskList, TaskListItem } from "./styles";

export default function List({ titleList }) {
  return (
    <Container>
      <TitleList>{titleList}</TitleList>
      <TaskList>
        <TaskListItem>
          <h2>Tarefa 1</h2>
          <p>
            Descrição da tarefa com texto bem grande para ver a quebra de texto.
          </p>
        </TaskListItem>
        <TaskListItem>tarefa 2</TaskListItem>
        <TaskListItem>tarefa 3</TaskListItem>
        <TaskListItem>tarefa 4</TaskListItem>
        <TaskListItem>tarefa 5</TaskListItem>
      </TaskList>
    </Container>
  );
}
