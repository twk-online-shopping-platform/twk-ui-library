import * as React from 'react';
import * as renderer from 'react-test-renderer';
import TestRenderer from 'react-test-renderer';
import { render, screen } from '@testing-library/react';
import { Header } from './header';
import { ReactNode, ReactElement } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Autocomplete from '@mui/material/Autocomplete';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';



describe('Test header',()=>{
    const headerJsx: ReactElement = <Header/>;

    it('should display header with default style', ()=>{
        const headerComponent: any = renderer.create(headerJsx).toJSON();
        expect(headerComponent).toBeDefined();
        expect(headerComponent).toMatchSnapshot();
    })
    
    it('should display main bar', ()=>{
        const testComponent = TestRenderer.create(headerJsx);
        const testComponentInstance = testComponent.root;
        expect(testComponentInstance.findByType(AppBar).props.position).toBe('fixed');
        expect(testComponentInstance.findByType(Toolbar)).toBeTruthy();
    })

    it('should display search bar', ()=>{
        const options = [
            { label: 'The Godfather', id: 1 },
            { label: 'Pulp Fiction', id: 2 },
          ];
        const headerJsx: ReactElement = <Header searchAutoComplateList= { ...options }/>;
        const testComponent = TestRenderer.create(headerJsx);
        const testComponentInstance = testComponent.root;
        expect(testComponentInstance.findByType(Autocomplete).props.options[0].label).toBe('The Godfather');
        expect(testComponentInstance.findByType(Button).props.variant).toBe('contained');
        expect(testComponentInstance.findByType(Button).props.children).toEqual('Search');
    
    })

    it('should display brand log', ()=>{
        const testComponent = TestRenderer.create(headerJsx);
        const testComponentInstance = testComponent.root;
        expect(testComponentInstance.findByProps({"size":"large","edge":"start","color":"inherit","aria-label":"menu"}).props.children).toEqual(' logo ');
    })

    // it('should display user account drop down for logged in user', ()=>{
    //     const { getByRole } = render(headerJsx);
    //     expect(getByRole('user-account-dpd')).toBeTruthy();
    // })

    // it('should display logged out button for logged in user', ()=>{
    //     const { getByRole } = render(headerJsx);
    //     expect(getByRole('user-account-dpd')).toBeTruthy();
    // })

    // it('should display log in button for logged out user', ()=>{

    // })

    // it('should display header with primary style', ()=>{

    // })

    // it('should display header with secondary style', ()=>{

    // })
    
})