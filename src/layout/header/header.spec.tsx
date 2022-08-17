import * as React from 'react';
import TestRenderer, { ReactTestInstance, ReactTestRenderer, act} from 'react-test-renderer';
import { render, screen, fireEvent, createEvent } from '@testing-library/react';
import Header from './Header';
import { ReactElement, MouseEventHandler } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import '@testing-library/jest-dom/extend-expect';
import { MenuLableComponent, MenuComponents, MenuItemProps } from './MenuUtil';
import { AuthProps } from './AuthController';
import userEvent from '@testing-library/user-event';
import { Button } from '@mui/material';


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
        expect(testComponentInstance.findAllByType(Toolbar)).toHaveLength(1);
        expect(testComponentInstance.children
    })


    it('should display brand log', () => {
        expect(testComponentInstance.findByProps({ "size": "large", "edge": "start", "color": "inherit", "aria-label": "menu" }).props.children).toEqual(' logo ');
    })

})

describe('Test User Authentication Controller and Search Field', () => {


    it('should display search bar', () => {
        const searchFieldChangeHanlder = jest.fn();
        const searchClickHanlder = jest.fn();
        const headerJsx: ReactElement = <Header search={{ searchFieldHandler: searchFieldChangeHanlder, submitHanlder: searchClickHanlder }} />;
        render(headerJsx);
        const searchField: HTMLInputElement = screen.getByPlaceholderText('search')
        expect(searchField).toBeTruthy();
        expect(searchField).toHaveValue('');
        const testText: string = 'search test value';
        fireEvent.change(searchField, { target: { value: testText } });
        expect(searchFieldChangeHanlder).toHaveBeenCalledTimes(1);
        expect(searchField).toHaveValue(testText);
        const searchBtn: HTMLElement = screen.getByTestId('search-btn');
        expect(searchBtn).toBeTruthy();
        expect(searchBtn).toHaveTextContent('Search');
        fireEvent.click(searchBtn);
        expect(searchClickHanlder).toBeCalledTimes(1);

    })

    it('should display login button', () => {
        const headerJsx: ReactElement = <Header />;
        render(headerJsx);
        expect(screen.getByTestId('login-btn')).toBeTruthy();
        expect(screen.getByTestId('login-btn')).toHaveTextContent('Login');
    })

    it('should display user account drop down for logged in user', () => {
        const testData: AuthProps = {
            userData: {
                id: '12313test12f3',
                name: 'kina'
            }
        };
        const headerJsx: ReactElement = <Header userData={testData.userData} />;
        render(headerJsx);
        const accountBtn: HTMLElement = screen.getByTestId('user-account-btn');
        expect(accountBtn).toBeTruthy();
        fireEvent.click(accountBtn);
        expect(screen.getByTestId('user-account-dpd')).toBeTruthy();
        expect(screen.getByTestId('user-account-avt')).toBeTruthy();
        expect(screen.getByTestId('logout-btn')).toBeTruthy();
    })
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

    it('should display menu with 1 menu without menu-item 1 menu with 3 menu-item', async () => {
        const logText: string = 'menue2ClickFun was called';
        const menue2ClickFun: jest.Mock = jest.fn(() => {
            console.log(logText);
        });
        const submenu: MenuItemProps[] = [
            { menuDetail: { id: 1, title: 'sub-menu 1', handler: subMenueTestFun } },
            { menuDetail: { id: 2, title: 'sub-menu 2', handler:  menue2ClickFun } },
            { menuDetail: { id: 3, title: 'sub-menu 3', handler: subMenueTestFun } },

        ]
        const menues: MenuItemProps[] = [
            { menuDetail: { id: 1, title: 'menu 1', handler: subMenueTestFun } },
            { menuDetail: { id: 2, title: 'menu 2', handler: subMenueTestFun, menuItems: submenu } },
        ];
        const headerJsx: ReactElement = <Header menus={...menues} />;
        render(headerJsx);
        const menuList: HTMLElement = screen.getByTestId('menu-components');
        expect(menuList).toBeTruthy();
        const menu2Button: HTMLElement = screen.getByTestId('menu-lbl-2');
        expect(menu2Button).toBeTruthy();
        await fireEvent.click(menu2Button);
        const menu2SubItem: HTMLElement = screen.getByTestId('menu-item-2-2');
        expect(menu2SubItem).toBeTruthy();
        expect(menu2SubItem).toBeVisible();
        headerJsx.props.menus[1].menuDetail.menuItems[1].menuDetail.handler(); // to-do better to be handled by fireEvent or userEvent
        await expect(menue2ClickFun).toHaveBeenCalledTimes(1);
    })
})