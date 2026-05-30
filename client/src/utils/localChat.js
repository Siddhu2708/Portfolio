const REPLIES = [
  {
    keywords: ['project', 'work', 'portfolio'],
    text: "Siddharth has developed AgriIntellect (Tomato Disease AI), HealthPredict (Diabetes Analysis), AutoVision (Vehicle Detection), and iInsight (iPhone Market Analysis).",
  },
  {
    keywords: ['skill', 'know', 'tech'],
    text: 'Siddharth is proficient in Python, Deep Learning, Computer Vision, AWS, Data Science, Java, Docker, Power BI, Git, and Generative AI.',
  },
  {
    keywords: ['research', 'paper', 'ieee'],
    text: "He published 'DeepAgroNet: CNN-Based Tomato Disease Detection' at the IEEE ESCI Conference (March 2026).",
  },
  {
    keywords: ['contact', 'email', 'hire'],
    text: 'Reach Siddharth at siddharthgaykhe08@gmail.com or LinkedIn: linkedin.com/in/siddharthgaykhe',
  },
  {
    keywords: ['cv', 'resume'],
    text: "Use the 'Download CV' button in the hero section to get his resume.",
  },
];

export function localChatReply(message) {
  const text = message.toLowerCase();
  for (const r of REPLIES) {
    if (r.keywords.some((k) => text.includes(k))) return r.text;
  }
  return "Try asking about his projects, skills, research, or how to contact him.";
}
