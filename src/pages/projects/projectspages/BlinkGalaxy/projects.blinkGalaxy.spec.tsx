import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { ProjectBlinkGalaxyComponent } from './projects.blinkGalaxy.component';
import { MemoryRouter } from 'react-router-dom';

describe('BlinkGalaxyProject specs test', () => {
    it('renders the ProjectBlinkGalaxy component', () => {
        // Arrange
        render(
            <MemoryRouter>
                <ProjectBlinkGalaxyComponent />
            </MemoryRouter>
        );
        
        // Act
        
        // Assert
        expect(screen.getByText('Blink Galaxy Web')).toBeInTheDocument();
    });

    it('renders more than two images in the ProjectBlinkGalaxy component', () => {
        // Arrange
        render(
            <MemoryRouter>
                <ProjectBlinkGalaxyComponent />
            </MemoryRouter>
        );
    
        // Act
        const images = screen.getAllByRole('img');
    
        // Assert
        expect(images.length).toBeGreaterThan(2);
    });
});