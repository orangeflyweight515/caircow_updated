import React from 'react';

const CommonMenuConfig = {
	settings: {
		layout: {
			config: {}
		}
	},
	routes: [
		{
			path: '/apps/jobs/manage-jobs',
			component: React.lazy(() => import('./ManageJobs'))
        },
        {
            path: '/apps/jobs/manage-disputed-jobs',
            component: React.lazy(() => import('./ManageDisputedJobs'))
        },
        {
            path: '/apps/jobs/manage-questions',
            component: React.lazy(() => import('./ManageQuestions'))
        }
	]
};

export default CommonMenuConfig;