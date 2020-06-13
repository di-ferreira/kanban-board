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
  const [board, setBoard] = useState([]);
  const [toDo, setToDo] = useState([]);
  const [plan, setPlan] = useState([]);
  const [development, setDevelopment] = useState([]);
  const [test, setTest] = useState([]);
  const [deploy, setDeploy] = useState([]);
  const [done, setDone] = useState([]);
  const [draggedStick, setDraggedStick] = useState();

  const [title, setTitle] = useState();
  const [desc, setDesc] = useState();

  //- inicia o carregamento dos dados
  useEffect(() => {
    let data = localStorage.getItem("@kanban/board");

    if (data || data !== null) {
      setBoard(data);
    }
    loadList(board);
  }, []);

  useEffect(() => {
    //- salva em localStorage
    localStorage.setItem("@kanban/board", board);
  }, [board]);

  const saveBoard = () => {
    setBoard([toDo, plan, development, test, deploy, done]);
  };

  const loadList = (board) => {
    if (board) {
      setToDo(board.toDo);
      setPlan(board.plan);
      setDevelopment(board.development);
      setTest(board.test);
      setDeploy(board.deploy);
      setDone(board.done);
    }
  };

  //- create a id
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

  //- add stick
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

  //- removeStickList
  const removeStickList = (dataList, stick) => {
    switch (dataList) {
      case "ToDo":
        setToDo(toDo.filter((stickList) => stickList.id !== stick.id));
        break;

      case "Plan":
        setPlan(plan.filter((stickList) => stickList.id !== stick.id));
        break;

      case "Development":
        setDevelopment(
          development.filter((stickList) => stickList.id !== stick.id)
        );
        break;

      case "Test":
        setTest(test.filter((stickList) => stickList.id !== stick.id));
        break;

      case "Deploy":
        setDeploy(deploy.filter((stickList) => stickList.id !== stick.id));
        break;

      case "Done":
        setDone(done.filter((stickList) => stickList.id !== stick.id));
        break;

      default:
        break;
    }
  };

  //- addStick
  const addStickList = (dataList, stick) => {
    switch (dataList) {
      case "ToDo":
        setToDo([...toDo, stick]);
        break;

      case "Plan":
        setPlan([...plan, stick]);
        break;

      case "Development":
        setDevelopment([...development, stick]);
        break;

      case "Test":
        setTest([...test, stick]);
        break;

      case "Deploy":
        setDeploy([...deploy, stick]);
        break;

      case "Done":
        setDone([...done, stick]);
        break;

      default:
        break;
    }
  };

  //- Drop event
  const onDrop = (event) => {
    event.preventDefault();
    let dataList = event.target.getAttribute("data-list");
    addStickList(dataList, draggedStick);
    saveBoard();
  };

  //- Drag event
  const onDrag = (dataList, stick) => {
    setDraggedStick(stick);
    removeStickList(dataList, stick);
  };

  return (
    <Container>
      <TitleBoard> Kanban Board </TitleBoard>
      <BodyBoard>
        <List
          titleList="To Do"
          data={toDo}
          dataList={"ToDo"}
          onDrag={(dataList, stick) => {
            onDrag(dataList, stick);
          }}
          onDrop={(e) => {
            onDrop(e);
          }}
        />

        <List
          titleList="Plan"
          data={plan}
          dataList={"Plan"}
          onDrag={(dataList, stick) => {
            onDrag(dataList, stick);
          }}
          onDrop={(e) => {
            onDrop(e);
          }}
        />
        <List
          titleList="Develop"
          data={development}
          dataList={"Development"}
          onDrag={(dataList, stick) => {
            onDrag(dataList, stick);
          }}
          onDrop={(e) => {
            onDrop(e);
          }}
        />
        <List
          titleList="Test"
          data={test}
          dataList={"Test"}
          onDrag={(dataList, stick) => {
            onDrag(dataList, stick);
          }}
          onDrop={(e) => {
            onDrop(e);
          }}
        />
        <List
          titleList="Deploy"
          data={deploy}
          dataList={"Deploy"}
          onDrag={(dataList, stick) => {
            onDrag(dataList, stick);
          }}
          onDrop={(e) => {
            onDrop(e);
          }}
        />
        <List
          titleList="Done"
          data={done}
          dataList={"Done"}
          onDrag={(dataList, stick) => {
            onDrag(dataList, stick);
          }}
          onDrop={(e) => {
            onDrop(e);
          }}
        />
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
