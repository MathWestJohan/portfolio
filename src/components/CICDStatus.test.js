import React from "react";
import { render, screen } from "@testing-library/react";
import CICDStatus from "./CICDStatus";

describe("CICDStatus Component", () => {
    test("renders CI/CD Pipeline Status section", () => {
        render(<CICDStatus />);
        expect(screen.getByText(/CI\/CD Pipeline Status/i)).toBeInTheDocument();
    });

    test("displays build information", () => {
        render(<CICDStatus />);
        expect(screen.getByText(/Last Build/i)).toBeInTheDocument();
        expect(screen.getByText(/Status/i)).toBeInTheDocument();
        expect(screen.getByText(/Build Duration/i)).toBeInTheDocument();
    });
});
