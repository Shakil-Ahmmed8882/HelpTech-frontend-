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
        path: '/admin-dashboard/all-users',
      }
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

    ],
  },
  {
    label: 'Settings',
    children: [
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