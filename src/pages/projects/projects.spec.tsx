import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import {ProjectsComponent } from './projects.component';
import { MemoryRouter } from 'react-router-dom';


describe('Projects specs test', () => {
    it('renders the Projects component', () => {
        // Arrange
        render( <MemoryRouter>
            <ProjectsComponent/>
        </MemoryRouter>
        );
        
        // Act
        
        // Assert
        expect(screen.getByAltText('hepico')).toBeInTheDocument();
    });

});