import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  background: #f7f7f7;
  flex-direction: column;
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
