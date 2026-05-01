'use client';

import { useState } from 'react';

export function ContactForm() {
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    const form = e.currentTarget;
    const formData = new FormData(form);
    const data = {
      name: formData.get('name') as string,
      email: formData.get('email') as string,
      subject: formData.get('subject') as string,
      message: formData.get('message') as string,
    };

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      const result = await res.json();
      if (!res.ok) {
        setError(result.error || 'Something went wrong');
        return;
      }
      setIsSuccess(true);
    } catch {
      setError('An error occurred. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  if (isSuccess) {
    return (
      <div className="rounded-2xl glass-panel border border-border-subtle p-8 text-center">
        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-green-500/10 mb-4">
          <svg className="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
          </svg>
        </div>
        <h2 className="text-2xl font-bold text-text-primary mb-2" style={{ fontFamily: 'var(--font-heading)' }}>Message Sent!</h2>
        <p className="text-text-muted">We&apos;ll get back to you within 48 hours.</p>
      </div>
    );
  }

  return (
    <div className="rounded-2xl glass-panel border border-border-subtle p-8">
      <h2 className="text-2xl font-bold text-text-primary mb-6" style={{ fontFamily: 'var(--font-heading)' }}>Send us a Message</h2>

      {error && (
        <div className="mb-4 rounded-lg bg-red-500/10 border border-red-500/20 px-4 py-3 text-sm text-red-400">
          {error}
        </div>
      )}

      <form className="space-y-6" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-text-secondary mb-2">Name</label>
          <input
            type="text" id="name" name="name"
            className="w-full rounded-lg border border-border-subtle bg-bg-deep/50 px-4 py-3 text-white placeholder-text-dim focus:border-brand-amber focus:outline-none focus:ring-2 focus:ring-brand-amber/20 transition-colors"
            placeholder="Your name"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-text-secondary mb-2">Email</label>
          <input
            type="email" id="email" name="email" required
            className="w-full rounded-lg border border-border-subtle bg-bg-deep/50 px-4 py-3 text-white placeholder-text-dim focus:border-brand-amber focus:outline-none focus:ring-2 focus:ring-brand-amber/20 transition-colors"
            placeholder="you@example.com"
          />
        </div>
        <div>
          <label htmlFor="subject" className="block text-sm font-medium text-text-secondary mb-2">Subject</label>
          <select
            id="subject" name="subject"
            className="w-full rounded-lg border border-border-subtle bg-bg-deep/50 px-4 py-3 text-white focus:border-brand-amber focus:outline-none focus:ring-2 focus:ring-brand-amber/20 transition-colors"
          >
            <option>General Inquiry</option>
            <option>Book Question</option>
            <option>Press / Media</option>
            <option>Collaboration</option>
            <option>Other</option>
          </select>
        </div>
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-text-secondary mb-2">Message</label>
          <textarea
            id="message" name="message" rows={6} required minLength={10}
            className="w-full rounded-lg border border-border-subtle bg-bg-deep/50 px-4 py-3 text-white placeholder-text-dim focus:border-brand-amber focus:outline-none focus:ring-2 focus:ring-brand-amber/20 transition-colors"
            placeholder="How can we help?"
          />
        </div>
        <button
          type="submit" disabled={isLoading}
          className="w-full rounded-full bg-gradient-to-r from-brand-amber to-brand-gold px-6 py-3 text-base font-bold text-bg-deep hover:from-amber-400 hover:to-brand-amber transition-all disabled:opacity-50"
        >
          {isLoading ? 'Sending...' : 'Send Message'}
        </button>
      </form>
    </div>
  );
}
