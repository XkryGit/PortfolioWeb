import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import { ProjectHelloMagazineComponent } from "./projects.hellomagazine.component"; // Updated import
import { MemoryRouter } from "react-router-dom";

describe("HelloMagazineProject specs test", () => {
  // Updated describe block
  it("renders the HelloMagazine component", () => {
    // Updated test name
    // Arrange
    render(
      <MemoryRouter>
        <ProjectHelloMagazineComponent />
      </MemoryRouter>
    );

    // Act
    // Assert
    expect(screen.getByText("HELLO MAGAZINE PROJECT")).toBeInTheDocument();
  });

  it("renders more than two images in the HelloMagazine component", () => {
    // Updated test name
    // Arrange
    render(
      <MemoryRouter>
        <ProjectHelloMagazineComponent />
      </MemoryRouter>
    );

    // Act
    const images = screen.getAllByRole("img");

    // Assert
    expect(images.length).toBeGreaterThan(2);
  });
});
