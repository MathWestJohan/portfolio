import { render, screen, within } from '@testing-library/react';
import PipelineOverview from './PipelineOverview';

describe('PipelineOverview Component', () => {
    test('renders Pipeline Overview section', () => {
        render(<PipelineOverview />);
        expect(screen.getByText(/Pipeline Overview/i)).toBeInTheDocument();
    });

    test('displays pipeline details', () => {
        render(<PipelineOverview />);
        const listItems = screen.getAllByRole('listitem');
        expect(listItems.length).toBe(5); // Total number of list items
        expect(listItems.some((item) => item.textContent.includes('Source Control: GitHub'))).toBe(true);
    });
});
