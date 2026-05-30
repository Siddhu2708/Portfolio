import { Router } from 'express';
import {
  getProfile,
  getProjects,
  getSkills,
  getExperience,
  getResearch,
  getCertifications,
  submitContact,
  chat,
  getPortfolioBundle,
} from '../controllers/portfolioController.js';

const router = Router();

router.get('/bundle', getPortfolioBundle);
router.get('/profile', getProfile);
router.get('/projects', getProjects);
router.get('/skills', getSkills);
router.get('/experience', getExperience);
router.get('/research', getResearch);
router.get('/certifications', getCertifications);
router.post('/contact', submitContact);
router.post('/chat', chat);

export default router;
