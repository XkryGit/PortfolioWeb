import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { ProjectIllustrationComponent } from './projects.illustration.component'; // Updated import
import { MemoryRouter } from 'react-router-dom';

describe('IllustrationProject specs test', () => { // Updated describe block
    it('renders the ProjectsIllustration component', () => { // Updated test name
        // Arrange
        render(
            <MemoryRouter>
                <ProjectIllustrationComponent /> 
            </MemoryRouter>
        );
        
        // Act        
        // Assert
        expect(screen.getByText('ILLUSTRATING WORDS')).toBeInTheDocument();
    });

    it('renders more than two images in the ProjectsIllustration component', () => { // Updated test name
        // Arrange
        render(
            <MemoryRouter>
                <ProjectIllustrationComponent /> 
            </MemoryRouter>
        );
    
        // Act
        const images = screen.getAllByRole('img');
    
        // Assert
        expect(images.length).toBeGreaterThan(2);
    });
});