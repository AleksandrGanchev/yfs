import React from 'react';
import { componentsMenu, dashboardMenu, demoPages, layoutMenu } from '../menu';
import DashboardHeader from '../pages/common/Headers/DashboardHeader';
import DashboardBookingHeader from '../pages/common/Headers/DashboardBookingHeader';
import ProfilePageHeader from '../pages/common/Headers/ProfilePageHeader';
import ProductListHeader from '../pages/common/Headers/ProductListHeader';
import PageLayoutHeader from '../pages/common/Headers/PageLayoutHeader';
import ComponentsHeader from '../pages/common/Headers/ComponentsHeader';
import FormHeader from '../pages/common/Headers/FormHeader';
import ChartsHeader from '../pages/common/Headers/ChartsHeader';
import ContentHeader from '../pages/common/Headers/ContentHeader';
import UtilitiesHeader from '../pages/common/Headers/UtilitiesHeader';
import IconHeader from '../pages/common/Headers/IconHeader';
import DefaultHeader from '../pages/common/Headers/DefaultHeader';

const headers = [
	{ path: layoutMenu.pageLayout.subMenu.onlySubheader.path, element: null, exact: true },
	{ path: layoutMenu.pageLayout.subMenu.onlyContent.path, element: null, exact: true },
	{ path: layoutMenu.blank.path, element: null, exact: true },
	{ path: demoPages.login.path, element: null, exact: true },
	{ path: demoPages.signUp.path, element: null, exact: true },
	{ path: demoPages.forgotPassword.path, element: null, exact: true },
	{ path: demoPages.resetPassword.path, element: null, exact: true },
	{ path: demoPages.page404.path, element: null, exact: true },
	{ path: demoPages.knowledge.subMenu.grid.path, element: null, exact: true },
	{ path: dashboardMenu.dashboard.path, element: <DashboardHeader />, exact: true },
	{
		path: demoPages.projectManagement.subMenu.list.path,
		element: <DashboardHeader />,
		exact: true,
	},
	{ path: demoPages.pricingTable.path, element: <DashboardHeader />, exact: true },
	{
		path: `${demoPages.projectManagement.subMenu.itemID.path}/*`,
		element: <DashboardBookingHeader />,
		exact: true,
	},
	{
		path: demoPages.sales.subMenu.transactions.path,
		element: <ProfilePageHeader />,
		exact: true,
	},
	{
		path: demoPages.chat.subMenu.withListChat.path,
		element: <ProfilePageHeader />,
		exact: true,
	},
	{
		path: demoPages.chat.subMenu.onlyListChat.path,
		element: <ProfilePageHeader />,
		exact: true,
	},
	{
		path: `${demoPages.knowledge.subMenu.itemID.path}/:id`,
		element: <ProfilePageHeader />,
		exact: true,
	},
	{
		path: demoPages.crm.subMenu.dashboard.path,
		element: <ProfilePageHeader />,
		exact: true,
	},
	{
		path: demoPages.crm.subMenu.customersList.path,
		element: <ProfilePageHeader />,
		exact: true,
	},
	{
		path: `${demoPages.crm.subMenu.customerID.path}/:id`,
		element: <ProfilePageHeader />,
		exact: true,
	},
	{
		path: demoPages.sales.subMenu.salesList.path,
		element: <ProductListHeader />,
		exact: true,
	},
	{
		path: demoPages.sales.subMenu.productsGrid.path,
		element: <ProductListHeader />,
		exact: true,
	},
	{
		path: `${demoPages.sales.subMenu.productID.path}/:id`,
		element: <ProductListHeader />,
		exact: true,
	},
	{
		path: `${layoutMenu.asideTypes.path}/*`,
		element: <PageLayoutHeader />,
		exact: true,
	},
	{
		path: layoutMenu.pageLayout.subMenu.headerAndSubheader.path,
		element: <PageLayoutHeader />,
		exact: true,
	},
	{
		path: layoutMenu.pageLayout.subMenu.onlyHeader.path,
		element: <PageLayoutHeader />,
		exact: true,
	},
	{
		path: `${componentsMenu.components.path}/*`,
		element: <ComponentsHeader />,
	},
	{
		path: `${componentsMenu.forms.path}/*`,
		element: <FormHeader />,
	},
	{
		path: `${componentsMenu.charts.path}/*`,
		element: <ChartsHeader />,
	},
	{
		path: `${componentsMenu.content.path}/*`,
		element: <ContentHeader />,
	},
	{
		path: `${componentsMenu.utilities.path}/*`,
		element: <UtilitiesHeader />,
	},
	{
		path: `${componentsMenu.icons.path}/*`,
		element: <IconHeader />,
	},
	{
		path: `*`,
		element: <DefaultHeader />,
	},
];

export default headers;
