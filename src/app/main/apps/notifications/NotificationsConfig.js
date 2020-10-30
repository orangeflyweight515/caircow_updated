import React from 'react';

const CommonMenuConfig = {
	settings: {
		layout: {
			config: {}
		}
	},
	routes: [
		{
			path: '/apps/notifications/manage-notifications',
			component: React.lazy(() => import('./ManageNotifications'))
        }
        
	]
};

export default CommonMenuConfig;
