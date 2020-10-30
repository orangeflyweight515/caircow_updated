import React from 'react';

const CommonMenuConfig = {
	settings: {
		layout: {
			config: {}
		}
	},
	routes: [
		{
			path: '/apps/reports/manage-reports',
			component: React.lazy(() => import('./ManageReports'))
        }
        
	]
};

export default CommonMenuConfig;
