// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders HttpVault title', () => {
    render(<App />);
    const titleElement = screen.getByText(/HttpVault/i);
    expect(titleElement).toBeInTheDocument();
});
