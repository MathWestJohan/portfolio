import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

describe('App Component', () => {
  test('renders without crashing', () => {
    render(<App />);
    expect(screen.getByText(/Portfolio Pipeline Project/i)).toBeInTheDocument();
  });

  test('renders Pipeline Overview by default', () => {
    render(<App />);
    const tabContent = screen.getByText(/Pipeline Overview/i, { selector: 'h2' });
    expect(tabContent).toBeInTheDocument();
  });

  test('switches to Deployment Status tab when clicked', () => {
    render(<App />);
    const deploymentTab = screen.getByText(/Deployment Status/i, { selector: 'button' });
    fireEvent.click(deploymentTab);
    const tabContent = screen.getByText(/Deployment Status/i, { selector: 'h2' });
    expect(tabContent).toBeInTheDocument();
  });
});
