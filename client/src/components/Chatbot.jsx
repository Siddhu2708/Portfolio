import { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send } from 'lucide-react';
import { api, HAS_API } from '../api/client';
import { localChatReply } from '../utils/localChat';

const SUGGESTIONS = ['Tell me about projects', 'What are his skills?'];

export default function Chatbot() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([
    { role: 'ai', text: "Hi! I'm Siddharth's AI assistant. Ask me about his projects, skills, or research." },
  ]);
  const [typing, setTyping] = useState(false);
  const bottomRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, open]);

  const send = async (text) => {
    const msg = (text || input).trim();
    if (!msg || typing) return;
    setMessages((m) => [...m, { role: 'user', text: msg }]);
    setInput('');
    setTyping(true);
    try {
      let reply;
      if (HAS_API) {
        ({ reply } = await api.chat(msg));
      } else {
        reply = localChatReply(msg);
      }
      setTimeout(() => {
        setMessages((m) => [...m, { role: 'ai', text: reply }]);
        setTyping(false);
      }, 400);
    } catch {
      setTimeout(() => {
        setMessages((m) => [...m, { role: 'ai', text: localChatReply(msg) }]);
        setTyping(false);
      }, 400);
    }
  };

  return (
    <div id="ai-chat-bubble" className="fixed bottom-6 right-6 z-50">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="w-16 h-16 rounded-full bg-sky-500 text-white shadow-lg shadow-sky-500/40 flex items-center justify-center hover:scale-110 active:scale-95 transition-all relative overflow-hidden group"
      >
        <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity" />
        {open ? <X className="w-7 h-7" /> : <MessageSquare className="w-7 h-7" />}
      </button>
      <div
        id="chat-window"
        className={`absolute bottom-20 right-0 w-[calc(100vw-2rem)] sm:w-[350px] md:w-[400px] h-[500px] glass-card rounded-3xl border border-sky-400/30 flex flex-col shadow-2xl transition-all origin-bottom-right ${open ? 'active scale-100 opacity-100' : 'scale-0 opacity-0'}`}
      >
        <div className="p-6 border-b border-slate-700/50 flex items-center gap-4">
          <div className="w-10 h-10 rounded-full overflow-hidden border border-sky-400/30 bg-slate-800 flex items-center justify-center text-sky-400 font-bold text-xs">AI</div>
          <div>
            <h4 className="font-bold text-white leading-none">Ask Siddharth AI</h4>
            <div className="flex items-center gap-1.5 mt-1.5">
              <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
              <span className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">Always Online</span>
            </div>
          </div>
        </div>
        <div id="chat-messages" className="flex-grow overflow-y-auto p-6 space-y-4">
          {messages.map((m, i) => (
            <div key={i} className={`flex gap-3 ${m.role === 'user' ? 'flex-row-reverse' : ''}`}>
              <div className={`w-8 h-8 rounded-full shrink-0 flex items-center justify-center text-xs ${m.role === 'user' ? 'bg-sky-500 text-white' : 'bg-slate-800 text-sky-400'}`}>
                {m.role === 'user' ? 'You' : 'AI'}
              </div>
              <div className={`rounded-2xl p-4 text-sm max-w-[80%] leading-relaxed ${m.role === 'user' ? 'bg-sky-500/20 text-sky-100 border border-sky-500/30' : 'bg-slate-800/80 text-slate-300'}`}>
                {m.text}
              </div>
            </div>
          ))}
          {typing && (
            <div className="flex gap-3">
              <div className="w-8 h-8 rounded-full bg-slate-800 text-sky-400 flex items-center justify-center text-xs">AI</div>
              <div className="bg-slate-800/80 rounded-2xl px-4 py-3 text-slate-400 text-sm">Typing...</div>
            </div>
          )}
          <div ref={bottomRef} />
        </div>
        <div className="px-6 py-2 flex flex-wrap gap-2">
          {SUGGESTIONS.map((s) => (
            <button key={s} type="button" onClick={() => send(s)} className="chat-suggest text-[10px] font-bold text-sky-400 bg-sky-400/10 border border-sky-400/20 px-3 py-1.5 rounded-full hover:bg-sky-400/20 transition-colors">
              {s}
            </button>
          ))}
        </div>
        <div className="p-4 border-t border-slate-700/50">
          <div className="flex gap-2 bg-slate-900/50 border border-slate-700 rounded-2xl p-1.5">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && send()}
              placeholder="Type a question..."
              className="flex-grow bg-transparent border-none focus:outline-none px-4 py-2 text-sm text-white"
            />
            <button type="button" onClick={() => send()} className="w-10 h-10 rounded-xl bg-sky-500 text-white flex items-center justify-center hover:bg-sky-600 transition-colors">
              <Send className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
