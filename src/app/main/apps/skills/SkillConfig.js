import React from 'react';

const CommonMenuConfig = {
	settings: {
		layout: {
			config: {}
		}
	},
	routes: [
		{
			path: '/apps/skills/manage-skills',
			component: React.lazy(() => import('./ManageSkills'))
        }
        
	]
};

export default CommonMenuConfig;
