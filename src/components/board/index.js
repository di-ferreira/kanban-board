import React from "react";
import { Container, TitleBoard, BodyBoard } from "./styles";
import List from "../list";
export default function Board() {
  return (
    <Container>
      <TitleBoard> Kanban Board </TitleBoard>
      <BodyBoard>
        <List titleList="To Do" />
        <List titleList="Plan" />
        <List titleList="Develop" />
        <List titleList="Test" />
        <List titleList="Deploy" />
        <List titleList="Done" />
      </BodyBoard>
      <div>
        <input type="text" />
        <button> Task </button>
        <button> Feature </button>
      </div>
    </Container>
  );
}
