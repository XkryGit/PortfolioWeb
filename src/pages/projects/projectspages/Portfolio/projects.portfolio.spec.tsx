import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { ProjectPortfolioComponent} from './projects.portfolio.component'; // Updated import
import { MemoryRouter } from 'react-router-dom';

describe('PortfolioProject specs test', () => { // Updated describe block
    it('renders the Portfolio component', () => { // Updated test name
        // Arrange
        render(
            <MemoryRouter>
                <ProjectPortfolioComponent /> 
            </MemoryRouter>
        );
        
        // Act        
        // Assert
        expect(screen.getByText('PORTFOLIO WEB DESIGN')).toBeInTheDocument();
    });

    it('renders more than two images in the Portfolio component', () => { // Updated test name
        // Arrange
        render(
            <MemoryRouter>
                <ProjectPortfolioComponent /> 
            </MemoryRouter>
        );
    
        // Act
        const images = screen.getAllByRole('img');
    
        // Assert
        expect(images.length).toBeGreaterThan(2);
    });
});