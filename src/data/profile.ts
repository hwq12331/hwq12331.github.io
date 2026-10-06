export const profile = {
  name: 'Hussain Alqassab',
  location: 'Dammam, Saudi Arabia',
  email: 'hussain.w.alqassab@gmail.com',
  phone: '+966 566799301',
  phoneLink: '+966566799301',
  github: 'https://github.com/hwq12331',
  linkedin: 'https://www.linkedin.com/in/hussain-alqassab-0356b83b2/',
  degree: 'B.Sc. in Management Information Systems',
  university: 'King Fahd University of Petroleum and Minerals',
  graduation: 'May 2025',
  languages: ['Arabic — Native', 'English — Professional'],
};

export const links = {
  amc: 'https://github.com/hwq12331/AMC-Project-Hub-Portfolio',
  amcDemo: 'https://hwq12331.github.io/AMC-Project-Hub-Portfolio/',
  stocks: 'https://github.com/hwq12331/Intelligent-Stock-Rating-System-AI-Powered-Financial-Analysis',
  sallehni: 'https://github.com/hwq12331/Sallehni',
  sallehniDemo: 'https://hwq12331.github.io/Sallehni/',
};

export const additionalProjects = [
  {
    name: 'Athar',
    category: 'Blockchain & archiving',
    description: 'A Python/Streamlit archive combining SHA-256 document hashing, Ethereum verification and peer-to-peer torrent distribution.',
    technologies: ['Python', 'Streamlit', 'Ethereum', 'Node.js'],
    url: 'https://github.com/hwq12331/Athar',
    icon: 'archive',
  },
  {
    name: 'File Share & Chat',
    category: 'Real-time communication',
    description: 'A Flask/Socket.IO application for live messaging, file uploads and downloads, and chat-history synchronization.',
    technologies: ['Flask', 'Socket.IO', 'JavaScript'],
    url: 'https://github.com/hwq12331/FileShareAndChat',
    icon: 'message',
  },
  {
    name: 'Internship Management System',
    category: 'Academic workflows',
    description: 'A faculty–student matching platform for internship assignment and advisor coordination.',
    technologies: ['Systems analysis', 'Workflow design'],
    url: 'https://github.com/hwq12331/Internship-Management-Systems',
    icon: 'users',
  },
  {
    name: 'KFUPMSOC Tournament System',
    category: 'Database applications',
    description: 'A relational tournament-management database with a Java/JavaFX graphical interface.',
    technologies: ['SQL', 'Java', 'JavaFX'],
    url: `mailto:${profile.email}?subject=KFUPMSOC%20Tournament%20System`,
    icon: 'database',
  },
];

export const skillGroups = [
  { title: 'Languages', icon: 'code', items: ['Python', 'SQL', 'JavaScript', 'TypeScript', 'Java', 'C#'] },
  { title: 'Web & mobile', icon: 'layers', items: ['React', 'React Native', 'Expo', 'Tailwind CSS', 'Flask', 'Streamlit', 'HTML/CSS', 'Socket.IO', 'JavaFX'] },
  { title: 'Data & analytics', icon: 'chart', items: ['pandas', 'NumPy', 'scikit-learn', 'XGBoost', 'LightGBM', 'Feature engineering', 'Walk-forward validation', 'Financial analytics'] },
  { title: 'Databases & tools', icon: 'database', items: ['Supabase', 'PostgreSQL', 'Relational database design', 'Git/GitHub', 'Selenium', 'PyAutoGUI', 'Microsoft Office'] },
  { title: 'Business & systems', icon: 'workflow', items: ['Requirements analysis', 'Systems analysis & design', 'Process automation', 'Procurement coordination', 'Work breakdown structures', 'Project documentation'] },
];

export const coursework = ['Business Analytics', 'Systems Analysis & Design', 'Database Systems', 'Web Engineering & Development', 'Business Applications Development', 'Design & Analysis of Algorithms', 'Data Structures', 'Fundamentals of Computer Networks'];

export function route(path = '') {
  return `${import.meta.env.BASE_URL.replace(/\/$/, '')}/${path.replace(/^\/+/, '')}`;
}

export function readingTime(body: string | undefined) {
  return Math.max(1, Math.ceil((body || '').trim().split(/\s+/).length / 200));
}

export function formatDate(date: Date) {
  return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric', timeZone: 'UTC' });
}
