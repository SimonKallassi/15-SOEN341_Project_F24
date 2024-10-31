import { render, screen } from '@testing-library/react';
import MyApp from '../pages/_app';
import '@testing-library/jest-dom';

test("Renders header with navigation links", () => {
    render(<MyApp Component={() => <div />} pageProps={{}} />);
    expect(screen.getByText("Home")).toBeInTheDocument();
    expect(screen.getByText("Login")).toBeInTheDocument();
});