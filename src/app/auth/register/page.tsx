'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { supabase } from '@/lib/supabase';

export default function UserRegisterPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setLoading(true);
    setError('');
    setSuccess('');

    const { data, error } = await supabase.auth.signUp({
      email,
      password,
    });

    setLoading(false);

    if (error) {
      setError(error.message || 'Unable to register. Please try again.');
      return;
    }

    if (data.user) {
      setSuccess('Registration successful. Please check your email for verification.');
      setEmail('');
      setPassword('');
      return;
    }

    setSuccess('Registration request received. Please check your email to confirm your account.');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-100 px-4 py-10">
      <div className="w-full max-w-md bg-white rounded-3xl p-8 shadow-xl">
        <h1 className="text-2xl font-semibold text-slate-900 mb-4">Create an account</h1>
        <p className="text-sm text-slate-500 mb-6">Register with email and a secure password.</p>

        {error && (
          <div className="mb-4 rounded-xl bg-red-50 border border-red-200 p-4 text-sm text-red-700">
            {error}
          </div>
        )}
        {success && (
          <div className="mb-4 rounded-xl bg-emerald-50 border border-emerald-200 p-4 text-sm text-emerald-700">
            {success}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="you@example.com"
              className="w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder="Create a password"
              className="w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-2xl bg-[#0A1628] px-4 py-3 text-sm font-semibold text-white transition hover:bg-[#081724] disabled:opacity-70"
          >
            {loading ? 'Registering…' : 'Register'}
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-slate-500">
          Already have an account?{' '}
          <a href="/auth/login" className="font-semibold text-teal-600 hover:text-teal-700">
            Sign in
          </a>
        </p>
      </div>
    </div>
  );
}
