"use client";

import React from "react";
import styled from "styled-components";
import { useGlobalState } from "../context/globalProvider";

const Tasks = () => {
  const { theme } = useGlobalState();

  return <TaskStyled>Tasks</TaskStyled>;
};

const TaskStyled = styled.div`
  position: relative;
  padding: 2rem;
  width: 100%;
  background-color: ${(props) => props.theme.colorBg2};
  border: 1px solid ${(props) => props.theme.borderColor2};
  border-radius: 1rem;
  height: 100%;

  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 0.5rem;
  }
`;

export default Tasks;
