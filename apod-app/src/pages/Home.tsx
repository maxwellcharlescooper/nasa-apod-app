import React, { useState } from "react";
import styled from "styled-components";
import Colors from "../styles/Colors";
import Styled from "../styles/Styles";
import { usePromise } from "../api/api";
import { fetchApod } from "../api/apod";
import Table from "../components/Table";
import Modal from "../components/Modal";
import { Apod } from "../types/Apod";

const Background = styled(Styled.FlexRow)`
  background-color: ${Colors.BLUE};
  color: white;
  min-height: 100vh;
  min-width: 100vw:
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled(Styled.FlexColumn)`
  align-items: center;
  justify-content: center;
`;

const Title = styled(Styled.FlexColumn)`
  align-items: center;
  color: ${Colors.RED};
  font-size: 36px;
  -webkit-text-stroke: white 0.15px;
`;

const Home = (b: boolean) => {
  const { data: apodData } = usePromise(fetchApod, []);

  const [isModalShown, setIsModalShown] = useState<boolean>(false);
  const [activeRow, setActiveRow] = useState<Apod>(null);
  const handleRowClick = (row: Apod, event) => {
    setActiveRow(row);
    setIsModalShown(true);
  };
  const closeModal = () => {
    setIsModalShown(false);
  };

  return (
    <Background>
      <Styled.FlexColumn>
        <Wrapper>
          <img
            src="https://www.nasa.gov/sites/default/files/thumbnails/image/nasa-logo-web-rgb.png"
            width="400"
            height="200"
          />
        </Wrapper>
        <Title>Astronomy Picture of the Day</Title>
        {/* {apodLoading && (
          <Wrapper>
            <Styled.Spinner />
          </Wrapper>
        )} */}
        {apodData && (
          <Wrapper>
            <Table
              data={[...apodData].reverse()}
              handleRowClick={handleRowClick}
            />
          </Wrapper>
        )}
        {/* {apodError && <Wrapper>Oops! Something went wrong...</Wrapper>} */}
        {isModalShown && <Modal row={activeRow} closeModal={closeModal} />}
      </Styled.FlexColumn>
    </Background>
  );
};

export default Home;
