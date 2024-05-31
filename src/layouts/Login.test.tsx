import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Login from './Login';

describe('App', () => {
    it('renders the Login component', () => {
        render(
            <MemoryRouter>
                <Login />
            </MemoryRouter>,
        );

        screen.debug(); // prints out the jsx in the App component unto the command line
    });
});
