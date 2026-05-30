import Profile from '../models/Profile.js';
import Project from '../models/Project.js';
import Skill from '../models/Skill.js';
import Experience from '../models/Experience.js';
import Research from '../models/Research.js';
import Certification from '../models/Certification.js';
import ContactMessage from '../models/ContactMessage.js';
import ChatKnowledge from '../models/ChatKnowledge.js';

export async function getProfile(req, res, next) {
  try {
    const profile = await Profile.findOne().lean();
    if (!profile) return res.status(404).json({ message: 'Profile not found' });
    res.json(profile);
  } catch (err) {
    next(err);
  }
}

export async function getProjects(req, res, next) {
  try {
    const projects = await Project.find({ featured: true }).sort('order').lean();
    res.json(projects);
  } catch (err) {
    next(err);
  }
}

export async function getSkills(req, res, next) {
  try {
    const skills = await Skill.find().sort('order').lean();
    res.json(skills);
  } catch (err) {
    next(err);
  }
}

export async function getExperience(req, res, next) {
  try {
    const items = await Experience.find().sort('order').lean();
    res.json(items);
  } catch (err) {
    next(err);
  }
}

export async function getResearch(req, res, next) {
  try {
    const items = await Research.find().sort('order').lean();
    res.json(items);
  } catch (err) {
    next(err);
  }
}

export async function getCertifications(req, res, next) {
  try {
    const items = await Certification.find().sort('order').lean();
    res.json(items);
  } catch (err) {
    next(err);
  }
}

export async function submitContact(req, res, next) {
  try {
    const { name, email, subject, message } = req.body;
    if (!name?.trim() || !email?.trim() || !subject?.trim() || !message?.trim()) {
      return res.status(400).json({ message: 'All fields are required' });
    }
    const entry = await ContactMessage.create({ name, email, subject, message });
    res.status(201).json({ message: 'Message sent successfully', id: entry._id });
  } catch (err) {
    next(err);
  }
}

export async function chat(req, res, next) {
  try {
    const text = (req.body.message || '').toLowerCase().trim();
    if (!text) return res.status(400).json({ message: 'Message is required' });

    const entries = await ChatKnowledge.find({ isDefault: false }).lean();
    let response = null;

    for (const entry of entries) {
      if (entry.keywords.some((kw) => text.includes(kw.toLowerCase()))) {
        response = entry.response;
        break;
      }
    }

    if (!response) {
      const fallback = await ChatKnowledge.findOne({ isDefault: true }).lean();
      response = fallback?.response || "I can help with Siddharth's projects, skills, research, and contact info.";
    }

    res.json({ reply: response });
  } catch (err) {
    next(err);
  }
}

export async function getPortfolioBundle(req, res, next) {
  try {
    const [profile, projects, skills, experience, research, certifications] = await Promise.all([
      Profile.findOne().lean(),
      Project.find({ featured: true }).sort('order').lean(),
      Skill.find().sort('order').lean(),
      Experience.find().sort('order').lean(),
      Research.find().sort('order').lean(),
      Certification.find().sort('order').lean(),
    ]);
    res.json({ profile, projects, skills, experience, research, certifications });
  } catch (err) {
    next(err);
  }
}
