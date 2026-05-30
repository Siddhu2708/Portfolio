/** Static portfolio data — used when API is unavailable (e.g. Vercel frontend-only) */
export const PORTFOLIO_FALLBACK = {
  profile: {
    name: 'Siddharth Gaykhe',
    title: 'AI Engineer',
    tagline:
      'Student of Artificial Intelligence and Data Science at Dr. D. Y. Patil Institute of Technology. Passionate about Deep Learning, Computer Vision, and turning complex data into intelligent solutions.',
    availability: 'Available for ML Internships & Research',
    about: [
      "I'm currently a student at Dr. D. Y. Patil Institute of Technology, pursuing a degree in Artificial Intelligence and Data Science, after completing my diploma in AI & ML from K. K. Wagh Polytechnic.",
      'From developing deep learning models for tomato leaf disease detection to working on prediction systems and data analysis projects, I enjoy exploring how AI and Machine Learning can create practical and impactful solutions.',
    ],
    email: 'siddharthgaykhe08@gmail.com',
    location: 'Pune, Maharashtra, India',
    linkedin: 'https://linkedin.com/in/siddharthgaykhe',
    github: 'https://github.com/siddhu2708',
    resumeUrl: '/Siddharth_Resume_and_CV (1).pdf',
    profileImage: '/assets/imgs/man.jpeg',
    stats: [
      { label: 'Years Learning', value: '2+' },
      { label: 'Projects Built', value: '10+' },
    ],
    typewriterStrings: [
      'AI Models.',
      'Deep Learning Solutions.',
      'Computer Vision Apps.',
      'Intelligent Futures.',
      'Data-Driven Stories.',
    ],
    githubStats: { stars: '50+', commits: '100+' },
  },
  projects: [
    {
      title: 'AgriIntellect: Tomato Disease AI',
      slug: 'agri-intellect',
      description:
        'A high-precision AI system for detecting tomato leaf diseases using CNN. Provides real-time diagnostics to help farmers protect crops and increase yield efficiency.',
      image: '/assets/imgs/tomato.png',
      tags: ['Computer Vision', 'Deep Learning'],
      techStack: ['Python', 'TensorFlow', 'Streamlit'],
      githubUrl: 'https://github.com/Siddhu2708/Tomato-System-.git',
      demoUrl: 'https://tomatoleaf.streamlit.app/',
    },
    {
      title: "HealthPredict: Women's Diabetes Analysis",
      slug: 'health-predict',
      description:
        'Predictive diagnostic model for early-stage diabetes detection in women. Analyzes complex health indicators to provide risk assessments with high accuracy.',
      image: '/assets/imgs/diabetes.png',
      tags: ['ML', 'Healthcare'],
      techStack: ['Scikit-Learn', 'Pandas', 'EDA'],
      githubUrl: 'https://github.com/Siddhu2708/Women-Diabetes-Prediction.git',
      demoUrl: 'https://github.com/Siddhu2708/Women-Diabetes-Prediction.git',
    },
    {
      title: 'AutoVision: Vehicle Detection System',
      slug: 'auto-vision',
      description:
        'A robust car detection model built using CNN. Capable of identifying and classifying vehicles in diverse lighting and environmental conditions.',
      image: '/assets/imgs/car.png',
      tags: ['CV', 'CNN'],
      techStack: ['OpenCV', 'Keras', 'Deep Learning'],
      githubUrl: 'https://github.com/Siddhu2708/Car-Detection-using-CNN-Model.git',
    },
    {
      title: 'iInsight: iPhone Market Intelligence',
      slug: 'i-insight',
      description:
        'Comprehensive data analysis of iPhone sales and consumer trends using Power BI. Transforming raw data into interactive dashboards and business insights.',
      image: '/assets/imgs/iphone.png',
      tags: ['BI', 'Analytics'],
      techStack: ['Power BI', 'DAX', 'Visualization'],
      githubUrl: 'https://github.com/Siddhu2708/Iphone-Data-Analysis-using-PowerBI.git',
    },
  ],
  skills: [
    { name: 'Python', icon: 'code-2' },
    { name: 'Deep Learning', icon: 'brain-circuit' },
    { name: 'Computer Vision', icon: 'eye' },
    { name: 'Cloud (AWS)', icon: 'cloud' },
    { name: 'Data Science', icon: 'database' },
    { name: 'Java', icon: 'terminal' },
    { name: 'Docker', icon: 'container' },
    { name: 'Power BI', icon: 'bar-chart-3' },
    { name: 'Git', icon: 'git-branch' },
    { name: 'Generative AI', icon: 'sparkles' },
  ],
  experience: [
    {
      type: 'work',
      title: 'Data Science Intern (Virtual)',
      organization: 'Syntecxhub',
      period: 'Jan 2026 - Feb 2026',
      description: [
        'Worked on data analysis and visualization tasks using real-world datasets.',
        'Extracted actionable insights through exploratory data analysis (EDA).',
        'Improved understanding of practical Data Science workflows and tools.',
      ],
    },
    {
      type: 'work',
      title: 'Artificial Intelligence Intern',
      organization: 'Codec Technologies Pvt. Ltd.',
      period: 'Oct 2025 - Jan 2026',
      description: [
        'Built foundational AI models using Python and modern libraries.',
        'Assisted in dashboard creation and complex data analysis tasks.',
        'Contributed to real-world AI project development and applications.',
      ],
    },
    {
      type: 'education',
      title: 'B.E. in AI & Data Science',
      organization: 'Dr. D. Y. Patil Institute of Technology, Pune',
      period: '2025 - 2028',
      description: [
        'Specializing in advanced AI architectures, Big Data analytics, and research-driven ML development.',
      ],
    },
    {
      type: 'work',
      title: 'Machine Learning Intern',
      organization: 'V Analytics Pvt. Ltd.',
      period: 'June 2024 - Aug 2024',
      description: [
        'Developed ML models and analyzed real-world datasets for business optimization.',
        'Applied Natural Language Processing (NLP) for customer feedback analysis.',
        'Gained hands-on experience in end-to-end ML workflows and data pipelines.',
      ],
    },
    {
      type: 'education',
      title: 'Diploma in AI & ML',
      organization: 'K.K. Wagh Polytechnic, Nashik',
      period: '2021 - 2024',
      description: [
        'Focusing on Deep Learning, Statistical Analysis, and Computer Architecture. Consistently in top 5% of class.',
      ],
    },
  ],
  research: [
    {
      badge: 'IEEE ESCI Conference',
      title: 'DeepAgroNet: CNN-Based Tomato Disease Detection',
      highlights: [
        'Built advanced CNN model for real-time disease detection from leaf images.',
        'Classified various plant diseases with high accuracy and robustness.',
        'Implemented automated image processing pipelines for seamless detection.',
      ],
      date: 'March 2026',
      role: 'Lead Author',
      paperUrl: 'https://ieeexplore.ieee.org/document/11493293',
    },
  ],
  certifications: [
    {
      category: 'AI & ML',
      title: 'Machine Learning Certificate',
      image: '/assets/imgs/machine learning certificate.png',
    },
    {
      category: 'GenAI',
      title: 'Agentic AI Workshop',
      image: '/assets/imgs/work shop agentix ai.jpg',
    },
    {
      category: 'Cloud',
      title: 'AWS Academy',
      image: '/assets/imgs/folio-2.jpg',
    },
  ],
};

export function isValidBundle(data) {
  return data && data.profile && typeof data.profile.name === 'string';
}
