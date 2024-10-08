import { TDashboarRoutes } from "./userRoutes";


export const adminRoutes: TDashboarRoutes[] = [
  {
    label: 'Home',
    path: '/admin-dashboard/',
  },
  {
    label: 'Profile',
    path: '/admin-dashboard/profile',
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
        label: 'Create Post',
        path: '/admin-dashboard/create-post',
      },
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
    label: 'History Management',
    children: [
      {
        label: 'Login History',
        path: '/admin-dashboard/login-history',
      },
      {
        label: 'Payment History',
        path: '/admin-dashboard/payment-history',
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