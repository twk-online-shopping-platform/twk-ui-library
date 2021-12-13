import React, { ReactElement } from 'react';
import { storiesOf, addDecorator, ComponentMeta } from '@storybook/react';
import { muiTheme } from 'storybook-addon-material-ui';
import Header from './Header';
import { MenuItemProps } from './MenuUtil';
import { AuthProps } from './AuthController';

const subMenueTestFun = () => { }
const menue2ClickFun = () => {
  console.log('clicked');
}
const submenu: MenuItemProps[] = [
  { menuDetail: { id: 1, title: 'sub-menu 1', handler: subMenueTestFun } },
  { menuDetail: { id: 2, title: 'sub-menu 2', handler: menue2ClickFun } },
  { menuDetail: { id: 3, title: 'sub-menu 3', handler: subMenueTestFun } }
];
const menus: MenuItemProps[] = [
  { menuDetail: { id: 1, title: 'menu 1', handler: subMenueTestFun } },
  { menuDetail: { id: 2, title: 'menu 2', handler: subMenueTestFun, menuItems: submenu } }
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
  .add('MainHeader', () => (<Header search={{ searchFieldHandler: searchFeildChangeHanlder, submitHanlder: searchClickHanlder }}/>))
  .add('MainHeaderWithMenu', () => (<Header menus={menus} search={{ searchFieldHandler: searchFeildChangeHanlder, submitHanlder: searchClickHanlder }} />))
  .add('MainHeaderWithUser', () => (<Header menus={menus} userData={testData.userData} search={{ searchFieldHandler: searchFeildChangeHanlder, submitHanlder: searchClickHanlder }} />));