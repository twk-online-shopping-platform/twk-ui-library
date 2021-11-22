import * as React from 'react';
import { act, fireEvent, render, RenderResult, screen } from "@testing-library/react";
import { Button } from './Button';
import { ReactElement, ReactNode } from 'react';
import '@testing-library/jest-dom/extend-expect';

const labelText: string = 'Click Me';
describe('Test Auth Webapp entry', function () {
    it('should display Button with default value', ()=>{
        const component: ReactElement = <Button label='Click Me'/>;
        render(component);
        expect(screen.getByText(labelText, {exact: true})).toMatchSnapshot();
        expect(screen.getByRole('button')).toHaveTextContent(labelText);
    })
    
    it('should display Button with text color and background color', ()=>{
        const component: ReactElement = <Button label='Click Me2' txtColor='red' bgColor='white'/>;
        render(component);
        expect(screen.getByText('Click Me2')).toBeInTheDocument();
        expect(screen.getByText('Click Me2')).toHaveClass('open-proj-btn-white');
        expect(screen.getByText('Click Me2')).toHaveClass('open-proj-txt-red');

    })
   

});