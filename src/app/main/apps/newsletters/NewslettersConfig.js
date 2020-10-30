import React from 'react';

const CommonMenuConfig = {
	settings: {
		layout: {
			config: {}
		}
	},
	routes: [
		{
			path: '/apps/newsletters/manage-newsletters',
			component: React.lazy(() => import('./ManageNewsletters'))
        },
        {
            path: '/apps/newsletters/manage-newsletters-subscribers',
			component: React.lazy(() => import('./ManageNewslettersSubscribers'))
		}
       
	]
};

export default CommonMenuConfig;