import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { ProjectTourismComponent } from './projects.tourism.component'; // Updated import
import { MemoryRouter } from 'react-router-dom';

describe('TourismProject specs test', () => { // Updated describe block
    it('renders the Tourism component', () => { // Updated test name
        // Arrange
        render(
            <MemoryRouter>
                <ProjectTourismComponent /> 
            </MemoryRouter>
        );
        
        // Act        
        // Assert
        expect(screen.getByText('TOURISM PLATAFORM')).toBeInTheDocument();
    });

    it('renders more than two images in the Tourism component', () => { // Updated test name
        // Arrange
        render(
            <MemoryRouter>
                <ProjectTourismComponent /> 
            </MemoryRouter>
        );
    
        // Act
        const images = screen.getAllByRole('img');
    
        // Assert
        expect(images.length).toBeGreaterThan(2);
    });
});