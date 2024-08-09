import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import {ContactComponent } from './contact.component';
import { MemoryRouter } from 'react-router-dom';


describe('About specs test', () => {
    it('renders the About component', () => {
        // Arrange
        render(
                <ContactComponent/>);
        
        // Act
        
        // Assert
        expect(screen.getByText('adolfozambranagilabert@gmail.com')).toBeInTheDocument();
    });
    
    it('calls handleClickExt when the button of mail is clicked', () => {
        // Arrange
        const handleClickExtMock = jest.fn();
        window.open = handleClickExtMock;
        render(<MemoryRouter>
            <ContactComponent/>
        </MemoryRouter>);
        
        // Act
        const buttonElement = screen.getByText('Phone: +34 656 915 603');
        fireEvent.click(buttonElement);
        
        // Assert
        expect(handleClickExtMock).toHaveBeenCalledWith("tel:656915603", '_blank');
      });

});