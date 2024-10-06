import { TDashboarRoutes } from "./userRoutes";


export const adminRoutes: TDashboarRoutes[] = [
  {
    label: 'Home',
    path: '/admin-dashboard/',
  },
  {
    label: 'User Management',
    children: [
      {
        label: 'All Users',
        path: '/admin-dashboard/users',
      },
      {
        label: 'Blocked Users',
        path: '/admin-dashboard/blocked-users',
      },
      {
        label: 'Create Admin',
        path: '/admin-dashboard/create-admin',
      },
      {
        label: 'Manage Admins',
        path: '/admin-dashboard/manage-admins',
      },
    ],
  },
  {
    label: 'Post Management',
    children: [
      {
        label: 'All Posts',
        path: '/admin-dashboard/all-posts',
      },
      {
        label: 'Pending Posts',
        path: '/admin-dashboard/pending-posts',
      },
      {
        label: 'Reported Posts',
        path: '/admin-dashboard/reported-posts',
      },
    ],
  },
  {
    label: 'Payment Management',
    children: [
      {
        label: 'Payment History',
        path: '/admin-dashboard/payment-history',
      },
      {
        label: 'User Subscriptions',
        path: '/admin-dashboard/user-subscriptions',
      },
    ],
  },
  {
    label: 'Analytics & Reporting',
    children: [
      {
        label: 'User Activity',
        path: '/admin-dashboard/user-activity',
      },
      {
        label: 'Content Engagement',
        path: '/admin-dashboard/content-engagement',
      },
      {
        label: 'Revenue Reports',
        path: '/admin-dashboard/revenue-reports',
      },
    ],
  },
  {
    label: 'Settings',
    children: [
      {
        label: 'Security Settings',
        path: '/admin-dashboard/security-settings',
      },
      {
        label: 'Notification Settings',
        path: '/admin-dashboard/notification-settings',
      },
      {
        label: 'Activity Logs',
        path: '/admin-dashboard/activity-logs',
      },
    ],
  },
  {
    label: 'Logout',
    path: '/logout',
  },
];