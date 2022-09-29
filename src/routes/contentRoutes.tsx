import React, { lazy } from 'react';
import { dashboardMenu, demoPages, layoutMenu } from '../menu';
import ForgotPassword from '../pages/presentation/auth/ForgotPassword';
import Login from '../pages/presentation/auth/Login';
import ResetPassword from '../pages/presentation/auth/ResetPassword';

const LANDING = {
	DASHBOARD: lazy(() => import('../pages/dashboard/DashboardPage')),
};
const PRICING = {
	PRICING_TABLE: lazy(() => import('../pages/presentation/pricing/PricingTablePage')),
};

const AUTH = {
	PAGE_404: lazy(() => import('../pages/presentation/auth/Page404')),
};
const APP = {
	PROJECT_MANAGEMENT: {
		PROJECTS_LIST: lazy(
			() => import('../pages/presentation/project-management/ProjectManagementsList'),
		),
		PROJECT: lazy(
			() => import('../pages/presentation/project-management/ProjectManagementsProject'),
		),
	},
	KNOWLEDGE: {
		GRID: lazy(() => import('../pages/presentation/knowledge/KnowledgeGridPage')),
		VIEW: lazy(() => import('../pages/presentation/knowledge/KnowledgeViewPage')),
	},
	SALES: {
		TRANSACTIONS: lazy(() => import('../pages/presentation/sales/TransActionsPage')),
		PRODUCTS: lazy(() => import('../pages/presentation/sales/SalesListPage')),
		PRODUCTS_GRID: lazy(() => import('../pages/presentation/sales/ProductsGridPage')),
		PRODUCTS_VIEW: lazy(() => import('../pages/presentation/sales/ProductViewPage')),
	},
	APPOINTMENT: {
		EMPLOYEE_LIST: lazy(() => import('../pages/presentation/appointment/EmployeeList')),
		EMPLOYEE_VIEW: lazy(() => import('../pages/presentation/appointment/EmployeePage')),
		APPOINTMENT_LIST: lazy(() => import('../pages/presentation/appointment/AppointmentList')),
	},
	CRM: {
		CRM_DASHBOARD: lazy(() => import('../pages/presentation/crm/CrmDashboard')),
		CUSTOMERS: lazy(() => import('../pages/presentation/crm/CustomersList')),
		CUSTOMER: lazy(() => import('../pages/presentation/crm/Customer')),
	},
	CHAT: {
		WITH_LIST: lazy(() => import('../pages/presentation/chat/WithListChatPage')),
		ONLY_LIST: lazy(() => import('../pages/presentation/chat/OnlyListChatPage')),
	},
};
const PAGE_LAYOUTS = {
	HEADER_SUBHEADER: lazy(() => import('../pages/presentation/page-layouts/HeaderAndSubheader')),
	HEADER: lazy(() => import('../pages/presentation/page-layouts/OnlyHeader')),
	SUBHEADER: lazy(() => import('../pages/presentation/page-layouts/OnlySubheader')),
	CONTENT: lazy(() => import('../pages/presentation/page-layouts/OnlyContent')),
	BLANK: lazy(() => import('../pages/presentation/page-layouts/Blank')),
	ASIDE: lazy(() => import('../pages/presentation/aside-types/DefaultAsidePage')),
	MINIMIZE_ASIDE: lazy(() => import('../pages/presentation/aside-types/MinimizeAsidePage')),
};

