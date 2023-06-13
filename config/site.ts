export type SiteConfig = typeof siteConfig


export const siteConfig = {
  name: "Cyber Expert",
  description:
    "Blog posts about cyber security, programming, and other things.",
  mainNav: [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "Videos",
      href: "/videos",
    },
  ],
  links: {
    twitter: "https://twitter.com/shadcn",
    github: "https://github.com/shadcn/ui",
    youtube: "https://www.youtube.com/@TheCyberExpert"
  },
}
