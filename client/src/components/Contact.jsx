import { useState } from 'react';
import { Mail, MapPin } from 'lucide-react';
import { api } from '../api/client';

export default function Contact({ profile }) {
  const [status, setStatus] = useState('idle');
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    try {
      await api.sendContact(form);
      setStatus('success');
      setForm({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setStatus('idle'), 3000);
    } catch {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 3000);
    }
  };

  const btnClass =
    status === 'success'
      ? 'bg-emerald-500'
      : status === 'error'
        ? 'bg-red-500'
        : 'bg-sky-500 hover:bg-sky-600';

  const btnText =
    status === 'sending' ? 'Sending...' : status === 'success' ? 'Message Sent!' : status === 'error' ? 'Error Sending!' : 'Send Message';

  return (
    <section id="contact" className="py-12 sm:py-16 md:py-24 px-4 sm:px-6 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-sky-500/5 blur-[120px] -z-10" />
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
          <div data-aos="fade-right">
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-4 sm:mb-6 font-heading">
              Let&apos;s build something <span className="text-sky-400">extraordinary</span> together.
            </h2>
            <p className="text-slate-400 mb-10 text-lg">Whether you have a question or just want to say hi, my inbox is always open.</p>
            <div className="space-y-6">
              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-xl bg-slate-800 flex items-center justify-center text-sky-400 group-hover:bg-sky-400 group-hover:text-dark transition-all">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-slate-500 text-xs font-bold uppercase">Email Me</p>
                  <a href={`mailto:${profile?.email}`} className="text-white hover:text-sky-400 transition-colors">{profile?.email}</a>
                </div>
              </div>
              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-xl bg-slate-800 flex items-center justify-center text-sky-400 group-hover:bg-sky-400 group-hover:text-dark transition-all">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-slate-500 text-xs font-bold uppercase">Location</p>
                  <p className="text-white">{profile?.location}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="glass-card p-8 rounded-3xl border border-slate-700/50" data-aos="fade-left">
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-500 uppercase px-1">Your Name</label>
                  <input type="text" name="name" value={form.name} onChange={handleChange} placeholder="Your name" required className="w-full bg-slate-800/50 border border-slate-700 rounded-xl px-4 py-3 focus:outline-none focus:border-sky-400 transition-all text-white" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-500 uppercase px-1">Email Address</label>
                  <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="Your email" required className="w-full bg-slate-800/50 border border-slate-700 rounded-xl px-4 py-3 focus:outline-none focus:border-sky-400 transition-all text-white" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-500 uppercase px-1">Subject</label>
                <input type="text" name="subject" value={form.subject} onChange={handleChange} placeholder="How can I help?" required className="w-full bg-slate-800/50 border border-slate-700 rounded-xl px-4 py-3 focus:outline-none focus:border-sky-400 transition-all text-white" />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-500 uppercase px-1">Message</label>
                <textarea rows={4} name="message" value={form.message} onChange={handleChange} placeholder="Your message" required className="w-full bg-slate-800/50 border border-slate-700 rounded-xl px-4 py-3 focus:outline-none focus:border-sky-400 transition-all text-white resize-none" />
              </div>
              <button type="submit" disabled={status === 'sending'} className={`w-full py-4 ${btnClass} text-white rounded-xl font-bold transition-all hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-sky-500/20 disabled:opacity-70`}>
                {btnText}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
