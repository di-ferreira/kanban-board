import React, { useState, useEffect } from "react";
import {
  Container,
  TitleBoard,
  BodyBoard,
  ContainerInput,
  InputStick,
  BtAddTask,
  BtAddFeature,
} from "./styles";
import List from "../List";
export default function Board() {
  const data = [
    {
      id: 1,
      type: "task",
      title: "Task 1",
      desc:
        "Descrição da tarefa com texto bem grande para ver a quebra de texto.",
      draggable: true,
    },
    {
      id: 2,
      type: "feature",
      title: "Task 2",
      desc:
        "Descrição da tarefa com texto bem grande para ver a quebra de texto.",
      draggable: false,
    },
  ];

  const [toDo, setToDo] = useState([]);
  const [plan, setPlan] = useState([]);
  const [development, setDevelopment] = useState([]);
  const [test, setTest] = useState([]);
  const [deploy, setDeploy] = useState([]);
  const [done, setDone] = useState([]);

  useEffect(() => {
    setToDo([...data]);
  }, []);

  return (
    <Container>
      <TitleBoard> Kanban Board </TitleBoard>
      <BodyBoard>
        <List titleList="To Do" data={toDo} />
        <List titleList="Plan" data={plan} />
        <List titleList="Develop" data={development} />
        <List titleList="Test" data={test} />
        <List titleList="Deploy" data={deploy} />
        <List titleList="Done" data={done} />
      </BodyBoard>
      <ContainerInput>
        <InputStick placeholder="Add Title Stick" />
        <InputStick placeholder="Add Description Stick" />
        <BtAddTask> Task </BtAddTask>
        <BtAddFeature> Feature </BtAddFeature>
      </ContainerInput>
    </Container>
  );
}
