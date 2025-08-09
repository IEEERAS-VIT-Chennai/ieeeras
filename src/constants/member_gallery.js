
export const teamData = {
  leadership: {
    teamName: "Core",
    members: [
      {
        id: 1,
        img: "assets/leads/derrick.jpg",
        name: "Derrick Samuel",
        designation: "Chairperson",
      },
      {
        id: 2,
        img: "assets/leads/dev.jpg",
        name: "Dev Agarwal",
        designation: "Vice Chairperson",
      },
      {
        id: 3,
        img: "assets/leads/vaibhav.jpg",
        name: "Vaibhav",
        designation: "General Secretary",
      }
    ]
  },
  executive: {
    teamName: "Executive Board",
    members: [
      {
        id: 11,
        img: "assets/leads/navin.jpg",
        name: "Naveen",
        designation: "Events Secretary",
      },

      {
        id: 13,
        img: "assets/leads/tarun.jpg",
        name: "Tarun",
        designation: "Technical Secretary (Software)",
      },
      {
        id: 14,
        img: "assets/leads/subbu.jpg",
        name: "Subramaniam",
        designation: "Treasurer",
      }
    ]
  },
  Tech: {
    teamName: "Web Development",
    members: [
      {
        id: 6,
        img: "assets/leads/ashif.jpg",
        name: "Ashif",
        designation: "Web-Dev Lead",
      },
      {
        id: 8,
        img: "assets/leads/sharvin.jpg",
        name: "Sharvin",
        designation: "Web-Dev Co-Lead",
      }
    ]
  },
  datascience: {
    teamName: "Data Science",
    members: [
      {
        id: 5,
        img: "assets/leads/dhurvank.jpg",
        name: "Durvank",
        designation: "Data Science Lead",
      },
      {
        id: 15,
        img: "assets/leads/nikhil.jpg",
        name: "Nikhil",
        designation: "Data Science Co-Lead"
      }

    ]
  },
  operations: {
    teamName: "Operations",
    members: [
      {
        id: 5,
        img: "assets/leads/nadia.jpeg",
        name: "Nadia",
        designation: "Operations Lead",
      },
      {
        id: 16,
        img: "assets/leads/kaushik.jpg",
        name: "Kaushik",
        designation: "Operations Co-Lead"
      }

    ]
  },
  projects: {
    teamName: "Projects",
    members: [

      {
        id: 16,
        img: "assets/leads/astley.jpg",
        name: "Astley",
        designation: "Projects Lead"
      }

    ]
  },
  design: {
    teamName: "Design",
    members: [
      {
        id: 18,
        img: "assets/leads/ananya.jpg",
        name: "Ananya",
        designation: "Design Lead"
      },

      {
        id: 17,
        img: "assets/leads/sudarsan.jpg",
        name: "Sudarsan",
        designation: "Design Co-Lead"
      }
    ]
  },
  socialmedia: {
    teamName: "Social Media",
    members: [
      {
        id: 7,
        img: "assets/leads/sameer.jpeg",
        name: "Sameer",
        designation: "Social Media Lead",
      },
      {
        id: 5,
        img: "assets/leads/neha.jpg",
        name: "Neha",
        designation: "Social Media Co-Lead",
      },

    ]
  }

};

// Keep the old data export for backward compatibility if needed
export const data = Object.values(teamData).flatMap(team => team.members);