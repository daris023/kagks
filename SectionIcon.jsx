import {
  Target,
  ClipboardCheck,
  ShieldCheck,
  Award,
  Layers,
  Cog,
  TrendingUp,
  Scale,
  Users,
  Leaf,
} from "lucide-react";

const icons = {
  target: Target,
  clipboard: ClipboardCheck,
  shield: ShieldCheck,
  award: Award,
  layers: Layers,
  cog: Cog,
  trending: TrendingUp,
  scale: Scale,
  users: Users,
  leaf: Leaf,
};

export default function SectionIcon({ name, size = 22, className = "text-brand" }) {
  const Icon = icons[name] || ShieldCheck;
  return <Icon size={size} className={className} />;
}
