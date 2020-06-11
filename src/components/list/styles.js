import styled from "styled-components";

export const Container = styled.div`
  width: 300px;
  border-left: solid #333;
  border-width: 1px 3px 1px 4px;
  border-radius: 0% 4% 92% 5%/0% 95% 6% 95%;
  margin-left: -2px;

  &:first-of-type {
    border-left: none;
  }
`;

export const TitleList = styled.h1`
  font-family: "Indie Flower", cursive;
  font-size: 30px;
  margin-bottom: 10px;
  border-bottom: solid #333;
  border-width: 5px 3px 2px 1px;
  border-radius: 95% 4% 92% 0%/4% 95% 6% 0%;
  padding-left: 50px;
`;

export const TaskList = styled.ul`
  padding-left: 30px;
`;

export const TaskListItem = styled.li`
  width: 200px;
  height: 150px;
  background: ${(props) =>
    props.typeStick !== "task" ? "#2ecc71" : "#f1c40f"};
  color: ${(props) => (props.typeStick !== "task" ? "#eee" : "#2d3436")};
  margin-bottom: 15px;
  padding: 10px 20px;
  box-shadow: 8px 8px 7px -5px rgba(0, 0, 0, 0.55);
  /* cursor: ${(props) => (props.draggable ? "grab" : "normal")}; */

    ${({ draggable }) =>
      draggable &&
      `
    cursor: grab;
  `}
  
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
