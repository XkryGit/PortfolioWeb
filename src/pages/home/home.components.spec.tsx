import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import {HomeStartComponent } from './home.start.component';
import {HomePresentComponent } from './home.present.component';
import {HomeProjectsComponent } from './home.projects.component';
import {HomeContactComponent } from './home.contact.component';
import { MemoryRouter, useNavigate } from 'react-router-dom'


jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: jest.fn(),
}));


describe('HomeStartComponent specs test', () => {
    it('renders the HomeStartComponent', () => {
        // Arrange
        render(<HomeStartComponent />);
        
        // Act
        
        // Assert
        expect(screen.getByText('Adolfo Zambrana')).toBeInTheDocument();
    });
});

describe('HomePresentComponent specs test', () => {
    it('renders the HomePresentComponent', () => {
        // Arrange
        render(<HomePresentComponent />);
        
        // Act
        
        // Assert
        expect(screen.getByText('Hi, nice to meet you')).toBeInTheDocument();
    });
});

describe('HomeProjectsComponent specs test', () => {
    it('renders the HomeProjectsComponent', () => {
        // Arrange
        render(
            <MemoryRouter>
                <HomeProjectsComponent />
            </MemoryRouter>
        );
        
        // Act
        
        // Assert
        expect(screen.getByText('My recent Works')).toBeInTheDocument();
    });

    it('renders a list of elements within HomeProjectsComponent', () => {
        // Arrange
        render(
            <MemoryRouter>
                <HomeProjectsComponent />
            </MemoryRouter>
        );

        // Act

        // Assert
        const projectElements = screen.getAllByRole('listitem');
        expect(projectElements.length).toBeGreaterThan(0);
    });
    it('triggers navigation event when image is clicked', () => {
        // Arrange
        const navigate = jest.fn();
        (useNavigate as jest.Mock).mockReturnValue(navigate);
    
        render(
          <MemoryRouter>
            <HomeProjectsComponent />
          </MemoryRouter>
        );
    
        // Act
        const buttonElement = screen.getByTestId('blinkgalaxy');
        fireEvent.click(buttonElement);
    
        // Assert
        expect(navigate).toHaveBeenCalledWith('/projects/blinkgalaxy');
      });

    describe('HomeContactComponent specs test', () => {
        it('renders the HomeContactComponent', () => {
            // Arrange
            render(<HomeContactComponent />);
            
            // Act
            
            // Assert
            expect(screen.getByText('Contact me')).toBeInTheDocument();
        });
        it('calls handleClickExt when the button of mail is clicked', () => {
            // Arrange
            const handleClickExtMock = jest.fn();
            window.open = handleClickExtMock;
            render(<HomeContactComponent />);
            
            // Act
            const buttonElement = screen.getByText('adolfozambranagilabert@gmail.com');
            fireEvent.click(buttonElement);
            
            // Assert
            expect(handleClickExtMock).toHaveBeenCalledWith('mailto:adolfozambranagilabert@gmail.com', '_blank');
          });
    
        it('calls handleClickExt when the button of call is clicked', () => {
            // Arrange
            const handleClickExtMock = jest.fn();
            window.open = handleClickExtMock;
            render(<HomeContactComponent />);
            
            // Act
            const buttonElement = screen.getByText('Phone: +34 656 915 603');
            fireEvent.click(buttonElement);
            
            // Assert
            expect(handleClickExtMock).toHaveBeenCalledWith('tel:656915603', '_blank');
          });
    });
    
})

