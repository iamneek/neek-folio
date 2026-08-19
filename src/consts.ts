import type { Site, Metadata, Socials } from "@types";

export const SITE: Site = {
  NAME: "~/neek",
  EMAIL: "neek@neek.com.np",
  NUM_POSTS_ON_HOMEPAGE: 3,
  NUM_WORKS_ON_HOMEPAGE: 2,
  NUM_PROJECTS_ON_HOMEPAGE: 3,
};

export const HOME: Metadata = {
  TITLE: "Home",
  DESCRIPTION: "My space for sharing information about me. My portfolio.",
};

export const BLOG: Metadata = {
  TITLE: "Blog",
  DESCRIPTION: "A collection of articles on topics I am passionate about.",
};

export const WORK: Metadata = {
  TITLE: "Work",
  DESCRIPTION: "Where I have worked and what I have done.",
};

export const PROJECTS: Metadata = {
  TITLE: "Projects",
  DESCRIPTION: "A collection of my projects, with links to repositories and demos.",
};

export const SOCIALS: Socials = [
  {
    NAME: "X (FKA twitter)",
    HREF: "https://x.com/iamneekk",
  },
  {
    NAME: "github",
    HREF: "https://github.com/iamneek"
  },
  {
    NAME: "linkedin",
    HREF: "https://www.linkedin.com/in/neek-kafle",
  },
  {
    NAME: "instagram",
    HREF: "https://www.instagram.com/theonly.neek_",
  }
];
