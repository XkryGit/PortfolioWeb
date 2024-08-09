import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import {ProjectAdidasComponent } from './projects.adidas.component';
import { MemoryRouter } from 'react-router-dom';


describe('AdidasProject specs test', () => {
    it('renders the ProjectAdidast component', () => {
        // Arrange
        render( <MemoryRouter>
            <ProjectAdidasComponent/>
        </MemoryRouter>
        );
        
        // Act
        
        // Assert
        expect(screen.getByText('HISTÓRICAS ADIDAS')).toBeInTheDocument();
    });
    it('renders more than two images in the ProjectAdidasComponent', () => {
        // Arrange
        render(
            <MemoryRouter>
                <ProjectAdidasComponent />
            </MemoryRouter>
        );
    
        // Act
        const images = screen.getAllByRole('img');
    
        // Assert
        expect(images.length).toBeGreaterThan(2);
    });
});