import React, { ReactElement } from 'react';
import { storiesOf, addDecorator, ComponentMeta } from '@storybook/react';
import { muiTheme } from 'storybook-addon-material-ui';
import Header from './Header';
import { MenuItemProps } from './MenuUtil';
import { AuthProps } from './AuthController';
import { blue, common, yellow } from '@mui/material/colors';

const subMenueTestFun = () => { }
const menue2ClickFun = () => {
  console.log('clicked');
}
const submenu: MenuItemProps[] = [
  { menuDetail: { id: 1, title: 'sub-menu 2-1', handler: subMenueTestFun } },
  { menuDetail: { id: 2, title: 'sub-menu 2-2', handler: menue2ClickFun } },
  { menuDetail: { id: 3, title: 'sub-menu 2-3', handler: subMenueTestFun } }
];
const submenu2: MenuItemProps[] = [
  { menuDetail: { id: 1, title: 'sub-menu 4-1', handler: subMenueTestFun } },
  { menuDetail: { id: 2, title: 'sub-menu 4-2', handler: menue2ClickFun } },
  { menuDetail: { id: 3, title: 'sub-menu 4-3', handler: subMenueTestFun } }
];
const menus: MenuItemProps[] = [
  { menuDetail: { id: 1, title: 'menu 1', handler: subMenueTestFun } },
  { menuDetail: { id: 2, title: 'menu 2', handler: subMenueTestFun, menuItems: submenu } },
  { menuDetail: { id: 3, title: 'menu 3', handler: subMenueTestFun } },
  { menuDetail: { id: 4, title: 'menu 4', handler: subMenueTestFun, menuItems: submenu2 } },

];
const searchFeildChangeHanlder: (value: string) => void = (value: string) => {
  console.log('changed', value);
};
const searchClickHanlder: (value: string) => void = (value: string) => {
  console.log('clicked', value);
};

const testData: AuthProps = {
  userData: {
    id: '12313test12f3',
    name: 'kina'
  }
};




storiesOf('HeaderStory', module)
  .addDecorator(muiTheme())
  .add('MainHeader', () => (
    <Header search={{ searchFieldHandler: searchFeildChangeHanlder, submitHanlder: searchClickHanlder }} />
  ))
  .add('MainHeaderWithMenu', () => (
    <Header menus={menus} search={{ searchFieldHandler: searchFeildChangeHanlder, submitHanlder: searchClickHanlder }} />
  )).add('MainHeaderWithUser', () => (
    <Header menus={menus} userData={testData.userData} search={{ searchFieldHandler: searchFeildChangeHanlder, submitHanlder: searchClickHanlder }} />
  ));