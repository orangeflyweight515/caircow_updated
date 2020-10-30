import React from 'react';

const CommonMenuConfig = {
	settings: {
		layout: {
			config: {}
		}
	},
	routes: [
		{
			path: '/apps/users/manage-user',
			component: React.lazy(() => import('./ManageUser'))
        },
        {
            path: '/apps/users/manage-subadmin',
            component: React.lazy(() => import('./ManageSubAdmin'))
        },
        
	]
};

export default CommonMenuConfig;
