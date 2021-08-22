import { render, screen } from "@testing-library/react";
import InfoSection from "./index";

describe("InfoSection component", () => {
  test("renders Explore Countries of the world as a text", () => {
    // Arrange
    render(<InfoSection />);

    // Act
    // ... nothing

    // Assert
    const pageTitleElement = screen.getByText("Explore countries of the world");
    expect(pageTitleElement).toBeInTheDocument();
  });
});
