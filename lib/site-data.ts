export const siteData = {
  name: "Nepal College of Hotel Management",
  shortName: "NCHM",
  tagline: "Birgunj's first hotel management college focused on practical hospitality education.",
  address: "Inside Bright College, Birgunj-09, Nepal",
  email: "nchmbrj143@gmail.com",
  phones: ["9845532370", "9829232426"],
  hours: "Sunday-Friday: 9:00 AM - 5:00 PM",
  distinction: "1st Hotel Management College in Birgunj",
  faculty: [
    {
      name: "Brij Sarraf",
      designation: "BHM Faculty",
      image: "/images/fac.jpeg",
    },
    {
      name: "Urusha Thapa",
      designation: "BHM Faculty",
      image: "/images/fac.jpeg",
    },
    {
      name: "Rohan Singh",
      designation: "BHM Faculty",
      image: "/images/fac.jpeg",
    },
    {
      name: "Sibanshu Barnawal",
      designation: "BHM Faculty",
      image: "/images/fac.jpeg",
    },
    {
      name: "Marorama Mallick",
      designation: "Faculty",
      image: "/images/fac.jpeg",
    },
  ],
  socialSearches: [
    {
      platform: "Facebook",
      handle: "Nepal College of Hotel Management",
    },
    {
      platform: "Instagram",
      handle: "Nchm or Nepal college of Hotel mgmt",
    },
    {
      platform: "TikTok",
      handle: "Nepal college of Hotel mgmt",
    },
  ],
}

export const contactCards = [
  { label: "Address", value: siteData.address },
  { label: "Phone", value: siteData.phones.join(", ") },
  { label: "Email", value: siteData.email },
  { label: "Hours", value: siteData.hours },
]
