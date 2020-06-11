import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  background: #f7f7f7;
  flex-direction: column;
  overflow-x: hidden;
`;

export const TitleBoard = styled.h1`
  display: flex;
  width: 100%;
  height: 35px;
  padding-top: 25px;
  margin-bottom: 25px;
  justify-content: center;
  align-items: center;
  font-size: 30px;
`;

export const BodyBoard = styled.section`
  display: flex;
  width: 100%;
  padding: 10px 15px 20px 15px;
  justify-content: center;
  align-items: flex-start;
`;

export const ContainerInput = styled.div`
  display: flex;
  width: 100%;
  height: 50px;
  justify-content: center;
  align-items: center;
`;

export const InputStick = styled.input.attrs((props) => ({
  type: "text",
}))`
  max-width: 300px;
  margin-right: 10px;
  width: 100%;
  height: 35px;
  padding-left: 15px;
  font-size: 14px;
`;

export const BtAddTask = styled.button`
  width: 100px;
  height: 35px;
  border: none;
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 10px;
  font-size: 14px;
  background: #f1c40f;
  color: #2d3436;
`;

export const BtAddFeature = styled.button`
  width: 100px;
  height: 35px;
  border: none;
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 10px;
  font-size: 14px;
  background: #2ecc71;
  color: #eee;
`;
