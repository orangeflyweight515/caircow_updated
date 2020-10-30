import { authRoles } from 'app/auth';
import Login from '../../../components/Login';
import PasswordForm from '../../../components/Login/passwordform';
const LoginConfig = {
	settings: {
		layout: {
			config: {
				navbar: {
					display: false
				},
				toolbar: {
					display: false
				},
				footer: {
					display: false
				},
				leftSidePanel: {
					display: false
				},
				rightSidePanel: {
					display: false
				}
			}
		}
	},
	auth: authRoles.onlyGuest,
	routes: [
		{
			path: '/login',
			component: Login
		},
		{
			path:'/passwordform',
			component: PasswordForm
		}
	]
};

export default LoginConfig;
