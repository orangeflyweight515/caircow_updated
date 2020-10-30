import { authRoles } from 'app/auth';
import i18next from 'i18next';
import DocumentationNavigation from '../main/documentation/DocumentationNavigation';

import ar from './navigation-i18n/ar';
import en from './navigation-i18n/en';
import tr from './navigation-i18n/tr';
import fr from './navigation-i18n/fr';

i18next.addResourceBundle('en', 'navigation', en);
i18next.addResourceBundle('tr', 'navigation', tr);
i18next.addResourceBundle('ar', 'navigation', ar);
i18next.addResourceBundle('fr','navigation',fr);

const navigationConfig = [
	{
		// id: 'applications',
		// title: 'Applications',
		// translate: 'APPLICATIONS',
		type: 'group',
		icon: 'apps',
		children: [
			{
				id: 'dashboards',
				title: 'Dashboards',
				translate: 'DASHBOARDS',
				type: 'item',
				icon: 'dashboard',
				url: '/apps/dashboards/analytics/store'
				
			},
			{
				id: 'Common-menu',
				title: 'Common Menu',
				translate: 'Common Menu',
				type: 'collapse',
				icon: 'list',
				children: [
					{
						id: 'change-password',
						title: 'Change Password',
						translate: 'Change Password',
						type: 'item',
						url: '/apps/Common-menu/changepassword',
					},
					{
						id: 'Maintenance-mode',
						title: 'Maintenance-mode',
						translate: 'Maintenance Mode',
						type: 'item',
						url: '/apps/common-menu/maintenance',
						
					},
					{
						id: 'Manage-Email-Templates',
						title: 'Manage-Email-Templates',
						translate: 'Manage Email Templates',
						type: 'item',
						url: '/apps/common-menu/email-templates'
					},
					
					
				]
			},
			{
				id: 'Users',
				title: 'Users',
				translate: 'Users',
				type: 'collapse',
				icon: 'groups',
				children: [
					{
						id: 'Manage-Users',
						title: 'Manage Users',
						translate: 'Manage Users',
						type: 'item',
						url: '/apps/users/manage-user'
					},
					{
						id: 'Manage-SubAdmin',
						title: 'Manage SubAdmin',
						translate: 'Manage SubAdmin',
						type: 'item',
						url: '/apps/users/manage-subadmin',
						
					},
					
					
				]
			},
			{
				id: 'Content',
				title: 'Content',
				translate: 'Content',
				type: 'collapse',
				icon: 'library_books',
				children: [
					{
						id: 'Manage-Contents',
						title: 'Manage Contents',
						translate: 'Manage Contents',
						type: 'item',
						url: '/apps/content/manage-content'
					},					
				]
			},
			{
				id: 'Categories',
				title: 'Categories',
				translate: 'Categories',
				type: 'collapse',
				icon: 'category',
				children: [
					{
						id: 'Manage-Category',
						title: 'Manage Category',
						translate: 'Manage Category',
						type: 'item',
						url: '/apps/categories/manage-category'
					},
					{
						id: 'Manage-Sub-Category',
						title: 'Manage Sub Category',
						translate: 'Manage Sub Category',
						type: 'item',
						url: '/apps/categories/manage-sub-category'
					},
					
				]
			},
			{
				id: 'Skills',
				title: 'Skills',
				translate: 'Skills',
				type: 'collapse',
				icon: 'person_remove',
				children: [
					{
						id: 'Manage-Skills',
						title: 'Manage Skills',
						translate: 'Manage Skills',
						type: 'item',
						url: '/apps/skills/manage-skills'
					},
				]
			},
			{
				id: 'Jobs',
				title: 'Jobs',
				translate: 'Jobs',
				type: 'collapse',
				icon: 'email',
				children: [
					{
						id: 'Manage-Jobs',
						title: 'Manage Jobs',
						translate: 'Manage Jobs',
						type: 'item',
						url: '/apps/jobs/manage-jobs'
					},
					{
						id: 'Manage-Disputed-Jobs',
						title: 'Manage Disputed Jobs',
						translate: 'Manage Disputed Jobs',
						type: 'item',
						url: '/apps/jobs/manage-disputed-jobs'
					},
					{
						id: 'Manage-Questions',
						title: 'Manage Questions',
						translate: 'Manage Questions',
						type: 'item',
						url: '/apps/jobs/manage-questions'
					},
				]
			},
			{
				id: 'Services',
				title: 'Services',
				translate: 'Services',
				type: 'collapse',
				icon: 'headset_mic',
				children: [
					{
						id: 'Manage-Services',
						title: 'Manage Services',
						translate: 'Manage Services',
						type: 'item',
						url: '/apps/services/manage-services'
					},
					{
						id: 'Manage-Services-Order',
						title: 'Manage Services Order',
						translate: 'Manage Services Order',
						type: 'item',
						url: '/apps/services/manage-services-order'
					},
					{
						id: 'Manage-Disputed-Services',
						title: 'Manage Disputed Services',
						translate: 'Manage Disputed Services',
						type: 'item',
						url: '/apps/services/manage-disputed-services'
					},
				]
			},
			{
				id: 'Redeem-request',
				title: 'Redeem Request',
				translate: 'Redeem Request',
				type: 'collapse',
				icon: 'redeem',
				children: [
					{
						id: 'Manage-Redeem-Request',
						title: 'Manage Redeem Request',
						translate: 'Manage Redeem Request',
						type: 'item',
						url: '/apps/redeem-request/manage-redeem-request'
					},
					
				]
			},
			{
				id: 'Commission',
				title: 'Commission',
				translate: 'Commission',
				type: 'collapse',
				icon: 'assessment',
				children: [
					{
						id: 'Manage-Escrow-Commission',
						title: 'Manage Escrow Commission',
						translate: 'Manage Escrow Commission',
						type: 'item',
						url: '/apps/commission/manage-escrow-commission'
					},
					{
						id: 'Manage-Services-Commission',
						title: 'Manage Services Commission',
						translate: 'Manage Services Commission',
						type: 'item',
						url: '/apps/commission/manage-services-commission'
					},
					
				]
			},
			{
				id: 'Reports',
				title: 'Reports',
				translate: 'Reports',
				type: 'collapse',
				icon: 'show_chart',
				children: [
					{
						id: 'Manage-Reports',
						title: 'Manage Reports',
						translate: 'Manage Reports',
						type: 'item',
						url: '/apps/reports/manage-reports'
					},
					
					
				]
			},
			{
				id: 'Abuse-keywords',
				title: 'Abuse Keywords',
				translate: 'Abuse Keywords',
				type: 'collapse',
				icon: 'subtitle_off',
				children: [
					{
						id: 'Manage-Abuse-Keywords',
						title: 'Manage Abuse Keywords',
						translate: 'Manage Abuse Keywords',
						type: 'item',
						url: '/apps/abuse-keywords/manage-abuse-keywords'
					},
					
					
				]
			},
			{
				id: 'Notifications',
				title: 'Notifications',
				translate: 'Notifications',
				type: 'collapse',
				icon: 'notifications',
				children: [
					{
						id: 'Manage-Notifications',
						title: 'Manage Notifications',
						translate: 'Manage Notifications',
						type: 'item',
						url: '/apps/notifications/manage-notifications'
					},
					
					
				]
			},
			{
				id: 'Newsletters',
				title: 'Newsletters',
				translate: 'Newsletters',
				type: 'collapse',
				icon: 'receipt',
				children: [
					{
						id: 'Manage-Newsletters',
						title: 'Manage Newsletters',
						translate: 'Manage Newsletters',
						type: 'item',
						url: '/apps/newsletters/manage-newsletters'
					},
					{
						id: 'Manage-Newsletters-Subscribers',
						title: 'Manage Newsletters Subscribers',
						translate: 'Manage Newsletters Subscribers',
						type: 'item',
						url: '/apps/newsletters/manage-newsletters-subscribers'
					},
					
					
				]
			},
			{
				id: 'FAQ',
				title: 'FAQ',
				translate: 'FAQ',
				type: 'collapse',
				icon: 'help',
				children: [
					{
						id: 'Manage-FAQ-Categories',
						title: 'Manage FAQ Categories',
						translate: 'Manage FAQ Categories',
						type: 'item',
						url: '/apps/faq/manage-faq-categories'
					},
					{
						id: 'Manage-FAQs',
						title: 'Manage FAQs',
						translate: 'Manage FAQs',
						type: 'item',
						url: '/apps/faq/manage-faqs'
					},
					
					
				]
			},
			{
				id: 'Contact-us',
				title: 'Contact Us Request',
				translate: 'Contact Us Request',
				type: 'collapse',
				icon: 'phone_in_talk',
				children: [
					{
						id: 'Manage-Contact-Us',
						title: 'Manage Contact Us ',
						translate: 'Manage Contact Us ',
						type: 'item',
						url: '/apps/contact-us/manage-contact-us'
					},
					
					
					
				]
			},
			{
				id: 'Emails',
				title: 'Emails',
				translate: 'Emails',
				type: 'item',
				icon: 'email',
				url: '/apps/emails'
			},
			{
				id: 'Messages',
				title: 'Messages',
				translate: 'Messages',
				type: 'item',
				icon: 'message',
				url: '/apps/messages'
			},
			{
				id: 'Tickets',
				title: 'Tickets',
				translate: 'Tickets',
				type: 'item',
				icon: 'confirmation_number',
				url: '/apps/tickts'
			},
			{
				id: 'Dispute',
				title: 'Dispute',
				translate: 'Dispute',
				type: 'item',
				icon: 'sms_failed',
				url: '/apps/dispute'
			},
			{
				id: 'Chat',
				title: 'Chat',
				translate: 'Chat',
				type: 'item',
				icon: 'bar_chart',
				url: '/apps/chat'
			}

		]
	}
];

export default navigationConfig;
