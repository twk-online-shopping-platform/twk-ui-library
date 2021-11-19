import * as React from 'react';
import { render, screen } from "@testing-library/react";
import { Button } from './Button';


describe('Test Auth Webapp entry', function () {
    test('test againest snapshot', () => {
        render(<Button primary={true} label='Button'/>);
       expect(screen.getByText("Button")).toBeDefined();
    });
});