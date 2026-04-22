export const analyticsResponse = {
  success: true,
  data: {
    link: {
      id: 1,
      title: "Summer Campaign",
      slug: "summer-sale",
      shortUrl: "https://LinkPilot.app/r/summer-sale",
      originalUrl: "https://example.com/summer",
    },

    summary: {
      totalClicks: 14283,
      uniqueVisitors: 9281,
      conversionRate: 12.4,
      lastClickedAt: "2026-04-21T08:30:00Z",
    },

    dailyClicks: [
      { date: "Apr 15", clicks: 320 },
      { date: "Apr 16", clicks: 510 },
      { date: "Apr 17", clicks: 280 },
      { date: "Apr 18", clicks: 720 },
      { date: "Apr 19", clicks: 610 },
      { date: "Apr 20", clicks: 840 },
      { date: "Apr 21", clicks: 530 },
    ],

    topCountries: [
      { country: "Indonesia", clicks: 5420 },
      { country: "United States", clicks: 3320 },
      { country: "Japan", clicks: 1180 },
    ],

    devices: {
      mobile: 71,
      desktop: 24,
      tablet: 5,
    },

    referrers: [
      { source: "Instagram", clicks: 4200 },
      { source: "WhatsApp", clicks: 2100 },
      { source: "Direct", clicks: 1800 },
    ],
  },
};
