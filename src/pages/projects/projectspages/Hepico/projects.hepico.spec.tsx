import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { ProjectHepicoComponent } from './projects.hepico.component';
import { MemoryRouter } from 'react-router-dom';

describe('HepicoProject specs test', () => {
    it('renders the ProjectsHepico component', () => {
        // Arrange
        render(
            <MemoryRouter>
                <ProjectHepicoComponent />
            </MemoryRouter>
        );
        
        // Act        
        // Assert
        expect(screen.getByText('HÉPICO FEST')).toBeInTheDocument();
    });

    it('renders more than two images in the ProjectsHepico component', () => {
        // Arrange
        render(
            <MemoryRouter>
                <ProjectHepicoComponent />
            </MemoryRouter>
        );
    
        // Act
        const images = screen.getAllByRole('img');
    
        // Assert
        expect(images.length).toBeGreaterThan(2);
    });
});