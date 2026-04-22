const links = [
  {
    id: 1,
    title: "Summer Campaign",
    slug: "https://github.com/fakhri-muzakki?tab=repositories",
    clicks: 1243,
    createdAt: "2 days ago",
    originalUrl: "https://example.com/summer",
    qrImage:
      "https://res.cloudinary.com/dpzqff2pc/image/upload/v1776779740/Coba-maneh/szjj2jqigmznhkeam5nz.png",
  },
  {
    id: 2,
    title: "Portfolio Resume",
    slug: "https://github.com/fakhri-muzakki?tab=repositories",
    clicks: 321,
    createdAt: "5 days ago",
    originalUrl: "https://example.com/resume",
    qrImage:
      "https://res.cloudinary.com/dpzqff2pc/image/upload/v1776779740/Coba-maneh/szjj2jqigmznhkeam5nz.png",
  },
  {
    id: 3,
    title: "Instagram Bio",
    slug: "https://github.com/fakhri-muzakki?tab=repositories",
    clicks: 8821,
    createdAt: "1 week ago",
    originalUrl: "https://instagram.com/yourprofile",
    qrImage:
      "https://res.cloudinary.com/dpzqff2pc/image/upload/v1776779740/Coba-maneh/szjj2jqigmznhkeam5nz.png",
  },
];

const dummyLinksBackend = {
  data: [...links],
  meta: {
    totalLinks: 24,
    totalClicks: 14200,
    activeCampaigns: 6,
  },
};
export default dummyLinksBackend;
