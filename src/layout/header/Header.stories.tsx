import React, { ReactElement } from 'react';
import { storiesOf, addDecorator, ComponentMeta } from '@storybook/react';
import { muiTheme } from 'storybook-addon-material-ui';
import Header from './Header';
import { MenuItemProps } from './MenuUtil';

const subMenueTestFun = ()=>{}
const menue2ClickFun = ()=>{
  console.log('clicked');
}
const submenu: MenuItemProps[] = [
  { menuDetail: { id: 1, title: 'sub-menu 1', handler: subMenueTestFun } },
  { menuDetail: { id: 2, title: 'sub-menu 2', handler: menue2ClickFun } },
  { menuDetail: { id: 3, title: 'sub-menu 3', handler: subMenueTestFun } },

]
const menues: MenuItemProps[] = [
  { menuDetail: { id: 1, title: 'menu 1', handler: subMenueTestFun } },
  { menuDetail: { id: 2, title: 'menu 2', handler: subMenueTestFun, menuItems: submenu } },
];
const searchFieldChangeHanlder = (value: string) => {
  console.log('changed', value);
};

storiesOf('MaterialUI', module)
  .addDecorator(muiTheme())
  .add('MainHeader', () => (<Header searchFieldHandler={searchFieldChangeHanlder} />))
  .add('MainHeaderWithMenu', () => (<Header menus={menues} searchFieldHandler={searchFieldChangeHanlder} />));
