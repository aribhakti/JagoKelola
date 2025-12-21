import { LucideIcon } from 'lucide-react';

export interface Feature {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface PricingTier {
  name: string;
  price: string;
  unit: string;
  description: string;
  features: string[];
  recommended?: boolean;
}

export interface PainPoint {
  problem: string;
  solution: string;
  icon: LucideIcon;
}

export interface Industry {
  name: string;
  description: string;
  icon: LucideIcon;
}