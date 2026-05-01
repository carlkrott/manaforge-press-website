'use client';

import { useState } from 'react';

export function NewsletterForm() {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    try {
      const res = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error || 'Something went wrong');
        return;
      }

      setIsSuccess(true);
      setEmail('');
    } catch {
      setError('An error occurred. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  if (isSuccess) {
    return (
      <div className="flex items-center justify-center gap-2 text-green-400">
        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
        </svg>
        <span className="font-semibold">Welcome to the forge! Check your inbox for a confirmation.</span>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        placeholder="your@email.com"
        className="flex-1 rounded-full border border-border-subtle bg-bg-deep/50 px-5 py-3 text-white placeholder-text-dim focus:border-brand-amber focus:outline-none focus:ring-2 focus:ring-brand-amber/20 transition-colors text-sm"
      />
      <button
        type="submit"
        disabled={isLoading}
        className="rounded-full bg-gradient-to-r from-brand-amber to-brand-gold px-6 py-3 text-sm font-bold text-bg-deep hover:from-amber-400 hover:to-brand-amber transition-all disabled:opacity-50"
      >
        {isLoading ? 'Subscribing...' : 'Subscribe'}
      </button>
      {error && <p className="text-red-400 text-sm sm:col-span-2 text-center">{error}</p>}
    </form>
  );
}
