import React from 'react';

const CommonMenuConfig = {
	settings: {
		layout: {
			config: {}
		}
	},
	routes: [
		{
			path: '/apps/services/manage-services',
			component: React.lazy(() => import('./ManageServices'))
        },
        {
            path: '/apps/services/manage-disputed-services',
            component: React.lazy(() => import('./ManageDisputedServices'))
        },
        {
            path: '/apps/services/manage-services-order',
            component: React.lazy(() => import('./ManageServicesOrder'))
        }
	]
};

export default CommonMenuConfig;
