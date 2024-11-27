import React from "react";
import { render, screen } from "@testing-library/react";
import DeploymentStatus from "./DeploymentStatus";

describe("DeploymentStatus Component", () => {
    test("renders Deployment Status table", () => {
        render(<DeploymentStatus />);
        expect(screen.getByText(/Deployment Status/i)).toBeInTheDocument();
        expect(screen.getByText(/Application/i)).toBeInTheDocument();
    });

    test("displays deployment rows", () => {
        render(<DeploymentStatus />);
        expect(screen.getByText(/my-app-1/i)).toBeInTheDocument();
        expect(screen.getByText(/Running/i)).toBeInTheDocument();
        expect(screen.getByText(/2\/2/i)).toBeInTheDocument();
    });
});
