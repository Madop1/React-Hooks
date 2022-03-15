import { render, screen } from "@testing-library/react";
import Fetch from "./Fetch";

describe("Fetch component", () => {
  test("looking for data fetching", async() => {
    render(<Fetch />);
    // window.fetch()=jest.fn()

    const fetchElement =await screen.findAllByTestId('fetch');
    expect(fetchElement).not.toHaveLength(0);
  });
});
