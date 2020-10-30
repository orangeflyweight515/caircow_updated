import React from 'react';

const CommonMenuConfig = {
	settings: {
		layout: {
			config: {}
		}
	},
	routes: [
		{
			path: '/apps/Common-menu/changepassword',
			component: React.lazy(() => import('./ChangePassword'))
        },
        {
            path: '/apps/common-menu/maintenance',
            component: React.lazy(() => import('./Maintenance'))
        },
        {
            path: '/apps/common-menu/email-templates',
            component: React.lazy(() => import('./EmailTemplets'))
        }
	]
};

export default CommonMenuConfig;
