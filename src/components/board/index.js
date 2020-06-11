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
    },
    {
      id: 2,
      type: "feature",
      title: "Task 2",
      desc:
        "Descrição da tarefa com texto bem grande para ver a quebra de texto.",
    },
  ];

  const [toDo, setToDo] = useState([]);
  const [plan, setPlan] = useState([]);
  const [development, setDevelopment] = useState([]);
  const [test, setTest] = useState([]);
  const [deploy, setDeploy] = useState([]);
  const [done, setDone] = useState([]);

  const [title, setTitle] = useState();
  const [desc, setDesc] = useState();

  useEffect(() => {
    setToDo([...data]);
  }, []);

  const makeId = (length) => {
    let result = "";
    let characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  };

  const addStick = (type) => {
    let id = makeId(5);

    let data = {
      id,
      type,
      title,
      desc,
    };

    setToDo([...toDo, data]);

    setTitle("");
    setDesc("");
  };

  const onDrop = (titleList) => {
    console.log(titleList);
  };

  const onDrag = (stick) => {
    //console.log(stick);
  };

  return (
    <Container>
      <TitleBoard> Kanban Board </TitleBoard>
      <BodyBoard>
        <List
          titleList="To Do"
          data={toDo}
          onDrag={(stick) => {
            onDrag(stick);
          }}
          onDrop={(titleList) => {
            onDrop(titleList);
          }}
        />
        <List
          titleList="Plan"
          data={plan}
          onDrop={(titleList) => {
            onDrop(titleList);
          }}
          ondragover={(e) => e.preventDefault()}
        />
        <List titleList="Develop" data={development} />
        <List titleList="Test" data={test} />
        <List titleList="Deploy" data={deploy} />
        <List titleList="Done" data={done} />
      </BodyBoard>
      <ContainerInput>
        <InputStick
          placeholder="Add Title Stick"
          value={title}
          onChange={(text) => {
            setTitle(text.target.value);
          }}
        />
        <InputStick
          placeholder="Add Description Stick"
          value={desc}
          onChange={(text) => {
            setDesc(text.target.value);
          }}
        />
        <BtAddTask
          onClick={() => {
            addStick("task");
          }}
        >
          Task
        </BtAddTask>
        <BtAddFeature
          onClick={() => {
            addStick("feature");
          }}
        >
          Feature
        </BtAddFeature>
      </ContainerInput>
    </Container>
  );
}
