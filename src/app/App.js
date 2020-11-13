import MomentUtils from '@date-io/moment';
import '@fake-db';
import FuseAuthorization from '@fuse/core/FuseAuthorization';
import FuseLayout from '@fuse/core/FuseLayout';
import FuseTheme from '@fuse/core/FuseTheme';
import history from '@history';
import { createGenerateClassName, jssPreset, StylesProvider } from '@material-ui/core/styles';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import { create } from 'jss';
import jssExtend from 'jss-plugin-extend';
import rtl from 'jss-rtl';
import React from 'react';
import Provider from 'react-redux/es/components/Provider';
import { BrowserRouter as Router , Route , Redirect} from 'react-router-dom';
import AppContext from './AppContext';
import { Auth } from './auth';
import routes from './fuse-configs/routesConfig';
import store from './store';
import Dashboard from '../components/dashboard'
import PasswordForm from '../components/Login/passwordform';

import Login from '../components/Login';
const jss = create({
	...jssPreset(),
	plugins: [...jssPreset().plugins, jssExtend(), rtl()],
	insertionPoint: document.getElementById('jss-insertion-point')
});


const generateClassName = createGenerateClassName();
const checkAuth=()=>{
	if (localStorage.getItem("loggedin")){
		return true
	}
	else{
		return false
	}
}
const App = () => {
	return (
		<Router>
			<Route exact path="/" render={()=>(
				checkAuth()?<Dashboard />:<Redirect to="/login"/>
			)}/>
			<Route exact path="/login" render={()=>(
				!checkAuth()?<Login />:<Redirect to="/"/>
			)}/> 
			<Route exact path="/password" render={()=>(
				!checkAuth()?<PasswordForm />:<Redirect to="/"/>
			)}/>
		</Router>
	);
};

export default App;
{/* <AppContext.Provider
			value={{
				routes
			}}
		>
			<StylesProvider jss={jss} generateClassName={generateClassName}>
				<Provider store={store}>
					<MuiPickersUtilsProvider utils={MomentUtils}>
						<Auth>
							<Router history={history}>
								<FuseAuthorization>
									<FuseTheme>
										<FuseLayout />
									</FuseTheme>
								</FuseAuthorization>
							</Router>
						</Auth>
					</MuiPickersUtilsProvider>
				</Provider>
			</StylesProvider>
		</AppContext.Provider> */}