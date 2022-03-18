import { render, screen } from "@testing-library/react";
import Fetch from "./Fetch";

describe("Fetch component", () => {
  test("looking for data fetching",async () => {
    window.fetch = jest.fn();
    window.fetch.mockResolvedValueOnce({
      json: async () => [{id:"p1",name:"Leanne Graham",username:"bret"}],
    });
    render(<Fetch />);

    const fetchElement = await screen.findAllByRole('listitem')
   expect(fetchElement).not.toHaveLength(0);

    
  });
});
