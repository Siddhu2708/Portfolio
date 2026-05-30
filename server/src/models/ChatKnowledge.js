import mongoose from 'mongoose';

const chatKnowledgeSchema = new mongoose.Schema(
  {
    keywords: [String],
    response: { type: String, required: true },
    isDefault: { type: Boolean, default: false },
  },
  { timestamps: true }
);

export default mongoose.model('ChatKnowledge', chatKnowledgeSchema);
