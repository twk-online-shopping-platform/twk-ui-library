import * as React from 'react';
import { act, fireEvent, render, RenderResult, screen } from "@testing-library/react";
import { Button } from './Button';
import { ReactElement, ReactNode } from 'react';
import '@testing-library/jest-dom/extend-expect';

let component: ReactElement = <Button label='Click Me'/>;
const labelText: string = 'Click Me';
describe('Test Auth Webapp entry', function () {
    it('should render Button', ()=>{
        render(component);
        expect(screen.getByText(labelText, {exact: true})).toMatchSnapshot();
        expect(screen.getByRole('button')).toHaveTextContent(labelText);
    })
   
    test('test againest snapshot', () => {
        let testComponent!: RenderResult;
        let firstRender!: DocumentFragment;
        act(() =>{
            testComponent = render(component);  
            firstRender = testComponent.asFragment();
            fireEvent.click(testComponent.getByText(labelText))
        })
        expect(firstRender).toMatchSnapshot();
    });
});