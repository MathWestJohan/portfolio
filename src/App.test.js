import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";

describe("App Component", () => {
  test("renders without crashing", () => {
    render(<App />);
    expect(screen.getByText(/Portfolio/i)).toBeInTheDocument();
  });

  test("renders Pipeline Overview by default", () => {
    render(<App />);
    expect(screen.getByText(/Pipeline Overview/i)).toBeInTheDocument();
  });

  test("switches to Deployment Status tab when clicked", () => {
    render(<App />);
    const deploymentTab = screen.getByText(/Deployment Status/i);
    fireEvent.click(deploymentTab);
    expect(screen.getByText(/Deployment Status/i)).toBeInTheDocument();
  });

  test("switches to CI/CD Pipeline Status tab when clicked", () => {
    render(<App />);
    const cicdTab = screen.getByText(/CI\/CD Pipeline Status/i);
    fireEvent.click(cicdTab);
    expect(screen.getByText(/CI\/CD Pipeline Status/i)).toBeInTheDocument();
  });
});
