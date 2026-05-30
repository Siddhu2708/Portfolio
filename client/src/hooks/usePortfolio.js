import { useEffect, useState } from 'react';
import { api } from '../api/client';

const FALLBACK = {
  profile: {
    name: 'Siddharth Gaykhe',
    availability: 'Available for ML Internships & Research',
    tagline:
      'Student of Artificial Intelligence and Data Science at Dr. D. Y. Patil Institute of Technology.',
    about: [],
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
    typewriterStrings: ['AI Models.', 'Deep Learning Solutions.', 'Computer Vision Apps.'],
    githubStats: { stars: '50+', commits: '100+' },
  },
  projects: [],
  skills: [
    { name: 'Python', icon: 'code-2' },
    { name: 'Deep Learning', icon: 'brain-circuit' },
    { name: 'Generative AI', icon: 'sparkles' },
  ],
  experience: [],
  research: [],
  certifications: [],
};

export function usePortfolio() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        const bundle = await api.getBundle();
        if (!cancelled) setData(bundle);
      } catch (err) {
        if (!cancelled) {
          setError(err.message);
          setData(FALLBACK);
        }
      } finally {
        if (!cancelled) setLoading(false);
      }
    })();
    return () => { cancelled = true; };
  }, []);

  return { data: data || FALLBACK, loading, error };
}
