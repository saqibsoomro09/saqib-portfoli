export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  techStack: string[];
  github?: string;
  demo?: string;
}

export const projects: Project[] = [
  {
    id: "satellite-simulator",
    title: "Satellite Constellation Simulator",
    description: "A sophisticated satellite constellation simulator built using Basilisk and BSK-RL. The system models orbital dynamics, communication networks, and power systems for multiple satellites in formation. Includes visualization tools and simulation controls for various scenarios.",
    image: "https://images.pexels.com/photos/41162/moon-landing-apollo-11-nasa-buzz-aldrin-41162.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    techStack: ["Python", "Basilisk", "BSK-RL", "NumPy", "Matplotlib"],
    github: "https://github.com/saqibsoomro09"
  },
  {
    id: "housing-insights",
    title: "Housing Insights App",
    description: "An interactive dashboard for real estate market analysis. Provides insights on housing trends, pricing forecasts, and investment opportunities. Features include data visualization, filtering by location and property attributes, and predictive analytics.",
    image: "https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    techStack: ["React.js", "D3.js", "PostgreSQL", "FastAPI", "Python"],
    github: "https://github.com/saqibsoomro09",
    demo: "https://example.com"
  },
  {
    id: "archery-scoring",
    title: "Archery Scoring System",
    description: "A comprehensive scoring system for archery tournaments. Tracks scores, calculates statistics, and displays real-time leaderboards. The application supports multiple tournament formats and includes user management for competitors and administrators.",
    image: "https://images.pexels.com/photos/1432424/pexels-photo-1432424.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    techStack: ["Node.js", "Express", "MongoDB", "Socket.io"],
    github: "https://github.com/saqibsoomro09",
    demo: "https://example.com"
  },
  {
    id: "job-board",
    title: "Job Board Website",
    description: "A full-featured job search platform connecting employers and job seekers. Includes job posting, application tracking, resume uploading, and search functionality with filters. Employers can manage listings and applicants through a dedicated dashboard.",
    image: "https://images.pexels.com/photos/3184357/pexels-photo-3184357.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    techStack: ["React.js", "AWS", "Lambda", "DynamoDB"],
    github: "https://github.com/saqibsoomro09"
  },
  {
    id: "hydro-wheel",
    title: "Hydro Wheel Design",
    description: "An innovative design for a water wheel that generates renewable energy. The project includes mechanical designs, efficiency calculations, and implementation plans. Created simulation models to test different configurations and optimize performance.",
    image: "https://images.pexels.com/photos/414898/pexels-photo-414898.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    techStack: ["CAD", "MATLAB", "Fluid Dynamics", "Python"],
    github: "https://github.com/saqibsoomro09"
  }
];