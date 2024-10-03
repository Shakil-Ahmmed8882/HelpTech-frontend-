export type TItem = {
    label:string,
    path?: string,
}

export interface TUserRoutes extends TItem  {
    children?: TItem[]
}


export const userRoutes: TUserRoutes[] = [
    {
      label: 'Home',
      path: '/dashboard/home',
    },
    {
      label: 'Profile',
      children: [
        {
          label: 'Edit Profile',
          path: '/dashboard/profile/edit',
        },
        {
          label: 'Change Password',
          path: '/dashboard/profile/change-password',
        },
        {
            label: 'Following',
            path: '/dashboard/following',
          },
          {
            label: 'Followers',
            path: '/dashboard/followers',
          },
      ],
    },
    {
      label: 'Post Management',
      children: [
        {
          label: 'Create Post',
          path: '/dashboard/posts/create',
        },
        {
          label: 'My Posts',
          path: '/dashboard/posts/my-posts',
        },
      ],
    },
    {
      label: 'News Feed',
      path: '/dashboard/news-feed',
    },
    {
      label: 'Premium Content',
      path: '/dashboard/premium',
    },
    {
      label: 'Settings',
      children: [
        {
          label: 'Privacy Settings',
          path: '/dashboard/settings/privacy',
        },
        {
          label: 'Notification Preferences',
          path: '/dashboard/settings/notifications',
        },
      ],
    },
    {
      label: 'Logout',
      path: '/logout',
    },
  ];
  