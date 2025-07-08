
// Portfolio Data Configuration File
// Use this file to add more projects, accomplishments, certifications, and skills

export interface Project {
  id: string;
  title: string;
  company: string;
  period: string;
  description: string;
  tech: string[];
  github: string;
  image: string;
}

export interface Accomplishment {
  id: string;
  title: string;
  description: string;
  image: string;
  category: string;
}

export interface Certification {
  name: string;
  image: string;
}

export interface SkillCategory {
  title: string;
  icon: React.ReactNode;
  skills: Array<{
    name: string;
    percentage: number;
  }>;
}

export interface SoftSkill {
  title: string;
  icon: React.ReactNode;
  description: string;
}

// Projects Data
export const projectsData: Project[] = [
  {
    id: 'dealhunter',
    title: 'DealHunter – AI-Powered Web Scraper',
    company: 'Infosys Springboard',
    period: 'Feb 2025 - Mar 2025',
    description: 'AI-integrated web scraping tool for extracting deals and offers using Python, Streamlit, Playwright, and Beautiful Soup.',
    tech: ['Python', 'Streamlit', 'Playwright', 'Beautiful Soup', 'OpenAI', 'Gemini', 'Groq'],
    github: 'https://github.com/sivamohan098/Infosys-springboard-internship-.git',
    image: '/lovable-uploads/fb54aa17-6356-4487-87d1-f8292468de5b.png'
  },
  {
    id: 'waste-classification',
    title: 'Waste Classification using CNN',
    company: 'Edunet Foundation',
    period: 'Jan 2025 - Feb 2025',
    description: 'CNN-based waste classification model using TensorFlow & Keras, achieving over 90% accuracy.',
    tech: ['TensorFlow', 'Keras', 'OpenCV', 'NumPy', 'Matplotlib', 'CNN'],
    github: 'https://github.com/sivamohan098/Edunet_Foundation-internship-CNN-by-waste-classification-.git',
    image: '/lovable-uploads/32b621d5-4fd9-44fe-88f7-59d195d96255.png'
  },
  {
    id: 'medical-insurance',
    title: 'Medical Insurance Cost Prediction',
    company: 'Microsoft with Edunet Foundation',
    period: 'May 2025 - Jun 2025',
    description: 'Machine learning model to predict medical insurance costs using regression algorithms.',
    tech: ['Python', 'Scikit-learn', 'Pandas', 'NumPy', 'Matplotlib', 'Machine Learning'],
    github: 'https://github.com/sivamohan098/Microsoft-with-Edunet-Foundation-Predict-medical-insurance-costs-.git',
    image: '/lovable-uploads/b39315ea-eb64-4c90-b9b2-a06c1208c481.png'
  }
  // Add more projects here following the same structure
];

// Accomplishments Data
export const accomplishmentsData: Accomplishment[] = [
  {
    id: 'hackathon',
    title: 'National-Level Hackathons',
    description: 'Top 100 position at DTU Hackathon among 700+ teams',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=400&q=80',
    category: 'Competition'
  },
  {
    id: 'ai-workshop',
    title: 'JNTU-GV GENERATIVE AI WORKSHOP',
    description: 'Participated in CreSenceE-2024 AI Workshop',
    image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=400&q=80',
    category: 'Workshop'
  },
  {
    id: 'nielit-bootcamp',
    title: 'NIELIT Bootcamp',
    description: 'Completed Unmanned Aerial Systems Bootcamp',
    image: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=400&q=80',
    category: 'Training'
  }
  // Add more accomplishments here following the same structure
];

