import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Books',
  description: 'Browse all books from Manaforge Press — grimdark fantasy, LitRPG, progression fantasy, and dungeon crawler adventures.',
};

export default function BooksLayout({ children }: { children: React.ReactNode }) {
  return children;
}
