import mongoose from 'mongoose';

const researchSchema = new mongoose.Schema(
  {
    badge: String,
    title: { type: String, required: true },
    highlights: [String],
    date: String,
    role: String,
    paperUrl: String,
    order: { type: Number, default: 0 },
  },
  { timestamps: true }
);

export default mongoose.model('Research', researchSchema);
