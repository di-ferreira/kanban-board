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
    loadList(data);
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

    if (toDo) {
      setToDo([...toDo, data]);
    } else {
      setToDo([data]);
    }

    setTitle("");
    setDesc("");
  };

  //- if remove true remove stick of actual list
  //- if remove false add stick of new list
  const chooseList = (list, setList, stick, remove = true) => {
    console.log(list);
    if (remove) {
      let newList = list.filter((l) => l.id !== stick.id);
      setList(newList);
    } else {
      if (list === undefined || list === null) {
        setList([stick]);
      } else {
        setList([...list, stick]);
      }
    }
  };

  //- add stick of list
  const addStickList = (dataList, stick) => {
    switch (dataList) {
      case "ToDo":
        chooseList(toDo, setToDo, stick, false);
        break;

      case "Plan":
        chooseList(plan, setPlan, stick, false);
        break;

      case "Development":
        chooseList(development, setDevelopment, stick, false);
        break;

      case "Test":
        chooseList(test, setTest, stick, false);
        break;

      case "Deploy":
        chooseList(deploy, setDeploy, stick, false);
        break;

      case "Done":
        chooseList(done, setDone, stick, false);
        break;

      default:
        break;
    }
  };

  //- remove stick of list
  const removeStickList = (dataList, stick) => {
    switch (dataList) {
      case "ToDo":
        chooseList(toDo, setToDo, stick);
        break;

      case "Plan":
        chooseList(plan, setPlan, stick);
        break;

      case "Development":
        chooseList(development, setDevelopment, stick);
        break;

      case "Test":
        chooseList(test, setTest, stick);
        break;

      case "Deploy":
        chooseList(deploy, setDeploy, stick);
        break;

      case "Done":
        chooseList(done, setDone, stick);
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
    setDraggedStick("");
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
