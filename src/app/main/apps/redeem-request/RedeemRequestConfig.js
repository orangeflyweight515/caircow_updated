import React from 'react';

const CommonMenuConfig = {
	settings: {
		layout: {
			config: {}
		}
	},
	routes: [
		{
			path: '/apps/redeem-request/manage-redeem-request',
			component: React.lazy(() => import('./ManageRedeemRequest'))
        }
        
	]
};

export default CommonMenuConfig;
