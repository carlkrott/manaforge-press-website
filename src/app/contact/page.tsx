import { Metadata } from 'next';
import { ContactForm } from '@/components/ContactForm';

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Get in touch with Manaforge Press — questions, press inquiries, collaboration proposals, or just to say hello.',
  alternates: { canonical: 'https://manaforge-press.vercel.app/contact' },
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-2xl px-4 sm:px-6 py-12 sm:py-16">
      <div className="text-center mb-8 sm:mb-12">
        <h1 className="text-3xl sm:text-4xl font-bold mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
          Contact Us
        </h1>
        <p className="text-text-muted max-w-lg mx-auto">
          Questions about our books? Press inquiry? Want to collaborate? Drop us a message and we&apos;ll get back to you.
        </p>
      </div>

      <ContactForm />
    </div>
  );
}
