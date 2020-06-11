import React from "react";
import { Container, TitleList, TaskList, TaskListItem } from "./styles";

export default function List({ titleList, typeStick }) {
  return (
    <Container>
      <TitleList>{titleList}</TitleList>
      <TaskList>
        <TaskListItem draggable typeStick="task">
          <h2>Tarefa 1</h2>
          <p>
            Descrição da tarefa com texto bem grande para ver a quebra de texto.
          </p>
        </TaskListItem>
        <TaskListItem typeStick="feature">tarefa 2</TaskListItem>
        <TaskListItem typeStick="feature">tarefa 3</TaskListItem>
        <TaskListItem typeStick="task">tarefa 4</TaskListItem>
        <TaskListItem typeStick="feature">tarefa 5</TaskListItem>
      </TaskList>
    </Container>
  );
}
