import { render, screen } from "@testing-library/react";
import Async from "./Async";

describe("Async component", () => {
  test("renders posts if request succeeds", async () => {
    window.fetch = jest.fn();
    //overriding the built in fetch()
    //to simulate a request to the API
    //this is done so the tests dont make unnecessary requests
    window.fetch.mockResolvedValueOnce({
      json: async () => [{ id: "p1", title: "first post" }],
    });
    render(<Async />);

    const liElements = await screen.findAllByRole("listitem");
    expect(liElements).not.toHaveLength(0);
  });
});
