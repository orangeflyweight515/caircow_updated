import React from 'react';

const CommonMenuConfig = {
	settings: {
		layout: {
			config: {}
		}
	},
	routes: [
		{
			path: '/apps/contact-us/manage-contact-us',
			component: React.lazy(() => import('./ManageContactUs'))
        },
       
       
	]
};

export default CommonMenuConfig;