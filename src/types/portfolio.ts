export interface Experience {
  title: string;
  company: string;
  period: string;
  type: 'Full-time' | 'Internship' | 'Contract';
  highlights: string[];
}

export interface Project {
  title: string;
  description: string;
  technologies: string[];
  highlights: string[];
  githubUrl?: string;
  liveUrl?: string;
  imageUrl?: string;
}

export interface Skill {
  category: string;
  items: string[];
}

export interface Certification {
  name: string;
  issuer: string;
  date: string;
  credentialUrl?: string;
}

export interface Achievement {
  title: string;
  description: string;
  year: string;
}

export interface Education {
  degree: string;
  institution: string;
  location: string;
  period: string;
  score: string;
}

export interface GitHubRepo {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  homepage: string | null;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
  topics: string[];
  updated_at: string;
}
