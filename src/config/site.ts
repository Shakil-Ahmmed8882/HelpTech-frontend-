export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Next.js + NextUI",
  description: "Make beautiful websites regardless of your design experience.",
  navItems: [
    // {
    //   label: "About",
    //   href: "/about",
    // },
    // {
    //   label: "Services",
    //   href: "/services",
    // },
    {
      label: "Pricing/Plan",
      href: "/pricing",
    },
    {
      label: "Contact",
      href: "/contact",
    }
  ],

  navMenuItems: [
    // {
    //   label: "Home",
    //   href: "/",
    // },
    // {
    //   label: "About",
    //   href: "/about",
    // },
    {
      label: "Contact",
      href: "/contact",
    }
  ],
};
