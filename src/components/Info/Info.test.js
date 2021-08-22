import { render, screen } from "@testing-library/react";
import InfoSection from "./";

describe("InfoSection component", () => {
  test("should render InfoSection component", () => {
    // Arrange
    render(<InfoSection />);

    // Act
    // ... nothing

    // Assert
    const pageTitleElement = screen.getByText("Explore countries of the world");
    expect(pageTitleElement).toBeInTheDocument();
  });
});
