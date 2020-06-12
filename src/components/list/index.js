import React, { useState, useEffect } from "react";
import { Container, TitleList, TaskList, TaskListItem } from "./styles";

export default function List({
  titleList,
  typeStick,
  data,
  dataList,
  onDrag,
  onDrop,
}) {
  const [sticks, setSticks] = useState([]);

  useEffect(() => {
    setSticks(data);
  }, [data]);

  const onDragOver = (event) => {
    event.preventDefault();
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
        data-list={dataList}
      >
        {sticks &&
          sticks.map((stick) => (
            <TaskListItem
              draggable
              typeStick={stick.type}
              key={stick.id}
              onDragStart={() => onDrag(dataList, stick)}
            >
              <h2>{stick.title}</h2>
              <p>{stick.desc}</p>
            </TaskListItem>
          ))}
      </TaskList>
    </Container>
  );
}
