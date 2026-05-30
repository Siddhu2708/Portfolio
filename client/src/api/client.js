const API_BASE = import.meta.env.VITE_API_URL || '/api';

async function request(path, options = {}) {
  const res = await fetch(`${API_BASE}${path}`, {
    headers: { 'Content-Type': 'application/json', ...options.headers },
    ...options,
  });
  const data = await res.json().catch(() => ({}));
  if (!res.ok) throw new Error(data.message || 'Request failed');
  return data;
}

export const api = {
  getBundle: () => request('/bundle'),
  getProfile: () => request('/profile'),
  getProjects: () => request('/projects'),
  getSkills: () => request('/skills'),
  getExperience: () => request('/experience'),
  getResearch: () => request('/research'),
  getCertifications: () => request('/certifications'),
  sendContact: (body) => request('/contact', { method: 'POST', body: JSON.stringify(body) }),
  chat: (message) => request('/chat', { method: 'POST', body: JSON.stringify({ message }) }),
};
