import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { ProjectNescafeComponent } from './projects.nescafe.component'; // Import updated to nescafe.component
import { MemoryRouter } from 'react-router-dom';

describe('NescafeProject specs test', () => { // Updated describe block
    it('renders the Nescafe component', () => { // Updated test name
        // Arrange
        render(
            <MemoryRouter>
                <ProjectNescafeComponent /> 
            </MemoryRouter>
        );
        
        // Act        
        // Assert
        expect(screen.getByText('NESCAFÉ PACKAGING')).toBeInTheDocument();
    });

    it('renders more than two images in the Nescafe component', () => { // Updated test name
        // Arrange
        render(
            <MemoryRouter>
                <ProjectNescafeComponent /> 
            </MemoryRouter>
        );
    
        // Act
        const images = screen.getAllByRole('img');
    
        // Assert
        expect(images.length).toBeGreaterThan(2);
    });
});