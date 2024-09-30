import { Config } from "./src/lib/config.types";

export const config: Config = {
  runtime: "nodejs",
  themeColor: "#5789f6",
  logoURL: "/images/logoBSRPWhite.png",
  site: {
    url: "https://bsrp.me/",
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
          title: "BSRP Server",
          description:
            "Our DayZ server is hosted in Europe and is maintained by our dedicated team.",
        },
        about: {
          title: "About Us",
          description:
            "Hosted since 2020, British Survivors Roleplay Community has been a long-lasting roleplay experience for many players on DayZ. We pride ourselves on providing an experience that is fun for everyone, combining a mix of interesting storytelling and enjoyable gameplay to allow roleplay to extend to the smallest of actions, making each experience memorable.",
          rows: {
            1: {
              title: "Events",
              description:
                "Most of our events are player-ran, organized within roleplay between players & other factions. They vary in every single way, making no two events the same and a unique experience for all to enjoy!",
              image: {
                url: "/images/about/event_image.png",
                alt: "Events Image",
              },
            },
            2: {
              title: "Community",
              description:
                "We believe that a strong sense of community is the key to our server running for as long as it has. We work hard to provide a positive and enjoyable place for all our players.",
              image: {
                url: "/images/about/community_image.png",
                alt: "Community Image",
              },
            },
            3: {
              title: "Storytelling",
              description:
                "Featuring a custom-written lore, our server offers a unique spin on the DayZ Roleplay scenario - delving players into the unique circumstances and happenings within the world and providing a truly new experience for everyone.",
              image: {
                url: "/images/about/storytelling_image.png",
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
    title: "Your gateway to one of the best roleplay servers in DayZ.",
    description:
      "Offering an immersive roleplaying and storytelling experience in DayZ, with no KoS, custom lore and unique scenarios allowing for every interaction with players or the world to play fluidly and not always having to end in bloodshed. Whether you are new to roleplay, or a seasoned veteran, we welcome all with open arms and hope that you will find a place within our community!",
    background: {
      color: "rgb(51 65 85)",
      image: {
        url: "/images/hero_bsrp.png",
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
