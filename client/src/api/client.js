const API_BASE = import.meta.env.VITE_API_URL || '/api';
const HAS_API = Boolean(import.meta.env.VITE_API_URL);

async function request(path, options = {}) {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 8000);

  try {
    const res = await fetch(`${API_BASE}${path}`, {
      ...options,
      signal: controller.signal,
      headers: { 'Content-Type': 'application/json', ...options.headers },
    });

    const type = res.headers.get('content-type') || '';
    if (!type.includes('application/json')) {
      throw new Error('API unavailable');
    }

    const data = await res.json();
    if (!res.ok) throw new Error(data.message || 'Request failed');
    return data;
  } finally {
    clearTimeout(timeout);
  }
}

export { HAS_API };

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
