import styled from "styled-components";

export const Container = styled.div`
  width: 300px;
  border-right: solid 2px #333;
  border-left: solid 2px #333;
  margin-left: -2px;

  &:first-of-type {
    border-left: none;
  }
  &:last-of-type {
    border-right: none;
  }
`;

export const TitleList = styled.h1`
  font-family: "Indie Flower", cursive;
  font-size: 30px;
  margin-bottom: 10px;
  border-bottom: solid 2px #333;
  padding-left: 50px;
`;

export const TaskList = styled.ul`
  padding-left: 30px;
`;

export const TaskListItem = styled.li`
  width: 200px;
  height: 150px;
  background: ${(props) =>
    props.typeStick !== "task" ? "#d63031" : "#00b894"};
  margin-bottom: 15px;
  padding: 10px 20px;
  box-shadow: 8px 8px 7px -5px rgba(0, 0, 0, 0.55);
  h2 {
    font-family: "Indie Flower", cursive;
    font-size: 18px;
    margin-bottom: 10px;
  }

  p {
    font-size: 16px;
    word-wrap: break-word;
  }
`;
