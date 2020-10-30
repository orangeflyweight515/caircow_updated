import React from 'react';

const CommonMenuConfig = {
	settings: {
		layout: {
			config: {}
		}
	},
	routes: [
		{
			path: '/apps/commission/manage-escrow-commission',
			component: React.lazy(() => import('./ManageEscrowCommission'))
        },
        {
            path: '/apps/commission/manage-services-commission',
			component: React.lazy(() => import('./ManageServicesCommission'))
		}
       
	]
};

export default CommonMenuConfig;