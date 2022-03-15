import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Sample from "./Sample";

describe("sample component", () => {
  test("looking for hello world", () => {
    render(<Sample />);

    let helloWorldElement = screen.getByText("Hello world!!!", { exact: true });
    expect(helloWorldElement).toBeInTheDocument();
  });

  test("looking for madophere", () => {
    render(<Sample />);

    let paragraphElement = screen.getAllByText("madophere");
    expect(paragraphElement).toBeTruthy();
  });

  test("looking for changed", () => {
    render(<Sample />);

    let buttonElement = screen.getByTestId("btn1");
    userEvent.click(buttonElement);

    let helloWorldElement = screen.getAllByText("Changed!!", { exact: true });
    expect(helloWorldElement).toBeTruthy();
  });
  test("looking for madophere to be absent", () => {
    render(<Sample />);

    let buttonElement = screen.getByTestId("btn1");
    userEvent.click(buttonElement);

    let helloWorldElement = screen.queryByText("madophere", { exact: false });
    expect(helloWorldElement).toBeNull();
  });

  test("looking for btn id change", () => {
    render(<Sample />);

    let btnDocument=screen.getByTestId("btn")
    userEvent.click(btnDocument)

    let helloWorldElement = screen.getAllByText("Changed!!", { exact: true });
    expect(helloWorldElement).toBeTruthy();
  });
});
