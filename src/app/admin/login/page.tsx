'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

const ADMIN_PASSWORD = process.env.NEXT_PUBLIC_ADMIN_PASSWORD || 'prashant2024';

export default function AdminLoginPage() {
  const router = useRouter();
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    setTimeout(() => {
      if (password === ADMIN_PASSWORD) {
        localStorage.setItem('phh_admin_token', 'authenticated');
        router.push('/admin/dashboard');
      } else {
        setError('Incorrect password. Please try again.');
        setLoading(false);
      }
    }, 600);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0A1628] to-[#0d2040] px-4">
      <div className="w-full max-w-md">
        {/* Logo */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-[#40c1b9]/20 border border-[#40c1b9]/30 mb-4">
            <span className="text-3xl">❤️</span>
          </div>
          <h1 className="text-white text-2xl font-bold">Prashant Heart Hospital</h1>
          <p className="text-white/50 text-sm mt-1">Admin Portal</p>
        </div>

        {/* Card */}
        <div className="bg-white rounded-3xl p-8 shadow-2xl">
          <h2 className="text-[#0A1628] text-xl font-semibold mb-1">Welcome back</h2>
          <p className="text-gray-500 text-sm mb-6">Enter your admin password to continue</p>

          {error && (
            <div className="mb-4 p-3 rounded-xl bg-red-50 border border-red-200 text-red-700 text-sm">
              {error}
            </div>
          )}

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-[#0A1628] text-sm font-medium mb-1.5">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                placeholder="Enter admin password"
                className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 text-[#0A1628] text-sm focus:outline-none focus:ring-2 focus:ring-[#40c1b9] focus:border-transparent transition-all"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3.5 rounded-xl bg-[#0A1628] text-white font-semibold text-sm hover:bg-[#0d2040] transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {loading ? (
                <>
                  <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                  </svg>
                  Signing in...
                </>
              ) : (
                'Sign In'
              )}
            </button>
          </form>

          <p className="text-center text-gray-400 text-xs mt-6">
            Default password: <span className="font-mono text-[#0A1628]">prashant2024</span>
          </p>
        </div>

        <p className="text-center text-white/30 text-xs mt-6">
          © 2024 Prashant Heart Hospital Pvt Ltd
        </p>
      </div>
    </div>
  );
}
