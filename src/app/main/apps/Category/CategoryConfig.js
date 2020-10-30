import React from 'react';

const CommonMenuConfig = {
	settings: {
		layout: {
			config: {}
		}
	},
	routes: [
		{
			path: '/apps/categories/manage-category',
			component: React.lazy(() => import('./ManageCategory'))
        },
        {
            path: '/apps/categories/manage-sub-category',
            component: React.lazy(() => import('./ManageSubCategory'))
        }
        
	]
};

export default CommonMenuConfig;
