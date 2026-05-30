import mongoose from 'mongoose';

const profileSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    title: String,
    tagline: String,
    availability: String,
    about: [String],
    email: String,
    location: String,
    linkedin: String,
    github: String,
    resumeUrl: String,
    profileImage: String,
    stats: [{ label: String, value: String }],
    typewriterStrings: [String],
    githubStats: { stars: String, commits: String },
  },
  { timestamps: true }
);

export default mongoose.model('Profile', profileSchema);
