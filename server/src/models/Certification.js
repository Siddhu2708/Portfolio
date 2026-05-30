import mongoose from 'mongoose';

const certificationSchema = new mongoose.Schema(
  {
    category: String,
    title: { type: String, required: true },
    image: String,
    order: { type: Number, default: 0 },
  },
  { timestamps: true }
);

export default mongoose.model('Certification', certificationSchema);
