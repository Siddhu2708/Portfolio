import mongoose from 'mongoose';

const experienceSchema = new mongoose.Schema(
  {
    type: { type: String, enum: ['work', 'education'], default: 'work' },
    title: { type: String, required: true },
    organization: String,
    period: String,
    description: [String],
    order: { type: Number, default: 0 },
  },
  { timestamps: true }
);

export default mongoose.model('Experience', experienceSchema);
