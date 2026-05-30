import {
  Code2, BrainCircuit, Eye, Cloud, Database, Terminal, Container,
  BarChart3, GitBranch, Sparkles, Server, Network,
} from 'lucide-react';

const map = {
  'code-2': Code2,
  'brain-circuit': BrainCircuit,
  eye: Eye,
  cloud: Cloud,
  database: Database,
  terminal: Terminal,
  container: Container,
  'bar-chart-3': BarChart3,
  'git-branch': GitBranch,
  sparkles: Sparkles,
  server: Server,
  network: Network,
};

export function getSkillIcon(name) {
  return map[name] || Sparkles;
}
