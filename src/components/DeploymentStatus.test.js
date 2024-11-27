import { render, screen } from '@testing-library/react';
import DeploymentStatus from './DeploymentStatus';

describe('DeploymentStatus Component', () => {
    test('renders Deployment Status table', () => {
        render(<DeploymentStatus />);
        expect(screen.getByText(/Deployment Status/i)).toBeInTheDocument();
        expect(screen.getByText(/Application/i)).toBeInTheDocument();
    });

    test('displays deployment rows', () => {
        render(<DeploymentStatus />);
        const runningStatuses = screen.getAllByText(/Running/i);
        expect(runningStatuses.length).toBe(2); // Ensure two rows have "Running"
        expect(screen.getByText(/my-app-1/i)).toBeInTheDocument();
        expect(screen.getByText(/2\/2/i)).toBeInTheDocument();
    });
});
