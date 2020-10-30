import React from 'react';

const CommonMenuConfig = {
	settings: {
		layout: {
			config: {}
		}
	},
	routes: [
		{
			path: '/apps/content/manage-content',
			component: React.lazy(() => import('./ManageContents'))
        }
        
	]
};

export default CommonMenuConfig;
