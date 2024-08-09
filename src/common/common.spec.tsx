import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import {Navbar } from './navbar';
import {Sign } from './sign';
import { MemoryRouter } from 'react-router-dom';


describe('Navbar specs test', () => {
    it('renders the Navbar component', () => {
        // Arrange
        render(<MemoryRouter>
                <Navbar/>
            </MemoryRouter>);
        
        // Act
        
        // Assert
        expect(screen.getByText('© Code by Adolfo Zambrana - 2024')).toBeInTheDocument();
    });
});


describe('sign specs test', () => {
    it('renders the Sign component', () => {
        // Arrange
        render(<MemoryRouter>
                <Sign/>
            </MemoryRouter>);
        
        // Act
        
        // Assert
        expect(screen.getByText('Confucio.')).toBeInTheDocument();
    });

    it('calls handleClickExt when the button of mail is clicked', () => {
        // Arrange
        const handleClickExtMock = jest.fn();
        window.open = handleClickExtMock;
        render(<MemoryRouter>
            <Sign/>
        </MemoryRouter>);
        
        // Act
        const buttonElement = screen.getByAltText('gh');
        fireEvent.click(buttonElement);
        
        // Assert
        expect(handleClickExtMock).toHaveBeenCalledWith("https://github.com/XkryGit", '_blank');
      });
});
