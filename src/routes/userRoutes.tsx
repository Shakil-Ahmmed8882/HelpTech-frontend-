export type TItem = {
    label:string,
    path?: string,
}

export interface TDashboarRoutes extends TItem  {
    children?: TItem[]
}


export const userRoutes: TDashboarRoutes[] = [
    {
      label: 'Home',
      path: '/user-dashboard',
    },
    {
      label: 'Profile Management',
      children: [
        {
          label: 'Profile',
          path: '/user-dashboard/profile',
        },
        {
          label: 'Edit Profile',
          path: '/user-dashboard/edit-profile',
        },
        {
          label: 'Change Password',
          path: '/user-dashboard/change-password',
        },
        {
            label: 'Following',
            path: '/user-dashboard/followings-followers',
          },
      ],
    },
    {
      label: 'Post Management',
      children: [
        {
          label: 'Create Post',
          path: '/user-dashboard/create-post',
        },
        {
          label: 'My Posts',
          path: '/user-dashboard/my-posts',
        },
      ],
    },
    {
      label: 'News Feed',
      path: '/user-dashboard/news-feed',
    },
    {
      label: 'Premium Content',
      path: '/user-dashboard/premium',
    },
    {
      label: 'Settings',
      children: [
        {
          label: 'Privacy Settings',
          path: '/user-dashboard/settings-privacy',
        },
        {
          label: 'Notification Preferences',
          path: '/user-dashboard/settings-notifications',
        },
      ],
    },
    {
      label: 'Logout',
      path: '/logout',
    },
  ];
  