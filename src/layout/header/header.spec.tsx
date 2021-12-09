import * as React from 'react';
import TestRenderer, { ReactTestInstance, ReactTestRenderer } from 'react-test-renderer';
import { render, screen, fireEvent } from '@testing-library/react';
import { Header } from './header';
import { ReactNode, ReactElement, MouseEventHandler } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Autocomplete from '@mui/material/Autocomplete';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import '@testing-library/jest-dom/extend-expect';
import { MenuLableComponent, MenuComponents, MenuItemProps } from './menu-util';
import { AuthProps } from './auth-controller';



describe('Test header', () => {
    const options = [
        { label: 'The Godfather', id: 1 },
        { label: 'Pulp Fiction', id: 2 },
    ];
    const headerJsx: ReactElement = <Header searchAutoComplateList={...options} />;
    const testComponent: ReactTestRenderer = TestRenderer.create(headerJsx);
    const testComponentInstance = testComponent.root;

    it('should display header with default style', () => {
        const headerComponent: TestRenderer.ReactTestRendererJSON | TestRenderer.ReactTestRendererJSON[] | null = TestRenderer.create(headerJsx).toJSON();
        expect(headerComponent).toBeDefined();
        expect(headerComponent).toMatchSnapshot();
    })

    it('should display main bar', () => {
        expect(testComponentInstance.findByType(AppBar).props.position).toBe('fixed');
        expect(testComponentInstance.findByType(Toolbar)).toBeTruthy();
    })


    it('should display brand log', () => {
        expect(testComponentInstance.findByProps({ "size": "large", "edge": "start", "color": "inherit", "aria-label": "menu" }).props.children).toEqual(' logo ');
    })

})

describe('Test user authentication controller', () => {
    const headerJsx: ReactElement = <Header />;

    it('should display search bar', () => {
        render(headerJsx);
        expect(screen.getByTestId('header-search-fld')).toBeTruthy();
        expect(screen.getByTestId('search-btn')).toBeTruthy();
        expect(screen.getByTestId('search-btn')).toHaveTextContent('Search');

    })

    it('should display login button', () => {
        render(headerJsx);
        expect(screen.getByTestId('login-btn')).toBeTruthy();
        expect(screen.getByTestId('login-btn')).toHaveTextContent('Login');
    })

    it('should display logout button', () => {
        const testData: AuthProps = {
            userData: {
                id: '12313test12f3',
                name: 'kina'
            }
        };
        const headerJsx: ReactElement = <Header userData={testData.userData} />;
        render(headerJsx);
        expect(screen.getByTestId('logout-btn')).toBeTruthy();
        expect(screen.getByTestId('logout-btn')).toHaveTextContent('Logout');
    })

    // it('should display user account drop down for logged in user', ()=>{
    //     const { getByRole } = render(headerJsx);
    //     expect(getByRole('user-account-dpd')).toBeTruthy();
    // })

    // it('should display logged out button for logged in user', ()=>{
    //     const { getByRole } = render(headerJsx);
    //     expect(getByRole('user-account-dpd')).toBeTruthy();
    // })
})

describe('Test header Menu ', () => {
    const subMenueTestFun: MouseEventHandler = () => { }

    it('should display menu with 2 menu', () => {
        const menues: MenuItemProps[] = [
            { menuDetail: { id: 1, title: 'sub1', handler: subMenueTestFun } },
            { menuDetail: { id: 2, title: 'sub2', handler: subMenueTestFun } },
        ];
        const headerJsx: ReactElement = <Header menus={menues} />;
        const testComponent = TestRenderer.create(headerJsx);
        const testComponentInstance: ReactTestInstance = testComponent.root;
        const testMenuInstance = testComponentInstance.findByType(MenuComponents);
        expect(testMenuInstance).toBeTruthy();
        const testMenuInstances: ReactTestInstance[] = testComponentInstance.findAllByType(MenuLableComponent);
        expect(testMenuInstances.length).toBe(2);
    })

    it('should display menu with 1 menu without menu-item 1 menu with 3 menu-item', () => {
        const menue2ClickFun: MouseEventHandler = jest.fn();

        const submenu: MenuItemProps[] = [
            { menuDetail: { id: 1, title: 'sub-menu 1', handler: subMenueTestFun } },
            { menuDetail: { id: 2, title: 'sub-menu 2', handler: menue2ClickFun } },
            { menuDetail: { id: 3, title: 'sub-menu 3', handler: subMenueTestFun } },

        ]
        const menues: MenuItemProps[] = [
            { menuDetail: { id: 1, title: 'menu 1', handler: subMenueTestFun } },
            { menuDetail: { id: 2, title: 'menu 2', handler: subMenueTestFun, menuItems: submenu } },
        ];
        const headerJsx: ReactElement = <Header menus={menues} />;
        const { getByTestId } = render(headerJsx);
        const menuList: HTMLElement = getByTestId('menu-components');
        expect(menuList).toBeTruthy();
        const menu2Button: HTMLElement = getByTestId('menu-lbl-2');
        expect(menu2Button).toBeTruthy();
        fireEvent.click(menu2Button);
        const menu2SubItem: HTMLElement = getByTestId('menu-item-2-2');
        expect(menu2SubItem).toBeTruthy();
        fireEvent.click(menu2SubItem);
        expect(menue2ClickFun).toHaveBeenCalledTimes(1);
    })
})