const presentation = [
	/**
	 * Landing
	 */
	{
		path: dashboardMenu.dashboard.path,
		element: <LANDING.DASHBOARD />,
		exact: true,
	},

	/** ************************************************** */

	/**
	 * Pages
	 */
	/**
	 * Edit
	 */
	{
		path: demoPages.pricingTable.path,
		element: <PRICING.PRICING_TABLE />,
		exact: true,
	},

	/**
	 * END - Pages
	 */

	/**
	 * Auth Page
	 */
	{
		path: demoPages.page404.path,
		element: <AUTH.PAGE_404 />,
		exact: true,
	},
	{
		path: demoPages.login.path,
		element: <Login />,
		exact: true,
	},
	{
		path: demoPages.signUp.path,
		element: <Login isSignUp />,
		exact: true,
	},
	{
		path: demoPages.resetPassword.path,
		element: <ResetPassword />,
		exact: true,
	},
	{
		path: demoPages.forgotPassword.path,
		element: <ForgotPassword />,
		exact: true,
	},

	/**
	 * App
	 */

	/**
	 * App > Project Management
	 */
	{
		path: demoPages.projectManagement.subMenu.list.path,
		element: <APP.PROJECT_MANAGEMENT.PROJECTS_LIST />,
		exact: true,
	},
	{
		path: `${demoPages.projectManagement.subMenu.itemID.path}/:id`,
		element: <APP.PROJECT_MANAGEMENT.PROJECT />,
		exact: true,
	},

	/**
	 * App > Knowledge
	 */
	{
		path: demoPages.knowledge.subMenu.grid.path,
		element: <APP.KNOWLEDGE.GRID />,
		exact: true,
	},
	{
		path: `${demoPages.knowledge.subMenu.itemID.path}/:id`,
		element: <APP.KNOWLEDGE.VIEW />,
		exact: true,
	},

	/**
	 * App > Sales
	 */
	{
		path: demoPages.sales.subMenu.transactions.path,
		element: <APP.SALES.TRANSACTIONS />,
		exact: true,
	},
	{
		path: demoPages.sales.subMenu.salesList.path,
		element: <APP.SALES.PRODUCTS />,
		exact: true,
	},
	{
		path: demoPages.sales.subMenu.productsGrid.path,
		element: <APP.SALES.PRODUCTS_GRID />,
		exact: true,
	},
	{
		path: `${demoPages.sales.subMenu.productID.path}/:id`,
		element: <APP.SALES.PRODUCTS_VIEW />,
		exact: true,
	},

	/**
	 * App > Appointment
	 */
	{
		path: demoPages.appointment.subMenu.employeeList.path,
		element: <APP.APPOINTMENT.EMPLOYEE_LIST />,
		exact: true,
	},
	{
		path: `${demoPages.appointment.subMenu.employeeID.path}/:id`,
		element: <APP.APPOINTMENT.EMPLOYEE_VIEW />,
		exact: true,
	},
	{
		path: demoPages.appointment.subMenu.appointmentList.path,
		element: <APP.APPOINTMENT.APPOINTMENT_LIST />,
		exact: true,
	},

	/**
	 * App > CRM
	 */
	{
		path: demoPages.crm.subMenu.dashboard.path,
		element: <APP.CRM.CRM_DASHBOARD />,
		exact: true,
	},
	{
		path: demoPages.crm.subMenu.customersList.path,
		element: <APP.CRM.CUSTOMERS />,
		exact: true,
	},
	{
		path: `${demoPages.crm.subMenu.customerID.path}/:id`,
		element: <APP.CRM.CUSTOMER />,
		exact: true,
	},

	/**
	 * App > Chat
	 */
	{
		path: demoPages.chat.subMenu.withListChat.path,
		element: <APP.CHAT.WITH_LIST />,
		exact: true,
	},
	{
		path: demoPages.chat.subMenu.onlyListChat.path,
		element: <APP.CHAT.ONLY_LIST />,
		exact: true,
	},

	/**
	 * END - App
	 */

	/** ************************************************** */

	/**
	 * Page Layout Types
	 */
	{
		path: layoutMenu.blank.path,
		element: <PAGE_LAYOUTS.BLANK />,
		exact: true,
	},
	{
		path: layoutMenu.pageLayout.subMenu.headerAndSubheader.path,
		element: <PAGE_LAYOUTS.HEADER_SUBHEADER />,
		exact: true,
	},
	{
		path: layoutMenu.pageLayout.subMenu.onlyHeader.path,
		element: <PAGE_LAYOUTS.HEADER />,
		exact: true,
	},
	{
		path: layoutMenu.pageLayout.subMenu.onlySubheader.path,
		element: <PAGE_LAYOUTS.SUBHEADER />,
		exact: true,
	},
	{
		path: layoutMenu.pageLayout.subMenu.onlyContent.path,
		element: <PAGE_LAYOUTS.CONTENT />,
		exact: true,
	},
	{
		path: layoutMenu.asideTypes.subMenu.defaultAside.path,
		element: <PAGE_LAYOUTS.ASIDE />,
		exact: true,
	},
	{
		path: layoutMenu.asideTypes.subMenu.minimizeAside.path,
		element: <PAGE_LAYOUTS.MINIMIZE_ASIDE />,
		exact: true,
	},
];
const contents = [...presentation];

export default contents;
