import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Sai Santosh | AI/ML Engineer | Generative AI & Machine Learning',
  description: 'Portfolio of Sai Santosh, an AI/ML Engineer specializing in Machine Learning, Generative AI, LLMs, RAG, AWS, MLOps, and Applied Artificial Intelligence.',
  openGraph: { title: 'Sai Santosh | AI/ML Engineer', description: 'Production machine learning, Generative AI, and Applied AI systems.', type: 'website' },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
