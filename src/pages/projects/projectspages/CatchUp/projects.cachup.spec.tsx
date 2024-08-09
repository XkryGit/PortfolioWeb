import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import {ProjectCatchupComponent } from './projects.catchup.component';
import { MemoryRouter } from 'react-router-dom';

describe('CachupProject specs test', () => {
    it('renders the CachupProjects component', () => {
        // Arrange
        render(
            <MemoryRouter>
                <ProjectCatchupComponent />
            </MemoryRouter>
        );
        
        // Act        
        // Assert
        expect(screen.getByText('CATCHUP MAGAZINE')).toBeInTheDocument();
    });

    it('renders more than two images in the CachupProjects component', () => {
        // Arrange
        render(
            <MemoryRouter>
                <ProjectCatchupComponent />
            </MemoryRouter>
        );
    
        // Act
        const images = screen.getAllByRole('img');
    
        // Assert
        expect(images.length).toBeGreaterThan(2);
    });
});