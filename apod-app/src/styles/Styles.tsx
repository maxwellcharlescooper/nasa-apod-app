import React from "react";
import styled from "styled-components";
import Colors from "./Colors";

const FlexRow = styled.div`
  display: flex;
  flex-direction: row;
`;

const FlexColumn = styled.div`
  display: flex;
  flex-direction: column;
`;

const Spinner = styled.div`
  margin: 0 auto;
  height: 64px;
  width: 64px;
  animation: rotate 0.8s infinite linear;
  border: 5px solid ${Colors.RED};
  border-top-color: transparent;
  border-radius: 50%;
  @keyframes rotate {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

const ModalOverlay = styled(FlexRow)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  align-items: center;
  align-content: center;
  justify-content: center;
`;

const CloseIcon = () => (
  <svg height="24" viewBox="0 0 24 24" width="24">
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M18.3 5.71c-.39-.39-1.02-.39-1.41 0L12 10.59 7.11 5.7c-.39-.39-1.02-.39-1.41 0-.39.39-.39 1.02 0 1.41L10.59 12 5.7 16.89c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.41 0L12 13.41l4.89 4.89c.39.39 1.02.39 1.41 0 .39-.39.39-1.02 0-1.41L13.41 12l4.89-4.89c.38-.38.38-1.02 0-1.4z" />
  </svg>
);

const Styled = {
  FlexRow,
  FlexColumn,
  Spinner,
  ModalOverlay,
  CloseIcon
};

export default Styled;
