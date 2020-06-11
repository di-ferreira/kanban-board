import React, { useState, useEffect } from "react";
import { Container, TitleList, TaskList, TaskListItem } from "./styles";

export default function List({ titleList, typeStick, data }) {
  const [sticks, setSticks] = useState([]);

  useEffect(() => {
    setSticks(data);
  }, [data]);

  return (
    <Container>
      <TitleList>{titleList}</TitleList>
      <TaskList>
        {sticks &&
          sticks.map((stick) => (
            <TaskListItem
              draggable={stick.draggable}
              typeStick={stick.type}
              key={stick.id}
            >
              <h2>{stick.title}</h2>
              <p>{stick.desc}</p>
            </TaskListItem>
          ))}
      </TaskList>
    </Container>
  );
}
