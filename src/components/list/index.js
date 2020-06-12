import React, { useState, useEffect } from "react";
import { Container, TitleList, TaskList, TaskListItem } from "./styles";

export default function List({ titleList, typeStick, data, onDrag, onDrop }) {
  const [sticks, setSticks] = useState([]);

  useEffect(() => {
    setSticks(data);
  }, [data]);

  const onDragOver = (event) => {
    event.preventDefault();
    console.log("Nao sei o que");
  };

  return (
    <Container>
      <TitleList>{titleList}</TitleList>
      <TaskList
        onDrop={(e) => {
          onDrop(e);
        }}
        onDragOver={(e) => {
          onDragOver(e);
        }}
      >
        {sticks &&
          sticks.map((stick) => (
            <TaskListItem
              draggable
              typeStick={stick.type}
              key={stick.id}
              onDragStart={() => onDrag(stick)}
            >
              <h2>{stick.title}</h2>
              <p>{stick.desc}</p>
            </TaskListItem>
          ))}
      </TaskList>
    </Container>
  );
}
