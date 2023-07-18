import React, { useRef } from "react";
import styled from "styled-components";
import { Apod } from "../types/Apod";
import Styled from "../styles/Styles";
import Functions from "../util/Functions";
import { format, parse } from "date-fns";
import Colors from "../styles/Colors";

const Card = styled(Styled.FlexColumn)`
  width: 700px;
  height: 700px;
  background-color: white;
  color: black;
  align-items: center;
  padding: 20px;
  border-radius: 10px;
`;

const Entry = styled(Styled.FlexRow)`
  margin-bottom: 30px;
`;

const Close = styled(Styled.FlexColumn).attrs({
  "aria-label": "close"
})`
  cursor: pointer;
  display: flex;
  flex-direction: column;

  &:hover {
    background-color: ${Colors.GRAY};
  }
`;

type Props = {
  row: Apod | null;
  closeModal: () => void;
};

const Modal = ({ row, closeModal }: Props) => {
  const ref = useRef();
  Functions.useOnClickOutside(ref, closeModal);
  return (
    <Styled.ModalOverlay>
      <Card ref={ref}>
        <img src={row.url} height="300" />
        <Entry>{row.title}</Entry>
        <Entry>
          {format(parse(row.date, "yyyy-MM-dd", new Date()), "LLLL do, yyyy")}
        </Entry>
        <Entry>{row.explanation}</Entry>
        <Close onClick={closeModal}>
          <Styled.CloseIcon />
        </Close>
      </Card>
    </Styled.ModalOverlay>
  );
};

export default Modal;
