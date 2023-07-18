import Table from "../components/Table";
import renderer from "react-test-renderer";
import { render, screen, fireEvent } from "@testing-library/react";
import React from "react";
import { Apod } from "../types/Apod";
import "@testing-library/jest-dom";
import { testData } from "../tests/testData";

describe("Table.tsx", () => {
  it("renders correctly", () => {
    const tree = renderer
      .create(
        <Table
          data={testData}
          handleRowClick={(row: Apod, event) => {
            return;
          }}
        />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  it("renders modal on click", () => {
    const handleClick = jest.fn();
    render(<Table data={testData} handleRowClick={handleClick} />);

    fireEvent.click(screen.getByText(/Jun 27, 2023/)); // trigger click event on the element

    expect(handleClick).toBeCalledTimes(1);
  });
});
