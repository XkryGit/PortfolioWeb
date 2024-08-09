import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import {AboutComponent } from './about.component';


describe('About specs test', () => {
    it('renders the About component', () => {
        // Arrange
        render(
                <AboutComponent/>);
        
        // Act
        
        // Assert
        expect(screen.getByText('My resume')).toBeInTheDocument();
    });

    it('calls handleClickExt when the button of mail is clicked', () => {
        // Arrange
        const handleClickExtMock = jest.fn();
        window.open = handleClickExtMock;
        render(
            <AboutComponent/>
        );
        
        // Act
        const buttonElement = screen.getByText('My resume');
        fireEvent.click(buttonElement);
        
        // Assert
        expect(handleClickExtMock).toHaveBeenCalledWith("https://xkrygit.github.io/PortfolioWeb/CurriculumAdolfo2024Eng.pdf", '_blank');
      });
});