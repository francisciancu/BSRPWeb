import { Config } from "./src/lib/config.types";

export const config: Config = {
  runtime: "nodejs",
  themeColor: "#5789f6",
  logoURL: "/images/logoBSRP.png",
  site: {
    url: "https://www.skvad.eu/",
    title: "British Survivors Roleplay Community",
    twitter: {
      site: "@site",
      creator: "@creator",
      card: "summary_large_image",
      images: [
        {
          url: "/images/marketing/banner.png",
          alt: "Marketing Banner for British Survivors Roleplay Community",
        },
      ],
    },
  },
  pages: {
    home: {
      title: "Home | British Survivors Roleplay Community",
      description:
        "Welcome to the British Survivors Roleplay Community! We are a DayZ community that is dedicated to providing the best experience for our players. Join us today!",
      sections: {
        network: {
          title: "Server Network",
          description:
            "Our DayZ servers are hosted in Europe and are maintained by our dedicated team of developers and system administrators.",
        },
        about: {
          title: "About Us",
          description:
            "We are a community of DayZ players who are passionate about the game and the experiences it provides. We strive to provide a safe and enjoyable environment for all players.",
          rows: {
            1: {
              title: "Events",
              description:
                "We host regular events and competitions for our players to participate in. These events are a great way to meet new people and have fun in the game.",
              image: {
                url: "/images/about/events.jpg",
                alt: "Events Image",
              },
            },
            2: {
              title: "Community",
              description:
                "We believe that a strong community is the key to a successful server. We work hard to foster a positive and inclusive community for all players.",
              image: {
                url: "/images/about/community.jpg",
                alt: "Community Image",
              },
            },
            3: {
              title: "Development",
              description:
                "Our team of developers are constantly working to improve the server and add new features. We welcome feedback and suggestions from our players.",
              image: {
                url: "/images/about/development.png",
                alt: "Development Image",
              },
            },
          },
        },
        leaderboard: {
          title: "Leaderboard",
          description:
            "Check out the top players on our servers and see how you compare. Can you make it to the top of the leaderboard?",
        },
        contact: {
          title: "Contact Us",
          description:
            "If you have any questions or concerns, please don't hesitate to contact us through the following channels.",
          links: {
            Discord: "https://discord.gg/4Tap7JKJw8",
            Email: "mailto:BSRPSky@outlook.com",
          },
        },
      },
    },
  },
  hero: {
    title: "We listen, we learn, we deliver.",
    description:
      "Our DayZ Community is built on the principles of transparency, integrity, and trust. We are committed to providing the best experience for our players. Wether you are a seasoned veteran or a new player, we have a place for you.",
    background: {
      color: "rgb(51 65 85)",
      image: {
        url: "/images/hero.jpg",
        alt: "Hero Image",
      },
    },
    cta: {
      label: "Join us today!",
      href: "https://discord.gg/4Tap7JKJw8",
    },
  },
  servers: [
    {
      name: "[UK/EU] British Survivors Roleplay | NO KOS",
      ipv4: "95.156.230.194",
      gamePort: 2302,
      steamQueryPort: 27016,
      cftoolsApiId: "1440fc26-2357-4bb3-b10a-099c0ab5ef9d",
    },
  ],
  cftools: {
    leaderboard: {
      enabled: false,
      defaultSortValue: "kills",
      allowedSortValues: [
        "kills",
        "deaths",
        "kdratio",
        "longest_kill",
        "longest_shot",
        "playtime",
        "suicides",
      ],
      blacklistedCFToolsIds: [],
      showAmount: 100,
    },
  },
  footer: {
    trademarkNotice:
      "The DayZ logo is a registered trademark of Bohemia Interactive a.s. SKVAD is not affiliated with Bohemia Interactive a.s. or DayZ. All other trademarks are the property of their respective owners.",
    brandingName: "British Survivors Roleplay Community",
    brandingURL: "/",
    initialCopyrightYear: 2021,
    copyrightBrandName: "SKVAD",
    copyrightBrandUrl: "/",
    links: [
      {
        url: "#",
        label: "About",
      },
      {
        url: "#",
        label: "Meet the Team",
      },
      {
        url: "#",
        label: "Campaigns",
      },
      {
        url: "#",
        label: "Blog",
      },
      {
        url: "#",
        label: "Affiliate Program",
      },
      {
        url: "#",
        label: "FAQs",
      },
      {
        url: "#",
        label: "Contact",
      },
    ],
  },
};
