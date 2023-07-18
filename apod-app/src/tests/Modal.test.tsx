import React from "react";
import renderer from "react-test-renderer";
import { render, screen, fireEvent } from "@testing-library/react";
import Modal from "../components/Modal";
import { testData } from "../tests/testData";

describe("Modal.tsx", () => {
  it("renders correctly", () => {
    const tree = renderer
      .create(
        <Modal
          row={testData[0]}
          closeModal={() => {
            return;
          }}
        />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  it("closes on click", () => {
    const handleClick = jest.fn();
    render(<Modal row={testData[0]} closeModal={handleClick} />);

    fireEvent.click(screen.getByRole("generic", { name: "close" }));

    expect(handleClick).toBeCalledTimes(1);
  });
});
