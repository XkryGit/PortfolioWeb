import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { ProjectMarketplaceComponent } from './projects.marketplace.component'; // Updated import
import { MemoryRouter } from 'react-router-dom';

describe('MarketplaceProject specs test', () => { // Updated describe block
    it('renders the Marketplace component', () => { // Updated test name
        // Arrange
        render(
            <MemoryRouter>
                <ProjectMarketplaceComponent /> 
            </MemoryRouter>
        );
        
        // Act        
        // Assert
        expect(screen.getByText('MARKETPLACE DESIGN')).toBeInTheDocument();
    });

    it('renders more than two images in the Marketplace component', () => { // Updated test name
        // Arrange
        render(
            <MemoryRouter>
                <ProjectMarketplaceComponent /> 
            </MemoryRouter>
        );
    
        // Act
        const images = screen.getAllByRole('img');
    
        // Assert
        expect(images.length).toBeGreaterThan(2);
    });
});