import { render, screen } from '@testing-library/react';
import CICDStatus from './CICDStatus';

describe('CICDStatus Component', () => {
    test('renders CI/CD Pipeline Status section', () => {
        render(<CICDStatus />);
        expect(screen.getByText(/CI\/CD Pipeline Status/i)).toBeInTheDocument();
    });

    test('displays build information', () => {
        render(<CICDStatus />);
        const statusElements = screen.getAllByText(/Status/i, { selector: 'strong' });
        expect(statusElements.length).toBe(1); // Verify only one "Status" exists
        expect(screen.getByText(/Last Build/i)).toBeInTheDocument();
        expect(screen.getByText(/Build Duration/i)).toBeInTheDocument();
    });
});
