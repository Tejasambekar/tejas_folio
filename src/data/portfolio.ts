import type { Experience, Project, Skill, Certification, Achievement, Education } from '@/types/portfolio';

export const personalInfo = {
  name: 'Tejas Ambekar',
  titles: [
    'Data Scientist',
    'LLM Developer',
    'AI/ML Engineer',
    
    
  ],
  email: 'tejasambekarkumar@gmail.com',
  phone: '+91-8919355145',
  location: 'Hyderabad, India',
  bio: 'B.E. in Artificial Intelligence and Data Science from Chaitanya Bharathi Institute of Technology with a passion for building intelligent systems and scalable solutions.',
  tagline: 'Transforming data into intelligent solutions',
  introduction: 'I am a passionate Data Scientist and AI/ML engineer with expertise in building end-to-end machine learning pipelines, LLM-powered applications, and production-ready software solutions. Currently working at EPAM Systems as a Junior Data Scientist.',
  githubUsername: 'Tejasambekar', // Replace with actual GitHub username
  socialLinks: {
    github: 'https://github.com/tejasambekar',
    linkedin: 'https://linkedin.com/in/tejasambekar',
    email: 'mailto:tejasambekarkumar@gmail.com'
  }
};

export const education: Education[] = [
  {
    degree: 'B.E. in Artificial Intelligence and Data Science',
    institution: 'Chaitanya Bharathi Institute of Technology (CBIT)',
    location: 'Hyderabad',
    period: '2021 - 2025',
    score: 'CGPA: 9.25'
  },
  {
    degree: 'Intermediate (MPC)',
    institution: 'MedhaV Junior College',
    location: 'Hyderabad',
    period: '2019 - 2021',
    score: 'Percentage: 98%'
  },
  {
    degree: 'SSC',
    institution: 'Vasavi High School',
    location: 'Nirmal',
    period: '2018 - 2019',
    score: 'CGPA: 9.80'
  }
];

export const experience: Experience[] = [
  {
    title: 'Junior Data Scientist',
    company: 'EPAM Systems',
    period: 'July 2025 - Present',
    type: 'Full-time',
    highlights: [
      'Designed and deployed a real-time, five-stage document intelligence pipeline for financial data',
      'Implemented classification engine using Qwen/Qwen2.5-3B-Instruct-AWQ model achieving 90% accuracy',
      'Automated full data ingestion and classification process with structured JSON output'
    ]
  },
  {
    title: 'Junior Software Engineer Intern',
    company: 'EPAM Systems',
    period: 'Jan 2025 - June 2025',
    type: 'Internship',
    highlights: [
      'Developed Python-based software solutions with data processing optimizations',
      'Collaborated in cross-functional Agile teams following CI/CD best practices',
      'Integrated AI-driven solutions enhancing task completion efficiency by 20%'
    ]
  },
  {
    title: 'LLM Python Developer',
    company: 'Turing',
    period: 'Sep 2024 - Jan 2025',
    type: 'Contract',
    highlights: [
      'Trained and optimized LLM models, improving accuracy and response efficiency',
      'Reduced runtime errors by 50% through extensive performance reviews',
      'Led development of testing framework cutting testing cycle by 45%'
    ]
  }
];

export const skills: Skill[] = [
  {
    category: 'Generative AI & LLMOps',
    items: ['LangChain', 'RAG', 'LangGraph', 'Prompt Engineering', 'Hugging Face']
  },
  {
    category: 'Machine Learning & DL',
    items: ['TensorFlow', 'Keras', 'Scikit-learn', 'PyTorch', 'NLP', 'Computer Vision']
  },
  {
    category: 'Data Analysis',
    items: ['Pandas', 'NumPy', 'Seaborn', 'Matplotlib']
  },
  {
    category: 'Programming & Databases',
    items: ['Python', 'SQL', 'R', 'Java']
  },
  {
    category: 'MLOps & Cloud',
    items: ['AWS', 'Azure', 'Docker', 'Git', 'CI/CD', 'MLflow']
  },
  {
    category: 'Tools & Visualization',
    items: ['Tableau', 'Jupyter', 'VS Code', 'Google Colab']
  }
];

export const projects: Project[] = [
  {
    title: 'AI-Based Ayurvedic Leaf Disease Analysis',
    description: 'Built LeafScan AI, a 3-stage pipeline using CNN, EfficientNet, and ViT to classify species, assess health, and determine Ayurvedic usability of medicinal leaves with 95% accuracy.',
    technologies: ['HTML', 'CSS', 'MERN', 'Python', 'Deep Learning'],
    highlights: [
      'Engineered domain-specific models: LeafSense, HealthGuard, and AyurCheck',
      'Automated manual expert-based processes improving scalability and consistency',
      'Achieved 95% classification accuracy across multiple leaf categories'
    ],
    githubUrl: 'https://github.com/tejasambekar/leafscan-ai'
  },
  {
    title: 'BANKNIFTY Index Price Analysis & Forecasting',
    description: 'Developed a financial time-series forecasting model using LSTM and ARIMA, achieving 85% prediction accuracy in BankNIFTY stock index trends.',
    technologies: ['R', 'Deep Learning', 'dplyr', 'Keras', 'LSTM', 'ARIMA'],
    highlights: [
      'Designed robust data pipeline in R for financial data analysis & visualization',
      'Conducted time-series analysis ensuring stationarity and optimal feature selection',
      'Compared LSTM vs. ARIMA showing ARIMA superiority in financial volatility'
    ],
    githubUrl: 'https://github.com/tejasambekar/banknifty-forecasting'
  }
];

export const certifications: Certification[] = [
  {
    name: 'Microsoft Certified: Azure AI Fundamentals (AI-900)',
    issuer: 'Microsoft',
    date: 'Sep 2025',
    credentialUrl: '#'
  },
  {
    name: 'AWS Certified AI Practitioner',
    issuer: 'Amazon Web Services',
    date: 'Aug 2025',
    credentialUrl: '#'
  },
  {
    name: 'Academy Accreditation - Databricks Fundamentals',
    issuer: 'Databricks',
    date: 'Aug 2025',
    credentialUrl: '#'
  },
  {
    name: 'Academy Accreditation - Generative AI Fundamentals',
    issuer: 'Databricks',
    date: 'July 2025',
    credentialUrl: '#'
  }
];

export const achievements: Achievement[] = [
  {
    title: 'Code for Good Hackathon - Top 1%',
    description: 'Selected among the Top 1% of total applicants for the Code for Good Hyderabad Hackathon, organized by JP Morgan Chase.',
    year: '2023'
  },
  {
    title: 'Smart India Hackathon - Top 30',
    description: 'Secured a spot in Top 30 among 105 teams in Smart India Hackathon held at CBIT.',
    year: '2023'
  }
];
