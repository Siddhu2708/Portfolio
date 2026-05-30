import 'dotenv/config';
import mongoose from 'mongoose';
import Profile from '../models/Profile.js';
import Project from '../models/Project.js';
import Skill from '../models/Skill.js';
import Experience from '../models/Experience.js';
import Research from '../models/Research.js';
import Certification from '../models/Certification.js';
import ChatKnowledge from '../models/ChatKnowledge.js';
import { connectDB } from '../config/db.js';

const uri = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/portfolio';

async function seed() {
  await connectDB(uri);

  await Promise.all([
    Profile.deleteMany(),
    Project.deleteMany(),
    Skill.deleteMany(),
    Experience.deleteMany(),
    Research.deleteMany(),
    Certification.deleteMany(),
    ChatKnowledge.deleteMany(),
  ]);

  await Profile.create({
    name: 'Siddharth Gaykhe',
    title: 'AI Engineer',
    tagline:
      'Student of Artificial Intelligence and Data Science at Dr. D. Y. Patil Institute of Technology.',
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
  });

  await Project.insertMany([
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
      order: 1,
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
      order: 2,
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
      order: 3,
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
      order: 4,
    },
  ]);

  await Skill.insertMany([
    { name: 'Python', icon: 'code-2', order: 1 },
    { name: 'Deep Learning', icon: 'brain-circuit', order: 2 },
    { name: 'Computer Vision', icon: 'eye', order: 3 },
    { name: 'Cloud (AWS)', icon: 'cloud', order: 4 },
    { name: 'Data Science', icon: 'database', order: 5 },
    { name: 'Java', icon: 'terminal', order: 6 },
    { name: 'Docker', icon: 'container', order: 7 },
    { name: 'Power BI', icon: 'bar-chart-3', order: 8 },
    { name: 'Git', icon: 'git-branch', order: 9 },
    { name: 'Generative AI', icon: 'sparkles', order: 10 },
    { name: 'MongoDB', icon: 'server', order: 11 },
    { name: 'Neural Networks', icon: 'network', order: 12 },
  ]);

  await Experience.insertMany([
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
      order: 1,
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
      order: 2,
    },
    {
      type: 'education',
      title: 'B.E. in AI & Data Science',
      organization: 'Dr. D. Y. Patil Institute of Technology, Pune',
      period: '2025 - 2028',
      description: [
        'Specializing in advanced AI architectures, Big Data analytics, and research-driven ML development.',
      ],
      order: 3,
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
      order: 4,
    },
    {
      type: 'education',
      title: 'Diploma in AI & ML',
      organization: 'K.K. Wagh Polytechnic, Nashik',
      period: '2021 - 2024',
      description: [
        'Focusing on Deep Learning, Statistical Analysis, and Computer Architecture. Consistently in top 5% of class.',
      ],
      order: 5,
    },
  ]);

  await Research.create({
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
    order: 1,
  });

  await Certification.insertMany([
    {
      category: 'AI & ML',
      title: 'Machine Learning Certificate',
      image: '/assets/imgs/machine learning certificate.png',
      order: 1,
    },
    {
      category: 'GenAI',
      title: 'Agentic AI Workshop',
      image: '/assets/imgs/work shop agentix ai.jpg',
      order: 2,
    },
    {
      category: 'Cloud',
      title: 'AWS Academy',
      image: '/assets/imgs/folio-2.jpg',
      order: 3,
    },
  ]);

  await ChatKnowledge.insertMany([
    {
      keywords: ['project', 'work', 'portfolio'],
      response:
        "Siddharth has developed several innovative AI projects: 1. AgriIntellect (Tomato Leaf Disease Detection using CNN), 2. HealthPredict (Women's Diabetes Risk Analysis), 3. AutoVision (Vehicle Detection using CNN), and 4. iInsight (iPhone Market Data Analysis using Power BI).",
    },
    {
      keywords: ['skill', 'know', 'tech', 'stack'],
      response:
        'Siddharth is proficient in Python, Java, Deep Learning (TensorFlow/Keras), Computer Vision, and Cloud Computing (AWS).',
    },
    {
      keywords: ['study', 'education', 'college', 'intern'],
      response:
        'Siddharth is currently pursuing a B.E. in AI & Data Science at Dr. D. Y. Patil Institute of Technology. He completed a Diploma at K.K. Wagh Polytechnic and has interned at Syntecxhub, Codec Technologies, and V Analytics.',
    },
    {
      keywords: ['research', 'paper', 'ieee', 'publication'],
      response:
        "Siddharth published 'DeepAgroNet: CNN-Based Tomato Disease Detection' at the IEEE ESCI Conference (March 2026), focusing on CNN models for automated leaf disease detection.",
    },
    {
      keywords: ['contact', 'email', 'reach', 'hire'],
      response: 'You can reach Siddharth at siddharthgaykhe08@gmail.com or via LinkedIn: linkedin.com/in/siddharthgaykhe',
    },
    {
      keywords: ['cv', 'resume', 'download'],
      response: "Download his resume using the 'Download CV' button in the hero section.",
    },
    {
      keywords: [],
      response:
        "That's a great question! Try asking about his projects, skills, research paper, or how to contact him.",
      isDefault: true,
    },
  ]);

  console.log('Database seeded successfully');
  await mongoose.disconnect();
}

seed().catch((err) => {
  console.error(err);
  process.exit(1);
});
