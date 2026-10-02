export type TeamMember = { name: string; role: string; photo: string; colors: [string, string] };
export type TeamGroup = { title: string; members: TeamMember[] };

const MOHAN: TeamMember = { name: "Mohan Ban", role: "Chairman & Co-founder", photo: "/assets/images/team/mohan-ban.webp", colors: ["#FFB41D", "#C98400"] };

// Titles and roles are English dictionary keys, translated with t().
export const TEAM_GROUPS: TeamGroup[] = [
  {
    title: "Board of Directors",
    members: [
      { ...MOHAN, role: "Board of Directors" },
      { name: "Dhurba Adhikari", role: "Board of Directors", photo: "/assets/images/team/dhurba-adhikari.webp", colors: ["#1A7EFF", "#0A56C8"] },
      { name: "Rabindra Raj Poudel", role: "Board of Directors", photo: "/assets/images/team/rabindra-raj-poudel.webp", colors: ["#E11D48", "#9F1239"] },
    ],
  },
  {
    title: "Management Team",
    members: [
      MOHAN,
      { name: "Apil Koirala", role: "CEO", photo: "/assets/images/team/apil-koirala.webp", colors: ["#10B981", "#0A7A52"] },
      { name: "Sarita Lama", role: "HR/Operation Manager", photo: "/assets/images/team/sarita-lama.webp", colors: ["#8B5CF6", "#5B21B6"] },
    ],
  },
];
