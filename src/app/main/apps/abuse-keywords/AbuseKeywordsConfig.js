import React from 'react';

const CommonMenuConfig = {
	settings: {
		layout: {
			config: {}
		}
	},
	routes: [
		{
			path: '/apps/abuse-keywords/manage-abuse-keywords',
			component: React.lazy(() => import('./ManageAbuseKeywords'))
        }
        
	]
};

export default CommonMenuConfig;
