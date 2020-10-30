import React from 'react';

const CommonMenuConfig = {
	settings: {
		layout: {
			config: {}
		}
	},
	routes: [
		{
			path: '/apps/faq/manage-faqs',
			component: React.lazy(() => import('./ManageFaqs'))
        },
        {
            path: '/apps/faq/manage-faq-categories',
			component: React.lazy(() => import('./ManageFAQCategories'))
		}
       
	]
};

export default CommonMenuConfig;