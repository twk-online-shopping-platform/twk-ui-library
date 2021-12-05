import * as React from 'react';
import TestRenderer, { ReactTestInstance, ReactTestRenderer } from 'react-test-renderer';
import { render, screen } from '@testing-library/react';
import { Header } from './header';
import { ReactNode, ReactElement } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Autocomplete from '@mui/material/Autocomplete';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';



describe('Test header',()=>{
    const headerJsx: ReactElement = <Header/>;

    it('should display header with default style', ()=>{
        const headerComponent: any = TestRenderer.create(headerJsx).toJSON();
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
        const testComponent: ReactTestRenderer = TestRenderer.create(headerJsx);
        const testComponentInstance = testComponent.root;
        expect(testComponentInstance.findByType(Autocomplete).props.options[0].label).toBe('The Godfather');
        expect(testComponentInstance.findByType(Button).props.variant).toBe('outlined');
        expect(testComponentInstance.findByType(Button).props.children).toEqual('Search');
    
    })

    it('should display brand log', ()=>{
        const testComponent: ReactTestRenderer = TestRenderer.create(headerJsx);
        const testComponentInstance = testComponent.root;
        expect(testComponentInstance.findByProps({"size":"large","edge":"start","color":"inherit","aria-label":"menu"}).props.children).toEqual(' logo ');
    })

    const subMenueTestFun: Function = ()=>{

    }

    it('should display menu with two menu-item',()=>{
        const menues:{ 'id': number , 'title': string, 'handler': Function }[] = [
            {id:1,title:'sub1',handler:subMenueTestFun},
            {id:2,title:'sub2',handler:subMenueTestFun},
        ];
        const headerJsx: ReactElement = <Header menuItems={menues}/>;
        const testComponent = TestRenderer.create(headerJsx);
        const testComponentInstance: ReactTestInstance = testComponent.root;
        const testMenuInstance = testComponentInstance.findByType(Menu);
        const testMenuItemInstance: ReactTestInstance[] = testComponentInstance.findAllByType(MenuItem);
        expect(testMenuItemInstance.length).toBe(2);
    })
  

    // it('should display log in button for logged out user', ()=>{
        
    // })

      // it('should display user account drop down for logged in user', ()=>{
    //     const { getByRole } = render(headerJsx);
    //     expect(getByRole('user-account-dpd')).toBeTruthy();
    // })

    // it('should display logged out button for logged in user', ()=>{
    //     const { getByRole } = render(headerJsx);
    //     expect(getByRole('user-account-dpd')).toBeTruthy();
    // })

    // it('should display header with primary style', ()=>{

    // })

    // it('should display header with secondary style', ()=>{

    // })
    
})