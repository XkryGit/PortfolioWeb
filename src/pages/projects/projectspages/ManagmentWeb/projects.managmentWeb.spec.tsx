import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { ProjectManagmentWebComponent } from './projects.managmentWeb.component'; // Updated import
import { MemoryRouter } from 'react-router-dom';

describe('ManagmentWebProject specs test', () => { // Updated describe block
    it('renders the ManagmentWeb component', () => { // Updated test name
        // Arrange
        render(
            <MemoryRouter>
                <ProjectManagmentWebComponent /> 
            </MemoryRouter>
        );
        
        // Act        
        // Assert
        expect(screen.getByText('Blink Galaxy Managment Web')).toBeInTheDocument();
    });

    it('renders more than two images in the ManagmentWeb component', () => { // Updated test name
        // Arrange
        render(
            <MemoryRouter>
                <ProjectManagmentWebComponent /> 
            </MemoryRouter>
        );
    
        // Act
        const images = screen.getAllByRole('img');
    
        // Assert
        expect(images.length).toBeGreaterThan(2);
    });
});