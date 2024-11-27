import React from "react";
import { render, screen } from "@testing-library/react";
import PipelineOverview from "./PipelineOverview";

describe("PipelineOverview Component", () => {
    test("renders Pipeline Overview section", () => {
        render(<PipelineOverview />);
        expect(screen.getByText(/Pipeline Overview/i)).toBeInTheDocument();
    });

    test("displays pipeline details", () => {
        render(<PipelineOverview />);
        expect(screen.getByText(/Source Control/i)).toBeInTheDocument();
        expect(screen.getByText(/GitHub/i)).toBeInTheDocument();
    });
});
