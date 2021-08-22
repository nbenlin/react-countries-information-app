import { render, screen } from "@testing-library/react";
import ListItem from "./";

describe("ListItem component", () => {
  test("renders list of countries", async () => {
    window.fetch = jest.fn();
    window.fetch.mockResolvedValueOnce({
      json: async () => [{ id: "c1", title: "First country" }],
    });

    render(<ListItem />);

    const listItemElements = await screen.findAllByRole("listitem");
    expect(listItemElements).not.toHaveLength(0);
  });
});