// Certifications Data
export const certificationsData: Certification[] = [
  {
    name: 'Infosys Internship (Web Development) Executive 5.0',
    image: '/lovable-uploads/b8dbc601-8af5-4497-9925-3ace1d312702.png'
  },
  {
    name: 'Edunet Foundation Internship (CNN) AICTE',
    image: '/lovable-uploads/00d7db79-1ece-4c9a-a083-e56d962eb00e.png'
  },
  {
    name: 'Infosys Python Foundation',
    image: '/lovable-uploads/9df349fb-343c-426b-8668-06209d2dd5a2.png'
  },
  {
    name: 'NPTEL (Programming in Java)',
    image: '/lovable-uploads/7cc3f57f-e923-411f-a5d9-43088694e42e.png'
  },
  {
    name: 'HQL Edutech (Core and Advanced Java)',
    image: '/lovable-uploads/74deb11c-2de5-4c1e-82f4-9aa5425fae2c.png'
  },
  {
    name: 'NVIDIA (Building LLM Application with Prompt Engineering)',
    image: '/lovable-uploads/381796fc-248d-48f0-bcb3-2691a0dc80d4.png'
  },
  {
    name: 'IBM [Cognitive class.AI] (SQL & Relational Databases)',
    image: '/lovable-uploads/a3ddfaf8-2081-4f9d-96db-469445007681.png'
  }
  // Add more certifications here following the same structure
];

// Tools and Technologies
export const toolsData: string[] = [
  'Python', 'Java', 'JavaScript', 'React', 'TensorFlow', 'Keras', 'PyTorch', 'OpenCV', 'NumPy', 'Pandas',
  'Matplotlib', 'Scikit-learn', 'Beautiful Soup', 'Playwright', 'Selenium', 'MongoDB', 'MySQL', 'PostgreSQL', 'Node.js',
  'Express.js', 'HTML5', 'CSS3', 'Tailwind CSS', 'Git', 'GitHub', 'VS Code', 'Jupyter', 'Google Colab', 'Streamlit',
  'OpenAI API', 'Gemini API', 'Groq API'
  // Add more tools here
];

// Contact Information
export const contactInfo = {
  name: 'M. SIVA MOHAN MUSIDIPALLI',
  email: 'sivamohanmusidipalli@gmail.com',
  phone: '+91 9398923037',
  address: {
    line1: 'Near korukonda police station',
    line2: 'korukonda, Rajhmundry',
    line3: 'Andhra Pradesh, 533289'
  },
  social: {
    github: 'https://github.com/sivamohan098',
    linkedin: 'https://linkedin.com/in/m-siva-mohan-79179b27a',
    instagram: 'https://www.instagram.com/ms.17.m?igsh=MTlzNGZxenQyZXBhaQ==',
    facebook: 'https://m.facebook.com/story.php?story_fbid=pfbid02ywLdB5xw72MaMeyo1FNPs8L6Z3ev3uzKt6UvYsmrGw7sUPtepwEmZ4WFSmfQaSpgl&id=100022833756624&mibextid=ZbWKwL'
  }
};

// Career Objective
export const careerObjective = `To secure a challenging role in a forward-thinking organization where I can apply my skills in Python, Java, web development, and artificial intelligence. I aim to contribute to innovative projects, enhance my technical expertise in AI/ML and full-stack development, and grow both professionally and personally as part of a collaborative team.`;

// Education Data
export const educationData = [
  {
    institution: 'BVC College Of Engineering (CC-6M), Jntuk',
    degree: 'Bachelor of Technology - Computer Science Engineering (AI & ML)',
    period: 'Apr 2026',
    grade: 'CGPA: 70%',
    color: 'cyan'
  },
  {
    institution: 'Srujuna Model Jr College',
    degree: 'Intermediate - MPC',
    period: 'Mar 2022',
    grade: 'CGPA: 85.2%',
    color: 'purple'
  },
  {
    institution: 'Government High School',
    degree: 'Secondary Education',
    period: 'Mar 2020',
    grade: 'CGPA: 90%',
    color: 'pink'
  }
];

/*
HOW TO ADD NEW DATA:

1. PROJECTS: Add new project objects to the projectsData array
2. ACCOMPLISHMENTS: Add new accomplishment objects to the accomplishmentsData array
3. CERTIFICATIONS: Add new certification objects to the certificationsData array
4. TOOLS: Add new tool names to the toolsData array
5. CONTACT: Update contactInfo object with new social links or contact details

IMPORTANT NOTES:
- Make sure to upload images to the public/lovable-uploads/ folder
- Use consistent naming conventions for IDs
- Follow the existing data structure for consistency
- Update the AccomplishmentDetail.tsx file when adding new accomplishments with detailed data
*/
